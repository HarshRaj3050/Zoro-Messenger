import React, { useState } from 'react'

const Register = () => {

    const [registerData, setRegisterData] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    })

    const inputHandleChange = (e)=>{
        setRegisterData({...registerData, [e.target.name]: e.target.value})
    }

    function print(){
        console.log(registerData);
    }


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
                                Next-generation messaging built <br />for today’s connected world.
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

                    {/* Right Panel */}
                    <div className="sm:w-[50%] w- flex flex-col justify-center px-14 py-12">
                        <h1 className="text-2xl font-bold text-gray-900 mb-1">Get Started Now</h1>
                        <p className="text-gray-400 text-sm mb-7">Please register to your account to continue.</p>

                        {/* Name */}
                        <label className="text-sm font-semibold text-gray-700 mb-1.5">Name</label>
                        <input
                            placeholder="Enter your name..."
                            name='name'
                            onChange={inputHandleChange}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 placeholder-gray-300 outline-none focus:border-indigo-500 mb-4"
                        />

                        {/* Username */}
                        <label className="text-sm font-semibold text-gray-700 mb-1.5">Username</label>
                        <input
                            placeholder="Enter your username..."
                            name='username'
                            onChange={inputHandleChange}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 placeholder-gray-300 outline-none focus:border-indigo-500 mb-4"
                        />

                        {/* Email */}
                        <label className="text-sm font-semibold text-gray-700 mb-1.5">Email address</label>
                        <input
                            placeholder='Enter your email...'
                            name='email'
                            onChange={inputHandleChange}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 placeholder-gray-300 outline-none focus:border-indigo-500 mb-4"
                        />

                        {/* Password */}
                        <div className="flex justify-between items-center mb-1.5">
                            <label className="text-sm font-semibold text-gray-700">Password</label>
                            <a href="#" className="text-xs text-indigo-600 font-semibold hover:underline">Forgot Password?</a>
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="password"
                                name='password'
                                placeholder='Enter your password...'
                                onChange={inputHandleChange}
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 placeholder-gray-300 outline-none focus:border-indigo-500 mb-4"
                            />
                            <span className="absolute right-3 top-1/3 -translate-y-1/2 text-gray-400 cursor-pointer text-base">👁</span>
                        </div>

                        {/* Terms */}
                        <div className="flex items-center gap-2 mb-5">
                            <input type="checkbox" id="terms" className="accent-indigo-600 w-3.5 h-3.5" />
                            <label htmlFor="terms" className="text-xs text-gray-500">
                                I agree to the Terms &amp; Privacy
                            </label>
                        </div>

                        {/* Login Button */}
                        <button 
                            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-sm transition-colors mb-4">
                            Register Your Account
                        </button>

                        <p className="text-center text-sm text-gray-400 mb-4" onClick={print}>
                            Already have an account?{' '}
                            <a href="#" className="text-indigo-600 font-semibold hover:underline">Log in</a>
                        </p>

                        
                
                    </div>

                </div>
            </div>
        </>
    );
}

export default Register