import React, { useMemo } from "react";
import { animated, useTransition } from "react-spring";

import "./styles.css";

const Message = ({ message }) => {
  console.log(message)
    const items = useMemo(
      () =>
        message.message.split("").map((letter, index) => ({
          item: letter,
          key: index
        })),
      [message]
    );
    const transitions = useTransition(items, {
      trail: 20,
      from: { display: "none" },
      enter: { display: "" }
    });
    const perso = message.speaker === 'Paul' ? 'paul.png' :
                  message.speaker === 'Julie' ? 'julie.png' :
                  message.speaker === 'Intervenant' ? 'intervenant.png' :
                  message.speaker === 'Amie' ? 'ami.png' :
                  '';
    return (
        <div className="DialogMessage">
          <img style={{maxHeight: '100px', display: 'block', margin: 'auto'}} src={process.env.PUBLIC_URL + '/images/' + perso} alt={message.speaker} />
        {transitions((styles, item, key) => { 
          return (
            <animated.span key={key} style={styles} >
                {item.item === "\n" 
                ? <br />
                : item.item
                }
            </animated.span>
          );
        })}
      </div>
/*      <div dangerouslySetInnerHTML={ { __html: message.message.replace('\n', '<br>') } }>
        
      </div>*/
    );
  };

class DialogBox extends React.Component {
    constructor(props) {
        super(props);
        this.navigate = props.navigate;
        this.messages = props.messages;
        this.nextStep = props.nextStep;
        this.state = {
            currentMessage: 0
        };
    }
    
    render() {
        const handleClick = () => {
            if (this.state.currentMessage < this.messages.length - 1) {
                this.setState({ currentMessage: this.state.currentMessage + 1 })
            } else {
              switch(this.nextStep) {
                case "1":
                  //window.open("https://google.com");
                  this.navigate('/memory');
                  break;
                case "2":
                  this.navigate('/crosswords');
                  break;
                case "3":
                  this.navigate('/bubble');
                  break;
                case "4":
                  this.navigate('/credits');
                  break;
                default:
                  break;
              }
            }
        };

        return (
            <div className="DialogBox">
                {/*<div className="dialogTitle">{this.messages[this.state.currentMessage].speaker}</div>*/}
                <Message message={this.messages[this.state.currentMessage]} key={this.state.currentMessage} />
                <div onClick={handleClick} className="dialogFooter">
                    Next
                </div>
            </div>
        );
    };
};

export default DialogBox;