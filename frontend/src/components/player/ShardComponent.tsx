import Player from "../../classes/Player.ts";
import React from "react";
import SubPopup from "../styled/SubPopup.tsx";
import styled from "styled-components";

interface StatsComponentProps {
    player: Player,
    onCloseButton: () => void;
}

const Stat = styled.div`
`

const ShardComponent: React.FC<StatsComponentProps> = ({player, onCloseButton}) => {
    const close = () => {
        onCloseButton();
    }

    return (
        <>
            <SubPopup title={"Shards"} onCloseButton={close}>
                {player.firstShard &&
                    <Stat>{player.firstShard}</Stat>
                }
                {player.secondShard &&
                    <Stat>{player.secondShard}</Stat>
                }
                {player.thirdShard &&
                    <Stat>{player.thirdShard}</Stat>
                }
            </SubPopup>
        </>
    );
}

export default ShardComponent;