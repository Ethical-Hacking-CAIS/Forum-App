# Forum-App
This is a simple web application where users can posts comments in a forum. They can create and login into their accounts (no security is provided). This application will be used in a stress test on the server where it will be hosted

## Project installation
Clone the project. Run npm install in the root directory. You will need to install ts-node to compile typescript in time (JIT): npm install -g ts-node. 

## Start the project
You should be able to start the project by running: npm start. Open your browser and navigate to the following url: localhost:5000

## Working with Pug
To work with pug, we can use the pug-cli: npm install pug-cli -g. This will allow us to parse the pug files into plain html by running the following command: pug -w ./views -o ./public/html -P.

## Environment variables
To be able to access your local database, you need to enter your credentials in an .env file
```
DB_PASSWORD=<your db passsword>
DB_USER=<your db user>
DB_NAME=<your db name>
```
Place the .env file in the root directory of this project

## libraries used
```
https://flowbite.com/docs/components/modal/
https://pugjs.org/language/interpolation.html
https://tailwindcss.com/
```
