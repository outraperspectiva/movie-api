import React from 'react';
import { useTranslation } from 'react-i18next';

const CategoryList = ({ categories, selectedCategory, onSelectCategory }) => {
  const { t } = useTranslation();
  return (
    <div className="category-list-container">
      <div className="category-list">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-pill ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.id === 'all' ? t('categories.all') : category.name}
          </button>
        ))}
      </div>

      <style>{`
        .category-list-container {
          width: 100%;
          overflow-x: auto;
          padding: 1rem 0;
          -webkit-overflow-scrolling: touch;
          margin-bottom: 2rem;
        }

        .category-list {
          display: flex;
          gap: 1rem;
          padding: 0 0.5rem;
          min-width: min-content;
        }

        .category-pill {
          background: var(--card-bg);
          border: var(--glass-border);
          color: var(--text-color);
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          cursor: pointer;
          white-space: nowrap;
          transition: var(--transition);
          font-weight: 500;
          backdrop-filter: blur(10px);
        }

        .category-pill:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-1px);
        }

        .category-pill.active {
          background: var(--primary-color);
          border-color: var(--primary-color);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
        }
      `}</style>
    </div>
  );
};

export default CategoryList;
