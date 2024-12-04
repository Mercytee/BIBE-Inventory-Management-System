import React, { useState, useEffect} from 'react';
import ToolList from './components/ToolList';
import AddToolForm from './components/AddToolForm';
import UpdateToolForm from './components/UpdateToolForm';
import { addTool, deleteTool, fetchToolById, fetchToolsByCategory, updateTool } from './services/ToolService'; // Named imports
import './App.css'; 
function App() {
    const [tools, setTools] = useState([]);
    const [selectedTool, setSelectedTool] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTools();
    }, []);

    const fetchTools = async () => {
        setLoading(true);
        setError(null);
        try {
            const toolsData = await fetchToolsByCategory('all'); // Use the named import
            setTools(toolsData);
        } catch (error) {
            console.error('Error fetching tools:', error);
            setError('Failed to fetch tools. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleAddTool = async (toolData) => {
        try {
            await addTool(toolData); // Use the named import
            fetchTools();
        } catch (error) {
            console.error('Error adding tool:', error);
            setError('Failed to add tool. Please try again.');
        }
    };

    const handleUpdateTool = async (updatedTool) => {
        try {
            await updateTool(updatedTool.id, updatedTool); // Use the named import
            setSelectedTool(null); // Reset selected tool
            fetchTools();
        } catch (error) {
            console.error('Error updating tool:', error);
            setError('Failed to update tool. Please try again.');
        }
    };

    const handleDeleteTool = async (toolId) => {
        try {
            await deleteTool(toolId); // Use the named import
            fetchTools();
        } catch (error) {
            console.error('Error deleting tool:', error);
            setError('Failed to delete tool. Please try again.');
        }
    };

    const handleSelectTool = (tool) => {
        setSelectedTool(tool);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Inventory Management System</h1>
                {error && <div className="error">{error}</div>}
                <AddToolForm onAddTool={handleAddTool} />
                <UpdateToolForm tool={selectedTool} onUpdate={handleUpdateTool} />
                {loading ? (
                    <div>Loading tools...</div>
                ) : (
                    <ToolList tools={tools} onSelectTool={handleSelectTool} onDeleteTool={handleDeleteTool} />
                )}
            </header>
        </div>
    );
}

export default App;