# Shoe Management Client

## Project Live Link: https://shoes-management.vercel.app/

## Project Description

- This is a Shoe Management System where you can add, update, delete, sell shoes and also can see all the shoes and sales history.
- This is the client side of the project. You can find the server side of the project here: https://shoes-management-server-two.vercel.app

## How to Run Locally

First Clone My Project Repository by running the following command in your terminal

```bash
  git clone this_repository
```

Then Go to the project directory and open the project in your favorite code editor

```bash
  cd shoe-management-client
```

Then Install all the necessary dependencies by running the following command

```bash
  npm install (all dependencies)
```

And At-last Start the project by running the following command

```bash
  npm run dev
```

## Pages

- Home Page
- Login Page
- Register Page
- All Products Page
- Sales History Page

## Filtering Options

- Brand
- Size
- Price
- Model
- Release Date
- Color
- Style
- Sizes

## Technologies Used:

**Client**: React, Redux, RTK-Query, Tailwind CSS, React Hook Form, React Icons, React Router Dom, React Hook Form Multi Select, Sonner, React Range, Material Tailwind,

**Validation**: EsLint, Prettier

**Database**: MongoDB, Mongoose, MongoDB Atlas, MongoDB Compass

**Deployment**: Vercel

## Project Features

- Create Shoes
- Update Shoes
- Delete Shoes
- Get All Shoes
- Get Single Shoe
- Sell Shoes
- Duplicate Shoes
- Get Sales History
- Register User
- Login User

## API Reference

#### Get all shoes

```http
  GET /api/products/all-shoes
```

#### Get single shoe by id

```http
  GET /api/products/:id
```

#### Create new shoe

```http
  POST /api/products/add-shoes
```

#### Update shoe by id

```http
  PUT /api/products/update-shoe/:id
```

#### Delete shoe by id

```http
  DELETE /api/products/delete-shoe/:id
```

#### Sell shoes by id

```http
  PUT /api/products/sell-shoes/:id
```

#### Register User

```http
  POST /api/auth/register-user
```

#### Login User

```http
  POST /api/auth/login-user
```

## Author

- [@Rakib](https://www.github.com/rakib8680) - github
