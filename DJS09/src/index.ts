// Importing functions, enums, interfaces, and classes
import { showReviewTotal, populateUser, showDetails, getTopTwoReviews } from './utils';
import { Permissions, LoyaltyUser } from './enums';
import { Review, Property } from './interfaces';
import MainProperty from './classes';
import './index.css';

// Selecting DOM elements for various containers and elements
const propertyContainer = document.querySelector('.properties') as HTMLElement | null;
const reviewContainer = document.querySelector('.reviews') as HTMLElement | null;
const container = document.querySelector('.container') as HTMLElement | null;
const button = document.querySelector('button') as HTMLElement | null;
const footer = document.querySelector('.footer') as HTMLElement | null;

// Array of reviews for the properties
const reviews: Review[] = [
    {
        name: 'Sheila',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
    },
];

// User data
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};

// Array of Properties 
const properties: Property[] = [
    // Each property includes details like image, title, price, etc.
    {
        image: '/images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+112343823978921, 'marywinkle@gmail.com'],
        isAvailable: true  
    },
    {
        image: '/images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 30,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1298239028490830, 'garydavis@hotmail.com'],
        isAvailable: false 
    },
    {
        image: '/images/london-property.jpg',
        title: 'London Flat',
        price: 25,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 'SW4 5XW',
            country: 'United Kingdom',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        image: '/images/malaysian-hotel.jpeg',
        title: 'Malia Hotel',
        price: 35,
        location: {
            firstLine: 'Room 4',
            city: 'Malia',
            code: 45334,
            country: 'Malaysia'
        },
        contact: [+60349822083, 'lee34@gmail.com'],
        isAvailable: false
    }
];

// Functions for showing review totals, populating user data, etc.
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

populateUser(you.isReturning, you.firstName);

// Add the properties to the DOM
if (propertyContainer) {
    for (let i = 0; i < properties.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        
        // Add property title
        const title = document.createElement('h3');
        title.innerHTML = properties[i].title;
        card.appendChild(title);

        // Add property price
        const price = document.createElement('p');
        price.classList.add('price'); // Optional: add a class for styling
        price.innerHTML = `$${properties[i].price} per night`; // Format the price with the currency symbol
        card.appendChild(price);

        // Add property image
        const image = document.createElement('img');
        image.setAttribute('src', properties[i].image);
        card.appendChild(image);

        // Call the showDetails function with price
        showDetails(you.permissions, card, properties[i].price);

        // Append the card to the property container
        propertyContainer.appendChild(card);
    }
}

// Handling button click to show top reviews
let count = 0;
if (button) {
    button.addEventListener('click', () => {
        if (!count) {
            count++;
            const topTwo = getTopTwoReviews(reviews);  // Get top 2 reviews
            topTwo.forEach(review => {
                const card = document.createElement('div');
                card.classList.add('review-card');
                card.innerHTML = `${review.stars} stars from ${review.name}`;
                reviewContainer?.appendChild(card);
            });
            button.style.display = 'none'; // Hide the button after displaying reviews
        }
    });
}

// Footer information (location and temperature)
const currentLocation: [string, string, number] = ['London', '11.03', 17];
if (footer) {
    footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°`;
}

// Display main property  (Italian House)
const yourMainProperty = new MainProperty(
    '/images/italian-property.jpg',
    'Italian House',
    [{ name: 'Olive', stars: 5, loyaltyUser: LoyaltyUser.GOLD_USER, date: '12-04-2021' }]
);

if (container) {
    const image = document.createElement('img'); 
    image.setAttribute('src', yourMainProperty.src); // Set main property image
    container.appendChild(image); // Add it to the container
}
