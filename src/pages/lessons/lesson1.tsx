import { FC } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { ITabPanelProps, TabPanel } from "../../components/tab-panel";

export const Lesson1: FC<ITabPanelProps> = props => {
  return (
    <TabPanel {...props}>
      <ConnectButton />
    </TabPanel>
  );
};
