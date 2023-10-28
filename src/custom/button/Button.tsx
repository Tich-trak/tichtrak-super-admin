import React from 'react';
import { ReactComponent as Event } from '../../svg/event.svg';
import styles from '../button/button.module.scss';

interface ComponentProps {
    text: React.ReactNode;
    image: React.ReactNode;
}

const CustomButton = () => {
    return (
        <button className={styles.container}>
            <div>Create Event</div>
            <div><Event /></div>
        </button>
    )
}

export default CustomButton;