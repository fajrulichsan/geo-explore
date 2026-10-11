import Image from "next/image";

export default function FlowConnector({ kind, panahGambar }: { kind: "plus" | "arrow"; panahGambar?: boolean }) {
  if (kind === "arrow" && panahGambar) {
    return (
      <div aria-hidden className="flex items-center justify-center shrink-0">
        <Image
          src="/panah-biru-transparan.png"
          alt=""
          width={48}
          height={48}
          className="w-8 h-8 rotate-90 lg:rotate-0"
        />
      </div>
    );
  }

  return (
    <div aria-hidden className="flex items-center justify-center text-[#2563EB] text-2xl shrink-0">
      {kind === "plus" ? (
        <i className="fa-solid fa-plus" />
      ) : (
        <>
          <i className="fa-solid fa-arrow-down lg:hidden" />
          <i className="fa-solid fa-arrow-right hidden lg:inline" />
        </>
      )}
    </div>
  );
}
