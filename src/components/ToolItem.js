import React from 'react';
import PropTypes from 'prop-types';
import '../App.css'; 

const ToolItem = ({ tool }) => {
    if (!tool) {
        return <div>No tool data available.</div>;
    }

    return (
        <div className="tool-item">
            <h3>{tool.name}</h3>
            <p>Description: {tool.description}</p>
            <p>Category: {tool.category}</p>
            {/* You can add more details here based on your tool object */}
        </div>
    );
};

ToolItem.propTypes = {
    tool: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
    }).isRequired,
};

export default ToolItem;