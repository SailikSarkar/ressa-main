/* This example requires Tailwind CSS v2.0+ */
import { UsersIcon } from '@heroicons/react/outline'

export default function Work1() {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 h-full pt-10 pb-40 ">
      
      
      <div className="h-56  sm:h-72 p-6  lg:absolute lg:left-0  lg:w-[600px]">
        
        <img
          className=" object-cover  sm:mt-20 rounded-2xl sm:ml-72"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="Support team"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
          <div>
            
          <h1 className="mt-4 mb-16 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                    <span className="md:block">Work experience </span>{' '}
                    <span className="text-rose-600 md:block">in Ressa</span>
                  </h1>


          </div>
          
        
          <p className=" placeholder:sm:mt-6 text-lg text-gray-500">
            As , we just started this new company.Our main motto is to deliver our services before the deadline and with exceptional quality . Till now our team has completed more than 18 projects .
          </p>
          <div className="mt-8 overflow-hidden">
            <dl className="-mx-8 -mt-8 flex flex-wrap">
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Services</dt>
                <dd className="order-1 text-2xl font-extrabold text-rose-600 sm:text-3xl">24/7</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">customer appreciation</dt>
                <dd className="order-1 text-2xl font-extrabold text-rose-600 sm:text-3xl">100%</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Projects</dt>
                <dd className="order-1 text-2xl font-extrabold text-rose-600 sm:text-3xl">18+</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
