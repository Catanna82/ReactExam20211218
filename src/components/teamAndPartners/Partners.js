import TeamCard from './teamCard';
import PartnersCard from './PartnersCard';

function Partners() {
    return (
        <div id='partners' className='container spacer over'>
            <h2 className='text-center  wowload fadeInUp'>Вашето мнение за нашата работа</h2>
            <div className='clearfix'>
                <div className='col-sm-6 partners  wowload fadeInLeft'>
                    <img src='images/partners/1.jpg' alt='partners' />
                    <img src='images/partners/2.jpg' alt='partners' />
                    <img src='images/partners/3.jpg' alt='partners' />
                    <img src='images/partners/4.jpg' alt='partners' />
                </div>
                <div className='col-sm-6'>
                    <div id='carousel-testimonials' className='carousel slide testimonails  wowload fadeInRight' data-ride='carousel'>
                        <div className='carousel-inner'>
                            <PartnersCard
                                active
                                img='images/team/1.jpg'
                                comments='I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.'
                                username='Angel Smith'
                                company='ebay'
                            />
                            <PartnersCard
                                img='images/team/2.jpg'
                                comments='I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.'
                                username='John Doe'
                                company='JDE Bulgaria'
                            />
                            <PartnersCard
                                img='images/team/3.jpg'
                                comments='I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.'
                                username='Cammel Case'
                                company='JS'
                            />
                        </div>
                        <ol className='carousel-indicators'>
                            <li data-target='#carousel-testimonials' data-slide-to='0' className='active'></li>
                            <li data-target='#carousel-testimonials' data-slide-to='1'></li>
                            <li data-target='#carousel-testimonials' data-slide-to='2'></li>
                        </ol>
                    </div>
                </div>
            </div>
            <h3 className='text-center  wowload fadeInUp'>Нашия Екип</h3>
            <p className='text-center  wowload fadeInLeft'>Екипът който прави вашите мечти реалност</p>
            <div className='row grid team  wowload fadeInUpBig'>
                <TeamCard
                    imgUrl='images/team/team1.jpg'
                    name='Жан Тодоров'
                    profesion='Фотограф'
                    instagram='https://www.instagram.com/jantodorov/'
                    facebook='https://www.facebook.com/profile.php?id=100000501595428'
                />
                <TeamCard
                    imgUrl='images/team/team2.jpg'
                    name='Красимир Колев'
                    profesion='Backend Developer'
                />
                <TeamCard
                    imgUrl='images/team/team4.jpg'
                    name='Анна Тодорова'
                    profesion='Front End Web Developer'
                />
                <TeamCard
                    imgUrl='images/team/team3.jpg'
                    name='Пламена Тодорова'
                    profesion='Фотомодел'
                />
            </div>
        </div>
    );
}

export default Partners;