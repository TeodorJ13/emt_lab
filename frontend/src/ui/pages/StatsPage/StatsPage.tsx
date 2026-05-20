import {
    Container, Typography, CircularProgress,
    Alert, Box, Paper, LinearProgress, Divider, Chip
} from '@mui/material';
import { useStats } from '../../../hooks/useStats.ts';

const StatsPage = () => {
    const { stats, loading, error } = useStats();

    if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 4 }} />;
    if (error) return <Alert severity='error'>{error}</Alert>;

    const maxBooks = Math.max(...stats.map(s => s.totalBooks), 1);

    return (
        <Container>
            <Typography variant='h4' sx={{ mb: 3 }}>Library Statistics</Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
                {stats.map(stat => {
                    const booksInGoodState = stat.totalBooks - stat.booksNotInGoodState;

                    return (
                        <Paper key={stat.category} sx={{ p: 3 }}>
                            <Typography variant='h6' color='primary' sx={{ mb: 2 }}>
                                {stat.category}
                            </Typography>

                            <Box sx={{ mb: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant='body2'>Total Books</Typography>
                                    <Typography variant='body2'><strong>{stat.totalBooks}</strong></Typography>
                                </Box>
                                <LinearProgress
                                    variant='determinate'
                                    value={(stat.totalBooks / maxBooks) * 100}
                                    color='primary'
                                    sx={{ mt: 0.5, height: 8, borderRadius: 1 }}
                                />
                            </Box>

                            <Box sx={{ mb: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant='body2'>Available Copies</Typography>
                                    <Typography variant='body2'><strong>{stat.totalAvailableCopies}</strong></Typography>
                                </Box>
                                <LinearProgress
                                    variant='determinate'
                                    value={(stat.totalAvailableCopies / maxBooks) * 100}
                                    color='success'
                                    sx={{ mt: 0.5, height: 8, borderRadius: 1 }}
                                />
                            </Box>

                            <Divider sx={{ my: 1.5 }} />

                            <Box sx={{ mb: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant='body2'>Books in Good State</Typography>
                                    <Chip label={booksInGoodState} size='small' color='success' />
                                </Box>
                                <LinearProgress
                                    variant='determinate'
                                    value={(booksInGoodState / maxBooks) * 100}
                                    color='success'
                                    sx={{ mt: 0.5, height: 8, borderRadius: 1 }}
                                />
                            </Box>

                            <Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant='body2'>Books in Bad State</Typography>
                                    <Chip label={stat.booksNotInGoodState} size='small' color='error' />
                                </Box>
                                <LinearProgress
                                    variant='determinate'
                                    value={(stat.booksNotInGoodState / maxBooks) * 100}
                                    color='error'
                                    sx={{ mt: 0.5, height: 8, borderRadius: 1 }}
                                />
                            </Box>
                        </Paper>
                    );
                })}
            </Box>
        </Container>
    );
};

export default StatsPage;