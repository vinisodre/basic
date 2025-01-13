import { topbar } from "@/app/queries";

type TopbarProps = {
  text?: string;
  color?: string;
};

export function Topbar() {
  const topbarData: TopbarProps = topbar[0];
  console.log("console do topbar", topbarData.text);

  return (
    topbarData.text && (
      <div
        className={`bg-primary text-primary-foreground py-2 px-4 text-center bg-slate-950 ${topbarData.color}`}
      >
        <p className="text-sm font-medium text-slate-50">{topbarData.text}</p>
      </div>
    )
  );
}
