import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { Link } from 'react-router';
import type { Author } from '../../../api/types/author.ts';

interface Props {
    author: Author;
    onEdit?: () => void;
    onDelete?: () => void;
}

const AuthorCard = ({ author, onEdit, onDelete }: Props) => {
    return (
        <Card>
            <CardContent>
                <Typography variant='h6'>{author.name} {author.surname}</Typography>
                <Typography color='text.secondary'>{author.countryName}</Typography>
            </CardContent>
            <CardActions>
                <Button size='small' component={Link} to={`/authors/${author.id}`}>
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

export default AuthorCard;