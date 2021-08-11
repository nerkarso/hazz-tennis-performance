import {
  AnnotationIcon,
  ChatAlt2Icon,
  ClipboardListIcon,
  CreditCardIcon,
  HomeIcon,
  UserGroupIcon,
  UsersIcon
} from "@heroicons/react/outline";
function Dashboard() {
  return (
    <div className="flex h-screen bg-base-50 dark:bg-base-900">
      <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-base-800 md:block flex-shrink-0 border-r">
        <div className="py-4 text-base-500 dark:text-base-400">
          <a
            className="ml-5 text-lg font-bold text-base-800 dark:text-base-200"
            href="/dashboard"
          >
            Hazz Tennis
          </a>
          {/* <div className="px-5 my-4">
            <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary shadow">
              Book appointment
            </button>
          </div> */ }
          <ul className="my-4">
            <li className="relative px-5 py-3">
              <span className="absolute inset-y-0 left-0 w-1 bg-primary-600 rounded-tr-lg rounded-br-lg" />
              <a
                className="flex items-center w-full text-sm font-semibold text-base-800 transition-colors duration-150 hover:text-base-800 dark:hover:text-base-200 dark:text-base-100"
                href="/"
              >
                <HomeIcon className="w-5 h-5" />
                <span className="ml-4">Dashboard</span>
              </a>
            </li>
            <li className="relative px-5 py-3">
              <a
                className="flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-base-800 dark:hover:text-base-200"
                href="forms.html"
              >
                <ClipboardListIcon className="w-5 h-5" />
                <span className="ml-4">Bookings</span>
              </a>
            </li>
            <li className="relative px-5 py-3">
              <a
                className="flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-base-800 dark:hover:text-base-200"
                href="cards.html"
              >
                <UsersIcon className="w-5 h-5" />
                <span className="ml-4">Coaches</span>
              </a>
            </li>
            <li className="relative px-5 py-3">
              <a
                className="flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-base-800 dark:hover:text-base-200"
                href="cards.html"
              >
                <UserGroupIcon className="w-5 h-5" />
                <span className="ml-4">Clients</span>
              </a>
            </li>
            <li className="relative px-5 py-3">
              <a
                className="flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-base-800 dark:hover:text-base-200"
                href="modals.html"
              >
                <AnnotationIcon className="w-5 h-5" />
                <span className="ml-4">Feedback</span>
              </a>
            </li>
            <li className="relative px-5 py-3">
              <a
                className="flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-base-800 dark:hover:text-base-200"
                href="charts.html"
              >
                <CreditCardIcon className="w-5 h-5" />
                <span className="ml-4">Payments</span>
              </a>
            </li>
            <li className="relative px-5 py-3">
              <a
                className="flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-base-800 dark:hover:text-base-200"
                href="charts.html"
              >
                <ChatAlt2Icon className="w-5 h-5" />
                <span className="ml-4">Messaging</span>
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
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
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
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
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
                      "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                    }
                  />
                </button>
              </li>
            </ul>
          </div>
        </header>
        <main className="h-full overflow-y-auto">
          <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-base-700 dark:text-base-200">
              Recent bookings
            </h2>
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

                    {Array.from(Array(3)).map((item, i) => (
                      <tr key={i} onClick={handleClick} className="text-base-700 dark:text-base-400">
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
                    ))}
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

Dashboard.title = "Dashboard";

export default Dashboard;
