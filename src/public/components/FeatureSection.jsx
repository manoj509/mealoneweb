import React from "react";
import app from "../assets/customize.png";
import location from "../assets/location.png";
import deliveryBoy from "../assets/delivery-boy.webp";

const FeaturesSection = () => {
  const features = [
    {
      title: "Meal Customization",
      description: "Modify your meals as per your choice (e.g. chapatti, bhakari).",
      image: app,
    },
    {
      title: "Flexible Delivery Location",
      description: "Change delivery location to work or home as needed.",
      image: location,
    },
    {
      title: "Order Multiple Tiffins",
      description: "Order multiple tiffins from your pending meals whenever required.",
      image: deliveryBoy,
    },
    {
      title: "Planned Leaves",
      description: "Plan leaves according to your meal plan with ease.",
      image: deliveryBoy,
    },
    {
      title: "Fresh & Hygienic Meals",
      description: "Enjoy homemade-style food prepared with quality ingredients.",
      image: deliveryBoy,
    },
    {
      title: "Flexible Meal Plan",
      description: "Choose from Veg, Non-Veg, Special Single Thali, or customize your meals.",
      image: deliveryBoy,
    },
    {
      title: "Weekly Variety",
      description: "Experience new flavors throughout the week with no menu repetition.",
      image: deliveryBoy,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-green-100 to-white px-6 md:px-20">
      <h2 className="text-5xl font-bold text-center text-green-800 mb-12 uppercase tracking-wide drop-shadow-lg">
        Special About Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 container mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
          >
            {/* Image Section */}
            <div className="md:w-1/3 flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-28 h-28 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-green-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;






// import React from "react";
// import app from "../assets/customize.png";
// import location from "../assets/location.png";
// import delvieryboy from "../assets/delivery-boy.webp";

// const FeaturesSection = () => {
//   const features = [
//     {
//       title: "Meal Customization",
//       description:
//         "Modify your meals as per your choice(e.g. chapatti,bhakari)",
//       image: app,
//     },
//     {
//       title: "Flexible Delivery Location",
//       description:
//         "Change delivery location to work or home if needed",
//       image: location,
//     },
//     {
//       title: "Order Multiple Tiffins",
//       description:
//         "Order multiple tiffin from your pending meals if needed",
//       image: delvieryboy,
//     },
//     {
//       title: "Planned Leaves",
//       description:
//         "Plan leaves according meal plan for specific days as per your convenience",
//       image: delvieryboy,
//     },
//     {
//       title: "Fresh & Hygienic Meals",
//       description:
//         "Daily homemade-style food prepared with quality ingredients",
//       image: delvieryboy,
//     },
//     {
//       title: "Flexible Meal Plan",
//       description:
//         "Veg, non-veg Special Single thali and customized meal choices",
//       image: delvieryboy,
//     },
//     {
//       title: "Weelkly veriety",
//       description:
//         "Experence new flavors throught the week, with no menu repetation",
//       image: delvieryboy,
//     },
//   ];

//   return (
//     <section className="py-16 bg-white px-20">
//       <h2 className="text-5xl font-bold text-center mb-12">Special About Us</h2>

//       <div className="container mx-auto px-6 space-y-16">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className={`flex flex-col md:flex-row items-center gap-8 ${
//               index % 2 === 1 ? "md:flex-row-reverse" : ""
//             }`}
//           >
//             {/* Image Section */}
//             <div className="md:w-1/2 flex justify-center">
//               <img
//                 src={feature.image}
//                 alt={feature.title}
//                 className="w-64 h-auto object-cover"
//               />
//             </div>

//             {/* Text Section */}
//             <div className="md:w-1/2 text-center md:text-left">
//               <h3 className="text-4xl font-semibold mb-3">{feature.title}</h3>
//               <p className="text-gray-600 text-lg">{feature.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;
