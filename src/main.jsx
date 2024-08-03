import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from './theme/ThemeProvider'; // Importa el proveedor de tema
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
