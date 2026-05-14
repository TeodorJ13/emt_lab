import { useState } from 'react';
import {
    Container, Grid, Typography, Box, Alert,
    Button, Dialog, DialogTitle, DialogContent,
    DialogActions, Divider, List, ListItem, ListItemText
} from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useWishlistContext } from '../../../context/WishlistContext.tsx';
import BookCard from '../../components/BookCard/BookCard.tsx';

const WishlistPage = () => {
    const { wishlist, removeFromWishlist, clearWishlist } = useWishlistContext();
    const [openCheckout, setOpenCheckout] = useState(false);
    const [ordered, setOrdered] = useState(false);

    const handleCheckout = () => {
        setOrdered(true);
        clearWishlist();
        setOpenCheckout(false);
    };

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant='h4'>My Wishlist</Typography>
                {wishlist.length > 0 && (
                    <Button
                        variant='contained'
                        color='success'
                        startIcon={<ShoppingCartCheckoutIcon />}
                        onClick={() => setOpenCheckout(true)}
                    >
                        Checkout ({wishlist.length})
                    </Button>
                )}
            </Box>

            {ordered && (
                <Alert severity='success' sx={{ mb: 2 }}>
                    Your order has been placed successfully!
                </Alert>
            )}

            {wishlist.length === 0 && !ordered ? (
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

            {/* Checkout Dialog */}
            <Dialog open={openCheckout} onClose={() => setOpenCheckout(false)} fullWidth maxWidth='sm'>
                <DialogTitle>Order Summary</DialogTitle>
                <DialogContent>
                    <List>
                        {wishlist.map((book, index) => (
                            <Box key={book.id}>
                                <ListItem>
                                    <ListItemText
                                        primary={book.name}
                                        secondary={`${book.authorName} • ${book.category}`}
                                    />
                                </ListItem>
                                {index < wishlist.length - 1 && <Divider />}
                            </Box>
                        ))}
                    </List>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant='body1'>
                        <strong>Total books:</strong> {wishlist.length}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenCheckout(false)}>Cancel</Button>
                    <Button variant='contained' color='success' onClick={handleCheckout}>
                        Confirm Order
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default WishlistPage;