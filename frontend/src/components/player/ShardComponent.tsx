import Player from "../../classes/Player.ts";
import React, { useState } from "react";
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
  width: 92%;
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
  width: 75px;
  &:hover {
      cursor: pointer;
  }

  @media (max-width: 600px) {
      width: 50px;
    }
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

const ShardTitle = styled.div`
  font-size: 36px;
  margin-bottom: 10px;
`

const ShardDescription = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`

const DoneButton = styled.div`
  width: 100px;
  height: 50px;

  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 20px solid;
  border-image: url("../assets/ui/slot-active.png") 15 15 15 15 fill repeat;

  &:hover {
    cursor: pointer;
  }
`

const ShardComponent: React.FC<StatsComponentProps> = ({player, onCloseButton}) => {
  const [info, setInfo] = useState<string>('');

    const close = () => {
        onCloseButton();
    }

    const prefix = '../../assets/items/';

    function getShard (shardType: string) {
        if(shardType == 'good') {
            return prefix+'apple-pie.png';
        } else {
            return prefix+'avocado.png';
        }
    }

    function showInfo(shardType: string) {
      setInfo(shardType);
    }

    return (
        <>
            <SubPopup title={"Shards"} onCloseButton={close}>
            {info === '' &&
                <ShardContainer>
                    <ShardHolder src='../../assets/ui/shard-container.png' alt='shard-container'/>
                    <ShardGrid className="grid grid-rows-2">
                        <Row>
                            {player.firstShard &&
                                <>
                                    <Shard
                                      src={getShard(player.firstShard)}
                                      alt='shard-one'
                                      onClick={()=>{showInfo(player.firstShard)}}
                                      />
                                </>
                            }
                        </Row>
                        <Grid2 className="grid grid-cols-2 w-full">
                            <Row className="p-4">
                                {player.secondShard &&
                                    <>
                                        <Shard
                                          src={getShard(player.secondShard)}
                                          alt='shard-one'
                                          onClick={()=>{showInfo(player.secondShard)}}
                                          />
                                    </>
                                }
                            </Row>
                            <Row className="p-4">
                                {player.thirdShard &&
                                    <>
                                        <Shard
                                        src={getShard(player.thirdShard)}
                                        alt='shard-one'
                                        onClick={()=>{showInfo(player.thirdShard)}}
                                        />
                                    </>
                                }
                            </Row>
                        </Grid2>
                    </ShardGrid>
                </ShardContainer>
            }
            {info !== '' &&
              <div className="flex w-full text-center items-center justify-center flex-col">
                  <img className="w-28 mb-4"
                    src={getShard(info)}
                    alt='shard-display'
                    />
                    <ShardTitle>
                      {info === 'good' &&
                        <>
                          Pure Shard
                        </>}
                      {info === 'bad' &&
                          <>
                            Corrupted Shard
                          </>}
                    </ShardTitle>
                    <ShardDescription>
                    {info === 'good' &&
                        <>
                          A shard that shines through the darkness
                        </>}
                      {info === 'bad' &&
                          <>
                            Corrupted Shard
                          </>}
                    </ShardDescription>
                    <DoneButton onClick={()=>{setInfo('')}}>Done</DoneButton>
              </div>
            }
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
