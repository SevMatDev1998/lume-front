import Link from "next/link";

type NavDropdownProps = { label: string; href: string; items: { href: string; title: string }[] };

export const NavDropdown = ({ label, href, items }: NavDropdownProps) => (
  <div className="group relative">
    <Link href={href} className="flex items-center gap-1 py-2 hover:text-ink">
      {label} <span className="text-[10px]">▾</span>
    </Link>
    <div className="invisible absolute top-full left-0 z-20 w-64 translate-y-1 rounded-xl border border-line bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      {items.map((item, index) => (
        <Link key={item.href} href={item.href} className="flex gap-3 rounded-lg px-3 py-2 text-sm hover:bg-soft">
          <span className="text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
          {item.title}
        </Link>
      ))}
    </div>
  </div>
);
