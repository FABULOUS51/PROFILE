
import React, { useRef } from 'react';
import { Photograph } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface GalleryProps {
    photos: Photograph[];
    onPhotoClick: (photo: Photograph) => void;
}

interface PhotoCardProps {
    photo: Photograph;
    onClick: () => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onClick }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

    const getRowSpan = (height: number) => {
        if (height > 1000) return 'row-span-3';
        if (height > 800) return 'row-span-2';
        return 'row-span-1';
    };

    return (
        <div
            ref={ref}
            className={`
                group relative overflow-hidden rounded-lg cursor-pointer 
                transition-all duration-700 ease-in-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                ${getRowSpan(photo.height)}
            `}
            onClick={onClick}
        >
            <img 
                src={photo.src} 
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <h3 className="text-white text-lg font-bold text-center">{photo.title}</h3>
            </div>
        </div>
    );
};

export const Gallery: React.FC<GalleryProps> = ({ photos, onPhotoClick }) => {
    return (
        <section id="gallery" className="container mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-4">
                {photos.map(photo => (
                    <PhotoCard key={photo.id} photo={photo} onClick={() => onPhotoClick(photo)} />
                ))}
            </div>
        </section>
    );
};
