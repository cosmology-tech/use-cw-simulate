import { useCallback, useState } from "react";
import { CWChain, CWSimulateEnv } from "@terran-one/cw-simulate";

export interface ChainConfig {
  chainId: string;
  bech32Prefix: string;
}

/**
 * Creates a new chain for simulation.
 * Usage: const [simulation, chain, chainError, createChain] = useCreateChainForSimulation();
 */
export default function useCreateChainForSimulation() {
  const [chain, setChain] = useState<CWChain | null>(null);
  const [chainError, setChainError] = useState<Error | null>(null);
  const [simulation, setSimulation] = useState({env: new CWSimulateEnv()});

  const createChain = useCallback(async (chainConfig: ChainConfig) => {
    setChain(null);
    setChainError(null);
    setSimulation({env: new CWSimulateEnv()});

    try {
      const chain = await simulation.env.createChain(chainConfig);
      setChain(chain);
    } catch (error) {
      setChainError(error);
    }
  }, []);

  return {simulation, chain, chainError, createChain};
}
