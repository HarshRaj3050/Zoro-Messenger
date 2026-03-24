import React from 'react'
import SideNav from './SideNav';
import MainNavDesktop from '../navigation/MainNavDesktop'
import MainNavMobile from '../navigation/MainNavMobile'

const Home = () => {
  return (
  <>
    <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">

      {/* Sidebar */}
      <div className="md:w-48 w-0 shrink-0 flex flex-col justify-between md:py-5 md:px-3"
        style={{ background: '#1a1a2e' }}>

        {/* Logo */}
        <div>
          <div className="flex items-center gap-2 mb-8 px-2">
            <span className="text-white font-bold text-base">Zoro Messenger</span>
          </div>

          {/* Nav */}
          <MainNavDesktop />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">

        {/* Top Nav */}
        <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100 shadow-sm">
          <MainNavMobile />
          <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
            
            {['Chat', 'Contacts', 'Templates', 'My Projects'].map((tab) => (
              <button key={tab}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${tab === 'Chat' ? 'bg-gray-900 text-white shadow' : 'text-gray-500 hover:text-gray-700'}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <img src="https://i.pravatar.cc/32?img=47" className="w-8 h-8 rounded-full object-cover" alt="user" />
              <span className="text-sm font-semibold text-gray-700">Ashly Boldwin</span>
            </div>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* 3-Column Body */}
        <div className="flex flex-1 overflow-hidden">

          {/* Conversation List */}
            <SideNav/>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col bg-gray-50">
            {/* Chat Header */}
            <div className="px-5 py-3 bg-white border-b border-gray-100 flex items-center gap-3">
              <img src="https://i.pravatar.cc/36?img=47" className="w-9 h-9 rounded-full" alt="Mary" />
              <div>
                <p className="text-sm font-bold text-gray-800">Mary Franci</p>
                <p className="text-xs text-gray-400">+(1) 234-543-4321</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">

              {/* Received */}
              <div className="flex items-end gap-2">
                <img src="https://i.pravatar.cc/28?img=47" className="w-7 h-7 rounded-full shrink-0" alt="" />
                <div>
                  <p className="text-[10px] text-gray-400 mb-1">Mary Franci &nbsp; 12:38</p>
                  <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm text-gray-700 shadow-sm max-w-xs">
                    Can I try the software first?
                  </div>
                </div>
              </div>

              {/* Sent */}
              <div className="flex flex-col items-end gap-1">
                <p className="text-[10px] text-gray-400 flex items-center gap-1">
                  12:38
                  <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  via SMS
                </p>
                <div className="bg-indigo-500 rounded-2xl rounded-br-sm px-4 py-2.5 text-sm text-white shadow-sm max-w-xs">
                  Sure. Here is the demo unit. You can use it as long as you want.
                </div>
              </div>

              {/* Received */}
              <div className="flex items-end gap-2">
                <img src="https://i.pravatar.cc/28?img=47" className="w-7 h-7 rounded-full shrink-0" alt="" />
                <div>
                  <p className="text-[10px] text-gray-400 mb-1">Mary Franci &nbsp; 12:38</p>
                  <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm text-gray-700 shadow-sm max-w-xs">
                    Thank you. Now I want to buy the software. Which type of subscription do you have?
                  </div>
                </div>
              </div>

              {/* Sent with attachment */}
              <div className="flex flex-col items-end gap-1">
                <p className="text-[10px] text-gray-400 flex items-center gap-1">
                  12:38
                  <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  via SMS
                </p>
                <div className="bg-indigo-500 rounded-2xl rounded-br-sm px-4 py-2.5 text-sm text-white shadow-sm max-w-xs">
                  We have many type of subscription in this presentations. Please look at this showcase.
                  <div className="flex items-center gap-2 mt-2 bg-indigo-400 rounded-xl px-3 py-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    <div>
                      <p className="text-white text-xs font-semibold">Presentation.pdf</p>
                      <p className="text-indigo-200 text-[10px]">234 mb</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Received */}
              <div className="flex items-end gap-2">
                <img src="https://i.pravatar.cc/28?img=47" className="w-7 h-7 rounded-full shrink-0" alt="" />
                <div>
                  <p className="text-[10px] text-gray-400 mb-1">Mary Franci &nbsp; 12:39</p>
                  <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm text-gray-700 shadow-sm max-w-xs">
                    Thanks. I will watch it later!
                  </div>
                </div>
              </div>

              {/* Sent */}
              <div className="flex flex-col items-end gap-1">
                <div className="bg-indigo-500 rounded-2xl rounded-br-sm px-4 py-2.5 text-sm text-white shadow-sm max-w-xs">
                  You are welcome!
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="px-5 py-3 bg-white border-t border-gray-100 flex items-center gap-3">
              <button className="text-gray-400 hover:text-indigo-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>
              <button className="text-gray-400 hover:text-indigo-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>
              <input
                placeholder="You are welcome!"
                className="flex-1 text-sm text-gray-600 outline-none placeholder-gray-400 bg-transparent"
              />
              <button className="w-9 h-9 rounded-full bg-indigo-500 hover:bg-indigo-600 flex items-center justify-center text-white transition-colors shadow">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
}

export default Home