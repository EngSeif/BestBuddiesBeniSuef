'use client'
import Image from 'next/image';
import { useState } from "react";
import Link from 'next/link'
import Blind from './Blind';
import Deaf from './Deaf';
import Disability from './Disability';
import Mental from './Mental';

function Deal() {
    // State to track visibility of each popup
    const [popupVisible, setPopupVisible] = useState([false, false, false, false]);

    // Data arrays for each panel: images, titles, subcontent, and content
    const images = [
        "/blind.jpg", // Image for الإعاقة الحركية
        "/d2.jpg", // Image for الإعاقة السمعية
        "/disability.jpg", // Image for الإعاقة البصرية
        "/mental.jpg", // Image for الإعاقة العقلية
    ];

    const titles = [
        "الإعاقة البصرية",
        "الإعاقة السمعية",
        "الإعاقة الحركية",
        "الإعاقة العقلية",
    ];

    const subcontent = [
        "الأشخاص ذوو الإعاقة البصرية هم أبطال في رؤية العالم بطرق لا يستطيع الآخرون تخيلها. بإحساسهم المرهف وقدرتهم الفريدة على التكيف، يُثبتون أن البصر مجرد وسيلة واحدة لفهم جمال الحياة، وليس الطريقة الوحيدة",
        "الأشخاص ذوو الإعاقة السمعية يمتلكون لغة صامتة تعبّر عن أصوات قلوبهم وعقولهم. بإرادتهم الصلبة وشغفهم بالحياة، يُثبتون أن التواصل الحقيقي لا يحتاج دائمًا إلى كلمات مسموعة، بل إلى فهم وإحساس عميق",
        "الأشخاص ذوو الإعاقة الحركية هم مثال على القوة الداخلية والإرادة الصلبة. رغم التحديات التي يواجهونها في الحركة، إلا أنهم يثبتون أن الإعاقة لا تعني العجز، بل هي دعوة للتكيف والتفوق في مواجهة الحياة بكل إمكانياتها.",
        "الأشخاص ذوو الإعاقة الذهنية يظهرون لنا أن العقل ليس مقيدًا بما يراه البعض، بل هو بحر من الإمكانيات والتفكير المختلف. بتحديهم للعوائق، يثبتون أن الفهم والتعلم لا يقتصران على مسار واحد، بل يتنوعان ويختلفان، مما يثرينا جميعًا",
    ];

    // Content components to display dynamically
    const contentComponents = [
        <Blind />,
        <Deaf />,
        <Disability />,
        <Mental />
    ];

    // Function to open the popup for a specific panel
    const handleOpenPopup = (index) => {
        const newPopupVisible = [...popupVisible];
        newPopupVisible[index] = true; // Show the popup for the clicked panel
        setPopupVisible(newPopupVisible);
    };

    // Function to close the popup for a specific panel
    const handleClosePopup = (index) => {
        const newPopupVisible = [...popupVisible];
        newPopupVisible[index] = false; // Hide the popup for the clicked panel
        setPopupVisible(newPopupVisible);
    };

    return (
        <section id="deal" className="bg-[#F78744] dark:bg-gray-900 text-right">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white text-center">
                        ازاي تعرف تتعامل معاهم ؟
                    </h2>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:space-y-0">
                    {titles.map((title, index) => (
                        <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
                            <Link href="#">
                                <Image
                                    src={images[index]} // Dynamically assign the image based on index
                                    alt={title}
                                    width={500}
                                    height={300}
                                />
                            </Link>
                            <div className="p-5">
                                <Link href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {subcontent[index]} {/* Dynamic subcontent */}
                                </p>
                                <button
                                    onClick={() => handleOpenPopup(index)}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    اقرأ أكثر
                                    <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Popup panel */}
                            {popupVisible[index] && (
                                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
                                    <div className="bg-white rounded-lg p-8 w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto relative h-[80vh] overflow-hidden">
                                        {/* Close Button */}
                                        <button
                                            onClick={() => handleClosePopup(index)}
                                            className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-gray-900 z-20"
                                        >
                                            ×
                                        </button>

                                        {/* Scrollable content with left-side scrollbar */}
                                        <div className="overflow-y-auto h-[calc(100%-2rem)] custom-scrollbar">
                                            {contentComponents[index]} {/* Dynamically load the appropriate content component */}
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Deal;
