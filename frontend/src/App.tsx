import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { AuthProvider } from './context/AuthContext.tsx';
import { WishlistProvider } from './context/WishlistContext.tsx';
import Layout from './ui/components/layout/Layout/Layout.tsx';
import ProtectedRoute from './ui/components/ProtectedRoute/ProtectedRoute.tsx';
import HomePage from './ui/pages/HomePage/HomePage.tsx';
import LoginPage from './ui/pages/LoginPage/LoginPage.tsx';
import RegisterPage from './ui/pages/RegisterPage/RegisterPage.tsx';
import BooksPage from './ui/pages/BooksPage/BooksPage.tsx';
import BookDetailsPage from './ui/pages/BookDetailsPage/BookDetailsPage.tsx';
import EditBookPage from './ui/pages/EditBookPage/EditBookPage.tsx';
import AuthorsPage from './ui/pages/AuthorsPage/AuthorsPage.tsx';
import AuthorDetailsPage from './ui/pages/AuthorDetailsPage/AuthorDetailsPage.tsx';
import CountriesPage from './ui/pages/CountriesPage/CountriesPage.tsx';
import CountryDetailsPage from './ui/pages/CountryDetailsPage/CountryDetailsPage.tsx';
import WishlistPage from './ui/pages/WishlistPage/WishlistPage.tsx';

function App() {
    return (
        <AuthProvider>
            <WishlistProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route index element={<HomePage />} />
                            <Route path='login' element={<LoginPage />} />
                            <Route path='register' element={<RegisterPage />} />

                            <Route path='books' element={
                                <ProtectedRoute><BooksPage /></ProtectedRoute>
                            } />
                            <Route path='books/:id' element={
                                <ProtectedRoute><BookDetailsPage /></ProtectedRoute>
                            } />
                            <Route path='books/:id/edit' element={
                                <ProtectedRoute requireAdmin><EditBookPage /></ProtectedRoute>
                            } />

                            <Route path='authors' element={
                                <ProtectedRoute><AuthorsPage /></ProtectedRoute>
                            } />
                            <Route path='authors/:id' element={
                                <ProtectedRoute><AuthorDetailsPage /></ProtectedRoute>
                            } />

                            <Route path='countries' element={
                                <ProtectedRoute><CountriesPage /></ProtectedRoute>
                            } />
                            <Route path='countries/:id' element={
                                <ProtectedRoute><CountryDetailsPage /></ProtectedRoute>
                            } />

                            <Route path='wishlist' element={
                                <ProtectedRoute><WishlistPage /></ProtectedRoute>
                            } />

                            <Route path='*' element={<Navigate to='/' replace />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </WishlistProvider>
        </AuthProvider>
    );
}

export default App;