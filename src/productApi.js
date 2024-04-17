import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/products'; // Update port to 4000

export async function fetchProducts() {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

export async function addProduct(product) {
    try {
        const response = await axios.post(API_BASE_URL, product);
        return response.data;
    } catch (error) {
        console.error('Error adding product:', error);
        return null;
    }
}

export async function updateProduct(product) {
    const url = `${API_BASE_URL}/${product.id}`;
    try {
        const response = await axios.put(url, product);
        return response.data;
    } catch (error) {
        console.error('Error updating product:', error);
        return null;
    }
}

export async function deleteProduct(productId) {
    const url = `${API_BASE_URL}/${productId}`;
    try {
        await axios.delete(url);
    } catch (error) {
        console.error('Error deleting product:', error);
    }
}
