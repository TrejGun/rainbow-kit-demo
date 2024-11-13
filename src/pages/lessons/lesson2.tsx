import { FC } from "react";
import { useAccount, useBalance } from "wagmi";
import { formatEther } from "viem";

import { ITabPanelProps, TabPanel } from "../../components/tab-panel";

export const Lesson2: FC<ITabPanelProps> = props => {
  const { address } = useAccount();

  const { data } = useBalance({
    address: address,
  });

  return (
    <TabPanel {...props}>
      Balance: {formatEther(data?.value ?? 0n)} {data?.symbol}
    </TabPanel>
  );
};
