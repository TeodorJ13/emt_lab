// import { Card, CardContent, CardActionArea, Typography, Chip, Box } from '@mui/material';
// import { Link } from 'react-router';
// import type { Book } from '../../../api/types/book.ts';
//
// interface Props {
//     book: Book;
// }
//
// const BookCard = ({ book }: Props) => {
//     return (
//         <Card sx={{ height: '100%' }}>
//             <CardActionArea component={Link} to={`/books/${book.id}`} sx={{ height: '100%' }}>
//                 <CardContent>
//                     <Typography variant='h6' gutterBottom>{book.name}</Typography>
//                     <Typography variant='body2' color='text.secondary' gutterBottom>{book.authorName}</Typography>
//                     <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
//                         <Chip label={book.category} size='small' color='primary' />
//                     </Box>
//                 </CardContent>
//             </CardActionArea>
//         </Card>
//     );
// };
//
// export default BookCard;
import { Card, CardContent, CardActions, Typography, Button, Chip } from '@mui/material';
import { Link } from 'react-router';
import type { Book } from '../../../api/types/book.ts';

interface Props {
    book: Book;
    onEdit?: () => void;
    onDelete?: () => void;
}

const BookCard = ({ book, onEdit, onDelete }: Props) => {
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
                {onEdit && (
                    <Button size='small' color='primary' onClick={onEdit}>
                        Edit
                    </Button>
                )}
                {onDelete && (
                    <Button size='small' color='error' onClick={onDelete}>
                        Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default BookCard;