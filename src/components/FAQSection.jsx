import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const faqs = [
    {
      question: "What is Web3 technology?",
      answer: "Web3 represents the next evolution of the internet, built on decentralized blockchain technology. Unlike Web2, Web3 emphasizes user ownership, transparency, and permissionless access. It enables direct peer-to-peer interactions without traditional intermediaries."
    },
    {
      question: "How do smart contracts work?",
      answer: "Smart contracts are self-executing contracts with terms directly written into code. They automatically enforce and execute agreements when predetermined conditions are met, eliminating the need for intermediaries. They run on blockchain networks, ensuring transparency and immutability."
    },
    {
      question: "What is a blockchain wallet?",
      answer: "A blockchain wallet is a digital tool that allows users to store, send, and receive cryptocurrencies and other digital assets. It contains your private keys, which prove your ownership of digital assets and enable you to interact with decentralized applications (dApps)."
    },
    {
      question: "What are NFTs?",
      answer: "Non-Fungible Tokens (NFTs) are unique digital assets verified using blockchain technology. Unlike cryptocurrencies, each NFT is unique and can't be replaced with something else of equal value. They can represent digital art, music, virtual real estate, and more."
    },
    {
      question: "How does decentralized finance (DeFi) work?",
      answer: "Decentralized Finance (DeFi) uses smart contracts and blockchain technology to provide traditional financial services without central intermediaries. This includes lending, borrowing, trading, and earning interest, all managed through transparent, automated protocols."
    },
    {
      question: "What is cryptocurrency mining?",
      answer: "Cryptocurrency mining is the process of validating and recording transactions on a blockchain network. Miners use powerful computers to solve complex mathematical problems, competing to add new blocks to the chain. Successful miners are rewarded with newly created cryptocurrencies."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          duration: 0.3
        },
        opacity: {
          duration: 0.25,
          delay: 0.15
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-[rgb(3,0,10)] py-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Your Guide to Web3 Technology
          </motion.p>
        </div>

        <motion.div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-colors duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
              >
                <span className="text-lg text-gray-100 font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: hoveredIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-blue-400"
                >
                  {hoveredIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </motion.div>
              </div>

              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Help Section */}
        <motion.div
          className="mt-16 p-6 bg-blue-600/10 rounded-lg border border-blue-500/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-4">
            Our team is here to help you navigate the world of Web3
          </p>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Contact Support
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FAQSection;
