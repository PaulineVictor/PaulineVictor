import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-beige flex"
    >
      {/* Left side - Names */}
      <div className="p-12 flex flex-col justify-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-1"
        >
          <h1 className="font-display text-8xl text-terracotta leading-tight">
            Pauline
          </h1>
          <h1 className="font-display text-8xl text-terracotta leading-tight">
            & Victor
          </h1>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <p className="font-serif text-xl text-dark-green">
            se marrient !
          </p>
          <p className="font-serif text-xl text-dark-green mt-1">
            Le 11 JUILLET 2026, à Val d'Isère
          </p>
        </motion.div>
      </div>

      {/* Right side - Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-1/2 relative"
      >
        <div className="absolute inset-0 w-full h-full">
          <svg
            viewBox="0 0 500 800"
            className="absolute inset-0 w-full h-full"
          >
            <defs>
              <clipPath id="organic-shape">
                <path
                  d="M250,0 C350,50 450,150 450,300 C450,450 400,600 300,700 C200,800 100,750 50,650 C0,550 0,450 50,300 C100,150 150,50 250,0"
                />
              </clipPath>
            </defs>
            <foreignObject
              width="100%"
              height="100%"
              clipPath="url(#organic-shape)"
            >
              <div className="w-full h-full relative">
                <img
                  src="https://ds.static.rtbf.be/article/image/1920xAuto/7/9/c/3f73de35e8416ab9045bd55d19af9a2c-1687944465.jpg"
                  alt="Val d'Isère village with church spire and mountain backdrop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-terracotta/10" />
              </div>
            </foreignObject>
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;