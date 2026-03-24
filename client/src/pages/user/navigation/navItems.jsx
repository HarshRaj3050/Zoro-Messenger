export const navItems = [
  { label: 'All', active: true },
  { label: 'Assigned to Me' },
  { label: 'AI Chat' },
  { label: 'Live Chat' },
  { label: 'Blocked', badge: 'PRO' },
  { label: 'Trash' },
]

export const NavIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
)

export const LogoIcon = () => (
  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

export const NavList = ({ onItemClick }) => (
  <nav className="flex flex-col gap-1">
    {navItems.map(({ label, active, badge }) => (
      <button
        key={label}
        onClick={() => onItemClick?.()}
        className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
          active
            ? 'bg-indigo-600 text-white font-semibold'
            : 'text-gray-400 hover:text-white hover:bg-white/10'
        }`}
      >
        <div className="flex items-center gap-2">
          <NavIcon />
          {label}
        </div>
        {badge && (
          <span className="text-[10px] bg-indigo-500 text-white px-1.5 py-0.5 rounded font-bold">
            {badge}
          </span>
        )}
      </button>
    ))}
  </nav>
)
