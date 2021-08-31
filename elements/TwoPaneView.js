export default function TwoPaneView({ leftPane, rightPane }) {
  return (
    <div className="flex gap-8">
      <div className="flex-1">{leftPane}</div>
      <aside className="w-1/3">{rightPane}</aside>
    </div>
  );
}
