
import React from 'react';

const CheckList = ({ newData }) => {

    console.log(newData);
    const { checklist, cta_text } = newData || {};
    const currentPrice = 1000;
    const originalPrice = 2250;
    const discount = originalPrice - currentPrice;

    return (
        <>
            <div className='px-4 py-4'>
                <div className="flex items-center space-x-2 text-xl font-semibold">
                    <span className="text-black text-2xl">৳{currentPrice}</span>
                    <span className="text-gray-500 line-through font-normal">৳{originalPrice}</span>
                    <div className="bg-orange-400 text-white text-sm font-medium px-2.5 py-0.5 rounded-l-full rounded-r-md flex items-center">
                        <span className="mr-1">•</span>
                        {discount} টাকা ছাড়
                    </div>
                </div>
                <div className='py-5'>
                    <button className="w-full text-white text-lg bg-[#1cab55] p-2 rounded-lg border-b-4 border-b-[#14773b]">
                        {cta_text?.name}
                    </button>
                </div>
                <div>
                    <h2 className='text-[#111827] text-lg font-semibold'>এই কোর্সে যা থাকছে</h2>
                    {
                        checklist?.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 mt-2">
                                <img src={item.icon} width="20px" height='20px' alt="" />
                                <span className="text-[#111827] text-base">{item.text}</span>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    );
};

export default CheckList;