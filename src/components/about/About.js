import AboutRow from './AboutRow';
import AboutServices from './AboutServices';

export default function About() {
    return (
        <div id='about' className='container spacer about'>
            <h2 className='text-center wowload fadeInUp'><i>Никога не се отказвай да работиш. Работата ти дава смисъл и цел, защото без нея животът е празен.<br/>Стивън Хокинг</i></h2>
            <div className='row'>
                <div className='col-sm-6 wowload fadeInLeft'>
                    <AboutRow
                        title=' Представяне '
                        className='fa fa-camera-retro'
                        description='Казвам се Жан Тодоров и съм професионален фотограф.
                        Голямата ми слабост е евент фотографията във всичките и разновидности.
                        Когато не снимам, разглеждам работите на любимите ми фотографи.
                        За мен фотографията е щуро пътуване свързано с емоции и луд купон.
                        Обичам също да създавам художествени снимки и
                        портретни фотографии,
                        които да сложите в рамка и да споделите с приятели и близки.'
                    />
                </div>
                <div className='col-sm-6 wowload fadeInRight'>
                    <AboutRow
                        title=' Мисия'
                        className='fa fa-coffee'
                        description='За да запечатам вашите истории, съм избрал да се доверя на най-добрите
                        професионални фотоапарати и обективи на Канон.
                        В сайта може да научите повече за моята работа.
                        Ще се радвам да участвам в заснемането на вашата история.'
                    />
                </div>
            </div>
            <div className='services'>
                <h3 className='text-center wowload fadeInUp'>Services</h3>
                <ul className='row text-center list-inline  wowload bounceInUp'>
                    <AboutServices
                        className='fa fa-camera-retro'
                        title='Фото албуми'
                        url='/albums'
                    />
                    <AboutServices
                        className='fa fa-graduation-cap'
                        title='Студио'
                        url='/studio'
                    />
                    <AboutServices
                        className=' fa fas fa-download'
                        title='Изтегли албум'
                        url='/userPhotosDownload'
                    />
                    <AboutServices
                        className='fa fa-umbrella'
                        title='Пътувания'
                        url='#'
                    />
                    <AboutServices
                        className='fa fa-heart-o'
                        title='Бъдещи проекти'
                        url='#'
                    />
                </ul>
            </div>
        </div>
    );
}