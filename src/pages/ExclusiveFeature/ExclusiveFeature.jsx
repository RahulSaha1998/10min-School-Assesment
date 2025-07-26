import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExclusiveFeature = ({ newData }) => {

    const { sections } = newData || {};

    const features = sections?.find(
        (section) => section.name === 'Course Exclusive Feature'
    );

    const feature1 = features?.values?.[0];
    const feature2 = features?.values?.[1];


    return (
        <div className='py-5 max-w-7xl mx-auto'>
            <h1 className='text-2xl font-semibold mb-4 px-3'>
                {features.name}
            </h1>
            <div className='max-w-3xl border border-[#dbe1eb] rounded-lg p-4'>
                <div className='w-full flex flex-col md:flex-row justify-center items-start gap-4 mt-4'>
                    <div className='md:w-[70%]'>
                        <h2 className='text-[14px] font-semibold px-2 leading-[30px] text-[#111827] md:text-[16px]'>
                            {feature1.title}
                        </h2>
                        {feature1?.checklist?.map((item, index) => (
                            <div key={index} className="flex justify-start items-center gap-2 p-2">
                                <FontAwesomeIcon icon={faCheck} className="text-[#6294F8] mt-1.5" />
                                <p className="text-[14px] font-[400px] leading-[24px] text-[#4B5563] md:text-[16px]">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className='md:w-[30%]'>
                        <img className='md:w-[80%] rounded-lg' src={feature1.file_url} alt={feature1.title} />
                    </div>
                </div>
                <div className="divider"></div>
                <div className='w-full flex flex-col md:flex-row justify-center items-start gap-4 mt-4'>
                    <div className='md:w-[70%]'>
                        <h2 className='text-[14px] leading-[30px] text-[#111827] md:text-[16px] font-semibold px-2'>
                            {feature2.title}
                        </h2>
                        {feature2?.checklist?.map((item, index) => (
                            <div key={index} className="flex justify-start items-center gap-2 p-2">
                                <FontAwesomeIcon icon={faCheck} className="text-[#6294F8] mt-1.5" />
                                <p className="text-[14px] font-[400px] leading-[24px] text-[#4B5563] md:text-[16px]">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className='md:w-[30%]'>
                        <img className='md:w-[80%] rounded-lg' src={feature2.file_url} alt={feature1.title} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExclusiveFeature;