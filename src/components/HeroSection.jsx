import { useEffect } from 'react'
import confetti from 'canvas-confetti'

const HeroSection = ({
  nama,
  openingText,
  openingSubText,
  backgroundImage
}) => {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }
    })
  }, [])

  return (
    <section
      id='hero'
      className='relative flex items-center justify-center h-screen w-full text-white text-center overflow-hidden bg-cover bg-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay hitam transparan */}
      <div className='absolute inset-0 bg-black/50 z-10'></div>

      {/* Konten utama */}
      <div className='relative z-20 w-full max-w-screen-xl px-4 py-10 mx-auto'>
        <h1
          className='text-4xl md:text-5xl font-bold drop-shadow-xl animate-fade-up opacity-0'
          style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}
        >
          Selamat Ulang Tahun, {nama}!
        </h1>

        <div className='pt-12'>
          {openingText && (
            <p
              className='text-xl text-gray-200 mb-2 drop-shadow-md animate-fade-up opacity-0'
              style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
            >
              {openingText}
            </p>
          )}

          {openingSubText && (
            <p
              className='text-sm text-gray-300 drop-shadow-md animate-fade-up opacity-0'
              style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
            >
              Ada pesan spesial buatmu...
              <br />
              <span
                className='italic animate-fade-up opacity-0'
                style={{
                  animationDelay: '700ms',
                  animationFillMode: 'forwards'
                }}
              >
                {openingSubText}
              </span>
            </p>
          )}

          <a
            href='#greeting'
            className='inline-block mt-4 px-6 py-3 bg-white/80 text-black font-semibold rounded-md hover:bg-white transition animate-fade-up opacity-0'
            style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
          >
            Baca Pesannya 💌
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
