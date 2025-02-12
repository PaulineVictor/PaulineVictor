import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList } from 'lucide-react';

const Questionnaire = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-beige flex items-center justify-center p-4"
    >
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-2xl w-full text-center">
        <ClipboardList className="w-16 h-16 text-terracotta mx-auto mb-6" />
        <h2 className="font-display text-4xl text-dark-green mb-4">
          Questionnaire invités
        </h2>
        <p className="font-serif text-xl text-terracotta mb-8">
          Le formulaire sera disponible prochainement
        </p>
        <div className="w-32 h-32 mx-auto opacity-20">
          <svg viewBox="0 0 200 200" fill="currentColor" className="text-terracotta">
            <path d="M100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0Z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default Questionnaire;