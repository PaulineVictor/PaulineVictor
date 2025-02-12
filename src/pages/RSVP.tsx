import React from 'react';
import { motion } from 'framer-motion';

const RSVP = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-beige flex items-center justify-center p-4"
    >
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="font-display text-4xl text-terracotta text-center mb-8">
          Veuillez RSVP via notre formulaire
        </h2>
        <div className="aspect-video w-full">
          <iframe
            src="https://www.surveymonkey.com/placeholder"
            className="w-full h-full border-0"
            title="RSVP Form"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default RSVP;