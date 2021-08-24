# Spring and Angular Web Application: Terraria API

## Description:
In this project, I built a web application that uses *Spring* to build backend features 
and *Angular* to build the frontend. Both tools are very popular and together
form a powerful stack that allows for sta and flexibility. In this case, the main role of the backend is to provide
a way of interacting with JavaScript through HTTP and JSON. Angular and Spring are built as a single application, so npm
is installed as part of the build. If you would like to run this project on your machine check out the set-up section!
## Usage
The API is handled by Spring and here are some requests you can do:

Get all items (in this case weapon type):
```http request
GET /api/v1/weapons
```
Sort all items by a specific field and order (asc or desc):
```http request
GET /api/v1/weapons?sort_by=fieldName&order=asc
```
Get an item by name:
```http request
GET /api/v1/weapons/item_name/{name}
```

Get an item by name as a LIKE query:
```http request
GET /api/v1/weapons/item_name?like=example
```

There are more things to come, at the moment there are only weapons on the CSV file and Cloud database. But in the future,
I hope to add all other types such as tools, accessories, armor, etc. 
Finally, of course you may use the application by running `./mvnw spring-boot:run` and going to the localhost port it is hosted on.

## Set-up
The awesome part about this project is `npm` gets installed as part of our build. So both Angular and the Spring Boot 
Application run on the same localhost port. This was accomplished by using the even more awesome plugin by Eirik 
Sletteberg. Below you will see the steps to set up this project on your computer:

Warning: This will install node, npm, and the dependencies needed to run the project. You can see those under 
`package.json` and `pom.xml` for spring.
1. To get started, set up a MySQL server locally using the "weapons" CSV file, make sure it matches the defined names in
the application properties or update them appropriately.
2. Clone the repo and generate the resources with: ```./mvnw generate-resources```. If this throws an 
error, try making an executable of the maven wrapper first: ```chmod -x ./mvnw```.
3. That's it! Run the application with: ```./mvnw spring-boot:run```

Something else you can do is build the frontend continuously by running this command:
```ng build --watch```. You may need to tweak your IDE, but it works fine on IntelliJ and the changes get pushed to
`target/classes`.

