# Product Value Calculator API

This is a simple REST API built with Node.js, Express, and SQLite. It allows users to calculate the total value of a list of products and store each product's details in a database. This project includes environment management with `dotenv` and enables cross-origin requests with `cors`.

## Features
- **Calculate Total Product Value**: Accepts a list of products, calculates the total price, and returns the total value.
- **Store Product Information**: Saves product information (name, price, and quantity) in a SQLite database.
- **Cross-Origin Resource Sharing (CORS)**: Enabled to allow requests from different origins.

## Prerequisites
- **Node.js**: Make sure Node.js is installed. Download it [here](https://nodejs.org/).
- **SQLite**: SQLite is required to create the database file.

## Project Setup

1. **Clone the Repository**  
   Clone this repository to your local machine and navigate into the project folder.
   ```bash
   git clone https://github.com/upenderdeshaboina/culture-link-backend-assignment.git
   cd culture-link-backend-assignment
2. **Install Dependencies**

    Install the required packages by running the following command in your terminal.
   ```bash
   npm install
3. **Configure Environment Variables**

    Create a .env file in the project’s root directory and specify the PORT for the server to run on.

    Example .env file:
    ```plaintext
    PORT=3005
4. **Run the Application**

    Start the server with:

    ```bash
    npm start

    The server will be available at http://localhost:3005 (or the specified port in your .env file).

## Technologies used
- **Express.js**: For handling HTTP requests and creating routes
- **SQLite with sqlite3 and open**: For database management and data storage
- **dotenv**: To manage environment variables
- **cors**: To enable cross-origin requests