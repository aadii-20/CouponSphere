import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useProduct } from "../Context/ProductContext";
import { useNavigate } from "react-router-dom";
import "./product.css";
import fallback_product_image from "../assets/fallback_product_image.jpg";

function Product() {
  const navigate = useNavigate();
  const { selectedProduct, setSelectedProduct } = useProduct();

  const [formattedDate, setFormattedDate] = useState(null);
  const [votes, setVotes] = useState(null);
  const [ratings, setRatings] = useState(null);
  const topRef = useRef(null);
  const productRef = useRef(null);

  useEffect(() => {
    if (!selectedProduct) {
      const storedProduct = localStorage.getItem("selectedProduct");
      if (storedProduct) {
        const parsedProduct = JSON.parse(storedProduct);
        setSelectedProduct(parsedProduct);
        console.log("Getting data from localStorage:", parsedProduct);
      } else {
        console.log("No product found in localStorage, redirecting...");
        navigate("/");
      }
    }
  }, []);

  // Update localStorage ONLY when selectedProduct is NOT null
  useEffect(() => {
    if (selectedProduct) {
      localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
      console.log("Setting data to localStorage:", selectedProduct);
    }
  }, [selectedProduct]);

  // Generate random votes & ratings once
  useEffect(() => {
    setVotes(Math.floor(Math.random() * 4000));
    setRatings((Math.random() * 1.5 + 3.5).toFixed(1)); // Ratings between 3.5 and 5
  }, []);

  // Format date on mount
  useEffect(() => {
    const today = new Date();
    setFormattedDate(
      today.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    );
  }, []);

  // Scroll to top when the page loads
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // Scroll to product section when selectedProduct is set
  useEffect(() => {
    if (productRef.current) {
      productRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedProduct]);

  // If no product is selected, return null to prevent errors
  if (!selectedProduct) {
    return null;
  }
  return (
    <div ref={topRef} className="flex flex-col min-h-screen w-full">
      <Header />
      {console.log(selectedProduct)}
      <main className="flex-grow w-full sm:mt-36">
        {/* Product Section */}
        <div className="min-h-[45vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://shipthedeal.com/build/assets/body_bg.9cc5b477.jpg')`,
        }}>
          <div className="p-8">
            <nav className="text-gray-600 text-lg mb-4">
              <span>Home</span> &gt; <span>Clothing & Accessories</span> &gt;{" "}
              <span className="text-[#05205c]">{selectedProduct.name}</span>
            </nav>

            <div className="grid grid-cols-[100px_1fr] lg:grid-cols-[188px_1fr_358px] gap-y-2 gap-x-7 lg:gap-x-10 lg:mt-8 lg:mb-7 mt-3 mb-2 sm:px-4 py-10">
              <a target="_blank" href={selectedProduct.url}
                style={{ cursor: "pointer" }}
                className="lg:row-[1/span_2] lg:w-[188px] lg:h-[188px] p-3 lg:p-6 flex items-center justify-center  rounded-full"
              >
                {selectedProduct.image && (
                  <img
                    src={selectedProduct.image}
                    alt={`${selectedProduct.name} Logo`}
                    // width="140"
                    // height="140"
                    decoding="async"
                    className="gradient-border rounded scale-[1.5]"
                  />
                ) }
              </a>
              <h1 className="text-[18px] md:text-[32px] leading-tight text-gradient flex items-center ">
                {selectedProduct.name} Coupons And Discount Codes |{" "}
                {formattedDate}
              </h1>
              <div className="max-lg:col-[1/3] lg:row-[2/4] xl:max-w-[670px]">
                <div className="hidden lg:block text-justify text-base mb-2 opacity-70">
                  {selectedProduct.name} total of active coupons today: 1. The
                  date of the last update {formattedDate}; The best active
                  coupon: -. You can use it to get the biggest discount &amp;
                  Deal &amp; free shipping on
                  {selectedProduct.name}, 100% verification of each Coupon &amp;
                  Deal.
                </div>
                <div className="hidden lg:flex text-[15px] md:text-[18px] opacity-70 gap-x-5 flex-wrap">
                  <div className="whitespace-nowrap">
                    <span className="text-[#05205C] font-bold">1</span> Offers
                    Available
                  </div>
                  <div className="whitespace-nowrap">
                    <span className="text-[#05205C] font-bold">0</span> Coupon
                    Code(s)
                  </div>
                  <div className="whitespace-nowrap">
                    <span className="text-[#05205C] font-bold">53</span> Sales
                  </div>
                </div>
              </div>
              <div className="sm:flex max-lg:col-[1/3] lg:row-[1/span_2] hidden items-center">
                <a
                  rel="nofollow"
                  target="_blank" href={selectedProduct.url}
                  className="main-button btn btn-dark px-8 py-4 md:py-[18px] lg:w-full max-xs:w-full block bg-gradient-to-r from-[#0652c5] to-[#d4418e] "
                >
                  Go To {selectedProduct.name}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Relative Section */}
        <div className="bg-[#F6F8FE] ">
          <div className="container max-lg:max-w-none ">
            <div className="grid sm:grid-cols-[306px_1fr] grid-rows-[auto_1fr] grid-flow-dense gap-y-6 gap-x-5 lg:gap-x-8 mt-4 lg:mt-2 mb-7 py-0 md:py-5 lg:py-11">
              {/* Right Section */}
              <div className="sm:col-[2/3] sm:row-[1/3]">
                <div className="flex gap-[22px] flex-wrap mt-4 lg:mt-0">
                  {/* Adidas Signup 50% */}
                  <div className="border border-gray-200 rounded-2xl bg-white p-3 sm:px-3 sm:py-3 w-full flex flex-wrap gap-5 items-center position-relative min-h-150 ">
                    <div className="hidden sm:block grow-0 shrink-0 w-[100px] h-[100px] p-2 items-center justify-center max-xs:-mb-4 text-prim-light text-2xl">
                      <img
                        className="rounded-md"
                        id="getCode23_image"
                        src={selectedProduct.image || fallback_product_image}
                        alt="50% Off With Email Signup"
                      />
                    </div>
                    <div className="flex-1 basis-[300px] justify-evenly">
                      <div
                        id="getCode23_name"
                        className="font-bold text-xl mb-[10px]"
                      >
                        50% Off With Email Signup
                      </div>
                      <div className="flex-row flex flex-wrap">
                        <div className="flex flex-column coupon-badge items-center gap-1 text-xs">
                          <img
                            style={{ width: "30px" }}
                            src="https://a.slack-edge.com/production-standard-emoji-assets/14.0/google-medium/1f64c@2x.png"
                            alt="15% Off With Email Signup Best Coupon"
                          />
                          <span className="font-[400]">Best Coupon</span>
                        </div>
                      </div>
                      <div
                        id="getCode23_description"
                        className="uppercase text-prim-light mb-[10px]"
                      ></div>
                      <span>35 uses</span> |{" "}
                      <span className="uppercase text-prim-exlight">
                        <span id="getCode23_storename">
                          {selectedProduct.name}
                        </span>{" "}
                        coupons
                      </span>
                    </div>
                    <span className="hidden" id="getCode23_link">
                      https://adidas.njih.net/KnzLz
                    </span>
                    <a
                      target="_blank" href={selectedProduct.url}
                      className="btn grow-1 shrink-0 basis-[202px] text-[14px] px-4 py-3 max-xs:basis-full  bg-gradient-to-r from-[#0652c5] to-[#d4418e] "
                      data-target="#getCode23"
                    >
                      Get Deal
                    </a>
                  </div>
                  {/* Adidas Signup 15%*/}
                  <div className="border border-gray-200 rounded-2xl bg-white p-3 sm:px-3 sm:py-3 w-full flex flex-wrap gap-5 items-center position-relative min-h-150 ">
                    <div className="hidden sm:block grow-0 shrink-0 w-[100px] h-[100px] p-2 items-center justify-center max-xs:-mb-4 text-prim-light text-2xl">
                      <img
                        className="rounded-md"
                        id="getCode23_image"
                        src={selectedProduct.image || fallback_product_image}
                        alt="15% Off With Email Signup"
                      />
                    </div>
                    <div className="flex-1 basis-[300px] justify-evenly">
                      <div
                        id="getCode23_name"
                        className="font-bold text-xl mb-[10px]"
                      >
                        15% Off With Email Signup
                      </div>
                      <div className="flex-row flex flex-wrap">
                        <div className="flex flex-column coupon-badge items-center gap-1 text-xs">
                          <img
                            style={{ width: "30px" }}
                            src="https://a.slack-edge.com/production-standard-emoji-assets/14.0/google-medium/1f64c@2x.png"
                            alt="15% Off With Email Signup Best Coupon"
                          />
                          <span className="font-[400]">Best Coupon</span>
                        </div>
                      </div>
                      <div
                        id="getCode23_description"
                        className="uppercase text-prim-light mb-[10px]"
                      ></div>
                      <span>35 uses</span> |{" "}
                      <span className="uppercase text-prim-exlight">
                        <span id="getCode23_storename">
                          {selectedProduct.name}
                        </span>{" "}
                        coupons
                      </span>
                    </div>
                    <span className="hidden" id="getCode23_link">
                      https://adidas.njih.net/KnzLz
                    </span>
                    <a
                      target="_blank" href={selectedProduct.url}
                      className="btn grow-1 shrink-0 basis-[202px] text-[14px] px-4 py-3 max-xs:basis-full  bg-gradient-to-r from-[#0652c5] to-[#d4418e] "
                      data-target="#getCode23"
                    >
                      Get Deal
                    </a>
                  </div>
                  {/* Adidas Information */}
                  <div className="max-w-[93vw] content border border-gray-200 rounded-2xl bg-white py-2 lg:py-4 px-4 lg:px-7 my-9">
                    <h2 className="h1">{selectedProduct.name} Information</h2>
                    <p>
                      Welcome to our {selectedProduct.name} coupon and promo
                      code page. Below you’ll find everything you need to know
                      about how to save on your online order at{" "}
                      {selectedProduct.name}.
                    </p>

                    <h2 className="h1">
                      <strong>
                        The Best {selectedProduct.name} Coupon is 15% Off With
                        Email Signup
                      </strong>
                    </h2>

                    <p>
                      The best {selectedProduct.name} coupon code currently is
                      15% Off With Email Signup with code "(No Code Needed)".
                      This promo code saves you 20% off once applied at
                      checkout.
                    </p>

                    <h2 className="h1">
                      <strong>
                        Here’s How To Redeem an {selectedProduct.name} Coupon
                      </strong>
                    </h2>

                    <ol>
                      <li>
                        <p>
                          In order to use your {selectedProduct.name} promo
                          code, you’ll want to add your desired{" "}
                          {selectedProduct.name} products to your shopping cart.
                          Once you’re finished shopping and are ready to pay, go
                          to the checkout. From the checkout page, you’ll notice
                          there’s a box next to your total where you can input a
                          code. The box or prompt could read “coupon,” “promo
                          code,” or “discount code.”
                        </p>
                      </li>
                      <li>
                        <p>
                          <img
                            alt=""
                            src="https://shipthedeal.com//assets/uploads/stores_content/discount-code-box.png"
                            style={{ width: "400px" }}
                          />
                          Next, you’ll want to figure out which coupon you want
                          to apply. We recommend the first coupon at the top of
                          this page. Just click “Get Coupon” and you’ll notice a
                          popup with the code. Copy the code.
                        </p>
                      </li>
                      <li>
                        <p>
                          Go back to step 1 where you located the “discount code
                          or gift card” box. Simply paste your copied coupon
                          here, and you’ll see the savings after clicking apply.
                        </p>
                      </li>
                    </ol>

                    <h2 className="h1">
                      <strong>
                        How ShipTheDeal Finds The Biggest Working{" "}
                        {selectedProduct.name} Discount Codes
                      </strong>
                    </h2>

                    <p>
                      The bulk of our team at ShipTheDeal works around the clock
                      looking for coupons and adding them to your favorite
                      stores as soon as possible. We also partner with thousands
                      of online stores and are provided exclusive discount codes
                      to share with our audience. Our team searches for{" "}
                      {selectedProduct.name} promo codes by signing up for their
                      newsletters, social media accounts, live chat, and more.
                      We check the most popular stores daily and add coupons as
                      soon as possible.
                    </p>

                    <p>
                      Part of our process is aggregating coupons from a variety
                      of sources, but the bulk of our coupons come from a team
                      that monitors sales and discount code releases.
                      Oftentimes, these codes are short-lived, but we do our
                      best to update them as fast as possible. We also allow our
                      users to submit a coupon.
                    </p>

                    <p>
                      If you have your own {selectedProduct.name} promo code,
                      you{" "}
                      <a
                        href="https://forms.gle/xuk9KFyfCVzW4MCV9"
                        rel="nofollow"
                      >
                        can submit your code here
                      </a>
                      .
                    </p>

                    <h2 className="h1 hidden">
                      <strong>
                        If You Like {selectedProduct.name} Coupons, Check Out
                        These Similar Offers
                      </strong>
                    </h2>

                    <ul className="hidden">
                      <li>
                        <a
                          href="https://shipthedeal.com/store/686-coupon"
                          rel="dofollow"
                        >
                          686: 15% OFF 686 - Latest Deals
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shipthedeal.com/store/theriversedgecom-coupon"
                          rel="dofollow"
                        >
                          TheRiversEdge.com: 15% OFF TheRiversEdge.com - Latest
                          Deals
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shipthedeal.com/store/appaman-coupon"
                          rel="dofollow"
                        >
                          appaman: 15% OFF appaman - Latest Deals
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shipthedeal.com/store/kinisi-performance-coupon"
                          rel="dofollow"
                        >
                          Kinisi Performance: 15% OFF America's Finest - Latest
                          Deals
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shipthedeal.com/store/masqd-coupon"
                          rel="dofollow"
                        >
                          masQd: 20% Off Any Order
                        </a>
                      </li>
                    </ul>

                    <h2 className="h1">
                      <strong>
                        Can I Use Multiple Coupons at the Same Time?
                      </strong>
                    </h2>

                    <p>
                      {selectedProduct.name} does not allow multiple coupons,
                      otherwise known as coupon stacking. You can only redeem
                      one discount code at a time, so we recommend finding the
                      largest current offer. Typically, the coupon will work on
                      sale items, meaning you can still double-dip on your
                      savings. Additionally, you can still qualify for free
                      shipping on certain orders with your coupon.
                    </p>

                    <h2 className="h1">
                      <strong>
                        I Can’t Find a Working Coupon. Any Suggestions?
                      </strong>
                    </h2>

                    <p>
                      Unfortunately, not every store has coupons available at
                      all times of the year. Some stores only release online
                      coupons during holidays, Black Friday, or Cyber Monday.
                      That said, there are several other ways you can save money
                      without a code.
                    </p>

                    <h3>
                      <strong className="h2">Newsletter Subscription</strong>
                    </h3>

                    <p>
                      We suggest signing up for {selectedProduct.name}{" "}
                      newsletters to make sure you’re immediately notified when
                      the newest coupons and flash sales happen. Sometimes
                      you’ll instantly receive a percentage-off code just by
                      signing up.
                    </p>

                    <h3>
                      <strong className="h2">Qualify for Free Shipping</strong>
                    </h3>

                    <p>
                      Most websites offer free shipping if you qualify by
                      fulfilling the minimum order required. You’ll typically be
                      notified of this while going through the checkout process
                      or by a banner at the top of the {selectedProduct.name}{" "}
                      website.
                    </p>

                    <h3>
                      <strong className="h2">Live Chat or Email</strong>
                    </h3>

                    <p>
                      We find a lot of coupons not posted simply by emailing for
                      a discount or by asking via “live chat.” You’d be
                      surprised at how effective this savings hack is!
                    </p>

                    <h3>
                      <strong className="h2">Referral Program</strong>
                    </h3>

                    <p>
                      Check to see if there’s a referral program. Many stores
                      will give you a referral link or referral code to pass on
                      to your friends and give you a substantial discount if
                      they purchase. Typically, your friend or family member
                      will receive a discount as well. Referral codes can save
                      you anywhere from $10 to $50 for you and your referral.
                    </p>

                    <h3>
                      <strong className="h2">Abandon Your Shopping Cart</strong>
                    </h3>

                    <p>
                      Many stores will send you a follow-up email offering a
                      discount on your shopping cart if you simply close out the
                      checkout page or just leave their website. This cart
                      abandonment tactic is a great way to get a free discount
                      code sent straight to your inbox. Be patient, as it can
                      take a few hours for their marketing emails to hit your
                      inbox with your coupon. Most of the time, the subject line
                      will say something like “It looks like you forgot to
                      complete your purchase.”
                    </p>

                    <h3>
                      <strong className="h2">Facebook or Instagram</strong>
                    </h3>

                    <p>
                      Some online stores only post their coupons and promo codes
                      on social media platforms. You can visit their pages and
                      see if there are any recent codes offered. Additionally,
                      you can send them a private message asking for a new
                      working coupon. In fact, a lot of online shops only
                      promote their coupons to their social media followers.
                    </p>

                    <h2 className="h1">
                      <strong>
                        Do I Have to Use a Promo Code to Save at{" "}
                        {selectedProduct.name}?
                      </strong>
                    </h2>

                    <p>
                      Sometimes {selectedProduct.name} will simply have prices
                      slashed, and no code is required for your discount.
                      Typically, we’ll let you know how big the sale is, and by
                      clicking “get deal” above, you’ll be able to redeem your
                      savings. If you do find a promo code in addition to the
                      sale offered, give it a try, and you should be able to
                      redeem it for further savings.
                    </p>

                    <h2 className="h1">
                      <strong>
                        Does {selectedProduct.name} Offer Free Shipping?
                      </strong>
                    </h2>

                    <p>
                      Typically, you can receive free shipping on select orders
                      depending on the size of your order. The checkout page
                      will notify what the order size needs to be to qualify for
                      free shipping. You can also check {selectedProduct.name}’s
                      website for their shipping policy to learn more.
                    </p>

                    <h2 className="h1">
                      <strong>
                        {selectedProduct.name} Referral Code Program
                      </strong>
                    </h2>

                    <p>
                      The Referral Code or “Refer a Friend” program is a great
                      way to receive a large discount on your purchase price. In
                      order to qualify, you’ll need to create an account and log
                      in. From here, you’ll have access to your referral link,
                      which can be shared with your friends and family. Your
                      referral link will give both you and your friend a
                      discount once they make a purchase. You can’t use your own
                      referral code for your own purchase. We would recommend
                      having a family member use your link instead.
                    </p>

                    <h2 className="h1">
                      <strong>Is There a Student Discount?</strong>
                    </h2>

                    <p>
                      Unless otherwise stated, we could not find a student
                      discount code for {selectedProduct.name}. It’s not common
                      for online stores to offer student discounts, but when
                      they do become available, we’ll list them here. In the
                      event there is no student discount, you can still save
                      with our coupon codes offered.
                    </p>

                    <h2 className="h1">
                      <strong>
                        Does {selectedProduct.name} Offer a Military or First
                        Responder Discount?
                      </strong>
                    </h2>

                    <p>
                      Currently, {selectedProduct.name} doesn’t have any
                      military or first responder discounts. Most brands that
                      have military discounts will let you know on their footer.
                    </p>

                    <h2 className="h1">
                      <strong>
                        Where Can I Save at {selectedProduct.name} in Addition
                        to Using a Coupon?
                      </strong>
                    </h2>

                    <p>
                      If you check the sales or clearance tab at the top of the
                      page, you’ll be able to see a list of items marked down.
                      You can combine your coupon with any one of these items to
                      save extra while checking out.
                    </p>

                    <h2 className="h1">
                      <strong>First-Time Customer Discounts</strong>
                    </h2>

                    <p>
                      If this is your first time purchasing at{" "}
                      {selectedProduct.name}, you can qualify for a first-time
                      customer discount. Most of the time, you’ll have to sign
                      up for their newsletter to get your code. If it’s a
                      generic coupon, we’ll post it above. If it’s a single-use
                      offer, you’ll have to use their newsletter. If you aren’t
                      a first-time user and want to take advantage of this
                      offer, you’ll want to use a different email address to get
                      your promo code.
                    </p>

                    <h2 className="h1">
                      <strong>What If My Promo Code Is Expired?</strong>
                    </h2>

                    <p>
                      We list coupons with respect to their expiration dates.
                      Once a coupon expires, it gets moved into a list of
                      “Expired Coupons.” Most of the time, these codes won’t
                      work, but sometimes they get relisted. That said,
                      sometimes codes expire and our team misses them. If this
                      happens, try the next code we offer or email us directly
                      to see if we can find you a working code.
                    </p>
                  </div>
                </div>
              </div>
              {/* Left Section */}
              <div className="sm:col-[1/2] sm:row-[1/2] flex flex-col gap-y-6">
                {/* Rating Div */}
                <div className="border border-gray-200 rounded-2xl bg-white py-6 px-7">
                  <div className="text-lg font-medium text-pink-500">
                    {selectedProduct.name} Ratings!
                  </div>
                  <div className="text-lg opacity-80 my-2">
                    Average rating: {ratings} of 5
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-1">
                      <img
                        src=" https://shipthedeal.com/build/assets/star.3fb9470e.svg "
                        alt=""
                      />
                      <img
                        src=" https://shipthedeal.com/build/assets/star.3fb9470e.svg "
                        alt=""
                      />
                      <img
                        src=" https://shipthedeal.com/build/assets/star.3fb9470e.svg "
                        alt=""
                      />
                      <img
                        src=" https://shipthedeal.com/build/assets/nostar.8815b900.svg "
                        alt=""
                      />
                      <img
                        src=" https://shipthedeal.com/build/assets/nostar.8815b900.svg "
                        alt=""
                      />
                    </div>
                    <span className="text-lg opacity-80">({votes} votes)</span>
                  </div>
                </div>
                {/* Submit Coupon Div will be hidden */}
                <div className=" hidden border border-gray-200 rounded-2xl bg-[#abfbed] py-4 lg:py-5 px-2 lg:px-6 faqs-left-sidebar">
                  <div>
                    Have a great {selectedProduct.name} code we are missing?
                    Share it with your fellow Bargain Shoppers!
                  </div>
                  <div className="flex flex-col mt-4">
                    <div
                      id=""
                      data-te-toggle="modal"
                      data-te-target="#login"
                      className="btn grow-1 shrink-0 text-[14px] px-4 py-3 max-xs:basis-full bg-gradient-to-r from-[#0652c5] to-[#d4418e] "
                    >
                      SUBMIT A COUPON
                    </div>
                  </div>
                </div>
                {/* Offer & Promotion */}
                <div className="border border-gray-200 rounded-2xl bg-white py-4 px-7">
                  <ul>
                    <li className="border-b border-gray-200 last:border-b-0 flex justify-between py-[17px]">
                      Total Offers
                      <span className="text-[#05205C] font-medium">3</span>
                    </li>
                    {/* removing on client req. */}
                    <li className="hidden border-b border-gray-200 last:border-b-0 flex justify-between py-[17px]">
                      Promotion
                      <span className="text-[#05205C] font-medium">1</span>
                    </li>
                  </ul>
                </div>
                {/* Discount */}
                {/* removing on client req. */}
                <div className="hidden border border-gray-200 rounded-2xl bg-white py-4 px-7">
                  <ul>
                    <li className="flex justify-between py-[13px]">
                      <span>💰 Average saving:</span>
                      <span className="text-[#05205C] font-medium">$9.90</span>
                    </li>
                    <li className="flex justify-between py-[13px]">
                      <span>✅ Coupons available:</span>
                      <span className="text-[#05205C] font-medium"></span>
                    </li>
                    <li className="flex justify-between py-[13px]">
                      <span>🙌 Best coupon:</span>
                      <span className="text-[#05205C] font-medium">-</span>
                    </li>
                    <li className="flex justify-between py-[13px]">
                      <span>⏰ Last updated:</span>
                      <span className="text-[#05205C] font-medium">
                        {formattedDate}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Product;
