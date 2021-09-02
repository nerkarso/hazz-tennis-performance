import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-initials-sprites';
import cx from 'classnames';

export default function Avatar({ className, initials, size, src }) {
  const svg = createAvatar(style, {
    seed: initials || '',
    dataUri: true,
  });

  return (
    <div
      className={cx(
        'flex-shrink-0 rounded-full overflow-hidden',
        {
          'w-4 h-4': size === 'xs',
          'w-6 h-6': size === 'sm',
          'w-8 h-8': size === 'md',
          'w-10 h-10': size === 'lg',
          'w-12 h-12': size === 'xl',
          'w-14 h-14': size === '2xl',
          'w-16 h-16': size === '3xl',
          'w-20 h-20': size === '4xl',
          'w-24 h-24': size === '5xl',
        },
        className,
      )}>
      <img src={src ? src : svg} className="object-cover w-full h-full text" alt="" />
    </div>
  );
}
