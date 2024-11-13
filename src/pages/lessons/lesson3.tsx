import { FC } from "react";
import { useAccount, useSimulateContract, useWriteContract } from "wagmi";
import { parseEther, zeroAddress } from "viem";
import { Button } from "@mui/material";

import { ITabPanelProps, TabPanel } from "../../components/tab-panel";
import { abi } from "../../contracts/ERC20Ownable.json";

export const Lesson3: FC<ITabPanelProps> = props => {
  const { address } = useAccount();

  const result = useSimulateContract({
    abi,
    address: zeroAddress, // need to be real address
    functionName: "transfer",
    args: [address, parseEther("100")],
  });

  const { writeContract, error } = useWriteContract();

  console.error(error); // <- check this error in case metamask is not opening

  const handleClick = () => {
    return writeContract(result.data!.request);
  };

  return (
    <TabPanel {...props}>
      <Button variant="outlined" onClick={handleClick}>
        Transfer tokens
      </Button>
    </TabPanel>
  );
};
