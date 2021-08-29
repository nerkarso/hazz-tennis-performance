import AccountLayout from '@/components/AccountLayout';
import Link from 'next/link';

ForgotPassword.title = 'Forgot password';

export default function ForgotPassword() {
  return (
    <AccountLayout title="Forgot password">
      <label className="block text-sm">
        <span className="text-base-700 dark:text-base-400">Email</span>
        <input
          type="email"
          className="block w-full mt-1 text-sm rounded-md dark:border-base-600 dark:bg-base-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-base-300 dark:focus:shadow-outline-base form-input"
          placeholder="maria@example.com"
        />
      </label>
      <a
        className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 border border-transparent rounded-lg bg-primary-600 active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary"
        href="/reset-password">
        Reset password
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
