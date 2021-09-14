import { ExclamationCircleIcon } from '@heroicons/react/outline';

export default function ErrorFormGroup({ children }) {
  return (
    <div className="flex items-center self-end w-2/3 h-10 gap-2">
      <ExclamationCircleIcon className="flex-shrink-0 w-6 h-6 text-red-600 dark:text-red-500" />
      <h4 className="text-sm font-semibold text-red-600 truncate dark:text-red-500">{children}</h4>
    </div>
  );
}
