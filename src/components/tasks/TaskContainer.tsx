export default function TaskContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="inline-block bg-gray-50  py-6 md:px-8">
      <section
        className="max-w-screen-md border border-gray-100 bg-white marker:rounded-lg md:p-4"
        aria-label="Task List"
      >
        {children}
      </section>
    </div>
  );
}
