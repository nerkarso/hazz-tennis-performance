import EditUserModal from "@/components/EditUserModal";
import SideBar from "@/components/SideBar";
import { PencilAltIcon, XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

function clients() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-screen bg-base-50 dark:bg-base-900">
      <SideBar />
      <div className="container grid px-6 mx-auto">
        <main>
          <h2 className="my-6 text-2xl font-semibold text-base-700 dark:text-base-200">
            Clients
          </h2>
          {/* New Table */}
          <div className="w-full mb-8 overflow-hidden border rounded-lg shadow-sm">
            <div className="w-full overflow-x-auto">
              <table className="w-full whitespace-no-wrap">
                <thead>
                  <tr className="text-xs font-semibold tracking-wide text-left uppercase border-b text-base-500 dark:border-base-700 bg-base-50 dark:text-base-400 dark:bg-base-800">
                    <th className="px-4 py-3">Client</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-base-700 dark:bg-base-800">
                  {Array.from(Array(3)).map((item, i) => (
                    <tr
                      onClick={() => setIsOpen(true)}
                      key={i}
                      className="text-base-700 dark:text-base-400"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {/* Avatar with inset shadow */}
                          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div className="absolute inset-0 rounded-full shadow-inner" />
                          </div>
                          <div>
                            <p className="font-semibold">Hans Burger</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">c1ient123@email.com</td>
                      <td className="px-4 py-3 text-sm text-right">
                        <button className="px-4 py-2 mr-2 text-white rounded-md bg-primary-400 focus:ring-primary-200 focus:ring-2 focus:ring-offset-2 focus:outline-none">
                          <PencilAltIcon className="w-4 h-4" />
                        </button>
                        <button className="px-4 py-2 text-white rounded-md bg-primary-400 focus:ring-primary-200 focus:ring-2 focus:ring-offset-2 focus:outline-none">
                          <XIcon className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <EditUserModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
}

export default clients;