# Customer CRM Application

## Overview
This MERN stack application collects customer information, displays it in a grid, and integrates with the HubSpot CRM system.

## Functional Requirements
1. **Customer Information Input (React)**
    - Input fields for:
        - Phone Number
        - Name (First and Last)
        - Email
        - Address (street, city, state, zip)
        - Current Organization
    - "Submit" button to add customer information.
2. **Data Display (React)**
    - Fetch and display customer data in a grid format upon submission.
3. **CRM Integration (Node.js/Express.js)**
    - Backend to receive customer data and store it temporarily.
    - "Push to CRM" button to send data to HubSpot CRM.

## Technical Requirements
- **Front-End (React)**
    - Use React components for the user interface.
    - Implement form validation and error handling through React Hook Form and Yup.
    - Use Axios for API calls.
- **Back-End (Node.js/Express.js)**
    - RESTful API using Express.js.
    - Routes for customer data submission and CRM integration using Express.js and Node.js
    - Use MongoDB for temporary storage.
- **CRM System**
    - HubSpot CRM integration.

## Installation and Setup

### Front-End
1. Navigate to the `customer-crm-app` directory:
    ```bash
    cd customer-crm-app
    ```
2. Install dependencies:
  - Dependencies like `axios` for API calls,react-router-dom for routing, `react-hook-form` for form validation,`yup` for schema validation , configure `tailwindcss` for styling in vite.
  - Here `vite` is used as a build tool.
    ```bash
    npm install 
    ```
3. Start the React application:
    ```bash
    npm run dev
    ```

### Back-End
1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2. Install dependencies:
  - Install the dependencies like `express` for routing, `mongoose` for data modelling, `dotenv` for handling the environment variables, `axios` for API calls,`cors` for cross-origin resource sharing.
  - The devDependencies like `nodemon` for auto-reloading the server and `prettier` for code formatting to be unfirom across the project.
    ```bash
    npm install
    ```
3. Run the server:
    ```bash
    npm run dev (see the configurations in pacakge.json)
    ```

## CRM Integration Process
1. Sign up for a HubSpot developer account and create a private app to obtain an API key.
2. Replace `HUBSPOT_ACCESS_TOKEN` in `backend` with your actual HubSpot Access Token.
3. Allow different read and write permission to allow get and post request on HUBSPOT.
4. Create HUBSPOT_CLIENT to handle get and post request for HubSpot CRM.
5. The backend will handle pushing customer data to HubSpot when the "Push to CRM" button is clicked.

## Future Enhancements
- Addtion of state management tool if their is need to bulk push.
- Add different sorting ways to display the data.
- Add user authentication and authorization.
- Implement more CRM systems.

