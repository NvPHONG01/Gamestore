import { HiOutlineMapPin, HiOutlineShoppingCart } from 'react-icons/hi2';
import { FaShippingFast } from 'react-icons/fa'
import { BsPatchCheck } from 'react-icons/bs'
import { RiSearchLine } from 'react-icons/ri'
import { TbListSearch } from 'react-icons/tb'
import { AiOutlineUser } from 'react-icons/ai'
import { VscListSelection } from 'react-icons/vsc'
import { FiChevronDown } from 'react-icons/fi'
import { DATA_LIST } from './constHeader';
import './header.styles.scss'

const Header = () => {

  const DATA = [
    {
      icon: <HiOutlineMapPin />,
      label: 'Địa chỉ tại Hà Nội'
    },
    {
      icon: <FaShippingFast />,
      label: 'Theo dõi đơn hàng'
    },
    {
      icon: <BsPatchCheck />,
      label: 'Tất cả ưu đãi'
    },
  ]
  return (
    <div className='wrapper'>
      <div className='inner'>
        <div style={{ width: 1201 }}>
          <div className='header__h'>
            <div>
              Chào mừng tới cửa hàng SANji
            </div>
            <div className='container'>
              {DATA.map((x, id) => (
                <li key={id} >
                  <p style={{ color: '#62addf', paddingRight: '5px' }}>{x.icon}</p>
                  <p>{x.label}</p>
                </li>
              ))}
            </div>
          </div>
          <div className='header__m'>
            <div className='left'>
              <span><VscListSelection /></span>
              <h1> Sanji Store</h1>
            </div>
            <div className='center'>
              <a href='...'><RiSearchLine /></a>
              <input className='inputStyle' type="text" placeholder='Tìm kiếm ...' />
              <a href='...'><TbListSearch /></a>
            </div>
            <div className='right'>
              <a href='...' className='a__container' style={{ width: '70%' }}>
                <p style={{ width: '10%' }}><AiOutlineUser /></p>
                Đăng nhập/Đăng ký
              </a>
              <a href='...' className='a__container' style={{ width: '30%' }}>
                <p style={{ width: '15%' }}><HiOutlineShoppingCart /></p>
                Giỏ hàng
              </a>
            </div>
          </div>
          <div className='header__f'>
            <div className='menu'>
              {DATA_LIST.map((x, id) =>
                <div className='menu__list' key={id} style={{ backgroundColor: `${x.colorBackgroup}` }}>
                  <div>
                    <p style={{ color: `${x.color}` }}>{x.label}</p>
                    <span style={{ color: `${x.colorIcon}` }}><FiChevronDown /></span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;