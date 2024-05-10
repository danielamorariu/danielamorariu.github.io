import ilustration from "../../assets/img/image-profil-1.svg";

export const Header = () => {
    return (
        <header>
            <div id="header" className="header">
                <div className="header-wrapper inner">
                    <div className="header__image">
                        <img src={ilustration} width="300" alt="Presentation illustration" title="Presentation illustration" />
                    </div>
                    <div className="header__presentation">
                        <h1>Hi! I'm Daniela</h1>
                        <span>Enim quam diam dolor nulla habitasse per auctor fusce odio fringilla si rhoncus lectus ante lorem quisque sed sagittis</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
