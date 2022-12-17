import { Footer } from "../layouts/footer/Footer";
import Fullbar from "../layouts/Fullbar/Fullbar";
import Header from "../layouts/Header/Header";
import MediaDisplay from "../layouts/MainMedia/MediaDisplay/MediaDisplay";
import MediaList from "../layouts/MediaList/MediaList";

import "./LandingPage.css";

const film = {
  titre: "Avengers",
  text: "Un film bourrin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat mauris nec nisi aliquam, at egestas mi scelerisque. Maecenas et iaculis nibh, et lacinia nibh. In porttitor ipsum convallis lacus gravida suscipit. Curabitur tristique neque massa, in vehicula ipsum rhoncus sed. Mauris feugiat est non mattis tincidunt. Vivamus sodales ultricies sem, in semper justo auctor vitae. Nulla facilisi. Donec a molestie mauris. Integer volutpat mauris nec nisi aliquam, at egestas mi scelerisque. Maecenas et iaculis nibh, et lacinia nibh. In porttitor ipsum convallis lacus gravida suscipit. Curabitur tristique neque massa, in vehicula ipsum rhoncus sed. Mauris feugiat est non mattis tincidunt. Vivamus sodales ultricies sem, in semper justo auctor vitae. Nulla facilisi. Donec a molestie mauris.",
  compatibility: 98,
  note: 5,
  image:
    "https://cdn.vox-cdn.com/thumbor/cr4UImb0DEp7sQ1dJs_-wMfmgT8=/0x144:3805x2047/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/23184567/avengers_battle_of_new_york.jpg",
};

const themes = ["Action", "Horreur", "Squeeziz", "ASMR", "Pop"];

export default function LandingPage() {
  return (
    <div className="landingPage">
      <main className="pageContent">
        <Header />
        <Fullbar {...themes} />
        <MediaDisplay {...film} />
        <MediaList
          src={
            "https://cdn.vox-cdn.com/thumbor/cr4UImb0DEp7sQ1dJs_-wMfmgT8=/0x144:3805x2047/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/23184567/avengers_battle_of_new_york.jpg"
          }
          titre={"Film"}
        />
        <MediaList
          src={
            "https://cdn.vox-cdn.com/thumbor/cr4UImb0DEp7sQ1dJs_-wMfmgT8=/0x144:3805x2047/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/23184567/avengers_battle_of_new_york.jpg"
          }
          titre={"Séries"}
        />
        <Footer />
      </main>
    </div>
  );
}
