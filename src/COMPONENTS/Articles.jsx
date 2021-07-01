import React from "react";
import ArticleTile from "./ArticleTile";
import styles from "./ArticlesSection.module.css";

function Articles(props) {
  return (
    <div className={styles.articlesSection}>
      {/* {props.selectedTopic && <h1>Topic: {props.selectedTopic}</h1>} */}
      <div>
        {props.loading ? (
          <h1>Loading Content...</h1>
        ) : (
          props.articles.map(article => {
            return <ArticleTile key={article.article_id} article={article} />;
          })
        )}
      </div>
    </div>
  );
}

export default Articles;

// class Articles extends Component {
//   render() {
//     return (
//       <>
//         {this.props.selectedTopic && <h1>Topic: {this.props.selectedTopic}</h1>}
//         <div className="articleContainer">
//           {this.props.loading ? (
//             <h1>Loading Content...</h1>
//           ) : (
//             this.props.articles.map(article => {
//               return <ArticleTile key={article.article_id} article={article} />;
//             })
//           )}
//         </div>
//       </>
//     );
//   }
// }

// export default Articles;
