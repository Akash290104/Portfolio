import React from "react";
import { EXPERIENCE } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.0 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>

      <div className="relative mx-auto w-full max-w-4xl">
        {/* Vertical line only on md+ */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-1 bg-neutral-700"></div>

        {EXPERIENCE.map((item, index) => (
          <div
            key={index}
            className="mb-10 grid grid-cols-1 md:grid-cols-9 items-start w-full relative"
          >
            {index % 2 === 0 ? (
              <>
                {/* Left content */}
                <div className="md:col-span-4 col-span-9 flex justify-start md:justify-end">
                  <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1.0 }}
                    className="w-full max-w-[500px] bg-neutral-800 p-4 rounded-lg shadow-lg"
                  >
                    <h2 className="font-bold text-xl mb-1 text-blue-400">
                      {item.role}
                    </h2>
                    <p className="mb-1 text-neutral-300">{item.company}</p>
                    <p className="mb-2 text-neutral-300">{item.duration}</p>
                    <ul className="list-disc ml-4 text-neutral-300 text-sm space-y-1">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Dot */}
                <div className="md:col-span-1 col-span-9 flex justify-center items-center md:mt-0 mt-4">
                  <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-neutral-900 z-10 md:block hidden"></div>
                </div>

                {/* Spacer */}
                <div className="md:col-span-4 hidden md:block"></div>
              </>
            ) : (
              <>
                <div className="md:col-span-4 hidden md:block"></div>

                <div className="md:col-span-1 col-span-9 flex justify-center items-center md:mt-0 mt-4">
                  <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-neutral-900 z-10 md:block hidden"></div>
                </div>

                <div className="md:col-span-4 col-span-9 flex justify-start">
                  <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1.0 }}
                    className="w-full max-w-[500px] bg-neutral-800 p-4 rounded-lg shadow-lg"
                  >
                    <h2 className="font-bold text-xl mb-1 text-blue-400">
                      {item.role}
                    </h2>
                    <p className="mb-1 text-neutral-300">{item.company}</p>
                    <p className="mb-2 text-neutral-300">{item.duration}</p>
                    <ul className="list-disc ml-4 text-neutral-300 text-sm space-y-1">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
