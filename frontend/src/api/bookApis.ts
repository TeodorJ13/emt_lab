import axiosInstance from '../axios/axiosInstance.ts';
import type { CreateBookDto, UpdateBookDto } from './types/book.ts';

const bookApi = {
    findAll: () => axiosInstance.get('/api/books'),
    findById: (id: number) => axiosInstance.get(`/api/books/${id}`),
    create: (data: CreateBookDto) => axiosInstance.post('/api/books/add', data),
    update: (id: number, data: UpdateBookDto) => axiosInstance.put(`/api/books/${id}/edit`, data),
    delete: (id: number) => axiosInstance.delete(`/api/books/${id}/delete`),
    rent: (id: number) => axiosInstance.put(`/api/books/${id}/rent`),
};

export default bookApi;