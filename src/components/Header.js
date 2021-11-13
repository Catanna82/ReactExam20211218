export default function Header() {
    return (
        <div className="navbar-wrapper">
            <div className="container">
                <div className="navbar navbar-inverse navbar-fixed-top" role="navigation" id="top-nav">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#home"><img src="images/logo-removebg-preview.png" alt="logo" /></a>
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="navbar-collapse  collapse">
                            <ul className="nav navbar-nav navbar-right scroll">
                                <li className="active"><a href="#home">Начало</a></li>
                                <li ><a href="#about">За мен</a></li>
                                <li ><a href="#works">Проекти</a></li>
                                <li ><a href="#partners">Партньори</a></li>
                                <li ><a href="#contact">Контакти</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}