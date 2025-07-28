import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GallerySection = ({ title, subtitle, photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <section
      id='gallery'
      className='w-full bg-white py-16 px-6 md:px-12 overflow-x-hidden'
    >
      <div className='max-w-6xl mx-auto text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>
          {title}
        </h2>
        <p className='text-gray-600 mt-2 whitespace-pre-line'>{subtitle}</p>
      </div>

      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-12 min-h-[460px]'>
          {photos.map((src, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedPhoto(src)}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='overflow-hidden rounded-xl shadow-md transition-transform duration-100 cursor-pointer'
              style={{ transformOrigin: 'center center' }}
            >
              <img
                src={src}
                alt={`Kenangan ${index + 1}`}
                className='w-full max-w-full h-64 object-cover block'
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ANIMATE MODAL */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className='fixed top-5 right-5 bg-white text-black px-4 py-2 rounded-sm font-semibold shadow-lg hover:bg-gray-100 transition cursor-pointer z-[60]'
            >
              ✕
            </button>

            <motion.div
              className='relative max-w-[90vw] max-h-[90vh] rounded-lg shadow-xl p-4'
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedPhoto}
                alt='Preview'
                className='block max-w-[80vw] max-h-[80vh] object-contain rounded-lg mx-auto'
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GallerySection
