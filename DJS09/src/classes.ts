// Importing the 'Review' interface from the 'interfaces' file
import {Review } from './interfaces'

// Defining a class named 'MainProperty'
export default class MainProperty {
    // Properties of the class
    src: string
    title: string // The title of the property
    reviews: Review[] // An array of reviews for the property, using the 'Review' interface

     // Constructor method to initialize the properties when creating an instance of the class
    constructor(src: string, title: string, reviews: Review[]) {
        this.src = src // Setting the 'src' property
        this.title = title // Setting the 'title' property
        this.reviews = reviews // Setting the 'reviews' property
    }
}