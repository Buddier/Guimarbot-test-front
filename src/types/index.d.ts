export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  authRequired?: boolean;
  adminRequired?: boolean;
};

export type MainNavItem = NavItem;

export type Categoria = {
  id: string;
  name: string;
  emoji: string;
}

export type Ruta = {
  id: string;
  categoriaId: string;
  name: string;
  description: string;
  about: string;
  image: string;
  courses?: [];
}

export type RutaSeccion = {
  id: string;
  name: string;
  rutaId: string;
}

export type Curso = {
  id: string;
  name: string;
  rutaId: string;
  rutaSeccionId: string;
  free: boolean;
  image: string;
}