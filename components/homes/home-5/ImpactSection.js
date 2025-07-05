// // src/components/homes/home-5/ImpactSection.js

// import React from 'react';

// export default function ImpactSection() {
//   return (
//     <div id="impact_section" className="section panel py-16 bg-white dark:bg-gray-800">
//       <div className="container max-w-screen-xl mx-auto px-4">
//         <div className="section-inner panel text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
//             Harness the potential of your <br className="hidden sm:inline" /> manufacturing operations
//           </h2>
//         </div>

//         <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-stretch gap-8">
//           {/* Increase Column */}
//           <div className="flex-1 text-center lg:text-left p-4 relative overflow-hidden">
//             <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center justify-center lg:justify-start">
//               <span className="text-4xl mr-2 text-gray-800 dark:text-white">▪</span> Increase
//             </h3>
//             <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 pl-6">
//               <li>Asset life cycle</li>
//               <li>Machine efficiency</li>
//               <li>Revenue</li>
//             </ul>
//             {/* Placeholder for the blue line graph */}
//             <div className="absolute bottom-0 left-0 w-full h-24 bg-blue-100 opacity-50 overflow-hidden">
//               <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-blue-400 to-transparent"></div>
//               <div className="absolute w-2 h-2 rounded-full bg-blue-600 left-1/4 top-1/2 -translate-y-1/2 z-10"></div> {/* Example point */}
//               <div className="absolute w-2 h-2 rounded-full bg-blue-600 left-3/4 top-1/4 -translate-y-1/2 z-10"></div> {/* Example point */}
//             </div>
//           </div>

//           {/* Improve Column */}
//           <div className="flex-1 text-center lg:text-left p-4">
//             <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center justify-center lg:justify-start">
//               <span className="text-4xl mr-2 text-gray-800 dark:text-white">▪</span> Improve
//             </h3>
//             <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 pl-6">
//               <li>Operator retention</li>
//               <li>Machine performance</li>
//               <li>Quality of product</li>
//             </ul>
//           </div>

//           {/* Optimize Column */}
//           <div className="flex-1 text-center lg:text-left p-4 relative">
//             <div className="absolute top-0 right-0 w-16 h-16 bg-gray-800 dark:bg-gray-200 flex items-center justify-center text-white dark:text-gray-800 text-5xl font-bold rounded-lg shadow-lg">
//                 <div className="w-8 h-8 border-4 border-white dark:border-gray-800 rounded-sm"></div>
//             </div>
//             <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center justify-center lg:justify-start">
//               <span className="text-4xl mr-2 text-gray-800 dark:text-white">▪</span> Optimize
//             </h3>
//             <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 pl-6">
//               <li>Machine utilisation</li>
//               <li>Maintenance cycles</li>
//               <li>Production</li>
//             </ul>
//           </div>

//           {/* Transform Column */}
//           <div className="flex-1 text-center lg:text-left p-4 relative">
//             <div className="absolute top-0 right-0 w-16 h-16 bg-gray-800 dark:bg-gray-200 flex items-center justify-center text-white dark:text-gray-800 text-5xl font-bold rounded-lg shadow-lg">
//               <div className="w-10 h-10 bg-current -mb-6"></div>
//               <div className="w-4 h-14 bg-current absolute"></div>
//             </div>
//             <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center justify-center lg:justify-start">
//               <span className="text-4xl mr-2 text-gray-800 dark:text-white">▪</span> Transform
//             </h3>
//             <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 pl-6">
//               <li>Your Business</li>
//               <li>Manufacturing operations</li>
//               <li>Workforce efficiency</li>
//             </ul>
//           </div>
//         </div>

//         {/* Reduce Section */}
//         <div className="mt-16 bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-inner relative overflow-hidden">
//           <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center justify-center">
//             <span className="text-4xl mr-2 text-gray-800 dark:text-white">▪</span> Reduce
//           </h3>
//           <ul className="flex flex-col sm:flex-row justify-around items-center gap-4 text-gray-700 dark:text-gray-300">
//             <li className="flex items-center"><span className="text-blue-500 text-xl mr-2">•</span> Downtime</li>
//             <li className="flex items-center"><span className="text-blue-500 text-xl mr-2">•</span> Energy consumption</li>
//             <li className="flex items-center"><span className="text-blue-500 text-xl mr-2">•</span> Maintenance and replacement costs</li>
//           </ul>
//           {/* Placeholder for the red bar graph */}
//           <div className="absolute bottom-0 right-0 h-32 w-48 opacity-70">
//             <div className="absolute bottom-0 right-0 w-10 h-16 bg-red-400"></div>
//             <div className="absolute bottom-0 right-12 w-10 h-24 bg-red-500"></div>
//             <div className="absolute bottom-0 right-24 w-10 h-32 bg-red-600"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }