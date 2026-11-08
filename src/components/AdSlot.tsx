type AdVariant = 'horizontal' | 'sidebar';

type Props = {
  /** Stable name of the placement, used to map it to an AdSense ad unit later. */
  name: string;
  variant: AdVariant;
};

/**
 * Reserved space for a Google AdSense unit. The box keeps its size before an ad loads,
 * so filling it never shifts the page (no CLS).
 *
 * Sizes:
 * - horizontal: 728×90 leaderboard from 768px up, 336×280 / 300×250 rectangle below 768px.
 * - sidebar: 300×600 half page, sticky, only shown from 1200px up.
 *
 * To serve ads, render the AdSense <ins class="adsbygoogle"> element inside
 * `.ad-slot__frame` with data-ad-client and data-ad-slot for this placement,
 * and allow AdSense hosts in the CSP in public/_headers.
 */
export default function AdSlot({ name, variant }: Props) {
  const className = `ad-slot ad-slot--${variant}`;
  return (
    <aside className={className} aria-label="Advertisement" data-ad-placement={name}>
      <span className="ad-slot__label">Advertisement</span>
      <div className="ad-slot__frame" />
    </aside>
  );
}
