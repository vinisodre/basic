import { topbar } from "@/app/queries";

type TopbarProps = {
  text?: string;
  color?: string;
};

export function Topbar({ text, color }: TopbarProps) {
  return (
    <div
      className={`bg-primary text-primary-foreground py-2 px-4 text-center bg-slate-950 ${color}`}
    >
      <p className="text-sm font-medium text-slate-50">{text}</p>
    </div>
  );
}
