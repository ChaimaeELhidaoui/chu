import React from 'react';
import { TextField } from '@mui/material';
const Conclusion = ({ values, handleChange, handleBlur }) => {
    return (
        <TextField
            sx={{ marginBottom: '20px' }}
            name="conclusion"
            label="conclusion du compte rendu"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={values.conclusion}
            onChange={handleChange}
            onBlur={handleBlur}
        />
    );
};

export default Conclusion;
