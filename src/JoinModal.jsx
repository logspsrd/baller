import { useEffect } from 'react';


const JoinModal = ({ onClose }) => {

    useEffect(() => {
        document.body.style.overflow = "hidden"

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])

    return (

        <>
        <div 
                className="fixed inset-0 bg-black/75 bg-opacity-50 z-10"
                onClick={onClose}/>

        
            <div className="h-[550px] w-[550px] bg-white flex flex-col fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[35px] z-10 shadow-lg p-8">

                <h2 className="text-[32px] font-bold text-center mb-8">Create your account</h2>
                <form className="flex flex-col gap-5 px-6">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                    />
                    
                    <button
                        type="submit"
                        onClick={onClose}
                        className="bg-black text-white rounded-lg py-3 font-semibold hover:bg-gray-900 transition-all duration-500 cursor-pointer"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-6">
                    Already a member?{" "}
                    <a className="text-black font-medium hover:underline cursor-pointer">
                        Log in
                    </a>
                </p>
            </div>
        </>
    );
};

export default JoinModal;