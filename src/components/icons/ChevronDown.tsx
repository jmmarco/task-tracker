import { cn } from "../../lib/utils";

export default function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className)}
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.847 9.153a.5.5 0 0 0-.707-.013l-4.146 4.147L7.847 9.14a.5.5 0 0 0-.707.707l4.5 4.5a.498.498 0 0 0 .707 0l4.5-4.5a.5.5 0 0 0 0-.694Z"
        fill="#333333"
      />
    </svg>
  );
}
