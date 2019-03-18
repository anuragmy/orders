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

6) admin can register and login same as user   

<code>https://localhost:8080/admin/register (post) </code> 

<code> { "name":"","email":"", "password":"","confirmPassword":""} </code>

<code>https://localhost:8080/admin/login (post) </code> 

<code> { "email":"", "password":""} </code>

7) admin can check all customers 

<code>https://localhost:8080/admin/customers (get) </code>

8) admin can check the delivery status of particular customer

<code>https://localhost:8080/admin/delivery/:id (delivery id) (post) </code> 

9) delivery boy could change order status 

<code>https://localhost:8080/delivery/setstatus/:id (delivery id) (post) </code> 

10) admin can assign delivery guy 

<code>https://localhost:8080/admin/delivery/:id (order id) (post) </code>

<code> {"name":""} </code>



# gotchas 

1) passport authentication not included  

2) some problem is there in reference one document to another




