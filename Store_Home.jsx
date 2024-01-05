import React from 'react';
import { Link } from 'react-router-dom';
import './Store.css';

function Store_Home({ Products }) {
    return (
        <>
            <a href="https://tedsplansdiy.com?shield=00cc1bt5xmnsdk7pp3uay-yq7m" className='my-3'>
                <div className='banner col-12'>
                    <button className='bg-primary text-white px-3 py-1 border-0 rounded'>Click Here</button>
                </div>
            </a>
            <hr />
            <div className="row my-5">
                {Products.map(product => (
                    <div key={product.id} className="col-lg-4 col-md-6 mb-4">
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="card mx-5">
                                <img className="card-img-top" src={product.img} alt="Product" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{product.title}</h5>
                                    <a href={product.buyLink} className="btn btn-primary text-white">Buy Now</a>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Store_Home;
