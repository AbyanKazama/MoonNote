import { useEffect, useRef, useState } from 'react'

const BackgroundMusic = ({ musicUrl }) => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.5
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false))
      }
    }
  }, [musicUrl])

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
      setIsPlaying(true)
    }
  }

  if (!musicUrl) return null

  return (
    <div className='fixed bottom-4 left-4 z-50'>
      <audio ref={audioRef} loop src={musicUrl} />
      <button
        onClick={toggleMusic}
        className='bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-200 transition text-sm font-medium'
      >
        {isPlaying ? '🔊 Playing' : '🔇 Muted'}
      </button>
    </div>
  )
}

export default BackgroundMusic
