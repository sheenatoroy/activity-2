<template>
    <div>
      <ProductList :products="products" @editProduct="editProduct" @deleteProduct="deleteProduct"/>
      <router-view @addProduct="addProduct" @updateProduct="updateProduct"/>
    </div>
  </template>
  
  <script>
  import ProductList from './components/ProductList.vue';
  
  export default {
    name: 'App',
    components: {
      ProductList
    },
    data() {
      return {
        products: [
          { id: 1, name: "Product 1", description: "Description 1", price: 10 },
          { id: 2, name: "Product 2", description: "Description 2", price: 20 },
          { id: 3, name: "Product 3", description: "Description 3", price: 30 }
        ]
      };
    },
    methods: {
      addProduct(product) {
        product.id = this.products.length + 1;
        this.products.push(product);
      },
      editProduct(product) {
        this.$router.push({ name: 'EditProduct', params: { id: product.id } });
      },
      updateProduct(updatedProduct) {
        const index = this.products.findIndex(p => p.id === updatedProduct.id);
        if (index !== -1) {
          this.products.splice(index, 1, updatedProduct);
        }
      },
      deleteProduct(productId) {
        const index = this.products.findIndex(p => p.id === productId);
        if (index !== -1) {
          this.products.splice(index, 1);
        }
      }
    }
  };
  </script>
  
  <style>
  /* Add your CSS styles here */
  </style>