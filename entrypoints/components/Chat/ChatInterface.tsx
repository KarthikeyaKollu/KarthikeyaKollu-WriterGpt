import React, { useState } from 'react';
import MessageList from './MessageList';
import ActionButtons from '../Buttons/ActionButtons';
import InputField from '../inputs/InputField';

interface Message {
    type: 'user' | 'ai'; // Defines the type of message: either from the user or the AI.
    content: string; // The content of the message.
}

interface ChatInterfaceProps {
    closeModal: () => void; // Callback function to close the chat modal.
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ closeModal }) => {
    const [messages, setMessages] = useState<Message[]>([]); // State to hold the array of messages.
    const [showButtons, setShowButtons] = useState<boolean>(false); // State to manage visibility of action buttons.
    const [inputValue, setInputValue] = useState(''); // State to manage the input field value.

    // Function to handle user message submission.
    const handleUserSubmit = (content: string) => {
        if (content.trim() && messages.length < 2) { // Checks for valid content and limits number of messages.
            setMessages(prev => [...prev, { type: 'user', content }]); // Add user message to the message list.
            setShowButtons(true); // Show action buttons after the first user message.

            // Simulate AI response after a delay.
            setTimeout(() => {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { type: 'ai', content: "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask." }
                ]);
            }, 500);
            setInputValue('')
        }

    };

    // Function to handle the insert action from the buttons.
    const handleInsert = () => {
        closeModal(); // Close the modal upon insertion.
        const element = document.querySelector('.msg-form__contenteditable') as HTMLElement; // Get the contenteditable element.
        if (element) {
            simulateTextInput(element, messages[1].content); // Simulate text input with the second message's content.
        }
    };

    // Simulates text input in the contenteditable element.
    const simulateTextInput = (element: HTMLElement, text: string) => {
        element.focus();
        document.execCommand('insertText', false, text); // Insert text at the current cursor position.
        // Dispatch input and change events to notify any listeners of the change.
        ['input', 'keydown', 'keyup', 'change'].forEach(event => {
            const customEvent = new Event(event, { bubbles: true, cancelable: true });
            element.dispatchEvent(customEvent);
        });
    };

    return (
        // Main container for the chat interface.
        <main className="flex flex-col items-end pb-5 px-5 text-sm bg-gray-50 rounded-2xl shadow-md max-w-full">
            <MessageList messages={messages} /> {/* Renders the list of messages */}
            <InputField onSubmit={handleUserSubmit} inputValue={inputValue} setInputValue={setInputValue} /> {/* Input field for user messages */}
            <ActionButtons
                showButtons={showButtons}
                handleInsert={handleInsert}
                handleUserSubmit={() => handleUserSubmit(inputValue)} // Submits the current input value as a message
            />
        </main>
    );
};

export default ChatInterface;
