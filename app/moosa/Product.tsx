import React from 'react'

function Product() {
    const products = [
        {
          id: 1,
          name: "Running Shoes",
          description: "Lightweight and comfortable running shoes for daily wear.",
          price: 79.99,
          brand: "Nike",
          category: "Footwear",
          image: "https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1000&format=pjpg&exif=0&iptc=0",
          stock: 50,
        },
        {
          id: 2,
          name: "Wireless Headphones",
          description: "High-quality sound with noise cancellation and long battery life.",
          price: 129.99,
          brand: "Sony",
          category: "Electronics",
          image: "https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg",
          stock: 30,
        },
        {
          id: 3,
          name: "Smartphone",
          description: "Latest model with cutting-edge features and a sleek design.",
          price: 999.99,
          brand: "Apple",
          category: "Electronics",
          image: "https://cdn.pixabay.com/photo/2021/02/18/09/26/coca-cola-6026672_640.jpg",
          stock: 20,
        },
        {
          id: 4,
          name: "Gaming Keyboard",
          description: "Mechanical keyboard with customizable RGB lighting.",
          price: 59.99,
          brand: "Logitech",
          category: "Accessories",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBks98xcOTXXIYF3z87erbFfZ2RE4mWK5myQ&s",
          stock: 100,
        },
        {
          id: 5,
          name: "Water Bottle",
          description: "Stainless steel water bottle with thermal insulation.",
          price: 19.99,
          brand: "Hydro Flask",
          category: "Lifestyle",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBks98xcOTXXIYF3z87erbFfZ2RE4mWK5myQ&s",
          stock: 200,
        },
      ];
      
  return (
    <div>
        <h1 className='text-4xl font-bold text-center py-10 underline underline-offset-2'>Products.</h1>
      <div className='p-10 flex flex-wrap justify-center  gap-4'>

      {products.map((product) => (
        <div key={product.id} className="border p-4 w-64 ">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p>{product.description}</p>
          <p className="text-green-600 font-bold">${product.price}</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      ))}

      </div>
    </div>
  )
}

export default Product
