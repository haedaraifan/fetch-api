const ProductCard = ({ product }) => {
  const { name, category, quantity, selling_price, image } = product;
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-full h-32 object-cover rounded mb-4"
        />
      ) : (
        <div className="w-full h-32 bg-gray-200 rounded mb-4 flex items-center justify-center">
          <span className="text-gray-400">No Image Available</span>
        </div>
      )}
      <div className="text-lg font-bold mb-2">{name}</div>
      <div className="text-gray-600 mb-2">Category: {category}</div>
      <div className="text-gray-600 mb-2">Quantity: {quantity}</div>
      <div className="text-gray-600 mb-2">
        Selling Price: ${selling_price}
      </div>
    </div>
  );
}

export default ProductCard