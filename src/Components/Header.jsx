import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo/logo.jpeg";
import { useNavigate } from "react-router-dom";
import {
  Zomato,
  Swiggy,
  PizzaHutt,
  Kfc,
  EatSure,
  Dominos,
  BehrouzBiryani,
  BurgerKing,
  ShoppersStop,
} from "../FoodImages/FoodImages";
import {
  AmazonFresh,
  AmazonSeoAmazonGiftCard,
  AmazonShoppingGiftVoucher,
  AmazonShoppingVoucher,
  Bigbasket,
  FlipkartGiftCard,
  Myntra_Gift_Card,
  Nykaa,
  TataCliq,
  AjioCard,
} from "../EcommerseImages/EcommerseImages.js";
import { useProduct } from "../Context/ProductContext";
import grow from "..//EducationImages/grow.png";
import simpli from "..//EducationImages/simpli.png";
import skillshare from "..//EducationImages/skillshare.png";
import udemy from "..//EducationImages/udemy.png";
import coursera from "../EducationImages/coursera.png";
import edureka from "..//EducationImages/edureka.jpg";
import BodyShop from "..//HealthImages/BodyShop.webp";
import mamaearth from "..//HealthImages/mamaearth.png";
import Man from "../HealthImages/Man.png";
import BombayShaving from "../HealthImages/BombayShaving.png";
import WowSkin from "../HealthImages/WowSkin.png";
import Binance from "../FinanceImages/Binance.png";
import Kucoin from "../FinanceImages/Kucoin.png";
import Mexc from "../FinanceImages/Mexc.png";
import BingX from "../FinanceImages/BingX.jpeg";
import Bitget from "../FinanceImages/Bitget.png";
import Weex from "../FinanceImages/Weex.png";
import Bitvavo from "../FinanceImages/Bitvavo.png";
import OxBroker from "../FinanceImages/qx.jpg";
import Alpha from "../FinanceImages/Alpha.jpeg";
import Manven from "../FinanceImages/Manven.webp";
import Funder from "../FinanceImages/Funder.jpg";
import SafePal from "../FinanceImages/SafePal.png";
import Pocket from "../FinanceImages/Pocket.webp";
import E8 from "../FinanceImages/E8.png";
import Phemex from "../FinanceImages/Phemex.png";
import Shoppers from "../FashionImages/Shoppers.png";
import Wildcraft from "..//FashionImages/Wildcraft.png";
import SareesKart from "../FashionImages/SareesKart.jpg";
import Xyxx from "../FashionImages/Xyxx.png";
import Souled from "../FashionImages/Souled.png";
import Uber from "../FashionImages/Uber.png";
import Ola from "../FashionImages/Ola.png";
import VidIQ from "../MarkingImages/VidIQ.png";
import GetResponse from "../MarkingImages/GetResponse.jpg";
import ByBit from "../FinanceImages/bybit.webp";
const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null); // Tracks which category dropdown is open
  const [dropdownTimeout, setDropdownTimeout] = useState(null); // Tracks timeout for closing dropdown
  const [storeDropdownVisible, setStoreDropdownVisible] = useState(false); // App dropdown state
  const [mobileNavVisible, setMobileNavVisible] = useState(false); // Mobile side drawer
  const navigate = useNavigate();
  const { setSelectedProduct } = useProduct();

  // Product Searching Function
  const [searchQuery, setSearchQuery] = useState("");

  const [searchedData, setSearchedData] = useState([]);
  function searchProduct(query) {
    if (!query.trim()) {
      setSearchedData([]); // Clear search results if query is empty
      return;
    }
    const results = categories.flatMap((category) =>
      category.subcategories.filter((sub) =>
        sub.name.toLowerCase().includes(query.toLowerCase())
      )
    );
    setSearchedData(results);
  }

  // Debounce search (runs after 500ms delay)
  useEffect(() => {
    const timer = setTimeout(() => {
      searchProduct(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Categories and Subcategories Data
  const categories = [
    {
      label: "Education",
      icon: '<i class="fa-solid fa-school"></i>',
      subcategories: [
        { name: "Edureka", image: edureka, url: "https://www.edureka.co/" },
        { name: "Coursera", image: coursera, url: "https://www.coursera.org/" },
        { name: "Udemy", image: udemy, url: "https://www.udemy.com/" },
        { name: "Skill Share", image: skillshare, url: "https://www.skillshare.com/en/" },
        { name: "SimpliLearn", image: simpli, url: "https://www.simplilearn.com/" },
        { name: "growthschool.io",image: grow, url: "https://www.growthschool.io/in"},
      ],
    },
    {
      label: "Food",
      icon: '<i class="fa-solid fa-bowl-food"></i>',
      subcategories: [
        {
          name: "Swiggy",
          offer: "Flat 8% off",
          code: "NYK5",
          image: Swiggy,
          url: "https://www.swiggy.com/",
        },
        {
          name: "Zomato",
          offer: "Flat 5% off",
          code: "NYK5",
          image: Zomato,
          url: "https://www.zomato.com/",
        },
        {
          name: "Pizza Hut",
          offer: "Flat 6% off",
          code: "NYK5",
          image: PizzaHutt,
          url: "https://www.pizzahut.co.in/",
        },
        {
          name: "KFC",
          offer: "Flat 2% off",
          code: "NYK5",
          image: Kfc,
          url: "https://online.kfc.co.in/",
        },
        {
          name: "Burger King",
          offer: "Flat 7% off",
          code: "NYK5",
          image: BurgerKing,
          url: "https://www.burgerking.in/",
        },
        {
          name: "Dominos",
          offer: "Flat 2% off",
          code: "NYK5",
          image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg",
          url: "https://www.dominos.co.in/",
        },
        {
          name: "Eat Sure	",
          offer: "Flat 5% off",
          code: "NYK5",
          image: EatSure,
          url: "https://www.eatsure.com/",
        },
        {
          name: "Behrouz Biryani",
          offer: "Flat 5% off",
          code: "NYK5",
          image: BehrouzBiryani,
          url: "https://www.behrouzbiryani.com/",
        },
      ],
    },
    {
      label: "E-Commerce",
      icon: '<i class="fa-solid fa-cart-shopping"></i>',
      subcategories: [
        {
          name: "Amazon Shopping",
          offer: "Flat 5% off",
          code: " ",
          description: "5000 Discount on Aircondition",
          referral_url:
            "https://www.amazon.in/s?k=AC&crid=1NG3OC12U50PE&sprefix=ac%2Caps%2C254&linkCode=ll2&tag=rajvansh017-21&linkId=a06472739130ec28138e299a878bdaff&language=en_IN&ref_=as_li_ss_tl",
          image: AmazonShoppingVoucher,
          url: "https://www.amazon.in/gp/browse.html?node=1355016031&linkCode=ll2&tag=rajvansh017-21&linkId=02e1628fb0e048bbb1aa035446cfe14c&language=en_IN&ref_=as_li_ss_tl",
        },
        {
          name: "Flipkart",
          offer: "Flat 5% off",
          code: " ",
          description: "",
          referral_url: "",
          image: FlipkartGiftCard,
          url: "https://fktr.in/yFyWnq5",
        },
        {
          name: "Nykaa",
          offer: "Flat 5% off",
          code: " ",
          description: "Get Upto 40% Off on Bestsellers",
          referral_url: "https://bitli.in/Az3SKj9",
          image: Nykaa,
          url: "https://bitli.in/Az3SKj9",
        },
        { name: "AJIO", image: AjioCard, url: "https://ajiio.in/00GkFH5" },
      ],
    },
    {
      label: "Health & Beauty",
      icon: '<i class="fa-solid fa-user-doctor"></i>',
      subcategories: [
        { name: "The Body Shop", image: BodyShop, url: "https://www.thebodyshop.in/" },
        { name: "Mama Earth", image: mamaearth, url: "https://bitli.in/lEpvz65" },
        { name: "The Man Company", image: Man, url: "https://bitli.in/gB7SHP4" },
        { name: "Bombay Shaving Company", image: BombayShaving, url: "https://bitli.in/PHqrVj9" },
        { name: "Wow Skin Care", image: WowSkin, url: "https://bitli.in/m0r5pT3" },
      ],
    },
    {
      label: "Courses",
      icon: '<i class="fa-solid fa-coins"></i>',
      subcategories: [
        { name: "Binance", image: Binance, url: "https://accounts.binance.com/register?ref=TOR4GBZF" },
        { name: "KuCoin", image: Kucoin, url: "https://www.kucoin.com/r/af/rMMFZ8U" },
        { name: "MEXC", image: Mexc, url: "https://www.mexc.com/register?inviteCode=mexc-SPOT50" },
        { name: "BingX", image: BingX, url: "https://bingx.pro/invite/UAIMID/" },
        { name: "Bitget", image: Bitget, url: "https://www.bitget.com/expressly?channelCode=ahtq&vipCode=5u8c&languageType=0" },
        { name: "Weex", image: Weex, url: "https://weex.info/en" },
        { name: "Bitvavo", image: Bitvavo, url: "https://bitvavo.com/en" },
        { name: "QX Broker", image: OxBroker, url: "https://qxbroker.com/en" },
        { name: "Alpha Capital", image: Alpha, url: "https://alphacapitalgroup.uk/" },
        { name: "Maven Trading", image: Manven, url: "https://maventrading.com/" },
        { name: "Funder Pro", image: Funder, url: "https://funderpro.cxclick.com/visit/?bta=36023&brand=funderpro" },
        { name: "Safe Pal", image: SafePal, url: "https://www.safepal.com/store/s1?ref=ogjhyje" },
        { name: "Pocket Option", image: Pocket, url: "https://p.finance/en/register/?utm_campaign=810886&utm_source=affiliate&utm_medium=sr&a=uKVRyGAjOpjzph&ac=50start&code=50START" },
        { name: "E8", image: E8, url: "https://e8markets.com/a/B2CD097E" },
        { name: "Phemex", image: Phemex, url: "https://phemex.com/account/referral/invite-friends-entry?referralCode=G5L2W2" },
        { name: "ByBit", image : ByBit, url: "https://www.bybitglobal.com/en/sign-up?affiliate_id=48538&group_id=76427&group_type=1"}
      ],
    },
    {
      label: "Fashion",
      icon: '<i class="fa-solid fa-shirt"></i>',
      subcategories: [
        { name: "Shoppers Stop", image: Shoppers, url: "https://www.shoppersstop.com/home" },
        { name: "WildCraft", image: Wildcraft, url: "https://wildcraft.com/" },
        { name: "The Souled Store", image: Souled, url: "https://www.thesouledstore.com/" },
        { name: "XYXX", image: Xyxx, url: "	https://bitli.in/tHjQwNr" },
        { name: "SareesKart", image: SareesKart, url: "https://sareekart.co/" },
        { name: "Ola", image: Ola, url: "https://www.olacabs.com/" },
        { name: "Uber", image: Uber, url: "https://www.uber.com/in/en/" },
      ],
    },

    {
      label: "Marketing",
      icon: '<i class="fa-solid fa-chart-simple"></i>',
      subcategories: [
        { name: "Get Response", image: GetResponse, url: "https://www.getresponse.com?a=dmvf67vxem" },
        { name: "Vid IQ", image: VidIQ, url: "https://vidiq.com/NitinRajvansh" },
      ],
    },
  ];

  // Function to show the dropdown when hovering
  const handleMouseEnter = (index) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout); // Clear existing timeout
    setDropdownVisible(index); // Show dropdown for the hovered category
  };

  // Function to hide the dropdown with a delay of 3 seconds
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setDropdownVisible(null), 2500); // Set delay of 3 seconds
    setDropdownTimeout(timeout); // Save timeout so we can clear it if needed
  };

  // Cleanup timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (dropdownTimeout) clearTimeout(dropdownTimeout);
    };
  }, [dropdownTimeout]);

  // offcanvas closing]g

  const closeBtn = useRef(null);
  const closeMenu = () => {
    closeBtn.current.click();
  };

  return (
    <div className="w-full fixed top-0 z-50 shadow-md">
      {/* Navbar */}
      <header className="relative text-white px-3  py-[1px] bg-[#19141a] bg-white flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl text-zinc-900 font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          CouponSphere
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className=" text-black text-2xl sm:hidden"
          onClick={() => setMobileNavVisible(!mobileNavVisible)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Search Bar */}
        <div className="hidden sm:block w-1/3">
          <div className="relative">
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5 "
              placeholder="Search here"
              required
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <i className="text-gray-400 fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        {/* App Button */}
        <div className="hidden md:block">
          <div className="relative store-dropdown">
            <button
              className="hidden flex items-center gap-2 bg-white  text-black px-4 py-1 rounded-lg  bg-gradient-to-r from-[#0652c5] to-[#d4418e] text-white"
              onClick={() => setStoreDropdownVisible(!storeDropdownVisible)}
            >
              <img
                width="20"
                height="20"
                src="/images/icon_app_download.svg"
                alt="store"
              />
              <span>App</span>
            </button>
            {storeDropdownVisible && (
              <div className="absolute bg-white text-black mt-2 right-0 shadow-lg rounded-md p-2 w-44 ">
                <button className="w-full flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md ">
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/fluency/48/google-play-store-new.png"
                    alt="google-play-store"
                  />
                  Google Play
                </button>
                <button className="w-full flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md">
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-filled/50/mac-os.png"
                    alt="app-store"
                  />
                  App Store
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Categories & Navigation */}
      <div className="hidden bg-[#e5e7eb] bg-[#ffd1dc] md:flex  text-balck p-4 justify-center">
        <div className="flex justify-around items-center gap-10 w-[70vw] ">
          {categories.map((category, index) => (
            <div key={index} className="relative dropdown">
              <button
                className="relative text-gray-700  cursor-pointer text-lg hover:text-brown-300 transition"
                onMouseEnter={() => handleMouseEnter(index)} // Show dropdown
                onMouseLeave={handleMouseLeave}
              >
                {category.label}
              </button>
              {dropdownVisible === index && (
                <div className="absolute bg-white text-black mt-2 shadow-lg rounded-md w-48 ps-2 pb-2 max-h-80 overflow-y-auto hide-scrollbar">
                  {category.subcategories.map((product, subIndex) => (
                    <a
                      key={subIndex}
                      className="block p-2 hover:bg-[#ffd1dc] rounded-md cursor-pointer"
                      onClick={() => {
                        setSelectedProduct(product);
                        localStorage.setItem(
                          "selectedProduct",
                          JSON.stringify(product)
                        );
                        navigate("/product");
                      }}
                    >
                      {product.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Search Results */}
      <div className="absolute sm:top-16 left-1/2 w-full -translate-x-1/2 ">
        <div className="flex justify-around sm:ps-36 w-full items-center">
          <ul className="bg-gray-100 rounded-md min-w-[334px] sm:min-w-[450px] max-h-60 overflow-y-auto hide-scrollbar">
            {searchedData.length > 0 &&
              searchedData.map((product, index) => (
                <li
                  key={index}
                  className="py-2 px-4 hover:bg-gray-300 border-b cursor-pointer"
                  onClick={() => {
                    setSelectedProduct(product);
                    localStorage.setItem(
                      "selectedProduct",
                      JSON.stringify(product)
                    );
                    navigate("/product");
                    setSearchedData([]);
                  }}
                >
                  <h3>{product.name}</h3>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#19141a] text-white w-[75%] transform ${
          mobileNavVisible ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <div className="p-4">
          {/* Close Button */}
          <button
            ref={closeBtn}
            className="text-white text-2xl mb-4"
            onClick={() => setMobileNavVisible(false)}
          >
            <i className="fa-solid fa-times"></i>
          </button>

          {/* Mobile Navigation Links */}
          <nav>
            <div className="hidden w-full">
              <div className="relative">
                <input
                  type="text"
                  id="voice-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5 "
                  placeholder="Search here"
                  required
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <i className="text-gray-400 fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
            {/* Categories with Subcategories */}
            {categories.map((category, index) => (
              <div key={index} className="mb-4">
                <button
                  className="block w-full text-left hover:underline font-bold"
                  onClick={() =>
                    setDropdownVisible(dropdownVisible === index ? null : index)
                  }
                >
                  {category.label}
                </button>
                {dropdownVisible === index && (
                  <div className="ml-4 space-y-2">
                    {category.subcategories.map((sub, subIndex) => (
                      <a
                        key={subIndex}
                        href={sub.url}
                        className="block hover:underline"
                        onClick={() => {
                          setSelectedProduct(sub);
                          localStorage.setItem(
                            "selectedProduct",
                            JSON.stringify(sub)
                          );
                          navigate("/product");
                          closeMenu();
                          setDropdownVisible(false);
                        }}
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* App Button for Mobile */}
            <div className="mt-6">
              <div className="relative store-dropdown hidden ">
                <button
                  className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg w-full  bg-gradient-to-r from-[#0652c5] to-[#d4418e] text-white"
                  onClick={() => setStoreDropdownVisible(!storeDropdownVisible)}
                >
                  <img
                    width="20"
                    height="20"
                    src="/images/icon_app_download.svg"
                    alt="store"
                  />
                  <span>Download App</span>
                </button>

                {/* App Dropdown */}
                {storeDropdownVisible && (
                  <div className="bg-white text-black mt-2 shadow-lg rounded-md p-2 w-full">
                    <button className="w-full flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md">
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/fluency/48/google-play-store-new.png"
                        alt="google-play-store"
                      />
                      Google Play
                    </button>
                    <button className="w-full flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md">
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/ios-filled/50/mac-os.png"
                        alt="app-store"
                      />
                      App Store
                    </button>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Backdrop for Mobile Drawer */}
      {mobileNavVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMobileNavVisible(false)}
        ></div>
      )}
    </div>
  );
};

export default Header;
