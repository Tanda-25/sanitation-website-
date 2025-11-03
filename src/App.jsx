import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaTrash, 
  FaTruck, 
  FaBug, 
  FaWhatsapp, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaRecycle,
  FaBroom
} from 'react-icons/fa';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const message = `Hello SafiWorks! I'm interested in your services.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
  };

  const services = [
    {
      icon: <FaTrash className="text-5xl mb-4 text-green-600" />,
      title: "Valet Trash Service",
      description: "Door-to-door trash collection from your apartment. We pick up your waste right from your doorstep on scheduled days.",
      features: ["3-5 times weekly pickup", "Evenings collection", "Hassle-free service"]
    },
    {
      icon: <FaTruck className="text-5xl mb-4 text-blue-600" />,
      title: "Curbside Collection",
      description: "Regular scheduled waste collection from designated pickup points in your complex or neighborhood.",
      features: ["Weekly schedules", "Recycling options", "Reliable service"]
    },
    {
      icon: <FaRecycle className="text-5xl mb-4 text-purple-600" />,
      title: "Bulk & Junk Removal",
      description: "Large item removal including furniture, appliances, and construction debris. We handle the heavy lifting.",
      features: ["Same-day available", "Any size items", "Eco-friendly disposal"]
    },
    {
      icon: <FaBug className="text-5xl mb-4 text-red-600" />,
      title: "Fumigation Services",
      description: "Professional pest control and fumigation for residential and commercial properties.",
      features: ["Certified technicians", "Safe chemicals", "Follow-up included"]
    },
    {
      icon: <FaBroom className="text-5xl mb-4 text-cyan-600" />,
      title: "Pressure Washing",
      description: "High-pressure cleaning for driveways, patios, building exteriors, and more.",
      features: ["Deep cleaning", "Stain removal", "Surface restoration"]
    }
  ];

  const coverageAreas = [
    "Nyali",
    "Bamburi",
    "Shanzu",
    "Mtwapa",
    "Kilifi",
    "Mombasa CBD",
    "Likoni",
    "Diani"
  ];

  const pricingPlans = [
    {
      name: "Basic Valet",
      price: "KES 1,500",
      period: "/month",
      features: [
        "3x weekly pickup",
        "Single unit",
        "Standard waste",
        "Email support"
      ]
    },
    {
      name: "Premium Valet",
      price: "KES 2,500",
      period: "/month",
      features: [
        "5x weekly pickup",
        "Up to 2 units",
        "All waste types",
        "Priority support",
        "Recycling included"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Custom schedule",
        "Multiple properties",
        "Dedicated manager",
        "24/7 support",
        "Full waste audit"
      ]
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SafiWorks
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              Your Trusted Sanitation Partner in Mombasa
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Professional Valet Trash, Waste Management & Environmental Cleaning Services
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#quote"
                className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Get a Free Quote
              </a>
              <a
                href="#services"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all transform hover:scale-105"
              >
                Our Services
              </a>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              {...fadeInUp}
              className="text-center p-6"
            >
              <FaCheckCircle className="text-5xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Reliable Service</h3>
              <p className="text-gray-600">Consistent, on-time pickups you can count on</p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center p-6"
            >
              <FaShieldAlt className="text-5xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully certified and compliant with regulations</p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center p-6"
            >
              <FaClock className="text-5xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">We're here whenever you need us</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive sanitation solutions for homes and businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <FaCheckCircle className="text-green-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Coverage Areas
            </h2>
            <p className="text-xl text-gray-600">
              Serving communities across Mombasa and coastal Kenya
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {coverageAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center justify-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <FaMapMarkerAlt className="text-green-600 mr-2" />
                  <span className="font-semibold text-gray-800">{area}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-center mt-8 text-gray-600">
              Don't see your area? <a href="#quote" className="text-green-600 hover:text-green-700 font-semibold">Contact us</a> to check availability!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Pricing Guide
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing for quality service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative bg-white rounded-xl shadow-lg p-8 ${
                  plan.popular ? 'border-4 border-green-500 transform scale-105' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                  {plan.name}
                </h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-green-600">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#quote"
                  className={`block text-center py-3 px-6 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-20 bg-gradient-to-br from-green-600 to-green-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get a Free Quote
            </h2>
            <p className="text-xl text-green-100">
              Contact us via WhatsApp and we'll respond within 24 hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-8"
          >
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="+254 700 000 000"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                >
                  <option value="">Select a service</option>
                  <option value="Valet Trash Service">Valet Trash Service</option>
                  <option value="Curbside Collection">Curbside Collection</option>
                  <option value="Bulk & Junk Removal">Bulk & Junk Removal</option>
                  <option value="Fumigation Services">Fumigation Services</option>
                  <option value="Pressure Washing">Pressure Washing</option>
                  <option value="Multiple Services">Multiple Services</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="Tell us more about your needs..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <FaWhatsapp className="text-2xl" />
                Send via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">SafiWorks</h3>
              <p className="text-gray-400 mb-4">
                Your trusted partner for sanitation and environmental cleaning services in Mombasa, Kenya.
              </p>
              <div className="flex gap-4">
                <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition">
                  <FaWhatsapp className="text-3xl" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                <li><a href="#quote" className="text-gray-400 hover:text-white transition">Get Quote</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400">
                  <FaPhone />
                  <span>+254 700 000 000</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <FaEnvelope />
                  <span>info@safiworks.co.ke</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <FaMapMarkerAlt />
                  <span>Mombasa, Kenya</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SafiWorks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
