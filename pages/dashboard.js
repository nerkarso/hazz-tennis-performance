function Dashboard() {
  return (
    <div className="flex h-screen bg-base-50 dark:bg-base-900">
      <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-base-800 md:block flex-shrink-0 border-r">
        <div className="py-4 text-base-500 dark:text-base-400">
          <a className="ml-5 text-lg font-bold text-base-800 dark:text-base-200" href="/dashboard">
            Hazz Tennis
          </a>
          <div className="px-5 my-4">
            <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary shadow">
              Book appointment
            </button>
          </div>
          <ul>
            <li className="relative px-5 py-3">
              <span className="absolute inset-y-0 left-0 w-1 bg-primary-600 rounded-tr-lg rounded-br-lg" />
              <a
                className="flex items-center w-full text-sm font-semibold text-base-800 transition-colors duration-150 hover:text-base-800 dark:hover:text-base-200 dark:text-base-100"
                href="/">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="ml-4">Dashboard</span>
              </a>
            </li>
            <li className="relative px-5 py-3">
              <a
                className="flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-base-800 dark:hover:text-base-200"
                href="forms.html">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <span className="ml-4">Bookings</span>
              </a>
            </li>
            <li className="relative px-5 py-3">
              <a
                className="flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-base-800 dark:hover:text-base-200"
                href="cards.html">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="ml-4">Coaches</span>
              </a>
            </li>
            <li className="relative px-5 py-3">
              <a
                className="flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-base-800 dark:hover:text-base-200"
                href="modals.html">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="ml-4">Schedules</span>
              </a>
            </li>
            <li className="relative px-5 py-3">
              <a
                className="flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-base-800 dark:hover:text-base-200"
                href="charts.html">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
                <span className="ml-4">Payments</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="flex flex-col flex-1 w-full">
        <header className="z-10 py-4 bg-white border-b dark:bg-base-800">
          <div className="container flex items-center justify-between h-full px-6 mx-auto text-primary-600 dark:text-primary-300">
            {/* Search input */}
            <div className="flex justify-center flex-1 lg:mr-32">
              <div className="relative w-full max-w-xl mr-6 focus-within:text-primary-500">
                <div className="absolute inset-y-0 flex items-center pl-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  className="w-full pl-8 pr-2 text-sm text-base-700 placeholder-base-600 bg-base-100 border-0 rounded-md dark:placeholder-base-500 dark:focus:shadow-outline-base dark:focus:placeholder-base-600 dark:bg-base-700 dark:text-base-200 focus:placeholder-base-500 focus:bg-white focus:border-primary-300 focus:outline-none focus:shadow-outline-primary form-input"
                  type="text"
                  placeholder="Search for bookings"
                />
              </div>
            </div>
            <ul className="flex items-center flex-shrink-0 space-x-6">
              <li className="relative">
                <button className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-primary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                  <span className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-base-800" />
                </button>
              </li>
              <li className="relative">
                <button className="align-middle rounded-full focus:shadow-outline-primary focus:outline-none">
                  <img
                    className="object-cover w-8 h-8 rounded-full"
                    src={
                      'https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82'
                    }
                  />
                </button>
              </li>
            </ul>
          </div>
        </header>
        <main className="h-full overflow-y-auto">
          <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-base-700 dark:text-base-200">Overview</h2>
            {/* Cards */}
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              {/* Card */}
              <div className="flex items-center border shadow-sm p-4 bg-white rounded-lg dark:bg-base-800">
                <div className="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-base-600 dark:text-base-400">Total clients</p>
                  <p className="text-lg font-semibold text-base-700 dark:text-base-200">6389</p>
                </div>
              </div>
              {/* Card */}
              <div className="flex items-center p-4 bg-white rounded-lg border shadow-sm dark:bg-base-800">
                <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-base-600 dark:text-base-400">Account balance</p>
                  <p className="text-lg font-semibold text-base-700 dark:text-base-200">$ 46,760.89</p>
                </div>
              </div>
              {/* Card */}
              <div className="flex items-center p-4 bg-white rounded-lg border shadow-sm dark:bg-base-800">
                <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-base-600 dark:text-base-400">New bookings</p>
                  <p className="text-lg font-semibold text-base-700 dark:text-base-200">376</p>
                </div>
              </div>
              {/* Card */}
              <div className="flex items-center p-4 bg-white rounded-lg border shadow-sm dark:bg-base-800">
                <div className="p-3 mr-4 text-red-500 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-base-600 dark:text-base-400">Pending bookings</p>
                  <p className="text-lg font-semibold text-base-700 dark:text-base-200">35</p>
                </div>
              </div>
            </div>
            <h2 className="my-6 text-2xl font-semibold text-base-700 dark:text-base-200">Recent bookings</h2>
            {/* New Table */}
            <div className="w-full overflow-hidden rounded-lg mb-8 border shadow-sm">
              <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-base-500 uppercase border-b dark:border-base-700 bg-base-50 dark:text-base-400 dark:bg-base-800">
                      <th className="px-4 py-3">Client</th>
                      <th className="px-4 py-3">Amount</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y dark:divide-base-700 dark:bg-base-800">
                    <tr className="text-base-700 dark:text-base-400">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {/* Avatar with inset shadow */}
                          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt
                              loading="lazy"
                            />
                            <div className="absolute inset-0 rounded-full shadow-inner" />
                          </div>
                          <div>
                            <p className="font-semibold">Hans Burger</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$ 863.45</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                          Approved
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">6/10/2020</td>
                    </tr>
                    <tr className="text-base-700 dark:text-base-400">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {/* Avatar with inset shadow */}
                          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
                              alt
                              loading="lazy"
                            />
                            <div className="absolute inset-0 rounded-full shadow-inner" />
                          </div>
                          <div>
                            <p className="font-semibold">Jolina Angelie</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$ 369.95</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">
                          Pending
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">6/10/2020</td>
                    </tr>
                    <tr className="text-base-700 dark:text-base-400">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {/* Avatar with inset shadow */}
                          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt
                              loading="lazy"
                            />
                            <div className="absolute inset-0 rounded-full shadow-inner" />
                          </div>
                          <div>
                            <p className="font-semibold">Sarah Curry</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$ 86.00</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                          Denied
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">6/10/2020</td>
                    </tr>
                    <tr className="text-base-700 dark:text-base-400">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {/* Avatar with inset shadow */}
                          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt
                              loading="lazy"
                            />
                            <div className="absolute inset-0 rounded-full shadow-inner" />
                          </div>
                          <div>
                            <p className="font-semibold">Rulia Joberts</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$ 1276.45</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                          Approved
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">6/10/2020</td>
                    </tr>
                    <tr className="text-base-700 dark:text-base-400">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {/* Avatar with inset shadow */}
                          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt
                              loading="lazy"
                            />
                            <div className="absolute inset-0 rounded-full shadow-inner" />
                          </div>
                          <div>
                            <p className="font-semibold">Wenzel Dashington</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$ 863.45</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-base-700 bg-base-100 rounded-full dark:text-base-100 dark:bg-base-700">
                          Expired
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">6/10/2020</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

Dashboard.title = 'Dashboard';

export default Dashboard;
