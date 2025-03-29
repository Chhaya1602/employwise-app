Below i provided a screenshot of how UI of Employwise-app looks like ;

![image](https://github.com/user-attachments/assets/898c182d-2ecd-4e81-a6c8-06e56834eb0e)




project objective : 
The primary goal of this project is to create a functional and interactive web application that enables users to log in, view a list of registered users, and perform CRUD (Create, Read, Update, Delete) operations. This application is structured in a way that adheres to best coding practices, clean UI design, and efficient API communication.

Key Features :
Authentication System

Users log in using a valid email and password.

Upon successful authentication, a token is stored for session persistence.

Unauthenticated users are redirected to the login page.

User List Management

Fetch and display a paginated list of users from the API.

Each user’s name, email, and avatar are displayed in a structured format.

Edit User Details

Clicking the Edit button opens a pre-filled form.

Users can modify first name, last name, and email.

The updated data is sent to the API, and changes are reflected in the UI.

Delete Users

Users can be removed from the list using the delete function.

The UI is updated immediately upon successful deletion.

Pagination and Navigation

The application supports pagination to navigate user records efficiently.

Implemented using React Router for seamless page transitions.

Error Handling & Form Validation

Displays appropriate error messages when API requests fail.

Ensures input validation before submitting user details.

Responsive & User-Friendly UI

Optimized for both desktop and mobile devices.

Styled using Tailwind CSS / Material-UI for a modern and clean look.

Technology Stack
Frontend: React.js

State Management: React Hooks (useState, useEffect)

Routing: React Router

API Communication: Axios (for HTTP requests)

UI Design: Tailwind CSS / Custom CSS

Authentication Handling: Token-based authentication using Local Storage

How It Works
Login:

Users enter the provided email and password to log in.

The system verifies credentials and grants access upon success.

User List Page:

Displays a paginated list of users fetched from the API.

Each user has options to edit or delete their details.

Editing a User:

Clicking the Edit button opens a form.

Users can update name and email, and submit changes.

The API reflects the updates, and the list is reloaded.

Deleting a User:

Clicking the Delete button removes the user from the UI.

The request is sent to the API, and the user is deleted permanently.

Project Scope & Assumptions
Authentication is simulated (real user accounts are not created).

Reqres API is a mock API, meaning changes do not persist beyond the session.

Pagination is limited to two pages due to API constraints.

Token is stored in local storage for session persistence.

Conclusion
The EmployWise App effectively demonstrates frontend development skills, REST API integration, and user authentication mechanisms using React. It provides a well-structured, user-friendly interface that follows best coding practices for modern web applications. This project is a great example of handling user data in a React environment, ensuring a seamless experience with proper state management and error handling.

//------------------------------------------------------------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
