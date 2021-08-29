export default function Button({ children, variant, ...props }) {
  return (
    <button
      className={[
        'inline-flex items-center justify-center h-10 px-2 text-sm font-medium transition duration-150 rounded-md focus:outline-none',
        variant === 'primary' && 'bg-primary-600 text-white hover:bg-primary-500 focus:bg-primary-700',
      ]
        .join(' ')
        .trim()}
      {...props}>
      {children}
    </button>
  );
}
