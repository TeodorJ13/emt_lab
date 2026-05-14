// import { BrowserRouter, Route, Routes } from 'react-router';
// import Layout from './ui/components/layout/Layout/Layout.tsx';
// import HomePage from './ui/pages/HomePage/HomePage.tsx';
// import BooksPage from './ui/pages/BooksPage/BooksPage.tsx';
// import BookDetailsPage from './ui/pages/BookDetailsPage/BookDetailsPage.tsx';
// import EditBookPage from './ui/pages/EditBookPage/EditBookPage.tsx';
// import AuthorsPage from './ui/pages/AuthorsPage/AuthorsPage.tsx';
// import AuthorDetailsPage from './ui/pages/AuthorDetailsPage/AuthorDetailsPage.tsx';
// import CountriesPage from './ui/pages/CountriesPage/CountriesPage.tsx';
// import CountryDetailsPage from './ui/pages/CountryDetailsPage/CountryDetailsPage.tsx';
//
// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path='/' element={<Layout />}>
//                     <Route index element={<HomePage />} />
//                     <Route path='books' element={<BooksPage />} />
//                     <Route path='books/:id' element={<BookDetailsPage />} />
//                     <Route path='books/:id/edit' element={<EditBookPage />} />
//                     <Route path='authors' element={<AuthorsPage />} />
//                     <Route path='authors/:id' element={<AuthorDetailsPage />} />
//                     <Route path='countries' element={<CountriesPage />} />
//                     <Route path='countries/:id' element={<CountryDetailsPage />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }
//
// export default App;
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { AuthProvider } from './context/AuthContext.tsx';
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

function App() {
    return (
        <AuthProvider>
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

                        <Route path='*' element={<Navigate to='/' replace />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;