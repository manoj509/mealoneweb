import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import iosStore from "../assets/iOS-Store.png";
import playStore from "../assets/Google-playstore.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-4 gap-8">
        
        {/* Left Section - Logo & Social Media */}
        <div>
          <img src="https://via.placeholder.com/180x60?text=MealOne" alt="Company Logo" className="mb-4" />
          <p className="text-sm">
            We at MealOne bring in technology and solutions for building a healthy society by delivering the best homemade food from nearby home chefs.
          </p>
          <div className="flex space-x-4 mt-5">
            <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-green-500 hover:text-white transition duration-300 shadow-md">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-green-500 hover:text-white transition duration-300 shadow-md">
              <FaInstagram />
            </a>
            <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-green-500 hover:text-white transition duration-300 shadow-md">
              <FaYoutube />
            </a>
            <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-green-500 hover:text-white transition duration-300 shadow-md">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Middle Section - Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-600">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-green-600 transition">About Us</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Why Us</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Join Us</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Careers</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Middle Section - Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-600">Information</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-green-600 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Cancellation & Refunds</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Blogs</a></li>
          </ul>
        </div>

        {/* Right Section - Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-600">Contact Us</h3>
          <p className="flex items-center gap-2 text-sm">
            <FaPhoneAlt className="text-green-500" /> +91-7620203121
          </p>
          <p className="flex items-center gap-2 mt-3 text-sm">
            <MdEmail className="text-green-500" /> help@mealone.com
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 py-5 text-center text-sm bg-gray-200 font-semibold">
        <p>© 2025 MealOne Pvt Ltd. All rights reserved</p>
      </div>

      {/* App Download Section */}
      <div className="flex justify-center gap-6 py-6">
        <img src={iosStore} alt="Download on App Store" className="h-14 hover:scale-105 transition-transform duration-300 shadow-lg" />
        <img src={playStore} alt="Get it on Google Play" className="h-14 hover:scale-105 transition-transform duration-300 shadow-lg" />
      </div>
    </footer>
  );
};

export default Footer;
