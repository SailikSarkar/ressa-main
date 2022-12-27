/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function News1() {
    return (
      <div className="bg-gray-50 pt-8 dark:bg-gray-900 h-[600px]">


    
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          
          <div className="py-10 px-6 bg-rose-600 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
            <div className="lg:w-0 lg:flex-1">

              
              <h2 className="text-3xl font-extrabold tracking-tight text-white">Sign up for our newsletter</h2>
              <p className="mt-4 max-w-3xl text-lg text-indigo-100">
                Subscribe here to , get notified of our newsletter updates .
              </p>
            </div>
            <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-rose-700 focus:ring-white rounded-md"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-gray-900 bg-yellow-500 hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-rose-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Notify me
                </button>
              </form>
              <p className="mt-3 text-sm text-indigo-100">
                We care about the protection of your data. Read our{' '}
                <a href="#" className="text-white font-medium underline">
                  Privacy Policy.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  