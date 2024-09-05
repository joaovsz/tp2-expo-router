import * as React from "react";
import { View } from "react-native";
import { Menu, Divider } from "react-native-paper";
import PaperButton from "./IconButton";

const MyMenu = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <PaperButton icon="cursor-default-click-outline" onPress={openMenu} />
        }
      >
        <Menu.Item onPress={() => {}} title="Item 1" />
        <Menu.Item onPress={() => {}} title="Item 2" />
        <Divider />
        <Menu.Item onPress={() => {}} title="Item 3" />
      </Menu>
    </View>
  );
};

export default MyMenu;
