import Employee from "./Employee";

const employees = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Chief Executive Officer (CEO)",
    description:
      "Emily leads our team with vision and a passion for innovation. With over 10 years of experience in the e-commerce industry, her mission is to ensure every customer has the best possible experience.",
    image: "/images/emily.jpg",
  },
  {
    id: 2,
    name: "Sarah Smith",
    role: "Head of Product Development",
    description:
      "Sarah oversees product development and selection. Her expertise in market trends and product quality ensures that our offerings meet the highest standards.",
    image: "/images/sarah.jpg",
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Marketing & Community Manager",
    description:
      "Michael manages all marketing campaigns and community engagement. He ensures that every customer receives clear information and feels connected to our brand.",
    image: "/images/michael.jpg",
  },
];

function Team() {
  return (
    <section className="team">
      <h2>Meet the Team</h2>

      <div className="team-list">
        {employees.map((employee) => (
          <Employee
            key={employee.id}
            name={employee.name}
            role={employee.role}
            description={employee.description}
            image={employee.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Team;