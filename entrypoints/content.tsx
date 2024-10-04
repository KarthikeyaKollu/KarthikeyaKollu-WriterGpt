import ReactDOM from "react-dom/client";
import App from "./components/App";
import '../assets/index.css';


interface ShadowRootUi {
  name: string; // Name of the UI for identification.
  position: "inline" | "overlay"; // Positioning of the UI relative to the target element.
  anchor: HTMLElement; // The target element to which the UI will be attached.
  append: "first" | "last"; // Determines where to append the UI in the target element.
  onMount: (container: HTMLElement) => { root: ReactDOM.Root; wrapper: HTMLElement }; // Function to run on mount.
  onRemove: (elements: { root: ReactDOM.Root; wrapper: HTMLElement }) => void; // Function to run on removal.
}

// Main content script definition
export default defineContentScript({
  matches: ["http://127.0.0.1:5500/index.html", "https://www.linkedin.com/*"], // URLs where the script will be injected.
  cssInjectionMode: "ui", // CSS injection mode for styling the UI.
  async main(ctx) { // Main function for processing the content script.
    const processedElements = new Set<HTMLElement>(); // Track already processed elements.

    // Function to process a target element
    const processElement = async (targetElement: HTMLElement) => {
      // Skip elements that are already processed
      if (processedElements.has(targetElement)) return;
      processedElements.add(targetElement); // Mark this element as processed

      const ui = await createShadowRootUi(ctx, {
        name: "wxt-react-example", // Name of the UI component.
        position: "inline", // Positioning of the UI component.
        anchor: targetElement, // The target element where the UI will be mounted.
        append: "first", // Append the UI at the beginning of the target element.
        onMount: (container: HTMLElement) => {
          // Create a wrapper div for React and append to the container
          const wrapper = document.createElement("div");
          container.append(wrapper); // Append the wrapper to the container.

          const root = ReactDOM.createRoot(wrapper); // Create a React root.
          root.render(<App ele={targetElement} />); // Render the App component.
          return { root, wrapper }; // Return the root and wrapper for later use.
        },
        onRemove: (elements: { root: ReactDOM.Root; wrapper: HTMLElement }) => {
          // Unmount and remove the UI when necessary
          elements?.root.unmount();
          elements?.wrapper.remove();
        },
      });

      ui.mount(); // Mount the UI.
      processedElements.add(targetElement); // Mark this element as processed.
    };

    // MutationObserver for dynamically added elements
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              const targetElements = node.querySelectorAll<HTMLElement>(".msg-form__message-texteditor");
              targetElements.forEach((targetElement) => {
                processElement(targetElement); // Process each target element found.
              });
            }
          });
        }
      }
    });

    // Start observing the document body for added nodes
    observer.observe(document.body, {
      childList: true,
      subtree: true, // Observe the entire DOM tree for added nodes.
    });

    // Uncomment if you'd like an interval to capture initially present elements
    // setInterval(() => {
    //   const targetElements = document.querySelectorAll<HTMLElement>(".msg-form__message-texteditor");
    //   targetElements.forEach((targetElement) => {
    //     processElement(targetElement); // Process each initially present target element.
    //   });
    // }, 500);
  },
});
