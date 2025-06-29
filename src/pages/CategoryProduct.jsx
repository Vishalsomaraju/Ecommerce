import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../assets/Loading4.webm";
import { ChevronLeft } from "lucide-react";
import ProductListView from "../components/ProductListView";

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([]);
  const params = useParams();
  const category = params.category;
  const navigate = useNavigate();

  const getFilterData = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/category?type=${category}`
      );
      const data = res.data.products;
      setSearchData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilterData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0C10] text-[#C5C6C7]">
      {searchData.length > 0 ? (
        <div className="max-w-6xl mx-auto mt-10 mb-10 px-4">
          <button
            onClick={() => navigate("/")}
            className="bg-[#00FFFF] text-[#0B0C10] mb-5 px-3 py-2 rounded-md cursor-pointer flex gap-2 items-center font-semibold hover:bg-cyan-400 transition"
          >
            <ChevronLeft size={20} /> Back
          </button>

          <h1 className="text-3xl font-bold mb-6 border-b border-[#00FFFF] pb-2 uppercase">
            {category} Products
          </h1>

          <div className="space-y-5">
            {searchData.map((product, index) => (
              <ProductListView key={index} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[400px]">
          <video muted autoPlay loop className="w-20 h-20">
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
