import Image from "next/image";

export default function QrLink({ href, src, alt, label }: { href: string; src: string; alt: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl border border-[#E5E7EB] bg-white"
      >
        <Image src={src} alt={alt} fill sizes="112px" unoptimized className="object-contain p-1.5" />
      </a>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] font-bold text-[#1E3A8A] text-center underline"
      >
        {label}
      </a>
    </div>
  );
}
