import { Box, Typography } from "@mui/material"


export const welcome = () => {
    return (
        <Box>
            <Typography variant="h4">{t('welcome')}</Typography>
            <Typography variant="body1">{t('description')}</Typography>
        </Box>
    )
}
