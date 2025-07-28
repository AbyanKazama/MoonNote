import { motion } from 'framer-motion'

const ParallaxSection = ({ image, title, text }) => {
  return (
    <section
      className='relative h-[80vh] bg-fixed bg-center bg-cover flex items-center justify-center text-white px-6'
      style={{
        backgroundImage: `url('${image}')`
      }}
    >
      {/* Overlay gelap */}
      <div className='absolute inset-0 bg-black/40 z-10'></div>

      {/* Konten */}
      <div className='relative z-20 max-w-3xl w-full'>
        <motion.div
          className='bg-white/10 backdrop-blur-md rounded-xl px-6 py-8'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className='text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>

          <motion.p
            className='text-lg text-gray-200 drop-shadow text-outline-black whitespace-pre-line'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {text}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default ParallaxSection
