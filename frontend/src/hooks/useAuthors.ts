// import { useEffect, useState } from 'react';
// import authorApi from '../api/authorApis.ts';
// import type { Author } from '../api/types/author.ts';
//
// export const useAuthors = () => {
//     const [authors, setAuthors] = useState<Author[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//
//     useEffect(() => {
//         authorApi.findAll()
//             .then(res => setAuthors(res.data))
//             .catch(() => setError('Failed to load authors'))
//             .finally(() => setLoading(false));
//     }, []);
//
//     return { authors, loading, error };
// };

import { useEffect, useState, useCallback } from 'react';
import authorApi from '../api/authorApis.ts';
import type { Author, CreateAuthorDto, UpdateAuthorDto } from '../api/types/author.ts';

export const useAuthors = () => {
    const [authors, setAuthors] = useState<Author[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchAuthors = useCallback(() => {
        setLoading(true);
        authorApi.findAll()
            .then(res => setAuthors(res.data))
            .catch(() => setError('Failed to load authors'))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        fetchAuthors();
    }, [fetchAuthors]);

    const createAuthor = async (data: CreateAuthorDto) => {
        await authorApi.create(data);
        fetchAuthors();
    };

    const updateAuthor = async (id: number, data: UpdateAuthorDto) => {
        await authorApi.update(id, data);
        fetchAuthors();
    };

    const deleteAuthor = async (id: number) => {
        await authorApi.delete(id);
        fetchAuthors();
    };

    return { authors, loading, error, createAuthor, updateAuthor, deleteAuthor, refetch: fetchAuthors };
};