import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import CourseInstructor from '../CourseInstructor/CourseInstructor';
import LaidOutCourse from '../LaidOutCourse/LaidOutCourse';
import LearnCourse from '../LearnCourse/LearnCourse';

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

    // const video = course.media?.find(m => m.type === 'youtube');
    // const instructorSection = course.sections?.find(s => s.type === 'instructor');

    return (
        <>
            <div>
                <Banner newData={newData} />
            </div>
            <div>
                <CourseInstructor newData={newData} />
            </div>
            <div>
                <LaidOutCourse newData={newData} />
            </div>
            <div>
                <LearnCourse newData={newData} />
            </div>
        </>

    );
};

export default Home;
