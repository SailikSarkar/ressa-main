/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'

const hobbyFeatures = ['Upto 5 pages', 'Wordpress , React, Next.js Website ', 'Seo friendly', '3 months free maintenance', 'Free SSL certificate']
const growthFeatures = ['Upto 12 pages', 'Wordpress , React, Next.js Website ', 'Best Seo friendly', '6 months free maintenance', 'Clean and unique UI', 'Attractive Animations', 'Free SSL certificate']
const scaleFeatures = [
  'Upto 30 pages', ' React, Next.js Website ', 'E-commerce Website  ', 'Best Seo friendly', '8 months free maintenance', 'Stripe Payment Gateway'
]

export default function Pricing1() {
  return (

    
    <div id="pricing"   className="bg-gray-50 dark:bg-gray-900">


      <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">

        
     
        
      <div className="relative h-full max-w-7xl  mx-auto">
          
  

          </div>

          
        <div className="text-center">
          
          <h2 className="text-lg leading-6 font-semibold text-gray-500 dark:text-gray-300  uppercase tracking-wider">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-800 dark:text-gray-100 sm:text-4xl lg:text-5xl">
            The right price for you, 
            <p className="mt-2 text-3xl font-extrabold text-rose-600  sm:text-4xl lg:text-5xl">
             whoever you are
          </p>
          </p>
          <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-500 sm:mt-5 sm:text-2xl">
           Doesn't matter who your are , you will get best price , and its our guarentee 
          </p>
        </div>
      </div>

      <div className="mt-16 bg-gray-50  dark:bg-gray-900 pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-gray-50 dark:bg-gray-900 lg:h-2/3" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">

                {/* //first card  */}
                <div className="h-full  flex flex-col rounded-2xl shadow-2xl overflow-hidden lg:rounded-2xl lg:rounded-l-2xl">
                  <div className="flex-1 flex flex-col ">
                    <div className="  transition ease-in-out delay-150 bg-yellow-500 hover:-translate-y-1 hover:scale-110 hover:bg-rose-600 duration-300  px-6 py-10">

{/* 
                    transition ease-in-out delay-150 bg-gradient-to-r from-rose-600 via-red-500 to-yellow-500 hover:-translate-y-1 hover:scale-110  hover:via-yellow-500 hover:to-red-500 duration-300 */}
                   


                  
                      <div>
                        <h3 className="text-center text-2xl font-medium  text-gray-900" id="tier-hobby">
                          Starter
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-white">
                            <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                            <span className="font-extrabold">99</span>
                          </span>
                          <span className="text-xl font-medium text-gray-50">/onwards</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 dark:border-gray-800 flex flex-col justify-between border-t-8  border-gray-50 p-6 bg-gray-100 dark:bg-gray-800 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {hobbyFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon className="flex-shrink-0 h-6 w-6 text-yellow-600" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500 dark:text-gray-300">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="#"
                            className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-bold text-rose-600 hover:bg-gray-50"
                            aria-describedby="tier-hobby"
                          >
                          Send me a mail
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* middle card  */}
              <div className=" transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300  mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div className="relative z-10 rounded-2xl shadow-xl">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl border-4 border-rose-600"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 transform translate-y-px">
                    <div className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex rounded-full bg-rose-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                        Most popular
                      </span>
                    </div>
                  </div>
                  <div className="bg-yellow-500 rounded-t-2xl px-6 pt-12 pb-10">
                    <div>
                      <h3 className="text-center text-3xl font-semibold text-gray-900 sm:-mx-6" id="tier-growth">
                      Intermediate
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="px-3 flex items-start text-6xl tracking-tight text-white sm:text-6xl">
                          <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                          <span className="font-extrabold">199</span>
                        </span>
                        <span className="text-2xl font-medium text-gray-100">/onwards</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t-8 border-gray-50 dark:border-gray-800  rounded-b-2xl pt-10 pb-8 px-6 bg-gray-100 dark:bg-gray-800 sm:px-10 sm:py-10">
                    <ul role="list" className="space-y-4">
                      {growthFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="flex-shrink-0 h-6 w-6 text-yellow-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500 dark:text-gray-300">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        <a
                          href="#"
                          className="block w-full text-center rounded-lg border border-transparent bg-rose-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-rose-700"
                          aria-describedby="tier-growth"
                        >
                        Send me a mail
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* //thicrd card  */}

              <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-2xl shadow-2xl overflow-hidden lg:rounded-2xl lg:rounded-r-2xl">
                  <div className="flex-1 flex flex-col">
                    <div className="  transition ease-in-out delay-150 bg-yellow-500 hover:-translate-y-1 hover:scale-110 hover:bg-rose-600 duration-300  px-6 py-10 ">
                      <div>
                        <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-scale">
                          Advanced
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-white">
                            <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                            <span className="font-extrabold">399</span>
                          </span>
                          <span className="text-xl font-medium text-gray-100">/onwards</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between border-t-8 border-gray-50 dark:border-gray-800 p-6 bg-gray-100 dark:bg-gray-800 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {scaleFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon className="flex-shrink-0 h-6 w-6 text-yellow-500" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500 dark:text-gray-300">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="#"
                            className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-rose-600 hover:bg-gray-50"
                            aria-describedby="tier-scale"
                          >
                            Send me a mail
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
