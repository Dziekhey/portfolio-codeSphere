import React, { useState } from 'react';
// import './Blogs.css'; // Ensure this path matches your CSS file's location

const Blogs = () => {
  const [blogs, setBlogs] = useState([
    {
        title: 'First Sample Blog',
        summary: 'This is a summary of the first sample blog. It talks about React components.',
        image: 'https://via.placeholder.com/150',
        link: 'https://reactjs.org'
    },
    {
        title: 'Second Sample Blog',
        summary: 'This is a summary of the second sample blog. It discusses state management in React.',
        image: 'https://via.placeholder.com/150',
        link: 'https://redux.js.org'
    },
    {
        title: 'Third Sample Blog',
        summary: 'This is a summary of the third sample blog. It explores routing with React Router.',
        image: 'https://via.placeholder.com/150',
        link: 'https://reactrouter.com'
    }
  ]);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');

  const addBlog = (e) => {
    e.preventDefault();
    const newBlog = {
      title,
      summary,
      image,
      link,
    };
    setBlogs([...blogs, newBlog]);
    // Reset form fields
    setTitle('');
    setSummary('');
    setImage('');
    setLink('');
  };

  return (
    <div className="container">
    <h1 className="text-2xl font-bold mb-4 bg-gray-200 text-center p-3">Blogs</h1>
      <h2 className="text-2xl font-bold mb-6">Add a New Blog</h2>
      <form onSubmit={addBlog} className="mb-8">
        <input
          className="input-field"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog Title"
          required
        />
        <textarea
          className="input-field"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Blog Summary"
          required
        />
        <input
          className="input-field"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          required
        />
        <input
          className="input-field"
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Blog Link"
          required
        />
        <button type="submit" className="submit-btn">Add Blog</button>
      </form>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <div className="content">
              <h3>{blog.title}</h3>
              <p>{blog.summary}</p>
              <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;