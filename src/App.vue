<template>
  <div class="container">
    <div class="left-panel">
      <transition name="slide-fade">
        <ProductForm v-if="showForm" @addProduct="addProduct" />
      </transition>
    </div>
    <div class="right-panel">
      <ProductList :products="products" @editProduct="openEditModal" @deleteProduct="deleteProduct" @addProduct="showProductForm"/>
      <router-view @updateProduct="updateProduct"/>
      <transition name="bounce">
        <BaseModal v-if="editModalOpen" @close="closeEditModal" @save-changes="saveProductChanges" :product="editingProduct">
          <template v-slot:header>
            <h3>Edit Product</h3>
          </template>
          <template v-slot:body>
            <p>Edit your product here.</p>
          </template>
        </BaseModal>
      </transition>
    </div>
    <div style="clear: both;"></div>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import ProductForm from './components/ProductForm.vue';
import BaseModal from './components/BaseModal.vue'; 

export default {
  name: 'App',
  components: {
    ProductList,
    ProductForm,
    BaseModal
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
      showForm: false,
      editModalOpen: false,
      editingProduct: null
    };
  },
  methods: {
    addProduct(product) {
      product.id = this.products.length + 1;
      this.products.push(product);
      this.showForm = false;
    },
    openEditModal(product) {
      this.editingProduct = { ...product }; // Ensure to clone the object
      this.editModalOpen = true;
    },
    closeEditModal() {
      this.editModalOpen = false;
      this.editingProduct = null; // Reset editing state
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
    },
    saveProductChanges(updatedProduct) {
      const index = this.products.findIndex(p => p.id === updatedProduct.id);
      if (index !== -1) {
        this.products.splice(index, 1, updatedProduct);
        this.editModalOpen = false; // Close the modal after update
        this.editingProduct = null; // Reset editing state
      }
    },
  }
};
</script>

<style>
.container {
  width: 100%; 
  font-family: Arial, Helvetica, sans-serif;
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
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>