import styled from "styled-components";
import { achievements } from "../../setup/Achievements";
import { Statistics } from "./Statistics";
import { TextStyle } from "../styled/Text";

const GameStat = styled(TextStyle)`
  text-align: left;
  font-size: 35px;
  border: 5px solid #2a3cad;
  margin: 8px;
  padding: 3px;
`;

const StatsStuff = styled(TextStyle)`
  display: flex;
  margin-top: -24px;
  font-size: 35px;
  margin-left: 75px;
  text-decoration: underline dotted;
`

const GameStatsComponent: React.FC<{ statistics: Statistics }> = ({
  statistics,
}) => {
  return (
    <>
    <div className="flex justify flex-col w-full h-full">
      <div className='flex justify flex-row w-full h-3/5'>
        <div className='flex justify flex-col w-1/2 h-full'>
          <div className='flex justify flex-col w-full h-2/5'>
            <GameStat className = 'bg-zinc-500'>
              {achievements["gamesStarted"].name}: {statistics.gamesStarted}
            </GameStat>
            <GameStat className = 'bg-zinc-500'>
              {achievements["gamesCompleted"].name}: {statistics.gamesCompleted}
            </GameStat>
          </div>
            <div className='flex justify flex-col w-full h-3/5'>
              <GameStat className = 'bg-teal-500'>
                {achievements["chooseArtist"].name}: {statistics.chooseArtist}
              </GameStat>
              <GameStat className = 'bg-teal-500'>
                {achievements["chooseDoctor"].name}: {statistics.chooseDoctor}
              </GameStat>
              <GameStat className = 'bg-teal-500'>
                {achievements["chooseMechanic"].name}: {statistics.chooseMechanic}
              </GameStat>
          </div>
        </div>
        <div className='flex justify flex-col w-1/2 h-full'>
          <StatsStuff> Endings Achieved: </StatsStuff>
          <GameStat className = 'bg-pink-500'>
            {achievements["endingSheep"].name}: {statistics.endingSheep}
          </GameStat>
          <GameStat className = 'bg-pink-500'>
            {achievements["endingForget"].name}: {statistics.endingForget}
          </GameStat>
          <GameStat className = 'bg-pink-500'>
            {achievements["endingTravel"].name}: {statistics.endingTravel}
          </GameStat>
          <GameStat className = 'bg-pink-500'>
            {achievements["endingMemory"].name}: {statistics.endingMemory}
          </GameStat>
          <GameStat className = 'bg-pink-500'>
            {achievements["endingWake"].name}: {statistics.endingWake}
          </GameStat>
        </div>
      </div>
      <StatsStuff>Worlds Explored:</StatsStuff>
      <div className='flex row h-2/5'>
      <div className='flex justify flex-col w-1/2'>
        <GameStat className = 'bg-red-500'>
            {achievements["achievementShangrila"].name}:{" "}
            {statistics.achievementShangrila}
          </GameStat>
          <GameStat className = 'bg-red-500'>
            {achievements["achievementParadox"].name}:{" "}
            {statistics.achievementParadox}
          </GameStat>
          <GameStat className = 'bg-red-500'>
            {achievements["achievementNature"].name}:{" "}
            {statistics.achievementNature}
          </GameStat>
          <GameStat className = 'bg-red-500'>
            {achievements["achievementWords"].name}: {statistics.achievementWords}
          </GameStat>
      </div>
      <div className='flex justify flex-col w-1/2'>
          <GameStat className = 'bg-red-500'>
            {achievements["achievementFolding"].name}:{" "}
            {statistics.achievementFolding}
          </GameStat>
          <GameStat className = 'bg-red-500'>
            {achievements["achievementCrafting"].name}:{" "}
            {statistics.achievementCrafting}
          </GameStat>
          <GameStat className = 'bg-red-500'>
            {achievements["achievementFeminine"].name}:{" "}
            {statistics.achievementFeminine}
          </GameStat>
          <GameStat className = 'bg-red-500'>
            {achievements["achievementMyths"].name}: {statistics.achievementMyths}
          </GameStat>
      </div>
      </div>
    </div>
    </>
  );
};

export default GameStatsComponent;
