import axiosInstance from '../axios/axiosInstance.ts';
import type { CreateCountryDto, UpdateCountryDto } from './types/country.ts';

const countryApi = {
    findAll: () => axiosInstance.get('/api/countries'),
    findById: (id: number) => axiosInstance.get(`/api/countries/${id}`),
    create: (data: CreateCountryDto) => axiosInstance.post('/api/countries/add', data),
    update: (id: number, data: UpdateCountryDto) => axiosInstance.put(`/api/countries/${id}/edit`, data),
    delete: (id: number) => axiosInstance.delete(`/api/countries/${id}/delete`),
};

export default countryApi;