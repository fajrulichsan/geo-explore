export default function FlowConnector({ kind }: { kind: "plus" | "arrow" }) {
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
