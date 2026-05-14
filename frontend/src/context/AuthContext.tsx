import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { jwtDecode } from 'jwt-decode';
import type { Role } from '../api/types/role.ts';

interface JwtPayload {
    sub: string;
    role: string;
    exp: number;
}

interface AuthUser {
    username: string;
    role: Role;
}

interface AuthContextType {
    user: AuthUser | null;
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
    isAdmin: boolean;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

const decodeToken = (token: string): AuthUser | null => {
    try {
        const decoded = jwtDecode<JwtPayload>(token);
        return { username: decoded.sub, role: decoded.role as Role };
    } catch {
        return null;
    }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(
        localStorage.getItem('token')
    );
    const [user, setUser] = useState<AuthUser | null>(() => {
        const stored = localStorage.getItem('token');
        return stored ? decodeToken(stored) : null;
    });
    const isLoading = false;

    useEffect(() => {
        if (token) {
            const decoded = decodeToken(token);
            if (decoded) {
                setUser(decoded);
            } else {
                logout();
            }
        } else {
            setUser(null);
        }
    }, [token]);

    const login = (newToken: string) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{
            user,
            token,
            login,
            logout,
            isAuthenticated: !!user,
            isAdmin: user?.role === 'ADMINISTRATOR',
            isLoading,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuthContext must be used inside AuthProvider');
    return ctx;
};