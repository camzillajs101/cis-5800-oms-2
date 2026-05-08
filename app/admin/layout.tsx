export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}