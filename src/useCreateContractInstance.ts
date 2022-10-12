import { useCallback, useState } from "react";
import { CWContractInstance, MsgInfo } from "@terran-one/cw-simulate";

// TODO: Update
export default function useCreateContractInstance() {
  const [contractInstance, setContractInstance] = useState<CWContractInstance | null>(null);
  const [contractInstanceError, setContractInstanceError] = useState<Error | null>(null);

  const createContractInstance = useCallback(async (chainId: string, codeId: number, info: MsgInfo, instantiateMsg: any) => {
    setContractInstance(null);
    setContractInstanceError(null);

    try {
      setContractInstance(contractInstance);
    } catch (error) {
      setContractInstanceError(error);
    }
  }, []);

  return {contractInstance, contractInstanceError, createContractInstance};
}
