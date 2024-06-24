import React, {useEffect, useState} from "react";
import {EventBus} from "../EventBus.tsx";
import styled from "styled-components";
import {TextStyle} from "./styled/Text.tsx";
import {AnimatePresence, motion} from "framer-motion";
import {items} from "../setup/Item.ts";

const Notification = styled(motion.div)`
  position: fixed;
  top: 50px;
  
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  border: 15px solid;
  border-image: url("../assets/ui/button.png") 15 15 15 15 fill repeat;
`

const Message = styled(TextStyle)`
  font-size: 25px;
  line-height: 1em;
`

const NotificationComponent: React.FC = () => {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        EventBus.on("get_item", (item: string) =>  {
            if(item in items) {
                const message = `You have obtained ${items[item].name}`;
                setMessage(message);
            }
        })

        return () => {
            EventBus.off("get_item");
        };
    }, []);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
      <>
          <AnimatePresence>
              {message &&
                  <>
                      <Notification
                          initial={{ y: -300, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -300, opacity: 0, transition: { duration: 0.2 } }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                      >
                          <Message>
                              {message}
                          </Message>
                      </Notification>
                  </>
              }
          </AnimatePresence>
      </>
    );
}

export default NotificationComponent;