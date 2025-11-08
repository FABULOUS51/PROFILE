
import React, { useEffect } from 'react';
import { Photograph } from '../types';

interface PhotoModalProps {
    photo: Photograph;
    onClose: () => void;
}

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const PhotoModal: React.FC<PhotoModalProps> = ({ photo, onClose }) => {

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="relative bg-gray-900 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row overflow-hidden animate-zoom-in"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-white/70 hover:text-white z-10 transition-colors"
                    aria-label="Close"
                >
                    <CloseIcon />
                </button>
                <div className="md:w-2/3 flex-shrink-0 bg-black flex items-center justify-center">
                    <img src={photo.src} alt={photo.alt} className="max-h-[90vh] w-auto h-auto object-contain" />
                </div>
                <div className="md:w-1/3 p-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-2 text-cyan-400">{photo.title}</h2>
                    <p className="text-gray-300 leading-relaxed">{photo.description}</p>
                </div>
            </div>
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }

                @keyframes zoom-in {
                    from { transform: scale(0.9); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-zoom-in { animation: zoom-in 0.3s ease-out forwards; }
            `}</style>
        </div>
    );
};
