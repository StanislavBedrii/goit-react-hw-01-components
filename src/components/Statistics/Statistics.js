import React from "react";
import PropTypes from "prop-types";

import styles from './Statistics.module.scss';

const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8);


const Statistics = ({ data, title }) => (
    <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statList}>
            
            {data.map(({ id, label, percentage }) => (
                
                <li key={id} style={{ backgroundColor: randomColor() }} className={styles.item}>
                    <span className={styles.label}>{label}</span>
                    <span className={styles.percentage}>{percentage}</span>
                </li>
            ))}
        </ul>
    </section>
);


Statistics.defaultProps = {
    title: "",
};

Statistics.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        }),
    ).isRequired,
    title: PropTypes.string,
};

export default Statistics;