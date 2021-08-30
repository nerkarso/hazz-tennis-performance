export default function MasterDetailsView({ masterView, detailsView }) {
  return (
    <div className="flex h-full">
      {masterView && masterView}
      {detailsView && detailsView}
    </div>
  );
}
