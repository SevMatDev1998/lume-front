import Link from "next/link";

type NavDropdownProps = { label: string; href: string; items: { href: string; title: string }[] };

export const NavDropdown = ({ label, href, items }: NavDropdownProps) => (
  <div className="group relative">
    <Link href={href} className="flex items-center gap-1 py-2 whitespace-nowrap hover:text-ink">
      {label} <span className="text-[10px]">▾</span>
    </Link>
    <div className="invisible absolute top-full left-0 z-20 w-60 translate-y-1 rounded-xl bg-white px-5 py-4 opacity-0 shadow-[0_0_24px_rgb(0_0_0/0.12)] transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block py-1.5 text-sm text-muted transition-colors hover:text-ink"
        >
          {item.title}
        </Link>
      ))}
    </div>
  </div>
);
