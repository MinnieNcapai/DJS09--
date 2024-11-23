// Selecting DOM elements for displaying reviews, user status, and username
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement;
const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement;
const userNameDisplay = document.querySelector('#user') as HTMLElement;

// Importing enums and interfaces
import { LoyaltyUser, Permissions } from './enums';
import {Review}  from './interfaces';

// Helper function defined first for clarity, to add 's' for plural when needed
export function makeMultiple(value: number): string {
    return value > 1 || value === 0 ? 's' : ''; // Add 's' if more than 1 review or 0 reviews
}

// Function to display total reviews, reviewer name, and loyalty status
export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? '⭐' : '';
    reviewTotalDisplay.innerHTML = `${value} review${makeMultiple(value)} | last reviewed by ${reviewer} ${iconDisplay}`;
}

// Function to display user status and username
export function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back'; // Show 'back' if the user is returning
    }
    userNameDisplay.innerHTML = userName;  // Show the user's name
}

// Function to display property details based on user permissions
export function showDetails(value: boolean | Permissions, element: HTMLDivElement, price: number) {
    if (typeof value === 'boolean' && value) {
        // If value is true, show price
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = `${price}/night`; // Display price per night
        element.appendChild(priceDisplay); // Add price to the element
    } else if (typeof value === 'number' && value in Permissions) {
        // Add logic for handling specific permissions if needed
    }
}

// Function to get top two highest rated reviews
export function getTopTwoReviews(reviews: Review[]): Review[] {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 2); // Return the top two reviews
}
