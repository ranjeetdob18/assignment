
# Hotel Management RESTfull API Service for Node.js using MongoDB

## Prerequisites

To run this sample you will need the following:

* Install Node.js from http://nodejs.org/
* Install MongoDB from [MongoDB download center ](https://www.mongodb.com/download-center?_ga=2.51199855.799714080.1524437300-1146184949.1522821734#production). Make sure to add the location of the MongoDB server to your environment PATH and run the MongoDB server.
# Download the Sample application and modules

Next, clone the sample repo and install the NPM.
From your shell or command line:
```
$ git clone https://github.com/ranjeetdob18/assignment.git
$ cd your directory
$ npm install
```

## Run the application

```
$ cd your directory
$ node index.js
```

## You're done!

You will have a server successfully running on `http://localhost:8000`. Your REST / JSON API Endpoint will be available at ``.
For user API with sample given
* http://localhost:8000/users/create (crate new user)
```
{
	
	"fullName" : "Ranjeet Bhardwaj",
	"mobile" : 8009056458,
	"email" : "ranjeet@gmail.com"
}

```
* http://localhost:8000/users/5c5697ff82506440d00cdcb2 (update user with user-id)
```
{
	"fullName" : "Ranjeet Bhardwaj",
	"mobile" : 8009056458,
	"email" : "ranjeet@gmail.com"
}

```
* http://localhost:8000/user/5c5697ff82506440d00cdcb2 (delete user with user-id)

For Hotel API with sample given
* http://localhost:8000/hotels/create (crate new hotel)
```
{
	"name" : "Treebo Laxvas",
	"contact" : 8009056458,
	"description" : "This property also has one of the best-rated locations in Thane! Guests are happier about it compared to other properties in the area.",
	"address" : "Near Lodha Paradise, Bhivandi Bypass Road, Majiwade, Thane, , 400601 Thane, India",
	"location" : {"type"  :"Point","coordinates" : [72.9776,19.2079]}
}

```

For Room API with sample given
* http://localhost:8000/rooms/create (crate new room)
```
{
	"hotel_id" : "5c569d2582506440d00cdcb6",
	"capacity" : 6,
	"types" : "Queen",
	"price" : 7999
}

```
