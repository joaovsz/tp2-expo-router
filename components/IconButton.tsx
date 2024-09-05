import React from "react";
import { IconButton as PaperIconButton } from "react-native-paper";

const PaperButton = ({ icon, onPress }: { icon: any; onPress: () => void }) => {
  return <PaperIconButton icon={icon} onPress={onPress} />;
};

export default PaperButton;
