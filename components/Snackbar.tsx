import React from "react";
import { Snackbar as RNPaperSnackbar } from "react-native-paper";

type SnackbarProps = {
  visible: boolean;
  onDismiss: () => void;
  duration?: number;
  actionLabel: string;
  onActionPress?: () => void;
  message: string;
};

const MySnackbar = ({
  visible,
  onDismiss,
  duration = 5000,
  actionLabel,
  onActionPress,
  message,
}: SnackbarProps) => {
  return (
    <RNPaperSnackbar
      visible={visible}
      onDismiss={onDismiss}
      duration={duration}
      action={{
        label: actionLabel,
        onPress: onActionPress,
      }}
    >
      {message}
    </RNPaperSnackbar>
  );
};

export default MySnackbar;
