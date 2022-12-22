import { Slide } from "./components/slide";
import { BiChevronRight } from 'react-icons/bi'
import { DATA_LIST_PRODUCT } from "./constMain";


const Main = () => {

  const DATA_LIST_CATEGORIES = [
    {
      link: "https://cdn.tgdd.vn//content/Tablet-128x129.png",
      name: "SmartPhone"
    },
    {
      link: 'https://cdn.tgdd.vn//content/chuot-128x129.png',
      name: 'Mouse'
    },
    {
      link: 'https://cdn.tgdd.vn//content/ban-phim-128x129.png',
      name: 'Keyboard'
    },
    {
      link: 'https://cdn.tgdd.vn//content/Mayin-128x129.png',
      name: 'Printer'
    },
    {
      link: 'https://cdn.tgdd.vn//content/icon-camera-128x129.png',
      name: 'Camera, Webcam'
    },
    {
      link: 'https://cdn.tgdd.vn//content/Tainghe-128x129.png',
      name: 'Headphone'
    },
    {
      link: 'https://cdn.tgdd.vn//content/Loa-128x128.png',
      name: 'Loudspeaker'
    },
    {
      link: 'https://cdn.tgdd.vn//content/Capsac-129x129.png',
      name: 'Chargie Cable'
    },
  ]

  return (
    <div style={{ backgroundColor: '#fff', justifyContent: "center", display: "flex" }}>
      <div style={{ width: 1440, justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
        <div style={{ width: 1201, height: 350, display: 'flex', alignItems: 'center' }}>
          <Slide />
        </div>
        <div style={{ width: 1201, display: 'flex', alignItems: 'center', marginTop: '40px' }}>
          <div style={{ width: 1201, display: 'block' }}>
            <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', color: '#6e6e6e' }}>
              <div style={{ borderBottom: '3px solid #62addf', fontSize: '21px', fontWeight: '500' }}>
                <p>Grab the best deal on <span style={{ color: "#088ac3e8" }}>SmartPhone</span></p>
              </div>
              <div style={{ display: 'flex', alignItems: "center", fontSize: '15px' }}>
                <a href="..." style={{ textDecoration: 'none', color: 'black' }}>View All</a>
                <p style={{ color: "#05ABF3", fontSize: 27, paddingTop: "6px" }}><BiChevronRight /></p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
              {DATA_LIST_PRODUCT.map((x, index) => {
                if (index <= 4)
                  return (
                    <div key={index} style={{ width: 227, height: 295, position: 'relative' }}>
                      <div style={{ display: "flex", justifyContent: 'center' }}>
                        <div style={{ marginTop: '16px' }}>
                          <img style={{ width: 146, height: 166 }} src={x.link} alt="" />
                        </div>
                        <div className="discount">
                          <p>{x.discount}%</p>
                          <p>OFF</p>
                        </div>
                      </div>
                      <div style={{ fontSize: '16px', lineHeight: '0px', marginLeft: '15px' }}>
                        <p>{x.name}</p>
                        <div style={{ display: 'flex', alignItems: 'center', fontWeight: '500' }}><p>${x.price}</p> <del style={{ paddingLeft: '10px', fontWeight: '300' }}>${x.oldprice}</del></div>
                        <p style={{ paddingTop: '10px', color: '#249B3E' }}>Save - ${x.price}</p>
                      </div>
                    </div>
                  )
                return null;
              }
              )}
            </div>
          </div>
        </div>
        <div style={{ width: 1201, display: 'flex', alignItems: 'center', marginTop: '40px' }}>
          <div style={{ width: 1201, display: 'block' }}>
            <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', color: '#6e6e6e' }}>
              <div style={{ borderBottom: '3px solid #62addf', fontSize: '21px', fontWeight: '500' }}>
                <p>Shop From <span style={{ color: "#088ac3e8" }}>Top Categories</span></p>
              </div>
              <div style={{ display: 'flex', alignItems: "center", fontSize: '15px' }}>
                <a href="..." style={{ textDecoration: 'none', color: 'black' }}>View All</a>
                <p style={{ color: "#05ABF3", fontSize: 27, paddingTop: "6px" }}><BiChevronRight /></p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
              {DATA_LIST_CATEGORIES.map((x, index) => {
                if (index <= 6)
                  return (
                    <div key={index} style={{ display: 'flex', flexDirection: 'column', width: 132, height: 172, alignItems: 'center' }}>
                      <div>
                        <img width={124} height={124} src={x.link} alt="" />
                      </div>
                      <p>{x.name}</p>
                    </div>
                  )
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default Main;