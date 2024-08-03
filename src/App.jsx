import React from 'react';
import { PasswordGenerator } from './components/PasswordGenerator';
import { Container, Typography } from '@mui/material';
import { ThemeSwitcher } from './components/ThemeSwitcher';

const App = () => {
    return (
        <Container maxWidth="sm" className="App">
            <Typography variant="h3" component="h1" gutterBottom>
                Generador de Contraseñas
            </Typography>
            <ThemeSwitcher /> {/* Añade el selector de tema */}
            <PasswordGenerator />
        </Container>
    );
}

export default App;
