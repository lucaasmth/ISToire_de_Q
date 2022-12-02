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
        this.messages = props.messages;
        this.state = {
            currentMessage: 0
        };
    }
    
    render() {
        const handleClick = () => {
            if (this.state.currentMessage < this.messages.length - 1) {
                this.setState({ currentMessage: this.state.currentMessage + 1 })
            } else {}
        };

        return (
            <div className="DialogBox">
                <div className="dialogTitle" dangerouslySetInnerHTML={ {__html: this.messages[this.state.currentMessage].speaker.replace("\n", "<br>") } }></div>
                <Message message={this.messages[this.state.currentMessage]} key={this.state.currentMessage} />
                <div onClick={handleClick} className="dialogFooter">
                    Next
                </div>
            </div>
        );
    };
};

export default DialogBox;