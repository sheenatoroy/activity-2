
<template>
  <div class="product">
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

  .product {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #f9f9f9;
  }

  .product h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1.5em;
    color: #333;
  }

  .product p {
    margin-bottom: 10px;
    line-height: 1.5;
    color: #666;
  }

  .product button {
    padding: 8px 16px;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    font-size: 1em;
  }

  .product button:hover {
    background-color: #45a049;
  }

  .product button:last-child {
    background-color: #f44336;
  }

  .product button:last-child:hover {
    background-color: #d32f2f;
  }
</style>

  