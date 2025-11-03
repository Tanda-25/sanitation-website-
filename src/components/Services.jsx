import React from 'react'

const Services = () => {
  const services = [
    {
      title: 'Valet Trash Collection',
      description: 'Door-to-door trash collection services for residential complexes and apartment buildings. We make waste disposal convenient and hygienic.',
      icon: '🚮',
      features: [
        'Scheduled weekly collections',
        'Professional and reliable staff',
        'Eco-friendly disposal methods',
        'Flexible scheduling options'
      ]
    },
    {
      title: 'Sanitation Services',
      description: 'Comprehensive sanitation solutions for homes, offices, and commercial spaces. We ensure a clean and healthy environment.',
      icon: '🧹',
      features: [
        'Deep cleaning services',
        'Sanitization and disinfection',
        'Restroom maintenance',
        'Regular maintenance programs'
      ]
    },
    {
      title: 'Environmental Cleaning',
      description: 'Professional environmental cleaning services for public spaces, streets, and outdoor areas. Keeping Mombasa clean and green.',
      icon: '🌿',
      features: [
        'Street and sidewalk cleaning',
        'Beach cleanup services',
        'Park and garden maintenance',
        'Event cleanup services'
      ]
    },
    {
      title: 'Waste Management Consulting',
      description: 'Expert consulting services to help businesses and communities develop sustainable waste management strategies.',
      icon: '♻️',
      features: [
        'Waste audit services',
        'Recycling program setup',
        'Sustainability planning',
        'Compliance assistance'
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional sanitation and waste management solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
