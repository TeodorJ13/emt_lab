import { useState } from 'react';
import {
    Container, TextField, Button, Typography,
    Box, Alert, CircularProgress
} from '@mui/material';
import { useAuth } from '../../../hooks/useAuth.ts';
import { Link } from 'react-router';

const LoginPage = () => {
    const { handleLogin, error, loading } = useAuth();
    const [form, setForm] = useState({ username: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleLogin(form);
    };

    return (
        <Container maxWidth='xs'>
            <Box component='form' onSubmit={handleSubmit} sx={{ mt: 8, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant='h4' sx={{ textAlign: 'center' }}>Login</Typography>
                {error && <Alert severity='error'>{error}</Alert>}
                <TextField
                    label='Username'
                    name='username'
                    value={form.username}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label='Password'
                    name='password'
                    type='password'
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                <Button type='submit' variant='contained' disabled={loading}>
                    {loading ? <CircularProgress size={24} /> : 'Login'}
                </Button>
                <Typography sx={{ textAlign: 'center' }}>
                    Don't have an account? <Link to='/register'>Register</Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default LoginPage;