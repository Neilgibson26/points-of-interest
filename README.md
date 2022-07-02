# NightPlanner

- [Description](#description){#toc-description}
- [User guide /Manual](#user-guide-manual){#toc-user-guide-manual}
- [Features](#features){#toc-features}
- [Project status](#project-status){#toc-project-status}
- [Technologies &Libraries](#technologies-libraries){#toc-technologies-libraries}

### Description

Don't know where to go for your next drink or meal? Night planner has got you covered!! This website is intended for users to be able to make posts about venues, whether they are bars, pubs, nightclubs, restaurants or cocktail bars. Users can create their account, and then create a post about their point of interest that they have discovered and give their thoughts on the venue for other people to see.

### User guide / Manual

First when you clone this repo or have it on your local machine you should cd into the root folder and run 'npm install' in your terminal to install all necasary dependancies. This may take a few seconds. Once this has completed you should run 'npm run start' to run the web app on your local machine so you can then use the app. Before you can access the website tho you will need to sign up/create an account and then log in with the details you have just provided. When signing up you can choose to have an admin account or just be a regular user. I suggest going for the admin account so you have access to everything the website has to offer. From then on explore the site on your own. The website will be seeded with some template data to make it look okay for the first load up.

If you would like to test the code you can run the command 'npm run dev' in the terminal at the root folder and this will begin running the tests. Sometimes a test might fail on the first or second go due to the set-ups but I have not figured out how to fix this. They will all work eventually!

The website is also hosted on heroku over at [Heroku server!](https://blooming-falls-47995.herokuapp.com/). Maybe it will be turned off but you can try accessing this link.

### Features

I have already mentioned some of the features but I will list all of them here again.

- Creating an account.
- Logging in with your credentials.
- Regular user account.
- Admin account with admin dashboard.
- Analytics of the points of interest and of users (users analytics only visible by admins).
- Ability to view your profile, edit and delete.
- Ability to view all of the points of interest created by any users on the site.
- Ability to filter the venues based on category like for eg. 'Bars' or 'Cocktail Bars' and a few more.
- Create a venue yourself.
- Edit or delete any venues you have added to the site.
- View all other users accounts if admin.
- If admin, you can edit or delete all other user accounts.
- You can upload images for any venue you create.

### Project status

I have completed the core functionality of the project but would definitely like to add some features and am open to suggestions or help. Things like placing the venues on a map on a single page would be nice, searching the web for opening and closing times etc. I will keep workig away on it and improving it little by little!

### Technologies & Libraries

- JavaScript
- Cloudinary
- Bootstrap
- Bulma
- JWT
- Swagger open API
- Joi
- MongoDB
- JSONLowDb
- Node Express
- Axios
- Chai & Mocha
- Hapi & Handlebars - cookie - vision - inert - boom
- UUID
- Mongoose
- Dotenv
