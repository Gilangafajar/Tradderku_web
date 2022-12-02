import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from 'components/Header';
import Testimonials from 'components/Testimonials';
import DecorIntersect from 'images/decor-intersect-1.svg';
import DecorPlus1 from 'images/decor-plus-style-1.svg';
import Facebook from 'images/facebook.svg';
import Instagram from 'images/instagram.svg';
import Twitter from 'images/twitter.svg';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Tradderku</title>
        <meta name="description" content="Tradderku website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute z-10 w-full py-12">
        <Header />
      </div>

      <section className="relative mb-28">
        <span className="absolute w-5/12 h-screen right-0 top-0 bottom-0">
        <DecorIntersect className="fill-accent-4/50" />
        </span>
        <div className="w-96 h-96 bg-accent-4/50 rounded-full blur-3xl absolute -left-80 -top-10"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex">
            <div className="w-6/12 pt-52">
              <h1 className="text-accent-1 font-sans font-medium text-xl uppercase mb-6">Accurate trading channel platform</h1>
              <h2 className="text-gray-900 font-sans font-medium text-[84px] leading-[89px] mb-8 tracking-tighter">Save your time
              Get more <span className='text-accent-1 font-medium'>profit</span></h2>
              <p className='text-gray-500 mb-6 max-w-lg leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At reprehenderit et nihil, autem rem placeat sunt, odit eum quibusdam consequuntur voluptate repellat aperiam modi perspiciatis, ipsam cupiditate vitae commodi. Neque?</p>

              <div className="flex">
                <Link legacyBehavior href='/'>
                  <a className='mr-11 bg-accent-1 hover:bg-emerald-400 shadow-accent-1/10 shadow-[0_20px_35px] px-6 py-4 text-white rounded-xl'>Get Started</a>
                </Link>
              </div>
            </div>
            <div className="w-6/12 pt-24 relative">
              <div className="relative z-20 top-20 transform translate-x-16 translate-y-10">
              <Image
                  priority
                  layout="responsive"
                  width={100}
                  height={100}
                  src="/images/hero-image.png"
                  alt="foto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sections Heros Akhir*/}

      {/* Sections Category Awal*/}
      <section className="mb-32">
        <div className="max-w-7xl mx-auto relative px-4">
          <div className="absolute w-36 h-36 lg:-right-10 -top-10">
            <DecorPlus1 className="decor-plus-style-1" />
          </div>
          <div className="text-center flex flex-col mb-16" >
            <h1 className="uppercase text-lg mb-2 text-gray-500">Category</h1>
            <h1 className="font-sans font-medium text-5xl text-gray-900 leading-snug">
              What we offer <span className='text-emerald-400'>services</span> 
            </h1>
          </div>
          <div className="flex text-gray-900">
            {/* awal icon series 1 */}
            <div className="w-3/12 px-8">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-1 rounded-tl-3xl rounded-br-lg w-28 h-28"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-11">
                    <Image
                      layout="fixed"
                      width={60}
                      height={60}
                      src="/images/illustration-radar.png"
                      alt="foto"
                    />
                  </div>
                  <div className="absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-4 rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12"></div>
                </div>
                <h4 className="text-xl font-medium mb-3">Trading signal </h4>
                <h5 className="px-8 mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat distinctio, eos natus ad neque.
                </h5>
              </div>
            </div>
            {/* akhir icon series 1 */}
            {/* awal icon series 2 */}
            <div className="w-3/12 px-8">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-1 rounded-tl-3xl rounded-br-lg w-28 h-28"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-12">
                    <Image
                      layout="fixed"
                      width={137}
                      height={195}
                      src="/images/plane.png"
                      alt="foto"
                    />
                  </div>
                  <div className="absolute bottom-8 -right-9 transform -translate-x-1/2 bg-accent-4 rounded-tl-md rounded-tr-md rounded-bl-2xl rounded-br-lg w-12 h-12"></div>
                </div>
                <h4 className="text-xl font-medium mb-3">Analytic chanel</h4>
                <h5 className="px-8 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat distinctio, eos natus ad neque.
                </h5>
              </div>
            </div>
            {/* akhir icon series 2*/}
            {/* awal icon series 3 */}
            <div className="w-3/12 px-8">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-1 rounded-tl-3xl rounded-br-lg w-28 h-28"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-8 top-2">
                    <Image
                      layout="fixed"
                      width={50}
                      height={50}
                      src="/images/illustration-mic.png"
                      alt="foto"
                    />
                  </div>
                  <div className="absolute top-10 left-3 transform -translate-x-1/2 bg-accent-4 rounded-tl-md rounded-tr-2xl rounded-bl-lg rounded-br-md w-12 h-12"></div>
                </div>
                <h4 className="text-xl font-medium mb-3">Forum</h4>
                <h5 className="px-8 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat distinctio, eos natus ad neque.
                </h5>
              </div>
            </div>
            {/* akhir icon series 3 */}
            {/* awal icon series 4 */}
            <div className="w-3/12 px-8">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-1 rounded-tl-3xl rounded-br-lg w-28 h-28"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-10 top-3">
                    <Image
                      layout="fixed"
                      width={500}
                      height={500}
                      src="/images/illustration-gear.png"
                      alt="foto"
                    />
                  </div>
                  <div className="absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-4 rounded-tl-md rounded-tr-lg rounded-bl-2xl rounded-br-md w-12 h-12"></div>
                </div>
                <h4 className="text-xl font-medium mb-3">Feed
                 and Customization</h4>
                <h5 className="px-8 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat distinctio, eos natus ad neque.
                </h5>
              </div>
            </div>
            {/* awal icon series 4 */}
          </div>
        </div>
        <h1 className=' text-center flex flex-col mt-20 font-sans text-5xl text-gray-900 leading-snug items-center font-medium '>Tranding</h1>
        <div className="max-w-7xl mx-auto relative px-4 mt-10 shadow-10 ">
        <Image
                  priority
                  layout="responsive"
                  width={100}
                  height={100}
                  src="/images/analytic.png"
                  alt="foto"
                />
        </div>
      </section>

      {/* Sections about*/}
      <section className="mb-28 ">
        <div className="max-w-7xl mx-auto relative px-4">
          <div className="flex">
            <div className="w-6/12 pl-8 pr-28">
              {/* posisi text sebelah kiri awal */}
              <div className="flex flex-col mb-16">
                <h3 className="uppercase test-lg mb-2 text-gray-500">
                  History
                </h3>
                <h3 className="font-sans text-5xl text-gray-900 font-medium leading-snug mb-10">
                  About <span className='text-accent-1'>Tradderku</span>
                </h3>
                <ul className="flex flex-col gap-y-10 pr-10">
                  <li className="flex items-center">
                    <span className="bg-accent-1 rounded-xl flex flex-none text-white items-center justify-center w-12 h-12">
                      <span className="text-sm">Since</span>
                    </span>
                    <div className="flex flex-col ml-4 leading-5">
                      <h6 className="font-bold mb-1 text-gray-900">
                        2020
                      </h6>
                      <p className="font-[400] text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Urna, tortor tempus.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-accent-1 rounded-xl flex flex-none text-white items-center justify-center w-12 h-12">
                      <span className="text-sm">Place</span>
                    </span>
                    <div className="flex flex-col ml-4 leading-5">
                      <h6 className="font-bold mb-1 text-gray-900">
                        Bekasi
                      </h6>
                      <p className="font-[400] text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Urna, tortor tempus.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-accent-1 rounded-xl flex flex-none text-white items-center justify-center w-12 h-12">
                      <span className="text-sm">Plan</span>
                    </span>
                    <div className="flex flex-col ml-4 leading-5">
                      <h6 className="font-bold mb-1 text-gray-900">
                        Opportunity
                      </h6>
                      <p className="font-[400] text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Urna, tortor tempus.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* posisi text sebelah kiri akhri */}
            <div className="w-5/12 pt-24 relative">
              <div className="relative z-10 -top-20 transform translate-x-16 translate-y-10">
              <Image
                  priority
                  layout="responsive"
                  width={100}
                  height={100}
                  src="/images/phone.png"
                  alt="foto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Testimonials*/}
      <Testimonials />

      {/* section footer awal */}
      <section className="pb-32 relative overflow-hidden">
        <div className="w-60 h-60 rounded-full blur-3xl absolute z-10 -bottom-10 -right-10 bg-accent-6/20"></div>
        <div className="max-w-7xl mx-auto relative px-4">
          <div className="flex mb-12">
            <div className="w-3/12 px-4">
              <h6 className="text-5xl tracking-tight text-accent-1 mb-4">
                Tradderku
              </h6>
              <p className="text-sm text-gray-900 pr-8">
                Save yout time, get more profit
              </p>
            </div>
            <div className="w-2/12 px-4">
              <h6 className="text-xl tracking-tight text-gray-900 mt-2 mb-7">
                Company
              </h6>
              <ul className="text-lg text-gray-500 flex flex-col gap-y-2">
                <li>
                  <Link href="/about" legacyBehavior>
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/carerrs" legacyBehavior>
                    <a>Carerrs</a>
                  </Link>
                </li>
                <li>
                  <Link href="mobile" legacyBehavior>
                    <a>Mobile</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-2/12 px-4">
              <h6 className="text-xl tracking-tight text-gray-900 mt-2 mb-7">
                Contact
              </h6>
              <ul className="text-lg text-gray-500 flex flex-col gap-y-2">
                <li>
                  <Link href="/faq" legacyBehavior>
                    <a>Help/FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/press" legacyBehavior>
                    <a>Press</a>
                  </Link>
                </li>
                <li>
                  <Link href="affilates" legacyBehavior>
                    <a>Affilates</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-2/12 px-4">
              <h6 className="text-xl tracking-tight text-gray-900 mt-2 mb-7">
                More
              </h6>
              <ul className="text-lg text-gray-500 flex flex-col gap-y-2">
                <li>
                  <Link href="/airlinefees" legacyBehavior>
                    <a>Airlinefees</a>
                  </Link>
                </li>
                <li>
                  <Link href="/airline" legacyBehavior>
                    <a>Airline</a>
                  </Link>
                </li>
                <li>
                  <Link href="/low-fare-tips" legacyBehavior>
                    <a>Low fare tips</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-2/12 px-4">
              {/* icone social media awal */}
              <ul className="text-lg text-gray-500 flex gap-x-5">
                <li>
                  <a
                    href="https://www.facebook.com/gilang.f.wibowo"
                    className="w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full"
                    target="_blank"
                    rel="noreferrer noopener" >
                    <span className="group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0"></span>
                    <span className="relative z-20">
                      <Facebook className="fill-black group-hover:fill-accent-1 transition-colors duration-300" />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/gilangfajarwib/"
                    className="w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full"
                    target="_blank"
                    rel="noreferrer noopener" >
                    <span className="group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0"></span>
                    <span className="relative z-20">
                      <Instagram className="fill-black group-hover:fill-accent-1 transition-colors duration-300" />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/mochacsera"
                    className="w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0"></span>
                    <span className="relative z-20">
                      <Twitter className="fill-black group-hover:fill-accent-1 transition-colors duration-300" />
                    </span>
                  </a>
                </li>
              </ul>
              {/* icone social media akhir */}
              <h6 className="text-xl tracking-tight text-gray-500 mt-7 mb-3">
                Discover our app
              </h6>
              <ul className="flex gap-x-4">
                <li className="relative w-[107px] h-[35px]">
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="relative w-full h-full flex overflow-hidden rounded-full "
                  >
                    <Image
                      className="object-contain"
                      layout="fill"
                      src="/images/google play.png"
                      alt="image_googleplay"
                    />
                  </a>
                </li>
                <li className="relative w-[107px] h-[35px]">
                  <a
                    href="https://apple.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="relative w-full h-full flex overflow-hidden rounded-full"
                  >
                    <Image
                      className="object-contain"
                      layout="fill"
                      src="/images/Play Store.png"
                      alt="image_play_store"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-20 text-center text-lg text-gray-900">
            All right reserve@Tradderku.com
          </div>
        </div>
      </section>
    </div>
  );
}
