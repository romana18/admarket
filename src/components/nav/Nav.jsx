import React, { useState,useEffect,useContext } from "react";
import {Navbar, NavbarBrand,NavbarMenuItem, NavbarMenu,NavbarMenuToggle ,NavbarContent, NavbarItem, Link, Button, Modal, ModalContent, ModalHeader, ModalBody,Select, SelectItem, useDisclosure} from "@nextui-org/react";
import { Logo } from "./Logo";
import { useNavigate } from 'react-router-dom';
import Search from '../nav/Search'
import { IoSearch } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { isUserValid } from "../../../lib/pocketbase";
import { logOut } from "../../../lib/pocketbase";
import Admcontext from '../../context/admcontext';
function Nav() {

  
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const history = useNavigate();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { setSelectedLocation } = useContext(Admcontext);

const cities = [
  "Abohar",
  "Ajmer",
  "Alwar",
  "Ambala",
  "Amritsar",
  "Banswara",
  "Baran",
  "Barmer",
  "Barnala",
  "Batala",
  "Bathinda",
  "Bharatpur",
  "Bhilwara",
  "Bhiwani",
  "Bikaner",
  "Bilaspur",
  "Bundi",
  "Chamba",
  "Charkhi Dadri",
  "Chittorgarh",
  "Churu",
  "Dausa",
  "Dalhousie",
  "Dharamshala",
  "Dholpur",
  "Dungarpur",
  "Fatehabad",
  "Fatehgarh Sahib",
  "Faridabad",
  "Fazilka",
  "Firozpur",
  "Ganganagar",
  "Gurgaon",
  "Gurdaspur",
  "Hamirpur",
  "Hanumangarh",
  "Hansi",
  "Hisar",
  "Hoshiarpur",
  "Jaipur",
  "Jaisalmer",
  "Jaitaran",
  "Jalandhar",
  "Jalore",
  "Jhalawar",
  "Jhansi",
  "Jhunjhunu",
  "Jind",
  "Jodhpur",
  "Kaithal",
  "Kangra",
  "Karauli",
  "Karnal",
  "Kapurthala",
  "Kota",
  "Kullu",
  "Kurukshetra",
  "Lahaul and Spiti",
  "Ludhiana",
  "Mandi",
  "Malout",
  "Manali",
  "Moga",
  "Mohali",
  "Muktsar",
  "Nabha",
  "Nahan",
  "Narnaul",
  "Nuh",
  "Pali",
  "Palampur",
  "Panipat",
  "Panchkula",
  "Panipat",
  "Pathankot",
  "Patiala",
  "Palwal",
  "Parwanoo",
  "Patiala",
  "Rajpura",
  "Rajsamand",
  "Rewari",
  "Rohtak",
  "Sangrur",
  "Sawai Madhopur",
  "Shimla",
  "Sikar",
  "Sirsa",
  "Sirmaur",
  "Sirohi",
  "Sonipat",
  "Solan",
  "Sri Ganganagar",
  "Tarn Taran Sahib",
  "Tonk",
  "Una",
  "Udaipur",
  "Yamunanagar"
];
  
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const bottomNav=(e)=>{
    setIsnActive(e.target.value)
    console.log(isnActive)
  }

  const handleLogOUt=()=>{
    try{
      logOut()
      history('/')
    }
    catch{
      console.log("Error Logging Out")
    }
  }

      return (
        <>
          <div  className="hidden sm:block">
          
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                
                  <Link>
                        <Logo />
                    <span onClick={()=>{history('/')}} className="self-center ml-4 text-2xl font-regular whitespace-nowrap dark:text-white text-black hover:cursor-pointer">
                      Apni Dairy Market
                    </span>
                  </Link>
             
                <Search />

                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                

                  {isUserValid? (<><Button as={Link} color="primary" href="/post" variant="flat">
                    Post
                  </Button><Button as={Link} color="danger" onClick={handleLogOUt} variant="flat">
                    Log Out
                  </Button></>):(<>  <Button as={Link} color="success" href="/login" variant="flat">
                    Login
                  </Button><Button as={Link}  color="warning" href="/signup" variant="flat">
                    Sign Up
                  </Button></>)}
                 
                </div>
              </div>
            </nav>

            <nav style={{ backgroundColor: '#292929', color: '#ffffff' }} className="dark:bg-gray-700">
  <div className="max-w-screen-xl px-4 py-3 mx-auto flex justify-between items-center">
    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
      <li className="hover:cursor-pointer" onClick={()=>{history('/')}}>Home</li>
      <li className="hover:cursor-pointer" onClick={()=>{history('/profile')}}>Profile</li>
      <li className="hover:cursor-pointer" onClick={()=>{history('/dashboard')}}>Dashboard</li>
      <li className="hover:cursor-pointer">Features</li>
    </ul>

    {/* Select component */}
    {isUserValid? <> <div className="w-72 "> {/* Adjust the width as needed */}
    <Select

      placeholder="Region"
      labelPlacement="outside"
      className="max-w-xs "
      disableSelectorIconRotation
      items={cities}
      searchable={true} 
      aria-label
      onChange={(e) => setSelectedLocation(e.target.value)}
    >
        {Array.isArray(cities) && cities.map((city,index) => (<SelectItem className="w-40" key={index} >{city}</SelectItem>))}
      </Select>
    </div></> :<> </>}
   
  </div>
            </nav>

           
          </div>

          {/* Mobile Nav */}
          <div className="sm:hidden fixed top-0 w-full z-50 ">
            <Navbar
              isBordered
              isMenuOpen={isMenuOpen}
              onMenuOpenChange={setIsMenuOpen}
            >
              <NavbarContent className="sm:hidden" justify="start">
                {/* <NavbarMenuToggle
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                /> */}
                 <div className=" "> {/* Adjust the width as needed */}
    <Select
      color="default"
      placeholder="Region"
      labelPlacement="outside"
      className="w-24"
      disableSelectorIconRotation
      items={cities}
      searchable={true} aria-label
      onChange={(e) => setSelectedLocation(e.target.value)}
    >
        {Array.isArray(cities) && cities.map((city, index) => (
          <SelectItem className="w-28" key={index}>{city}</SelectItem>
        ))}
      </Select>

    </div>
              </NavbarContent>

              <NavbarContent className="sm:hidden pr-3 cursor-pointer" justify="center">
                <NavbarBrand onClick={()=>{history('/')}}>
                  <p className="text-xl font-bold">ADM</p>
                </NavbarBrand>
              </NavbarContent>

              <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                  <Logo />

                  <p className="font-bold text-inherit">ACME</p>
                </NavbarBrand>
                <NavbarItem>
                  <Link color="foreground" href="#">
                    Features
                  </Link>
                </NavbarItem>
                <NavbarItem isActive>
                  <Link href="#" aria-current="page">
                    Customers
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link color="foreground" href="#">
                    Integrations
                  </Link>
                </NavbarItem>
              </NavbarContent>

              <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                  <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                  {isUserValid?(<Button onClick={handleLogOUt} as={Link} color="danger" href="#" variant="flat">
                    Log Out
                  </Button>): (<Button as={Link} color="warning" onClick={()=>{history('/signup')}} variant="flat">
                    Sign Up
                  </Button>)}
                  
                </NavbarItem>
              </NavbarContent>

              <NavbarMenu>
                {menuItems.map((item, index) => (
                  <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                      className="w-full"
                      color={
                        index === 2
                          ? "warning"
                          : index === menuItems.length - 1
                          ? "danger"
                          : "foreground"
                      }
                      to=""
                      size="lg"
                    >
                      {item}
                    </Link>
                  </NavbarMenuItem>
                ))}
              </NavbarMenu>
            </Navbar>
          
          </div>
         
          

          {/* Bottom Navigation */}
          <div className="fixed bottom-0 left-0 w-full bg-white flex justify-around border-t items-center py-3 sm:hidden z-50">
            <Button
              onPress={() => {
                history('/');
              }}
              color="default"
              variant="light"
            >
             
              <Logo />
            </Button>

            <Button onPress={onOpen} color="default" variant="light">
              <IoSearch className="text-2xl" />
            </Button>

            <Button
              onPress={() => {
                history("/post");
              }}
              color="default"
              variant="light"
            >
              <IoMdAdd className="text-2xl" />
            </Button>

            <Button
              onPress={() => {
                history("/dashboard");
              }}
              color="default"
              variant="light"
            >
              <CgMenuGridR className="text-2xl" />
            </Button>

            <Button
              onPress={() => {
                history("/profile");
              }}
              color="default"
              variant="light"
            >
              <CgProfile className="text-2xl" />
            </Button>
          </div>

          {/* Search Modal */}
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top" className="h-96">
            <ModalContent>
              {(onClose) => (
                <>
                  {/* <ModalHeader className="flex flex-col gap-1">
                    Search
                  </ModalHeader> */}
                  <ModalBody className="mt-10">
                    <Search />
                    
                    <h1 className="m-auto">Results</h1>
                  </ModalBody>
                  
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      );
}

export default Nav