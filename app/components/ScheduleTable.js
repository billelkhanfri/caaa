export  default function ScheduleTable({ rows }) {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Jour</th>
            <th>Matin</th>
            <th>Après-midi</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="font-medium">{row.day}</td>
              <td>{row.morning || "—"}</td>
              <td>{row.afternoon || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
