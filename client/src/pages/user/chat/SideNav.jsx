import React from 'react'

const SideNav = () => {
  return (
    <div className="w-64 shrink-0 bg-white border-r border-gray-100 flex flex-col">
            {/* Search */}
            <div className="p-3 border-b border-gray-100">
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                </svg>
                <input placeholder="Search" className="bg-transparent text-sm text-gray-500 outline-none w-full placeholder-gray-400" />
              </div>
            </div>

            {/* Contacts */}
            <div className="overflow-y-auto flex-1">
              {[
                { name: 'Aspen Workman', phone: '+(1) 234-543-4321', avatar: '10' },
                { name: 'Rhiel Madsen', phone: '+(1) 234-543-4321', avatar: '20', active: true },
                { name: 'Carla Dokidis', phone: '+(1) 234-543-4321', avatar: '30' },
                { name: 'Maria Vetrovs', phone: '+(1) 234-543-4321', avatar: '40' },
                { name: 'Mary Franci', phone: '+(1) 234-543-4321', avatar: '47' },
                { name: 'Omar Vetrovs', phone: '+(1) 234-543-4321', avatar: '50' },
                { name: 'Marcus Bergson', phone: '+(1) 234-543-4321', avatar: '60' },
              ].map(({ name, phone, avatar, active }) => (
                <div key={name}
                  className={`flex items-start gap-3 px-3 py-3 cursor-pointer border-b border-gray-50 hover:bg-gray-50 transition-colors ${active ? 'bg-indigo-50 border-l-2 border-l-indigo-500' : ''}`}>
                  <img src={`https://i.pravatar.cc/36?img=${avatar}`} className="w-9 h-9 rounded-full object-cover shrink-0 mt-0.5" alt={name} />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="text-xs font-semibold text-gray-800 truncate">{name}</span>
                    </div>
                    <p className="text-[10px] text-gray-400 mb-0.5">{phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  )
}

export default SideNav