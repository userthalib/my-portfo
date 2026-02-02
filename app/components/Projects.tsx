export default function Projects() {
  const myProjects = [
    { id: 1, title: "E-Commerce App", tech: "React, MySQL" },
    { id: 2, title: "Company Profile", tech: "CodeIgniter, Bootstrap" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {myProjects.map((project) => (
        <div key={project.id} className="p-6 border rounded-lg bg-white hover:shadow-lg transition">
          <h3 className="font-bold text-xl">{project.title}</h3>
          <p className="text-gray-600">Built with: {project.tech}</p>
        </div>
      ))}
    </div>
  );
}