import Article from "./Article.js";
function ArticleList(props) {
  return (
    <main>
      <Article item={props} />
    </main>
  );
}
export default ArticleList;
