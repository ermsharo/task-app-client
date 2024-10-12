import { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60vw;
  margin: auto;
  padding: 1rem;
`;

const TaskBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
  padding: 1rem;
`;

const TaskButtonBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const DefaultButton = styled.div`
  background-color: #81fccb;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const DefaultTextBox = styled.input`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  width: calc(100% - 1rem);
  margin:auto; 
`;

// TaskAdd Component
function TaskAdd() {
  // State for task title and description
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Handler for saving the task (POST request)
  const handleSave = async () => {
    const newTask = { "title" : title, "description" : description };
    console.log("New task", newTask)
    
    try {
      const response = await fetch('http://127.0.0.1:7000/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Task saved successfully:', data);
        // Clear inputs after saving
        setTitle('');
        setDescription('');
      } else {
        console.error('Failed to save task:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <TaskBox>
      <h2>
        <DefaultTextBox
          type="text"
          value={title}
          placeholder="Task Title"
          onChange={(e) => setTitle(e.target.value)} // Update title state
        />
      </h2>
      <p>
        <DefaultTextBox
          type="text"
          value={description}
          placeholder="Task Description"
          onChange={(e) => setDescription(e.target.value)} // Update description state
        />
      </p>
      <TaskButtonBox>
        <DefaultButton onClick={handleSave}>Salvar</DefaultButton>
      </TaskButtonBox>
    </TaskBox>
  );
}

export default TaskAdd;
