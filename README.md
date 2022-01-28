# person-details
The page is a directory of people and by clicking on a person’s card, the user details (at the top of the page) should be updated with the details of the newly selected person.

##  Installation and running instructions 

1. Installation : clone this repo in your local machine and then 
    ```
    npm install 
    ```
    to install node modules. 
    Finally, 
      ```
      npm start
      ```
      to launch the web-app in your localhost.

2. Running Instructions : deployed at :  https://shashant-r.github.io/person-details/
    
    By default, the first user is active (is selected). You can click on any other user's card to view his/her details on the top. Data is fetched from the       following API:
    https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20
    Complete new and random user-data of 20 people is fetched on each reload. 

