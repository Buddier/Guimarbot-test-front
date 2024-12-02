import { Button } from "@/components/ui/button";
import SelectFiltersCategory from "./select-filters-category";
import SelectFiltersSchool from "./select-filters-school";

export const FiltersSection = () => {
  return (
    <section id="cours-filters" className="py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="hidden md:block lg:block lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Cursos online para impulsar tu carrera
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Descubre más de 1000 cursos en diversas áreas, desde tecnología
            hasta desarrollo personal. Aprende a tu ritmo, ya sea para comenzar
            desde cero o perfeccionar las habilidades más demandadas en el
            mercado actual.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2 w-[100%] md:w-auto lg:w-auto">
          <Button className="w-full md:mr-4 md:w-auto">Categorias</Button>
          <Button variant="outline" className="w-full md:w-auto">
            Escuelas
          </Button>
        </div>
      </div>
    </section>
  );
};
