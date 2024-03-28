
// // Skills.jsx
// import React, { useState } from 'react';

// const Skills = () => {
//   const [skills, setSkills] = useState([
//     { name: 'React', proficiency: 90, user: 'Comfort', type: 'Frameworks and Libraries' },
//     { name: 'Node.js', proficiency: 80, user: 'Kenneth', type: 'Programming Languages' }
//   ]);
//   const [newSkill, setNewSkill] = useState('');
//   const [newProficiency, setNewProficiency] = useState('');
//   const [selectedUser, setSelectedUser] = useState('');
//   const [skillType, setSkillType] = useState('');

//   const users = ['Comfort', 'Sandra', 'Kenneth', 'Priscilla'];
//   const skillTypes = ['Software Proficiency', 'Frameworks and Programming Languages and Libraries'];

//   const addSkill = (e) => {
//     e.preventDefault();
//     if (!newSkill || !newProficiency || !selectedUser || !skillType) {
//       alert('Please enter all fields.');
//       return;
//     }
//     const newSkillEntry = {
//       name: newSkill,
//       proficiency: Number(newProficiency),
//       user: selectedUser,
//       type: skillType
//     };
//     setSkills([...skills, newSkillEntry]);
//     setNewSkill('');
//     setNewProficiency('');
//     setSelectedUser('');
//     setSkillType('');
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-semibold">Manage Skills</h2>
//       <form onSubmit={addSkill} className="space-y-4">
//         <div>
//           <label className="block mb-2 text-sm font-bold text-gray-700">Skill Name</label>
//           <input
//             type="text"
//             value={newSkill}
//             onChange={(e) => setNewSkill(e.target.value)}
//             placeholder="Add a new skill"
//             className="border-2 p-2 rounded w-full"
//           />
//         </div>
//         <div>
//           <label className="block mb-2 text-sm font-bold text-gray-700">Proficiency (%)</label>
//           <input
//             type="number"
//             value={newProficiency}
//             onChange={(e) => setNewProficiency(e.target.value)}
//             placeholder="Proficiency (%)"
//             className="border-2 p-2 rounded w-full"
//             min="0"
//             max="100"
//           />
//         </div>
//         <div>
//           <label className="block mb-2 text-sm font-bold text-gray-700">User</label>
//           <select
//             value={selectedUser}
//             onChange={(e) => setSelectedUser(e.target.value)}
//             className="border-2 p-2 rounded w-full"
//           >
//             <option value="">Select User</option>
//             {users.map((user) => (
//               <option key={user} value={user}>{user}</option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="block mb-2 text-sm font-bold text-gray-700">Skill Type</label>
//           <select
//             value={skillType}
//             onChange={(e) => setSkillType(e.target.value)}
//             className="border-2 p-2 rounded w-full"
//           >
//             <option value="">Select Skill Type</option>
//             {skillTypes.map((type) => (
//               <option key={type} value={type}>{type}</option>
//             ))}
//           </select>
//         </div>
//         <button type="submit" className="p-2 bg-blue-500 text-white rounded">Add</button>
//       </form>
//       <ul>
//         {skills.map((skill, index) => (
//           <li key={index}>{skill.name} - {skill.proficiency}% ({skill.user}, {skill.type})</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Skills;
import React, { useState } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState([
    { id: 1, name: 'React', proficiency: 90, user: 'Comfort', type: 'Frameworks and Libraries' },
    { id: 2, name: 'Node.js', proficiency: 80, user: 'Kenneth', type: 'Programming Languages' }
  ]);
  const [newSkill, setNewSkill] = useState('');
  const [newProficiency, setNewProficiency] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [skillType, setSkillType] = useState('');
  const [editingSkill, setEditingSkill] = useState(null);

  const users = ['Comfort', 'Sandra', 'Kenneth', 'Priscilla'];
  const skillTypes = ['Software Proficiency', 'Frameworks and Programming Languages and Libraries'];

  const addSkill = (e) => {
    e.preventDefault();
    const skillData = { id: skills.length + 1, name: newSkill, proficiency: Number(newProficiency), user: selectedUser, type: skillType };
    setSkills([...skills, skillData]);
    resetForm();
  };

  const updateSkill = (e) => {
    e.preventDefault();
    setSkills(skills.map(skill => skill.id === editingSkill.id ? { ...editingSkill, name: newSkill, proficiency: Number(newProficiency), user: selectedUser, type: skillType } : skill));
    resetForm();
    setEditingSkill(null);
  };

  const editSkill = (skill) => {
    setEditingSkill(skill);
    setNewSkill(skill.name);
    setNewProficiency(skill.proficiency);
    setSelectedUser(skill.user);
    setSkillType(skill.type);
  };

  const deleteSkill = (id) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  const resetForm = () => {
    setNewSkill('');
    setNewProficiency('');
    setSelectedUser('');
    setSkillType('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 bg-gray-200 text-center p-3">Skills</h1>
      <h2 className="text-xl font-semibold">Add a New Skill or Update a Skill</h2>
      <form onSubmit={editingSkill ? updateSkill : addSkill} className="space-y-4">
        <input type="text" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} placeholder="Skill Name" className="border p-2 rounded w-full" />
        <input type="number" value={newProficiency} onChange={(e) => setNewProficiency(e.target.value)} placeholder="Proficiency (%)" className="border p-2 rounded w-full" />
        <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)} className="border p-2 rounded w-full">
          <option value="">Select User</option>
          {users.map(user => <option key={user} value={user}>{user}</option>)}
        </select>
        <select value={skillType} onChange={(e) => setSkillType(e.target.value)} className="border p-2 rounded w-full">
          <option value="">Select Type</option>
          {skillTypes.map(type => <option key={type} value={type}>{type}</option>)}
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">{editingSkill ? 'Update Skill' : 'Add Skill'}</button>
      </form>
      {skills.map(skill => (
        <div key={skill.id} className="p-4 mt-4 bg-gray-100 rounded flex justify-between items-center">
          <div>
            <p>{skill.name} - {skill.proficiency}%</p>
            <p>User: {skill.user}, Type: {skill.type}</p>
          </div>
          <div>
            <button onClick={() => editSkill(skill)} className="bg-yellow-400 p-2 rounded mr-2">Edit</button>
            <button onClick={() => deleteSkill(skill.id)} className="bg-red-500 p-2 rounded">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

