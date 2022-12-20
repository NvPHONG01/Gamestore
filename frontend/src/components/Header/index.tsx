import { HiOutlineMapPin } from 'react-icons/hi2';
import { FaShippingFast } from 'react-icons/fa'
import { BsPatchCheck } from 'react-icons/bs'

const Header = () => {
  const data = [
    {
      icon: <HiOutlineMapPin />,
      label: 'Deliver to 423651'
    },
    {
      icon: <FaShippingFast />,
      label: 'Track your order'
    },
    {
      icon: <BsPatchCheck />,
      label: 'All Offers'
    },
  ]

  return (
    <div style={{ backgroundColor: '#F5F5F5', height: 201, justifyContent: "center", display: "flex" }}>
      <div style={{ width: 1440, backgroundColor: '#F5F5F5', height: 201, display: "flex", justifyContent: "center" }}>
        <div style={{ width: 1201 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', height: 42 }}>
            <div>
              Welcome to worldwide Megamart!
            </div>
            <div style={{ display: "flex", listStyle: 'none' }}>
              {data.map(x => (
                <li style={{ paddingLeft: '30px', display: 'flex' }}>
                  <p style={{ color: '#62addf', paddingRight: '5px' }}>{x.icon}</p>
                  <p>{x.label}</p>
                </li>
              ))}
            </div>
          </div>
          <div style={{ height: 90, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              Logo
            </div>
            <div>
              <div style={{ height: 48, width: 507 }}>
                <input type="search" placeholder='Search...' style={{ border: '1px solid #ccc' }} />
              </div>
            </div>
            <div>
              Sign | Card
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;