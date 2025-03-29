
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Find the root element, then render the app
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found! Make sure there is a div with id 'root' in the HTML.");
}
