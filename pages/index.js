export default function Landing() {
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="px-4 pt-10 mx-auto max-w-7xl sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
              <div className="sm:text-cente pr lg:text-left">
                <h1 className="mb-4 text-2xl font-bold text-primary-500">Hazz Tennis Peformance</h1>
                <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-wide text-base-900 sm:text-5xl md:text-6xl">
                  Raise your tennis skills and win the game
                </h2>
                <p className="text-base text-base-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Book and schedule a lesson with a professional tennis coach.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/login"
                      className="flex items-center justify-center w-full px-8 py-3 text-lg font-medium text-white rounded-lg shadow bg-primary-600 hover:bg-primary-500 focus:outline-none">
                      Log in
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="/signup"
                      className="flex items-center justify-center w-full px-8 py-3 text-lg font-medium rounded-lg shadow text-primary-700 bg-primary-100 hover:text-primary-600 hover:bg-primary-200 focus:outline-none">
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <svg
              className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=90"
            alt
          />
        </div>
      </div>
      <div className="py-16 overflow-hidden bg-base-50 md:py-20 lg:py-24">
        <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
          <svg
            className="absolute hidden transform -translate-x-1/2 lg:block left-full -translate-y-1/4"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784">
            <defs>
              <pattern id="svg-pattern-squares-1" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={4} height={4} className="text-base-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#svg-pattern-squares-1)" />
          </svg>
          <div className="relative">
            <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-center text-base-900 sm:text-4xl">
              A better way to learn tennis
            </h3>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-base-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis
              in, accusamus quisquam.
            </p>
          </div>
          <div className="relative mt-12 lg:mt-20 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h4 className="text-2xl font-extrabold tracking-tight text-base-900 sm:text-3xl">Why choose use?</h4>
              <p className="mt-3 text-lg text-base-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
                officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis
                facere. Totam, velit.
              </p>
              <ul className="mt-10">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary-500">
                        <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6 text-base-900">Competitive exchange rates</h5>
                      <p className="mt-2 text-base text-base-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit
                        eaque, iste dolor cupiditate blanditiis ratione.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary-500">
                        <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6 text-base-900">No hidden fees</h5>
                      <p className="mt-2 text-base text-base-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit
                        eaque, iste dolor cupiditate blanditiis ratione.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary-500">
                        <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6 text-base-900">Transfers are instant</h5>
                      <p className="mt-2 text-base text-base-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit
                        eaque, iste dolor cupiditate blanditiis ratione.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative mt-10 -mx-4 lg:mt-0">
              <svg
                className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404">
                <defs>
                  <pattern id="svg-pattern-squares-2" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                    <rect x={0} y={0} width={4} height={4} className="text-base-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#svg-pattern-squares-2)" />
              </svg>
              <img
                className="relative mx-auto rounded-lg shadow-xl"
                width={490}
                src="https://images.unsplash.com/photo-1614743758466-e569f4791116?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=602&q=80"
                alt
              />
            </div>
          </div>
          <svg
            className="absolute hidden transform translate-x-1/2 lg:block right-full"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784">
            <defs>
              <pattern id="svg-pattern-squares-3" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={4} height={4} className="text-base-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#svg-pattern-squares-3)" />
          </svg>
        </div>
      </div>
      <div className="bg-primary-900">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Trusted by tennis players from all over the world
            </h2>
            <p className="mt-3 text-xl text-primary-100 sm:mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
            </p>
          </div>
          <div className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            <div>
              <p className="text-5xl font-extrabold text-white">2000+</p>
              <p className="mt-2 text-lg font-medium leading-6 text-primary-100">Clients</p>
            </div>
            <div className="mt-10 sm:mt-0">
              <p className="text-5xl font-extrabold text-white">100+</p>
              <p className="mt-2 text-lg font-medium leading-6 text-primary-100">Coaches</p>
            </div>
            <div className="mt-10 sm:mt-0">
              <p className="text-5xl font-extrabold text-white">100k+</p>
              <p className="mt-2 text-lg font-medium leading-6 text-primary-100">Bookings</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:py-16 lg:px-8 lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-base-900 sm:text-4xl">
            <p className="mb-2">Ready to learn?</p>
            <p className="text-primary-600">Log in or create an account.</p>
          </h2>
          <div className="flex mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/login"
                className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium text-white rounded-lg bg-primary-600 hover:bg-primary-500 focus:outline-none">
                Log in
              </a>
            </div>
            <div className="inline-flex ml-3">
              <a
                href="/signup"
                className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium rounded-lg text-primary-700 bg-primary-100 hover:text-primary-600 hover:bg-primary-50 focus:outline-none focus:border-primary-300">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-base-200">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
          <div className="pt-8 border-t border-base-200">
            <p className="text-base text-base-400 xl:text-center">
              &copy; 2021 Hazz Tennis Performance. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
