function Employee({ name, role, description, image }) {
  return (
    <div className="employee">
      <img className="employee-image" src={image} alt={name} />
      <h3 className="employee-name">{name}</h3>
      <p className="employee-role">{role}</p>
      <p className="employee-description">{description}</p>
      <button className="home-button">Contact</button>
    </div>
  );
}

export default Employee;