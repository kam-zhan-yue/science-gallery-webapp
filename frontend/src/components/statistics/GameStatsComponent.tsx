import styled from "styled-components";
import { achievements } from "../../setup/Achievements";
import { Statistics } from "./Statistics";
import { TextStyle } from "../styled/Text";

const GameStat = styled(TextStyle)`
  text-align: left;
  font-size: 16px;
`;

const GameStatsComponent: React.FC<{ statistics: Statistics }> = ({
  statistics,
}) => {
  return (
    <>
      <div className="columns-2">
        <GameStat>
          {achievements["gamesStarted"].name}: {statistics.gamesStarted}
        </GameStat>
        <GameStat>
          {achievements["gamesCompleted"].name}: {statistics.gamesCompleted}
        </GameStat>
        <GameStat>
          {achievements["chooseArtist"].name}: {statistics.chooseArtist}
        </GameStat>
        <GameStat>
          {achievements["chooseDoctor"].name}: {statistics.chooseDoctor}
        </GameStat>
        <GameStat>
          {achievements["chooseMechanic"].name}: {statistics.chooseMechanic}
        </GameStat>
        <GameStat>
          {achievements["achievementShangrila"].name}:{" "}
          {statistics.achievementShangrila}
        </GameStat>
        <GameStat>
          {achievements["achievementParadox"].name}:{" "}
          {statistics.achievementParadox}
        </GameStat>
        <GameStat>
          {achievements["achievementNature"].name}:{" "}
          {statistics.achievementNature}
        </GameStat>
        <GameStat>
          {achievements["achievementWords"].name}: {statistics.achievementWords}
        </GameStat>
        <GameStat>
          {achievements["achievementFolding"].name}:{" "}
          {statistics.achievementFolding}
        </GameStat>
        <GameStat>
          {achievements["achievementCrafting"].name}:{" "}
          {statistics.achievementCrafting}
        </GameStat>
        <GameStat>
          {achievements["achievementFeminine"].name}:{" "}
          {statistics.achievementFeminine}
        </GameStat>
        <GameStat>
          {achievements["achievementMyths"].name}: {statistics.achievementMyths}
        </GameStat>
        <GameStat>
          {achievements["endingSheep"].name}: {statistics.endingSheep}
        </GameStat>
        <GameStat>
          {achievements["endingForget"].name}: {statistics.endingForget}
        </GameStat>
        <GameStat>
          {achievements["endingTravel"].name}: {statistics.endingTravel}
        </GameStat>
        <GameStat>
          {achievements["endingMemory"].name}: {statistics.endingMemory}
        </GameStat>
        <GameStat>
          {achievements["endingWake"].name}: {statistics.endingWake}
        </GameStat>
      </div>
    </>
  );
};

export default GameStatsComponent;
