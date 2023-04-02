## This API especially for test tech nutech powered by telkom Group

```
API RUNNING ON AMAZON EC2 INSTANCE
```

![Amazon Web Services, Inc.](/server/public/images/amazon-dash.png)

---

```
Tools
```

| No  | Tools                         |
| --- | ----------------------------- |
| 1   | Amazon Web Service (Service)  |
| 1   | Javascript (Backend)          |
| 2   | NodeJS (Backend)              |
| 3   | php (Frontend)                |
| 3   | Bootstrap (Frontend)          |
| 4   | expressJS (Backend)           |
| 4   | Codeigniter (Backend)         |
| 4   | jsonwebtoken (authentication) |
| 5   | Postman (Backend)             |
| 6   | MySQL (Database)              |
| 7   | Multer (fileUpload)           |
| 8   | bcrypt (authentication)       |
| 9   | GIT (Version Control System)  |
| 10  | PM2 (autoServer)              |

# USER-API

| Routes | EndPoint                                                 | Description          |
| ------ | -------------------------------------------------------- | -------------------- |
| GET    | http://3.222.207.32:5050/                                | check API connection |
| POST   | http://3.222.207.32:5050/api/test_nutech/user/add        | register             |
| GET    | http://3.222.207.32:5050/api/test_nutech/user/get_all    | get all users        |
| GET    | http://3.222.207.32:5050/api/test_nutech/user/:id        | get user by by:id    |
| PUT    | http://3.222.207.32:5050/api/test_nutech/user/update/:id | update user by:id    |
| DELETE | http://3.222.207.32:5050/api/test_nutech/user/delete/:id | delete user by:id    |

---

# PRODUCTS-API

| Routes | EndPoint                                                    | Description          |
| ------ | ----------------------------------------------------------- | -------------------- |
| GET    | http://3.222.207.32:5050/                                   | check API connection |
| POST   | http://3.222.207.32:5050/api/test_nutech/product/add        | add product          |
| GET    | http://3.222.207.32:5050/api/test_nutech/product/get_all    | get all products     |
| GET    | http://3.222.207.32:5050/api/test_nutech/product/:id        | get product by by:id |
| PUT    | http://3.222.207.32:5050/api/test_nutech/product/update/:id | update product by:id |
| DELETE | http://3.222.207.32:5050/api/test_nutech/product/delete/:id | delete product by:id |

```
upload Handler
```

| Routes | EndPoint                                              | Description                  |
| ------ | ----------------------------------------------------- | ---------------------------- |
| POST   | http://3.222.207.32:5050/api/test_nutech/upload/image | max 100kb && only .jpg, .png |

```
Author and Developer by "budyhartono55@gmail.com"
```

# How to run

## Server

```bash
$ cd server
$ npm i
$ npm start
```

## Client

```bash
$ cd client
$ npm i
$ npm start
```
