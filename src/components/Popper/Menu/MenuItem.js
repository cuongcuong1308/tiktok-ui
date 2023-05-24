import classnames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classnames.bind(styles);

function MenuItem({ data }) {
  return (
    <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
      {data.title}
    </Button>
  );
}

export default MenuItem;