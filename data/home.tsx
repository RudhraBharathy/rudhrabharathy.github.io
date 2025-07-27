
type NavKey = "ABOUT" | "EXPERIENCE" | "PROJECTS" | "GALLERY" | "CONTACT";

export const navLinks: { name: NavKey; href: string }[] = (
  ["ABOUT", "EXPERIENCE", "PROJECTS", "GALLERY", "CONTACT"] as NavKey[]
).map((name) => ({
  name,
  href: `/${name.toLowerCase()}`,
}));
