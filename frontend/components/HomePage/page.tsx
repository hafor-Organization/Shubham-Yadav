import Hero from "./hero/page";
import QuickSearch from "./quick-search/page";
import FeaturedInternships from "./featured-internship/page";
import CTA from "./cta/page";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <QuickSearch />
      <FeaturedInternships />
      <CTA />
    </main>
  );
}
