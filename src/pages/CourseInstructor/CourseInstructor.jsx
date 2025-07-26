import React from 'react';
import parse from 'html-react-parser';

const CourseInstructor = ({ newData }) => {

    const { sections } = newData || {};

    const instructorSection = sections?.find(
        (section) => section.name === 'Course instructor'
    );

    const instructor = instructorSection?.values?.[0];

    return (
        <div className='py-10 max-w-7xl mx-auto'>
            {instructorSection && (
                <div className='mb-6 px-3'>
                    <h1 className='text-2xl font-semibold mb-4'>
                        {instructorSection.name}
                    </h1>
                </div>
            )}

            <div className="flex justify-start">
                <div className="w-full max-w-3xl flex items-center gap-5 md:border md:border-[#dbe1eb] px-2 md:px-4 md:py-10 rounded-lg">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={instructor?.image} alt={instructor?.name} />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold hover:text-[#1cab55] hover:cursor-pointer'>{instructor?.name}</h2>
                        <div className='text-gray-500'>
                            {parse(instructor?.description || '')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseInstructor;
