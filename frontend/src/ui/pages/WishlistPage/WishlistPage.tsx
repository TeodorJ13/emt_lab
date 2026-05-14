import {
    Container, Grid, Typography, Box, Alert
} from '@mui/material';
import { useWishlistContext } from '../../../context/WishlistContext.tsx';
import BookCard from '../../components/BookCard/BookCard.tsx';

const WishlistPage = () => {
    const { wishlist, removeFromWishlist } = useWishlistContext();

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant='h4'>My Wishlist</Typography>
            </Box>

            {wishlist.length === 0 ? (
                <Alert severity='info'>Your wishlist is empty.</Alert>
            ) : (
                <Grid container spacing={3}>
                    {wishlist.map(book => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={book.id}>
                            <BookCard
                                book={book}
                                onDelete={() => removeFromWishlist(book.id)}
                                deleteLabel='Remove'
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default WishlistPage;