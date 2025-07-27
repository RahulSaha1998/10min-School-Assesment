import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import CourseInstructor from '../CourseInstructor/CourseInstructor';
import LaidOutCourse from '../LaidOutCourse/LaidOutCourse';
import LearnCourse from '../LearnCourse/LearnCourse';
import ExclusiveFeature from '../ExclusiveFeature/ExclusiveFeature';
import CourseDetails from '../CourseDetails/CourseDetails';
import RightSidebar from '../../components/RightSidebar';

const Home = () => {
    const [newData, setNewData] = useState(null);

    useEffect(() => {
        fetch('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en', {
            headers: {
                'X-TENMS-SOURCE-PLATFORM': 'web',
                'accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setNewData(data?.data));
    }, []);

    if (!newData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="relative">
            <div className='flex flex-col md:flex-row gap-4 max-w-7xl mx-auto px-4 md:px-0'>
                <div className='md:ml-10'>
                    <div>
                        <CourseInstructor newData={newData} />
                    </div>
                    <div>
                        <LaidOutCourse newData={newData} />
                    </div>
                    <div>
                        <LearnCourse />
                    </div>
                    <div>
                        <ExclusiveFeature newData={newData} />
                    </div>
                    <div>
                        <CourseDetails />
                    </div>
                </div>
                <div className='w-full md:w-[30%] md:absolute md:right-10 md:top-[-250px] z-10 border rounded-lg bg-white'>
                    <RightSidebar newData={newData} />
                </div>
            </div>
        </div>

    );
};

export default Home;
