import React from 'react';
import MessageBubble from './MessageBubble';

interface Message {
    type: 'user' | 'ai';
    content: string;
}

interface MessageListProps {
    messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
    return (
        <>
            {messages.map((message, index) => (
                <MessageBubble key={index} type={message.type} content={message.content} />
            ))}
        </>
    );
};

export default MessageList;
