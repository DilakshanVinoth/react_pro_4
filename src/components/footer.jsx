import React from 'react';

function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

        {/* About PUBG Section */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-3">About PUBG</h3>
          <p className="text-gray-400">
            PUBG (PlayerUnknown’s Battlegrounds) is a battle royale shooter that pits players against each other in intense survival matches. Gear up, drop in, and fight to be the last one standing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/tournaments" className="hover:text-yellow-400">Tournaments</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-3">Contact Information</h3>
          <p className="text-gray-400 mb-2">
            Have any questions or suggestions? We'd love to hear from you.
          </p>
          <p className="text-gray-400">
            Email: <a href="mailto:support@pubgcentral.com" className="text-yellow-400">support@pubgcentral.com</a>
          </p>
          <p className="text-gray-400">
            Phone: <span className="text-yellow-400">+1-800-123-4567</span>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl text-yellow-500">
            <a href="https://www.facebook.com/yourpage" className="hover:text-white" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/yourhandle" className="hover:text-white" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/c/yourchannel" className="hover:text-white" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://discord.com/invite/yourdiscord" className="hover:text-white" aria-label="Discord">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>

      </div>

      {/* Newsletter Signup */}
      <div className="mt-10 border-t border-zinc-700 pt-6 text-center">
        <h4 className="text-yellow-400 text-lg font-bold mb-4">Join Our Newsletter</h4>
        <p className="text-gray-400 mb-6">
          Stay updated with the latest news, tournaments, and exclusive offers from PUBG Central!
        </p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 text-black rounded-l-md"
          />
          <button type="submit" className="bg-yellow-400 text-zinc-900 px-4 py-2 rounded-r-md hover:bg-yellow-500 transition">
            Subscribe
          </button>
        </form>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-zinc-700 pt-4 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} PUBG Central. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
