export function FontAwesomeIconButton({ icon = "", fill }: { icon?: string, fill: boolean }) {
  return (
    <button data-testid="fa-icon-button">
      <i style={{ color: fill ? "green": "" }} className={`fa ${icon}`}></i>
    </button>
  );
}