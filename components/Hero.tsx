
import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section 
            id="hero" 
            className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://ibb.co/N61NtP9V')" }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative text-center text-white px-4 animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight">
                    Capturing Moments,
                </h1>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-cyan-400 mt-2">
                    Creating Legacy.
                </h2>
                <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
                    Welcome to my world through the lens. Explore a collection of stories, emotions, and beauty frozen in time.
                </p>
            </div>
            <style>{`
                @keyframes fade-in-up {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out forwards;
                }
            `}</style>
        </section>
    );
};
