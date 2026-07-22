export default function CrescentDivider() {
  return (
    <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-10" aria-hidden="true">
      <span className="h-px flex-1 bg-marsh/25" />
      <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="text-sweetgrass">
        <path
          d="M17 2C13 2 9.7 5.1 9.7 8C9.7 10.9 13 14 17 14C14.6 15.3 11.8 16 8.8 16C3.9 16 0 12.4 0 8C0 3.6 3.9 0 8.8 0C11.8 0 14.6 0.7 17 2Z"
          fill="currentColor"
        />
      </svg>
      <span className="h-px flex-1 bg-marsh/25" />
    </div>
  );
}
