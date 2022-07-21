import React, { useEffect } from "react";
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
import { Upload } from "./components/gallery/modalUpload/modal";
import { useState } from "react";
import classNames from "classnames";
import stylesNavigation from "./components/mainNavigation/styles/styleNavigation.module.scss";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const [isWrapperRendered, setWrapperRendered] = useState(false);

  const mainNavigationWrapperClasses = classNames(
    stylesApp.mainNavigationWrapper,
    {
      [stylesApp.showAsMenu]: showMenu,
    },
    {
      [stylesApp.hide]: isWrapperRendered,
    }
  );

  return (
    <div className={stylesApp.mainWrapper}>
      <div className={mainNavigationWrapperClasses}>
        {/*<div>*/}
        <Navigation
          props={{
            isMenu: showMenu,
            cancelMenu: () => setShowMenu(false),
          }}
        />
        {/*</div>*/}
      </div>

      {/*props={{ isMenu: showMenu }}*/}
      <Routes>
        <Route index element={<StartScreen />} />

        <Route
          path="/"
          element={
            <WrapperPage
              props={{
                showMenu: () => setShowMenu(true),
                setWrapperRendered: setWrapperRendered,
              }}
            />
          }
        >
          <Route path="/upload" element={<Upload />} />
          <Route path="voting" element={<VotingPage />} />
          <Route path="breeds" element={<BreedsPage />}>
            <Route index element={<AllBreeds />} />
            <Route path="breed" element={<BreedPage />} />
          </Route>
          <Route path="gallery" element={<GalleryPage />}>
            <Route path="upload" element={<Upload />} />
          </Route>
          <Route path="liked" element={<Liked />} />
          <Route path="disliked" element={<Disliked />} />
          <Route path="favourite" element={<Favourite />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
