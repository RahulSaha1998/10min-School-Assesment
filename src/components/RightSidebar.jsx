import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaChevronLeft, FaChevronRight, FaPlayCircle } from "react-icons/fa";

const RightSidebar = ({ newData }) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [selectedSlide, setSelectedSlide] = useState(0);

    const mediaItems = newData?.media?.filter(item =>
        item.name === "preview_gallery" || item.name === "book_preview"
    ) || [];

    const handleSlideChange = (index) => {
        setSelectedSlide(index);
        setIsVideoPlaying(false); // Stop video when switching
    };

    return (
        <div className="max-w-7xl mx-auto">
            <Carousel
                selectedItem={selectedSlide}
                onChange={handleSlideChange}
                showArrows={true}
                showThumbs={true}
                showStatus={false}
                infiniteLoop={false}
                autoPlay={false}
                transitionTime={500}
                swipeable={true}
                showIndicators={false}
                emulateTouch={true}
                dynamicHeight={false}
                renderArrowPrev={(onClickHandler, _hasPrev, label) => (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        className="absolute z-10 left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                    >
                        <FaChevronLeft className="text-gray-700" />
                    </button>
                )}
                renderArrowNext={(onClickHandler, _hasNext, label) => (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        className="absolute z-10 right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                    >
                        <FaChevronRight className="text-gray-700" />
                    </button>
                )}
                renderThumbs={() =>
                    mediaItems.map((item, index) => (
                        <img
                            key={index}
                            src={item.thumbnail_url || item.resource_value}
                            alt={`Thumb ${index}`}
                            className="object-cover h-16 w-full"
                        />
                    ))
                }
            >
                {mediaItems.map((item, index) => {
                    const isVideo = item.resource_type === "video";
                    const videoId = item.resource_value;
                    const thumbnail = item.thumbnail_url || item.resource_value;

                    return (
                        <div className="relative w-full aspect-video p-1" key={index}>
                            {isVideo && selectedSlide === index && isVideoPlaying ? (
                                <iframe
                                    className="w-full h-full rounded-lg"
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`}
                                    title="YouTube video"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                ></iframe>
                            ) : isVideo ? (
                                <div
                                    onClick={() => setIsVideoPlaying(true)}
                                    className="relative w-full h-full cursor-pointer"
                                >
                                    <img
                                        src={thumbnail}
                                        alt="Play video"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <FaPlayCircle className="text-white text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                </div>
                            ) : (
                                <img
                                    src={item.resource_value}
                                    alt={`Slide ${index}`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            )}
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default RightSidebar;
