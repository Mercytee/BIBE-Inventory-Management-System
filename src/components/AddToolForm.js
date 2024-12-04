// AddToolForm.js

import React, { useState } from 'react';
import { addTool } from '../services/ToolService'; // Correct import path
import { deleteTool, fetchToolById, fetchToolsByCategory, updateTool } from '../services/ToolService'; // Updated line

const AddToolForm = () => {
    const [toolData, setToolData] = useState({
        name: '',
        description: '',
        category: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setToolData({
            ...toolData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addTool(toolData);
            alert('Tool added successfully!');
            setToolData({
                name: '',
                description: '',
                category: ''
            });
        } catch (error) {
            console.error('Error adding tool:', error);
            alert('An error occurred while adding the tool');
        }
    };

    return (
        <div>
            <h2>Add New Tool</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={toolData.name} onChange={handleInputChange} required />
                
                <label>Description:</label>
                <textarea name="description" value={toolData.description} onChange={handleInputChange} required />
                
                <label>Category:</label>
                <input type="text" name="category" value={toolData.category} onChange={handleInputChange} required />
                
                <button type="submit">Add Tool</button>
            </form>
        </div>
    );
};

export default AddToolForm;