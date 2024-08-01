import styled from "styled-components";
import { achievements } from "../../setup/Achievements";
import { Statistics } from "./Statistics";
import { TextStyle } from "../styled/Text";
import { colours } from "../styled/Constants";

const Separator = styled.div`
  border: none;
  border-top: 1px solid #ccc; /* Adjust color and style */
`

const Header = styled(TextStyle)`
  font-size: 36px;
  text-align: center;
`

const Stat = styled(TextStyle)`
  font-size: 24px;
  text-align: left;
`

const Box = styled(TextStyle)`
  border: 1px solid ${colours.primary};
  background: black;
  border-radius: 5px;
  padding: 5px 20px;
`

const GameStatsComponent: React.FC<{ statistics: Statistics }> = ({
  statistics,
}) => {
  return (
    <>
    <div className="flex justify flex-col w-full h-full gap-5">
      <div className='flex justify flex-row w-full h-3/5 gap-5'>
        <div className='flex justify flex-col w-1/2 h-full gap-5'>
          <Box className='flex justify flex-col w-full'>
            <Stat>{achievements["pureShards"].name}: {statistics.pureShards}</Stat>
            <Separator/>
            <Stat>{achievements["corruptedShards"].name}: {statistics.corruptedShards}</Stat>
              <Separator/>
            <Stat>{achievements["gamesCompleted"].name}: {statistics.gamesCompleted}</Stat>
          </Box>
          <Box className='flex justify flex-col w-full items-center justify-center'>
            <div className='flex justify w-full items-center mb-2'>
              <div className='w-1/4'><img className='h-20' src="../../assets/ui/thumbnail-artist.png"/></div>
              <Stat className='w-3/4'>{achievements["chooseArtist"].name}: {statistics.chooseArtist}</Stat>
            </div>
            <Separator/>
            <div className='flex justify w-full items-center mb-2'>
            <Separator/>
              <div className='w-1/4'><img className='h-20' src="../../assets/ui/thumbnail-doctor.png"/></div>
              <Stat className='w-3/4'>{achievements["chooseDoctor"].name}: {statistics.chooseDoctor}</Stat>
            </div>
            <div className='flex justify w-full items-center mb-2'>
              <div className='w-1/4'><img className='h-20' src="../../assets/ui/thumbnail-mechanic.png"/></div>
              <Stat className='w-3/4'>{achievements["chooseMechanic"].name}: {statistics.chooseMechanic}</Stat>
            </div>
            </Box>
        </div>
        <Box className='flex justify flex-col w-1/2'>
          <Header>Worlds Explored</Header>
          <Stat>{achievements["endingSheep"].name}: {statistics.endingSheep}</Stat>
          <Separator/>
          <Stat>{achievements["endingForget"].name}: {statistics.endingForget}</Stat>
          <Separator/>
          <Stat>{achievements["endingTravel"].name}: {statistics.endingTravel}</Stat>
          <Separator/>
          <Stat>{achievements["endingMemory"].name}: {statistics.endingMemory}</Stat>
          <Separator/>
          <Stat>{achievements["endingWake"].name}: {statistics.endingWake}</Stat>
        </Box>
      </div>
      <Box className='flex flex-col h-2/5'>
      <div className='flex w-full justify-items-center items-center'>
        <Header>Worlds Explored</Header>
      </div>
      <div className='flex'>
        <div className='flex justify flex-col w-1/2'>
          <Stat>{achievements["achievementShangrila"].name}:{" "}{statistics.achievementShangrila}</Stat>
          <Separator/>
          <Stat>{achievements["achievementParadox"].name}:{" "}{statistics.achievementParadox}</Stat>
          <Separator/>
          <Stat>{achievements["achievementNature"].name}:{" "}{statistics.achievementNature}</Stat>
          <Separator/>
          <Stat>{achievements["achievementWords"].name}: {statistics.achievementWords}</Stat>
        </div>
        <div className='flex justify flex-col w-1/2'>
          <Stat>{achievements["achievementFolding"].name}:{" "}{statistics.achievementFolding}</Stat>
          <Separator/>
          <Stat>{achievements["achievementCrafting"].name}:{" "}{statistics.achievementCrafting}</Stat>
          <Separator/>
          <Stat>{achievements["achievementFeminine"].name}:{" "}{statistics.achievementFeminine}</Stat>
          <Separator/>
          <Stat>{achievements["achievementMyths"].name}: {statistics.achievementMyths}</Stat>
        </div>
      </div>
      </Box>
    </div>
    </>
  );
};

export default GameStatsComponent;
