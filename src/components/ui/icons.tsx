interface IconsProps {
  name: string;
  size?: number;
  color?: string;
}

function Icons({ name, size, color }: IconsProps) {
  return <i className={`ti ti-${name}`} style={{ fontSize: size ?? 18, color: color }} />;
}

export default Icons;
