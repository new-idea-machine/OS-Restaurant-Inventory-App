// import React from 'react';
// import Navbar from "../components/Navbar";
// import imagePath from "../assets/react.svg";
// import Footer from "../components/Footer";


// const Home = () => {
//   let items = ["Home","Your Shopping List", "Cart"];
//   return (
//     <>
//     <Navbar  brandName="My Grocery App" 
//      imageSrcPath={imagePath} 
//       navItems={items}/>
    


//     <div class="w-full max-w-xs bg-black border border-white rounded-lg shadow dark:bg-gray-400 dark:border-gray-700">
//     <a href="#">
//         {/* <!-- Adjust the image size --> */}
//         <img class="p-3 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product image" />
//     </a>
//     <div class="px-3 pb-3">
//         <a href="#">
//         <h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Gala Apples Red</h5>
//         </a>
//         <div class="flex items-center mt-1 mb-2">
//             <div class="flex items-center space-x-1 rtl:space-x-reverse">
//             </div>
//             <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-1 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">5.0</span>
//         </div>
//         <div class="flex items-center justify-between">
//             <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
//             <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
//         </div>
//     </div>
// </div>




// <div class="w-full max-w-xs bg-black border border-white rounded-lg shadow dark:bg-gray-400 dark:border-gray-700">
//     <a href="#">
//         {/* <!-- Adjust the image size --> */}
//         <img class="p-3 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product image" />
//     </a>
//     <div class="px-3 pb-3">
//         <a href="#">
//         <h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Gala Apples Red</h5>
//         </a>
//         <div class="flex items-center mt-1 mb-2">
//             <div class="flex items-center space-x-1 rtl:space-x-reverse">
//             </div>
//             <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-1 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">5.0</span>
//         </div>
//         <div class="flex items-center justify-between">
//             <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
//             <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
//         </div>
//     </div>
// </div>





// <div class="w-full max-w-xs bg-black border border-white rounded-lg shadow dark:bg-gray-400 dark:border-gray-700">
//     <a href="#">
//         {/* <!-- Adjust the image size --> */}
//         <img class="p-3 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product image" />
//     </a>
//     <div class="px-3 pb-3">
//         <a href="#">
//         <h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Gala Apples Red</h5>
//         </a>
//         <div class="flex items-center mt-1 mb-2">
//             <div class="flex items-center space-x-1 rtl:space-x-reverse">
//             </div>
//             <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-1 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">5.0</span>
//         </div>
//         <div class="flex items-center justify-between">
//             <span class="text-xl font-bold text-gray-900 dark:text-white">$599</span>
//             <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
//         </div>
//     </div>
// </div>


//     <Footer/>
//     </>
//   )
// }

// export default Home

import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";


export function Home() {
    return (
    <>
 <h1>Welcome to Compare App!!</h1>

    <Row md={2} xs={1} lg={3} xl={4} className="g-3">
      {storeItems.map(item => (
        <Col key={item.id}>
          <StoreItem {...item} />
        </Col>
      ))}
    </Row>
  </>
  )
  }