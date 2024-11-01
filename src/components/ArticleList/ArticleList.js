import React from 'react';
import Article from '../Article/Article'; // Adjust path as necessary

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map(post => (
        <Article 
          key={post.id} // Unique key for each Article
          title={post.title} 
          date={post.date} 
          preview={post.preview} 
        />
      ))}
    </main>
  );
};

export default ArticleList;
