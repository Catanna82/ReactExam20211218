import WorkCards from "./WorksCards";

export default function Works() {
    return (
        <div id="works" className=" clearfix grid">
            <WorkCards
                img="images/portfolio/1.jpg"
                title="Природа"
                description="Да се потопим в красотата на природата."
            />
            <WorkCards
                img="images/portfolio/2.jpg"
                title="Събития"
                description="Всеки момент е единствен и неповторим."
            />
            <WorkCards
                img="images/portfolio/3.jpg"
                title="Концерти"
                description="Живот на бързи обороти."
            />
            <WorkCards
                img="images/portfolio/4.jpg"
                title="Винтидж"
                description="Комфортът е най-важен."
            />
            <WorkCards
                img="images/portfolio/6.jpg"
                title="Хотели"
                description="Почивка, Уелнес и SPA."
            />
            <WorkCards
                img="images/portfolio/8.jpg"
                title="Ретро"
                description="Позната атмосфера, където всеки се чувства добре дошъл."
            />
            <WorkCards
                img="images/portfolio/9.jpg"
                title="Кафе"
                description="Да се насладим на сутрешната магия."
            />
            <WorkCards
                img="images/portfolio/9.jpg"
                title="Техника"
                description="За качествена работа трябва добра техника."
            />
            <WorkCards
                img="images/portfolio/11.jpg"
                title="Дизайн"
                description="Абстрактно или не, дизайнерско решение."
            />
            <WorkCards
                img="images/portfolio/12.jpg"
                title="Студио"
                description="Комфорт и уют."
            />
            <WorkCards
                img="images/portfolio/9.jpg"
                title="Море"
                description="Да се потопим в магията на лятото"
            />
            <WorkCards
                img="images/portfolio/back1_Plami.jpg"
                title="Плами"
                description="Децата са пътя към бъдещето."
            />
        </div>
    );
}