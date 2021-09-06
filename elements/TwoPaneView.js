export default function TwoPaneView({ leftPane, rightPane }) {
  return (
    <div className="flex gap-8">
      {leftPane && <div className="flex-1">{leftPane}</div>}
      {rightPane && <aside className="w-1/3">{rightPane}</aside>}
    </div>
  );
}
