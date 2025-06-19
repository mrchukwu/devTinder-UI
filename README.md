# Dev Tinder Project

- Project initialized with git to enable keep and update progress track.
- Project setup with Vite + Reactjs

## DevTinder UI

- This is the Dev Tinder UI (User Inerface) web application
- fist create Vite + React application
- remove uncessary code and create a Hello World
- install Tailwind CSS and configured
- Daisy UI installed and configured  https://daisyui.com/
- Add navbar compnent to App.jsx
- Create a NavBar.jsx separate component and embed in the App.jsx
- installed react-router-dom  https://reactrouter.com/6.30.1/start/tutorial
- created BrowserRouter
- created Routes, Route and nested Route inside the body Body Route https://reactrouter.com/6.30.1/start/tutorial
- Created Footer.
- Install Axios https://www.npmjs.com/package/axios
- CORS - instal cors in backend => add cors middleware with configurations: origin, cridentials; true : https://www.npmjs.com/package/cors
- When ever your making API call pass axios => {withCredentials: true}
- Installed redux toolkit : npm install @reduxjs/toolkit react-redux https://redux-toolkit.js.org/tutorials/quick-start
- Configurestore => Provider => CreateSlice => add reducer to store
- Added redux devTool extension in browser
- Worked on Login and checking if reciving data properly in store
- Worked on Navbar to update user's "welcome + user's firstname" once user is logged in
- Refactored code to add constants file and created a BASE_URL with the localhost. Created a        component folder and moved all components inside it.
- Cant access other routes without login
- if Token is not present, redirect user to login
- Logout feature created
- Profile page
- Edit profile created
- Notification on updating profile created (show toast)
- Created a connection page to see all connections
- created page to see all request connecttions
- Created a feature to accept and reject connection request
- Created SignUp feature, to create a new user
- E2E => did end to end testing

# Deployment

- Signup to AWS
- Launch an EC2 instance
- Setup the remote server (configure neccessary details)
- chmod 400 <secret>.pm
- Login nto your systemssh -i "project-secret.pem" ubuntu@secret-key.ap-south-1.compute.amazonaws.com
- Install Node version of your current node version project
- Git clone your project repos
    - Steps for frontend
        - npm insall => installs dependencies
        -npm run build => to build the project on remote server
        - sudo apt update => to update the remote system
        - sudo apt install nginx
        -  sudo systemctl start nginx 
        - sudo systemctl enable  nginx
        - Copy code from dist(build files) 


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
