export interface Author {
    id: number;
    name: string;
    surname: string;
    countryId: number;
    countryName: string;
}

export interface CreateAuthorDto {
    name: string;
    surname: string;
    countryId: number;
}

export interface UpdateAuthorDto {
    name: string;
    surname: string;
    countryId: number;
}