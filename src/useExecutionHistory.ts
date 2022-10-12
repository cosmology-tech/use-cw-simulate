import { CWSimulateEnv, ExecutionHistoryRecord } from "@terran-one/cw-simulate";
import { useCallback, useState } from "react";

// TODO: Update
export default function useExecutionHistory() {
  const [executionHistory, setExecutionHistory] = useState<ExecutionHistoryRecord>(null);

  return {executionHistory};
}
