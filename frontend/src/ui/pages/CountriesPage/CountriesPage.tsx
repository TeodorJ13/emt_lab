// import { Container, Grid, Typography, CircularProgress, Alert } from '@mui/material';
// import { useCountries } from '../../../hooks/useCountries.ts';
// import CountryCard from '../../components/CountryCard/CountryCard.tsx';
//
// const CountriesPage = () => {
//     const { countries, loading, error } = useCountries();
//
//     if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 4 }} />;
//     if (error) return <Alert severity='error'>{error}</Alert>;
//
//     return (
//         <Container>
//             <Typography variant='h4' gutterBottom>Countries</Typography>
//             <Grid container spacing={3}>
//                 {countries.map(country => (
//                     <Grid item xs={12} sm={6} md={4} key={country.id}>
//                         <CountryCard country={country} />
//                     </Grid>
//                 ))}
//             </Grid>
//         </Container>
//     );
// };
//
// export default CountriesPage;

import { useState } from 'react';
import {
    Container, Grid, Typography, CircularProgress,
    Alert, Button, Box, Dialog, DialogTitle,
    DialogContent, DialogActions, TextField
} from '@mui/material';
import { useCountries } from '../../../hooks/useCountries.ts';
import CountryCard from '../../components/CountryCard/CountryCard.tsx';
import { useAuthContext } from '../../../context/AuthContext.tsx';
import type { CreateCountryDto, UpdateCountryDto, Country } from '../../../api/types/country.ts';
import * as React from "react";

const CountriesPage = () => {
    const { countries, loading, error, createCountry, updateCountry, deleteCountry } = useCountries();
    const { isAdmin } = useAuthContext();

    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

    const [addForm, setAddForm] = useState<CreateCountryDto>({ name: '', continent: '' });
    const [editForm, setEditForm] = useState<UpdateCountryDto>({ name: '', continent: '' });

    const handleAddChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleAddSubmit = async () => {
        await createCountry(addForm);
        setOpenAdd(false);
        setAddForm({ name: '', continent: '' });
    };

    const handleEditOpen = (country: Country) => {
        setSelectedCountry(country);
        setEditForm({ name: country.name, continent: country.continent });
        setOpenEdit(true);
    };

    const handleEditSubmit = async () => {
        if (!selectedCountry) return;
        await updateCountry(selectedCountry.id, editForm);
        setOpenEdit(false);
        setSelectedCountry(null);
    };

    if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 4 }} />;
    if (error) return <Alert severity='error'>{error}</Alert>;

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant='h4'>Countries</Typography>
                {isAdmin && (
                    <Button variant='contained' onClick={() => setOpenAdd(true)}>
                        Add Country
                    </Button>
                )}
            </Box>

            <Grid container spacing={3}>
                {countries.map(country => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={country.id}>
                        <CountryCard
                            country={country}
                            onEdit={isAdmin ? () => handleEditOpen(country) : undefined}
                            onDelete={isAdmin ? () => deleteCountry(country.id) : undefined}
                        />
                    </Grid>
                ))}
            </Grid>

            {/* Add Dialog */}
            <Dialog open={openAdd} onClose={() => setOpenAdd(false)} fullWidth maxWidth='sm'>
                <DialogTitle>Add New Country</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
                    <TextField label='Name' name='name' value={addForm.name} onChange={handleAddChange} />
                    <TextField label='Continent' name='continent' value={addForm.continent} onChange={handleAddChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenAdd(false)}>Cancel</Button>
                    <Button variant='contained' onClick={handleAddSubmit}>Add</Button>
                </DialogActions>
            </Dialog>

            {/* Edit Dialog */}
            <Dialog open={openEdit} onClose={() => setOpenEdit(false)} fullWidth maxWidth='sm'>
                <DialogTitle>Edit Country</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
                    <TextField label='Name' name='name' value={editForm.name} onChange={handleEditChange} />
                    <TextField label='Continent' name='continent' value={editForm.continent} onChange={handleEditChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
                    <Button variant='contained' onClick={handleEditSubmit}>Save</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default CountriesPage;