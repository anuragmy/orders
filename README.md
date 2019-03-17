# orders
to run the project :-

1) clone 
2) <code> npm i </code> 
3) <code> npm run nodemon </code>

# running on postman

1) create and login user :-

<code>https://localhost:8080/customer/register (post) </code> 

<code> { "name":"","email":"", "password":"","confirmPassword":""} </code>

<code>https://localhost:8080/customer/login (post) </code> 

<code> { "email":"", "password":""} </code>


2) place order 

<code> https://localhost:8080/customer/add (post)</code> 

<code> { "item":"","catagory":""} </code>

3) check delivery status 

<code> https://localhost:8080/customer/:id (get)</code> 

