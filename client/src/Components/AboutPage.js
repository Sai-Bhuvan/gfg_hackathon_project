import "./about.css"
export default function AboutPage() {
    return (
        <div className="about-body">
    <h1 className="about-h1">Hello Welcome to About Page</h1>
    <div className="items-center about-div">
        <ul className="items-center about-ul">
            <li className="about-li">Our goal is to provide you with a simple yet powerful tool to help you take control of your finances.</li>
            <li className="about-li">We understand that managing your money can be overwhelming and stressful, but it doesn't have to be. With our user-friendly interface and robust features, you can easily track your income and expenses, set financial goals, and create a personalized budget that works for you.</li>
            <li className="about-li">Our interest calculator also allows you to estimate the amount of interest you'll earn or pay on loans or savings accounts, so you can make informed financial decisions.</li>
            <li className="about-li">Our team consists of financial experts who are passionate about helping people achieve their financial goals. We believe that everyone deserves to live a financially secure and stable life, and we're here to help you make that a reality.</li>
            <li className="about-li">Thank you for choosing our BudgetX. We hope our tool makes your financial journey a little bit easier and a lot more successful!</li>
            
        </ul>
        <p>Meet our team:</p>
        <ul class="team-list items-center about-ul">
            <li className="about-li"><a href="https://www.linkedin.com/in/anirudh-s-572652241/" class="team-link"><span class="linkedin-icon"></span>Anirudh S</a></li>
            <li className="about-li"><a href="https://www.linkedin.com/in/a-sai-bhuvan-77943b24a" class="team-link"><span class="linkedin-icon"></span>A Sai Bhuvan</a></li>
            <li className="about-li"><a href="https://www.linkedin.com/in/harshith-c-s-8b318a271" class="team-link"><span class="linkedin-icon"></span>Harshith C S</a></li>
            <li className="about-li"><a href="https://github.com/josephbinoy" class="team-link"><span class="linkedin-icon"></span>Joseph Binoy</a></li>
        </ul>
    </div>
</div>
    )
}
