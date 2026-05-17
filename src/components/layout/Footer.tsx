import { Link } from 'react-router-dom';
import { BarChart3, Instagram, Twitter, Youtube, Facebook, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-primary text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <BarChart3 className="text-brand-secondary w-8 h-8" />
            <span className="text-2xl font-serif font-bold tracking-tight">
              AllTrade<span className="text-brand-secondary">Forex</span>
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Empowering traders with institutional-grade strategies, live mentorship, and a global community of professionals. Stop guessing, start trading.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-secondary/20 hover:text-brand-secondary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-secondary/20 hover:text-brand-secondary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-secondary/20 hover:text-brand-secondary transition-colors"><Youtube size={20} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-secondary/20 hover:text-brand-secondary transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-serif mb-6 text-brand-secondary italic">Pathways</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/courses/beginner" className="hover:text-white transition-colors">Beginner Bootcamp</Link></li>
            <li><Link to="/courses/intermediate" className="hover:text-white transition-colors">Intermediate Strategy</Link></li>
            <li><Link to="/courses/advanced" className="hover:text-white transition-colors">Advanced Institutional</Link></li>
            <li><Link to="/courses/prop-firm" className="hover:text-white transition-colors">Prop Firm Mastery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-serif mb-6 text-brand-secondary italic">Company</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">Our Tutors</Link></li>
            <li><Link to="/results" className="hover:text-white transition-colors">Student Results</Link></li>
            <li><Link to="/resources" className="hover:text-white transition-colors">Free Resources</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Trading Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-serif mb-6 text-brand-secondary italic">Support</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-3 text-gray-500 text-xs italic bg-brand-primary border border-white/5 p-4 rounded-lg max-w-2xl">
            <ShieldCheck className="flex-shrink-0 text-brand-secondary" size={24} />
            <p>
              <span className="text-brand-secondary font-bold">RISK DISCLAIMER:</span> Trading Forex and leveraged financial instruments involves significant risk and can result in the loss of your invested capital. You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved. Past performance is not indicative of future results.
            </p>
          </div>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} AllTrade Forex Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
