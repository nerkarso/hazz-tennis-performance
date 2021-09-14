export default function ChatBubble({ children, inverse, secondary }) {
  return inverse ? (
    <div className="max-w-sm px-4 py-2 border rounded-br-none rounded-2xl place-self-end dark:border-neutral-700">
      <p>{children}</p>
      {secondary && <span className="block mt-2 text-sm text-right opacity-50">{secondary}</span>}
    </div>
  ) : (
    <div className="max-w-sm px-4 py-2 rounded-bl-none place-self-start rounded-2xl bg-neutral-200 dark:bg-neutral-800">
      <p>{children}</p>
      {secondary && <span className="block mt-2 text-sm text-right opacity-50">{secondary}</span>}
    </div>
  );
}
