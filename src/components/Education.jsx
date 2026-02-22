import { useState } from "react";

function Education({ data, onSubmit }) {
  const [formData, setFormData] = useState(data);
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setIsEditing(false);
  };

  return (
    <div className="section">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <h2>Education</h2>
          <label>School Name:</label>
          <input type="text" name="school" value={formData.school} onChange={handleChange} />
          <label>Title of Study:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
          <label>Date of Study:</label>
          <input type="text" name="date" value={formData.date} onChange={handleChange} />
          <button type="submit">Save Info</button>
        </form>
      ) : (
        <div>
          <h2>Education</h2>
          <p>School: {formData.school}</p>
          <p>Title of Study: {formData.title}</p>
          <p>Date: {formData.date}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Education;
