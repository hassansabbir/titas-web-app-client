import React from "react";
import classNames from "classnames";

interface ButtonProps {
    children: React.ReactNode;
    variant: 'primary' | 'secondary' | 'tertiary';
    imageSrc: string; // Image source for each button variant
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant, imageSrc, onClick }) => {
    const baseStyle = 'py-8 px-14 relative font-semibold rounded-full  text-black transition-all duration-300 ease-in-out transform hover:scale-105';

    const variants = {
        primary: '#3490dc',
        secondary: '#6cb2eb',
        tertiary: '#38a169',
    };

    const buttonClass = classNames(
        baseStyle,
        `bg-cover bg-center bg-${variants[variant]}`,
        'hover:bg-opacity-80',
        'shadow-md',
        'flex items-center justify-center' // Center contents vertically and horizontally
    );

    return (
        <button
            className={buttonClass}
            style={{ backgroundImage: `url(${imageSrc})` }}
            onClick={onClick}
        >
            <img src={imageSrc} alt={`${variant} button`} className="hidden" /> {/* Hidden image for accessibility */}
            <span>{children}</span>
        </button>
    );
};

export default Button;
