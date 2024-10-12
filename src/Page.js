import React, {useEffect, useState} from "react";
export function Page({objIconPro, objImgPro, objGifPro}) {

    const tg = objIconPro.tg,
           x =  objIconPro.x,
           ray = objIconPro.ray,
           dext = objIconPro.dext,
           dexs = objIconPro.dexs;

    const logo1 = objImgPro.logo1,
          logo2 = objImgPro.logo2,
          logo3 = objImgPro.logo3;

    const image1 = [ 
        objGifPro.gif1, objGifPro.gif2, objGifPro.gif3, objGifPro.gif4,
        objGifPro.gif5, objGifPro.gif6, objGifPro.gif7, objGifPro.gif8,
        objGifPro.gif9, objGifPro.gif10, objGifPro.gif11, objGifPro.gif12,
        objGifPro.gif13, objGifPro.gif14
    ]

    const image2 = [ 
        objGifPro.gif15, objGifPro.gif16,
        objGifPro.gif17, objGifPro.gif18, objGifPro.gif19, objGifPro.gif20,
        objGifPro.gif21, objGifPro.gif22, objGifPro.gif23, objGifPro.gif24,
        objGifPro.gif25, objGifPro.gif26, objGifPro.gif27, objGifPro.gif28
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image1.length);
        }, 1 * 1000); 

        return() => clearInterval(interval);
    }, [image1.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image2.length);
        }, 1 * 1500); 

        return() => clearInterval(interval);
    }, [image2.length]);

    return(
        <div>
            <header className="socialLink">
                <span>
                    <a href="https://t.me/retardio_CTO" target="_blank"><img src={tg} alt="telegram link"></img></a>   
                </span>
                <span>
                    <a href="https://x.com/search?q=%24rsi&src=cashtag_click" target="_blank"><img src={x} alt="twitter link"></img></a>
                </span>
                <span>
                    <a href="https://raydium.io/swap/" target="_blank"><img src={ray} alt="raydium buy link"></img></a>
                </span>
                <span>
                    <a href="https://www.dextools.io/app/" target="_blank"><img src={dext} alt="dextools link"></img></a>
                </span>
                <span>
                    <a href="https://dexscreener.com/solana/AXFj9md6yvMSgsmjzACzEtEkQuwsvN6bTURtLpxnQxBj" target="_blank"><img src={dexs} alt="dexscreener link"></img></a>
                </span>
            </header>
            <main className="bodySection">
                <div className="logoText">
                    <h2>Retardio Solami Index!</h2>
                    <div>
                        <span>
                            <img src={logo1} alt="RSI official Logo"></img>
                        </span>
                    </div>
                    <h4>Retarded by nature</h4>
                </div>
                <div className="caSection">
                    <div>
                        <h4>CA:</h4>
                        <p>2eCKzhXd4v9QS4Huic592afTNMgHr5HjwE7Gurbepump</p>
                    </div>
                </div>
                <div className="aboutSection">
                    <div className="about">
                        <span>
                            <img src={logo2} alt="about pic"></img>
                        </span>
                        <h4>
                            "Why did Retardio, the investor, refuse to sell during the dip?
                            Because he thought 'HODLing' meant holding on forever… 
                            to his dreams of buying a Lambo with $RSI!"
                        </h4>
                        <span>
                            <img src={logo3} alt="about pic 2"></img>
                        </span>
                    </div>
                    <div className="buyButton">
                        <button>
                            Buy $RSI
                        </button>
                    </div>
                </div>
                <div className="memeSection">
                    <h4>Fuck! We are the most retard.</h4>
                    <div className="memePic">
                        <span>
                            <img src={image1[currentImageIndex]} alt="RSI first gif"></img>
                        </span>
                        <span>
                            <img src={image2[currentImageIndex]} alt="RSI second gif"></img>
                        </span>
                    </div>
                </div>
            </main>
            <footer>
                <p>© 2024 RSI. All rights reserved.</p>
            </footer>
        </div>
    );
}
