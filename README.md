# Pixel Pushing 

## Project Aims ##
An example community website which users can securly signup to. Admin users have the ability to add events to the site via an online form. Once signed in, the user's token is stored allowing for the site to grant access to the relevant pages for each user.

## Tech Used ##
Application uses the MERN stack. 

Backend is based on MongoDB with Express and Node. <br> Bcrypt is used for password hashing, allowing for safer password storage in the database. <br>JSON Web Tokens are used to authenicate users and session management. 

Frontend uses React with Bootstrap to provide styling and responsiveness.

## Project Setup ##

To replicate this project:

### Creating .env file ###
You will need to create an .env files for your project. The below should be added to the file.
- SECRET_KEY=&lt;your key&gt;
- MONG0_URL=&lt;database connection string&gt;

__Please ensure that .env files are .gitignored__

This project requires several node dependicies listed in the package-lock.json/package.json files. After the env files are created run __npm install__ from the root of the project, then navigate to the backend directory and run __npm install__ again.

### Creating the database ###
Sample data is provided:
- run the index.js file located in /backend/seeds to seed the database. Two test user accounts are provided:

Admin account:
email: "layla@test.com"
username: "layla2627"
password: 'test378egd' <br>
Standard account:
email: "isla@test.com"
username: "isla2893"
password: 'test29d9djmxxm'

