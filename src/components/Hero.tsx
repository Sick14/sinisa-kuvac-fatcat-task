import React from 'react';

interface HeroProps {
    title: string;
    subtitle: string;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="mt-4 text-lg">{subtitle}</p>
        </div>
    );
};
