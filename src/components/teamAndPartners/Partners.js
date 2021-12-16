import TeamCard from './teamCard';

function Partners() {
    return (
        <div id='team' className='container spacer over'>
            <h3 className='text-center  wowload fadeInUp'>Нашият Екип</h3>
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
                    facebook='https://www.facebook.com/krasi.kolev'
                />
                <TeamCard
                    imgUrl='images/team/team4.jpg'
                    name='Анна Тодорова'
                    profesion='Front End Web Developer'
                    facebook='https://www.facebook.com/anna.todorova.12'
                    instagram='https://www.instagram.com/todorova1383/'
                />
                <TeamCard
                    imgUrl='images/team/team3.jpg'
                    name='Пламена Тодорова'
                    profesion='Фотомодел'
                    facebook='https://www.facebook.com/profile.php?id=100022101258999'
                />
            </div>
        </div>
    );
}

export default Partners;