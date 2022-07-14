export interface Business {
    name: string;
    description?: string;
    address?: {
        number: string;
        street: string;
        zip: string;
        city: string;
        country: string;
    }
    id?: string;
    phone?: string;
    image?: string; 
    email?: string;
}