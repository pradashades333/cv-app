import { useState } from "react";

function Experience({ data, onSubmit }) {
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
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <h2>Practical Experience</h2>
          <label>Company Name:</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} />
          <label>Position Title:</label>
          <input type="text" name="position" value={formData.position} onChange={handleChange} />
          <label>Main Responsibilities:</label>
          <input type="text" name="responsibilities" value={formData.responsibilities} onChange={handleChange} />
          <label>Date From:</label>
          <input type="text" name="dateFrom" value={formData.dateFrom} onChange={handleChange} />
          <label>Date Until:</label>
          <input type="text" name="dateUntil" value={formData.dateUntil} onChange={handleChange} />
          <button type="submit">Save Info</button>
        </form>
      ) : (
        <div>
          <h2>Practical Experience</h2>
          <p>Company: {formData.company}</p>
          <p>Position: {formData.position}</p>
          <p>Responsibilities: {formData.responsibilities}</p>
          <p>From: {formData.dateFrom}</p>
          <p>Until: {formData.dateUntil}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Experience;
