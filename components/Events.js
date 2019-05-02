import Event from './Event';




const Events = (props) => {


    return (

        <div className="row">
            {props.events.map((event => (
                <Event
                    key={event.id}
                    event={event}
                />
            )))}

        </div>
    )


}

export default Events;