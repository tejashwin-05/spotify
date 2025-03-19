

import React from "react";
import { ClerkProvider, SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";

const clerkPubKey = "pk_test_YW1hemluZy1idXp6YXJkLTQuY2xlcmsuYWNjb3VudHMuZGV2JA"; // Replace with your actual Clerk public key

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedOut>
        <div className="flex items-center justify-center h-screen bg-black">
          <SignIn routing="hash" />
        </div>
      </SignedOut>
      
      <SignedIn>
        <MainApp />
      </SignedIn>
    </ClerkProvider>
  );
};

const MainApp = () => {
  const { audioRef, track, songsData } = React.useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      
      {
        songsData.length !== 0 ? (
          <>
            <div className="h-[90%] flex">
              <Sidebar />
              <Display />
            </div>
            <Player />
          </>
        ) : null
      }
      <audio ref={audioRef} src={track ? track.file : ''} preload="auto"></audio>
    </div>
  );
};

export default App;
