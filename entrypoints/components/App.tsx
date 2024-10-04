import React from 'react';
import '../../assets/index.css';
import WriterButton from './WriterButton';

// Define props type for App component
interface AppProps {
  ele: HTMLElement; // Reference to the target element where the WriterButton will be displayed.
}

const App: React.FC<AppProps> = ({ ele }) => {
  // Handles key down events, specifically to prevent the Backspace key from propagating.
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Backspace') {
      event.stopPropagation(); // Prevents the default behavior of the Backspace key.
    }
  };

  return (
    // Main container for the App component, positioned absolutely at the bottom-right of its parent.
    <div className='absolute right-[5.5rem] bottom-[1.5rem] z-50' onKeyDown={handleKeyDown}>
      <WriterButton ele={ele} /> {/* Renders the WriterButton component, passing the target element as a prop */}
    </div>
  );
}

export default App;
