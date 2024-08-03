import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from './theme/ThemeProvider'; // Importa el proveedor de tema
import './i18n'; // Importa la configuración de i18next
import App from './App';
import '@fontsource/roboto';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider> {/* Envuelve la aplicación con el ThemeProvider */}
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
