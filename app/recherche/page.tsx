import { Metadata } from "next"
import { SearchSection } from "@/components/sections/search-section"

export const metadata: Metadata = {
  title: "Recherche Services | KHEOPS Consulting",
  description: "Trouvez le service KHEOPS Consulting adapté à vos besoins. Filtrez par secteur d'activité, type de service ou compétence."
}

export default function SearchPage() {
  return (
    <main>
      <SearchSection />
    </main>
  )
} 