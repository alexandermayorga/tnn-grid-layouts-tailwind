const WelcomeScreen = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-2xl font-bold">Welcome to TaskList Pro</h1>
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block font-bold text-gray-700">
            Enter your email address to get started
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="name@yourcompany.com"
          />
        </div>
        <button className="mb-4 w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Continue with Email
        </button>
        <p className="mb-4 text-center text-gray-600">OR</p>
        <button className="mb-4 w-full rounded border border-gray-400 bg-white px-4 py-2 font-bold text-gray-800 hover:bg-gray-100">
          Continue with Google
        </button>
        <button className="w-full rounded bg-black px-4 py-2 font-bold text-white hover:bg-gray-800">
          Continue with Apple
        </button>
        <p className="mt-6 text-center text-blue-500">
          <a href="#" className="hover:underline">
            Already have an account? Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
