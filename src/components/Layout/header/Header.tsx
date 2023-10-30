import Button from "../../../custom/button/Button";
import styles from '../header/header.module.scss';
import { ReactComponent as Mic} from '../../../svg/mic.svg';
import { ReactComponent as Search} from '../../../svg/icons.svg';
import { ReactComponent as Notification} from '../../../svg/Vector (8).svg';

const Header = () => {
    return (
        <section>
            <section className={styles.container}>
                <div>
                    <div>
                        <input placeholder="Search" />
                        <Search className={styles.icon} />
                    </div>
                    <button><Mic /></button>
                </div>
                <div>
                    <Notification />
                    <div className={styles.line}></div>
                    <Button />
                </div>
            </section>
            <hr />
            <section>

            </section>
        </section>
    )
}

export default Header;