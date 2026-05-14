import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { Link } from 'react-router';
import type { Country } from '../../../api/types/country.ts';

interface Props {
    country: Country;
    onEdit?: () => void;
    onDelete?: () => void;
}

const CountryCard = ({ country, onEdit, onDelete }: Props) => {
    return (
        <Card>
            <CardContent>
                <Typography variant='h6'>{country.name}</Typography>
                <Typography color='text.secondary'>{country.continent}</Typography>
            </CardContent>
            <CardActions>
                <Button size='small' component={Link} to={`/countries/${country.id}`}>
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

export default CountryCard;