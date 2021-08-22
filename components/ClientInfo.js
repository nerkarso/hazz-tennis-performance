import React from 'react'

function ClientInfo() {
  return (
    <div className="flex items-center mb-6">
    <img
      className="object-cover w-10 h-10 rounded-full"
      src={
        "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
      }
    />
    <span className="ml-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
      Client Name
    </span>
  </div>

  )
}

export default ClientInfo
