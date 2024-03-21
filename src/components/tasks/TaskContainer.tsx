export default function TaskContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="mx-auto w-[820px] rounded-lg border border-lodgify-gray-100 bg-white p-4"
      aria-label="Task List"
    >
      {children}
    </section>
  );
}
