import React from 'react';
import aboutImage from '../assets/images/img-og-pubg.jpg'; // The image path you mentioned

function About() {
    return (
        <div className="bg-zinc-900 text-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <h1 className="text-4xl font-bold text-yellow-400 text-center mb-12">
                    About PUBG Central
                </h1>

                {/* Content Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
                            Our Mission
                        </h2>
                        <p className="text-gray-300 mb-6">
                            At PUBG Central, we believe in creating a strong, vibrant community of passionate gamers. Our mission is to provide the best gaming experience by hosting competitive tournaments, sharing in-depth guides, and bringing together players from around the world to form a family-like environment.
                        </p>
                        <p className="text-gray-300 mb-6">
                            Whether you're a casual gamer or a seasoned pro, we aim to empower you to enhance your PUBG skills, stay updated on the latest news, and participate in exciting tournaments. Join us as we continue to grow and make PUBG Central the go-to place for every player!
                        </p>
                    </div>
                    <div>
                        <img
                            src={aboutImage}
                            alt="About PUBG Central"
                            className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-500"
                        />
                    </div>
                </div>

                {/* Section: What We Offer */}
                <section className="mt-16">
                    <h2 className="text-3xl font-bold text-yellow-400 mb-4 text-center">
                        What We Offer
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-zinc-800 p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Competitive Tournaments</h3>
                            <p className="text-gray-300">
                                Test your skills against players from around the world in our exciting tournaments. Compete for fame and glory!
                            </p>
                        </div>
                        <div className="bg-zinc-800 p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-4">In-Depth Guides</h3>
                            <p className="text-gray-300">
                                Level up your gameplay with expert tips, strategies, and tutorials. Whether you're just starting or aiming for the top, we have the guides to help you succeed.
                            </p>
                        </div>
                        <div className="bg-zinc-800 p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Community Support</h3>
                            <p className="text-gray-300">
                                Join a supportive and engaging community. Share tips, strategies, and experiences with other PUBG fans from around the globe.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;
