<template>
    <div class="product-form">
      <h2>Add New Product</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Product Name:</label>
          <input type="text" id="name" v-model="newProduct.name" required>
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="newProduct.description" required></textarea>
        </div>
        <div class="form-group">
          <label for="price">Price:</label>
          <input type="number" id="price" v-model.number="newProduct.price" required>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductForm',
    data() {
      return {
        newProduct: {
          name: '',
          description: '',
          price: null
        }
      };
    },
    methods: {
      submitForm() {
        this.$emit('addProduct', this.newProduct);
        this.newProduct = {
          name: '',
          description: '',
          price: null
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .product-form {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  textarea,
  input[type="number"] {
    width: 100%;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
  }
  </style>
  