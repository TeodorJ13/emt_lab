import axiosInstance from '../axios/axiosInstance.ts';
import type { CreateAuthorDto, UpdateAuthorDto } from './types/author.ts';

const authorApi = {
    findAll: () => axiosInstance.get('/api/authors'),
    findById: (id: number) => axiosInstance.get(`/api/authors/${id}`),
    create: (data: CreateAuthorDto) => axiosInstance.post('/api/authors/add', data),
    update: (id: number, data: UpdateAuthorDto) => axiosInstance.put(`/api/authors/${id}/edit`, data),
    delete: (id: number) => axiosInstance.delete(`/api/authors/${id}/delete`),
};

export default authorApi;