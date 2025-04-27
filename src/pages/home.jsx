import React from 'react';
import tournamentImage from '../assets/images/PUBG-4K-HD-Desktop-Wallpaper-82777.jpg';
import aboutImage from '../assets/images/img-og-pubg.jpg';
import contactImage from '../assets/images/contact.jpg';

function Home() {
  return (
    <main className="bg-zinc-900 text-white">

      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${tournamentImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div className="relative z-10 p-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400 mb-6 drop-shadow-lg">
            Welcome to PUBG Central
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Dive into the battlegrounds with the latest tournaments, hottest news, and an ever-growing community of warriors!
          </p>
        </div>
      </section>

      {/* Tournaments Section */}
      <section className="py-20 px-6 md:px-12 bg-zinc-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={tournamentImage}
              alt="PUBG Tournament"
              className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-500"
            />
            <div className="absolute top-4 left-4 bg-yellow-400 text-zinc-900 px-3 py-1 rounded-full text-xs font-bold shadow-md">
              Live Tournaments
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">Tournaments</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Step into the arena and battle the best! Whether you're a solo sniper or a squad strategist, our tournaments
              offer heart-pounding excitement and big rewards. Stay updated on upcoming events and claim your spot on the leaderboard.
            </p>
            <p className="text-gray-400 mb-8">
              Register now, and be part of an electrifying experience that pushes your gaming skills to the limit.
            </p>
            <a
              href="/tournaments"
              className="inline-block bg-yellow-400 text-zinc-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
            >
              Explore Tournaments
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">About Us</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              PUBG Central was built by players, for players. We believe in creating a thriving, passionate community where every gamer
              has a place to showcase their talent, share strategies, and connect with fellow warriors.
            </p>
            <p className="text-gray-400 mb-8">
              From hosting premium tournaments to providing in-depth guides and latest updates, our mission is to power your PUBG journey.
              Together, we drop, loot, and conquer.
            </p>
            <a
              href="/about"
              className="inline-block bg-yellow-400 text-zinc-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
            >
              Learn More
            </a>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={aboutImage}
              alt="About PUBG Central"
              className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-12 bg-zinc-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={contactImage}
              alt="Contact Us"
              className="rounded-xl shadow-2xl transform hover:rotate-1 hover:scale-105 transition duration-500"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">Contact Us</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Got a question, feedback, or just want to say hi? Our team is ready to assist you 24/7. We're gamers first, and we understand
              the passion and urgency of the battlefield!
            </p>
            <p className="text-gray-400 mb-8">
              Drop us a line, suggest ideas, report issues, or simply connect. Your voice matters in shaping PUBG Central.
            </p>
            <a
              href="/contact"
              className="inline-block bg-yellow-400 text-zinc-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;
