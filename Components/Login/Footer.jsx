import "../../CSSFiles/Footer.css";
export function Footer() {
    return (
        <div className={"footer"}>
            <p className={"copyright"}>Copyright &copy; 2025 Taskie</p>
            <div className={"social-media"}>
                <a href={"https://twitter.com/"}><img src={"src/assets/Twitter.svg"}/></a>
                <a href={"https://facebook.com/"}><img src={"src/assets/Facebook.svg"}/></a>
                <a href={"https://instagram.com/"}><img src={"src/assets/Instagram.svg"}/></a>
                <a href={"https://gmail.com/"}><img src={"src/assets/mail.svg"}/></a>
            </div>
        </div>
    )
}