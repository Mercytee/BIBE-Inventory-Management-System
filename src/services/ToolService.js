// ToolService.js

const API_URL = 'http://localhost:8080/tools';

async function fetchToolById(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

async function fetchToolsByCategory(category) {
    const response = await fetch(`${API_URL}/category/${category}`);
    return response.json();
}

async function addTool(tool) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tool)
    });
    return response.json();
}

async function updateTool(id, updatedTool) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTool)
    });
    return response.json();
}

async function deleteTool(id) {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
}

export { fetchToolById, fetchToolsByCategory, addTool, updateTool, deleteTool };