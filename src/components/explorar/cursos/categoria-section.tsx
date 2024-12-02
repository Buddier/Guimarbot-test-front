import { Badge } from "@/components/ui/badge";
import { Categoria } from "@/types";

interface Props {
  categoria: Categoria;
}

export default function CategoriaSection({ categoria }: Props) {
  return (
    <div className="relative container py-24 sm:py-32">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t" />
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-2 text-muted-foreground">
          <Badge variant="destructive">{categoria.emoji} {categoria.name}</Badge>
        </span>
      </div>
    </div>
  );
}
