import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-lila text-primaryText py-6 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-body">
          <Link href="/clinics" className="hover:text-accent transition">
            Clinics
          </Link>
          <Link href="/why-us" className="hover:text-accent transition">
            Why Us
          </Link>
          <Link href="/contact" className="hover:text-accent transition">
            Contact
          </Link>
        </nav>

        {/* Divider */}
        <div className="w-full border-t border-primaryText opacity-25" />

        {/* Copyright */}
        <p className="text-xs font-body text-center">
          © {new Date().getFullYear()} Smilezies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
