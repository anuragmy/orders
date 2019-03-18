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

<code> https://localhost:8080/customer/status/:id (delivery id) (get)</code>

4) delivery guy will get the status along with dispatch location 

<code> https://localhost:8080/delivery/status (get) </code>  

5) customer can check order status   

<code> https://localhost:8080/customer/allorders (get) </code> 



