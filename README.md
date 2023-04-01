# API List

## this API especially for test tech nutech powered by telkom Group

# USER-API

| Routes | EndPoint                                                 | Description          |
| ------ | -------------------------------------------------------- | -------------------- |
| GET    | http://3.222.207.32:5050/                                | check API connection |
| POST   | http://3.222.207.32:5050/api/test_nutech/user/add        | register             |
| GET    | http://3.222.207.32:5050/api/test_nutech/user/get_all    | get all users        |
| PUT    | http://3.222.207.32:5050/api/test_nutech/user/update/:id | update user by:id    |
| DELETE | http://3.222.207.32:5050/api/test_nutech/user/delete/:id | update user by:id    |

---

# PRODUCTS-API

| Routes | EndPoint                                                    | Description          |
| ------ | ----------------------------------------------------------- | -------------------- |
| GET    | http://3.222.207.32:5050/                                   | check API connection |
| POST   | http://3.222.207.32:5050/api/test_nutech/product/add        | register             |
| GET    | http://3.222.207.32:5050/api/test_nutech/product/get_all    | get all products     |
| PUT    | http://3.222.207.32:5050/api/test_nutech/product/update/:id | update product by:id |
| DELETE | http://3.222.207.32:5050/api/test_nutech/product/delete/:id | update product by:id |

## <Author "budyhartono55@gmail.com">

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
