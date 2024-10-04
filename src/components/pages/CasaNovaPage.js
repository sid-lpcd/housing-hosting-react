import SectionTextCarousel from "../sections/SectionTextCarousel";
import SectionImageCarousel from "../sections/SectionImageCarousel";
import SectionHouses from "../sections/SectionHouses";
import SectionGallery from "../sections/SectionGallery";
import SectionActivities from "../sections/SectionActivities";
import SectionContact from "../sections/SectionContact";

function CasaNovaPage() {
  return (
    <>
      <main>
        <SectionTextCarousel />
        <SectionImageCarousel />
        <SectionHouses />
        <SectionGallery />
        <SectionActivities />
        <SectionContact />
      </main>
    </>
  );
}

export default CasaNovaPage;
