import UNew from "./New";




const News = (props) => {

   
    return (

        <div className="row">
       {props.news.map((news => (
           <UNew
           key = {news.url}
            uNew = {news}
            />
       )))}

        </div>
    )


}

export default News;