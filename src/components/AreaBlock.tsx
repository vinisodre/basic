import { Areas, AreasProps } from "./ui/Areas";
import { areasContent } from "@/app/queries";

type AreaBlockProps = {
  areas: AreasProps[];
};



const AreaBlock = async () => {

  return (
    <section className="flex flex-col items-center justify-center gap-8 py-12 md:py-24">
      <div className="container px-4 md:px-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {areasContent.map((item, index) => (
          <Areas
            key={index} // Idealmente, use um identificador único, como item.id, se disponível
            title={item.title}
            description={item.description}
            hasButton={item.hasButton}
            link={item.link}
            buttonText={item.buttonText}
            imageHref={item.imageHref}
          />
        ))}
      </div>
    </section>
  );
};

export default AreaBlock;
