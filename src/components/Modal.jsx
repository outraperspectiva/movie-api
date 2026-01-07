import React from 'react';
import { useTranslation } from 'react-i18next';

const Modal = ({ isOpen, onClose, movie }) => {
    const { t } = useTranslation();
    if (!isOpen || !movie) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>

                <div className="modal-body">
                    <div className="modal-poster">
                        <img src={movie.poster} alt={movie.title} />
                    </div>
                    <div className="modal-info">
                        <h2>{movie.title}</h2>
                        <div className="modal-meta">
                            <span className="year-pill">{movie.year}</span>
                            <span className="category-pill">{movie.category}</span>
                        </div>
                        <p className="synopsis">{movie.overview || t('modal.noSynopsis')}</p>

                        <div className="credits">
                            <p><strong>{t('modal.director')}:</strong> {movie.director}</p>
                            <p><strong>{t('modal.cast')}:</strong> {movie.cast}</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.85);
                    backdrop-filter: blur(8px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    padding: 2rem;
                    animation: fadeIn 0.3s ease;
                }

                .modal-content {
                    background: linear-gradient(145deg, #1e293b, #0f172a);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 20px;
                    width: 100%;
                    max-width: 800px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                    animation: slideUp 0.3s ease;
                }

                .close-btn {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    color: white;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    font-size: 1.5rem;
                    line-height: 1;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                    z-index: 10;
                }

                .close-btn:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: rotate(90deg);
                }

                .modal-body {
                    display: flex;
                    gap: 2rem;
                    padding: 2rem;
                }

                .modal-poster {
                    flex-shrink: 0;
                    width: 300px;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }

                .modal-poster img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .modal-info {
                    color: white;
                    flex: 1;
                }

                .modal-info h2 {
                    margin: 0 0 1rem 0;
                    font-size: 2.5rem;
                    background: linear-gradient(to right, #fff, #94a3b8);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .modal-meta {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 2rem;
                }

                .year-pill, .category-pill {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 0.25rem 0.75rem;
                    border-radius: 9999px;
                    font-size: 0.9rem;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }

                .synopsis {
                    color: #94a3b8;
                    line-height: 1.6;
                    font-size: 1.1rem;
                    margin-bottom: 2rem;
                }

                .credits p {
                    margin: 0.5rem 0;
                    color: #e2e8f0;
                }

                .credits strong {
                    color: #94a3b8;
                    margin-right: 0.5rem;
                }

                @media (max-width: 768px) {
                    .modal-body {
                        flex-direction: column;
                        padding: 1.5rem;
                    }
                    
                    .modal-poster {
                        width: 100%;
                        max-width: 200px;
                        margin: 0 auto;
                    }

                    .modal-info {
                        text-align: center;
                    }

                    .modal-meta {
                        justify-content: center;
                    }

                    .modal-info h2 {
                        font-size: 1.8rem;
                    }
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default Modal;
