export default function TaskContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="inline-block self-center bg-lodgify-gray-50 px-8 py-6">
      <section
        className="w-[820px] rounded-lg border border-lodgify-gray-100 bg-white p-4"
        aria-label="Task List"
      >
        {children}
      </section>
    </div>
  );
}
