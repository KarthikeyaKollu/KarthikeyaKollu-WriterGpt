import React, { useState } from 'react';
import sendIcon from '../../assets/send.svg'; // Importing the send icon
import regenIcon from '../../assets/regen.svg'; // Importing the regenerate icon
import insertIcon from '../../assets/insert.svg'; // Importing the insert icon

// Types
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

interface InputFieldProps {
    onSubmit: (content: string) => void;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<InputFieldProps> = ({ onSubmit, inputValue, setInputValue }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSubmit(inputValue);
        }
    };

    return (
        <form className="flex gap-1 justify-center mt-5 w-full text-xl md:text-2xl font-medium text-gray-500 rounded-lg shadow-sm"
            onSubmit={handleSubmit}>
            <label htmlFor="userPrompt" className="sr-only">Your prompt</label>
            <input
                type="text"
                id="userPrompt"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 px-3 py-2 w-full bg-white rounded-lg border border-solid border-neutral-300 focus:outline-none focus:border-blue-500 h-[40px] text-xl md:text-2xl"
                placeholder="Your prompt"
            />
        </form>
    );
};

interface ActionButtonProps {
    type: 'generate' | 'insert' | 'regenerate';
    text: string;
    onClick: () => void;
    iconSrc: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ type, text, onClick, iconSrc }) => {
    const buttonClass = type === 'insert'
        ? "flex gap-2 px-2 py-1.5 text-gray-500 rounded-md border-2 border-gray-500 border-solid text-xl md:text-2xl"
        : "flex gap-2 justify-center px-3 py-2 text-white bg-blue-500 rounded-md text-xl md:text-2xl";

    const iconClass = "object-contain my-auto aspect-[0.71] w-4";

    return (
        <button className={buttonClass} onClick={onClick} disabled={type === 'regenerate'}>
            <img loading="lazy" src={iconSrc} alt={text} className={iconClass} />
            <span className="text-xl md:text-2xl">{text}</span>
        </button>
    );
};

interface ChatInterfaceProps {
    closeModal: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ closeModal }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [showButtons, setShowButtons] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleUserSubmit = (content: string) => {
        if (content.trim() && messages.length < 2) {
            setMessages(prev => [...prev, { type: 'user', content }]);
            setShowButtons(true);

            setTimeout(() => {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { type: 'ai', content: "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask." }
                ]);
            }, 1000);
        }
    };

    const handleInsert = () => {
        closeModal();
        const element = document.querySelector('.msg-form__contenteditable') as HTMLElement;
        if (element) {
            simulateTextInput(element, messages[1].content);
        }
    };

    const simulateTextInput = (element: HTMLElement, text: string) => {
        element.focus();
        document.execCommand('insertText', false, text);
        ['input', 'keydown', 'keyup', 'change'].forEach(event => {
            const customEvent = new Event(event, { bubbles: true, cancelable: true });
            element.dispatchEvent(customEvent);
        });
    };

    return (
        <main className="flex flex-col items-end pb-5 px-5 text-sm bg-gray-50 rounded-2xl shadow-md max-w-full">
            {messages.map((message, index) => (
                <MessageBubble key={index} type={message.type} content={message.content} />
            ))}
            <InputField onSubmit={handleUserSubmit} inputValue={inputValue} setInputValue={setInputValue} />
            <section className="flex gap-5 items-start mt-5 font-medium whitespace-nowrap">
                {showButtons ? (
                    <>
                        <ActionButton type="insert" text="Insert" onClick={handleInsert} iconSrc={insertIcon} />
                        <ActionButton type="regenerate" text="Regenerate" onClick={() => {}} iconSrc={regenIcon} />
                    </>
                ) : (
                    <ActionButton type="generate" text="Generate" onClick={() => handleUserSubmit(inputValue)} iconSrc={sendIcon} />
                )}
            </section>
        </main>
    );
};

export default ChatInterface;
