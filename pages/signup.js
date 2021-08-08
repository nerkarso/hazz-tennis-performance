function Signup() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1542446633-362158ea0052?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80")',
      }}>
      <div className="w-full">
        <div className="flex mx-auto overflow-hidden bg-white rounded-lg shadow dark:bg-base-800 lg:max-w-md">
          <div className="w-full px-6 py-8 md:px-8">
            <h2 className="text-2xl font-semibold text-center text-base-700 dark:text-white mb-2">
              Hazz Tennis Performance
            </h2>
            <p className="text-xl text-center text-base-600 dark:text-base-200">Create your account</p>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-base-600 dark:text-base-200" htmlFor="FullName">
                Full name
              </label>
              <input
                id="FullName"
                className="block w-full px-4 py-2 text-base-700 bg-white border border-base-300 rounded-md dark:bg-base-800 dark:text-base-300 dark:border-base-600 focus:border-primary-500 dark:focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-300"
                type="text"
                placeholder="Maria Sharapova"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-base-600 dark:text-base-200" htmlFor="EmailAddress">
                Email address
              </label>
              <input
                id="EmailAddress"
                className="block w-full px-4 py-2 text-base-700 bg-white border border-base-300 rounded-md dark:bg-base-800 dark:text-base-300 dark:border-base-600 focus:border-primary-500 dark:focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-300"
                type="email"
                placeholder="maria@example.com"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-base-600 dark:text-base-200" htmlFor="Password">
                  Password
                </label>
              </div>
              <input
                id="Password"
                className="block w-full px-4 py-2 text-base-700 bg-white border border-base-300 rounded-md dark:bg-base-800 dark:text-base-300 dark:border-base-600 focus:border-primary-500 dark:focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-300"
                type="password"
                placeholder="Your password"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-base-600 dark:text-base-200"
                  htmlFor="ConfirmPassword">
                  Confirm password
                </label>
              </div>
              <input
                id="ConfirmPassword"
                className="block w-full px-4 py-2 text-base-700 bg-white border border-base-300 rounded-md dark:bg-base-800 dark:text-base-300 dark:border-base-600 focus:border-primary-500 dark:focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-300"
                type="password"
                placeholder="Confirm your password"
              />
            </div>
            <div className="mt-8">
              <button className="uppercase font-medium w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary-700 rounded-md hover:bg-primary-600 focus:outline-none focus:bg-primary-600">
                Sign up
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-base-600 md:w-1/4" />
              <a href="/login" className="text-xs text-base-500 uppercase dark:text-base-400 hover:underline">
                or login
              </a>
              <span className="w-1/5 border-b dark:border-base-600 md:w-1/4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Signup.title = 'Sign up';

export default Signup;
