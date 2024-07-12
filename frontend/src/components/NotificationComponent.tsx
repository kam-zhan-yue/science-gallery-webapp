import React, {useEffect, useState} from "react";
import {EventBus} from "../EventBus.tsx";
import styled from "styled-components";
import {TextStyle} from "./styled/Text.tsx";
import {AnimatePresence, motion} from "framer-motion";
import {items} from "../setup/Item.ts";
import { Achievement, achievements } from "../setup/Achievements.ts";

const Notification = styled(motion.div)`
  position: fixed;
  top: 50px;

  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  border: 15px solid;
  border-image: url("../assets/ui/button.png") 15 15 15 15 fill repeat;

  -webkit-transition: all 0.2s;
  transition: all 0.2s;

  @media (max-width: 768px) {
    top: 120px;
  }
`

const Header = styled(TextStyle)`
  font-size: 26px;
  line-height: 1em;
`

const Separator = styled.div`
  border: none;
  border-top: 1px solid #ccc; /* Adjust color and style */
  margin: 2px 0; /* Adjust margin */
`

const Message = styled(TextStyle)`
  font-size: 20px;
  line-height: 1em;
`

const NotificationComponent: React.FC = () => {
    const [header, setHeader] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        EventBus.on("get_item", (item: string) =>  {
            if(item in items) {
                const message = `You have obtained ${items[item].name}`;
                setMessage(message);
            }
        })
        EventBus.on("use_item", (item: string) =>  {
            if(item in items) {
                const message = `You have used ${items[item].name}`;
                setMessage(message);
            }
        })

        EventBus.on("get_shard", (shard: string) =>  {
            console.log('get shard')
            if(shard == 'good') {
                const message: string = 'You have obtained a Pure Shard';
                setMessage(message);
            } else if (shard == 'bad'){
                const message: string = 'You have obtained a Corrupted Shard';
                setMessage(message);
            }
        })

        EventBus.on('achievement', (achievement: string) => {
            console.log(`Is ${achievement} in achievements? ${achievement in achievements}`)
            if(achievement in achievements) {
                const entry: Achievement = achievements[achievement];
                if(entry.hidden) return;

                const header: string = `Achievement Unlocked! ${entry.name}`;
                setHeader(header);
                if(entry.description) {
                    const message: string = entry.description;
                    setMessage(message);
                }
            }
        })

        return () => {
            EventBus.off("get_item");
            EventBus.off("use_item");
            EventBus.off("get_shard");
            EventBus.off("achievement");
        };
    }, []);

    useEffect(() => {
        if (header || message) {
            const timer = setTimeout(() => {
                setHeader('');
                setMessage('');
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [header, message]);

    return (
      <>
          <AnimatePresence>
              {(header || message) &&
                <Notification
                  key='notificationComponent'
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -200, opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.2}}
                >
                  {header && <Header>{header}</Header>}
                  {(header && message) && <Separator/>}
                  {message && <Message>{message}</Message>}
                </Notification>
              }
          </AnimatePresence>
      </>
    );
}

export default NotificationComponent;
