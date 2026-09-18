import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/*
 * Global stylesheets are imported before App so that component CSS
 * modules are injected after them. Module rules then win over the
 * shared primitives in globals.css at equal specificity — without it,
 * `.frame` would override the positioning of the elements that use it.
 */
import './styles/variables.css';
import './styles/globals.css';

import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
