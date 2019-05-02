

const Event = (props) => {

    const { description, url, logo, name, organization_id } = props.event



    let image;
    if (logo.url !== '') {
        image = <img src={logo.url} alt={organization_id} className="card-img-top" />
    } else {
        <p><strong>Imagen no Disponible</strong></p>
    }

    return (
        /*  <div className="col-md-6 col-12 mb-4">
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
         </div> */

        <div className className="mb-4">
            <div className="card">
                <div className="card-image">
                    {image}
                </div>
                <div className="card-header">
                    <h4>{name.text}</h4>
                </div>
                <div className="card-body">
                    <p className="card-text">{description.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Event;