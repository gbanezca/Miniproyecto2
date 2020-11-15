import { Personaje } from '../modelos/Personaje';

export interface APIresponse {S
    info: { 
        count: number;
        pages: number;
        next: string;
        prev: string;
    },
    results: Array<Personaje>
}
    
