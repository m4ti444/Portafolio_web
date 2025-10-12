import '../../styles/news.css'
import news from '../../data/news.js'

function News() {
    return(
        <div id="news-section" className="news-section " >
            <div className="row">
                <h1 className="section-title">Noticias</h1>
                {news.map((news) => (
                    <div className="col-sm-4" key={news.id}>
                        <div className="news-card" >
                            <div className="news-body">
                                <h5 className="news-card-title">{news.name}</h5>
                                <p className="card-description">{news.description}</p>
                                <a className="btn btn-primary"
                                href={news.link} 
                                target="_blank"
                                rel="noopener noreferrer">Ir al sitio</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}
export default News;