# Shoe Management Client

## Project Live Link: https://shoes-management.vercel.app/

## Project Description

- This is a Shoe Management System where you can add, update, delete, sell shoes and also can see all the shoes and sales history.
- You can also filter the shoes by brand, size, price, model, release date, color, style, and sizes.
- You can also register and login to the system.
- This Site has two kind of users: Seller and Buyer. Seller can add, update, delete shoes and they can also see the sales History and Buyer can only see all the shoes and They can make request for polishing their shoes.Also Buyers can customize their shoes by choosing the color and size of the shoes.
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
- Services Page
- Verify Product Page

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

**Client**: React, Redux, RTK-Query, Tailwind CSS, React Hook Form, React Icons, React Router Dom, React Hook Form Multi Select, Sonner, React Range, Material Tailwind, React Sweet Alert

**Validation**: EsLint, Prettier

**Database**: MongoDB, Mongoose, MongoDB Atlas, MongoDB Compass

**Deployment**: Vercel

## Project Features

- Create Shoes
- Update Shoes
- Delete Shoes
- Bulk Delete Shoes
- Get All Shoes
- Get Single Shoe
- Sell Shoes
- Duplicate Shoes
- Get Sales History
- Register User
- Login User
- Polishing Request
- Customize Shoes
- Filter Shoes
- Search Shoes
- Sort Shoes

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

#### Delete Multiple shoes

```http
  DELETE /api/products/delete-shoes
```

#### Sell shoes by id

```http
  PUT /api/products/sell-shoes/:id
```

#### Duplicate shoes by id

```http
  POST /api/products/duplicate-shoes/:id
```

#### Get Sales History

```http
  GET /api/products/sales-history
```

#### Verify Shoes by id

```http
  PUT /api/products/verify-product/:id
```

#### Register User

```http
  POST /api/auth/register-user
```

#### Login User

```http
  POST /api/auth/login-user
```

#### Polishing Request

```http
  POST /api/products/polishing-request
```

#### Customize Shoes

```http
  POST /api/products/customize-shoes
```

#### Get All Polish Services Request

```http
  GET /api/products/polishing-request
```

#### Delete Polishing Request

```http
  DELETE /api/products/delete-polishing-request/:id
```

## Author

- [@Rakib](https://www.github.com/rakib8680) - github
