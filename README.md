# 👟 Shoe Management Client

🔗 **Live Project**: [Shoe Management](https://shoes-management.vercel.app/)

## 📝 Project Overview

Welcome to the **Shoe Management System** - your one-stop solution for managing a shoe business. This platform is packed with features that allow you to:

- 🛠️ Add, update, and delete shoes
- 💰 Sell shoes and track sales history
- 🔍 Use advanced filtering options to sort shoes by brand, size, price, model, release date, color, style, and more
- 🔑 Seamlessly register and login for user convenience

The platform caters to two distinct user types:

- 🏪 **Sellers**: Manage shoe inventory and monitor sales history
- 🛍️ **Buyers**: Access the full shoe catalog, request shoe polishing services, and customize shoes by selecting their preferred color and size

This repository houses the client-side code of the project. For the server-side code, visit: [Shoe Management Server](https://shoes-management-server-two.vercel.app)

## 🚀 Getting Started with Shoe Management Client

Follow these steps to set up the project locally:

1. **📥 Clone the Project**

   Use the following command in your terminal to clone the project repository:

   ```bash
   git clone <https://github.com/rakib8680/shoes-management-client>
   ```

2. **📂 Navigate to the Project Directory**

   Change your current directory to the project directory:

   ```bash
    cd shoe-management-client
   ```

3. **🔧 Install Dependencies**

   Install all the necessary dependencies using npm:

   ```bash
    npm install
   ```

4. **🎉 Start the Project**

   Finally, start the project with the following command:

   ```bash
    npm run dev
   ```

## 📚 Pages

- 🏠 **Home Page**
- 🔑 **Login Page**
- 📝 **Register Page**
- 🛍️ **All Products Page**
- 📈 **Sales History Page**
- 🛠️ **Services Page**
- ✅ **Verify Product Page**

## 🔍 Filtering Options

- 🏷️ **Brand**
- 📏 **Size**
- 💰 **Price**
- 🎨 **Model**
- 📅 **Release Date**
- 🌈 **Color**
- 👗 **Style**
- 👟 **Sizes**

## 💻 Technologies Used:

**Client**: React, Redux, RTK-Query, Tailwind CSS, React Hook Form, React Icons, React Router Dom, React Hook Form Multi Select, Sonner, React Range, Material Tailwind, React Sweet Alert

**Validation**: EsLint, Prettier

**Database**: MongoDB, Mongoose, MongoDB Atlas, MongoDB Compass

**Deployment**: Vercel

## 🌟 Project Features

- 🛠️ **Create Shoes**
- 🔄 **Update Shoes**
- 🗑️ **Delete Shoes**
- 📦 **Bulk Delete Shoes**
- 📚 **Get All Shoes**
- 🔍 **Get Single Shoe**
- 💰 **Sell Shoes**
- 🔄 **Duplicate Shoes**
- 📈 **Get Sales History**
- 📝 **Register User**
- 🔑 **Login User**
- ✨ **Polishing Request**
- 🎨 **Customize Shoes**
- 🔍 **Filter Shoes**
- 🕵️ **Search Shoes**
- 🔄 **Sort Shoes**

## API Reference

#### 👟 Get all shoes

```http
GET /api/products/all-shoes
```

#### 🔍 Get single shoe by id

```http
  GET /api/products/:id
```

#### ➕ Create new shoe

```http
  POST /api/products/add-shoes
```

#### 🔄 Update shoe by id

```http
  PUT /api/products/update-shoe/:id
```

#### 🗑️ Delete shoe by id

```http
  DELETE /api/products/delete-shoe/:id
```

#### 📦 Delete Multiple shoes

```http
  DELETE /api/products/delete-shoes
```

#### 💰 Sell shoes by id

```http
  PUT /api/products/sell-shoes/:id
```

#### 🔄 Duplicate shoes by id

```http
  POST /api/products/duplicate-shoes/:id
```

#### 📈 Get Sales History

```http
  GET /api/products/sales-history
```

#### ✅ Verify Shoes by id

```http
  PUT /api/products/verify-product/:id
```

#### 📝 Register User

```http
  POST /api/auth/register-user
```

#### 🔑 Login User

```http
  POST /api/auth/login-user
```

#### ✨ Polishing Request

```http
  POST /api/products/polishing-request
```

#### 🎨 Customize Shoes

```http
  POST /api/products/customize-shoes
```

#### 🔍 Get All Polish Services Request

```http
  GET /api/products/polishing-request
```

#### 🗑️ Delete Polishing Request

```http
  DELETE /api/products/delete-polishing-request/:id
```

## 🖋️ Authored by

- [🚀 Rakib](https://www.github.com/rakib8680) - Visionary behind this project. Find more about me on [GitHub](https://www.github.com/rakib8680).hub
