import React, { useState } from "react";

import {
  createStage,
  checkCollision,
  createAudio,
  playAudio,
  getGifFromGiphy
} from "../../gameHelpers";
import StyledTetris from "../styles/StyledTetris";
import StyledTetrisWrapper from "../styles/StyledTetrisWrapper";

// Custom Hooks
import { useInterval } from "../../hooks/useInterval";
import { usePlayer } from "../../hooks/usePlayer";
import { useStage } from "../../hooks/useStage";
import { useGameStatus } from "../../hooks/useGameStatus";
import { usePlaying } from "../../hooks/usePlaying";
import { useRequest } from "../../hooks/useRequest";

// Components
import Stage from "../Stage";
import Display from "../Display";
import Button from "../Button";
import Cardgif from "../Cardgif";

// Audio
import backgroundMusic from "../../sounds/Korobeiniki.mp3";
import gameOverMusic from "../../sounds/Gameover.mp3";
import collisionMusic from "../../sounds/Collision.mp3";
import lineMusic from "../../sounds/Line.mp3";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [onoff, setOnoff] = useState(true);
  const [gif, setGif] = useRequest();

  const [playing, setPlaying] = usePlaying(backgroundMusic);
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  const goAudio = createAudio(gameOverMusic);
  const collisionAudio = createAudio(collisionMusic);
  const lineAudio = createAudio(lineMusic);

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1));
      }
    }
  };

  const startGame = () => {
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setLevel(0);
    setRows(0);
    setGameOver(false);
  };

  const drop = async () => {
    setPlaying(onoff);
    if (rows > (level + 1) * 10) {
      playAudio(lineAudio, onoff);
      const response = await getGifFromGiphy("Russian");
      setGif(response);
      setLevel(prev => prev + 1);
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setPlaying(!onoff);
        playAudio(goAudio, onoff);
        console.log("GAME OVER!!!");
        setGameOver(true);
        setDropTime(null);
      } else {
        playAudio(collisionAudio, onoff);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  useInterval(() => {
    drop();
  }, dropTime);

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={e => move(e)}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}
          <Button callback={startGame} name={"Start Game"} />
          <Button
            callback={() => {
              setOnoff(!onoff);
              console.log("onoff");
            }}
            name={"Sound on/off"}
          />
          <Cardgif gifurl={gif} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
