interface InputFieldProps {
    onSubmit: (content: string) => void; // Callback function to handle the submission of input value.
    inputValue: string; // The current value of the input field.
    setInputValue: React.Dispatch<React.SetStateAction<string>>; // Function to update the input field value.
}

const InputField: React.FC<InputFieldProps> = ({ onSubmit, inputValue, setInputValue }) => {
    // Handles form submission and prevents the default behavior.
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevents the default form submission behavior.
        if (inputValue.trim()) { // Checks if the input is not empty or just whitespace.
           
            onSubmit(inputValue); // Calls the onSubmit function with the current input value.
            setInputValue("")
        }
    };

    return (
        // Form for user input, styled with flexbox.
        <form
            className="flex gap-1 justify-center mt-5 w-full text-xl md:text-2xl font-medium text-gray-500 rounded-lg shadow-sm"
            onSubmit={handleSubmit} // Attaches the handleSubmit function to the form's submit event.
        >
            <label htmlFor="userPrompt" className="sr-only">Your prompt</label> {/* Accessible label for the input field */}
            <input
                type="text"
                id="userPrompt" // Unique identifier for the input field.
                value={inputValue} // Binds the input field value to the inputValue prop.
                onChange={(e) => setInputValue(e.target.value)} // Updates inputValue state on change.
                className="flex-1 px-3 py-2 w-full bg-white rounded-lg border border-solid border-neutral-300 focus:outline-none focus:border-blue-500 h-[40px] text-xl md:text-2xl"
                placeholder="Your prompt" // Placeholder text for the input field.
            />
        </form>
    );
};

export default InputField;
