# scraper

a [Sails](http://sailsjs.org) application


Problem: https://github.com/Holmusk/Engineering-Challenge-Backend

------------
Installation
------------
- install nodejs
  http://coolestguidesontheplanet.com/installing-node-js-on-osx-10-10-yosemite/
  tutorial: http://www.tutorialspoint.com/nodejs/nodejs_global_objects.htm
  
- install xcode5 for my os 10.8.5
  download from developer.apple.com
  
  Xcode 4.3.2 didn't install "Command Line Tools" by default. I had to open Xcode Preferences / Downloads / Components Tab. It had a list of optional components with an "Install" button beside each. This includes "Command Line Tools" and components to support developing for older versions of iOS.
  Now "make" is available and you can check by opening terminal and typing:make -v

- install sails
  sudo npm -g install sails

- install mongodb 
   - install macports
   http://www.macports.org/install.php
   http://brew.sh/
   - install mongodb
   http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/
   - run mongodb in one window
   http://www.tutorialspoint.com/mongodb/mongodb_query_document.htm
   mkdir db
   go to nodejs folder:
   mongod --dbpath db
   
   - test in another window
   mongo test
   MongoDB shell version: 2.4.6
   connecting to: test
	>db.test.save( { a: 1 } )
	>db.test.find()
	{ "_id" : ObjectId(5879b0f65a56a454), "a" : 1 }
	>
   
---------------
steps of coding:
---------------
http://www.raweng.com/blog/2014/09/24/how-to-get-started-with-sails-js/

- sails new scraper
  run command:sails lift
- cd scraper
- sails generate api Food
- sails generate model Food name:string company:string calories:string
- sails generate controller Food autocomplete index create
  

Test URL:
GET http://localhost:1337/Food/autocomplete/food11
GET http://localhost:1337/Food/55bdf4ae9b5fe93c0fda33ee
POST http://localhost:1337/Food?name=name1&company=company1&calories=calories1


Prepare test data(curl can run directly in terminal window of mac):
curl -X POST --data 'name="food1", company = "company1", calories = "calories1"' http://localhost:1337/Food
curl -X POST --data 'name="food2", company = "company2", calories = "calories1"' http://localhost:1337/Food
curl -X POST --data 'name="food3", company = "company3", calories = "calories1"' http://localhost:1337/Food
curl -X POST --data 'name="food30", company = "company3", calories = "calories1"' http://localhost:1337/Food

Reference of other URL
curl -X GET --data 'q="sin"' http://gd.geobytes.com/AutoCompleteCity
curl http://gd.geobytes.com/AutoCompleteCity/?q=sin


---------------------------
Useful DB query of mongoose
---------------------------
>db.food.insert([
{
   name: 'food10', 
   company: 'company1',
   calories: 'calories1',
},
{
   name: 'food11', 
   company: 'company2',
   calories: 'calories2',
}
])


> db.food.find().limit(1)

> db.food.find( { _id: ObjectId("55bdf4ae9b5fe93c0fda33ee") } )

> db.food.find({name: /^boo/}) //like 'pa%' 

> db.food.find({name: /^boo/}).limit(1) //like 'pa%' 

> db.food.find({name: 'food1'})

> db.food.remove({})


Data in DB:
---------------------
id
name
company

calories             239
total_fat            9g
saturated            1g
polyunsaturated      1g      
monounsaturated      1g
trans                0g
cholesterol          0mg
sodium               2mg
potassium            47mg
total_carbs          34g
dietary_fiber        7g
sugars               5g
protein              8g
vitamin_a            0%
vitamin_c            0%
calclum              0%
iron                 11%

----------------
Tips
----------------
- see below error when run "sails lift"
events.js:85
      throw er; // Unhandled 'error' event
            ^
Error: listen EADDRINUSE

Solved by: 
lsof -i tcp:1337
kill -9 uid

