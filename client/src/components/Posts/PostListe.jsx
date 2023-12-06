/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function PostList({ posts, loading }) {
  return (
    <div>
      <h2>All Posts</h2>
      {loading ? (
        <p>Loading posts...</p>
      // eslint-disable-next-line react/prop-types
      ) : posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              <h3>{post.title}</h3>
              <p>{post.message}</p>

              <img
                src={`http://localhost:8000/${post.image}`}
                alt={`Post ${post._id}`}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostList;
