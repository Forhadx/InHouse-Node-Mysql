# Mini In-House Syestem with two type user

There are two types of users 'admin' and 'employee' whose data is stored in User DB and Product Db stores all product details.

## Installation

Download the code and use the command.

```bash
npm install
```

## Models Requirements

### User model

| Entity   | Conditions                                              |
| -------- | ------------------------------------------------------- |
| username | must be unique and string value. Length min 6 & max 12. |
| password | password length min 6 and max 32.                       |
| role     | role will be 'admin' or 'employee'                      |

### Product model

| Entity      | Conditions                                  |
| ----------- | ------------------------------------------- |
| name        | must bestring value. Length min 3 & max 30. |
| price       | minimum price range 10.                     |
| description | must bestring value. Length min 10.         |
| isEnable    | default value is true.                      |
| image       | image must be 'png', 'jpeg', 'jpg' format   |

## All Rest-api routes

There are two type of routes. Auth routes and Product routes.

### Signup auth

POST

```url
http://localhost:5000/api/user/signup
```

```json
{
  "username": "forhad",
  "password": "123456",
  "role": "admin"
}
```

### Login auth

POST

```url
http://localhost:5000/api/user/login
```

```json
{
  "username": "forhad",
  "password": "123456"
}
```

### Fetch product

GET

```url
http://localhost:5000/api/product?page=1
```

```json
{
    "message": "Fetch page 1 products successfully.",
    "products": {
        "count": 2,
        "rows": [
            {
                "id": 1,
                "name": "aaaaaaaa",
                "price": 111,
                "description": "abcdeasdasdfsdf4",
                "image": "uploads/beb2d0e6-42e9-4c67-8b89-90c7e5332fc7.jpeg",
                "isEnable": true,
                "createdAt": "2022-06-07T12:46:48.000Z",
                "updatedAt": "2022-06-07T12:46:48.000Z",
                "userId": 1
            },
            ...
        ]
    },
    "currentPage": "1"
}
```

### Create product

POST

```url
http://localhost:5000/api/product
```

```json
{
  "name": "aaaaaaaa",
  "price": 111,
  "description": "abcdeasdasdfsdf4",
  "image": "uploads/beb2d0e6-42e9-4c67-8b89-90c7e5332fc7.jpeg"
}
```

### Update product

PATCH

```url
http://localhost:5000/api/product
```

```json
{
  "name": "aaaaaaaa",
  "price": 111,
  "description": "abcdeasdasdfsdf4",
  "image": "uploads/beb2d0e6-42e9-4c67-8b89-90c7e5332fc7.jpeg"
}
```

### Enable product

PATCH

```url
http://localhost:5000/api/product/enable/2
```

### Disable product

PATCH

```url
http://localhost:5000/api/product/disable/2
```

### Delete product

DELETE

```url
http://localhost:5000/api/product/2
```
