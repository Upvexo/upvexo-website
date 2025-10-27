import { Palette, TrendingUp, Code, FileText } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Brand Identity Design',
      description: 'Logo design, color schemes, typography, and comprehensive brand guidelines for consistent visual identity.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'Social media campaigns, SEO, SEM, paid advertising, and analytics for measurable business growth.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Website & App Development',
      description: 'Responsive websites, mobile apps, e-commerce platforms with secure payments and ongoing optimization.'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Content & Communication',
      description: 'Content strategy, storytelling, email campaigns, marketing automation, and CRM integration.'
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Our Services
        </h2>
        <div className="w-24 h-1 bg-cyan-600 dark:bg-cyan-500 mx-auto mb-8 md:mb-12"></div>
        
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 group"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-emerald-600 dark:border-emerald-500"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-cyan-600 dark:border-cyan-500"></div>
              
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mb-4 md:mb-6 text-white">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}