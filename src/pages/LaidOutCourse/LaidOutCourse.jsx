import React from 'react';

const LaidOutCourse = ({ newData }) => {

    const { sections } = newData || {};

    const laidOutSection = sections?.find(
        (section) => section.type === 'features'
    );
    console.log(laidOutSection);



    return (
        <div className='py-10 max-w-7xl mx-auto'>
            <h1 className='text-2xl font-semibold mb-4'>{laidOutSection?.name}</h1>
            <div className='w-full max-w-3xl bg-[#111827] text-white p-4 rounded-lg grid grid-cols-1 md:grid-cols-2'>

                {laidOutSection?.values?.map((item, index) => (
                    <div key={index} className='flex flex-row items-start gap-3 m-1 justify-center p-8'>
                        <img src={item.icon} alt={item.title} className="w-12 h-12" />
                        <div className='flex flex-col flex-1 gap-2'>
                            <h3 className='text-lg font-bold'>{item.title}</h3>
                            <p className='text-[#9CA3AF]'>{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default LaidOutCourse;