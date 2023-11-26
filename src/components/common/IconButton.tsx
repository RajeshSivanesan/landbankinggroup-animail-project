export function FontAwesomeIconButton({ icon = "", fill }: { icon: string, fill: boolean }) {
  return (
    <button style={{ cursor: "pointer" }}>
      <i style={{ color: fill ? "green": "" }} className={`fa ${icon}`}></i>
    </button>
  );
}