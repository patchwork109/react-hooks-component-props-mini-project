import React from "react";
import Article from "./Article";

function ArticleList({post}) {

    const renderArticles = post.map(postObj => {
        return <Article
            key={postObj.id} 
            title={postObj.title}
            date={postObj.date}
            preview={postObj.preview}
            />
    })

    return (
      <div>
        <main>
            {renderArticles}
        </main>
      </div>
    );
  }

export default ArticleList;
