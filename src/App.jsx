import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { getCategories, getMovies } from './services/tmdbApi';
import CategoryList from './components/CategoryList';
import MovieList from './components/MovieList';
import Login from './components/Login';
import './App.css';

// Protected Route Component
const ProtectedRoute = () => {
  // Authentication paused by user request
  // const { user, loading } = useAuth();

  // if (loading) {
  //   return <div className="loading-container"><div className="spinner"></div></div>;
  // }

  // if (!user) {
  //   return <Navigate to="/login" replace />;
  // }

  return <Outlet />;
};

function Dashboard() {
  const { logout, user } = useAuth();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const cats = await getCategories();
      setCategories(cats);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const movs = await getMovies(selectedCategory);
      setMovies(movs);
      setLoading(false);
    };
    fetchMovies();
  }, [selectedCategory]);

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <div>
            <h1>MovieVault</h1>
            <p>Premium Entertainment</p>
          </div>
          <div className="user-info">
            <span>Welcome, {user?.name}</span>
            <button onClick={logout} className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      <main>
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <MovieList movies={movies} />
        )}
      </main>

      <style>{`
        .app-header {
            margin-bottom: 2rem;
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .user-info {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: var(--text-color);
        }

        .logout-btn {
            background: rgba(239, 68, 68, 0.2);
            color: #ef4444;
            border: 1px solid rgba(239, 68, 68, 0.3);
            padding: 0.5rem 1rem;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
        }

        .logout-btn:hover {
            background: rgba(239, 68, 68, 0.3);
        }

        .app-header h1 {
            font-size: 2.5rem;
            margin: 0;
            background: linear-gradient(to right, #3b82f6, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 800;
            letter-spacing: -1px;
        }

        .app-header p {
            color: var(--secondary-color);
            margin: 0.5rem 0 0 0;
            font-size: 1rem;
        }

        .loading-container {
            display: flex;
            justify-content: center;
            padding: 3rem;
        }

        .spinner {
            width: 40px;
            height: 40px;
            border: 3px solid rgba(59, 130, 246, 0.3);
            border-radius: 50%;
            border-top-color: var(--primary-color);
            animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
