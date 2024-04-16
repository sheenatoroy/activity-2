<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h3>Edit Product</h3>
        </div>
        <div class="modal-body">
          <div>
            <label for="productName">Product Name:</label>
            <input type="text" id="productName" v-model="editedProduct.name">
          </div>
          <div>
            <label for="productDescription">Description:</label>
            <textarea id="productDescription" v-model="editedProduct.description"></textarea>
          </div>
          <div>
            <label for="productPrice">Price:</label>
            <input type="number" id="productPrice" v-model.number="editedProduct.price">
          </div>
          <button @click="updateProduct">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editedProduct: { ...this.product } // Clone the product to avoid directly mutating it
    };
  },
  methods: {
    updateProduct() {
      this.$emit('update-product', { ...this.editedProduct }); // Emit 'update-product' event with a cloned object
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0 auto;
  width: 50%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.modal-header,
.modal-footer {
  padding: 10px 20px;
  border-bottom: 1px solid #eee;
}

.modal-body {
  padding: 20px;
}
</style>
