import { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';
//import { HomePage } from './pages/HomePage';
//import LoginPage from './pages/auth/LoginPage';
import './assets/globals.css';
import RouterConfig from './router/RouterConfig';

createRoot(document.getElementById('root')!).render(
 <StrictMode>
  <RouterConfig />
 </StrictMode>
 );