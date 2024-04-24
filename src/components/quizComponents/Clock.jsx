import React from 'react'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Clock({timer}) {
  return (
    <div className='flex justify-center items-center w-[17%] mb-12'>
        <CircularProgressbarWithChildren
            strokeWidth={6}
            // value={percentage}
            maxValue={10}
            minValue={0}
            value={timer}
            styles={{
              path: {
                stroke: "#546ef3",
                width:"100%",
                height: "100%",
                transition: "stroke-dashoffset 0.5s ease 0s",
              },
              trail: {
                stroke:"#424242",
              },
            }}
          >
            <div>
                <p className='text-white font-semibold text-3xl'>{timer}</p>
            </div>
          </CircularProgressbarWithChildren>
    </div>
  )
}

export default Clock