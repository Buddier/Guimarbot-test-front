import CategoriaSection from "@/components/explorar/cursos/categoria-section";
import { FiltersSection } from "@/components/explorar/cursos/filters";
import { Badge } from "@/components/ui/badge";
import { Categoria } from "@/types";

const catTest: Categoria = {
  id: "test",
  name: "Categoria 1",
  emoji: "✨"
}

export default function Cursos() {
  return (
    <>
      <FiltersSection />
      <CategoriaSection categoria={catTest} />
    </>
  );
}
