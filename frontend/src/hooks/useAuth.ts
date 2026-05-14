import { useState } from 'react';
import { useNavigate } from 'react-router';
import authApi from '../api/authApis.ts';
import { useAuthContext } from '../context/AuthContext.tsx';
import type { LoginRequest, RegisterRequest } from '../api/types/auth.ts';

export const useAuth = () => {
    const { login, logout, user, isAuthenticated, isAdmin } = useAuthContext();
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (data: LoginRequest) => {
        setLoading(true);
        setError(null);
        try {
            const res = await authApi.login(data);
            login(res.data.token);
            navigate('/books');
        } catch {
            setError('Invalid username or password');
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async (data: RegisterRequest) => {
        setLoading(true);
        setError(null);
        try {
            await authApi.register(data);
            navigate('/login');
        } catch {
            setError('Registration failed');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return {
        user,
        isAuthenticated,
        isAdmin,
        error,
        loading,
        handleLogin,
        handleRegister,
        handleLogout,
    };
};