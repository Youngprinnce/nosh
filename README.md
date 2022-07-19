# Simple Signup/Signin Authentication flow with NodeJS, Express, MongoDB

## Features
- User can signup
- User can signin
- Refresh token is generated for each user
- User can update their profile

### Dev Tools
- Nodejs/ExpressJS
- TypeScript
- Mocha


### Documentation

#### => Payload
- firstname: string
- password: string
- email: string
- mobile: string
- lastname: string
- gender: string
- country: string


- /api/v1/auth/signup   - POST   - Signup   - Success/Error   - 201/400
- /api/v1/auth/signin   - POST   - Signin   - Success/Error   - 200/400
- /api/v1/auth/refresh-token  - POST   - Refresh  - Success/Error   - 200/400
- /api/v1/users/dashboard  - GET    - Dashboard(Authenticated)   - Success/Error   - 200/400
- /api/v1/users/update  - PUT    - Update(Authenticated)   - Success/Error   - 200/400

### How to setup project on your local machine (Step 1)
#### Pre-requisite
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.getpostman.com/downloads/)

#### Installing 
- Clone the repository
- CD into the project folder
- Rename .env.example to .env
- Pass DATABASE_URL to your own moongodb connection uri

- Open your terminal
- Run `npm install` 

#### Run the app
- Run `npm run dev`

#### Run test cases
- Run `npm test`
