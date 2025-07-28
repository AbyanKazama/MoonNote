import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GreetingSection = ({ image, title, text }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <section
      id='greeting'
      className='w-full bg-white text-gray-800 py-16 px-6 md:px-12'
    >
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10'>
        {/* Gambar kiri */}
        <motion.div
          className='w-full md:w-1/2'
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src={image}
            alt='Foto Ucapan'
            className='w-full h-auto rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer'
            onClick={() => setShowModal(true)}
          />
        </motion.div>

        {/* Teks kanan */}
        <motion.div
          className='w-full md:w-1/2'
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>{title}</h2>
          <p className='text-lg leading-relaxed text-gray-700 whitespace-pre-line'>
            {text}
          </p>
        </motion.div>
      </div>

      {/* MODAL POPUP DENGAN ANIMASI */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Tombol X di pojok kanan atas layar */}
            <button
              onClick={() => setShowModal(false)}
              className='fixed top-5 right-5 bg-white text-black px-4 py-2 rounded-sm font-semibold shadow-lg hover:bg-gray-100 transition cursor-pointer z-[60]'
            >
              ✕
            </button>

            {/* Gambar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image}
                alt='Full Foto'
                className='max-w-full max-h-[90vh] rounded-lg shadow-2xl'
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GreetingSection
