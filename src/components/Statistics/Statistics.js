import React from "react";
import PropTypes from "prop-types";


const Statistics = ({ data, title }) => (
    <section class="statistics">
        {title && <h2 class="title">{title}</h2>}
        <ul class="stat-list">
            {data.map(({ id, label, percentage }) => (
                <li class="item">
                    <span class="label">{label}</span>
                    <span class="percentage">{percentage}</span>
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