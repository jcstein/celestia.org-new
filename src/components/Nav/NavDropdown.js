import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import CircleIcon from '@/components/Buttons/CircleIcon';

const dropdownVariants = {
    closed: {
        opacity: 0,
        height: 0,
        transition: {
            when: 'afterChildren'
        }
    },
    open: {
        opacity: 1,
        height: 'auto',
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    closed: {
        opacity: 0,
        y: -20
    },
    open: {
        opacity: 1,
        y: 0
    }
};

const NavDropdown = ({ name, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const firstItemRef = useRef(null);

    useEffect(() => {
        if (isOpen && firstItemRef.current) {
            firstItemRef.current.focus();
        }
    }, [isOpen]);

    return (
        <div>
            <button className="w-full flex justify-between items-center group" onClick={() => setIsOpen(!isOpen)}>
                <h2 className="text-4xl grow-1">{name}</h2>
                <CircleIcon className="flex-grow-0" direction='up' hoverDirection='down' />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="w-full flex flex-col items-start overflow-hidden"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={dropdownVariants}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                key={`${name}-menu-item-${index}`}
                                variants={itemVariants}
                                className="w-full"
                            >
                                <Link href={item.url} ref={index === 0 ? firstItemRef : null}
                                    className="block w-full px-4 py-2">
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavDropdown;
