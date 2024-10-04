import React from 'react';

interface ActionButtonProps {
    type: 'generate' | 'insert' | 'regenerate';
    text: string;
    onClick: () => void;
    iconSrc: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ type, text, onClick, iconSrc }) => {
    const buttonClass = type === 'insert'
        ? "flex gap-2 px-2 py-1.5 text-gray-500 rounded-md border-2 border-gray-500 border-solid text-xl md:text-2xl cursor-pointer"
        : "flex gap-2 justify-center px-3 py-2 text-white bg-blue-500 rounded-md text-xl md:text-2xl cursor-pointer";

    const iconClass = "object-contain my-auto aspect-[0.71] w-4";

    return (
        <button className={buttonClass} onClick={onClick} disabled={type === 'regenerate'}>
            <img loading="lazy" src={iconSrc} alt={text} className={iconClass} />
            <span className="text-xl md:text-2xl">{text}</span>
        </button>
    );
};
export default ActionButton;
