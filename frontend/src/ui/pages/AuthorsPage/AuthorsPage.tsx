// import { Container, Grid, Typography, CircularProgress, Alert } from '@mui/material';
// import { useAuthors } from '../../../hooks/useAuthors.ts';
// import AuthorCard from '../../components/AuthorCard/AuthorCard.tsx';
//
// const AuthorsPage = () => {
//     const { authors, loading, error } = useAuthors();
//
//     if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 4 }} />;
//     if (error) return <Alert severity='error'>{error}</Alert>;
//
//     return (
//         <Container>
//             <Typography variant='h4' gutterBottom>Authors</Typography>
//             <Grid container spacing={3}>
//                 {authors.map(author => (
//                     <Grid item xs={12} sm={6} md={4} key={author.id}>
//                         <AuthorCard author={author} />
//                     </Grid>
//                 ))}
//             </Grid>
//         </Container>
//     );
// };
//
// export default AuthorsPage;

import { useState } from 'react';
import {
    Container, Grid, Typography, CircularProgress,
    Alert, Button, Box, Dialog, DialogTitle,
    DialogContent, DialogActions, TextField, MenuItem
} from '@mui/material';
import { useAuthors } from '../../../hooks/useAuthors.ts';
import AuthorCard from '../../components/AuthorCard/AuthorCard.tsx';
import { useAuthContext } from '../../../context/AuthContext.tsx';
import type { CreateAuthorDto, UpdateAuthorDto, Author } from '../../../api/types/author.ts';
import { useCountries } from '../../../hooks/useCountries.ts';
import * as React from "react";

const AuthorsPage = () => {
    const { authors, loading, error, createAuthor, updateAuthor, deleteAuthor } = useAuthors();
    const { isAdmin } = useAuthContext();
    const { countries } = useCountries();

    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);

    const [addForm, setAddForm] = useState<CreateAuthorDto>({
        name: '', surname: '', countryId: 0
    });

    const [editForm, setEditForm] = useState<UpdateAuthorDto>({
        name: '', surname: '', countryId: 0
    });

    const handleAddChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleAddSubmit = async () => {
        await createAuthor(addForm);
        setOpenAdd(false);
        setAddForm({ name: '', surname: '', countryId: 0 });
    };

    const handleEditOpen = (author: Author) => {
        setSelectedAuthor(author);
        setEditForm({
            name: author.name,
            surname: author.surname,
            countryId: author.countryId
        });
        setOpenEdit(true);
    };

    const handleEditSubmit = async () => {
        if (!selectedAuthor) return;
        await updateAuthor(selectedAuthor.id, editForm);
        setOpenEdit(false);
        setSelectedAuthor(null);
    };

    if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 4 }} />;
    if (error) return <Alert severity='error'>{error}</Alert>;

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant='h4'>Authors</Typography>
                {isAdmin && (
                    <Button variant='contained' onClick={() => setOpenAdd(true)}>
                        Add Author
                    </Button>
                )}
            </Box>

            <Grid container spacing={3}>
                {authors.map(author => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={author.id}>
                        <AuthorCard
                            author={author}
                            onEdit={isAdmin ? () => handleEditOpen(author) : undefined}
                            onDelete={isAdmin ? () => deleteAuthor(author.id) : undefined}
                        />
                    </Grid>
                ))}
            </Grid>

            {/* Add Dialog */}
            <Dialog open={openAdd} onClose={() => setOpenAdd(false)} fullWidth maxWidth='sm'>
                <DialogTitle>Add New Author</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
                    <TextField label='Name' name='name' value={addForm.name} onChange={handleAddChange} />
                    <TextField label='Surname' name='surname' value={addForm.surname} onChange={handleAddChange} />
                    <TextField select label='Country' name='countryId' value={addForm.countryId} onChange={handleAddChange}>
                        {countries.map(c => (
                            <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>
                        ))}
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenAdd(false)}>Cancel</Button>
                    <Button variant='contained' onClick={handleAddSubmit}>Add</Button>
                </DialogActions>
            </Dialog>

            {/* Edit Dialog */}
            <Dialog open={openEdit} onClose={() => setOpenEdit(false)} fullWidth maxWidth='sm'>
                <DialogTitle>Edit Author</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
                    <TextField label='Name' name='name' value={editForm.name} onChange={handleEditChange} />
                    <TextField label='Surname' name='surname' value={editForm.surname} onChange={handleEditChange} />
                    <TextField select label='Country' name='countryId' value={editForm.countryId} onChange={handleEditChange}>
                        {countries.map(c => (
                            <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>
                        ))}
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
                    <Button variant='contained' onClick={handleEditSubmit}>Save</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default AuthorsPage;