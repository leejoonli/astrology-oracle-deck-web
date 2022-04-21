# Application Description
This application is a simple virtual representation of an astrology oracle deck, based on a real life version that I cannot find.  It only offers a three card spread and basic functionality and aesthetics.

Special thanks to my friend, Danielle Garratt, for most of the artwork.

\*Note: THIS IS ONLY MEANT TO BE USED ON MOBILE DEVICES.  THERE ARE NO MEDIA QUERIES SET UP FOR DESKTOP.

## Technologies Used
- Typescript
- React

## Installation Instructions

### GitHub Instructions
1. Open your terminal and navigate to your desired directory where you want to store this repository using `cd YOUR_DIRECTORY_NAME`
2. On the GitHub repository, click on the "Code" dropdown menu and either click on "HTTPS" or "SSH" depending on what you're using.
3. You can either click the link which will highlight the GitHub or https link and copy it or click on the icon next to the link which will copy it into your clipboard.
4. Fork and clone this repository to your machine using `git clone PASTE_SSH_OR_HTTPS_HERE`
5. `cd` into the newly created directory
6. Run `npm i` or `npm install` to install dependencies
7. Run `npm start` to run your local server.

If you're having difficulty in the installation process, visit this link for more information:
https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

## Current Application State

### Home Page
There will be a "spead" of cards that appear at the top of the screen that you will then tap and will display three randomly chosen cards.

<img src="https://user-images.githubusercontent.com/65789692/164115092-94eecb48-6850-4e2a-8926-5ff6a610340a.jpg" height="500">

\*Note: This was taken using the React Native version.

### Card Meaning Modal

When you tap on one of the cards, a modal will appear that displays the card information.

<img src="https://user-images.githubusercontent.com/65789692/164115603-e1506ffa-2a3e-4aad-8835-98f1c5818b3c.jpg" height="500">

\*Note: This was taken using the React Native version.

## Future Improvements

- It would be interesting to add more animations to make the application more interactive.
- Adding an option for more than a three card spread.
- Potentially introducing the idea of different kinds of decks.

\*Note: After deployment, there will be very little to no updates to this repository.  It will essentially become deprecated starting in May 2022.

## Contribution Guidelines

### How To Identify Bugs

> If you identify bugs, submit an issue on the Git repo. Please detail the bug in your issue. If you know how to fix it, feel free to note the methods you would use. You could also submit a pull request with suggested code to fix it.

## Initial Planning

### Project Idea
This application is a simple virtual representation of an astrology oracle deck.  This project is a gift for a friend of mine since she likes card readings.

### Tech Stack
- React
- Typescript

\*Note: This project could have a backend database to hold all the card information but I feel it is unnecessary and will probably have the data in another file and export it to whatever components I need it in.

### User Stories
MVP
- As a user, I want to be able to tap the deck section so I can randomly choose the cards from the deck.
- As a user, I want to be able to not choose the same card/s so I can have an accurate reading.
- As a user, I want to be able to tap on the selected cards so I can understand what each card represents.
- As a user, I want to be able decide if I want another reading so I can ask more questions.

STRECH GOALS
- As a user, I want to be able to choose how many cards I want to pull from the deck so I can get a more detailed reading.

### Wireframes

![image](https://user-images.githubusercontent.com/65789692/155013036-3982cdfd-46ea-44b8-befb-6fd4a7d94f30.png)
![image](https://user-images.githubusercontent.com/65789692/155013166-a8e30e01-ada7-4a45-8fdb-99c9f2923f67.png)