import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { updateTool } from '../services/ToolService';

const UpdateToolForm = ({ tool, onUpdate }) => {
    const [updatedTool, setUpdatedTool] = useState(tool || { id: '', name: '', description: '', category: '' });

    useEffect(() => {
        if (tool) {
            setUpdatedTool(tool);
        }
    }, [tool]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedTool({
            ...updatedTool,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateTool(updatedTool.id, updatedTool);
            alert('Tool updated successfully!');
            onUpdate(updatedTool); // Notify parent component about the update
        } catch (error) {
            console.error('Error updating tool:', error);
            alert('An error occurred while updating the tool');
        }
    };

    // Render nothing if tool is null (or you can display a message)
    if (!tool) {
        return <div>No tool selected for update.</div>;
    }

    return (
        <div>
            <h2>Update Tool</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={updatedTool.name} onChange={handleInputChange} required />
                
                <label>Description:</label>
                <textarea name="description" value={updatedTool.description} onChange={handleInputChange} required />
                
                <label>Category:</label>
                <input type="text" name="category" value={updatedTool.category} onChange={handleInputChange} required />
                
                <button type="submit">Update Tool</button>
            </form>
        </div>
    );
};

UpdateToolForm.propTypes = {
    tool: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
    }),
    onUpdate: PropTypes.func.isRequired,
};

// Default props to avoid null issues
UpdateToolForm.defaultProps = {
    tool: null,
};

export default UpdateToolForm;