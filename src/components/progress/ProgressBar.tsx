import { cn } from "../../lib/utils";

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
    <div className="w-full rounded-full bg-green-50">
      <div
        className={cn(
          "flex justify-end rounded-full bg-green-400 p-2 pr-4 text-center text-xs font-medium leading-none text-green-100 duration-300 ease-in",
          className,
        )}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        role="progressbar"
        aria-label={name}
        style={{ width: dynamicWidth }}
      >
        {displayedValue}%
      </div>
    </div>
  );
}
