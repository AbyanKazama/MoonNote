// BirthdayTemplate.jsx
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { birthdayData as dataUcapan } from '../data'
import HeroSection from '../components/HeroSection'
import GreetingSection from '../components/GreetingSection'
import ParallaxSection from '../components/ParallaxSection'
import GallerySection from '../components/GallerySection'
import BackgroundMusic from '../components/BackgroundMusic'
import GiftSection from '../components/GiftSection'

const BirthdayTemplate = () => {
  const { name } = useParams()
  const data = dataUcapan[name?.toLowerCase()]
  const greetingRef = useRef(null)

  const scrollToGreeting = () => {
    greetingRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!data) {
    return (
      <div className='p-10 text-center text-red-500'>
        Halaman tidak ditemukan. Nama tidak terdaftar.
      </div>
    )
  }

  return (
    <div className='w-full min-h-screen relative overflow-x-hidden'>
      <BackgroundMusic musicUrl={data.music} />
      <HeroSection
        nama={data.nama}
        openingText={data.openingText}
        openingSubText={data.openingSubText}
        backgroundImage={data.backgroundImage}
        onScrollToGreeting={scrollToGreeting}
      />
      <div ref={greetingRef}>
        <GreetingSection
          image={data.greetingImage}
          title={data.greetingTitle}
          text={data.greetingText}
        />
      </div>
      <ParallaxSection
        image={data.parallaxImage}
        title={data.parallaxTitle}
        text={data.parallaxText}
      />
      <GallerySection
        title={data.galleryTitle}
        subtitle={data.gallerySubtitle}
        photos={data.galleryPhotos}
      />
      <GiftSection
        gifts={[
          {
            title: data.title,
            description: data.description,
            downloadUrl: data.downloadUrl
          }
        ]}
      />
    </div>
  )
}

export default BirthdayTemplate
