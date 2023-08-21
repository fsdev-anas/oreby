import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Dropdown from "./Dropdown";
import { AiOutlineBars } from "react-icons/ai";
import List from "./List";
import ListItem from "./ListItem";
import { FcSearch } from "react-icons/fc";
import { BiSolidUser } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import Image from "./Image";
import { Link } from "react-router-dom";

const Header = () => {
  let [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  let [showUserDropdown, setShowUserDropdown] = useState(false);
  let [showCartDropdown, setShowCartDropdown] = useState(false);
  let categoryRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();

  // let handleClick = () => {
  //     setShow(!show)
  // }

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categoryRef.current.contains(e.target)) {
        setShowCategoryDropdown(true);
      } else {
        setShowCategoryDropdown(false);
      }
    });

    document.body.addEventListener("click", (e) => {
      if (userRef.current.contains(e.target)) {
        setShowUserDropdown(true);
      } else {
        setShowUserDropdown(false);
      }
    });

    document.body.addEventListener("click", (e) => {
      if (cartRef.current.contains(e.target)) {
        setShowCartDropdown(true);
      } else {
        setShowCartDropdown(false);
      }
    });
  }, []);

  return (
    <>
      <div className="bg-primary py-7">
        <Container>
          <Flex className="flex justify-between items-center">
            {/* Header Left Dropdown Catagory */}

            <div>
              <Dropdown className="relative z-50" dropref={categoryRef}>
                <p className="flex items-center">
                  <AiOutlineBars className="me-1" />
                  <span className="inline-block lg:hidden">Category</span>
                  <span className="hidden lg:inline-block">
                    Shop by Category
                  </span>
                </p>
                {showCategoryDropdown && (
                  <List className="absolute bg-[#262626] w-80 py-4 ps-5 top-10 text-[#b1b1b1] font-dm font-regular">
                    <ListItem
                      className="hover:text-white hover:ps-2 ease-in duration-300 pb-4 border-b border-bold border-drop"
                      listname="Accesories"
                    />
                    <ListItem
                      className="hover:text-white hover:ps-2 ease-in duration-300 py-4 border-b border-bold border-drop"
                      listname="Furniture"
                    />
                    <ListItem
                      className="hover:text-white hover:ps-2 ease-in duration-300 py-4 border-b border-bold border-drop"
                      listname="Electronics"
                    />
                    <ListItem
                      className="hover:text-white hover:ps-2 ease-in duration-300 py-4 border-b border-bold border-drop"
                      listname="Clothes"
                    />
                    <ListItem
                      className="hover:text-white hover:ps-2 ease-in duration-300 py-4 border-b border-bold border-drop"
                      listname="Bags"
                    />
                    <ListItem
                      className="hover:text-white hover:ps-2 ease-in duration-300 py-4 pb-2.5"
                      listname="Home appliances"
                    />
                  </List>
                )}
              </Dropdown>
            </div>

            {/* Header Center part.. Search */}

            <div className="w-auto sm:w-[660px] mx-2.5 lg:mx-0 relative">
              <input
                className="px-2 sm:px-5 py-4 w-full placeholder:text-[#C4C4C4] placeholder:text-xs sm:placeholder:text-sm placeholder:font-normal"
                type="text"
                placeholder="Search Products"
              />
              <FcSearch className="absolute hidden sm:inline-block top-4 right-5 text-2xl" />
            </div>

            {/* Header Right Part */}

            <div>
              <Flex className="flex gap-10">
                {/* Right User Dropdown */}

                <Dropdown className="relative z-50" dropref={userRef}>
                  <Flex className="flex gap-2.5">
                    <BiSolidUser />
                    <BiSolidDownArrow className="text-xs" />
                    {showUserDropdown && (
                      <List className="absolute top-7 right-0 text-center w-52 border-2 border-[#F0F0F0]">
                        <ListItem
                          className="hover:bg-black font-dm font-normal hover:font-bold text-sm hover:text-white py-4"
                          listname="My Account"
                        />
                        <ListItem
                          className="hover:bg-black font-dm font-normal hover:font-bold text-sm hover:text-white py-4"
                          listname="Log Out"
                        />
                      </List>
                    )}
                  </Flex>
                </Dropdown>
                <div>
                  {/* Right Cart Dropdown */}

                  <Dropdown className="relative z-50" dropref={cartRef}>
                    <BsFillCartFill />
                    {showCartDropdown && (
                      <div className="w-[358px] absolute top-7 right-0 border-2 border-solid border-[#ebe9e9]">
                        <Flex className="bg-[#F5F5F3] border-2 border-solid border-[#ebe9e9] flex items-center relative">
                          <Image imgSrc="images/Header.jpg" />
                          <div className="ps-5">
                            <h3 className="pb-3">Black Smart Watch</h3>
                            <p>$44.00</p>
                          </div>
                          <ImCross
                            onClick={() =>
                              setShowCartDropdown(!showCartDropdown)
                            }
                            className="absolute right-5 hover:text-red-600"
                          />
                        </Flex>
                        <div className="p-5">
                          <div>
                            <h4 className="inline font-normal font-dm text-sm">
                              Subtotal:{" "}
                            </h4>
                            <span className="text-base font-bold font-dm">
                              $44.00
                            </span>
                          </div>
                          <Flex className="bottom mb-5 my-8">
                            <Link
                              to="#"
                              className="hover:bg-black transition duration-100 ease-in-out hover:text-white font-bold dont-dm text-sm px-10 py-4 border-2 border-solid border-black"
                            >
                              View Cart
                            </Link>
                            <Link
                              to="#"
                              className="hover:bg-black transition duration-100 ease-in-out hover:text-white font-bold dont-dm ms-5 text-sm px-10 py-4 border-2 border-solid border-black"
                            >
                              Checkout
                            </Link>
                          </Flex>
                        </div>
                      </div>
                    )}
                  </Dropdown>
                </div>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
