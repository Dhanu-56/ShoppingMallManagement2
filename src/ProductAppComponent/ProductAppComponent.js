import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductApp = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({ name: '', description: '', price: '', stockQuantity: '', category: '', storeid: '' });
    const [editMode, setEditMode] = useState(false);
    const [editProductId, setEditProductId] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/products');  
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editMode) {
                await axios.put(`http://localhost:8080/products/${editProductId}`, product);
                setEditMode(false);
                setEditProductId(null);
            } else {
                await axios.post('http://localhost:8080/products', product);
            }
            setProduct({ name: '', description: '', price: '', stockQuantity: '', category: '', storeid: '' });
            fetchProducts();
        } catch (error) {
            console.error('Error submitting product', error);
        }
    };

    const handleEdit = (product) => {
        setProduct(product);
        setEditMode(true);
        setEditProductId(product.productId);
    };

    const handleDelete = async (productId) => {
        try {
            await axios.delete(`http://localhost:8080/products/${productId}`);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product', error);
        }
    };

    return (
        <div className="product-container">
            <h1>Product Management</h1>
            <h2>{editMode ? 'Edit Product' : 'Add Product'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="text"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                />
                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    placeholder="Price"
                    required
                />
                <input
                    type="number"
                    name="stockQuantity"
                    value={product.stockQuantity}
                    onChange={handleChange}
                    placeholder="Stock Quantity"
                    required
                />
                <input
                    type="text"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    placeholder="Category"
                    required
                />
                <input
                    type="number"
                    name="storeid"
                    value={product.storeid}
                    onChange={handleChange}
                    placeholder="Store ID"
                    required
                />
                <button type="submit">{editMode ? 'Update Product' :'Add product'}</button>
            </form>

            <h3>Product List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock Quantity</th>
                        <th>Category</th>
                        <th>Store ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.productId}>
                            <td>{product.productId}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.stockQuantity}</td>
                            <td>{product.category}</td>
                            <td>{product.storeid}</td>
                            <td>
                                <button onClick={() => handleEdit(product)}>Edit</button>
                                <button onClick={() => handleDelete(product.productId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductApp;
