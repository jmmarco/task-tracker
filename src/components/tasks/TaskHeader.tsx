interface TaskHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export default function TaskHeader({ title, children }: TaskHeaderProps) {
  return (
    <header className="px-6 py-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      {children}
    </header>
  );
}
