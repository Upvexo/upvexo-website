export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          About Upvexo
        </h2>
        <div className="w-24 h-1 bg-emerald-600 dark:bg-emerald-500 mx-auto mb-8 md:mb-12"></div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="relative text-center p-6 md:p-8 bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 hover:shadow-lg transition-shadow duration-300 group">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-emerald-600 dark:border-emerald-500"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-emerald-600 dark:border-emerald-500"></div>
            
            <h3 className="text-xl md:text-2xl font-bold text-emerald-800 dark:text-emerald-400 mb-3 md:mb-4">Vision</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
              To empower businesses globally with innovative, digital-first solutions 
              that enhance brand identity, customer engagement, and business growth.
            </p>
          </div>
          <div className="relative text-center p-6 md:p-8 bg-gradient-to-br from-cyan-50 to-emerald-50 dark:from-gray-700 dark:to-gray-800 hover:shadow-lg transition-shadow duration-300 group">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-cyan-600 dark:border-cyan-500"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-cyan-600 dark:border-cyan-500"></div>
            
            <h3 className="text-xl md:text-2xl font-bold text-cyan-800 dark:text-cyan-400 mb-3 md:mb-4">Mission</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
              Provide creative, results-driven solutions and build long-term 
              relationships through transparency, excellence, and measurable results.
            </p>
          </div>
          <div className="relative text-center p-6 md:p-8 bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 hover:shadow-lg transition-shadow duration-300 sm:col-span-2 lg:col-span-1 group">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-emerald-600 dark:border-emerald-500"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-emerald-600 dark:border-emerald-500"></div>
            
            <h3 className="text-xl md:text-2xl font-bold text-emerald-800 dark:text-emerald-400 mb-3 md:mb-4">Values</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
              Innovation, client-centric approach, integrity, transparency, and 
              unwavering commitment to excellence and quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}