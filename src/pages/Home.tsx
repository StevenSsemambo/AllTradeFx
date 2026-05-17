import { motion } from 'motion/react';
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  PlayCircle, 
  CheckCircle2, 
  BarChart2, 
  Zap,
  Star
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* SECTION 1: HERO */}
      <section className="relative min-height-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 -z-10" />
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-secondary/10 text-brand-secondary rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Zap size={14} fill="currentColor" />
              Institutional-Grade Education
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 leading-[1.1]">
              Master the Forex Markets. <br />
              <span className="text-brand-secondary italic">Skip the Costly Mistakes.</span>
            </h1>
            <p className="text-xl text-brand-primary/70 mb-10 max-w-lg leading-relaxed">
              Stop guessing market trends. Get the exact strategies, risk management tools, and live mentorship used by professional traders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <Button size="lg" className="group">
                  Explore Our Courses
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/resources">
                <Button variant="outline" size="lg">
                  Start Free Mini-Course
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
               <img 
                 src="https://images.unsplash.com/photo-1611974717537-4835848bb167?q=80&w=2070&auto=format&fit=crop" 
                 alt="Forex Trading Dashboard"
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-brand-primary/20 flex items-center justify-center">
                 <PlayCircle className="text-white w-20 h-20 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
               </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-secondary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CREDIBILITY STRIP */}
      <section className="border-y border-brand-primary/5 bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8 md:gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="flex items-center gap-2"><Star className="fill-brand-secondary text-brand-secondary" size={20}/> <span className="font-bold text-sm">TRUSTPILOT 4.9/5</span></div>
           <div className="font-serif font-black text-lg">INVESTING.COM</div>
           <div className="font-serif font-black text-lg italic">Bloomberg</div>
           <div className="flex items-center gap-2 font-bold text-sm"><Users size={20}/> 12,000+ STUDENTS</div>
           <div className="font-serif font-black text-lg tracking-widest">FORBES</div>
        </div>
      </section>

      {/* SECTION 3: PROBLEM & SOLUTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div {...fadeInUp}>
               <h4 className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-4">The Reality Check</h4>
               <h2 className="text-4xl mb-6">Why 95% of Retail Traders Fail In Their First Year.</h2>
               <p className="text-brand-primary/60 mb-8 leading-relaxed">
                 The market isn't rigged—it's just misunderstood. Most beginners enter the market with excitement but no armor, falling victim to common traps:
               </p>
               <ul className="space-y-6">
                  {[
                    "Emotional trading without a rigid rule-set.",
                    "Following 'Lamborghini-flexing' gurus with no real data.",
                    "Over-leveraging and blowing accounts in weeks.",
                    "Analysis paralysis from information overload."
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0 mt-1">
                        <X size={14} strokeWidth={3} />
                      </div>
                      <span className="text-brand-primary/80 font-medium">{item}</span>
                    </li>
                  ))}
               </ul>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-brand-primary text-white p-12 rounded-3xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <ShieldCheck size={200} />
               </div>
               <h4 className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-4">The Solution</h4>
               <h2 className="text-white text-4xl mb-6 text-white font-serif">AllTrade Academy: The Institutional Antidote.</h2>
               <p className="text-white/60 mb-10 italic">
                 We don't teach signals. We teach mastery. Our methodology is built on data-driven institutional flow, precision risk management, and psychological resilience.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: <TrendingUp size={20}/>, title: "Live Trading", desc: "Watch our mentors trade real accounts in real-time." },
                    { icon: <ShieldCheck size={20}/>, title: "Risk First", desc: "Preserving capital is our #1 priority." },
                    { icon: <Users size={20}/>, title: "Discord Pro", desc: "24/7 access to our global professional network." },
                    { icon: <CheckCircle2 size={20}/>, title: "Verified", desc: "Documented student payouts and MyFxBook results." }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-brand-secondary mb-2">{item.icon}</div>
                      <h5 className="font-bold mb-1">{item.title}</h5>
                      <p className="text-xs text-white/40">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COURSE PREVIEW */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 underline-offset-8">
            <h2 className="text-5xl mb-4">Your Path to Mastery</h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto">
              Select the enrollment track that matches your current experience. Each program includes lifetime access and mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Beginner",
                subtitle: "The Foundation",
                price: "$499",
                features: ["Market Basics", "Platform Setup", "Basic Price Action", "Risk 101"],
                color: "bg-white"
              },
              {
                title: "Intermediate",
                subtitle: "Advanced Strategy",
                price: "$999",
                popular: true,
                features: ["SMC Mastery", "Institutional Flow", "Volume Analysis", "Daily Live Sessions"],
                color: "bg-white border-2 border-brand-secondary"
              },
              {
                title: "Advanced",
                subtitle: "Prop Firm Mastery",
                price: "$1,499",
                features: ["Funded Account Passing", "Scaling Systems", "1-on-1 Mentorship", "Custom Trading Plan"],
                color: "bg-white"
              }
            ].map((course, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className={cn(
                  "p-8 rounded-3xl shadow-lg relative flex flex-col h-full",
                  course.color
                )}
              >
                {course.popular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-secondary text-brand-primary px-4 py-1 rounded-full text-xs font-bold uppercase">
                    Most Popular
                  </div>
                )}
                <h4 className="text-brand-secondary font-bold text-sm uppercase mb-2 tracking-tighter italic">{course.subtitle}</h4>
                <h3 className="text-3xl mb-4">{course.title}</h3>
                <div className="text-4xl font-sans font-black mb-8">{course.price}</div>
                <div className="space-y-4 mb-10 flex-grow">
                   {course.features.map((f, i) => (
                     <div key={i} className="flex items-center gap-3 text-sm text-brand-primary/70">
                       <CheckCircle2 size={16} className="text-green-500" />
                       {f}
                     </div>
                   ))}
                </div>
                <Link to={`/courses/${course.title.toLowerCase()}`}>
                  <Button variant={course.popular ? 'secondary' : 'primary'} className="w-full">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: RESULTS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-5xl mb-6">Real Results. Not Just Screenshots.</h2>
              <p className="text-brand-primary/60 text-lg">
                Success in trading is measured in withdrawals and funded accounts. Here is what our community is achieving month after month.
              </p>
            </div>
            <Link to="/results">
              <Button variant="outline">View All Verified Results</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-brand-surface rounded-2xl overflow-hidden border border-brand-primary/5 group cursor-pointer">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop`} 
                    alt="Success Story"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent p-6 flex flex-col justify-end">
                    <p className="text-white font-bold text-lg mb-1">$250K Funded Account</p>
                    <p className="text-brand-secondary text-sm italic">FTMO Student Certificate</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: RISK REVERSAL & FINAL CTA */}
      <section className="py-24 bg-brand-primary text-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl mb-8 font-serif">Stop Waiting for a "Better Time." The Markets Don't Wait.</h2>
            <p className="text-white/60 text-xl mb-12 leading-relaxed">
              Join the next cohort of professional traders. Limited seats available for our upcoming live mentorship session starting in 4 days.
            </p>
            <div className="inline-flex gap-8 mb-12 items-center bg-white/5 p-6 rounded-2xl border border-white/10">
               <div className="text-center">
                 <div className="text-3xl font-black text-brand-secondary">04</div>
                 <div className="text-[10px] uppercase font-bold tracking-widest opacity-50">Days</div>
               </div>
               <div className="text-3xl font-black opacity-20">:</div>
               <div className="text-center">
                 <div className="text-3xl font-black text-brand-secondary">12</div>
                 <div className="text-[10px] uppercase font-bold tracking-widest opacity-50">Hours</div>
               </div>
               <div className="text-center">
                  <div className="bg-brand-secondary text-brand-primary px-3 py-1 rounded text-xs font-bold whitespace-nowrap">15 SEATS LEFT</div>
               </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg">Enroll in the Academy Today</Button>
              </Link>
              <Button variant="ghost" className="text-white">Speak with a Mentor</Button>
            </div>
        </div>
      </section>

      {/* WHATSAPP FLOATING */}
      <a 
        href="https://wa.me/your-number" 
        target="_blank" 
        className="fixed bottom-8 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.319 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.438-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.735-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      </a>
    </div>
  );
}

const X = ({ size, strokeWidth }: { size?: number; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
