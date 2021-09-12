import { StarIcon } from '@heroicons/react/solid';
import cx from 'classnames';
import { useState } from 'react';

export default function StarRating({ onChange, value, ...props }) {
  const [rating, setRating] = useState(value);

  const changeRating = (newRating) => {
    setRating(newRating);
    onChange?.(newRating);
  };

  return (
    <div className="inline-grid grid-flow-col">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star onClick={() => changeRating(value)} filled={value <= rating} key={value} {...props} />
      ))}
    </div>
  );
}

function Star({ disabled, filled, onClick, size = 'md' }) {
  return (
    <StarIcon
      onClick={disabled ? () => null : onClick}
      className={cx('transition duration-200', {
        'cursor-pointer hover:scale-110': !disabled,
        'h-5': size === 'xs',
        'h-6': size === 'sm',
        'h-8': size === 'md',
        'h-10': size === 'lg',
        'text-yellow-500 dark:text-yellow-400': filled,
        'text-neutral-400 dark:text-neutral-600': !filled,
      })}
    />
  );
}
