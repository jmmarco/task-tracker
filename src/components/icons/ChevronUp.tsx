export default function ChevronUp({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m16.847 13.646-4.5-4.5a.5.5 0 0 0-.707 0l-4.5 4.5a.5.5 0 0 0 .707.707l4.147-4.146 4.146 4.146a.498.498 0 0 0 .707 0 .5.5 0 0 0 0-.707Z"
        fill="#333333"
      />
    </svg>
  );
}
