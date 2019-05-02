

const UNew = (props) => {

    const { author, title, description, urlToImage, source, url } = props.uNew;

    let image;
    if (urlToImage !== '') {
        image = <img src={urlToImage} alt={title} className="card-img-top" />
    } else {
        <p><strong>Imagen no Disponible</strong></p>
    }

    return (
        <div className="col-md-6 col-12 mb-4">
            <div className="card">
                <div className="card-image">
                    {image}
                </div>
                <div className="card-header">
                    <h4>{title}</h4>
                </div>
                <div className="card-body">
                    <div>
                        <p className="card-text"> {description}</p>
                        <p className="card-text"> {author} - {source.name}</p>
                        <p className="card-text"><a href={url} target="_blank" className="btn btn-primary d-block">Mas..</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UNew;