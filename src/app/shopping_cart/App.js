import React from "react";
import Header from "./components/Header";
import products from "./products";
import Product from "./components/Product";
import { CartProvider } from "./contexts/use-cart";
import "./shopping_cart.scss";

export default function ShoppingCart() {
    return (
        <CartProvider>
            <div className="shopping_cart-app-container">
                <div className="shopping_cart-application">
                    {/* header */}
                    <Header />

                    <main>
                        <div className="products-list">
                            {/* show products here */}
                            {products.map((product, index) => (
                                <Product key={index} product={product} />
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </CartProvider>
    );
}
