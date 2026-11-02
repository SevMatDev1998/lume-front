import type { Metadata } from "next";
import { Inter, Noto_Sans_Armenian } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const notoArmenian = Noto_Sans_Armenian({
  variable: "--font-armenian",
  subsets: ["armenian"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Lume",
    default: "Lume · Official ExamVision partner in Armenia",
  },
  description: "Custom-made ExamVision loupes and LED lights for dentists, hygienists and surgeons in Armenia.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${notoArmenian.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
