export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 md:px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Portfolio</h2>
        <div className="w-24 h-1 bg-emerald-600 dark:bg-emerald-500 mx-auto mb-8 md:mb-12"></div>
        
        <div className="relative bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-8 md:p-12 lg:p-16 border-2 border-dashed border-emerald-300 dark:border-emerald-600">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-emerald-600 dark:border-emerald-500"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-emerald-600 dark:border-emerald-500"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-cyan-600 dark:border-cyan-500"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-cyan-600 dark:border-cyan-500"></div>
          
          <div className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">🚀</div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">
            Sample Projects Coming Soon
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            We're curating our best work to showcase here. Check back soon to see 
            how we've helped businesses elevate beyond limits!
          </p>
        </div>
      </div>
    </section>
  )
}