import React from 'react'

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      price: 'KSh 2,500',
      period: '/month',
      description: 'Perfect for small households',
      features: [
        'Weekly valet trash collection',
        'Basic sanitation service',
        'Email support',
        'Flexible scheduling',
        'Eco-friendly disposal'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KSh 5,000',
      period: '/month',
      description: 'Ideal for apartments and small offices',
      features: [
        'Bi-weekly valet trash collection',
        'Deep cleaning service (monthly)',
        'Priority support',
        'Flexible scheduling',
        'Waste segregation guidance',
        'Recycling services'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large businesses and communities',
      features: [
        'Daily valet trash collection',
        'Comprehensive sanitation',
        '24/7 dedicated support',
        'Custom scheduling',
        'Waste management consulting',
        'Recycling programs',
        'Monthly reports'
      ],
      popular: false
    }
  ]

  const handleWhatsAppInquiry = (plan) => {
    const message = `Hello SafiWorks! I'm interested in the ${plan} plan. Can you provide more information?`
    window.open(`https://wa.me/254700000000?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Pricing Plans</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose a plan that fits your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-600 to-green-500 text-white shadow-2xl transform scale-105' 
                  : 'bg-gray-50 text-gray-800 shadow-lg hover:shadow-xl'
              } transition-all duration-300 relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-gray-800 px-4 py-1 rounded-bl-lg rounded-tr-lg font-semibold text-sm">
                  POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-xl">{plan.period}</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg 
                      className={`w-6 h-6 mr-2 flex-shrink-0 ${
                        plan.popular ? 'text-green-200' : 'text-green-500'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleWhatsAppInquiry(plan.name)}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-white text-blue-600 hover:bg-blue-50' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include eco-friendly disposal and professional service. 
            <a href="#contact" className="text-blue-600 hover:text-blue-700 font-semibold ml-1">Contact us</a> for custom solutions.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
