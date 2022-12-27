/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Toggle from './ThemeToggle'


const navigation = [
  { name: 'About', href: '#company2' },
  { name: 'Features', href: '#company1' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Company', href: '#company2' },
]

export default function Hero1() {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden " id="home"  >

      
      
      <div className="hidden sm:block sm:absolute   sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">

        
        <div className="relative h-full max-w-7xl  mx-auto">
          

        {/* <div className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2 blur-3xl">
         <svg
           className="fixed left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
           viewBox="0 0 1155 678"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
             fillOpacity=".3"
             d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
           />
           <defs>
             <linearGradient
               id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
               x1="1155.49"
               x2="-78.208"
               y1=".177"
               y2="474.645"
               gradientUnits="userSpaceOnUse"
             >
               <stop stopColor="#9089FC" />
               <stop offset={1} stopColor="#FF80B5" />
    //         </linearGradient>
    //       </defs>
    //     </svg>
       </div> */}
          
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-800" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-800 " fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={1000} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span className="sr-only">ressa</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      // src="https://res.cloudinary.com/diuoze6fm/image/upload/v1672109641/ressa-startup/ressalogo_wormg9.svg"
                      src="https://res.cloudinary.com/diuoze6fm/image/upload/v1672109752/ressa-startup/ressa-main_vath6e.svg"


                      alt=""
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900  dark:hover:text-gray-200">
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <span className="inline-flex rounded-md shadow">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700"
                  >
                    Know more
                  </a>
                </span>
                <Toggle/>

              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white  dark:bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://res.cloudinary.com/diuoze6fm/image/upload/v1672109641/ressa-startup/ressalogo_wormg9.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white  dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center dark:text-gray-200  text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                      
                    </a>
                    
                  ))}
                    <Toggle/>
                </div>
                <span className='block'>   <a
                
                href="#"
                className="block w-full px-5 py-3 text-center font-medium text-rose-600 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100"
              >
                Log in 
              </a></span>
         
               
              
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="mt-20 mx-auto h-full p-20 max-w-7xl px-4 sm:mt-40  ">
          <div className="text-center">
          <a
                    href="#pricing"
                    className="inline-flex mb-10 items-center text-white bg-gray-900 dark:bg-gray-700 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-rose-600 rounded-full">
                      Hey there !
                    </span>
                    <span className="ml-4 text-sm">Visit our pricing page</span>
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                  </a>
            <h1 className="text-4xl tracking-tight font-extrabold dark:text-gray-50 text-gray-900 sm:text-5xl md:text-6xl">
          
              <span className="block xl:inline">Website you need for</span>{' '}
              <span className="block text-rose-600 xl:inline">your business</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              We help any businesses to gather online traffic by creating attractive websites and by digital marketting , it can be a small personal website , enterprise website or anything you want to build for your business. We are here to help you get started .. ...
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-xl shadow-xl">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-rose-600 hover:bg-rose-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 rounded-xl shadow-xl sm:mt-0 sm:ml-3">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-rose-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Know more
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
