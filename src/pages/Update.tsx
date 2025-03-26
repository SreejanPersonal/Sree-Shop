
import { motion } from "framer-motion";
import { AlertTriangle, Clock, RefreshCw, Shield, Star, Users } from "lucide-react";
import { useEffect, useState } from "react";

const apiTypes = [
  {
    name: "Beta API",
    description: "Early access to our newest features and functionalities. Ideal for developers who want to experiment with cutting-edge capabilities.",
    icon: <Star className="h-6 w-6 text-amber-500" />,
    color: "bg-amber-50 dark:bg-amber-950/30",
    borderColor: "border-amber-200 dark:border-amber-900/50",
    textColor: "text-amber-900 dark:text-amber-300",
  },
  {
    name: "Paid API",
    description: "Enterprise-grade reliability and performance with dedicated support. Best for businesses that require high availability and priority access.",
    icon: <Shield className="h-6 w-6 text-blue-500" />,
    color: "bg-blue-50 dark:bg-blue-950/30",
    borderColor: "border-blue-200 dark:border-blue-900/50",
    textColor: "text-blue-900 dark:text-blue-300",
  },
  {
    name: "Free API",
    description: "Basic access to our core functionality. Perfect for hobbyists, students, and developers working on small-scale or personal projects.",
    icon: <Users className="h-6 w-6 text-green-500" />,
    color: "bg-green-50 dark:bg-green-950/30", 
    borderColor: "border-green-200 dark:border-green-900/50",
    textColor: "text-green-900 dark:text-green-300",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 12
    },
  },
};

const Update = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const releaseDate = new Date("2025-03-27T17:00:00+05:30");
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const getTimeRemaining = () => {
    const total = releaseDate.getTime() - currentTime.getTime();
    
    // Return all zeros if the date has passed
    if (total <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return { days, hours, minutes, seconds };
  };
  
  const timeRemaining = getTimeRemaining();
  
  const formatTimeValue = (value: number) => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-indigo-50 dark:from-gray-900 dark:to-slate-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container max-w-5xl mx-auto px-4 py-16 sm:py-24 relative z-10">
        <motion.div 
          className="space-y-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm shadow-sm border border-indigo-100 dark:bg-gray-800/70 dark:border-gray-700">
              <RefreshCw className="w-4 h-4 mr-2 text-indigo-500 dark:text-indigo-400" />
              <span className="text-sm font-medium text-indigo-800 dark:text-indigo-300">System Update</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-gray-900 dark:text-white">
              API Service Status
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              We're currently undergoing maintenance to improve our services.
            </p>
          </motion.div>

          {/* Notice */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel bg-white/90 dark:bg-gray-800/80 p-6 sm:p-8 backdrop-blur-lg"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-shrink-0 p-3 rounded-full bg-amber-100 dark:bg-amber-900/30">
                <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  All APIs are currently not accepting new customers
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our team is working to fix some issues. We will resume accepting new customers starting from <span className="font-medium text-gray-800 dark:text-gray-200">March 27, 2025 at 17:00 IST</span>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div variants={itemVariants} className="py-6">
            <h2 className="text-center text-xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              Time until services resume
            </h2>
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto">
              {[
                { label: "Days", value: timeRemaining.days },
                { label: "Hours", value: timeRemaining.hours },
                { label: "Minutes", value: timeRemaining.minutes },
                { label: "Seconds", value: timeRemaining.seconds },
              ].map((item, index) => (
                <div 
                  key={item.label} 
                  className="flex flex-col items-center"
                >
                  <div className="w-full aspect-square flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm card-glow">
                    <span className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white">
                      {formatTimeValue(item.value)}
                    </span>
                  </div>
                  <span className="mt-2 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* API Types */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              API Service Options
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {apiTypes.map((api, index) => (
                <motion.div
                  key={api.name}
                  className={`relative overflow-hidden rounded-2xl border shadow-sm p-6 ${api.color} ${api.borderColor} transition-all duration-300 hover:shadow-md`}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.5 }}
                >
                  <div className="absolute top-0 right-0 h-20 w-20 -mr-6 -mt-6 bg-white/10 rounded-full blur-xl"></div>
                  <div className="flex items-center mb-4">
                    <div className="mr-3">
                      {api.icon}
                    </div>
                    <h3 className={`text-lg font-bold ${api.textColor}`}>{api.name}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{api.description}</p>
                  <div className="flex items-center mt-auto">
                    <div className="px-2.5 py-1 bg-black/5 dark:bg-white/10 rounded text-xs font-medium inline-flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>Resuming soon</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div 
            variants={itemVariants}
            className="text-center text-sm text-gray-500 dark:text-gray-400 pt-8"
          >
            <p>Thank you for your patience as we work to improve our services.</p>
            <p className="mt-2">© 2024 API Service. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Update;
