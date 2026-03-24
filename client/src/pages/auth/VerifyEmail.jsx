import React from 'react'
import { Link } from 'react-router-dom';

const VerifyEmail = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-dvh bg-gray-100">
                <div className="flex w-full min-h-dvh overflow-hidden shadow-2xl bg-white">

                    {/* Left Panel */}
                    <div className="sm:w-[50%] hidden relative sm:flex flex-col justify-between p-9 overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, #1a0a6e 0%, #2d1fc7 30%, #3a6bdb 60%, #1ecbe1 100%)' }}>

                        {/* Blobs */}
                        <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full opacity-40 blur-3xl"
                            style={{ background: 'rgba(100,120,255,0.5)' }} />
                        <div className="absolute bottom-16 -left-8 w-44 h-44 rounded-full blur-3xl"
                            style={{ background: 'rgba(30,200,230,0.3)' }} />

                        {/* Top Text */}
                        <div className="relative z-10">
                            <p className="text-white/70 text-sm mb-2">Real-time conversations, simplified.</p>
                            <h2 className="text-white text-2xl font-bold leading-snug">
                                Next-generation messaging built <br />for today's connected world.
                            </h2>
                        </div>

                        {/* Partners */}
                        <div className="relative z-10">
                            <p className="text-white/50 text-xs mb-3">Our partners</p>
                            <div className="flex flex-wrap gap-4 items-center">
                                {['Discord', 'Instagram', 'Spotify', 'YouTube', 'TikTok'].map((name) => (
                                    <span key={name} className="text-white/80 text-xs font-semibold">{name}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - OTP */}
                    <div className="sm:w-[50%] w-full flex flex-col justify-center px-14 py-12">

                        {/* Back Button */}
                        <Link 
                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-indigo-600 transition-colors mb-8 w-fit"
                            to={{pathname: "/register"}}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            Back
                        </Link>

                        {/* Icon */}
                        <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6">
                            <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>

                        <h1 className="text-2xl font-bold text-gray-900 mb-1">Check your email</h1>
                        <p className="text-gray-400 text-sm mb-1">
                            We sent a verification code to
                        </p>
                        <p className="text-indigo-600 text-sm font-semibold mb-8">workmail@gmail.com</p>

                        {/* OTP Inputs */}
                        <label className="text-sm font-semibold text-gray-700 mb-3">Enter verification code</label>
                        <div className="flex gap-3 mb-6">
                            {[0, 1, 2, 3, 4, 5].map((i) => (
                                <input
                                    key={i}
                                    type="text"
                                    maxLength={1}
                                    inputMode="numeric"
                                    onInput={(e) => {
                                        const val = e.target.value.replace(/\D/g, '');
                                        e.target.value = val;
                                        if (val && e.target.nextElementSibling) {
                                            e.target.nextElementSibling.focus();
                                        }
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Backspace' && !e.target.value && e.target.previousElementSibling) {
                                            e.target.previousElementSibling.focus();
                                        }
                                    }}
                                    className="w-12 h-12 text-center text-lg font-bold text-gray-800 border border-gray-200 rounded-xl outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                                />
                            ))}
                        </div>

                        {/* Timer */}
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-xs text-gray-400">Code expires in <span className="text-gray-600 font-semibold">04:59</span></p>
                            <button className="text-xs text-indigo-600 font-semibold hover:underline">
                                Resend code
                            </button>
                        </div>

                        {/* Verify Button */}
                        <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-sm transition-colors mb-4">
                            Verify Email
                        </button>

                        <p className="text-center text-sm text-gray-400">
                            Already have an account?{' '}
                            <a href="#" className="text-indigo-600 font-semibold hover:underline">Log in</a>
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
}

export default VerifyEmail