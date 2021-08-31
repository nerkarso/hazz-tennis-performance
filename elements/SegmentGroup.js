import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/solid';
import cx from 'classnames';

export default function SegmentGroup({ className, onChange, value, items }) {
  return (
    <RadioGroup value={value} onChange={onChange} className={cx('flex items-center p-1 gap-1 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800', className)}>
      {items.map(({ value, text }, i) => (
        <RadioGroup.Option
          value={value}
          className={({ active, checked }) =>
            cx('relative h-8 flex flex-1 items-center justify-center rounded-md text-sm font-medium transition duration-150 focus:outline-none cursor-pointer', {
              'bg-white border-neutral-200 shadow dark:bg-neutral-700': checked,
              'text-neutral-600 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-300': !checked,
              'ring-2 ring-primary-500': active,
            })
          }
          key={i}>
          {({ checked }) => (
            <>
              {checked && <CheckCircleIcon className="absolute w-5 h-5 -translate-y-1/2 text-primary-500 left-2 top-1/2" />}
              {text}
            </>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}
