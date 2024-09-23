import React, { useEffect, useState } from "react";
import Image1 from "../../assets/images/img1.png";
import Image2 from "../../assets/images/img2.jpg";
import Image3 from "../../assets/images/img3.jpg";
import Image5 from "../../assets/images/img5.jpg";
import Image4 from "../../assets/images/img4.webp";

const RoadMap: React.FC = () => {
  const [progress, setProgress] = useState(80);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        const fetchedProgress = 60;
        setProgress(fetchedProgress);
      }, 1000); // 1 second delay
    };

    fetchData();
  }, []);

  return (
    <section id="roadmap" className="container py-24">
      <div className="relative w-full flex flex-col items-center justify-center">
        {/* Dynamic Progress Bar */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 rounded-full border border-primary p-[2px] bg-secondary-light h-full shadow ">
          {/* Progress Indicator */}
          <div
            className="bg-primary w-full rounded-full"
            style={{ height: `${progress}%` }}
          ></div>

          {/* Progress Stops */}
          {/* First Stop */}
          <div
            className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-primary left-1/2 rotate-90 transform translate-x-[1px] -translate-y-1/2"
            style={{ top: "6.5%" }}
          ></div>
          {/* Second Stop */}
          <div
            className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-primary left-0 -rotate-[90deg] transform -translate-x-[30px] -translate-y-1/2"
            style={{ top: "39%" }}
          ></div>
          {/* Third Stop */}
          <div
            className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-primary left-1/2 rotate-90 transform translate-x-[1px] -translate-y-1/2"
            style={{ top: "71%" }}
          ></div>

          {/* Progress Indicator Dot */}
          <div
            className="absolute w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-white text-xs left-1/2 transform -translate-x-1/2  -translate-y-[10px] "
            style={{ top: `${progress}%` }} // Position based on progress
          >
            {progress}%
          </div>
        </div>

        {/* Roadmap Section 1 */}
        <div className="flex items-start w-full py-8 gap-32">
          <div className="w-1/2 flex justify-end">
            <img src={Image5} alt="img1" className="object-cover rounded-lg" />
          </div>
          <div className="w-1/2 pt-12">
            <h3 className="text-2xl font-bold m-0 mb-2">Section 1</h3>
            <p className="text-base pr-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        {/* Roadmap Section 2 */}
        <div className="flex items-start w-full py-8 gap-32">
          <div className="w-1/2 text-right pt-12">
            <h3 className="text-2xl font-bold m-0 mb-2">Section 2</h3>
            <p className="text-base pl-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="w-1/2 flex justify-end">
            <img src={Image2} alt="img2" className="object-cover" />
          </div>
        </div>

        {/* Roadmap Section 3 */}
        <div className="flex items-start w-full py-8 gap-32">
          <div className="w-1/2 flex justify-end">
            <img src={Image3} alt="img3" className="object-cover" />
          </div>
          <div className="w-1/2 pt-12">
            <h3 className="text-2xl font-bold m-0 mb-2">Section 3</h3>
            <p className="text-base pr-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
