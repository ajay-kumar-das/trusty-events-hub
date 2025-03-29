
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Find the root element, then render the app
const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    createRoot(rootElement).render(<App />);
    console.log("App successfully rendered");
  } catch (error) {
    console.error("Error rendering the application:", error);
    rootElement.innerHTML = '<div style="padding: 20px; text-align: center;"><h2>Something went wrong</h2><p>Please try refreshing the page.</p></div>';
  }
} else {
  console.error("Root element not found! Make sure there is a div with id 'root' in the HTML.");
  document.body.innerHTML = '<div style="padding: 20px; text-align: center;"><h2>Application Error</h2><p>Root element not found. Please contact support.</p></div>';
}
