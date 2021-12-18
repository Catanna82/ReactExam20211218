# This is a photo app, created in React. It displays a set of images, albums, portfolio and comments area.

This is a web site for Jan Todorov photography.

## Architecture

### Site functionality:

- Home page - About page, Contacts page, Team page, Work page
- Album pages - Album Preview, Download images, Upload Images page, Delete Album
- Login/Register page
- Comments pages - Add Comment /Add Comments page/, Edit and Delete Comment /My Comments page/, approve and reject comments /Admin profile page/, Likes
- User/Admin page - edit and delete profile

### User roles:

- Admin - can access all functionality
- User - can access Add Comments, Photo Albums and Comments pages
- Guest - can access Home, Login/Register

### Used technologies and modules:

- react
- uuid
- mongoose
- express
- firebase
- dropbox
- Heroku
- MongoDB Atlas

### Prerequisites:

- node js version 14+
- npm version 7+

### Images storage

All images are stored in dropbox.

## Installation, startup and application access:

### Install modules from package.json

```console
npm i 
```

### Start node server

__Server can be downloaded from: *https://github.com/Catanna82/Server*__

```console
node server.js
```
__NOTE: Server is deployed in heroku and can be accessed here: *https://jan-photo-site-server.herokuapp.com*__

### Start app

```console
npm run start
```

### Open a browser window and navigate to

http://localhost:3000/

__NOTE: This app is deployed in firebase and can be accessed here: *https://janphotosite.web.app/*__

## User interfaces

### User managment:

- Register button - If you want to use user profile just click on register button, and create a new user profile. First registered user gets the private (admin) profile.
- Login button - Get access to user functionality (only for registered users).
