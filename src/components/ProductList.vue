<template>
  <div class="crud-app">
    <div class="header-container">
      <h2>Manage School Supplies</h2>
      <button class="add-button" @click="addNewProduct">
        <i class="fas fa-plus"></i> Add New Product
      </button>
    </div>
    
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>₱ {{ product.price }}</td>
            <td>
              <!-- Buttons for editing and deleting -->
              <button class="edit-button" @click="editProduct(product)">Edit</button>
              <button class="delete-button" @click="deleteProduct(product.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['products'],
  methods: {
    addNewProduct() {
      this.$emit('addProduct');},
    editProduct(product) {
      this.$emit('editProduct', product);
    },
    deleteProduct(productId) {
      if (confirm("Are you sure you want to delete this product?")) {
        this.$emit('deleteProduct', productId);
      }
    }
  }
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
.crud-app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.header-container {
  display: flex;
  align-items: center; 
  justify-content: space-between; 
}

h2 {
  font-size: 24px;
  color: #333;
}

.add-button {
  padding: 10px 20px;
  border: none;
  border-radius: 50px; 
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
}

.add-button:hover {
  background-color: #45a049;
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

tr:hover {
  background-color: #f5f5f5;
}

.edit-button, .delete-button {
  padding: 8px 16px;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.edit-button {
  background-color: #2196F3;
  color: white;
}

.delete-button {
  background-color: #f44336;
  color: white;
}

.edit-button:hover, .delete-button:hover {
  opacity: 0.8;
}
</style>