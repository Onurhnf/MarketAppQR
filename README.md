# TARA App (QR and Barcode scanning based Shopping App)

TARA App is a mobile application that revolutionizes the shopping experience by enabling users to enter and leave stores using QR codes, scan product barcodes, and make online payments directly from their phones. This app eliminates the need for traditional checkout processes, saving time, and ensuring contactless transactions, especially in situations like pandemics where maintaining social distance is crucial.

- For the front-end part of the application, please refer to the **[TARA Mobile Frontend](https://github.com/Onurhnf/tara-mobile-frontend-reactnative-nativebase) repository**.

## Features

- Users can register and log in to the application.
- Users can scan QR codes at store entrances to access the virtual cart.
- Users can scan product barcodes to view detailed product information.
- Users can add desired items to the cart and manage their carts.
- Users can securely complete payment transactions within the app. (not implemented)
- Users can track their orders and view past order history.

## Payment Functionality

Please note that the current version of the back-end repository does not include the implementation of payment functionality. If you wish to integrate payment features into your application, you will need to implement the necessary code and configuration to connect with a payment gateway of your choice.

## Demo Usage

You can try out the API endpoints by sending requests to the following URL: [https://tara-app-onurhnf.onrender.com](https://tara-app-onurhnf.onrender.com)

Example: [https://tara-app-onurhnf.onrender.com/api/v1/users/me](https://tara-app-onurhnf.onrender.com/api/v1/users/me)

You can use tools like Postman to send requests to the above URL and explore the responses for the different paths defined in the routes file.

## Technologies Used

- Front-end: [React Native](https://reactnative.dev/) with [NativeBase](https://nativebase.io/)
- Back-end: [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/)
- Database: [MongoDB](https://www.mongodb.com/)
- Authentication: [JWT (JSON Web Tokens)](https://jwt.io/)

## Installation

1. Clone the repository: `git clone https://github.com/Onurhnf/tara-backend-nodejs-expressjs`
2. Install the dependencies: `npm install`
3. Configure your own database connection in the `.env` file.
4. Start the server on development: `npm run start:dev` on production: `npm run start:prod`

## Environment

```bash
PORT=<your_port>
DATABASE=<your_database_connection_string>
DATABASE_PASSWORD=<your_database_password>

JWT_SECRET=<your_jwt_secret_key>
JWT_EXPIRES_IN=<your_jwt_expiration_time>

MAILTRAP_HOST=<email_host>
MAILTRAP_PORT=<email_port>
MAILTRAP_USERNAME=<email_username>
MAILTRAP_PASSWORD=<email_password>
```

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request by.

1. Fork the project
2. Create a new branch
3. Make changes
4. Create a Pull Request: Once you have made the changes, commit and push them to your forked repository. Then, navigate to the original repository and click on the "New Pull Request" button. Provide a clear description of the changes you made and submit the pull request.

## Contact

To connect with me or discuss any questions or issues related to the project, you can reach out to me via email at **onurhnf@gmail.com**
