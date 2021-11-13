const TeamCard = (props) => {
    return (
        <div className=" col-sm-3 col-xs-6">
            <figure className="effect-chico">
                <img src={props.imgUrl} alt="img01" className="img-responsive" />
                <figcaption>
                    <p><b>{props.name}</b><br />{props.profesion}<br /><br /><a href="#"><i className="fa fa-dribbble"></i></a> <a href="#"><i className="fa fa-facebook"></i></a> <a href="#"><i className="fa fa-twitter"></i></a></p>
                </figcaption>
            </figure>
        </div>
    );
}

export default TeamCard;