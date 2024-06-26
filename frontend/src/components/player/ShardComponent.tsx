import Player from "../../classes/Player.ts";
import React from "react";
import SubPopup from "../styled/SubPopup.tsx";
import styled from "styled-components";

interface StatsComponentProps {
    player: Player,
    onCloseButton: () => void;
}

const ShardContainer = styled.div`
  overflow: hidden;
`

const ShardHolder = styled.img`
  width: 95%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ShardGrid = styled.div`
  width: 100%;
  height: 100%;
  max-height: 64vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Shard = styled.img`
    width: 50px;
`
const Row = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  //background: rgb(255, 0,0,0.5);
`

const Grid2 = styled.div`
    gap: 4em;
`

const ShardComponent: React.FC<StatsComponentProps> = ({player, onCloseButton}) => {
    const close = () => {
        onCloseButton();
    }

    const prefix = '../../assets/items/';

    const getShard = (shardType: string) => {
        if(shardType == 'good') {
            return prefix+'apple-pie.png';
        } else {
            return prefix+'avocado.png';
        }
    }

    return (
        <>
            <SubPopup title={"Shards"} onCloseButton={close}>
                <ShardContainer>
                    <ShardHolder src='../../assets/ui/shard-container.png' alt='shard-container'/>
                    <ShardGrid className="grid grid-rows-2">
                        <Row>
                            {player.firstShard &&
                                <>
                                    <Shard src={getShard(player.firstShard)} alt='shard-one'/>
                                </>
                            }
                        </Row>
                        <Grid2 className="grid grid-cols-2 w-full">
                            <Row className="p-4">
                                {player.secondShard &&
                                    <>
                                        <Shard src={getShard(player.secondShard)}  alt='shard-one'/>
                                    </>
                                }
                            </Row>
                            <Row className="p-4">
                                {player.thirdShard &&
                                    <>
                                        <Shard src={getShard(player.thirdShard)}  alt='shard-one'/>
                                    </>
                                }
                            </Row>
                        </Grid2>
                    </ShardGrid>
                </ShardContainer>
                {/*{player.secondShard &&*/}
                {/*    <Shard>{player.secondShard}</Shard>*/}
                {/*}*/}
                {/*{player.thirdShard &&*/}
                {/*    <Shard>{player.thirdShard}</Shard>*/}
                {/*}*/}
            </SubPopup>
        </>
    );
}

export default ShardComponent;