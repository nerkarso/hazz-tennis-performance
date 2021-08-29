import AccountLayout from '@/components/AccountLayout';
import Link from 'next/link';

SignUp.title = 'Sign up';

export default function SignUp() {
  return (
    <AccountLayout title="Create account">
      <label className="block text-sm">
        <span className="text-base-700 dark:text-base-400">Full name</span>
        <input
          type="text"
          className="block w-full mt-1 text-sm rounded-md dark:border-base-600 dark:bg-base-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-base-300 dark:focus:shadow-outline-base form-input"
          placeholder="Maria Sharapova"
        />
      </label>
      <label className="block mt-4 text-sm">
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
          className="block w-full mt-1 text-sm rounded-md dark:border-base-600 dark:bg-base-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-base-300 dark:focus:shadow-outline-base form-input"
          placeholder="***************"
          type="password"
        />
      </label>
      <label className="block mt-4 text-sm">
        <span className="text-base-700 dark:text-base-400">Confirm password</span>
        <input
          className="block w-full mt-1 text-sm rounded-md dark:border-base-600 dark:bg-base-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-base-300 dark:focus:shadow-outline-base form-input"
          placeholder="***************"
          type="password"
        />
      </label>
      <div className="flex mt-6 text-sm">
        <label className="flex items-center dark:text-base-400">
          <input type="checkbox" className="rounded text-primary-600 form-checkbox focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:focus:shadow-outline-base" />
          <span className="ml-2">I agree to the terms of service</span>
        </label>
      </div>
      <a className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 border border-transparent rounded-lg bg-primary-600 active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary">
        Create account
      </a>
      <hr className="my-6 dark:border-neutral-600" />
      <p>
        <Link href="/account/signin">
          <a className="text-sm link">Back to Sign in</a>
        </Link>
      </p>
    </AccountLayout>
  );
}
