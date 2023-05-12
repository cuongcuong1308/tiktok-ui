import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('innner')}>
                {/* Logo */}
                {/* <div className={cx('logo')}> */}
                <img src={images.logo} alt="Tiktok" />
                {/* </div> */}
                {/* Search */}
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            style={{
                                '--fa-primary-color': '#ffffff',
                                '--fa-secondary-color': '#df0707',
                            }}
                        />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}>
                    <button type="">test</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
