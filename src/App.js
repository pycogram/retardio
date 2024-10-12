import logo from './logo.svg';
import './App.css';
import { Page } from './Page';

const objIcon = {
  tg: require('./icon/tg.png'),
  x: require('./icon/twitter.png'),
  ray: require('./icon/ray.png'),
  dext: require('./icon/dext.png'),
  dexs: require('./icon/dexs.png')
}
const objImg = {
  logo1: require('./pic/logo1.png'),
  logo2: require('./pic/logo2.png'),
  logo3: require('./pic/logo3.png')
}
const objGif = {
  gif1: require('./gif/r1.jpg'),
  gif2: require('./gif/r2.jpg'),
  gif3: require('./gif/r3.jpg'),
  gif4: require('./gif/r4.jpg'),
  gif5: require('./gif/r5.jpg'),
  gif6: require('./gif/r6.jpg'),
  gif7: require('./gif/r7.jpg'),
  gif8: require('./gif/r8.jpg'),
  gif9: require('./gif/r9.jpg'),
  gif10: require('./gif/r10.jpg'),
  gif11: require('./gif/r11.jpg'),
  gif12: require('./gif/r12.jpg'),
  gif13: require('./gif/r13.jpg'),
  gif14: require('./gif/r14.jpg'),
  gif15: require('./gif/r15.jpg'),
  gif16: require('./gif/r16.jpg'),
  gif17: require('./gif/r17.jpg'),
  gif18: require('./gif/r18.jpg'),
  gif19: require('./gif/r19.jpg'),
  gif20: require('./gif/r20.jpg'),
  gif21: require('./gif/r21.jpg'),
  gif22: require('./gif/r22.jpg'),
  gif23: require('./gif/r23.jpg'),
  gif24: require('./gif/r24.jpg'),
  gif25: require('./gif/r25.jpg'),
  gif26: require('./gif/r26.jpg'),
  gif27: require('./gif/r27.jpg'),
  gif28: require('./gif/r28.jpg'),
}

const testImg = require('./icon/dexs.png');

function App() {
  return (
    <div className="App" >
      < Page objIconPro = {objIcon} objImgPro = {objImg} objGifPro = {objGif} />
    </div>
  );
}

export default App;
