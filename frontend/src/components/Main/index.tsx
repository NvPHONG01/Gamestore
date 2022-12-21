import { slide } from "../../assets";

const Main = () => {
  return (
    <div style={{ backgroundColor: '#fff', justifyContent: "center", display: "flex" }}>
      <div style={{ width: 1440, height: 592, justifyContent: 'center', display: 'flex' }}>
        <div style={{ width: 1201, display: 'flex', flexDirection: 'column', height: 316 }}>
          {/* {Slider.filter(x => */}
          <div style={{ width: 1201, height: 316, background: `${slide}` }}>

          </div>
          <img src={slide} alt="" />
          {/* )} */}
        </div>
      </div>
    </div>
  )
}
export default Main;