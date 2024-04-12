<!-- Product.vue -->
<template>
    <div>
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
      <button @click="edit">Edit</button>
      <button @click="deleteProduct">Delete</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Product',
    props: ['product'],
    methods: {
      edit() {
        this.$emit('edit', this.product);
      },
      deleteProduct() {
        this.$emit('delete', this.product.id);
      }
    }
  };
  </script>
  
  <style>
  /* Add your CSS styles here */
  </style>
  