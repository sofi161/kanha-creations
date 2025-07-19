import React from "react";
import Card from "./ui/card";
import CardContent from "./ui/CardContent";
import Button from "./ui/Button";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Premium Sofa Set",
      image:
        "https://www.nilkamalfurniture.com/cdn/shop/files/Goa-Sofa-Set_white.jpg?v=1717059972&width=360",
      price: "₹25,999",
    },
    {
      id: 2,
      title: "Wooden Dining Table",
      image:
        "https://www.nilkamalfurniture.com/cdn/shop/files/14f5dbd5-eb33-4b0b-97e5-3d2d3f12be8e.jpg?v=1691123978&width=1080",
      price: "₹18,499",
    },
    {
      id: 3,
      title: "Ergonomic Office Chair",
      image:
        "https://www.nilkamalfurniture.com/cdn/shop/files/LVERONHBOFCHBLK-LS.jpg?v=1750310440&width=1080",
      price: "₹7,999",
    },
  ];
  return (
    <section id="products" className="py-12 px-4 md:px-16">
      <h3 className="text-3xl font-semibold mb-8">Featured Products</h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-xl transition-shadow">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <CardContent className="p-4">
              <h4 className="text-xl font-semibold mb-2">{product.title}</h4>
              <p className="text-gray-700 mb-2">{product.price}</p>
              <Button className="w-full">Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Products;
