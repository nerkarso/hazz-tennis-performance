export default function MasterDetailsView({ masterView, detailsView }) {
  return (
    <div className="flex-1 h-full sm:flex">
      {masterView && masterView}
      {detailsView && detailsView}
    </div>
  );
}
