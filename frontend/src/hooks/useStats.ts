import { useEffect, useState } from 'react';
import statsApi from '../api/statsApis.ts';
import type { BookCategoryStats } from '../api/types/stats.ts';

export const useStats = () => {
    const [stats, setStats] = useState<BookCategoryStats[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        statsApi.getCategoryStats()
            .then(res => setStats(res.data))
            .catch(() => setError('Failed to load stats'))
            .finally(() => setLoading(false));
    }, []);

    return { stats, loading, error };
};