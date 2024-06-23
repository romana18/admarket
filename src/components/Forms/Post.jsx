import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post, userslist, isUserValid } from '../../../lib/pocketbase';
import Admcontext from '../../context/admcontext';

function Post() {
  const [pname, setPname] = useState("");
  const [price, setPrice] = useState("");
  const [slife, setSlife] = useState("");
  
  const [pnameError, setPnameError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [slifeError, setSlifeError] = useState("");
  const [quant, setQuant] = useState("");
  const [quantError, setQuantError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const {user} = useContext(Admcontext)
  // const [user, setUser] = useState({});
  const navigate = useNavigate();

  
  const fssai = user.FSSAI|| "";
  const dname = user.dairy_name || "";
  const location = user.location || "";

  const handlePost = async () => {
    let isValid = true;

    // Reset previous errors
    setPnameError("");
    setPriceError("");
    setSlifeError("");
    setQuantError("");

    // Validation for Product Name
    if (!pname.trim()) {
      setPnameError("Product name cannot be empty");
      isValid = false;
    } else {
      setPnameError("");
    }

    // Validation for Price
    if (!price.trim() || isNaN(price)) {
      setPriceError("Price must be a valid number");
      isValid = false;
    } else {
      setPriceError("");
    }

    // Validation for Shelf Life
    if (!slife.trim() || isNaN(slife) || parseInt(slife) > 7) {
      setSlifeError("Shelf life must be a number not exceeding 7 days");
      isValid = false;
    } else {
      setSlifeError("");
    }

    // Validation for Quantity
    if (!quant.trim()) {
      setQuantError("Quantity cannot be empty");
      isValid = false;
    } else {
      setQuantError("");
    }

    // If any validation fails, return
    if (!isValid) {
      return;
    }
    try {
      await post(pname, price, slife, dname, quant, fssai,location);
      // Show success popup
      setShowPopup(true);
      // Optionally, reset form fields or redirect after a delay
      setTimeout(() => {
        setShowPopup(false);
        // Reset form fields
        setPname("");
        setPrice("");
        setSlife("");
        setQuant("");
      }, 2000); // Hide popup after 2 seconds
    } catch {
      alert("Error posting product");
    }
  };

  useEffect(() => {
    if (!isUserValid) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <form className="max-w-sm mx-auto p-10 md:pt-10 md:pb-10 mt-10 md:mt-0 mb-10">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm hidden sm:block">
        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Product Product
        </h2>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm sm:hidden">
        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Product Product
        </h2>
      </div>

      <div className="mb-5 mt-10">
        <label htmlFor="pname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Product name
        </label>
        <input
          type="text"
          value={pname}
          onChange={(e) => {
            setPname(e.target.value);
            if (e.target.value.trim()) {
              setPnameError("");
            }
          }}
          id="pname"
          className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${pnameError ? 'border-red-500' : ''}`}
          required
        />
        {pnameError && <p className="text-red-600 mt-1">{pnameError}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="quant" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Quantity
        </label>
        <div className="relative">
        <input
          type="text"
          value={quant}
          onChange={(e) => {
            setQuant(e.target.value);
            if (e.target.value.trim()) {
              setQuantError("");
            }
          }}
          id="quant"
          className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${quantError ? 'border-red-500' : ''}`}
          required
        />
        <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 text-sm">kg</span>
      
        </div>
        {quantError && <p className="text-red-600 mt-1">{quantError}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Price
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500 text-sm">Rs</span>
          <input
            type="text"
            value={price}
            onChange={(e) => {
              const value = e.target.value;
              setPrice(value);
              if (!isNaN(value)) {
                setPriceError("");
              } else {
                setPriceError("Price must be a valid number");
              }
            }}
            id="price"
            className={`pl-10 pr-10 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${priceError ? 'border-red-500' : ''}`}
            required
          />
          <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 text-sm">/kg</span>
        </div>
        {priceError && <p className="text-red-600 mt-1">{priceError}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="slife" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Shelf Life (days)
        </label>
        <input
          type="number"
          value={slife}
          onChange={(e) => {
            const value = e.target.value;
            setSlife(value);
            if (!isNaN(value) && parseInt(value) <= 7) {
              setSlifeError("");
            } else {
              setSlifeError("Shelf life must be a number not exceeding 7 days");
            }
          }}
          id="slife"
          className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${slifeError ? 'border-red-500' : ''}`}
          required
        />
        {slifeError && <p className="text-red-600 mt-1">{slifeError}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          FSSAI
        </label>
        <input
          type="text"
          value={fssai}
          id="location"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          disabled
        />
      </div>

      <div className="mb-5">
        <label htmlFor="dname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Dairy Name
        </label>
        <input
          type="text"
          value={dname}
          id="dname"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          disabled
        />
      </div>
      <div className="mb-5">
        <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Location
        </label>
        <input
          type="text"
          value={location}
          id="location"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          disabled
        />
      </div>

      <button
        type="button"
        onClick={handlePost}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Post Product
      </button>
      {showPopup && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-white p-5 rounded shadow-lg text-center">
      <p className="text-green-600">Product posted successfully!</p>
    </div>
  </div>
)}
    </form>
    
  );
}

export default Post;
