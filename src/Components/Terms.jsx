import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import hero_circle from '../assets/logo/about-us-hero-circle.png';
import logo from '../assets/logo/logo.jpeg'
import { Zomato, Swiggy, PizzaHutt } from '../FoodImages/FoodImages';
import './about.css'

// images
import makemytrip_hotel from "../assets/makemytrip_hotel.jpeg"
import makemytrip_holiday from "../assets/makemytrip_holiday.jpeg"

function Terms() {
  const images = [logo, 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f2c87863147935.5aa799ab2775d.jpg', makemytrip_holiday, makemytrip_hotel]

  const topRef = useRef(null)
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])
  return (
    <div ref={topRef}>
      <Header />

      {/* About Us Hero Section */}
      <div className="w-full flex justify-center  mt-24 sm:mt-36">
        <div className="w-full  flex flex-col lg:flex-row items-center">
          <div className="relative    w-full flex justify-center overflow-visible">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1461 331.3"
              className="sm:w-full sm:h-full min-w-80  sm:top-32"

            >
              <defs>
                <linearGradient id="ellipseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0652C5" />
                  <stop offset="100%" stopColor="#D4418E" />
                </linearGradient>
              </defs>
              <ellipse cx="500" cy="-349.2" rx="600.5" ry="680.5" fill="url(#ellipseGradient)" />
              <circle cx="1125" cy="-114.7" r="225" fill="#412db2" />
              <circle cx="1382.89" cy="262.57" r="26.75" fill="#ffce03" />
              <text x="30%" y="35%" textAnchor="middle" fontSize="50" fill="white" fontWeight="bold">
                Terms of Use
              </text>
              <text className='hidden' x="50%" y="50%" textAnchor="middle" fontSize="24" fill="white">
                <tspan x="31%" dy="0">We believe in the power of gifts.</tspan>
                <tspan x="32%" dy="1.5em">It looks like a smile, feels like a hug,</tspan>
                <tspan x="33%" dy="1.5em">and sounds like an ecstatic “Thank you!”</tspan>
              </text>
            </svg>
            {/* Fliping Card */}
            <div className='absolute top-28 right-1/2 translate-x-1/2 sm:top-44 sm:right-60'>
              <div className="card w-40 sm:w-72 sm:h-52">
                <div className="card-inner">
                  <div className="card-front">
                    <img className=" w-40 sm:w-52 scale-150 rounded-xl" src={Zomato} alt="Hero Circle" />
                  </div>
                  <div className="card-back">
                    <img className=" w-40 sm:w-52 scale-150 rounded-xl" src={Swiggy} alt="Hero Circle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* About Us Description */}
      <div className=' mt-20 flex  gap-16 flex-col   items-center justify-between w-full'>
        <section className="w-full rounded-md   px-6 py-10 bg-[#F6F6F6] bg-[#ffd1dc] text-zinc-800">
          <h2 className="text-2xl font-bold mb-4 "><span className='custom-gradient'>Terms of Use</span></h2>
          <p>
            CouponSphere (hereinafter referred to as "CouponSphere," "we," "us," or "our") provides a digital coupon marketplace in India (the "Services"), accessible via our website published at www.couponsphere.in (and any other websites with CouponSphere branding that link to these Terms) (collectively, the "Site"). Our Services allow users to access discount coupons provided by third-party merchants (“Merchants”) for online use. By using the Services, you agree to comply with and be legally bound by these Terms of Use ("Terms"), whether or not you become a registered user. These Terms govern your access to and use of the Services and constitute a binding legal agreement between you and CouponSphere. Please read these Terms and our Privacy Policy carefully, as the Privacy Policy is incorporated by reference into these Terms.
          </p>
          <br />
          <p>
            If you do not agree to these terms, please do not use the Services.
          </p>

          {/* Mission */}
          <h2 className="text-2xl font-bold mt-6 mb-4"><span className='custom-gradient'>Unauthorized Use</span></h2>
          <p>
            Unauthorized access, distribution, reproduction, copying, retransmission, publication, sale, exploitation (commercial or otherwise), or any other form of transfer of any portion of the Site, Application, or Services, including but not limited to all content, services, digital products, tools, or products, is strictly prohibited.
          </p>


          {/* What We Offer */}
          <h2 className="text-2xl font-bold mt-6 mb-4"><span className='custom-gradient'>Introduction</span></h2>
          <p>
            CouponSphere provides discount vouchers for products offered by Merchants selling online. These discount vouchers are set by the Merchants themselves based on their promotional criteria and can be availed by anyone. The validity of these coupons is time-bound, sometimes lasting only hours or a day. To make the most of the best deals and discounts, it is recommended that you follow our updates regularly. Our primary goal is to help Merchants generate sales within the specified period while also boosting their branding and publicity.
          </p>

          {/* Why Choose Us */}
          <h2 className="text-2xl font-bold mt-6 mb-4"><span className='custom-gradient'>License to CouponSphere</span></h2>

          <p>
            By posting or contributing content to the Services, or by providing feedback, suggestions, ideas, or any other submissions to CouponSphere, you grant CouponSphere a non-exclusive, royalty-free, perpetual, and worldwide license to use your content in connection with the operation of the Services. This includes, but is not limited to:
          </p>
          <p>
            The rights to copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate, and reformat your content, and/or incorporate it into a collective work.
          </p>
          <p>
            The right to sublicense any or all of CouponSphere’s license rights to others.
          </p>

          <p>
            By submitting content, you waive any and all moral rights in favor of CouponSphere, meaning that we can use any ideas you submit (including ideas about our products, services, publications, or advertising campaigns) in any manner we choose, without any obligation to notify or compensate you.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-4"><span className='custom-gradient'>Accuracy Disclaimer</span></h2>
          <p>
            CouponSphere makes no representation or warranty as to the accuracy or usability of any offers, including, but not limited to, coupons, rebates, and discounts posted via the Services. We do not guarantee that any third party will honor or acknowledge any such offers.
          </p>
          <p>
            CouponSphere is not responsible for providing value for any posted offers and is not liable for any changes made by third-party sites or stores, including rebate details, pricing, availability, or usability.
          </p>
          <p>
            We do not and cannot review all materials made available through external websites linked to or from our Services. CouponSphere does not guarantee that the Services or any associated content will be uninterrupted or error-free, that defects will be corrected, or that our Services or servers are free from viruses or bugs.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-4"><span className='custom-gradient'>Limitation of Liability</span></h2>
          <p>
            Under no circumstances shall CouponSphere or its affiliates be liable for any damages (whether consequential, direct, incidental, indirect, punitive, special, or otherwise) arising out of or connected with a third party's offers. This applies regardless of whether such damages are based on contract, strict liability, tort, or other legal theories, and regardless of whether CouponSphere was informed about the possibility of such damages.
          </p>


        </section>
        <div className="w-full overflow-x-auto overflow-y-hidden">
          <div className="flex items-center justify-start gap-10 sm:gap-20 py-4 px-4">
            {images.map((image, index) => (
              <img
                key={index}
                className={`max-w-full w-52 sm:w-60 h-auto rounded-lg scale-105 hover:scale-110 transition-all duration-500 cursor-pointer ${index % 2 == 0 ? 'tilt-left' : 'tilt-right'}`}
                src={image}
                alt="Logo"
              />
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Terms
