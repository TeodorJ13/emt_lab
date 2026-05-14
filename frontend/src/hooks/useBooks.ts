// import { useEffect, useState } from 'react';
// import bookApi from '../api/bookApis.ts';
// import type { Book } from '../api/types/book.ts';
//
// export const useBooks = () => {
//     const [books, setBooks] = useState<Book[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//
//     useEffect(() => {
//         bookApi.findAll()
//             .then(res => setBooks(res.data))
//             .catch(() => setError('Failed to load books'))
//             .finally(() => setLoading(false));
//     }, []);
//
//     return { books, loading, error };
// };
import {useEffect, useState, useCallback} from 'react';
import bookApi from '../api/bookApis.ts';
import type {Book, CreateBookDto, UpdateBookDto} from '../api/types/book.ts';

export const useBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchBooks = useCallback(() => {
        setLoading(true);
        bookApi.findAll()
            .then(res => setBooks(res.data))
            .catch(() => setError('Failed to load books'))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    const createBook = async (data: CreateBookDto) => {
        await bookApi.create(data);
        fetchBooks();
    };

    const updateBook = async (id: number, data: UpdateBookDto) => {
        await bookApi.update(id, data);
        fetchBooks();
    };

    const deleteBook = async (id: number) => {
        await bookApi.delete(id);
        fetchBooks();
    };

    const rentBook = async (id: number) => {
        await bookApi.rent(id);
        fetchBooks();
    };

    return {books, loading, error, createBook, updateBook, deleteBook, rentBook, refetch: fetchBooks};
};