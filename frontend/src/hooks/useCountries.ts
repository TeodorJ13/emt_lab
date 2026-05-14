import { useEffect, useState, useCallback } from 'react';
import countryApi from '../api/countryApis.ts';
import type { Country, CreateCountryDto, UpdateCountryDto } from '../api/types/country.ts';

export const useCountries = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCountries = useCallback(() => {
        setLoading(true);
        countryApi.findAll()
            .then(res => setCountries(res.data))
            .catch(() => setError('Failed to load countries'))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        fetchCountries();
    }, [fetchCountries]);

    const createCountry = async (data: CreateCountryDto) => {
        await countryApi.create(data);
        fetchCountries();
    };

    const updateCountry = async (id: number, data: UpdateCountryDto) => {
        await countryApi.update(id, data);
        fetchCountries();
    };

    const deleteCountry = async (id: number) => {
        await countryApi.delete(id);
        fetchCountries();
    };

    return { countries, loading, error, createCountry, updateCountry, deleteCountry, refetch: fetchCountries };
};