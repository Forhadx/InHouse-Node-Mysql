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

```url
http://localhost:5000/api/user/login
```

```json
{
  "username": "forhad",
  "password": "123456"
}
```
