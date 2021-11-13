import TeamCard from "./teamCard";

function Partners() {
    return (
        <div id="partners" className="container spacer ">
            <h2 className="text-center  wowload fadeInUp">Вашето мнение за нашата работа</h2>
            <div className="clearfix">
                <div className="col-sm-6 partners  wowload fadeInLeft">
                    <img src="images/partners/1.jpg" alt="partners" />
                    <img src="images/partners/2.jpg" alt="partners" />
                    <img src="images/partners/3.jpg" alt="partners" />
                    <img src="images/partners/4.jpg" alt="partners" />
                </div>
                <div className="col-sm-6">
                    <div id="carousel-testimonials" className="carousel slide testimonails  wowload fadeInRight" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="item active animated bounceInRight row">
                                <div className="animated slideInLeft col-xs-2"><img alt="portfolio" src="images/team/1.jpg" width="100" className="img-circle img-responsive" /></div>
                                <div className="col-xs-10">
                                    <p> I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>
                                    <span>Angel Smith - <b>eshop Canada</b></span>
                                </div>
                            </div>
                            <div className="item animated bounceInRight row">
                                <div className="animated slideInLeft col-xs-2"><img alt="portfolio" src="images/team/2.jpg" width="100" className="img-circle img-responsive" /></div>
                                <div className="col-xs-10">
                                    <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
                                    <span>John Partic - <b>Crazy Pixel</b></span>
                                </div>
                            </div>
                            <div className="item  animated bounceInRight row">
                                <div className="animated slideInLeft  col-xs-2"><img alt="portfolio" src="images/team/3.jpg" width="100" className="img-circle img-responsive" /></div>
                                <div className="col-xs-10">
                                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.</p>
                                    <span>Harris David - <b>Jet London</b></span>
                                </div>
                            </div>
                        </div>
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-testimonials" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-testimonials" data-slide-to="1"></li>
                            <li data-target="#carousel-testimonials" data-slide-to="2"></li>
                        </ol>
                    </div>
                </div>
            </div>
            <h3 className="text-center  wowload fadeInUp">Нашия Екип</h3>
            <p className="text-center  wowload fadeInLeft">Екипът който прави вашите мечти реалност</p>
            <div className="row grid team  wowload fadeInUpBig">
                <TeamCard
                    imgUrl="images/team/team1.jpg"
                    name="Жан Тодоров"
                    profesion="Фотограф"
                />
                <TeamCard
                    imgUrl="images/team/team2.jpg"
                    name="Красимир Колев"
                    profesion="Backend Developer"
                />
                <TeamCard
                    imgUrl="images/team/team4.jpg"
                    name="Анна Тодорова"
                    profesion="Front End Web Developer"
                />
                <TeamCard
                    imgUrl="images/team/team3.jpg"
                    name="Пламена Тодорова"
                    profesion="Фотомодел"
                />
            </div>
        </div>
    );
}

export default Partners;