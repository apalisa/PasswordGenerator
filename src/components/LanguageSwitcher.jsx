import React from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem, Select, FormControl } from '@mui/material';

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const handleChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <FormControl variant="outlined">
            <Select value={i18n.language} onChange={handleChange}>
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="es">Español</MenuItem>
            </Select>
        </FormControl>
    );
};
