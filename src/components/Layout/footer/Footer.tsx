import styles from '../footer/footer.module.scss';
import { ReactComponent as Copyright } from '../../../svg/Group (1).svg';

const Footer = () => {
    return (
        <div className={styles.container}>
            <hr />
            <div>
                <div>
                    <div><Copyright /></div>
                    <div>2023 - <span>Tichtrak </span> Dashboard</div>
                </div>
                <div>
                <nav>
                <ul>
                    <li>Home</li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </nav>
                </div>
            </div>
        </div>
    )
}

export default Footer;