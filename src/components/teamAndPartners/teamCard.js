const TeamCard = (props) => {
    return (
        <div className=" col-sm-3 col-xs-6">
            <figure className="effect-chico">
                <img src={props.imgUrl} alt="img01" className="img-responsive" />
                <figcaption>
                    <p><b>{props.name}</b><br />{props.profesion}<br /><br /><a href={props.instagram}><i className="fa fa-instagram"></i></a> <a href={props.facebook}><i className="fa fa-facebook"></i></a></p>
                </figcaption>
            </figure>
        </div>
    );
}

export default TeamCard;