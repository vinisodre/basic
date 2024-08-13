import { Button } from "@/components/ui/Button";
import Link from "next/link";

export type AreasProps = {
  title?: string;
  description?: string;
  hasButton: boolean;
  link?: string;
  buttonText: string;
  imageHref: string;
};

export function Areas({
  title,
  description,
  imageHref,
  hasButton = false,
  link = "#", // Define um valor padrão para link
  buttonText,
}: AreasProps) {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center gap-4 rounded-lg border bg-background p-6 text-center shadow-sm h-72"
        style={{ backgroundImage: `url(${imageHref})` }}
      >
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        {hasButton && link && ( // Verifica se hasButton é true e se link não é undefined
          <Link href={link} prefetch={false}>
            <Button className="mt-4">{buttonText}</Button>
          </Link>
        )}
      </div>
    </>
  );
}
