// Importing enums from the 'enums' file and types from the 'types' file
import { LoyaltyUser } from './enums'
import { Price, Country } from './types'

// Defining the 'Review' interface
export interface Review {
    name: string;  // The name of the person who wrote the review
    stars: number; // The number of stars the reviewer gave (rating)
    loyaltyUser: LoyaltyUser; // The loyalty status of the reviewer (imported from enums)
    date: string; // The date when the review was written 
}

// Defining the 'Property' interface
export interface Property {
    image: string; // The image URL of the property
    title: string; // The title or name of the property
    price: Price; // The price of the property (imported from types)
    location: {
        firstLine: string; // The street address or first line of the address
        city: string; // The city where the property is located
        code: number | string; // The postal code of the property (can be number or string)
        country: Country // The country where the property is located (imported from types)
    }
    contact: [ number, string];
    isAvailable: boolean;  // A boolean indicating if the property is available for rent or sale
}