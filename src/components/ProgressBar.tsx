import { cn } from "../lib/utils";

interface ProgressBarProps {
  name: string;
  className?: string;
  displayValueAsInteger?: boolean;
  value: number;
}

export default function ProgressBar({
  className,
  value = 70,
  displayValueAsInteger = true,
  name,
}: ProgressBarProps) {
  const dynamicWidth = `${value}%`;
  const displayedValue = displayValueAsInteger ? Math.floor(value) : value;
  return (
    <div
      className="w-full rounded-full bg-gray-200 dark:bg-gray-700"
      aria-labelledby={name}
      role="progressbar"
    >
      <div
        className={cn(
          "bg-lodgify-green-400 flex justify-end rounded-full p-2 pr-4 text-center text-xs font-medium leading-none text-green-100 duration-300 ease-in",
          className,
        )}
        aria-valuenow={value}
        style={{ width: dynamicWidth }}
      >
        {displayedValue}%
      </div>
    </div>
  );
}
