import BookingsModal from '@/components/BookingsModal';
import SideBar from '@/components/SideBar';
import { useState } from 'react';

export default function Payments() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-base-50 dark:bg-base-900">
      <SideBar />
      <div className="container grid px-6 mx-auto">
        <main>
          <h2 className="my-6 text-2xl font-semibold text-base-700 dark:text-base-200">Payments</h2>
          {/* New Table */}
          <div className="w-full mb-8 overflow-hidden border rounded-lg shadow-sm">
            <div className="w-full overflow-x-auto">
              <table className="w-full whitespace-no-wrap">
                <thead>
                  <tr className="text-xs font-semibold tracking-wide text-left uppercase border-b text-base-500 dark:border-base-700 bg-base-50 dark:text-base-400 dark:bg-base-800">
                    <th className="px-4 py-3">Client</th>
                    <th className="px-4 py-3">Amount</th>
                    <th className="px-4 py-3">Payment Status</th>
                    <th className="px-4 py-3">Date</th>
                  </tr>
                </thead>
                <BookingsModal title="Confirm Payment" payment={true} isOpen={isOpen} onClose={() => setIsOpen(false)} />
                <tbody className="bg-white divide-y dark:divide-base-700 dark:bg-base-800">
                  {Array.from(Array(3)).map((item, i) => (
                    <tr key={i} onClick={() => setIsOpen(true)} className="hover:bg-primary-200 text-base-700 dark:text-base-400">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {/* Avatar with inset shadow */}
                          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
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
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">Paid</span>
                      </td>
                      <td className="px-4 py-3 text-sm">6/10/2020</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
