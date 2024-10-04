<div align="center">
  ![Banner](media/banner.png)
</div>


<div align="center">
  <h1>LinkedIn AI Reply</h1>
  <a href="https://www.linkedin.com/in/karthikeyakollu/" target="_blank">
    <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=flat" height="35" alt="LinkedIn logo" />
  </a>
  <a href="mailto:mail@karthikeyakollu.me" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Gmail&logo=gmail&label=&color=D14836&logoColor=white&labelColor=&style=flat" height="35" alt="Gmail logo" />
  </a>
  <a href="https://twitter.com/karthikeya2412" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Twitter&logo=twitter&label=&color=1DA1F2&logoColor=white&labelColor=&style=flat" height="35" alt="Twitter logo" />
  </a>
  <img src="https://img.shields.io/static/v1?message=dev.to&logo=dev.to&label=&color=0A0A0A&logoColor=white&labelColor=&style=flat" height="35" alt="Dev.to logo" />
  <a href="https://wa.me/+919346332404" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Whatsapp&logo=whatsapp&label=&color=25D366&logoColor=white&labelColor=&style=flat" height="35" alt="Whatsapp logo" />
  </a>
  <a href="https://www.instagram.com/karthikeya.kollu/" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Instagram&logo=instagram&label=&color=E4405F&logoColor=white&labelColor=&style=flat" height="35" alt="Instagram logo" />
  </a>
</div>

## Solution Approaches and Alternatives

1. **Styling with Shadow DOM**: I used the Shadow DOM for styling and isolation. An alternative approach could involve other encapsulation methods.
2. **Component Injection**: Initially, I tried injecting the component directly into the `contenteditable` area, but it was removed when the text was edited. My solution was to inject the component into a side division, set it to absolute position, and adjust for all screen sizes.
3. **Shadow DOM Usage**: While the GPTWriter Chrome extension uses two shadow roots, I opted for a single shadow root, making the modal appear centered on the screen when the icon is clicked.
4. **Monitoring DOM Changes**: I used a `MutationObserver` to detect changes. An alternative approach could be using a timed interval to check for the element.
5. **LinkedIn URL Detection**: I used Chrome extension manifest capabilities to detect the LinkedIn URL, although using `window.location` is another, less optimized option.
6. **Injecting Text**: Injecting text directly into the LinkedIn message field didn't work well, so I dispatched simulated typing events.
7. **Component Visibility**: I added event listeners to show the component on focus and hide it after 500ms on blur, ensuring users have time to interact with it.

## UI Development

- **React hooks** were used for state management.
- No context provider was used (though it would have been beneficial).
- Implemented one layer of prop drilling and child-to-parent data passing.

## Development Environment

- Simulated LinkedIn’s static page to avoid slow reloads and improve speed.

## Learning Curve and Development Process

- **Previous Experience**:
  - This was my first time developing a Chrome extension using React. Before this, I had experience with HTML, CSS, JavaScript, and Tailwind CSS.
  - I had previously built only one other extension, "Orain," which is now used by over 300 developers.
- **WXT Framework**:
  - I spent around 2 hours understanding and setting up WXT with React.
  - Despite my familiarity with React, building an extension was a new experience.
- **UI Development**:
  - It took me 30–80 minutes to convert the Figma design into React code, with help from ClaudeAI.
- **Functionalities and Integration**:
  - I spent about 2 hours integrating functionalities, troubleshooting limitations, and implementing alternatives.
- **Other Tasks**:
  - Video recording and editing: 1 hour 40 minutes.
  - Creating the README file: 1 hour.
- **Total Time**:
  - The project took around 6–10 hours, mostly focused on problem-solving and exploring solutions.

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
