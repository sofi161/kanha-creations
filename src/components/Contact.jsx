import React from "react";
import { CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { AiOutlineFacebook } from "react-icons/ai";
import { BiBold } from "react-icons/bi";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-gray-200 mt-12 pt-12 pb-6 px-8 md:px-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-15">
        <div className="flex justify-center text-center flex-col p-2">
          <h4 className="font-semibold  text-lg mb-4">Kanha Creations</h4>
          <p className="text-sm">
            Bringing elegance to your everyday living. Discover beautifully
            crafted furniture designed for modern homes.
          </p>
        </div>

        <div className="flex justify-center text-center flex-col">
          <h4 className="font-semibold text-lg mb-4">Explore</h4>
          <ul className=" space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Sofas
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Chairs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tables
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Beds
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center text-center flex-col">
          <h4 className="font-semibold text-lg mb-4">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping Info
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center text-center flex-col">
          <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
          <ul className="flex justify-center text-center space-y-2 text-sm flex gap-4">
            <li>
              <a href="#" className="hover:underline">
                <CiInstagram size={25} fontWeight={BiBold} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <AiOutlineFacebook size={25} fontWeight={BiBold} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <CiTwitter size={25} fontWeight={BiBold} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <CiYoutube size={25} fontWeight={BiBold} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-700 pt-4">
        &copy; 2025 Kanha Creations. All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
