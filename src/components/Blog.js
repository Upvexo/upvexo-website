import { ChevronRight } from 'lucide-react'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Digital Marketing',
      excerpt: 'Exploring emerging trends and strategies for 2025 and beyond.',
      gradient: 'from-emerald-400 to-cyan-400'
    },
    {
      id: 2,
      title: 'Building a Strong Brand Identity',
      excerpt: 'Key principles for creating memorable and impactful brands.',
      gradient: 'from-cyan-400 to-emerald-400'
    },
    {
      id: 3,
      title: 'Web Development Best Practices',
      excerpt: 'Modern approaches to creating fast, responsive websites.',
      gradient: 'from-emerald-500 to-cyan-500'
    }
  ]

  return (
    <section id="blog" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Latest Insights
        </h2>
        <div className="w-24 h-1 bg-cyan-600 dark:bg-cyan-500 mx-auto mb-8 md:mb-12"></div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="relative bg-white dark:bg-gray-800 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-emerald-600 dark:border-emerald-500 z-10"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-cyan-600 dark:border-cyan-500 z-10"></div>
              
              <div className={`h-40 md:h-48 bg-gradient-to-br ${post.gradient}`}></div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 md:mb-4 text-sm md:text-base">{post.excerpt}</p>
                <button className="text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center gap-2 transition-colors text-sm md:text-base">
                  Read More <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}