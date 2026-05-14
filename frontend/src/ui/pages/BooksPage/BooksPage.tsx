import { useState } from 'react';
import {
    Container, Grid, Typography, CircularProgress,
    Alert, Button, Dialog, DialogTitle, DialogContent,
    DialogActions, TextField, MenuItem, Box
} from '@mui/material';
import { useBooks } from '../../../hooks/useBooks.ts';
import BookCard from '../../components/BookCard/BookCard.tsx';
import { useAuthContext } from '../../../context/AuthContext.tsx';
import type { CreateBookDto, UpdateBookDto, Book } from '../../../api/types/book.ts';
import { useAuthors } from '../../../hooks/useAuthors.ts';
import * as React from "react";

const CATEGORIES = ['NOVEL', 'THRILER', 'HISTORY', 'FANTASY', 'BIOGRAPHY', 'CLASSICS', 'DRAMA'];
const STATES = ['GOOD', 'BAD'];

const BooksPage = () => {
    const { books, loading, error, createBook, updateBook, deleteBook } = useBooks();
    const { isAdmin } = useAuthContext();
    const { authors } = useAuthors();

    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    const [addForm, setAddForm] = useState<CreateBookDto>({
        name: '', category: 'NOVEL', state: 'GOOD', authorId: 0, availableCopies: 1
    });

    const [editForm, setEditForm] = useState<UpdateBookDto>({
        name: '', category: 'NOVEL', state: 'GOOD', authorId: 0, availableCopies: 1
    });

    const handleAddChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleAddSubmit = async () => {
        await createBook(addForm);
        setOpenAdd(false);
        setAddForm({ name: '', category: 'NOVEL', state: 'GOOD', authorId: 0, availableCopies: 1 });
    };

    const handleEditOpen = (book: Book) => {
        setSelectedBook(book);
        setEditForm({
            name: book.name,
            category: book.category,
            state: book.state,
            authorId: book.authorId,
            availableCopies: book.availableCopies
        });
        setOpenEdit(true);
    };

    const handleEditSubmit = async () => {
        if (!selectedBook) return;
        await updateBook(selectedBook.id, editForm);
        setOpenEdit(false);
        setSelectedBook(null);
    };

    if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 4 }} />;
    if (error) return <Alert severity='error'>{error}</Alert>;

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant='h4'>Books</Typography>
                {isAdmin && (
                    <Button variant='contained' onClick={() => setOpenAdd(true)}>
                        Add Book
                    </Button>
                )}
            </Box>

            <Grid container spacing={3}>
                {books.map(book => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={book.id}>
                        <BookCard
                            book={book}
                            onEdit={isAdmin ? () => handleEditOpen(book) : undefined}
                            onDelete={isAdmin ? () => deleteBook(book.id) : undefined}
                        />
                    </Grid>
                ))}
            </Grid>

            {/* Add Dialog */}
            <Dialog open={openAdd} onClose={() => setOpenAdd(false)} fullWidth maxWidth='sm'>
                <DialogTitle>Add New Book</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
                    <TextField label='Name' name='name' value={addForm.name} onChange={handleAddChange} />
                    <TextField select label='Category' name='category' value={addForm.category} onChange={handleAddChange}>
                        {CATEGORIES.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
                    </TextField>
                    <TextField select label='State' name='state' value={addForm.state} onChange={handleAddChange}>
                        {STATES.map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}
                    </TextField>
                    <TextField select label='Author' name='authorId' value={addForm.authorId} onChange={handleAddChange}>
                        {authors.map(a => (
                            <MenuItem key={a.id} value={a.id}>{a.name} {a.surname}</MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label='Available Copies'
                        name='availableCopies'
                        type='number'
                        value={addForm.availableCopies}
                        onChange={handleAddChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenAdd(false)}>Cancel</Button>
                    <Button variant='contained' onClick={handleAddSubmit}>Add</Button>
                </DialogActions>
            </Dialog>

            {/* Edit Dialog */}
            <Dialog open={openEdit} onClose={() => setOpenEdit(false)} fullWidth maxWidth='sm'>
                <DialogTitle>Edit Book</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
                    <TextField label='Name' name='name' value={editForm.name} onChange={handleEditChange} />
                    <TextField select label='Category' name='category' value={editForm.category} onChange={handleEditChange}>
                        {CATEGORIES.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
                    </TextField>
                    <TextField select label='State' name='state' value={editForm.state} onChange={handleEditChange}>
                        {STATES.map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}
                    </TextField>
                    <TextField select label='Author' name='authorId' value={editForm.authorId} onChange={handleEditChange}>
                        {authors.map(a => (
                            <MenuItem key={a.id} value={a.id}>{a.name} {a.surname}</MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label='Available Copies'
                        name='availableCopies'
                        type='number'
                        value={editForm.availableCopies}
                        onChange={handleEditChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
                    <Button variant='contained' onClick={handleEditSubmit}>Save</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default BooksPage;