import DayScheduleCard from '@/components/DayScheduleCard';

export default function DaySchedule() {
  return (
    <div className="flex-1 px-5 pl-10 overflow-y-auto max-h-[426px]">
      {Array.from(Array(20)).map((item, i) => (
        <DayScheduleCard key={i} />
      ))}
    </div>
  );
}
