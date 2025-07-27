import React from 'react';
import SidebarSection from '../../components/SIdebarSection';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Banner = ({ newData }) => {

    const { title, description } = newData || {};

    // console.log(newData);

    return (
        <div className="w-full min-h-[300px] md:min-h-[300px]"
            style={{
                backgroundImage: 'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className=" relative flex flex-col md:flex-row md:gap-12 pb-6 md:py-5 py-5 max-w-7xl mx-auto">
                {/* Left side content */}
                <div
                    className="text-white md:mx-0 md:w-[60%] lg:w-[60%] p-4 md:p-6 rounded-lg"
                    style={{
                        overflow: 'hidden',
                        height: 'auto',
                        maskImage: 'none',
                    }}
                >
                    <div>
                        <h1 className='text-4xl font-semibold mb-4'>
                            {title}</h1>
                        <div className='flex items-center gap-2 mb-2'>
                            <div>
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                            </div>
                            <div>
                                <h2>(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</h2>
                            </div>
                        </div>
                        <div className="w-160 text-gray-400 text-base">
                            {parse(description)}
                        </div>
                    </div>
                </div>

                {/* Right side sidebar */}
                {/* <SidebarSection newData={newData}/> */}
            </div>

        </div>
    );
};

export default Banner;