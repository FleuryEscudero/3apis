
const Price = (props) => {

    const { price, percent_change_1h, percent_change_7d, percent_change_24h } = props.bitcoin;


    return (
        <div className="card text-white bg-success mb-3">
            <div className="card-header">
                Precio del Bitcoin
            </div>
            <div className="card-body">
                <h4 className="card-tittle">Precio Actual del Bitcoin: $ {price.toFixed(2)} USD</h4>
                <div className="d-md-flex justify-content-between">
                    <p className="card-text">
                        <span className="font-weight-bold">Ultima Hora:</span>{percent_change_1h}%
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">Ultimas 24h:</span>{percent_change_24h}%
                        </p>
                    <p className="card-text">
                        <span className="font-weight-bold">Ultimos 7d:</span>{percent_change_7d}%
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Price;