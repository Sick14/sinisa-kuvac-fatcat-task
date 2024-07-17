import React from 'react';
import Marquee from 'react-fast-marquee';

interface TrustBarProps {
    trustText: string;
}

export const TrustBar: React.FC<TrustBarProps> = ({ trustText }) => {
    return (
        <Marquee>
            <div className="flex items-center space-x-4">
                <span className="font-bold">{trustText}</span>
            </div>
        </Marquee>
    );
};
