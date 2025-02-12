import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Home, Map } from 'lucide-react';

const InfoSection = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-4">
      <div className="text-terracotta">{icon}</div>
      <h3 className="font-display text-2xl text-dark-green">{title}</h3>
    </div>
    <div className="font-serif text-lg">{children}</div>
  </div>
);

const Info = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-beige py-20 px-4"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h2 className="font-display text-4xl text-terracotta text-center mb-12">
          Informations
        </h2>

        <InfoSection title="Date" icon={<Calendar size={24} />}>
          <p>11 juillet 2026 à 16h</p>
        </InfoSection>

        <InfoSection title="Lieu" icon={<MapPin size={24} />}>
          <p>Église de Val d'Isère, 73150</p>
        </InfoSection>

        <InfoSection title="Programme" icon={<Clock size={24} />}>
          <p className="italic">Le programme détaillé sera communiqué prochainement</p>
        </InfoSection>

        <InfoSection title="Hébergements" icon={<Home size={24} />}>
          <p className="italic">Les informations concernant l'hébergement seront fournies ultérieurement</p>
        </InfoSection>

        <InfoSection title="Carte" icon={<Map size={24} />}>
          <div className="aspect-video w-full mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.837147668759!2d6.976111!3d45.450278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4789514f6c3c2b2d%3A0x7f7f3c7c7f7f7f7f!2s%C3%89glise%20Saint-Bernard%20de%20Menthon!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
              className="w-full h-full border-0 rounded-lg"
              loading="lazy"
            />
          </div>
        </InfoSection>
      </div>
    </motion.div>
  );
};

export default Info;