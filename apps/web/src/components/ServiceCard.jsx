import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, items, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 border border-border h-full flex flex-col"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      {description && <p className="text-muted-foreground leading-relaxed mb-2">{description}</p>}
      {items && (
        <ul className="text-muted-foreground space-y-1.5">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-primary font-bold leading-relaxed">•</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default ServiceCard;