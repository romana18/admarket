import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { profilelist, isUserValid } from '../../../lib/pocketbase';
import { getRelativeTime } from '../cards/useDate';
import Admcontext from '../../context/admcontext';
function Search() {

  const [searchTerm, setSearchTerm] = useState("");
  const {user} = useContext(Admcontext)
  const [filteredResults, setFilteredResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const {posts} = useContext(Admcontext)
  const {setProdname} = useContext(Admcontext)
  const {setProdprice} = useContext(Admcontext)
  const {setProdslife} = useContext(Admcontext)
  const {setDairyname} = useContext(Admcontext)
  const {setFSSAI} = useContext(Admcontext)
  const {setProdquant} = useContext(Admcontext)
  const {setProdlocation} = useContext(Admcontext)
  const {setProdcreated} = useContext(Admcontext)


  const history = useNavigate()

  useEffect(() => {
    const results = posts.filter(item => 
      item.product_name.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
    setFilteredResults(results);
    setShowDropdown(searchTerm !== "" && results.length > 0);
  }, [searchTerm, posts]);

  const handlespecific = ()=>{

    history('/product')
  }
  return (
    <div className="relative">
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <input 
          type="text" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-3 py-2 border border-gray-500 focus:outline-none focus:border-blue-500 rounded-md w-96" 
          
        />
        <Button 
          as={Link} 
          style={{ backgroundColor: '#292929'}} 
          color="default" 
          className='border text-white border-black hover:bg-EEEEEF hover:text-white' 
          href="#" 
          variant="flat"
        >
          Search
        </Button>
      </div>
      
      {showDropdown && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md max-h-60 overflow-y-auto z-10">
          {filteredResults.map((item, index) => (
            <div key={index} className="p-4 border-b border-gray-200 cursor-pointer" onClick={()=>{setProdcreated(getRelativeTime(item.created));setShowDropdown(false);setDairyname(item.dairy_name);setProdslife(item.shelf_life);setProdquant(item.quantity);setProdname(item.product_name);setProdlocation(item.location);setFSSAI(user.FSSAI);setProdprice(item.price);history('/product')} }>
              <h2 className="text-lg font-semibold">{item.product_name}</h2>
              <p className="text-gray-700">{item.location}</p>
              <p className="text-gray-700">Added: {getRelativeTime(item.created)}</p>
              {isUserValid && (
                <>
                  <p className="text-gray-700">Dairy Name: {item.dairy_name}</p>
                  <p className="text-gray-700">Price: {item.price}</p>
                  <p className="text-gray-700">Shelf Life: {item.shelf_life} days</p>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
