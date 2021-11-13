export default function Contacts() {
    return (
        <div id="contact" className="spacer">
            <div className="container contactform center">
                <h2 className="text-center  wowload fadeInUp">Свържете се с нас</h2>
                <div className="row wowload fadeInLeftBig">
                    <div className="col-sm-6 col-sm-offset-3 col-xs-12">
                        <input type="text" placeholder="Име" />
                        <input type="text" placeholder="Електронна поща" />
                        <textarea rows="5" placeholder="Съобщение"></textarea>
                        <button className="btn btn-primary"><i className="fa fa-paper-plane"></i> Изпрати запитване</button>
                    </div>
                </div>
            </div>
        </div>
    );
}