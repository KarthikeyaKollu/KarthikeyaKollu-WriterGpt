import WriiterIcon from '../../assets/WriterIcon.svg';
import Modal from './modals/Modal';
import React, { useEffect, useRef, useState } from 'react'; // Ensure necessary imports are included

interface WriterButtonProps {
    ele: HTMLElement; // Reference to the target element where the writer button will be displayed.
}

const WriterButton: React.FC<WriterButtonProps> = ({ ele }) => {
    const [showModal, setShowModal] = useState<boolean>(false); // State to manage the visibility of the modal.
    const [showWriterButton, setShowWriterButton] = useState<boolean>(false); // State to manage the visibility of the writer button.
    const targetElementRef = useRef<HTMLElement | null>(null); // Create a ref for the target element.

    // Toggles the visibility of the modal.
    const show = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        targetElementRef.current = ele.querySelector(".msg-form__contenteditable") as HTMLElement; // Select the contenteditable element.
        const targetElement = targetElementRef.current;

        if (targetElement) {
            // Check if the target element is focused initially
            setShowWriterButton(document.activeElement === targetElement);

            const handleFocus = () => {
                setTimeout(() => {
                    setShowWriterButton(true); // Show the writer button when focused.
                }, 100); // Waits 100ms before showing.
            };

            const handleBlur = () => {
                setTimeout(() => {
                    setShowWriterButton(false); // Hide the writer button when blurred.
                }, 500); // Waits 500ms before hiding.
            };

            // Add focus and blur listeners
            targetElement.addEventListener('focus', handleFocus);
            targetElement.addEventListener('blur', handleBlur);

            // Clean up event listeners on component unmount
            return () => {
                targetElement.removeEventListener('focus', handleFocus);
                targetElement.removeEventListener('blur', handleBlur);
            };
        }
    }, [ele]); // Include `ele` in the dependency array for useEffect.

    return (
      <>
        {showWriterButton && (
          <div
            className="flex items-center w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 justify-center bg-white shadow-sm rounded-full p-2 sm:p-2 cursor-pointer"
            onClick={show} // Opens the modal when clicked.
          >
            <img src={WriiterIcon} alt="pop" className="w-full h-full object-contain" />
          </div>
        )}

        {showModal && <Modal closeModal={show} />} {/* Renders the Modal component if showModal is true */}
      </>
    );
};

export default WriterButton;
