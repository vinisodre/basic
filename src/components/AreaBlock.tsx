import { Areas, AreasProps } from "./ui/Areas";

type AreaBlockProps = {
  areas: AreasProps[];
};

export default function AreaBlock({ areas }: AreaBlockProps) {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-12 md:py-24">
      <div className="container px-4 md:px-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {areas.map((item, index) => (
          <Areas
            key={index}
            title={item.title}
            description={item.description}
            hasButton={item.hasButton}
            link={item.link}
            buttonText={item.buttonText}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}