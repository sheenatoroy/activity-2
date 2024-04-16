<template>
  <div class="container">
    <div class="left-panel">
      <transition name="fade">
        <ProductForm v-if="showForm" @addProduct="addProduct" />
      </transition>
    </div>
    <div class="right-panel">
      <ProductList :products="products" @editProduct="editProduct" @deleteProduct="deleteProduct" @addProduct="showProductForm"/>
      <router-view @updateProduct="updateProduct"/>
    </div>
    <div style="clear: both;"></div> 
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import ProductForm from './components/ProductForm.vue';

export default {
  name: 'App',
  components: {
    ProductList,
    ProductForm
  },
  data() {
    return {
      products: [
          { id: 1, name: "Orions", description: "A4 Bondpaper", price: 300 },
          { id: 2, name: "HBW", description: "Ballpen", price: 150 },
          { id: 3, name: "Mongol", description: "Pencil", price: 30 },
          { id: 4, name: "Excellent", description: "Yellow Pad", price: 80 },
          { id: 5, name: "Epson", description: "Ink", price: 350 }
      ],
      showForm: false
    };
  },
  methods: {
    addProduct(product) {
      product.id = this.products.length + 1;
      this.products.push(product);
      this.showForm = false; 
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
    },
    showProductForm() {
      this.showForm = true;
    }
  }
};
</script>


<style>
.container {
  width: 100%; 
}

.left-panel {
  width: 300px; 
  float: right;
  margin-right: 100px; 
}

.right-panel {
  overflow: hidden; 

}
.form-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 100px; 
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
