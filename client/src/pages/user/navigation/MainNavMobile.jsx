import React, { useState } from 'react'
import { NavList } from './navItems.jsx'

const MainNavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* ── Hamburger button ── */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
      >
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* ── Backdrop ── */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ── Drawer ── */}
      <div
        className={`fixed top-0 left-0 h-full z-50 w-64 flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ background: '#1a1a2e' }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-base">Zoro Messenger</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav Items */}
        <div className="px-3 py-4 flex-1 overflow-y-auto">
          <NavList onItemClick={() => setIsOpen(false)} />
        </div>
      </div>
    </>
  )
}

export default MainNavMobile