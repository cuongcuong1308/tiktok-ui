import classnames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

function Header({ title, onBack }) {
  return (
    <header className={cx('header')}>
      <button className={cx('back-btn')} onClick={onBack}>
        <FontAwesomeIcon icon={faCircleChevronLeft} />
      </button>
      <h4 className={cx('header-title')}>{title}</h4>
    </header>
  );
}

export default Header;
