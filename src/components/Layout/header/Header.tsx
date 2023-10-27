import Button from "../../../custom/button/Button";
import styles from '../header/header.module.scss';
import { ReactComponent as Mic} from '../../../svg/mic.svg';
import { ReactComponent as Search} from '../../../svg/icons.svg';

const Header = () => {
    return (
        <section className={styles.container}>
            <div>
                <div>
                    <input placeholder="Search" />
                    <Search className={styles.icon} />
                </div>
                
                <button><Mic /></button>
            </div>
            <div>
                <Button />
            </div>
            
        </section>
    )
}

export default Header;