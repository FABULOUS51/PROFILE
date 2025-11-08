
import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const About: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });

    return (
        <section id="about" className="py-24 bg-gray-900">
            <div 
                ref={sectionRef}
                className={`container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="md:w-1/3 flex-shrink-0">
                    <img 
                        src="https://picsum.photos/seed/profile/500/500" 
                        alt="Photographer's portrait"
                        className="rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto object-cover shadow-2xl shadow-cyan-500/20"
                    />
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-cyan-400 text-lg font-semibold mb-6">Storyteller, Explorer, Photographer</p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        I'm a passionate photographer with a love for capturing the fleeting moments that tell a larger story. My journey began with a simple film camera, and since then, I've traveled the world, seeking out the beauty in both the epic and the mundane.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        For me, photography is more than just taking pictures; it's about connection. It's about connecting with people, with nature, and with the essence of a moment. I hope my work resonates with you and inspires you to see the world a little differently.
                    </p>
                </div>
            </div>
        </section>
    );
};
