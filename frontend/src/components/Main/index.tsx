import { Slide } from "./components/slide";
import { BiChevronRight } from 'react-icons/bi'
import { DATA_LIST_PRODUCT, DATA_LIST_CATEGORIES, DATA_LIST_BRANDS, DATA_LIST_ESSENTIALS, DATA_LIST_UNEXPECTED, DATA_LIST_POPULAR } from "./constMain";



const Main = () => {


  return (
    <div style={{ backgroundColor: '#fff', justifyContent: "center", display: "flex" , position:'relative' }}>
      <div style={{ width: 1440, justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: 1201, height: 350, display: 'flex', alignItems: 'center' }}>
          <Slide />
        </div>
        <div style={{ width: 1201, display: 'flex', alignItems: 'center', marginTop: '40px' }}>
          <div style={{ width: 1201, display: 'block' }}>
            <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', color: '#6e6e6e' }}>
              <div style={{ borderBottom: '3px solid #62addf', fontSize: '21px', fontWeight: '500' }}>
                <p>Top điện thoại <span style={{ color: "#088ac3e8" }}>Bán chạy</span></p>
              </div>
              <div style={{ display: 'flex', alignItems: "center", fontSize: '15px' }}>
                <a href="..." style={{ textDecoration: 'none', color: '#5b5959' }}>Tất cả</a>
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
                <p>Mua sắm từ <span style={{ color: "#088ac3e8" }}>Danh mục hàng đầu</span></p>
              </div>
              <div style={{ display: 'flex', alignItems: "center", fontSize: '15px' }}>
                <a href="..." style={{ textDecoration: 'none', color: '#5b5959' }}>Tất cả</a>
                <p style={{ color: "#05ABF3", fontSize: 27, paddingTop: "6px" }}><BiChevronRight /></p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
              {DATA_LIST_CATEGORIES.map((x, index) => {
                if (index <= 5)
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
        <div style={{ width: 1201, display: 'flex', alignItems: 'center', marginTop: '40px' }}>
          <div style={{ width: 1201, display: 'block' }}>
            <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', color: '#6e6e6e' }}>
              <div style={{ borderBottom: '3px solid #62addf', fontSize: '21px', fontWeight: '500' }}>
                <p>Danh mục <span style={{ color: "#088ac3e8" }}>Khuyến mãi</span></p>
              </div>
              <div style={{ display: 'flex', alignItems: "center", fontSize: '15px' }}>
                <a href="..." style={{ textDecoration: 'none', color: '#5b5959' }}>Tất cả</a>
                <p style={{ color: "#05ABF3", fontSize: 27, paddingTop: "6px" }}><BiChevronRight /></p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
              {DATA_LIST_BRANDS.map((x, index) => {
                if (index < 3)
                  return <div key={index}><img width={389} height={207} style={{ borderRadius: '15px' }} src={x.link} alt="" /></div>
                return null;
              })}
            </div>
          </div>
        </div>
        <div style={{ width: 1201, display: 'flex', alignItems: 'center', marginTop: '40px', marginBottom: '40px' }}>
          <div style={{ width: 1201, display: 'block' }}>
            <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', color: '#6e6e6e' }}>
              <div style={{ borderBottom: '3px solid #62addf', fontSize: '21px', fontWeight: '500' }}>
                <p>Danh Mục <span style={{ color: "#088ac3e8" }}>Giảm giá</span></p>
              </div>
              <div style={{ display: 'flex', alignItems: "center", fontSize: '15px' }}>
                <a href="..." style={{ textDecoration: 'none', color: '#5b5959' }}>Tất cả</a>
                <p style={{ color: "#05ABF3", fontSize: 27, paddingTop: "6px" }}><BiChevronRight /></p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
              {DATA_LIST_ESSENTIALS.map((x, index) => {
                if (index <= 3)
                  return <div key={index}><img width={260} height={420} style={{ borderRadius: '20px' }} src={x.link} alt="" /></div>
                return null
              })}
            </div>
          </div>
        </div>
        <div style={{ width: 1201, display: 'flex', alignItems: 'center', marginTop: '40px', marginBottom: '40px' }}>
          <div style={{ width: 1201, display: 'block' }}>
            <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', color: '#6e6e6e' }}>
              <div style={{ borderBottom: '3px solid #62addf', fontSize: '21px', fontWeight: '500' }}>
                <p>Ưu đãi <span style={{ color: "#088ac3e8" }}>Bất ngờ</span></p>
              </div>
              <div style={{ display: 'flex', alignItems: "center", fontSize: '15px' }}>
                <a href="..." style={{ textDecoration: 'none', color: '#5b5959' }}>Tất cả</a>
                <p style={{ color: "#05ABF3", fontSize: 27, paddingTop: "6px" }}><BiChevronRight /></p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
              {DATA_LIST_UNEXPECTED.map((x, index) => {
                if (index <= 4)
                  return (
                    <div key={index} style={{ display: 'block', textAlign: 'center' }}>
                      <div>
                        <img width={187} height={187} src={x.link} alt="" />
                      </div>
                      <div style={{ lineHeight: '5px', marginTop: '20px' }}>
                        <p style={{ fontSize: '12px' }}>{x.name}</p>
                        <p>UP to {x.sale}% OFF</p>
                      </div>
                    </div>
                  )
                return null
              }
              )}
            </div>
          </div>
        </div>
        <div style={{ width: 1201, display: 'flex', alignItems: 'center', marginTop: '40px', marginBottom: '40px' }}>
          <div style={{ width: 1201, display: 'block' }}>
            <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', color: '#6e6e6e' }}>
              <div style={{ borderBottom: '3px solid #62addf', fontSize: '21px', fontWeight: '500' }}>
                <p>Gian hàng <span style={{ color: "#088ac3e8" }}>Phổ biến</span></p>
              </div>
              <div style={{ display: 'flex', alignItems: "center", fontSize: '15px' }}>
                <a href="..." style={{ textDecoration: 'none', color: '#5b5959' }}>Tất cả</a>
                <p style={{ color: "#05ABF3", fontSize: 27, paddingTop: "6px" }}><BiChevronRight /></p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
              {DATA_LIST_POPULAR.map((x, index) => {
                if (index <= 5)
                  return (
                    <div key={index} style={{ display: 'block', textAlign: 'left' }}>
                      <div style={{ color: "#504e4e", fontWeight: '500' }}>
                        <p>{x.name}</p>
                      </div>
                      <div>
                        <img width={187} height={187} src={x.link} alt="" />
                      </div>
                      <div style={{ marginTop: '20px', lineHeight: '1px' }}>
                        <a href="..." style={{ fontSize: '11px', color: '#008296' }}>Khám phá</a>
                      </div>
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