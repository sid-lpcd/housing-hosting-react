import SectionTextCarousel from "../sections/SectionTextCarousel";
import SectionImageCarousel from "../sections/SectionImageCarousel";
import SectionHouses from "../sections/SectionHouses";
import SectionGallery from "../sections/SectionGallery";
import SectionActivities from "../sections/SectionActivities";
import SectionContact from "../sections/SectionContact";

function MainPage() {
  const imagesGuimaraes = [
    {
      title: "Guimarães Castle",
      caption:
        "Explore the historic Castle of Guimarães, a symbol of Portugal's birthplace, offering a journey back in time.",
      src: "https://images.unsplash.com/photo-1601756880134-4b3b3b3b3b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDc0NzN8MHwxfGFsbHwxf",
    },
  ];
  return (
    <>
      <main>
        <SectionTextCarousel
          title={"Guimarães - Where it all started"}
          description={
            "Step into Portugal's first Capital, where medieval streets weave tales of history and culture. Guimarães, with its UNESCO-listed historic center, enchants visitors with centuries-old architecture, cobblestone alleys, and a vibrant atmosphere. Explore the iconic Castle of Guimarães, birthplace of the nation, and witness the grandeur of the Palace of the Dukes of Bragança. Immerse yourself in the local rhythm at Largo da Oliveira, surrounded by charming cafes and shops. With its rich heritage and warm hospitality, Guimarães invites you to experience the magic where Portugal's story began."
          }
          images={imagesGuimaraes}
        />
        <SectionImageCarousel />
        <SectionHouses />
        <SectionGallery />
        <SectionActivities />
        <SectionContact />
      </main>
    </>
  );
}

export default MainPage;
