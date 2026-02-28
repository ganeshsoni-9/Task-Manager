import { Link } from "react-router-dom";

export default function Profile() {
  const users = [
    {
      name: "Ganesh Soni",
      email: "ganeshsonirmg18@gmail.com",
      role: "Create Frontend",
      bio: "Passionate React developer focused on building responsive UI.",
    },
    {
      name: "Hemesh Mishra",
      email: "mishrahemesh87@gmail.com",
      role: "Making Project Report and PowerPoint Presentation (PPT)",
      bio: "Node.js and database specialist handling server-side logic.",
    },
    {
      name: "Chandra Prakash",
      email: "chandraprakash@gmail.com",
      role: "Connect Backened",
      bio: "Node.js and database specialist handling server-side logic.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Team Profiles</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg p-6 text-center"
          >
            <h2 className="text-xl font-semibold mb-4">{user.name}</h2>

            <p className="text-gray-400 text-sm">Email</p>
            <p className="mb-3">{user.email}</p>

            <p className="text-gray-400 text-sm">Role</p>
            <p className="mb-4">{user.role}</p>
<Link
  to={`/profile/${user.name}`}
  className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg inline-block text-white font-bold"
>View Profile
</Link>
          </div>
        ))}
      </div>
    </div>
  );
}