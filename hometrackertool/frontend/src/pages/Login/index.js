import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div
            className="w-full p-6 m-auto bg-white border-t border-purple-600 rounded shadow-lg shadow-purple-800/50 lg:max-w-md">
            <h1 className="text-2xl font-semibold text-center text-purple-700">Home Tracker Tool</h1>

            <form className="mt-6">
                <div>
                    <label for="user" className="block text-sm text-gray-800">Username</label>
                    <input type="text"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
                <div className="mt-4">
                    <div>
                        <label for="password" className="block text-sm text-gray-800">Password</label>
                        <input type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <Link to="#" className="text-xs text-gray-600 hover:underline">Forget Password?</Link>
                    <div className="mt-6">
                        <button
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </div>
            </form>
            <p className="mt-8 text-xs font-light text-center text-gray-700"> Don't have an account? <Link to="#"
            className="font-medium text-purple-600 hover:underline">Sign up</Link></p>
        </div>
    </div>
    </>
  )
}