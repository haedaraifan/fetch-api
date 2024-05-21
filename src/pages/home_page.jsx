import { useState, useEffect } from "react";
import SideBar from "../components/sidebar";
import ProductCard from "../components/product_cart";
import AddProductModal from "../components/add_product_modal";
import { getAllProduct, postNewProduct } from "../services/product_service";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isAuth, setAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");


  const updateProductsState = async () => {
    try {

      setLoading(true);
      const result = await getAllProduct();
      setProducts(result.data);
      setAuth(true);

    } catch(e) {

      console.log(e);
      setError(e.response.data.error);

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    updateProductsState();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={() => setShowModal(true)}
        >
          Add New Product
        </button>
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-xl">Loading...</p>
          </div>
        ) : isAuth ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-xl">{ error }</p>
          </div>
        )}

        {/* Add Product Modal */}
        {showModal && (
          <AddProductModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            refreshProducts={updateProductsState}
            submitNewProduct={postNewProduct}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
