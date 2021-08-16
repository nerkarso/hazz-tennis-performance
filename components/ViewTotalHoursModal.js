import React from "react";

function ViewTotalHours() {
  return (
    <div className="container px-6 mx-auto grid">
      <h2 className="my-6 text-2xl font-semibold text-base-700 dark:text-base-200">
        Total Coaching Hours
      </h2>
      {/* New Table */}
      <div className="w-full overflow-hidden rounded-lg mb-8 border shadow-sm">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left   text-base-500 uppercase border-b dark:border-base-700 bg-base-50 dark:text-base-400 dark:bg-base-800">
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Coach</th>
                <th className="px-4 py-3">Total Hrs</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-base-700 dark:bg-base-800">
              {Array.from(Array(3)).map((item, i) => (
                <tr
                  key={i}
                  className="text-base-700   dark:text-base-400"
                >
                  <td className="px-4 py-3 text-sm">12/08/2021</td>
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
                  <td className="px-4 py-3 text-sm">
                    28
                  </td>
                  
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewTotalHours;
