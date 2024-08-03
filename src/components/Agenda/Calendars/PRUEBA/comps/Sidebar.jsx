
import CreateEventButton from "../CreateEventButton";
import SmallCalendar from "../SmallCalendar";
import Labels from "../calendario_principal/Labels";
export default function Sidebar() {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}
