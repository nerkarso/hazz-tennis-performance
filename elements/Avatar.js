export default function Avatar({ className, size, src }) {
  return (
    <div
      className={[
        'rounded-full overflow-hidden',
        size === 'xs' && 'w-4 h-4',
        size === 'sm' && 'w-6 h-6',
        size === 'md' && 'w-8 h-8',
        size === 'lg' && 'w-10 h-10',
        size === 'xl' && 'w-12 h-12',
        size === '2xl' && 'w-14 h-14',
        size === '3xl' && 'w-16 h-16',
        className,
      ]
        .join(' ')
        .trim()}>
      <img src={src} className="object-cover w-full h-full text" alt="" />
    </div>
  );
}
