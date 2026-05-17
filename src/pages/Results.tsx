import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { ExternalLink, CheckCircle2, TrendingUp, DollarSign } from 'lucide-react';

export default function Results() {
  return (
    <div className="pt-32 pb-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h4 className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-4">The Proof</h4>
        <h1 className="text-6xl mb-8">Verified Student <br/><span className="text-brand-secondary italic text-4xl">Payouts & Success.</span></h1>
        <p className="text-brand-primary/60 text-xl max-w-2xl mx-auto">
          We don't sell dreams; we sell a skill-set that produces real capital. Below are verified certificates and performance links from our active community.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* BIG WINNER */}
        <section className="bg-brand-primary text-white p-12 rounded-[3.5rem] relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-20 opacity-5 group-hover:scale-110 transition-transform duration-1000">
              <TrendingUp size={400} />
           </div>
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <div className="bg-brand-secondary text-brand-primary px-4 py-1 rounded-full text-xs font-bold inline-block mb-6 uppercase tracking-widest">Featured Success</div>
                 <h2 className="text-5xl mb-8 font-serif">Mark V. passed the $200K FTMO Challenge.</h2>
                 <p className="text-white/60 text-xl italic mb-10 leading-relaxed">
                   "Before AllTrade, I was blowing $500 accounts every week. The mentorship corrected my psychological leaks and taught me how to wait for the high-probability setup. First payout: $14,200."
                 </p>
                 <div className="flex gap-4">
                    <Button variant="secondary" className="group">
                       View MyFxBook Profile
                       <ExternalLink className="ml-2 opacity-50 group-hover:opacity-100" size={16} />
                    </Button>
                 </div>
              </div>
              <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/10 group-hover:border-brand-secondary/30 transition-colors">
                 <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt="Trading Statistics"
                 />
              </div>
           </div>
        </section>

        {/* GRID OF RESULTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { name: "Sarah L.", payout: "$4,500", date: "May 2024", platform: "TFF", img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" },
             { name: "Ahmed K.", payout: "$8,200", date: "April 2024", platform: "FTMO", img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" },
             { name: "Jessica R.", payout: "$2,100", date: "May 2024", platform: "E8", img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" }
           ].map((res, i) => (
             <div key={i} className="bg-white p-6 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow border border-brand-primary/5">
                <div className="aspect-video bg-gray-100 rounded-3xl mb-6 overflow-hidden">
                   <img src={res.img} alt="Certificate" className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-between items-center mb-4">
                   <h4 className="text-xl font-bold">{res.name}</h4>
                   <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">{res.payout} Payout</span>
                </div>
                <div className="flex gap-4 text-xs font-bold text-brand-primary/30 uppercase tracking-widest">
                   <span>{res.platform}</span>
                   <span>•</span>
                   <span>{res.date}</span>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
