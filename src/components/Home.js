export default function Home() {
    return (
        <div id="home">
            <div id="myCarousel" className="carousel slide banner-slider animated bounceInDown" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="item active">
                        <img src="images/back1_Plami.jpg" alt="banner" />
                    </div>
                    <div className="item">
                        <img src="images/back2_street.jpg" alt="banner" />
                    </div>
                    <div className="item">
                        <img src="images/back3_night.jpg" alt="banner" />
                    </div>
                    <div className="item">
                        <img src="images/back4_sunset.jpg" alt="banner" />
                    </div>
                </div>
                <a className="left carousel-control" href="#myCarousel" data-slide="prev"><span className="glyphicon-chevron-left"><i className="fa fa-angle-left"></i></span></a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next"><span className="glyphicon-chevron-right"><i className="fa fa-angle-right"></i></span></a>
            </div>
        </div>
    );
}