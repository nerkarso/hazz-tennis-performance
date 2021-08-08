function Signup() {
  return (
    <div className="flex items-center min-h-screen p-6 bg-base-50 dark:bg-base-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-base-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={
                'https://images.unsplash.com/photo-1542144582-1ba00456b5e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=413&q=80'
              }
              alt="Office"
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="font-bold mb-2 text-primary-500">Hazz Tennis Peformance</h1>
              <h1 className="mb-4 text-2xl font-semibold text-base-700 dark:text-base-200">Create account</h1>
              <label className="block text-sm">
                <span className="text-base-700 dark:text-base-400">Full name</span>
                <input
                  type="text"
                  className="rounded-md block w-full mt-1 text-sm dark:border-base-600 dark:bg-base-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-base-300 dark:focus:shadow-outline-base form-input"
                  placeholder="Maria Sharapova"
                />
              </label>
              <label className="block mt-4 text-sm">
                <span className="text-base-700 dark:text-base-400">Email</span>
                <input
                  type="email"
                  className="rounded-md block w-full mt-1 text-sm dark:border-base-600 dark:bg-base-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-base-300 dark:focus:shadow-outline-base form-input"
                  placeholder="maria@example.com"
                />
              </label>
              <label className="block mt-4 text-sm">
                <span className="text-base-700 dark:text-base-400">Password</span>
                <input
                  className="rounded-md block w-full mt-1 text-sm dark:border-base-600 dark:bg-base-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-base-300 dark:focus:shadow-outline-base form-input"
                  placeholder="***************"
                  type="password"
                />
              </label>
              <label className="block mt-4 text-sm">
                <span className="text-base-700 dark:text-base-400">Confirm password</span>
                <input
                  className="rounded-md block w-full mt-1 text-sm dark:border-base-600 dark:bg-base-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-base-300 dark:focus:shadow-outline-base form-input"
                  placeholder="***************"
                  type="password"
                />
              </label>
              <div className="flex mt-6 text-sm">
                <label className="flex items-center dark:text-base-400">
                  <input
                    type="checkbox"
                    className="text-primary-600 rounded form-checkbox focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:focus:shadow-outline-base"
                  />
                  <span className="ml-2">I agree to the terms of service</span>
                </label>
              </div>
              <a
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary"
                href="/login">
                Create account
              </a>
              <hr className="my-6" />
              <p>
                <a className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline" href="/login">
                  Already have an account? Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Signup.title = 'Sign up';

export default Signup;