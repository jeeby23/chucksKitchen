import Hero from '@/components/Landing/home/hero'
import Popular from '@/components/Landing/home/popular'
import Special from '@/components/Landing/home/special'
import Newmenuadditions from '@/components/Landing/home/new-menu-additions'

export default function Home() {
  return (
    <main>
      <Hero />
      <Popular />
      <Special />
      <Newmenuadditions />
    </main>
  )
}