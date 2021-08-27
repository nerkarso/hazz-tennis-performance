import { StarIcon } from '@heroicons/react/solid';

export default function MasterListItem({ index, feedback }) {
  return (
    <button
      className={`w-full flex text-left items-center border-t border-b border-transparent px-4 py-2 text-sm focus:outline-none focus: focus:bg-primary-200 hover:border-primary-200 hover:bg-primary-100 ${
        index === 0 && 'bg-white border-base-200'
      }`}>
      <div className="relative hidden w-8 h-8 my-2 mr-3 rounded-full md:block">
        <img
          className="object-cover w-full h-full rounded-full"
          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          alt=""
        />
        <div className="absolute inset-0 rounded-full shadow-inner" />
      </div>
      <div className="">
        <p className="font-semibold">Hans Burger</p>
        <p className="text-sm text-black/50">11/01/21</p>
      </div>
      {feedback == true && (
        <div className="flex items-center ml-auto">
          <StarIcon className="inline w-5 text-yellow-300" />
          <span className="ml-1 text-sm font-semibold text-black/50">4.5</span>
        </div>
      )}
    </button>
  );
}
