import Link from 'next/link';
import logo from '../assets/images/logo.png'
import Image from 'next/image'



const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className='flex flex-wrap justify-center items-center gap-4'>
            <Image
                src={logo}
                alt="Picture of the author"
                width={50}
                height={50}
            />
           <h1 className='font-bold text-lg'>News Buddy</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;