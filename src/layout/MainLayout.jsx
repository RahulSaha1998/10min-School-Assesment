import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';
import Banner from '../pages/Banner/Banner';
import { useEffect, useState } from 'react';
import RightSidebar from '../components/RightSidebar';
import Loader from '../components/Loader';

const MainLayout = () => {
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
        return <Loader/>;
    }
    return (
        <div >
            <div className='max-w-7xl mx-auto'>
                <Navbar />
            </div>
            {/* For mobile responsive design, the sidebar is hidden. */}
            <div className='w-full md:hidden md:w-[22%] md:absolute md:right-90 md:top-[50px] z-10 border rounded-lg bg-white'>
                <RightSidebar newData={newData} />
            </div>
            <div>
                <Banner newData={newData} />
            </div>
            <div className='min-h-[calc(100vh-413px)] max-w-7xl mx-auto'>
                <Outlet />
            </div>
            {/* <Outlet></Outlet> */}
            {/* <Footer></Footer> */}
        </div>
    );
};

export default MainLayout;