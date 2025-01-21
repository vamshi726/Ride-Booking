# Ride-Booking Backend API

## Users Endpoint

### Register User

**Endpoint:** `/users/register`

**Method:** `POST`

**Description:** This endpoint allows a new user to register by providing their first name, last name, email, and password.

**Request Body:**

The request body must be a JSON object containing the following fields:

- `fullName`: An object containing:
  - `firstName` (string, required): The user's first name. Must be at least 3 characters long.
  - `lastName` (string, optional): The user's last name. Must be at least 3 characters long if provided.
- `email` (string, required): The user's email address. Must be a valid email format.
- `password` (string, required): The user's password. Must be at least 5 characters long.

**Example Request:**

```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response:**

- `201 Created`: If the user is successfully registered, the response will include a JSON object containing the authentication token and user details.
- `400 Bad Request`: If there are validation errors, the response will include a JSON object containing the errors.

**Example Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

**Validation Errors:**

If the request body does not meet the validation criteria, the response will include an array of error messages.

**Example Validation Error Response:**

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 character long",
      "param": "fullName.firstName",
      "location": "body"
    },
    {
      "msg": "Password name must be at least 5 character long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Login User

**Endpoint:** `/users/login`

**Method:** `POST`

**Description:** This endpoint allows an existing user to log in by providing their email and password.

**Request Body:**

The request body must be a JSON object containing the following fields:

- `email` (string, required): The user's email address. Must be a valid email format.
- `password` (string, required): The user's password. Must be at least 5 characters long.

**Example Request:**

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```


**Response:**

- 200 OK: If the user is successfully logged in, the response will include a JSON object containing the authentication token and user details.
- 400 Bad Request: If there are validation errors, the response will include a JSON object containing the errors.
- 401 Unauthorized: If the email or password is incorrect, the response will include an error message.
Example Response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

**Validation Errors:**

If the request body does not meet the validation criteria, the response will include an array of error messages.

**Example Validation Error Response:**

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password name must be at least 5 character long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

**Authentication Errors:**

If the email or password is incorrect, the response will include an error message.

Example Authentication Error Response:
```json
{
  "message": "Invalid email or password"
}
```

### Get User Profile

**Endpoint:** `/users/profile`

**Method:** `GET`

**Description:** This endpoint allows an authenticated user to retrieve their profile information.

**Authentication:** Requires a valid JWT token in either:
- Authorization header as `Bearer <token>`
- Cookie named 'token'

**Response:**

- `200 OK`: Returns the user's profile information
- `401 Unauthorized`: If no token is provided or token is invalid

**Example Response:**

```json
{
  "_id": "60d0fe4f5311236168a109ca",
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com"
}
```

### Logout User

**Endpoint:** `/users/logout`

**Method:** `GET`

**Description:** This endpoint allows an authenticated user to log out by invalidating their current authentication token.

**Authentication:** Requires a valid JWT token in either:
- Authorization header as `Bearer <token>` 
- Cookie named 'token'

**Response:**

- `200 OK`: If the user is successfully logged out
- `401 Unauthorized`: If no token is provided or token is invalid

**Example Response:**

```json
{
  "message": "Logged out successfully"
}