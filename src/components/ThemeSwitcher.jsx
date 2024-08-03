import React from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import { useTheme, useThemeSwitcher } from '../theme/ThemeProvider'; // Necesitamos usar un proveedor de tema

export const ThemeSwitcher = () => {
    const { mode, toggleMode } = useThemeSwitcher();

    return (
        <FormControlLabel
            control={<Switch checked={mode === 'dark'} onChange={toggleMode} />}
            label="Modo Oscuro"
        />
    );
};
