import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const LearnCourse = () => {
    return (
        <div className='py-10 max-w-7xl mx-auto'>
            <h1 className='text-2xl font-semibold mb-2 px-3'>What you will learn by doing the course</h1>
            <div className='w-full max-w-3xl p-3 md:p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 md:border md:border-[#dbe1eb]'>
                <div className='flex items-start gap-2 mb-2'>
                    <FontAwesomeIcon icon={faCheck} className="text-[#6294F8] mt-1.5" />
                    <p className='flex-1 text-lg text-[#111827]'>
                        Detailed rules and regulations of each module of the IELTS test
                    </p>
                </div>
                <div className='flex items-start gap-2 mb-2'>
                    <FontAwesomeIcon icon={faCheck} className="text-[#6294F8] mt-1.5" />
                    <p className='flex-1 text-lg '>
                        Formats and strategies to ace the IELTS test
                    </p>
                </div>
                <div className='flex items-start gap-2 mb-2'>
                    <FontAwesomeIcon icon={faCheck} className="text-[#6294F8] mt-1.5" />
                    <p className='flex-1 text-lg '>
                        Proper structure and essay type for scoring well in IELTS writing task 1 and 2
                    </p>
                </div>
                <div className='flex items-start gap-2 mb-2'>
                    <FontAwesomeIcon icon={faCheck} className="text-[#6294F8] mt-1.5" />
                    <p className='flex-1 text-lg '>
                        Speaking accurately on any topic in the IELTS speaking test
                    </p>
                </div>
                <div className='flex items-start gap-2 mb-2'>
                    <FontAwesomeIcon icon={faCheck} className="text-[#6294F8] mt-1.5" />
                    <p className='flex-1 text-lg '>
                        Time management strategy to get a good band score in the IELTS test
                    </p>
                </div>
                <div className='flex items-start gap-2 mb-2'>
                    <FontAwesomeIcon icon={faCheck} className="text-[#6294F8] mt-1.5" />
                    <p className='flex-1 text-lg '>
                        Through the IELTS Reading and IELTS Listening Mock Tests, you will gain a real exam experience and a complete understanding of the Band Score in the IELTS exam.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default LearnCourse;