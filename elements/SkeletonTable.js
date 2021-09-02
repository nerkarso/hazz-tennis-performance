import { SkeletonTableCell, Table, TableCell, TableRow } from '@/elements';

export default function SkeletonTable({ animate, cols = 1, rows = 6 }) {
  const colsArray = Array.from(Array(cols));
  const rowsArray = Array.from(Array(rows));

  return (
    <Table>
      {rowsArray.map((_, r) => (
        <TableRow style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }} key={r}>
          {colsArray.map((_, c) => (
            <TableCell key={c}>
              <SkeletonTableCell animate={animate} />
            </TableCell>
          ))}
        </TableRow>
      ))}
      <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-white dark:from-neutral-900 to-transparent"></div>
    </Table>
  );
}
