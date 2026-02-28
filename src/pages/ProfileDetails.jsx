import { useParams } from "react-router-dom";

export default function ProfileDetails() {
  const { name } = useParams();

  const users = [
    {
      name: "Ganesh Soni",
      email: "ganeshsonirmg18@gmail.com",
      role: "Create Frontend",
      bio: "I am a passionate Frontend Engineer who specializes in building responsive and user-friendly web applications. I work with HTML, CSS, JavaScript, and React to create modern, interactive interfaces. I focus on writing clean, efficient code and ensuring smooth user experiences across different devices. I enjoy turning ideas into real, functional websites and continuously learning new technologies to improve my skills and stay updated with the latest trends in web development.",
    },
    {
      name: "Hemesh Mishra",
      email: "mishrahemesh87@gmail.com",
      role: "Making Project Report and PowerPoint Presentation (PPT)",
      bio: "I am currently working on creating a detailed project report and an engaging PowerPoint presentation. The project report includes the introduction, objectives, technologies used, methodology, features, and conclusion of the project. The PowerPoint presentation highlights the key points with clear explanations, visuals, and structured slides to make it easy to understand. My goal is to present the project in a professional, organized, and impressive way that clearly demonstrates my technical skills and understanding.",
    },
    {
      name: "Chandra Prakash",
      email: "chandraprakash@gmail.com",
      role: "Connect Backened",
      bio: "I am a Backend Engineer who specializes in building secure, scalable, and efficient server-side applications. I work with technologies like Node.js, Express, and databases to develop APIs and manage data effectively. I focus on writing clean, optimized code and ensuring smooth communication between the frontend and backend. I am passionate about problem-solving, improving application performance, and implementing authentication and security best practices to create reliable and robust web applications.",
    },
  ];

  const user = users.find((u) => u.name === name);

  if (!user) {
    return <h1 className="text-white text-center mt-10">User Not Found</h1>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="max-w-lg bg-gray-800 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
        <p className="mb-2"><strong>Email:</strong> {user.email}</p>
        <p className="mb-2"><strong>Role:</strong> {user.role}</p>
        <p className="mt-4 text-gray-300">{user.bio}</p>
      </div>
    </div>
  );
}