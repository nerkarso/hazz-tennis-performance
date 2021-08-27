import { TrashIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

export default function MessageHeader({ feedback }) {
  return (
    <header className="flex items-center justify-between h-16 px-4">
      <div className="flex items-center text-sm">
        <p className="text-xl font-semibold">Hans Burger</p>
        {feedback == true && (
          <div className="flex items-center ml-3">
            <StarIcon className="inline w-6 h-6 text-yellow-300" />
            <span className="font-semibold">4.5</span>
          </div>
        )}
      </div>
      <button className="grid w-8 h-8 text-red-500 rounded-md place-items-center focus:outline-none focus:bg-black/20 hover:bg-black/10">
        <TrashIcon className="w-6" />
      </button>
    </header>
  );
}
