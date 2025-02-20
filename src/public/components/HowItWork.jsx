import React from "react";
import { FaUserCheck, FaUtensils, FaTruck } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

const steps = [
  {
    icon: <FaUserCheck className="text-orange-500 text-6xl mx-auto drop-shadow-lg" />,
    title: "Sign Up & Subscribe",
    description: "Create an account and choose a meal plan that fits your needs.",
  },
  {
    icon: <FaUtensils className="text-orange-500 text-6xl mx-auto drop-shadow-lg" />,
    title: "Customize Your Meals",
    description: "Select your preferred meals and customize options as needed.",
  },
  {
    icon: <MdPayment className="text-orange-500 text-6xl mx-auto drop-shadow-lg" />,
    title: "Secure Payment",
    description: "Make hassle-free online payments with multiple options.",
  },
  {
    icon: <FaTruck className="text-orange-500 text-6xl mx-auto drop-shadow-lg" />,
    title: "Get Your Meals Delivered",
    description: "Enjoy fresh and hygienic meals delivered to your location on time.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-orange-200 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-16">
          How It Works
        </h2>
        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-500 relative"
            >
              <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-3xl shadow-lg"></div>
              <div className="relative z-10">
                {step.icon}
                <h3 className="text-2xl font-semibold text-gray-700 mt-6">
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-4">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
// 

// import React from "react";
// import { FaUserCheck, FaUtensils, FaTruck } from "react-icons/fa";
// import { MdPayment } from "react-icons/md";

// const steps = [
//   {
//     icon: <FaUserCheck className="text-orange-500 text-6xl mx-auto" />,
//     title: "Sign Up & Subscribe",
//     description: "Create an account and choose a meal plan that fits your needs.",
//   },
//   {
//     icon: <FaUtensils className="text-orange-500 text-6xl mx-auto" />,
//     title: "Customize Your Meals",
//     description: "Select your preferred meals and customize options as needed.",
//   },
//   {
//     icon: <MdPayment className="text-orange-500 text-6xl mx-auto" />,
//     title: "Secure Payment",
//     description: "Make hassle-free online payments with multiple options.",
//   },
//   {
//     icon: <FaTruck className="text-orange-500 text-6xl mx-auto" />,
//     title: "Get Your Meals Delivered",
//     description: "Enjoy fresh and hygienic meals delivered to your location on time.",
//   },
// ];

// const HowItWork = () => {
//   return (
//     <section className="py-16 bg-gray-100 text-center">
//       <div className="container mx-auto px-6">
//         <h2 className="text-5xl font-bold text-gray-800 mb-12">How It Works</h2>
//         <div className="grid md:grid-cols-4 gap-10">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
//             >
//               {step.icon}
//               <h3 className="text-2xl font-semibold text-gray-700 mt-4">
//                 {step.title}
//               </h3>
//               <p className="text-gray-600 mt-2">{step.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWork;
