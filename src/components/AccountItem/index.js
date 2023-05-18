import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avata')}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3bc3a43bfa2d2805b530fe7a613b5192.jpeg?x-expires=1684465200&x-signature=XMvYlPRsrbDncNB4MvTCNL%2FsJTQ%3D"
        alt="Mỳ Mỹ"
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Lý Quốc Cường</span>
          <FontAwesomeIcon className={cx('checkicon')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>lyquocc</span>
      </div>
    </div>
  );
}

export default AccountItem;
