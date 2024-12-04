// ToolForm.js

import React from 'react';

const ToolForm = () => {
    return (
        <div>
            <h2>Add Tool</h2>
            <form>
                <label htmlFor="toolName">Tool Name:</label>
                <input type="text" id="toolName" name="toolName" />
                <button type="submit">Add Tool</button>
            </form>
        </div>
    );
}

export default ToolForm;
