# Nodemailer Sample Project

This project demonstrates how to set up and use Nodemailer to send emails from a Node.js application. The backend uses Express.js and includes CORS support to allow communication between the frontend and backend.

## Features
- Simple and lightweight backend setup
- Email sending functionality using Nodemailer
- CORS enabled for secure cross-origin communication

## Prerequisites
Before starting, ensure you have the following installed on your system:
- Node.js (v14 or later recommended)
- npm (comes with Node.js)

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/nodemailer_sample_project.git
```

### 2. Navigate to the Backend Directory
```bash
cd nodemailer_sample_project/backend
```

### 3. Install Dependencies
Run the following command to install all required Node.js packages:
```bash
npm install
```

### 4. Configure the Project
1. Create a `.env` file in the `backend` directory.
2. Add the following environment variables to configure the email sending functionality:
   ```env
   EMAIL_SERVICE=<Your_Email_Service>
   EMAIL_USER=<Your_Email_Address>
   EMAIL_PASS=<Your_Email_Password>
   ```
   Replace `<Your_Email_Service>`, `<Your_Email_Address>`, and `<Your_Email_Password>` with your email service provider details and credentials.

### 5. Start the Server
Run the following command to start the backend server:
```bash
node server.js
```

The backend server will start on `http://localhost:3000` (or the port configured in your project).

## Sending Emails
To test the email functionality, send a POST request to the `/send-email` endpoint of your server. The request body should include:
```json
{
  "to": "recipient@example.com",
  "subject": "Email Subject",
  "text": "Email Body"
}
```
You can use tools like Postman or a frontend application to send this request.

## Contributing
If you would like to contribute to this project, feel free to fork the repository and submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

---

Enjoy building your Nodemailer-based applications!
