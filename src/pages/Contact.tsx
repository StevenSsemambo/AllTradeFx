import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  interest: z.enum(['beginner', 'intermediate', 'advanced', 'prop-firm']),
  message: z.string().min(10, 'Please tell us a bit more about your background')
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Real API implementation
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Submission failed', error);
      // Fallback for demo
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-6xl mb-8">Let's Talk <br/><span className="text-brand-secondary italic">Strategy.</span></h1>
            <p className="text-brand-primary/60 text-xl mb-12 leading-relaxed">
              Have questions about our curriculum? Not sure which track is right for you? Our mentors are ready to guide you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-secondary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Us</h4>
                  <p className="text-brand-primary/50 text-sm italic">admissions@alltradeforex.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Direct Line</h4>
                  <p className="text-brand-primary/50 text-sm italic">+1 (555) 0123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-secondary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Global HQ</h4>
                  <p className="text-brand-primary/50 text-sm italic">Trading Floor, Level 42, Financial District, NY</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-brand-primary/5">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                   <Send size={32} />
                </div>
                <h3 className="text-3xl mb-4">Message Received!</h3>
                <p className="text-brand-primary/60">One of our senior mentors will reach out to you within the next 2 hours.</p>
                <Button variant="outline" className="mt-8" onClick={() => setSubmitted(false)}>Send Another Message</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-primary/40">Full Name</label>
                    <input 
                      {...register('name')}
                      className="w-full bg-brand-surface border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-secondary/50 outline-none transition-all"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-primary/40">Email Address</label>
                    <input 
                      {...register('email')}
                      className="w-full bg-brand-surface border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-secondary/50 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-primary/40">Phone Number</label>
                    <input 
                      {...register('phone')}
                      className="w-full bg-brand-surface border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-secondary/50 outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-primary/40">Program of Interest</label>
                    <select 
                      {...register('interest')}
                      className="w-full bg-brand-surface border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-secondary/50 outline-none transition-all appearance-none"
                    >
                      <option value="beginner">Beginner Bootcamp</option>
                      <option value="intermediate">Intermediate Strategy</option>
                      <option value="advanced">Advanced Institutional</option>
                      <option value="prop-firm">Prop Firm Mastery</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-primary/40">Your Trading Story</label>
                  <textarea 
                    {...register('message')}
                    rows={4}
                    className="w-full bg-brand-surface border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-secondary/50 outline-none transition-all resize-none"
                    placeholder="Tell us about your experience and your goals..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <Button className="w-full py-5" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending Request...' : 'Apply for Enrollment'}
                </Button>
                
                <p className="text-[10px] text-center text-brand-primary/30 uppercase tracking-[0.2em]">
                  By submitting, you agree to our privacy policy and terms of service.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
