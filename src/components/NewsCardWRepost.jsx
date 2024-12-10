import ArticlePreview from "./reposts/ArticlePreview";
import NewsCard from "./NewsCard";


const Repost = () => {
    
    return(
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <div
              key={article.id || index}
              className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <NewsCard
                key={index}
                article = {article}
                openRepostForm = {openRepostForm(article)}
              />
              <ArticlePreview article={article}>
                <button
                  onClick={() => openRepostForm(article)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-3 w-full hover:bg-blue-600 transition-colors"
                >
                  Repost
                </button>
              </ArticlePreview>
            </div>
          
        ))}
        </div>
       </>       
       ) }

       export default Repost;