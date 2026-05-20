export interface BookCategoryStats {
    category: string;
    totalBooks: number;
    totalAvailableCopies: number;
    booksNotInGoodState: number;
}