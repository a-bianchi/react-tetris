import { useState } from "react";

export const useRequest = () => {
  const [gif, setGif] = useState(
    "https://media.giphy.com/media/bkeSNyI1wR1rW/giphy.gif"
  );

  return [gif, setGif];
};
