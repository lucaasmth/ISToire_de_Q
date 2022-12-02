import React, { useEffect, useState } from 'react';
import './Memory.css';
import Card from './MemoryCard.js'

const initialCards = [
  { "src": "/images/Gonorrhée.jpg", matched: false, title: "Gonorrhée", desc:"Infection provoquant notamment des picotements ou sensations de brulure en urinant, aussi connue sous le nom de “chaude-pisse”." },
  { "src": "/images/HépatiteB.jpg", matched: false , title: "Hépatite B", desc: " Infection provoquée par le virus VHB, pouvant entrainer la mort par cancer du foie."},
  { "src": "/images/HerpèsGénital.jpg", matched: false, title: "Herpès génital", desc: "Virus très contagieux se manifestant par de petites cloques évoluant ensuite en plaies."},
  { "src": "/images/HPV.jpg", matched: false, title: "HPV", desc: "Groupe de 200 virus dont 40 qui infectent les organes génitaux et peuvent provoquer des lésions pré-cancéreuses et des cancers." },
  { "src": "/images/Syphilis.jpg", matched: false, title: "Syphilis", desc: "Infection très contagieuse touchant particulièrement les hommes ayant des rapports homosexuels."},
  { "src": "/images/VIH.jpg", matched: false, title: "VIH", desc: "Virus affaiblissant le système immunitaire, responsable du sida."},
];

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};

function Memory() {
    const [cards, setCards] = useState([]);
    const [turn, setTurn] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(true);
    const [startFlip, setStartFlip] = useState(true);
    const [modalTitle, setModalTitle] = useState("");
    const [modalDesc, setModalDesc] = useState("");
  
    const [isOpen, setIsOpen] = useState(false);
  
    const togglePopup = (object) => {
      setIsOpen(true);
      setModalTitle(object.title);
      setModalDesc(object.desc);
    }
  
    const closePopup = () => {
      setIsOpen(false);
      checkWin().then((result) => {
        if(result) {
          console.log("win");
          setIsOpen(true);
          setModalTitle("Win");
          setModalDesc("Vous avez gagné ! LIEN");
        }
      })
    }
  
    useEffect(() => {
      setTimeout(() => {
        setStartFlip(false)
      }, 1000);
      shuffleCards();
    }, []);
  
    async function checkWin(){
      console.log("test");
      let win = true;
      await cards.forEach(card => {
        console.log(card.matched);
        if(!card.matched) win = false;
      });
      return win;
    }
  
    function shuffleCards() {
      //setCards(null)
      const shuffledCards = [...initialCards, ...initialCards]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
  
      setChoiceOne(null)
      setChoiceTwo(null)
      setCards(shuffledCards);
      setTurn(0);
      setDisabled(false)
      setStartFlip(true)
      setTimeout(() => {
        setStartFlip(false)
      }, 1000);
    }
  
  
    function handleChoice(card) {
      choiceOne ? (
        choiceOne.id !== card.id &&
        setChoiceTwo(card))
        : setChoiceOne(card)
    }
  
    function resetTurn() {
      setChoiceOne(null)
      setChoiceTwo(null)
      setTurn(prevTurn => prevTurn + 1)
      setDisabled(false)
    }

    
  
    useEffect(() => {
      if (choiceOne && choiceTwo) {
        setDisabled(true);
        if (choiceOne.src === choiceTwo.src) {
          togglePopup(choiceOne);
          setCards(prevCards => {
            return prevCards.map(card => {
              if (card.src === choiceOne.src) {
                return { ...card, matched: true }
              } else {
                return card
              }
            })
          })
          resetTurn();
        } else {
          setTimeout(() => {
            resetTurn();
          }, 1000);
        }
      }
    }, [choiceOne, choiceTwo]);

    return(
      <div className='container'>
      <h1>Memor'IST</h1>      
      <div className="grid">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched || startFlip}
            disabled={disabled}
            matched={card.matched}
          />
        ))}
      </div>
      {isOpen && <Popup
        content={<>
          <h2><b>{modalTitle}</b></h2>
          <p className='p_pop'>{modalDesc}</p>
          <button class="button" onClick={closePopup}>Ok</button>
        </>}
        handleClose={closePopup}
      />}
      <p className='p'>Turns: {turn}</p>
      </div>
    );
}

export default Memory;