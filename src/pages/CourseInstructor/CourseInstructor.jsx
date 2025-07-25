import React from 'react';

const CourseInstructor = ({ newData }) => {

    const { sections } = newData || {};
    console.log(sections);



    return (
        <div className='min-h-[calc(100vh-413px)] py-10 max-w-7xl mx-auto'>
            <h1 className='text-2xl font-semibold mb-4'>Course instructor</h1>

            {
                sections?.map((section, index) => (
                    <div key={index} className='mb-6'>
                        {
                        console.log(section)  
                    }
                        <h2 className='text-xl font-semibold'>{section.name}</h2>
                        <p className='text-gray-500'>{section.description}</p>
                    </div>
                    
                ))
            }

            <div className="w-full flex items-center gap-5 border px-2 py-10 rounded-lg">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Yelling Cat</h2>
                    <p className='text-gray-500'>Senior Instructor</p>
                    <p className='text-gray-500'>Senior Instructor</p>
                    <p className='text-gray-500'>Senior Instructor</p>
                </div>
            </div>

        </div>
    );
};

export default CourseInstructor;