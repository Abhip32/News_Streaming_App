import Navbar from '@/components/navbar'
import Head from 'next/head'
import MainCarousel from '@/components/Carousel';
import ChannelReel from '@/components/ChannelReel';
import { items } from '@/public/items';

export default function Home() {
  return (
    <div className='bg-black min-h-screen'>
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-black">
        <Navbar/>
        <MainCarousel/>
      </header>

      <main className="bg-black">
      <br/>
        <h1 className='font-bold text-white text-lg m-4'>Explore News Channels</h1>
       <ChannelReel items={items}/>
       <br/>
       <br/>

        <br/>
        <h1 className='font-bold text-white text-lg m-4'>English News Channels</h1>
       <ChannelReel items={items.filter(item => item.type === "news(english)")}/>
       <br/>
       <br/>
        <h1 className='font-bold text-white text-lg m-4'>Marathi News Channels</h1>
       <ChannelReel items={items.filter(item => item.type === "news(marathi)")}/>
       <br/>
       <br/>

       <h1 className='font-bold text-white text-lg m-4'>Hindi News Channels</h1>
       <ChannelReel items={items.filter(item => item.type === "news(hindi)")}/>
       <br/>
       <br/>


       <h1 className='font-bold text-white text-lg m-4'>International News Channels</h1>
       <ChannelReel items={items.filter(item => item.type === "news(inter)")}/>
       <br/>
       <br/>
       
      </main>

      <footer className="bg-black">
        {/* Add footer content here */}
      </footer>
    </div>
  )
}
