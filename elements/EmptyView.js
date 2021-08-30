export default function EmptyView({ text }) {
  return (
    <div className="grid h-full place-items-center">
      <h1 className="text-2xl font-bold">{text}</h1>
    </div>
  );
}
