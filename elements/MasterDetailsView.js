export default function MasterDetailsView({ masterView, detailsView }) {
  return (
    <div className="flex flex-1 h-full">
      {masterView && masterView}
      {detailsView && detailsView}
    </div>
  );
}
