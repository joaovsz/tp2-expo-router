import React from "react";
import { ProgressBar as PaperProgressBar } from "react-native-paper";

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <PaperProgressBar
      progress={progress}
      color="#6200EE"
      style={{ height: 8 }}
    />
  );
};

export default ProgressBar;
