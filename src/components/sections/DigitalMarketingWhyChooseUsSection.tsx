'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaChartLine, FaUsers, FaLaptopCode, FaGlobe, FaShieldAlt, FaRocket, FaHashtag, FaCamera, FaLink, FaVideo } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';

// Note: Flowbite CSS and JS are included via CDN in the project setup
// <link href="https://cdn.jsdelivr.net/npm/flowbite@latest/dist/flowbite.min.css" rel="stylesheet" />
// <script src="https://cdn.jsdelivr.net/npm/flowbite@latest/dist/flowbite.min.js"></script>

export default function DigitalMarketingWhyChooseUsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animate the background glow effect based on scroll position
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0]);

  // State to store particle positions and opacities (generated on client side)
  const [particles, setParticles] = useState(
    Array.from({ length: 10 }, () => ({
      top: '0%',
      left: '0%',
      opacity: 0,
    }))
  );

  // Generate random positions and opacities on the client side
  useEffect(() => {
    setParticles(
      Array.from({ length: 10 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.5 + 0.2,
      }))
    );
  }, []);

  const reasons = [
    {
      title: 'Proven Results',
      description: 'Our digital marketing campaigns have driven measurable success for clients across industries in 2025.',
      icon: <FaChartLine className="w-10 h-10 text-brand-blue" aria-hidden="true" />,
    },
    {
      title: 'Custom Strategies',
      description: 'We craft tailored digital marketing strategies to meet your unique business goals and drive online growth.',
      icon: <FaUsers className="w-10 h-10 text-brand-blue" aria-hidden="true" />,
    },
    {
      title: 'Expert Team',
      description: 'Our team of digital marketing specialists brings SEO expertise and years of experience to every project.',
      icon: <FaLaptopCode className="w-10 h-10 text-brand-blue" aria-hidden="true" />,
    },
    {
      title: 'Global Reach',
      description: 'Expand your brand with affiliate marketing, influencer campaigns, and global strategies for 2025 success.',
      icon: <FaGlobe className="w-10 h-10 text-brand-blue" aria-hidden="true" />,
    },
    {
      title: 'Trusted Security',
      description: 'Protect your brand with online reputation management and secure digital marketing practices.',
      icon: <FaShieldAlt className="w-10 h-10 text-brand-blue" aria-hidden="true" />,
    },
    {
      title: 'Innovative Approach',
      description: 'We use cutting-edge tools and data-driven insights to deliver innovative solutions that maximize ROI.',
      icon: <FaRocket className="w-10 h-10 text-brand-blue" aria-hidden="true" />,
    },
  ];

  // Structured data for the section
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    "serviceType": "Digital Marketing",
    "provider": {
      "@type": "Organization",
      "name": "Intention Infoservice",
      "url": "https://intentioninfoservice.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Digital Avenue",
        "addressLocality": "Tech City",
        "postalCode": "TC 12345"
      }
    },
    "description": "Choose us as your trusted digital marketing partner in 2025 for proven results, custom strategies, SEO expertise, global reach, trusted security, and an innovative approach to drive online growth and conversions.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Why Choose Us",
      "itemListElement": reasons.map((reason, index) => ({
        "@type": "Service",
        "position": index + 1,
        "name": reason.title,
        "description": reason.description,
      })),
    },
  };

  return (
    <section className="relative bg-dark-900 py-8 md:py-12 overflow-hidden">
      <div className="w-full px-2 sm:px-[10%] relative z-10">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Subtle Grain Texture */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none z-0"
          style={{ backgroundImage: "url('/textures/grain.webp')" }}
        />
        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {particles.map((particle, index) => (
            <div
              key={index}
              className="particle absolute w-2 h-2 bg-white rounded-full"
              style={{
                top: particle.top,
                left: particle.left,
                opacity: 0,
                animation: `float-${index} ${5 + index * 0.5}s linear infinite`,
              }}
            >
              <style>
                {`
                  @keyframes float-${index} {
                    0% {
                      transform: translateX(-50px);
                      opacity: 0;
                    }
                    50% {
                      opacity: ${particle.opacity};
                    }
                    100% {
                      transform: translateX(1500px);
                      opacity: 0;
                    }
                  }
                `}
              </style>
            </div>
          ))}
        </div>
        {/* Floating Digital Marketing Icons */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <FaHashtag className="floating-icon absolute w-6 h-6 text-brand-blue" style={{ top: '10%', left: '5%', opacity: 0, animation: 'float-icon-1 4s linear infinite' }} />
          <FaCamera className="floating-icon absolute w-5 h-5 text-brand-blue" style={{ top: '20%', left: '15%', opacity: 0, animation: 'float-icon-2 4.4s linear infinite' }} />
          <FaGlobe className="floating-icon absolute w-7 h-7 text-brand-blue" style={{ top: '30%', left: '85%', opacity: 0, animation: 'float-icon-3 4.8s linear infinite' }} />
          <FaLink className="floating-icon absolute w-6 h-6 text-brand-blue" style={{ top: '70%', left: '10%', opacity: 0, animation: 'float-icon-4 5.2s linear infinite' }} />
          <FaVideo className="floating-icon absolute w-5 h-5 text-brand-blue" style={{ top: '80%', left: '90%', opacity: 0, animation: 'float-icon-5 5.6s linear infinite' }} />
          <style>
            {`
              @keyframes float-icon-1 {
                0% { transform: translateX(-50px); opacity: 0; }
                50% { opacity: 0.5; }
                100% { transform: translateX(1500px); opacity: 0; }
              }
              @keyframes float-icon-2 {
                0% { transform: translateX(-50px); opacity: 0; }
                50% { opacity: 0.4; }
                100% { transform: translateX(1500px); opacity: 0; }
              }
              @keyframes float-icon-3 {
                0% { transform: translateX(-50px); opacity: 0; }
                50% { opacity: 0.5; }
                100% { transform: translateX(1500px); opacity: 0; }
              }
              @keyframes float-icon-4 {
                0% { transform: translateX(-50px); opacity: 0; }
                50% { opacity: 0.3; }
                100% { transform: translateX(1500px); opacity: 0; }
              }
              @keyframes float-icon-5 {
                0% { transform: translateX(-50px); opacity: 0; }
                50% { opacity: 0.4; }
                100% { transform: translateX(1500px); opacity: 0; }
              }
            `}
          </style>
        </div>
        {/* Animated Light Flares */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg width="100%" height="100%">
            <line x1="-500" y1="20%" x2="1500" y2="20%" stroke="#00a0e3" strokeWidth="2" opacity="0.2" className="light-flare" />
            <line x1="-500" y1="40%" x2="1500" y2="40%" stroke="#393185" strokeWidth="2" opacity="0.2" className="light-flare" />
            <line x1="-500" y1="60%" x2="1500" y2="60%" stroke="#00a0e3" strokeWidth="2" opacity="0.2" className="light-flare" />
            <line x1="-500" y1="80%" x2="1500" y2="80%" stroke="#393185" strokeWidth="2" opacity="0.2" className="light-flare" />
            <style>
              {`
                .light-flare {
                  animation: flare 5s linear infinite;
                }
                @keyframes flare {
                  0% { transform: translateX(-500px); }
                  100% { transform: translateX(1500px); }
                }
              `}
            </style>
          </svg>
        </div>
        <div className="w-full px-2 sm:px-[10%] relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Why We’re Your Trusted Digital Marketing Partner in 2025
            </motion.h2>
            <motion.p
              className="text-lg text-brand-blue font-semibold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Proven Expertise to Elevate Your Brand with SEO Excellence
            </motion.p>
            <motion.p
              className="text-base text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              With years of experience and a client-first approach, we deliver measurable results through tailored digital marketing strategies that drive online growth and conversions.
            </motion.p>
          </div>
          {/* Circular Grid with Larger Circular Elements in a 3x2 Arrangement */}
          <div className="relative flex justify-center items-center" ref={ref}>
            {/* Background Glow Effect */}
            <motion.div
              className="absolute w-[900px] h-[900px] rounded-full bg-gradient-radial from-brand-blue/30 to-transparent z-0"
              style={{ opacity: glowOpacity }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full sm:max-w-5xl mx-auto relative z-10 flex justify-center">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  className="relative backdrop-blur-sm bg-white/10 bg-linear-to-b from-white/20 to-transparent rounded-full p-8 border border-[rgba(0,160,227,0.3)] shadow-inner hover:border-brand-blue hover:shadow-[0_0_20px_rgba(0,160,227,0.7)] hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center w-72 h-72 text-center mx-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && console.log(`Selected ${reason.title}`)}
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-3">{reason.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                  <p className="text-base text-gray-300">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* CTA Button (Styled with Flowbite Button) */}
          <motion.div
            className="flex justify-center mt-12 z-20 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="btn btn-primary hover:bg-brand-blue hover:shadow-[0_0_15px_rgba(0,160,227,0.5)] transition-all duration-300"
              icon={<FaArrowRight />}
              iconPosition="right"
              href="/contact-us"
              ariaLabel="Contact us to partner with us today for digital marketing success in 2025"
            >
              Partner with Us Today
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}