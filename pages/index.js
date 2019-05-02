import fetch from 'isomorphic-unfetch';
import MasterPage from '../components/Master';
import Price from '../components/Price';
import News from '../components/News';
import Events from '../components/Events';


const Index = (props) => (

    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del bitcoin</h2>
                <Price
                    bitcoin={props.bitcoin} />
            </div>
            <div className="col-md-8">
                <h2>Noticias sobre el Bitcoin</h2>
                <News
                    news={props.news} />
            </div>
            <div className="col-md-4">
                <h2>Próximos eventos Bitcoin</h2>
                <Events
                    events={props.events} />
            </div>

        </div>
    </MasterPage>

);



Index.getInitialProps = async () => {

    const token = 'FDPHTQSVCXNHC2VMHRFI';
    const price = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
    const result = await price.json();
    const news = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-02&sortBy=publishedAt&apiKey=96a7e34875c44d3ea4083290e5b7c714&language=es')
    const newsBitcoin = await news.json();
    const Revents = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=bitcoin&sort_by=date&token=${token}&location.address=mexico+city&locale=es_MX`)
    const events = await Revents.json();



    return {
        bitcoin: result.data.quotes.USD,
        news: newsBitcoin.articles,
        events: events.events
    }

}










export default Index;