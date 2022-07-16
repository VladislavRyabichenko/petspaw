import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import { Navigation } from "./components/mainNavigation/navigation";

import { StartScreen } from "./pages/startScreen";
import { WrapperPage } from "./pages/wrapperPage";
import { VotingPage } from "./pages/votingPage";
import { BreedsPage } from "./pages/breedsPage";
import { AllBreeds } from "./pages/allBreedsPage";
import { BreedPage } from "./pages/breedPage";
import { GalleryPage } from "./pages/galleryPage";
import { Liked } from "./pages/likedPage";
import { Disliked } from "./pages/dislikedPage";
import { Favourite } from "./pages/favouritePage";

import stylesApp from "./css/app.module.scss";

function App() {
  return (
    <div className={stylesApp.mainWrapper}>
      <div className={stylesApp.mainNavigationWrapper}>
        <Navigation />
      </div>

      <Routes>
        <Route index element={<StartScreen />} />

        <Route path="/" element={<WrapperPage />}>
          <Route path="voting" element={<VotingPage />} />
          <Route path="breeds" element={<BreedsPage />}>
            <Route index element={<AllBreeds />} />
            <Route path="breed" element={<BreedPage />} />
          </Route>
          <Route path="gallery" element={<GalleryPage />} />S
          <Route path="liked" element={<Liked />} />
          <Route path="disliked" element={<Disliked />} />
          <Route path="favourite" element={<Favourite />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
