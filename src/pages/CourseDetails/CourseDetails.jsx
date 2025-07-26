import React, { useState } from 'react';

const CourseDetails = () => {

    const [openIndex, setOpenIndex] = useState(0);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: 'This IELTS course is for',
            content: (
                <ul className="list-disc pl-6 space-y-2 text-gray-500">
                    <li>Those who aim to go abroad for work or higher education</li>
                    <li>Those who want to apply for permanent residency abroad</li>
                    <li>
                        Those who have appeared for the IELTS exam but are not satisfied with their band score
                    </li>
                    <li>
                        Those who want to improve their reading, writing, listening, and speaking skills
                        through IELTS for work, business, or personal interest
                    </li>
                </ul>
            ),
        },
        {
            title: 'About the IELTS course',
            content: (
                <>
                    <p className=" text-gray-500">
                        IELTS certificates are accepted in different higher education institutions in the USA and other English-speaking countries across the globe. This exam tests the ability of the candidates to speak, read, listen and write in English.
                    </p>
                    <p className=" text-gray-500 mt-5">
                        Many of us are intimidated by English grammar as English is not our first language. Fortunately, IELTS is essentially a language-based test and not grammar-based. To achieve the desired score, you will require four English language skills: reading, writing, listening and speaking. The more proficient a person is in these four areas, the higher their score will be on the IELTS test.
                    </p>
                    <p className=" text-gray-500 mt-5">
                        To help IELTS examinees improve these four essential English language skills, 10 Minute School has brought a detailed and well-guided IELTS preparation course. The instructor of this course is Munzereen Shahid (IELTS Band Score 8.5/9), who has recently graduated from the English Department of the world-renowned Oxford University in England.
                    </p>
                    <p className=" text-gray-500 mt-5">
                        If you enroll in our course, you will receive the book “ঘরে বসে IELTS প্রস্তুতি” by Munzereen Shahid, completely free! Along with the video lectures in the course, you can learn strategies from the book and practice to fully prepare for the IELTS exam. This course also includes IELTS Reading and Listening Mock Tests, which will give you a real exam experience and an understanding of band scores. During practice sessions, expert instructors are available in live classes to solve any problems you may encounter. Therefore, now you can have complete IELTS preparation in one course!
                    </p>
                    <p className=" text-gray-500 mt-5">
                        To make your IELTS test preparation effortless, efficient, and practical, enroll in "IELTS Course by Munzereen Shahid" today and take yourself one step closer to fulfilling your dreams!
                    </p>
                </>

            ),
        },
        {
            title: 'This IELTS course will help you in the following ways:',
            content: (
                <ul className="list-disc pl-6 space-y-2 text-gray-500">
                    <li>You will be able to prepare effectively from home for both the ‘Academic IELTS’ and ‘General Training IELTS’ modules. This course has separate sections for both modules.</li>
                    <li>You will learn tips, hacks, and techniques according to the question types in the IELTS speaking, reading, listening, and writing tests.</li>
                    <li>You will be able to solve all types of IELTS questions correctly and prepare yourself with pen and paper.</li>
                    <li>Along with watching the videos, you will have lecture sheets, the book "ঘরে বসে IELTS প্রস্তুতি" and Doubt Solving Live Classes for complete preparation.</li>
                    <li>After completing the course, you will be able to enhance your own IELTS preparation by solving the questions in the IELTS Reading and Listening mock tests.</li>
                </ul>
            ),
        },
    ];



    return (
        <div className='py-5 max-w-7xl mx-auto'>
            <h1 className='text-2xl font-semibold mb-2 px-3'>Course Details</h1>
            <div className="w-full max-w-3xl rounded-lg border border-gray-200 divide-y divide-dashed divide-gray-300">
                {accordionData.map((item, index) => (
                    <div key={index}>
                        <button
                            onClick={() => toggleItem(index)}
                            className="w-full px-5 py-4 text-left font-semibold flex justify-between items-center focus:outline-none"
                        >
                            <span>{item.title}</span>
                            <svg
                                className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {openIndex === index && (
                            <div className="px-5 pb-5 pt-0 bg-white">{item.content}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseDetails;