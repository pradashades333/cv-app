import { useState } from "react";

function GeneralInfo({ data, onSubmit }) {
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
          <h2>General Info</h2>
          <label>Full Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <label>Phone Number:</label>
          <input type="number" name="phone" value={formData.phone} onChange={handleChange} />
          <button type="submit">Save Info</button>
        </form>
      ) : (
        <div>
          <h2>General Info</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;