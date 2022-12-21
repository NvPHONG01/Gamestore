import { BsWhatsapp } from 'react-icons/bs'
import { BiPhoneCall } from 'react-icons/bi'
import { DATA_LIST_CATEGORIES, DATA_LIST_CUSTOMER } from './constFooter'

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#05ABF3', height: 592, justifyContent: "center", display: "flex" }}>
      <div style={{ width: 1440, backgroundColor: '#05ABF3', height: 592, display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: 1201, backgroundColor: '#0C9BDA' }}>
          <div style={{ color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 1050, backgroundColor: '#0C9BDA', height: 450, marginTop: '80px', display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: '40%', height: '450px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div>
                    <h1>SANji Store</h1>
                  </div>
                  <div>
                    <h3>Contact Us</h3>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <p style={{ fontSize: '25px', textAlign: 'center' }}><BsWhatsapp /></p>
                    <p>
                      Whats app<br />
                      +0372047195
                    </p>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <p style={{ fontSize: '25px', textAlign: 'center' }}><BiPhoneCall /></p>
                    <p>
                      Call Us<br />
                      +0372047195
                    </p>
                  </div>
                  <div>
                    <h3>Download App</h3>
                    <div>
                      {/* <img src={img_AppStore} alt='Fail' /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ width: '30%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div style={{ borderBottom: '3px solid #fff' }}>
                    <h3>Most Popular Categories</h3>
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
                    <h3>Most Popular Categories</h3>
                  </div>
                  <div style={{ lineHeight: '37px', paddingTop: '20px', paddingLeft: '10px' }}>
                    {DATA_LIST_CUSTOMER.map((x, id) =>
                      <li key={id}>{x.label}</li>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #05ABF3', width: 1050, textAlign: 'center' }}>
              <p>2022 All rights reserved. Reliance Retail Ltd</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;