import { AppBar, Toolbar, Typography, Button, Box, Badge } from '@mui/material';
import { Link, useNavigate } from 'react-router';
import { useAuthContext } from '../../../../context/AuthContext.tsx';
import { useWishlistContext } from '../../../../context/WishlistContext.tsx';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = () => {
    const { isAuthenticated, user, logout } = useAuthContext();
    const { wishlist } = useWishlistContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' sx={{ flexGrow: 1 }}>
                    <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
                        Library
                    </Link>
                </Typography>
                {isAuthenticated ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Button color='inherit' component={Link} to='/books'>Books</Button>
                        <Button color='inherit' component={Link} to='/authors'>Authors</Button>
                        <Button color='inherit' component={Link} to='/countries'>Countries</Button>
                        <Button color='inherit' component={Link} to='/wishlist'>
                            <Badge badgeContent={wishlist.length} color='error'>
                                <FavoriteIcon />
                            </Badge>
                        </Button>
                        <Button color='inherit' component={Link} to='/stats'>Stats</Button>
                        <Typography variant='body2'>Hi, {user?.username}</Typography>
                        <Button color='inherit' onClick={handleLogout}>Logout</Button>
                    </Box>
                ) : (
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button color='inherit' component={Link} to='/login'>Login</Button>
                        <Button color='inherit' component={Link} to='/register'>Register</Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;