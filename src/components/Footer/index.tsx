import { BsWhatsapp } from 'react-icons/bs'
import { BiPhoneCall } from 'react-icons/bi'
import { DATA_LIST_CATEGORIES, DATA_LIST_CUSTOMER } from './constFooter'
import './footer.styles.scss'

const Footer = () => {

  const imgAppStore = require("../../assets/imgs/download_app_store.png")
  const imgGooglePlay = require("../../assets/imgs/download_google_play.png")

  return (
    <div className='wrapper__f'>
      <div className='inner__f'>
        <div style={{ color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: 1192, backgroundColor: '#0C9BDA', height: 450, marginTop: '80px', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '40%', height: '450px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div>
                  <h1>SANji Store</h1>
                </div>
                <div>
                  <h3>Thông tin liên hệ</h3>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <p style={{ fontSize: '25px', marginRight: '10px' }}><BsWhatsapp /></p>
                  <p>
                    Whats app<br />
                    +0372047195
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <p style={{ fontSize: '25px', marginRight: '10px' }}><BiPhoneCall /></p>
                  <p>
                    Điện thoại<br />
                    +0372047195
                  </p>
                </div>
                <div>
                  <h3>Download App</h3>
                  <div style={{ display: 'flex', width: 325 }}>
                    <div style={{ width: 150, height: 50 }}>
                      <img width={150} height={50} src={imgAppStore} alt="" />
                    </div>
                    <div style={{ width: 150, height: 50, display: 'flex', alignItems: 'center' }}>
                      <img width={175} height={75} src={imgGooglePlay} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: '30%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ borderBottom: '3px solid #fff' }}>
                  <h3>Danh mục phổ biến nhất</h3>
                </div>
                <div style={{ lineHeight: '37px', paddingTop: '20px', paddingLeft: '10px' }}>
                  {DATA_LIST_CATEGORIES.map((x, id) =>
                    <li key={id}>{x.label}</li>
                  )}
                </div>
              </div>
            </div>
            <div style={{ width: '30%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ borderBottom: '3px solid #fff' }}>
                  <h3>Dịch vụ khách hàng</h3>
                </div>
                <div style={{ lineHeight: '37px', paddingTop: '20px', paddingLeft: '10px' }}>
                  {DATA_LIST_CUSTOMER.map((x, id) =>
                    <li key={id}>{x.label}</li>
                  )}
                </div>
              </div>
            </div>
            <div className='star'>

            </div>
          </div>
          <div style={{ borderTop: '1px solid #05ABF3', width: 1192, textAlign: 'center' }}>
            <p>2022 All rights reserved. SANji Store Ltd</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;