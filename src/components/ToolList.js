import React, { useEffect, useState } from 'react';
import ToolItem from './ToolItem';
import { fetchToolsByCategory } from '../services/ToolService'; 

function ToolList({ category }) {
    const [tools, setTools] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTools = async () => {
            try {
                setLoading(true);
                const toolsData = await fetchToolsByCategory(category);
                setTools(toolsData);
            } catch (error) {
                console.error('Error fetching tools:', error);
                // Optionally, handle error state
            } finally {
                setLoading(false);
            }
        };

        fetchTools();
    }, [category]);

    if (loading) {
        return <div>Loading tools...</div>;
    }

    if (tools.length === 0) {
        return <div>No tools found in this category.</div>;
    }

    return (
        <div>
            <h2>Tool List</h2>
            <ul>
                {tools.map(tool => (
                    <ToolItem key={tool.id} tool={tool} />
                ))}
            </ul>
        </div>
    );
}

export default ToolList;