type Props = { id?: string; children: React.ReactNode };
export default function SectionTitle({ id, children }: Props) {
  return (
    <div id={id} className="flex items-center gap-4">
      <h2 className="text-[22px] md:text-2xl font-semibold tracking-tight">
        {children}
      </h2>
      <div className="h-px flex-1 bg-white/20" />
    </div>
  );
}
