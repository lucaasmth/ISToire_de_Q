import './Home.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function loadCondoms(){
  let condomImage = "./images/condom-svgrepo-com.svg";
  setInterval(()=>{
    let home = document.querySelector(".Home")
    let img = document.createElement('img');
    img.src = condomImage;
    img.style.position = 'absolute';
    img.style.top = 0;
    img.style.left = getRandomInt(document.body.clientWidth);
    img.height = '20%';
    home.appendChild(img);
    img.parentNode.removeChild(img);

  }, 4000);
}


const Home = () => {
    return (
      <div className="Home">
        <img className='img1' src="./images/condom-svgrepo-com.svg" alt="" srcset=""/>
        <img className='img2' src="./images/condom-svgrepo-com.svg" alt="" srcset=""/>
        <img className='img3' src="./images/condom-svgrepo-com.svg" alt="" srcset=""/>
        <a href="/scenario/1" className='btn-jouer'>JOUER</a>
        {loadCondoms()}
      </div>
    );
  }
  
  export default Home;