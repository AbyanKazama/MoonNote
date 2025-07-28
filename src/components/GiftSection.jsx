import React from 'react'

const GiftSection = ({ gifts }) => {
  return (
    <section className="py-16 px-6 bg-[#f3f4f6] dark:bg-[#1f2937]">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        🎁 Hadiah Spesial Untukmu
      </h2>

      <div className="flex justify-center">
        {gifts.map((gift, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#2d3748] border border-gray-300 dark:border-gray-600 rounded-2xl p-8 shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-300 ease-in-out w-full max-w-xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
              {gift.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-base mb-6 text-center">
              {gift.description}
            </p>
            <div className="flex justify-center">
              <a
                href={gift.downloadUrl}
                download
                className="inline-block bg-pink-600 text-white px-5 py-3 rounded-xl hover:bg-pink-700 transition-all duration-200"
              >
                🎧 Download Hadiah
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GiftSection
