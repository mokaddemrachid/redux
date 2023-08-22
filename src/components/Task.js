import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleToggleDone = () => {
    dispatch(updateTask({ ...task, isDone: !task.isDone }));
  };

  const handleEditTask = () => {
    setEditMode(true);
  };

  const handleSaveEdit = () => {
    if (editedDescription.trim() !== '') {
      dispatch(updateTask({ ...task, description: editedDescription }));
      setEditMode(false);
    }
  };

  return (
    <li>
      {editMode ? (
        <div>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      ) : (
        <div>
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={handleToggleDone}
          />
          <span>{task.description}</span>
          <button onClick={handleEditTask}>Edit</button>
        </div>
      )}
    </li>
  );
};

export default Task;
