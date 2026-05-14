export interface Country {
    id: number;
    name: string;
    continent: string;
}

export interface CreateCountryDto {
    name: string;
    continent: string;
}

export interface UpdateCountryDto {
    name: string;
    continent: string;
}