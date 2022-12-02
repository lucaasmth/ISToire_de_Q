import React, { useMemo } from "react";
import { animated, useTransition } from "react-spring";

import "./styles.css";

const Message = ({ message }) => {
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
    return (
        <div className="DialogMessage">
        {transitions((styles, item, key) => { 
            console.log(item);
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
                <div className="dialogTitle"></div>
                <Message message={this.messages[this.state.currentMessage]} key={this.state.currentMessage} />
                <div onClick={handleClick} className="dialogFooter">
                    Next
                </div>
            </div>
        );
    };
};

export default DialogBox;