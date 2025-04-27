import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import yourLogo from '../assets/images/d90ee7f0f7259d9bbfc55e670d8ae092_b840ac87a6e9029c5c07ed188d1051f1.avif';
import pubgTheme from '../assets/music/Pubg-Theme.mp3'; // Import the music
import { Volume2, VolumeX } from 'lucide-react'; // Import mute/unmute icons

function Header() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // Initially mute
  const [audioLoaded, setAudioLoaded] = useState(false); // Track if audio is loaded and played

  // Effect to handle initial autoplay
  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play(); // Attempt to play audio
        audioRef.current.loop = true; // Keep the music looping
        setAudioLoaded(true); // Mark audio as successfully loaded
      } catch (error) {
        console.log("Autoplay blocked, user interaction required.");
      }
    };

    // Play audio with muted state on load
    playAudio();

    // Event listener to trigger audio play on user interaction
    const handleUserInteraction = () => {
      if (audioRef.current && !audioLoaded) {
        audioRef.current.play().catch((error) => {
          console.log("User interaction error:", error);
        });
      }
    };

    // Add listener for user interaction to trigger audio
    document.body.addEventListener('click', handleUserInteraction);

    // Cleanup listener on unmount
    return () => {
      document.body.removeEventListener('click', handleUserInteraction);
    };
  }, [audioLoaded]);

  // Function to toggle mute
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <header className="bg-zinc-900 text-white shadow-md sticky top-0 z-50">
      {/* Hidden Audio Player */}
      <audio ref={audioRef} src={pubgTheme} muted={isMuted} />

      <div className="container mx-auto px-4 py-3 flex items-center justify-between relative">
        
        {/* Logo aligned to the left */}
        <div className="flex items-center gap-4">
          <img
            src={yourLogo}
            alt="PUBG Logo"
            className="h-16 object-contain" // Slightly bigger logo
          />
        </div>

        {/* Navigation + Mute Button */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-400 transition duration-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition duration-200">
            About
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition duration-200">
            Contact
          </Link>
          
          {/* <Link to="/tournaments" className="hover:text-yellow-400 transition duration-200">
            Tournaments
          </Link> */}

          {/* Mute / Unmute Button */}
          <button
            onClick={toggleMute}
            className="bg-yellow-400 text-zinc-900 p-2 rounded-full shadow-md hover:bg-yellow-500 transition duration-300 flex items-center justify-center"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
