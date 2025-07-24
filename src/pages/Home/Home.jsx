import { useEffect, useState } from 'react';

const Home = () => {
    const [course, setCourse] = useState(null);

    useEffect(() => {
        fetch('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en', {
            headers: {
                'X-TENMS-SOURCE-PLATFORM': 'web',
                'accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setCourse(data?.data));
    }, []);

     if (!course) {
        return <p>Loading...</p>;
    }

    console.log(course);

    // const video = course.media?.find(m => m.type === 'youtube');
    // const instructorSection = course.sections?.find(s => s.type === 'instructor');

    return (
        <div>
            <h2>HEllo bro</h2>
        </div>
    );
};

export default Home;
