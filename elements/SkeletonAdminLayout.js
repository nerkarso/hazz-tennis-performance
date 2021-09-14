import { SkeletonTable } from '@/elements';

export default function SkeletonAdminLayout() {
  return (
    <div className="absolute inset-0 flex w-full h-full">
      <aside className="flex-shrink-0 hidden h-full border-r lg:block w-72 dark:border-neutral-700">
        <div className="relative flex flex-col gap-3 m-6 animate-pulse">
          <span className="w-24 h-8 rounded-md bg-neutral-100 dark:bg-neutral-800"></span>
          <span className="w-40 h-8 rounded-md bg-neutral-100 dark:bg-neutral-800"></span>
          <span className="w-32 h-8 rounded-md bg-neutral-100 dark:bg-neutral-800"></span>
          <span className="w-56 h-8 rounded-md bg-neutral-100 dark:bg-neutral-800"></span>
          <span className="w-32 h-8 rounded-md bg-neutral-100 dark:bg-neutral-800"></span>
          <span className="w-40 h-8 rounded-md bg-neutral-100 dark:bg-neutral-800"></span>
          <span className="w-24 h-8 rounded-md bg-neutral-100 dark:bg-neutral-800"></span>
          <span className="w-16 h-8 rounded-md bg-neutral-100 dark:bg-neutral-800"></span>
          <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-white dark:from-neutral-900 to-transparent"></div>
        </div>
      </aside>
      <main className="flex flex-col flex-grow h-full p-8">
        <div className="w-56 h-8 mb-4 rounded-md bg-neutral-100 dark:bg-neutral-800 animate-pulse"></div>
        <SkeletonTable cols={4} rows={6} animate />
      </main>
    </div>
  );
}
