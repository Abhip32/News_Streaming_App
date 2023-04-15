import Navbar from '@/components/navbar';
import { useRouter } from 'next/router';
import { items } from '@/public/items';
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Streaming() {
  const router = useRouter();
  const { src } = router.query;
  const [selectedItem, setSelectedItem] = useState(null); // Initialize to null

  useEffect(() => {
    // Find the selected item and update the state
    const item = items.find(item => item.link === src);
    setSelectedItem(item);
  }, [src]); // Run when the src query parameter changes

  return (
    <div className='min-h-screen bg-black'>
      <Navbar />
      <iframe width="100%" height="500" src={`https://www.youtube.com/embed/${src}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <br/>
      {selectedItem && ( // Render the div only when selectedItem is not null
        <div className="max-w-md m-2">
          <div className="max-w-md flex items-center gap-3 bg-black rounded p-2">
            <img src={selectedItem.image} className='rounded-full' width="70" height="70" />
            <h1 className="text-lg text-white">{selectedItem.name}</h1>
          </div>
        </div>
      )}
    </div>
  );
}
