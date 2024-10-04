
<div align="center">
  <img src="media/banner.png" alt="Banner" />
</div>

<p></p>






<div align="center" >
  <h1>LinkedIn AI Reply</h1>
  
  <p>Feel free to connect with me on the following platforms:</p>
<div>
  <a href="https://www.linkedin.com/in/karthikeyakollu/" target="_blank">
    <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=flat" height="35" alt="LinkedIn logo" />
  </a>
  <a href="mailto:karthikeyakollu8@gmain.com" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Gmail&logo=gmail&label=&color=D14836&logoColor=white&labelColor=&style=flat" height="35" alt="Gmail logo" />
  </a>
  <a href="https://twitter.com/karthikeya2412" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Twitter&logo=twitter&label=&color=1DA1F2&logoColor=white&labelColor=&style=flat" height="35" alt="Twitter logo" />
  </a>
  <a href="https://wa.me/+919346332404" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Whatsapp&logo=whatsapp&label=&color=25D366&logoColor=white&labelColor=&style=flat" height="35" alt="Whatsapp logo" />
  </a>
  <a href="https://www.instagram.com/karthikeya.kollu/" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Instagram&logo=instagram&label=&color=E4405F&logoColor=white&labelColor=&style=flat" height="35" alt="Instagram logo" />
  </a>
</div>

</div>

<div align="center" >
  <h1>WorkingDemo</h1>
</div>

[Chat Interface Overview](https://github.com/user-attachments/assets/3ddcb5f3-9583-4d00-bcf0-2b85db09f139)


# Approaches, Solutions, and Alternatives

1. **Styling with Shadow DOM**
   - Solution: Used Shadow DOM for styling and isolation.
   - Alternatives: Not aware of alternative approaches.

2. **Component Injection**
   - Initial Attempt: Injected the component directly into the contenteditable area.
   - Issue: Component was removed when the text was edited.
   - Solution: Injected the component into a side division, set it to absolute position, and adjusted for all screen sizes.
   - Alternatives:
     - Modify the editable area’s behavior.
     - Use JavaScript to prevent removal.

3. **Shadow DOM Usage**
   - Comparison: GPTWriter Chrome extension uses two shadow roots (one for the icon, one for the modal).
   - Solution: Opted for a simpler approach with a single shadow root.
   - Modal Positioning: Modal appears centered on the screen when the icon is clicked by positioning it relative to the body.

4. **Monitoring DOM Changes**
   - Solution: Used a MutationObserver to detect changes and ensure the component is appended to all text areas.
   - Alternatives: Use a set time interval to check for the presence of the element.

5. **LinkedIn URL Detection**
   - Solution: Used the Chrome extension manifest’s capability to check for the LinkedIn URL.
   - Alternatives: Use `window.location` to compare the URL (less optimized).

6. **Injecting Text**
   - Issue: Directly injecting text into the LinkedIn message field didn’t work well.
   - Solution: Dispatched simulated typing events to bypass this limitation.

7. **Component Visibility**
   - Solution: Added event listeners to show the component on input focus and hide it on blur.
   - Timing: The component appears within 100ms on focus and disappears after 500ms on blur. The 500ms delay ensures there’s enough time to interact with the component before it disappears.

These were the primary challenges I focused on; the rest of the logic and UI implementation is straightforward.

# Tools I Used

* Continue VS Code Extension
* Open Web UI for documentation search
* ClaudeAI for converting images to UI
* ChatGPT (used occasionally)


## UI Development

- Simulated LinkedIn’s static page to avoid slow reloads and improve speed.- React hooks.
- No context provider was used (though it would have been beneficial).
- Implemented one layer of prop drilling and child-to-parent data passing.





# Learning Curve and Development Process

* **Previous Experience:**
  * Before this project, I hadn't developed Chrome extensions using React. My experience was mainly with HTML, CSS, JavaScript, and Tailwind CSS for extension development.
  * I had only built one Chrome extension prior, called "Orain" which is now used by over 300 developers.

* **New Framework (WXT):**
  * WXT was new to me, so I spent around 1 hour understanding how it works and another hour setting up the project with React.
  * Although I was familiar with React, building a Chrome extension with it was a new experience, but the WXT framework made it much easier.
  * Overall, I spent around 2 hours working with the WXT framework.

* **UI Development:**
  * It took me 30–80 minutes to convert the Figma design into React code, using ClaudeAI for assistance.

* **Functionalities and Integration:**
  * I spent approximately 2 hours integrating all the functionalities, identifying limitations in my initial approach, and implementing alternative solutions.

* **Other Tasks:**
  * Video recording and editing took about 1 hour and 40 minutes.
  * Creating the README file took about 1 hour.

* **Total Time:**
  * The entire process took around 6 to 10 hours, with the majority of the time spent on problem-solving, thinking about better solutions, exploring alternatives, and working around limitations.

<h2>My Extension</h2>
<p>
  Orian (Ollama WebUI) is a Chrome extension that provides quick access to your favorite local Language Model (LLM) directly from your browser. With features like open-source chat integration, mail reply suggestions, and more, it's designed to enhance your browsing experience with AI capabilities.
</p>
<p>Here are the working demos:</p>
![Emsil](https://github.com/user-attachments/assets/a714bbe3-a146-4e7f-b096-da210b653383)
<p>You can find more at <a href="https://github.com/KarthikeyaKollu/Orian-Ollama-WebUI" target="_blank">this GitHub link</a>.</p>



## Folder Structure

```bash
wxt.config.ts
tailwind.config.js
postcss.config.cjs
test.py
README.md
public/
  ├── wxt.svg
  ├── icon/
  │   ├── 48.png
  │   ├── 128.png
  │   ├── 16.png
  │   ├── 32.png
  │   └── 96.png
package-lock.json
package.json
entrypoints/
  ├── popup/
  │   ├── App.tsx
  │   ├── main.tsx
  │   ├── index.html
  │   ├── App.css
  │   └── style.css
  ├── content.tsx
  ├── components/
  │   ├── App.tsx
  │   ├── Buttons/
  │   │   ├── ActionButtons.tsx
  │   │   └── ActionButton.tsx
  │   ├── Chat/
  │   │   ├── ChatInterface.tsx
  │   │   ├── MessageList.tsx
  │   │   └── MessageBubble.tsx
  │   ├── modals/
  │   │   └── Modal.tsx
  │   └── inputs/
  │       └── InputField.tsx
  └── WriterButton.tsx
  └── background.ts
tsconfig.json
assets/
  ├── regen.svg
  ├── index.css
  ├── insert.svg
  ├── send.svg
  ├── react.svg
  └── WriterIcon.svg
```
