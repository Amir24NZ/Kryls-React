export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <picture>
      <source type="image/webp" srcSet="/k.webp" />
      <img
        src="/k.png"
        alt="KRYLS"
        className="logo-img"
        width={size}
        height={size}
        decoding="async"
      />
    </picture>
  );
}

export function BrandLockup({ href = "/#top" }: { href?: string }) {
  return (
    <a className="logo" href={href} aria-label="KRYLS">
      <span className="flex shrink-0" aria-hidden="true">
        <LogoMark />
      </span>
      <span className="min-w-0">
        <span className="brand-name block">KRYLS</span>
        <span className="brand-tag block">Coming Soon</span>
      </span>
    </a>
  );
}
