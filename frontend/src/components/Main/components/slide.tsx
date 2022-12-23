
import { useEffect, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { img_Slider } from '../../../assets';
import '../index.styles.scss'

export const Slide = () => {
  const [count, setCount] = useState<number>(0);
  const Time = () => setTimeout(() => (count >= img_Slider.length - 1 ? setCount(img_Slider.length - count - 1) : setCount(count + 1)), 10000);

  useEffect(() => {
    clearTimeout(Time());
    Time();
  })

  return (
    <div className="slider">
      <div className="btn__slider">
        <div className="btn__left">
          <i onClick={() => count === 0 ? setCount(img_Slider.length - 1) : setCount(count - 1)}>
            <BiChevronLeft />
          </i>
        </div>
        <div className="btn__right">
          <i onClick={() => count >= img_Slider.length - 1 ? setCount(img_Slider.length - count - 1) : setCount(count + 1)}>
            <BiChevronRight />
          </i>
        </div>
      </div>
      <img src={img_Slider[count]} alt="..." />
    </div>
  )
}