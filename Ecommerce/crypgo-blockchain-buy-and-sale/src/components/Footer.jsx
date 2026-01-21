import { Link } from 'react-router-dom';
import { Facebook, Instagram, X, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 mt-32">
      <div className="wrapper">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:space-x-8 lg:space-x-16">
          
          {/* Company Info and Social Links */}
          <div className="flex-1 flex h-full flex-col justify-between mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img src="/logo.svg" alt="Crypgo Logo"/>
            </div>
            <div className="flex space-x-4 text-white mb-6">
              <Link to="/facebook"><Facebook size={24} /></Link>
              <Link to="/instagram"><Instagram size={24} /></Link>
              <Link to="/x"><X size={24} /></Link>
            </div>
            <p className="text-xl">2025 Copyright | Crypgo</p>
          </div>
          
          {/* Links Section */}
          <div className="flex-1 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link to="/buy-sell" >Buy & Sell</Link></li>
              <li><Link to="/development" >Development</Link></li>
              <li><Link to="/work" >Work</Link></li>
              <li><Link to="/portfolio" >Portfolio</Link></li>
              <li><Link to="/upgrade" >Upgrade</Link></li>
              <li><Link to="/docs" >Docs</Link></li>
            </ul>
          </div>
          
          {/* Information Section */}
          <div className="flex-1 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Legal & Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" >Terms of Service</Link></li>
              <li><Link to="/disclosures" >Disclosures</Link></li>
              <li><Link to="/privacy" >Privacy Policy</Link></li>
              <li><Link to="/news">Latest Updates</Link></li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <p className="text-accent mb-4">Subscribe to get the latest news form us</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter Email" 
                className="w-full pl-4 pr-12 py-3 rounded-xl bg-transparent border border-gray-600 focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-tertiary">
                <Send size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
