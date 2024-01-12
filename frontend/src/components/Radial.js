import React from 'react';


const RadialProgressBar = ({ value }) => {

    const angle = (Number(value) / 10) * 360 + 0.1;

    const progressBarStyle = {
        transform: `rotate('${angle}deg')`,
    };

    const gradientColor = `conic-gradient(
    from 0deg,
    #00FF00 ${angle}deg,
    transparent ${angle}deg,
    transparent 360deg
  )`;

    return (
        <div className="relative lg:w-11 lg:h-11 h-8 w-8">

            <div className="absolute top-0 left-0 w-full h-full rounded-full  overflow-hidden">

                <div
                    className="absolute inset-0 "
                    style={{ backgroundImage: gradientColor }}
                />
            </div>

            <div className="absolute inset-1 lg:w-9 lg:h-9 w-6 h-6 bg-black rounded-full mx-auto overflow-hidden ">
                <div
                    className="absolute top-0 left-0 w-full h-full rounded-full  transform rotate-45"
                    style={progressBarStyle}
                />
            </div>

            <div className="absolute inset-0 flex items-center justify-center font-bold lg:text-[1.75vh] text-sm text-white">
                {value}
            </div>
        </div>
    );
};



export default RadialProgressBar;