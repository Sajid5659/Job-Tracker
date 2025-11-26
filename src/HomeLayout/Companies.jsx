import React from 'react';
import Company from './Company';
import { motion } from 'framer-motion';

// Your animation variant
const cardAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const Companies = ({ data = [] }) => {
    return (
        <div className='p-20 bg-gradient-to-b from-blue-50 via-white to-blue-100'>
            <h1 className='text-center text-slate-800 font-bold text-4xl mb-10'>
                Available Companies
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {data.map(company => (
                    <motion.div
                        key={company.id}
                        variants={cardAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Company company={company} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Companies;
