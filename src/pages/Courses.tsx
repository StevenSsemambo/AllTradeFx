import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { BookOpen, Trophy, Users, Shield, ArrowRight } from 'lucide-react';

const courses = [
  {
    id: "beginner",
    title: "Beginner Bootcamp",
    desc: "From zero to trading your first live account. We build your foundation with unbreakable iron rules.",
    price: "$499",
    duration: "4 Weeks",
    students: "4,500+",
    image: "https://images.unsplash.com/photo-1518186239717-2e9b1132a82d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "intermediate",
    title: "Mastering Institutional Flow",
    desc: "Learn to identify the footprint of big banks. Stop being the liquidity and start trading with it.",
    price: "$999",
    duration: "8 Weeks",
    students: "3,200+",
    image: "https://images.unsplash.com/photo-1611974717537-4835848bb167?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "prop-firm",
    title: "Prop Firm Accelerator",
    desc: "The blueprint to passing $100K+ challenges. Risk management, psychology, and a proven edge.",
    price: "$1,499",
    duration: "12 Weeks",
    students: "1,800+",
    image: "https://images.unsplash.com/photo-1454165833767-16013ae02e5b?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Courses() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 max-w-3xl">
          <h1 className="text-6xl mb-6">Choose Your <br/><span className="text-brand-secondary italic">Battlefield.</span></h1>
          <p className="text-brand-primary/60 text-xl leading-relaxed">
            Forex is not a game of skill; it's a game of psychology and risk. Our programs are designed to transform your mindset as much as your technical analysis.
          </p>
        </div>

        <div className="space-y-12">
          {courses.map((course, idx) => (
            <motion.div 
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-brand-primary/5 flex flex-col lg:flex-row"
            >
              <div className="lg:w-1/3 aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="lg:w-2/3 p-12 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-4xl">{course.title}</h2>
                    <span className="text-2xl font-sans font-black text-brand-secondary">{course.price}</span>
                  </div>
                  <p className="text-brand-primary/70 text-lg mb-8 max-w-xl">
                    {course.desc}
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
                    <div className="flex items-center gap-2 text-brand-primary/50 text-sm italic">
                      <BookOpen size={16} className="text-brand-secondary" /> {course.duration}
                    </div>
                    <div className="flex items-center gap-2 text-brand-primary/50 text-sm italic">
                      <Users size={16} className="text-brand-secondary" /> {course.students} Students
                    </div>
                    <div className="flex items-center gap-2 text-brand-primary/50 text-sm italic">
                      <Trophy size={16} className="text-brand-secondary" /> Certified
                    </div>
                    <div className="flex items-center gap-2 text-brand-primary/50 text-sm italic">
                      <Shield size={16} className="text-brand-secondary" /> Lifetime Access
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={`/courses/${course.id}`}>
                    <Button className="px-10 group">
                      View Syllabus 
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline">Consult a Mentor</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
