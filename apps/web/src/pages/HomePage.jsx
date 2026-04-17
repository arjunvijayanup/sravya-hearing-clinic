import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, MessageCircle, Ear, Stethoscope, MessageSquare, Heart, Users, Award, Shield, DollarSign, Star, StarHalf, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';
import ServiceCard from '@/components/ServiceCard.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import AppointmentModal from '@/components/AppointmentModal.jsx';
const HomePage = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const clinicLocations = [{
    id: 'valapad',
    name: 'Valapad Clinic',
    address: 'Valapad, Thrissur, Kerala',
    phone: '+91 88483 20580',
    whatsapp: '918848320580',
    mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=76.05%2C10.35%2C76.15%2C10.45&layer=mapnik&marker=10.40,76.10'
  }, {
    id: 'kodungallore',
    name: 'Kodungallore Clinic',
    address: 'Kodungallore, Thrissur, Kerala',
    phone: '+91 88483 20580',
    whatsapp: '918848320580',
    mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=76.15%2C10.15%2C76.25%2C10.25&layer=mapnik&marker=10.22,76.20'
  }, {
    id: 'thrissur',
    name: 'Thrissur City Clinic',
    address: 'Thrissur City, Kerala',
    phone: '+91 88483 20580',
    whatsapp: '918848320580',
    mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=76.15%2C10.45%2C76.25%2C10.55&layer=mapnik&marker=10.52,76.21'
  }];
  const services = [{
    icon: Ear,
    title: 'Hearing tests (Audiometry)',
    description: 'Comprehensive hearing assessments using advanced diagnostic equipment'
  }, {
    icon: Stethoscope,
    title: 'Hearing aid fitting & sales',
    description: 'Premium hearing aids tailored to your needs'
  }, {
    icon: MessageSquare,
    title: 'Speech therapy (Children & Adults)',
    description: 'Personalized speech and language therapy programs'
  }, {
    icon: Heart,
    title: 'Hearing loss management',
    description: 'Expert guidance for managing hearing loss'
  }, {
    icon: Users,
    title: 'Counseling & rehabilitation',
    description: 'Support and rehabilitation for better quality of life'
  }];
  const features = [{
    icon: Award,
    title: '25+ years of experience',
    description: 'Trusted expertise since 1995'
  }, {
    icon: Users,
    title: 'Trusted by families across Thrissur',
    description: 'Serving the community with dedication'
  }, {
    icon: Stethoscope,
    title: 'Modern diagnostic tools and equipment',
    description: 'State-of-the-art technology for accurate results'
  }, {
    icon: Heart,
    title: 'Personalized care plans',
    description: 'Tailored treatment for every patient'
  }, {
    icon: DollarSign,
    title: 'Affordable and transparent pricing',
    description: 'Quality care at fair prices'
  }, {
    icon: Shield,
    title: 'Compassionate professional staff',
    description: 'Caring experts who listen'
  }];
  const testimonials = [{
    name: 'Deepthi Bhasi',
    date: '8 months ago',
    rating: 5,
    quote: "Excellent experience with the clinic. The staff is highly professional, and the doctor explained everything clearly and patiently. Highly recommended for any hearing or speech-related concerns."
  }, {
    name: 'Athira A R',
    date: '11 months ago',
    rating: 5,
    quote: "Very good service and friendly staff. They took great care of us and the facilities are very modern. We saw significant improvements and are very thankful for their continuous support."
  }];
  return <>
      <Helmet>
        <title>Sravya Speech & Hearing Clinic - Expert care since 1995</title>
        <meta name="description" content="Providing speech and hearing solutions in Valapad, Kodungallore, Thrissur since 1995. Expert audiometry, hearing aids, speech therapy, and rehabilitation services." />
      </Helmet>

      <Header onBookAppointment={() => setAppointmentModalOpen(true)} />

      <main>
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/clinic-photo.jpg" alt="Sravya Speech & Hearing Clinic" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-primary/30"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{
              letterSpacing: '-0.02em'
            }}>
                Providing speech & hearing solutions since 1995
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Expert care for better communication and hearing health
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setAppointmentModalOpen(true)} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 transition-all duration-200 active:scale-[0.98]">
                  Book appointment
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 transition-all duration-200 active:scale-[0.98]">
                  <a href="tel:+918848320580">Call now</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true,
              margin: "-100px"
            }} transition={{
              duration: 0.6
            }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
                  Trusted care across Thrissur district
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Established in 1995, Sravya Speech & Hearing Clinic has been serving families with compassionate, patient-first care for over 25 years.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-medium text-foreground/90">
                  Sravya Speech & Hearing Clinic operates across 3 convenient locations in Thrissur district - Valapad, Kodungallore, and Thrissur - serving families and patients across the region.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team of experienced audiologists and speech therapists use modern diagnostic tools and evidence-based treatment approaches to help you or your loved ones achieve better communication and hearing health.
                </p>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true,
              margin: "-100px"
            }} transition={{
              duration: 0.6
            }} className="relative">
                <img src="/images/clinic-interior.png" alt="Modern clinic interior with professional equipment" className="rounded-2xl shadow-soft-lg w-full h-auto" />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Comprehensive speech and hearing care tailored to your needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {services.slice(0, 2).map((service, index) => <ServiceCard key={index} {...service} index={index} />)}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {services.slice(2, 5).map((service, index) => <ServiceCard key={index + 2} {...service} index={index + 2} />)}
            </div>
          </div>
        </section>

        <section id="why-us" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why choose us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                What sets us apart in speech and hearing care
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => <FeatureCard key={index} {...feature} index={index} />)}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Patient reviews</h2>
              
              <div className="flex flex-col items-center justify-center gap-2 mb-4 bg-background/50 py-6 px-8 rounded-2xl inline-block shadow-sm">
                <div className="flex gap-1">
                  <Star className="w-7 h-7 fill-[#FCD34D] text-[#FCD34D]" />
                  <Star className="w-7 h-7 fill-[#FCD34D] text-[#FCD34D]" />
                  <Star className="w-7 h-7 fill-[#FCD34D] text-[#FCD34D]" />
                  <Star className="w-7 h-7 fill-[#FCD34D] text-[#FCD34D]" />
                  <StarHalf className="w-7 h-7 fill-[#FCD34D] text-[#FCD34D]" />
                </div>
                <p className="text-xl text-foreground font-semibold mt-2">
                  4.5 out of 5 stars
                </p>
                <p className="text-muted-foreground">Based on 36 Google reviews</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} index={index} />)}
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg" className="bg-background hover:bg-muted gap-2 text-foreground transition-all">
                <a href="https://www.google.com/maps/search/Sravya+Speech+%26+Hearing+Clinic+Valapad" target="_blank" rel="noopener noreferrer">
                  View all reviews on Google
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="locations" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Locations</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Visit us at any of our 3 convenient clinics across Thrissur district
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clinicLocations.map((location, index) => <motion.div key={location.id} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true,
              margin: "-100px"
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="bg-card rounded-2xl overflow-hidden shadow-soft border-t-4 border-t-primary border-x border-b border-border hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                  <div className="h-48 w-full bg-muted relative">
                    <iframe src={location.mapUrl} width="100%" height="100%" style={{
                  border: 0,
                  pointerEvents: 'none'
                }} loading="lazy" title={`Map of ${location.name}`} className="absolute inset-0"></iframe>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{location.name}</h3>
                    <div className="flex items-start gap-3 mb-4 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm leading-relaxed">{location.address}</p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-border flex flex-col gap-3">
                      <Button asChild variant="outline" className="w-full justify-start gap-3 hover:text-primary hover:border-primary transition-colors">
                        <a href={`tel:${location.phone.replace(/\s+/g, '')}`}>
                          <Phone className="w-4 h-4" />
                          {location.phone}
                        </a>
                      </Button>
                      <Button asChild variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors">
                        <a href={`https://wa.me/${location.whatsapp}`} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-4 h-4" />
                          WhatsApp Us
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <AppointmentModal open={appointmentModalOpen} onOpenChange={setAppointmentModalOpen} />
    </>;
};
export default HomePage;