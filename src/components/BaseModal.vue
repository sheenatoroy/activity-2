<template>
  <div class="modal-mask" @click.self="$emit('close')">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h3>Edit Product</h3>
          <button class="close-btn" @click="$emit('close')">X</button>
        </div>
        <div class="modal-body">
          <div>
            <label for="productName">Product Name:</label>
            <input type="text" id="productName" v-model="editedProduct.name" :class="{ 'error': errors.name }">
            <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
          </div>
          <div>
            <label for="productDescription">Description:</label>
            <textarea id="productDescription" v-model="editedProduct.description" :class="{ 'error': errors.description }"></textarea>
            <span v-if="errors.description" class="error-message">{{ errors.description }}</span>
          </div>
          <div>
            <label for="productPrice">Price:</label>
            <input type="number" id="productPrice" v-model.number="editedProduct.price" :class="{ 'error': errors.price }">
            <span v-if="errors.price" class="error-message">{{ errors.price }}</span>
          </div>
          <button @click="saveChanges">Save Changes</button>
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
      editedProduct: { ...this.product },
      errors: {}
    };
  },
  methods: {
    saveChanges() {
      if (this.validateForm()) {
        this.$emit('save-changes', { ...this.editedProduct });
        this.$emit('close');
      }
    },
    validateForm() {
      this.errors = {};
      let isValid = true;

      if (!this.editedProduct.name) {
        this.errors.name = 'Product name is required';
        isValid = false;
      }

      if (!this.editedProduct.description) {
        this.errors.description = 'Description is required';
        isValid = false;
      }

      if (!this.editedProduct.price) {
        this.errors.price = 'Price is required';
        isValid = false;
      }

      return isValid;
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
  background-color: rgba(34, 33, 33, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-container {
  width: 80%;
  max-width: 500px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.modal-header {
  padding: 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-header h3 {
  margin: 0;
}

.close-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #777;
}

.close-btn:hover {
  color: #333;
}

.modal-body {
  padding: 20px;
}

.modal-body input,
.modal-body textarea {
  width: 98%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.modal-body button {
  background-color: #2196F3;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.modal-body button:hover {
  background-color: #0e83cd;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>