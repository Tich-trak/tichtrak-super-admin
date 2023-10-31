import styles from '../footer/footer.module.scss';
import { ReactComponent as Copyright } from '../../../svg/Group (1).svg';

const Footer = () => {
    return (
        <div className={styles.container}>
            <hr />
            <div>
                <div>
                    <div><Copyright /></div>
                    <div>2023 -  <span>Tichtrak</span>Dashboard</div>
                </div>
                <div className={styles.links}>
                    <span>About</span>
                    <span>Careers</span>
                    <span>Policy</span>
                    <span>Contact</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;