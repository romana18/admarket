import React, { useEffect, useState, useContext } from 'react';
import { profilelist, userslist, delpost, updatepost, logIn } from '../../../lib/pocket';
import { IoSearch } from "react-icons/io5";
import { Card, CardBody, CardFooter, Image,Modal, ModalContent, ModalHeader, Button,ModalBody,Select, SelectItem, useDisclosure } from "@nextui-org/react";
import { isUserValid } from '../../../lib/pocket';
import { useNavigate } from 'react-router-dom';
import LogIn from '../Forms/LogIn';
import Admcontext from '../../context/admcontext';

function Profile() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [quant, setQuant] = useState("");
  const [slife, setSlife] = useState("");
  const[ep,setEP] = useState("")
  const history = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const {user}= useContext(Admcontext)
  const [posts,setPosts] = useState({})

  useEffect(() => {
    try {
        profilelist().then(res => setPosts(res));
    } catch {
        console.log("error");
    }
}, []);
  if (!isUserValid) {
    return <LogIn />;
}

  const handledel = (id) => {

      try {
        delpost(id);

      } catch {
        alert("Error occurred while deleting the post");
      }
    }

  const handleupdate =()=>{
    try{
      updatepost(ep,quant,slife)
      setShowPopup(true);
      // Optionally, reset form fields or redirect after a delay
      setTimeout(() => {
        setShowPopup(false);
        // Reset form fields

        setSlife("");
        setQuant("");
      }, 2000);
    }
    catch{
      alert("error while editing the post")
    }
  }

  

  const productimage = productname => {
    switch (productname.toLowerCase()) {
        case 'milk':
            return 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
        case 'desi ghee':
            return 'https://images.healthshots.com/healthshots/en/uploads/2021/11/03180439/which-ghee-is-better-770x433.jpg';
        case 'curd':
            return 'https://www.archanaskitchen.com/images/archanaskitchen/BasicRecipes_HOW_TO/How_To_Make_Fresh_Homemade_Yogurt_Curd.jpg';
        case 'paneer':
            return 'https://myfoodstory.com/wp-content/uploads/2016/10/How-to-make-Paneer-3.jpg';
        case 'khoya':
            return 'https://www.grocio.in/upload_images/product/big/4121620396860.jpg';
        case 'white butter':
            return 'https://static.toiimg.com/thumb/55600690.cms?imgsize=193758&width=509&height=340';
        case 'cheese':
            return 'https://www.usatoday.com/gcdn/media/2022/07/01/USATODAY/usatsports/imageForEntry2-ueq.jpg?width=1320&height=744&fit=crop&format=pjpg&auto=webp';
        case 'cream':
            return 'https://www.onceuponachef.com/images/2022/06/whipped-cream-1536x1009.jpg';
        default:
            return '';
    }
};


  return (
    <div className="mt-10 md:m-0">
      <ul role="list" className="max-w-sm p-10 divide-y divide-gray-200 dark:divide-gray-700">
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="flex-shrink-0">
              <img className="w-8 h-8 rounded-full" src="https://avatar.iran.liara.run/public/1" alt="User" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
                {user.username}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {user.dairy_name}
              </p>
            </div>
            <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
              <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
              {user.FSSAI}
            </span>
          </div>
        </li>
      </ul>

      <div className="ml-10">
        Your Posts
      </div>
      {isUserValid && Array.isArray(posts) && posts.length > 0 ? (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 p-4 mt-5 mb-20">
          {posts.filter(item => item.FSSAI === user.FSSAI).map((item, index) => (
            <Card shadow="sm" key={index} isPressable>
              <CardBody className="overflow-visible p-0 relative">
              <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={item.title}
                                className="w-full object-cover h-72"
                                src={productimage(item.product_name)}
                            />
                <Button
                  className="absolute top-2 left-2 bg-red-500 text-white py-1 px-3 rounded"
                  onClick={() => handledel(item.id)}
                  style={{ zIndex: 10 }}
                >
                  Delete
                </Button>
                <Button
                  className="absolute top-2 right-2 bg-yellow-500 text-white py-1 px-3 rounded"
                  onPress={()=>{setEP(item.id);onOpen()}}
                  style={{ zIndex: 10 }}
                >
                  Edit
                </Button>
             
              </CardBody>
              <CardFooter className="text-small justify-between">
                            <b>{item.product_name}</b>
                            <p className="">Rs. {item.price} /Kg</p>
                        </CardFooter>
                        <CardFooter className="text-small justify-between">
                            <p>{item.quantity}</p>
                            <p>{item.shelf_life}</p>
                        </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="p-4 mt-5 mb-20 text-center text-gray-500">
          You haven't posted anything yet.
        </div>
      )}



         <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top" className="h-96">
            <ModalContent>
              {(onClose) => (
                <>
                  <div className="flex min-h-full flex-1 flex-col justify-center p-10 mt-10  md:px-6 md:py-4 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           Edit your post
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Quantity
              </label>
              <div className="mt-2">
                <input
                onChange={(e)=>{setQuant(e.target.value)}}
                value={quant}
                  id="quant"
                  name="quant"
                  type="text"
                  autoComplete="quant"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Shelf Life
                </label>
                
              </div>
              <div className="mt-2">
                <input
                value={slife}
                onChange={(e)=>{setSlife(e.target.value)}}
                  id="slife"
                  name="slife"
                  type="text"
                  autoComplete="slife"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleupdate}
              >
                Edit
              </button>
            </div>
      

          
        </div>
      </div>
      {showPopup && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-white p-5 rounded shadow-lg text-center">
      <p className="text-green-600">Product Edited successfully!</p>
    </div>
  </div>
)}
                </>
              )}
            </ModalContent>
          </Modal>
    </div>
  );
}

export default Profile;
