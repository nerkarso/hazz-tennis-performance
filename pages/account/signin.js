import AccountLayout from '@/components/AccountLayout';
import Link from 'next/link';

SignIn.title = 'Sign in';

export default function SignIn() {
  return (
    <AccountLayout title="Welcome back">
      <form>
        <label className="block text-sm">
          <span className="text-base-700 dark:text-base-400">Email</span>
          <input
            type="email"
            className="block w-full mt-1 text-sm rounded-md dark:border-base-600 dark:bg-base-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-base-300 dark:focus:shadow-outline-base form-input"
            placeholder="maria@example.com"
          />
        </label>
        <label className="block mt-4 text-sm">
          <span className="text-base-700 dark:text-base-400">Password</span>
          <input
            type="password"
            className="block w-full mt-1 text-sm rounded-md dark:border-base-600 dark:bg-base-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-base-300 dark:focus:shadow-outline-base form-input"
            placeholder="**************"
          />
        </label>
        <a className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 border border-transparent rounded-lg bg-primary-600 active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary">
          Sign in
        </a>
        <hr className="my-6 dark:border-neutral-600" />
        <p className="mb-1">
          <Link href="/account/forgot-password" passHref>
            <a className="text-sm link">Forgot your password?</a>
          </Link>
        </p>
        <p>
          <Link href="/account/signup" passHref>
            <a className="text-sm link">Create account</a>
          </Link>
        </p>
      </form>
    </AccountLayout>
  );
}
