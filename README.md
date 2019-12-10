# Modular Database
 A modular database for add database service for any project

- Import the module and instantiate an object with the database choised
``` js
const database = require('./modular_database')
``` 
##### in MongoDB case
``` js
const mongo = new database.mongo_db({ MONGO_URI: 'mongodb://<admin>:<user>@<host>:<port>/<database>' })
```

## Methods 
All modules methods, are async functions, the params query are javascript objects with the filters of query for mongo db. 
Read de docs
https://mongoosejs.com/docs/queries.html

``` js
async mongo.create(query,Schema)
async mongo.get(query,Schema,{sort,limit})
async mongo.update({query,options,array},Schema)
async mongo.delete(query,Schema)
``` 

Until now, the module only manage MongoDB database's, but in the future works with MySQL, Postgresql and Firebase Firestore.

| MongoDB | PostgreSQL | MySQL | Firebase |
| ------------- | ------------- | ------------- | ------------- |
| ![MongoDB](https://miro.medium.com/max/3512/1*Ce0gUe0LbnhL7ebnDGTp5w.png)  | ![PostgreSQL](https://ubunlog.com/wp-content/uploads/2018/07/postgresql.jpeg)  | ![MySQL](https://www.anerbarrena.com/wp-content/uploads/2016/05/mysql.jpg) | ![Firebase](https://miro.medium.com/max/3200/1*ipwpqQrHz0Lkd_5setXQCQ.png) |
| +Supported | -Not Suported | -Not Suported |-Not Suported |
