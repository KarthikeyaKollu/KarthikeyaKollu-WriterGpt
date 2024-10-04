import React from 'react';
interface Message {
    type: 'user' | 'ai';
    content: string;
}

interface MessageBubbleProps {
    type: Message['type'];
    content: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ type, content }) => {
    const bubbleClass = type === 'user'
        ? "py-4 pl-2 pr-8 rounded-lg bg-zinc-200 max-w-[85%] md:max-w-[80%] lg:max-w-[80%] font-sans"
        : "p-4 bg-blue-100 rounded-lg max-w-[85%] md:max-w-[80%] lg:max-w-[80%] font-sans";

    const wrapperClass = type === 'ai'
        ? "flex flex-col items-start mt-5 w-full leading-7 text-gray-500"
        : "flex flex-col items-end mt-5 w-full";

    const textClass = "text-gray-500 text-xl md:text-2xl ";

    return (
        <div className={wrapperClass}>
            <div className={`${bubbleClass} ${textClass}`}>
                {content}
            </div>
        </div>
    );
};

export default MessageBubble;
