import { LockClosedIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Layout from "../components/layout/Layout";

const SignInPage = () => {
  return (
    <Layout title="Sign in">
      <div className="flex min-h-full items-center justify-center py-10 px-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-3">
            <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your Account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Do you not have an account ?{" "}
              <Link
                href="/sign-up"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Create new Account
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-4" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="grid md:grid-cols-2 md:gap-x-10 gap-y-4">
              <div className="col-span-2 space-y-1">
                <label htmlFor="email-adress" className="text-gray-600">
                  Email
                </label>
                <input
                  id="email-adress"
                  name="email-adress"
                  type="email"
                  required
                  className="border border-slate-300 py-1.5 px-2 w-full rounded-md outline-none focus:ring ring-blue-500 ring-offset-1"
                />
              </div>
              <div className="col-span-2 space-y-1">
                <label htmlFor="password" className="text-gray-600">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="border border-slate-300 py-1.5 px-2 w-full rounded-md outline-none focus:ring ring-blue-500 ring-offset-1"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  href=""
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full mt-8 justify-center transition rounded-md bg-indigo-500 py-2 px-3 font-medium text-white hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-300 group-hover:text-indigo-300" aria-hidden="true" />
                </span>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignInPage;