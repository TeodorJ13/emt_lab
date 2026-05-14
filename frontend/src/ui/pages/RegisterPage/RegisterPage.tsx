import { useState } from 'react';
import {
    Container, TextField, Button, Typography,
    Box, Alert, CircularProgress
} from '@mui/material';
import { useAuth } from '../../../hooks/useAuth.ts';
import { Link } from 'react-router';
import * as React from "react";

const RegisterPage = () => {
    const { handleRegister, error, loading } = useAuth();
    const [form, setForm] = useState({
        name: '', surname: '', email: '', username: '', password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // noinspection JSDeprecatedSymbols
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleRegister(form);
    };

    return (
        <Container maxWidth='xs'>
            <Box component='form' onSubmit={handleSubmit} sx={{ mt: 8, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant='h4' sx={{ textAlign: 'center' }}>Register</Typography>
                {error && <Alert severity='error'>{error}</Alert>}
                <TextField label='Name' name='name' value={form.name} onChange={handleChange} required />
                <TextField label='Surname' name='surname' value={form.surname} onChange={handleChange} required />
                <TextField label='Email' name='email' type='email' value={form.email} onChange={handleChange} required />
                <TextField label='Username' name='username' value={form.username} onChange={handleChange} required />
                <TextField label='Password' name='password' type='password' value={form.password} onChange={handleChange} required />
                <Button type='submit' variant='contained' disabled={loading}>
                    {loading ? <CircularProgress size={24} /> : 'Register'}
                </Button>
                <Typography sx={{ textAlign: 'center' }}>
                    Already have an account? <Link to='/login'>Login</Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default RegisterPage;