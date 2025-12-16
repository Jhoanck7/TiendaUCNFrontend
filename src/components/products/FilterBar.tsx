interface Props {
  search: string;
  onSearchChange: (v: string) => void;
}

export default function FilterBar({ search, onSearchChange }: Readonly<Props>) {
  return (
    <input
      placeholder="Buscar producto..."
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}
