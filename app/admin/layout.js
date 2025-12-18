import BenevolesDashboardLayout from "../components/BenevolesDashboardLayout";

export default function AdminLayout({ children }) {
  return (
    <div className="flex   min-h-screen">
      <BenevolesDashboardLayout />

      <main className="flex-1  p-2 bg-base-200">
        {children}
      </main>
    </div>
  );
}
