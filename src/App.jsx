import React from 'react';
import { Container, Typography } from '@mui/material';
import { PasswordGenerator } from './components/PasswordGenerator';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { ThemeSwitcher } from './components/ThemeSwitcher';

const App = () => {
    return (
        <Container maxWidth="sm" className="App">
            <ThemeSwitcher /> {/* Añade el selector de tema */}
            <LanguageSwitcher />
            <Typography variant="h3" component="h1" gutterBottom>
                {/* Generador de Contraseñas */}
                <PasswordGenerator />
            </Typography>
        </Container>
    );
}

export default App;
