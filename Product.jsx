import React from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

function ProductDetails({ Products }) {
    const { id } = useParams();
    const selectedProduct = Products.find(product => product.id === parseInt(id));

    if (!selectedProduct) {
        return <div>No product found</div>;
    }
    const randomSuggestions = Products.filter(product => product.id !== selectedProduct.id);
    const suggestedProducts = randomSuggestions.slice(0, 9);

    return (
        <div className="product-page-container">
            <div className="product-details" style={{ display: 'flex' }}>
                <img className="product-img m-5 rounded col-5" src={selectedProduct.img} alt="Product" />
                <div className="product-info py-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 className="product-title text-center">{selectedProduct.title}</h1>
                    <p className="product-description">{selectedProduct.details}</p>
                    <a href={selectedProduct.buyLink} className="btn btn-primary text-white">Buy Now</a>
                </div>
            </div>
            
            <div className="mt-5">
                <div className="row mx-2">
                    {suggestedProducts.map(product => (
                        <div key={product.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={product.img} alt="Product" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{product.title}</h5>
                                    <a href={product.buyLink} className="btn btn-primary text-white">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
