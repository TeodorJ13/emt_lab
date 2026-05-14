export interface Book {
    id: number;
    name: string;
    category: string;
    state: string;
    authorId: number;
    authorName: string;
    availableCopies: number;
}

export interface CreateBookDto {
    name: string;
    category: string;
    state: string;
    authorId: number;
    availableCopies: number;
}

export interface UpdateBookDto {
    name: string;
    category: string;
    state: string;
    authorId: number;
    availableCopies: number;
}