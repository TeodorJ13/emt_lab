import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Book } from '../api/types/book.ts';

interface WishlistContextType {
    wishlist: Book[];
    addToWishlist: (book: Book) => void;
    removeFromWishlist: (id: number) => void;
    isInWishlist: (id: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
    const [wishlist, setWishlist] = useState<Book[]>(() => {
        const stored = localStorage.getItem('wishlist');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (book: Book) => {
        setWishlist(prev => {
            if (prev.find(b => b.id === book.id)) return prev;
            return [...prev, book];
        });
    };

    const removeFromWishlist = (id: number) => {
        setWishlist(prev => prev.filter(b => b.id !== id));
    };

    const isInWishlist = (id: number) => {
        return wishlist.some(b => b.id === id);
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlistContext = () => {
    const ctx = useContext(WishlistContext);
    if (!ctx) throw new Error('useWishlistContext must be used inside WishlistProvider');
    return ctx;
};