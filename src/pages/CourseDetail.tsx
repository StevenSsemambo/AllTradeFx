import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { 
  CheckCircle, 
  Play, 
  FileText, 
  MessageSquare, 
  ArrowRight,
  ShieldAlert,
  Zap,
  Globe
} from 'lucide-react';

const COURSE_DATA = {
  beginner: {
    title: "Beginner Bootcamp",
    price: "$499",
    problem: "You're lost in a sea of confusing terms and conflicting YouTube tutorials. You feel the excitement of the markets, but the fear of losing your hard-earned savings is holding you back.",
    solution: "Our Beginner Bootcamp is the 'survival guide' for the new trader. We strip away the noise and give you a clear, repeatable process to trade safely and profitably from Day 1."
  },
  intermediate: {
    title: "Mastering Institutional Flow",
    price: "$999",
    problem: "You know how to read a chart, but you Keep getting 'stopped out' just before the market moves in your direction. It feels like someone is watching your orders—and in reality, they are. Retail patterns are the liquidity for big banks.",
    solution: "Stop being the 'dumb money.' Our Intermediate Masterclass teaches you exactly how to identify where institutional orders are sitting. You'll learn to trade with the banks, not against them."
  },
  "prop-firm": {
    title: "Prop Firm Accelerator",
    price: "$1,499",
    problem: "You have a strategy, but you don't have the capital to make it worthwhile. Trading a $2,000 account will never give you financial freedom. But passing a $100K challenge feels impossible due to strict drawdown rules.",
    solution: "We specialize in 'Passing the Challenge.' Our Prop Firm Accelerator provides the exact risk-management equations and psychology needed to pass FTMO, MyForexFunds, and more. We provide the edge; you get the capital."
  }
};

export default function CourseDetail() {
  const { id } = useParams();

  const course = (COURSE_DATA as any)[id || 'intermediate'] || COURSE_DATA.intermediate;

  return (
    <div className="pt-20">
      {/* Sales Header */}
      <section className="bg-brand-primary text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h4 className="text-brand-secondary font-bold uppercase tracking-[0.3em] mb-6">Enrollment Open</h4>
            <h1 className="text-5xl md:text-7xl mb-8 font-serif leading-tight">{course.title}</h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12">
              Transform from a retail gambler into a systematic, data-driven professional trader in just 8 weeks.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="secondary" size="lg">Secure Your Seat for {course.price}</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PAS: THE PROBLEM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-red-500 font-bold mb-6 italic">
              <ShieldAlert size={20} />
              The Amateur Trap
            </div>
            <h2 className="text-5xl mb-8 leading-tight">Does This Sound Familiar?</h2>
            <p className="text-brand-primary/70 text-xl leading-relaxed italic mb-8">
              "{course.problem}"
            </p>
            <div className="space-y-4">
               {["Losing trades right after entry", "Blowing accounts due to 'revenge trading'", "Spending 10+ hours a day at the screen for zero profit"].map((p, i) => (
                 <div key={i} className="flex gap-4 text-brand-primary/50">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>{p}</span>
                 </div>
               ))}
            </div>
          </div>
          <div className="bg-brand-surface p-4 rounded-[3rem] relative">
            <img 
              src="https://images.unsplash.com/photo-1542222024-c39e2281f121?q=80&w=1974&auto=format&fit=crop" 
              className="rounded-[2.5rem] w-full shadow-2xl"
              alt="Frustrated Trader"
            />
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="py-24 bg-brand-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary -skew-x-12 translate-x-1/2 -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                   <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-primary/5">
                      <Zap className="text-brand-secondary mb-3" />
                      <h4 className="font-bold">Precision</h4>
                      <p className="text-xs text-brand-primary/40 leading-relaxed italic">Identify entries with 5.0+ Risk/Reward potential consistently.</p>
                   </div>
                   <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-primary/5">
                      <Globe className="text-brand-secondary mb-3" />
                      <h4 className="font-bold">Flow</h4>
                      <p className="text-xs text-brand-primary/40 leading-relaxed italic">Understand the macro narrative driving the global currency markets.</p>
                   </div>
                </div>
                <div className="space-y-4 pt-8">
                   <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-primary/5">
                      <MessageSquare className="text-brand-secondary mb-3" />
                      <h4 className="font-bold">Live Mentorship</h4>
                      <p className="text-xs text-brand-primary/40 leading-relaxed italic">Get corrected in real-time by traders with 10+ years of floor experience.</p>
                   </div>
                   <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-primary/5">
                      <FileText className="text-brand-secondary mb-3" />
                      <h4 className="font-bold">Blueprint</h4>
                      <p className="text-xs text-brand-primary/40 leading-relaxed italic">A 150-page digital manual covering every scenario the market throws.</p>
                   </div>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h4 className="text-brand-secondary font-bold uppercase text-sm mb-4">The Solution</h4>
            <h2 className="text-5xl mb-8 leading-tight">Trading Should Be Boring. <br/>Not Stressful.</h2>
            <p className="text-brand-primary/70 text-xl leading-relaxed mb-8">
              {course.solution}
            </p>
            <Button size="lg" className="group">
               Apply for Next Cohort 
               <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-4xl text-center mb-16">The Masterclass Curriculum</h2>
           <div className="space-y-4">
              {[
                { module: "Module 1", title: "Institutional Psychology", detail: "Why technical analysis alone fails and how to survive the hunt." },
                { module: "Module 2", title: "Smart Money Concepts", detail: "Liquidity hunts, Order Blocks, and Fair Value Gaps." },
                { module: "Module 3", title: "Advanced Management", detail: "Partialing out, trailing stops, and scaling into winners." },
                { module: "Module 4", title: "The High-Performance Routine", detail: "Pre-market checklists and the end-of-day journal ritual." }
              ].map((m, i) => (
                <div key={i} className="group p-8 border border-brand-primary/5 bg-brand-surface rounded-2xl transition-all hover:bg-white hover:shadow-xl cursor-help">
                   <div className="flex items-center gap-4 mb-2">
                      <span className="text-brand-secondary font-black text-xs uppercase tracking-widest">{m.module}</span>
                      <h4 className="text-xl font-bold">{m.title}</h4>
                   </div>
                   <p className="text-brand-primary/50 italic text-sm">{m.detail}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-primary py-24 text-white text-center">
         <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-5xl mb-8 font-serif leading-tight">Stop Donating to the Banks. Start Building Your Legacy.</h2>
            <p className="text-white/50 text-xl mb-12">Enrollment includes 12 months of Discord access, Weekly Live Webinars, and the AllTrade Risk Calculator Pro.</p>
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">Start Your Transformation Now</Button>
            </Link>
         </div>
      </section>
    </div>
  );
}
