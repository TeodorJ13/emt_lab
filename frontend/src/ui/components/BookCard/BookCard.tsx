import { Card, CardContent, CardActions, Typography, Button, Chip } from '@mui/material';
import { Link } from 'react-router';
import type { Book } from '../../../api/types/book.ts';
import { useWishlistContext } from '../../../context/WishlistContext.tsx';

interface Props {
    book: Book;
    onEdit?: () => void;
    onDelete?: () => void;
    deleteLabel?: string;
}

const BookCard = ({ book, onEdit, onDelete, deleteLabel = 'Delete' }: Props) => {
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistContext();
    const inWishlist = isInWishlist(book.id);

    return (
        <Card>
            <CardContent>
                <Typography variant='h6'>{book.name}</Typography>
                <Typography color='text.secondary'>{book.authorName}</Typography>
                <Chip label={book.category} size='small' sx={{ mr: 1, mt: 1 }} />
                <Chip
                    label={book.state}
                    size='small'
                    color={book.state === 'GOOD' ? 'success' : 'error'}
                    sx={{ mt: 1 }}
                />
                <Typography variant='body2' sx={{ mt: 1 }}>
                    Available: {book.availableCopies}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' component={Link} to={`/books/${book.id}`}>
                    View
                </Button>
                <Button
                    size='small'
                    color={inWishlist ? 'warning' : 'secondary'}
                    onClick={() => inWishlist ? removeFromWishlist(book.id) : addToWishlist(book)}
                >
                    {inWishlist ? '♥ Wishlisted' : '♡ Wishlist'}
                </Button>
                {onEdit && (
                    <Button size='small' color='primary' onClick={onEdit}>
                        Edit
                    </Button>
                )}
                {onDelete && (
                    <Button size='small' color='error' onClick={onDelete}>
                        {deleteLabel}
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default BookCard;