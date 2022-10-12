import { useCallback, useState } from "react";
import { CWSimulateEnv } from "@terran-one/cw-simulate";

export default function useDeleteChainForSimulation() {
  const [simulation, setSimulation] = useState({env: new CWSimulateEnv()});

  const deleteChain = useCallback(async (chainId: string) => {
    delete simulation.env.chains[chainId];
    setSimulation({env: new CWSimulateEnv()});
  }, []);

  return {simulation, deleteChain};
}
