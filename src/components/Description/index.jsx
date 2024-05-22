import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';

export default function index() {
  const phrase = 'I love building fast, maintainable and scaleable web applications.';
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(' ').map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  key={index}
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? 'open' : 'closed'}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}
