import { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';
//import { HomePage } from './pages/HomePage';
//import LoginPage from './pages/auth/LoginPage';
import './assets/globals.css';
import RouterConfig from './router/RouterConfig';
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')!).render(
 <StrictMode>
    <Toaster
     richColors 
    closeButton/>
  <RouterConfig />
 </StrictMode>
 );