export default function AccountLayout({ children, title }) {
  return (
    <div className="flex items-center min-h-screen p-6 bg-neutral-50 dark:bg-neutral-900 dark:text-white">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-neutral-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=413&q=80"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h4 className="mb-2 font-bold text-primary-600 dark:text-primary-500">{process.env.NEXT_PUBLIC_SITE_TITLE}</h4>
              <h1 className="mb-4 text-2xl font-bold">{title}</h1>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
