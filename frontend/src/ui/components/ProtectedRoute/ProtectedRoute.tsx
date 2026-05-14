import { Navigate } from 'react-router';
import { useAuthContext } from '../../../context/AuthContext.tsx';
import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    requireAdmin?: boolean;
}

const ProtectedRoute = ({ children, requireAdmin = false }: Props) => {
    const { isAuthenticated, isAdmin } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to='/login' replace />;
    }

    if (requireAdmin && !isAdmin) {
        return <Navigate to='/books' replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;