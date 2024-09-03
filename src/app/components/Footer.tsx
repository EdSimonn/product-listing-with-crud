import React from "react";

const Footer = () => {
  return (
    <div className="bg-white text-gray-700">
      <div className="container mx-auto w-full max-w-screen-xl ss:p-10 p-4 py-6 lg:py-8 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-6">
          <div>
            <h3 className='text-black font-semibold'>CUSTOMER SERVICE</h3>
            <ul className="text-xs flex flex-col gap-y-2 py-4">
              <li>Help & Contact Us</li>
              <li>Returns & Refunds</li>
              <li>Online Stores</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
          <div>
            <h3 className='text-black font-semibold'>COMPANY</h3>
            <ul className="text-xs flex flex-col gap-y-2 py-4">
              <li>Whate We Do</li>
              <li>Availabe Services</li>
              <li>Latest Posts</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className='text-black font-semibold'>SOCIAL MEDIA</h3>
            <ul className="text-xs flex flex-col gap-y-2 py-4">
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Tumblr</li>
              <li>Pinterest</li>
            </ul>
          </div>
          <div>
            <h3 className='text-black font-semibold'>PROFILE</h3>
            <ul className="text-xs flex flex-col gap-y-2 py-4">
              <li>My Account</li>
              <li>Checkout</li>
              <li>Order Trading</li>
              <li>Help & Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
