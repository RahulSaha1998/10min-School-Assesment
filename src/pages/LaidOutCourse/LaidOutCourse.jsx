import React from 'react';

const LaidOutCourse = ({ newData }) => {

    const { } = newData || {};

    return (
        <div className='py-10 max-w-7xl mx-auto'>
            <h1 className='text-2xl font-semibold mb-4'>How the course is laid out</h1>
            <div className='w-full max-w-3xl bg-[#111827] text-white p-4 rounded-lg grid grid-cols-1 md:grid-cols-2'>
                <h2>hello</h2>
                <h2>hello</h2>
            </div>
        </div>
    );
};

export default LaidOutCourse;