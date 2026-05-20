import axiosInstance from '../axios/axiosInstance.ts';

const statsApi = {
    getCategoryStats: () => axiosInstance.get('/api/stats/category'),
};

export default statsApi;