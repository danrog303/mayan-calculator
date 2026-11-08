type IconName = 'copy' | 'check' | 'undo' | 'clear' | 'arrow-right';

const ICON_PATHS: Record<IconName, string[]> = {
  copy: ['M9 9h10v10H9z', 'M5 15V5h10'],
  check: ['M5 12.5l4.5 4.5L19 7.5'],
  undo: ['M9 7L4 12l5 5', 'M4 12h11a5 5 0 0 1 0 10h-3'],
  clear: ['M6 6l12 12', 'M18 6L6 18'],
  'arrow-right': ['M5 12h14', 'M13 6l6 6-6 6'],
};

type Props = { name: IconName; size?: number };

/** Small stroke icon set drawn on a 24px grid, 2px stroke, round joins. */
export default function Icon({ name, size = 18 }: Props) {
  const paths = ICON_PATHS[name];
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
