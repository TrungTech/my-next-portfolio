'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  }
};

const AllLearningTechs = () => {
  return (
    <>
      <motion.p
        className='text-base text-center lg:text-start mb-2.5 text-gray-400'
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        I am proficient in the following technologies and tools:
      </motion.p>

      <motion.ul
        className='flex justify-center items-center flex-wrap gap-3.5 text-[#444]'
        initial='hide'
        animate='show'
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >

        {/* Python */}
        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 brightness-100 hover:brightness-50'>
            <Image src='/skills/python.png' alt=' ' width={32} height={32} title="Python"/>
          </div>
        </motion.li>

        {/* GCP */}
        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 brightness-100 hover:brightness-50'>
            <Image src='/skills/googlecloud.svg' alt=' ' width={32} height={32} title="GCP"/>
          </div>
        </motion.li>

        {/* Terraform */}
        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 brightness-100 hover:brightness-50'>
            <svg xmlns='http://www.w3.org/2000/svg' width='32px' height='32px' viewBox='0 0 24 24' fill='#844FBA'>
              <title>Terraform</title>
              <path d='M1.44 0v7.575l6.561 3.79V3.787zm21.12 4.227l-6.561 3.791v7.574l6.56-3.787zM8.72 4.23v7.575l6.561 3.787V8.018zm0 8.405v7.575L15.28 24v-7.578z'/>
            </svg>
          </div>
        </motion.li>

        {/* Docker */}
        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 brightness-100 hover:brightness-50'>
            <Image src='/skills/docker.svg' alt=' ' width={32} height={32} title="Docker"/>
          </div>
        </motion.li>

        {/* Spark */}
        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 brightness-100 hover:brightness-50'>
            <Image src='/skills/spark.svg' alt=' ' width={42} height={32} title="Spark"/>
          </div>
        </motion.li>

        {/* Airflow */}
        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 brightness-100 hover:brightness-50'>
            <Image src='/skills/airflow.svg' alt=' ' width={32} height={32} title="Airflow"/>
          </div>
        </motion.li>

      </motion.ul>

    </>
  )
}


export default AllLearningTechs;