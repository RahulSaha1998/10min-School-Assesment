import React from 'react';

const CheckList = ({ newData }) => {

    console.log(newData);
    const {checklist} = newData || {};
    const currentPrice = 3850;
    const originalPrice = 5000;
    const discount = originalPrice - currentPrice;

    return (
        <div className='px-4 py-4'>
            <div className="flex items-center space-x-2 text-xl font-semibold">
                <span className="text-black text-2xl">৳{currentPrice}</span>
                <span className="text-gray-500 line-through font-normal">৳{originalPrice}</span>
                <div className="bg-orange-400 text-white text-sm font-medium px-2.5 py-0.5 rounded-l-full rounded-r-md flex items-center">
                    <span className="mr-1">•</span>
                    {discount} টাকা ছাড়
                </div>
            </div>
            {
                checklist?.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 mt-2">
                        <img src={item.icon} width="20px" height='20px' alt="" />
                        <span className="text-gray-700">{item.text}</span>
                    </div>
                ))
            }
        </div>
    );
};

export default CheckList;