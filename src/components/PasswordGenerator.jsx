import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew'; // Importar ícono

export const PasswordGenerator = () => {
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState('');

    const generatePassword = () => {
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
        
        let allChars = lowercaseChars;
        if (includeUppercase) allChars += uppercaseChars;
        if (includeNumbers) allChars += numberChars;
        if (includeSymbols) allChars += symbolChars;
        
        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            generatedPassword += allChars[randomIndex];
        }
        
        setPassword(generatedPassword);
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextField
                label="Longitud"
                type="number"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                InputProps={{ inputProps: { min: 1 } }}
                sx={{ marginBottom: 2, width: '100px' }}
            />
            <FormControlLabel
                control={<Checkbox checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} />}
                label="Incluir Mayúsculas"
            />
            <FormControlLabel
                control={<Checkbox checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />}
                label="Incluir Números"
            />
            <FormControlLabel
                control={<Checkbox checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />}
                label="Incluir Símbolos"
            />
            <Button
                variant="contained"
                onClick={generatePassword}
                startIcon={<AutorenewIcon />} // Usar ícono
                sx={{ marginTop: 2 }}
            >
                Generar Contraseña
            </Button>
            <Typography variant="h6" component="h2" sx={{ marginTop: 3 }}>
                Contraseña Generada:
            </Typography>
            <Typography variant="body1" component="p" sx={{ wordBreak: 'break-all' }}>
                {password}
            </Typography>
        </Box>
    );
}