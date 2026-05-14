import axiosInstance from '../axios/axiosInstance.ts';
import type { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from './types/auth.ts';

const authApi = {
    login: (data: LoginRequest) =>
        axiosInstance.post<LoginResponse>('/api/user/login', data),

    register: (data: RegisterRequest) =>
        axiosInstance.post<RegisterResponse>('/api/user/register', data),

    me: () =>
        axiosInstance.get<RegisterResponse>('/api/user/me'),
};

export default authApi;