import React from 'react';

const SidebarSection = ({ newData }) => {

  console.log(newData);


  return (
    <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute">
      <div className="md:sticky md:top-[112px]">
        <div className="md:border">
          {/* YouTube Preview Section */}
          <div className="hidden p-1 md:block">
            <div className="relative overflow-hidden bg-black aspect-video">
              <div className="relative">
                <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
                    <circle cx="28" cy="28" r="28" fill="#fff" fillOpacity="0.5" />
                    <circle cx="28" cy="28" r="25.415" fill="#fff" />
                    <path
                      fill="#1CAB55"
                      d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                    />
                  </svg>
                </span>
                <img
                  src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                  alt="IELTS Course by Munzereen Shahid"
                  className="w-full"
                  width={867}
                  height={480}
                  decoding="async"
                  loading="lazy"
                />
              </div>

              {/* Left/Right Arrows */}
              <div>
                <div className="absolute left-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer text-white">
                  <svg viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                    <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
                  </svg>
                </div>
                <div className="absolute right-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer text-white">
                  <svg viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Title */}
          <div className="block md:hidden">
            <h1 className="text-gray mb-3 mt-3 text-[21px] font-semibold md:text-4xl">
              IELTS Course by Munzereen Shahid
            </h1>
          </div>

          {/* Price & Button */}
          <div className="w-full p-4 md:h-auto" id="variant">
            <div className="relative">
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between md:flex-col md:items-start mb-2">
                  <div className="md:mb-3">
                    <span className="inline-block text-2xl font-semibold">৳3850</span>
                    <span className="inline-flex ml-2">
                      <del className="text-base font-normal md:text-xl">৳5000</del>
                      <span className="ml-2 text-sm text-green-600">১১৫০৳ ছাড়</span>
                    </span>
                  </div>
                </div>
                <button className="bg-green text-white py-2 px-4 w-full rounded-md">Enroll</button>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="hidden md:block">
            <div className="grid py-2 md:p-4">
              <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
              <ul className="space-y-3 text-sm text-[#111827]">
                <li>✅ Total Enrolled 32995</li>
                <li>✅ Time Required 50 hours</li>
                <li>✅ 54 Videos</li>
                <li>✅ 10 Reading & 10 Listening Mocktests</li>
                <li>✅ 38 Lecture Sheets</li>
                <li>✅ 25 Video Lectures</li>
                <li>✅ 1 Free Hardcopy Book Delivered</li>
                <li>✅ Facebook Support Group</li>
                <li>✅ Course Validity Lifetime</li>
              </ul>
            </div>
          </div>

          {/* Contact CTA */}
          <p className="hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex-row justify-between">
            <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
            <span className="flex items-center justify-center ml-2 underline cursor-pointer text-green">
              <svg viewBox="0 0 512 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
              </svg>
              <span className="ml-1">ফোন করুন (16910)</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SidebarSection;


