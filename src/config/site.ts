export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "GuimarBot",
  description: "Plataforma de aprendizaje profesional online.",
  mainNav: [
    {
      title: "Explorar",
      href: "/cursos",
    },
    {
      title: "Reservas",
      href: "/reservations",
      authRequired: true,
    },
    {
      title: "Prestamos",
      href: "/loans",
      authRequired: true,
    },
    {
      title: "Administracion",
      href: "/admin",
      authRequired: true,
      adminRequired: true,
    },
  ],
}