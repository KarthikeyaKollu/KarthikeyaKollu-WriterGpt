import ChatInterface from "../Chat/ChatInterface";

interface ModalProps {
  closeModal: () => void; // Callback function to close the modal.
}

export const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  useEffect(() => {
    // Disable scrolling on the body when the modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      // Re-enable scrolling when the modal is closed
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    // Modal overlay that covers the entire viewport.
    <div
      className="fixed top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center z-[99999] bg-black/10 backdrop-blur-[1px] select-none overscroll-none"
      onClick={closeModal} // Clicking the background closes the modal.
    >
      <div
        className="w-[500px] relative"
        onClick={(e) => e.stopPropagation()} // Prevents clicks inside the modal content from closing the modal.
      >
        <ChatInterface closeModal={closeModal} /> {/* Renders the ChatInterface component, passing the closeModal prop */}
      </div>
    </div>
  );
};

export default Modal;
