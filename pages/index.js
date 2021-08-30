import { CalendarIcon, LightningBoltIcon, UserAddIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function Landing() {
  return (
    <>
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="px-4 pt-10 mx-auto max-w-7xl sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
              <div className="text-center lg:text-left">
                <h1 className="mb-4 text-2xl font-bold text-primary-500">{process.env.NEXT_PUBLIC_SITE_TITLE}</h1>
                <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-wide sm:text-5xl md:text-6xl">Raise your tennis skills and win the game</h2>
                <p className="text-neutral-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Book and schedule a lesson with a professional tennis coach.</p>
                <div className="flex flex-col gap-2 mt-5 lg:flex-row sm:mt-8">
                  <Link href="/account/signin">
                    <a className="flex items-center justify-center px-8 py-3 text-lg font-medium text-white transition duration-150 rounded-lg bg-primary-600 hover:bg-primary-500 focus:outline-none focus:bg-primary-700">
                      Sign in
                    </a>
                  </Link>
                  <Link href="/account/signup">
                    <a className="flex items-center justify-center px-8 py-3 text-lg font-medium transition duration-150 rounded-lg text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:bg-primary-300">
                      Create account
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <svg className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>
        </div>
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=960&q=90"
            alt=""
          />
        </div>
      </header>
      <section className="py-16 overflow-hidden bg-neutral-50 md:py-20 lg:py-24">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
          <svg className="absolute hidden transform -translate-x-1/2 lg:block left-full -translate-y-1/4" width={404} height={784} fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="svg-pattern-squares-1" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={4} height={4} className="text-neutral-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#svg-pattern-squares-1)" />
          </svg>
          <div className="relative">
            <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-center sm:text-4xl">A better way to learn tennis</h3>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-neutral-500">Some people teach tennis, but we define it, refine, and then shine it!</p>
          </div>
          <div className="relative mt-12 lg:mt-20 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h4 className="text-2xl font-extrabold tracking-tight sm:text-3xl">How it works?</h4>
              <ul className="mt-10">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white rounded-lg bg-primary-500">
                        <UserAddIcon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6">Create an account</h5>
                      <p className="mt-2 text-neutral-500">Enter your personal details and sign up.</p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white rounded-lg bg-primary-500">
                        <CalendarIcon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6">Book online</h5>
                      <p className="mt-2 text-neutral-500">Book with a coach at a court and time that fits your schedule.</p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white rounded-lg bg-primary-500">
                        <LightningBoltIcon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6">Take lessons</h5>
                      <p className="mt-2 text-neutral-500">Start your tennis lessons and improve your game.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative hidden mt-10 -mx-4 lg:mt-0 lg:block">
              <div className="overflow-hidden rounded-lg shadow-xl h-[30rem] bg-white">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1614743758466-e569f4791116?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=602&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
          <svg className="absolute hidden transform translate-x-1/2 lg:block right-full" width={404} height={784} fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="svg-pattern-squares-3" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={4} height={4} className="text-neutral-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#svg-pattern-squares-3)" />
          </svg>
        </div>
      </section>
      <section className="bg-primary-900">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Trusted by tennis players from all over the world</h2>
          </div>
          <div className="mt-12 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            <div>
              <p className="text-5xl font-extrabold text-white">200+</p>
              <p className="mt-2 text-lg font-medium leading-6 text-primary-100">Clients</p>
            </div>
            <div className="mt-10 sm:mt-0">
              <p className="text-5xl font-extrabold text-white">10+</p>
              <p className="mt-2 text-lg font-medium leading-6 text-primary-100">Coaches</p>
            </div>
            <div className="mt-10 sm:mt-0">
              <p className="text-5xl font-extrabold text-white">10k+</p>
              <p className="mt-2 text-lg font-medium leading-6 text-primary-100">Bookings</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <p className="mb-2">Ready to learn?</p>
          <p className="text-primary-600">Sign in or create an account.</p>
        </h2>
        <div className="flex gap-2 mt-8">
          <Link href="/account/signin">
            <a className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium text-white transition duration-150 rounded-lg bg-primary-600 hover:bg-primary-500 focus:outline-none focus:bg-primary-700">
              Sign in
            </a>
          </Link>
          <Link href="/account/signup">
            <a className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium transition duration-150 rounded-lg text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:bg-primary-300">
              Create account
            </a>
          </Link>
        </div>
      </section>
      <footer className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="pt-8 border-t border-neutral-200">
          <p className="text-neutral-400 xl:text-center">&copy; 2021 {process.env.NEXT_PUBLIC_SITE_TITLE}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
