import { Button } from "@/components/ui/button";
import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className="w-full max-w-md bg-slate-800 m-auto p-8 rounded-lg">
      <h1 className="text-3xl text-white text-center mb-6">
        Log in or Sign Up
      </h1>
      <form className="flex flex-col space-y-4">
        <div>
          <label htmlFor="email" className="text-sm text-gray-300">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full p-2 rounded mt-1 text-gray-900"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm text-gray-300">
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full p-2 rounded mt-1 text-gray-900"
          />
        </div>
        <div className="flex justify-between mt-4">
          <Button
            formAction={login}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log In
          </Button>
          <Button
            formAction={signup}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}
