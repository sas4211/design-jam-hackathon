export default function AuthForm() {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Log In Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Log In</h2>
            <form className="space-y-6">
              {/* Username or Email */}
              <div>
                <label
                  htmlFor="login-username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username or email address
                </label>
                <input
                  type="text"
                  id="login-username"
                  placeholder="Enter your username or email"
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring focus:ring-gray-200 focus:outline-none"
                />
              </div>
  
              {/* Password */}
              <div>
                <label
                  htmlFor="login-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="login-password"
                  placeholder="Enter your password"
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring focus:ring-gray-200 focus:outline-none"
                />
              </div>
  
              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="h-4 w-4 text-black border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
  
              {/* Buttons */}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800"
                >
                  Log In
                </button>
                <a
                  href="#"
                  className="text-sm text-gray-700 hover:underline"
                >
                  Lost Your Password?
                </a>
              </div>
            </form>
          </div>
  
          {/* Register Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <form className="space-y-6">
              {/* Email Address */}
              <div>
                <label
                  htmlFor="register-email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="register-email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring focus:ring-gray-200 focus:outline-none"
                />
              </div>
  
              {/* Information */}
              <p className="text-sm text-gray-600">
                A link to set a new password will be sent to your email address.
                <br />
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and for
                other purposes described in our{" "}
                <a href="#" className="text-black underline">
                  privacy policy
                </a>
                .
              </p>
  
              {/* Register Button */}
              <div>
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  