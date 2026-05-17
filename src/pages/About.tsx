import { motion } from 'motion/react';
import { ShieldCheck, Target, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h4 className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-4">Behind the Academy</h4>
              <h1 className="text-6xl mb-8 leading-tight">Trading Floor <br/><span className="text-brand-secondary italic text-4xl leading-tight">Born and Bred.</span></h1>
              <p className="text-brand-primary/60 text-lg leading-relaxed mb-6">
                AllTrade Forex wasn't built in a home office with a green screen. It was born on the institutional trading floors where millions are moved in seconds.
              </p>
              <p className="text-brand-primary/60 text-lg leading-relaxed">
                Our founders, former hedge fund quantitative analysts and senior floor traders, realized that the education available to the public was fundamentally flawed. We decided to bridge the gap between "Retail Gambling" and "Institutional Excellence."
              </p>
            </div>
            <div className="relative">
               <img 
                 src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?q=80&w=2070&auto=format&fit=crop" 
                 alt="Trading Team"
                 className="rounded-[3rem] shadow-2xl"
               />
               <div className="absolute -bottom-10 -right-10 bg-brand-primary text-white p-8 rounded-3xl shadow-2xl border border-white/10 hidden md:block">
                  <div className="text-3xl font-black text-brand-secondary">15+</div>
                  <div className="text-xs uppercase tracking-widest font-bold opacity-50 italic">Years Experience</div>
               </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-surface -mx-6 px-6">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="text-5xl mb-4">Our Core Tenets</h2>
                 <p className="text-brand-primary/50 italic">The pillars that define every AllTrade student.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {[
                   { icon: <ShieldCheck />, title: "Absolute Transparency", desc: "We publish all our trades, wins, and losses. No cherry-picking." },
                   { icon: <Target />, title: "Risk Authoritarianism", desc: "If you don't respect risk, you aren't an AllTrade trader. Period." },
                   { icon: <Award />, title: "Continuous Evolution", desc: "Markets move. We update our curriculum quarterly to stay ahead." }
                 ].map((t, i) => (
                   <div key={i} className="text-center p-8 bg-white rounded-3xl shadow-sm">
                      <div className="w-16 h-16 bg-brand-primary text-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                         {t.icon}
                      </div>
                      <h4 className="text-xl font-bold mb-4">{t.title}</h4>
                      <p className="text-brand-primary/60 text-sm leading-relaxed italic">{t.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
