import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white z-50 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Malcolm</h1>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black hover:opacity-70 transition-opacity"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="pt-24 px-6">
          <div className="space-y-8">
            {['Accueil', 'À propos', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-4xl font-light hover:font-normal transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light leading-tight mb-8">
            Créez votre avenir numérique
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl">
            Une agence créative spécialisée dans le design et le développement de solutions digitales innovantes.
          </p>
          <a 
            href="#"
            className="inline-flex items-center text-lg hover:opacity-70 transition-opacity"
          >
            Découvrir nos services <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Office space"
            className="w-full h-[70vh] object-cover"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16">Nos Services</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Design UI/UX',
                description: 'Création d'interfaces utilisateur intuitives et esthétiques.'
              },
              {
                title: 'Développement Web',
                description: 'Solutions web sur mesure avec les dernières technologies.'
              },
              {
                title: 'Stratégie Digitale',
                description: 'Conseil et accompagnement pour votre présence en ligne.'
              },
              {
                title: 'Marketing Digital',
                description: 'Optimisation de votre visibilité et de votre impact digital.'
              }
            ].map((service) => (
              <div key={service.title} className="group cursor-pointer">
                <h3 className="text-2xl font-light mb-4 group-hover:opacity-70 transition-opacity">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-light mb-8">Contactez-nous</h2>
              <p className="text-gray-400 mb-4">info@malcolm.com</p>
              <p className="text-gray-400">+33 1 23 45 67 89</p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-6">Newsletter</h3>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="bg-transparent border-b border-white/30 px-4 py-2 flex-grow focus:outline-none focus:border-white"
                />
                <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;