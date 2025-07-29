// src/pages/Home.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
      className='w-full min-h-screen flex flex-col items-center justify-center text-center p-10 md:py-40 md:px-20 relative bg-cover bg-center'
      style={{ backgroundImage: "url('/img/MoonNote.png')" }}
    >
      <div className='absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-0' />
      <motion.div
        className='relative z-10 max-w-3xl text-white'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.h1
          custom={1}
          variants={fadeUp}
          className='text-4xl md:text-6xl font-bold mb-6'
        >
          🌙 MoonNote
        </motion.h1>
        <motion.p
          custom={2}
          variants={fadeUp}
          className='text-lg md:text-xl text-gray-100 mb-6'
        >
          Masih susah ngomong langsung? Biarkan MoonNote bantu kamu menyampaikan
          sesuatu secara lebih visual, personal, dan memorable.
        </motion.p>
        <motion.button
          custom={3}
          variants={fadeUp}
          onClick={() => setShowModal(true)}
          className='mt-8 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg text-lg transition'
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
                <FaDiscord size={20} /> Discord:{' '}
                <span className='font-mono'>abyan106</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

const AboutMoonNoteSection = () => (
  <section className='bg-white min-h-[60vh] py-40 px-8 md:px-20 text-center flex items-center'>
    <motion.div
      className='max-w-7xl mx-auto'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <motion.h2
        custom={1}
        variants={fadeUp}
        className='text-4xl font-bold mb-8 text-gray-900'
      >
        Apa Itu MoonNote?
      </motion.h2>
      <motion.p
        custom={2}
        variants={fadeUp}
        className='text-gray-700 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed'
      >
        MoonNote adalah website ucapan interaktif berbasis visual. Diciptakan
        untuk kamu yang sering kesulitan menyampaikan perasaan secara langsung,
        tapi ingin tetap tulus, elegan, dan tak terlupakan. Dengan fitur gambar,
        musik, dan animasi yang bisa disesuaikan, MoonNote bikin momen-momen
        penting jadi lebih hidup dan bermakna.
      </motion.p>
    </motion.div>
  </section>
)

const ReasonSection = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <section
      id='about'
      className='w-full bg-gray-100 text-gray-800 py-20 px-6 md:px-12'
    >
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10'>
        <motion.div
          className='w-full md:w-1/2'
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src='/img/MoonNote.png'
            alt='Foto Tentang MoonNote'
            className='w-full h-auto rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer'
            onClick={() => setShowModal(true)}
          />
        </motion.div>

        <motion.div
          className='w-full md:w-1/2'
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Kenapa MoonNote Ada?
          </h2>
          <p className='text-lg leading-relaxed text-gray-700 whitespace-pre-line'>
            MoonNote hadir untuk kamu yang punya banyak hal untuk disampaikan,
            tapi kadang... bingung harus mulai dari mana. Entah itu ucapan
            selamat, rasa sayang, atau perasaan yang belum sempat diungkap,
            semuanya bisa kamu tuangkan lewat cara yang lebih visual, estetik,
            dan pastinya berkesan.
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setShowModal(false)}
              className='fixed top-5 right-5 bg-white text-black px-4 py-2 rounded-sm font-semibold shadow-lg hover:bg-gray-100 transition cursor-pointer z-[60]'
            >
              ✕
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src='/img/MoonNote.png'
                alt='Full Tentang MoonNote'
                className='max-w-full max-h-[90vh] rounded-lg shadow-2xl'
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

const BenefitSection = () => (
  <section className='bg-white py-40 px-8 md:px-20 text-center'>
    <motion.div
      className='max-w-7xl mx-auto'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={fadeUp}
      custom={0}
    >
      <motion.h2
        custom={1}
        variants={fadeUp}
        className='text-4xl font-bold mb-12 text-gray-900'
      >
        Benefit yang Kamu Dapatkan
      </motion.h2>

      {/* SHOW SVG ON MOBILE */}
      <motion.div
        className='block md:hidden mb-12 w-full max-w-sm mx-auto'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src='/img/note-taking-1-99.svg'
          alt='Ilustrasi MoonNote'
          className='w-full h-auto'
        />
      </motion.div>

      <div className='grid md:grid-cols-2 gap-12 text-left'>
        {/* LEFT: Paragraf Penjelasan */}
        <motion.div
          className='space-y-8 text-gray-800 leading-relaxed text-base md:text-lg md:pl-6'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
        >
          <p>
            🎁 <strong>Hadiah dengan Cara Baru:</strong> Kini kamu bisa memberi
            ucapan yang lebih personal, hangat, dan penuh warna. Nggak cuma teks
            biasa melainkan halaman interaktif yang bisa dibuka berkali-kali dan
            tetap terasa spesial setiap kali dilihat.
          </p>

          <p>
            💬 <strong>Topik Bimbingan:</strong> Bingung mau mulai dari mana?
            Kami bantu kamu menyiapkan kata-kata pembuka untuk mengungkapkan isi
            hati. Cukup bilang tujuanmu, dan kami akan bantu pilihkan pendekatan
            yang pas.
          </p>

          <p>
            🔗 <strong>Link Tersimpan Aman:</strong> Nggak sengaja kehapus?
            Tenang, sistem kami masih menyimpan salinannya. Kamu tinggal hubungi
            admin untuk dapatkan kembali link-nya.
          </p>

          <p>
            🛡️ <strong>Order Dijamin Aman:</strong> Proses pembuatan halamanmu
            dikawal langsung oleh admin hingga benar-benar selesai dan kamu
            puas. Kami baru lega kalau kamu bilang, “Oke kak, aman!” 💪
          </p>
        </motion.div>

        {/* RIGHT: Illustration for Desktop */}
        <motion.div
          className='hidden md:block'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src='/img/note-taking-1-99.svg'
            alt='Ilustrasi MoonNote'
            className='w-full max-w-md mx-auto'
          />
        </motion.div>
      </div>
    </motion.div>
  </section>
)

const TestimoniSection = () => (
  <section className='bg-gray-50 py-40 px-8 md:px-20 text-center'>
    <motion.div
      className='max-w-6xl mx-auto'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.h2
        custom={1}
        variants={fadeUp}
        className='text-4xl font-bold mb-8 text-gray-900'
      >
        Contoh Halaman MoonNote
      </motion.h2>
      <motion.p
        custom={2}
        variants={fadeUp}
        className='text-gray-700 max-w-3xl mx-auto text-lg md:text-xl mb-12'
      >
        Penasaran seperti apa hasil akhirnya? Coba intip halaman MoonNote dari
        salah satu klien kami. Kamu juga bisa punya halaman spesial seperti ini,
        cukup kirim detailmu ke admin!
      </motion.p>
      <motion.div custom={3} variants={fadeUp}>
        <a
          href='/abyan'
          className='inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium rounded-full shadow-lg transition'
        >
          🔍 Lihat Contoh Halaman
        </a>
      </motion.div>
    </motion.div>
  </section>
)

const FooterSection = () => (
  <motion.footer
    className='bg-gray-900 text-gray-100 py-20 text-center'
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true }}
  >
    <motion.h2
      custom={1}
      variants={fadeUp}
      className='text-2xl md:text-3xl font-bold mb-4'
    >
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
    <AboutMoonNoteSection />
    <ReasonSection />
    <BenefitSection />
    <TestimoniSection />
    <FooterSection />
  </div>
)

export default Home
