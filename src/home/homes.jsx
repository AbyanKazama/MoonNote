// src/pages/Home.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaDiscord } from 'react-icons/fa'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
}

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <section
      className='w-full min-h-screen flex flex-col items-center justify-center text-center p-10 relative bg-cover bg-center'
      style={{ backgroundImage: "url('/img/MoonNote.png')" }}
    >
      <div className='absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-0' />
      <motion.div
        className='relative z-10 max-w-3xl text-white'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.h1 custom={1} variants={fadeUp} className='text-4xl md:text-6xl font-bold mb-4'>🌙 MoonNote</motion.h1>
        <motion.p custom={2} variants={fadeUp} className='text-lg md:text-xl text-gray-100'>
          Masih susah ngomong langsung? Biarkan MoonNote bantu kamu menyampaikan
          sesuatu secara lebih visual, personal, dan memorable. Masukkan slug
          seperti <code className='text-purple-300'>/abyan</code> di URL untuk
          melihat contohnya.
        </motion.p>
        <motion.button
          custom={3}
          variants={fadeUp}
          onClick={() => setShowModal(true)}
          className='mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-md transition'
        >
          💌 Pesan Sekarang
        </motion.button>
      </motion.div>

      {showModal && (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50'>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className='bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-gray-800 text-left relative'
          >
            <button
              className='absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-2xl'
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h3 className='text-2xl font-semibold mb-4 text-center'>
              Hubungi Admin
            </h3>
            <div className='space-y-4'>
              <a
                href='https://www.instagram.com/variant_a_16/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 text-pink-600 hover:underline'
              >
                <FaInstagram size={20} /> Instagram @variant_a_16
              </a>
              <div className='flex items-center gap-3 text-indigo-600'>
                <FaDiscord size={20} /> Discord: <span className='font-mono'>abyan106</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

const ReasonSection = () => (
  <section className='bg-[#e9e6f0] min-h-[60vh] py-32 px-8 text-center flex items-center'>
    <motion.div
      className='max-w-7xl mx-auto'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <motion.h2 custom={1} variants={fadeUp} className='text-4xl font-bold mb-6 text-gray-900'>
        Kenapa MoonNote Ada?
      </motion.h2>
      <motion.p custom={2} variants={fadeUp} className='text-gray-700 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed'>
        MoonNote hadir untuk kamu yang punya banyak hal untuk disampaikan, tapi
        kadang... bingung harus mulai dari mana. Entah itu ucapan selamat, rasa
        sayang, atau perasaan yang belum sempat diungkap, semuanya bisa kamu
        tuangkan lewat cara yang lebih visual, estetik, dan pastinya berkesan.
      </motion.p>
    </motion.div>
  </section>
)

const BenefitSection = () => (
  <section className='bg-[#eaecef] py-32 px-8 text-center'>
    <motion.div
      className='max-w-7xl mx-auto'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.h2 custom={1} variants={fadeUp} className='text-4xl font-bold mb-10 text-gray-900'>
        Benefit yang Kamu Dapatkan
      </motion.h2>
      <div className='grid md:grid-cols-2 gap-8 text-start md:text-left'>
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            custom={i + 2}
            variants={fadeUp}
            className='bg-white p-8 rounded-2xl shadow-md'
          >
            <h3 className='text-2xl font-semibold mb-3'>
              {i === 0 && '🎁 Hadiah dengan Cara Baru'}
              {i === 1 && '💬 Topik Bimbingan'}
              {i === 2 && '🔗 Link Tersimpan Aman'}
              {i === 3 && '🛡️ Order Dijamin Aman'}
            </h3>
            <p className='text-base md:text-lg'>
              {i === 0 && 'Membuat pengalaman memberi ucapan jadi lebih personal dan menyenangkan. Visual yang menarik untuk dibaca secara berkala cocok untuk segala kalangan'}
              {i === 1 && 'Mendapatkan saran open topic buat kamu yang mau confess atau ngucapin sesuatu. Jangan sungkan untuk menghubungi admin untuk meminta saran pembuka topik kepada seseorang'}
              {i === 2 && 'Link ucapan masih tersimpan di sistem admin kalau kamu nggak sengaja menghapusnya. Segera hubungi admin'}
              {i === 3 && 'Dikawal terus sampai kamu bilang "Oke kak, aman!" 💪.'}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
)

const FooterSection = () => (
  <motion.footer
    className='bg-gray-900 text-gray-100 py-16 text-center'
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true }}
  >
    <motion.h2 custom={1} variants={fadeUp} className='text-2xl md:text-3xl font-bold mb-4'>
      Yuk Order MoonNote Sekarang 💌
    </motion.h2>
    <motion.p custom={2} variants={fadeUp} className='text-gray-400 mb-6'>
      Hubungi kami lewat salah satu platform berikut:
    </motion.p>
    <motion.div
      custom={3}
      variants={fadeUp}
      className='flex flex-col md:flex-row justify-center items-center gap-6 text-lg'
    >
      <a
        href='https://www.instagram.com/variant_a_16/'
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center gap-2 hover:text-pink-400 transition'
      >
        <FaInstagram className='text-pink-500 text-xl' />
        @variant_a_16
      </a>
      <div className='flex items-center gap-2 text-indigo-300'>
        <FaDiscord className='text-indigo-500 text-xl' />
        abyan106
      </div>
    </motion.div>
  </motion.footer>
)

const Home = () => (
  <div className='flex flex-col'>
    <HeroSection />
    <ReasonSection />
    <BenefitSection />
    <FooterSection />
  </div>
)

export default Home
