export default function ChatBubble({ children, inverse, secondary }) {
  return inverse ? (
    <div className="max-w-md px-4 py-2 border rounded-tr-none rounded-xl place-self-end dark:border-neutral-700">
      <p>{children}</p>
      {secondary && <span className="block mt-2 text-sm text-right opacity-50">{secondary}</span>}
    </div>
  ) : (
    <div className="max-w-md px-4 py-2 rounded-tl-none place-self-start rounded-xl bg-neutral-200 dark:bg-neutral-800">
      <p>{children}</p>
      {secondary && <span className="block mt-2 text-sm opacity-50">{secondary}</span>}
    </div>
  );
}
