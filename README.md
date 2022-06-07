# Mini In-House Syestem with two type user

There is two type user 'admin' and 'employee' which data store in User DB and Product Db store all products details.

## Installation

Download the code and user the command.

```bash
npm install
```

## Models Requirements

### User model

| Entity      | Conditions                                              |
| ----------- | ------------------------------------------------------- |
| \_ username | must be unique and string value. Length min 6 & max 12. |
| \_ password | password length min 6 and max 32.                       |
| \_ role     | role will be 'admin' or 'employee'                      |

### Product model

| Entity         | Conditions                                  |
| -------------- | ------------------------------------------- |
| \_ name        | must bestring value. Length min 3 & max 30. |
| \_ price       | minimum price range 10.                     |
| \_ description | must bestring value. Length min 10.         |
| \_ isEnable    | default value is true.                      |
| \_ image       | image must be 'png', 'jpeg', 'jpg' format   |
