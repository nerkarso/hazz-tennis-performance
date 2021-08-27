import EditCoachModal from '@/components/EditCoachModal';
import NewCoachModal from '@/components/NewCoachModal';
import SideBar from '@/components/SideBar';
import ViewTotalHoursModal from '@/components/ViewTotalHoursModal';
import { DocumentReportIcon, PencilAltIcon, XIcon } from '@heroicons/react/outline';
import { useState } from 'react';

export default function Coaches() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isTHrsOpen, setIsTHrsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-base-50 dark:bg-base-900">
      <SideBar />
      <div className="container grid px-6 mx-auto">
        <main>
          <h2 className="my-6 text-2xl font-semibold text-base-700 dark:text-base-200">Coaches</h2>
          {/* New Table */}
          <div className="w-full mb-8 overflow-hidden border rounded-lg shadow-sm">
            <div className="w-full overflow-x-auto">
              <table className="w-full whitespace-no-wrap">
                <thead>
                  <tr className="text-xs font-semibold tracking-wide text-left uppercase border-b text-base-500 dark:border-base-700 bg-base-50 dark:text-base-400 dark:bg-base-800">
                    <th className="px-4 py-3">Coach</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-base-700 dark:bg-base-800">
                  {Array.from(Array(3)).map((item, i) => (
                    <tr key={i} className="text-base-700 dark:text-base-400">
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
                      <td className="px-4 py-3 text-sm">coach123@email.com</td>
                      <td className="px-4 py-3 text-sm text-right">
                        <button
                          onClick={() => setIsEditOpen(true)}
                          className="px-4 py-2 mr-2 text-white rounded-md bg-primary-400 focus:ring-primary-200 focus:ring-2 focus:ring-offset-2 focus:outline-none">
                          <PencilAltIcon className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setIsTHrsOpen(true)}
                          className="px-4 py-2 mr-2 text-white rounded-md bg-primary-400 focus:ring-primary-200 focus:ring-2 focus:ring-offset-2 focus:outline-none">
                          <DocumentReportIcon className="w-4 h-4" />
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
          <div className="">
            <button onClick={() => setIsCreateOpen(true)} className="px-4 py-2 text-left text-white rounded-md bg-primary-600">
              Create New Coach User
            </button>
          </div>
          <EditCoachModal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} />
          <NewCoachModal title="Create New Coach" isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
          <ViewTotalHoursModal isOpen={isTHrsOpen} onClose={() => setIsTHrsOpen(false)} />
        </main>
      </div>
    </div>
  );
}
