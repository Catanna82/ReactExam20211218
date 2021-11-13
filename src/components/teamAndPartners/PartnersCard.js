const PartnersCard = (props) => {
    const className = [
        'item',
        props.active ? 'active' : '',
        'animated bounceInRight row'
    ].join(' ');
    return (
        <div className={className}>
            <div className="animated slideInLeft col-xs-2"><img alt="portfolio" src={props.img} width="100" className="img-circle img-responsive" /></div>
            <div className="col-xs-10">
                <p> {props.comments} </p>
                <span>{props.username} - <b>{props.company}</b></span>
            </div>
        </div>
    );
}

export default PartnersCard;