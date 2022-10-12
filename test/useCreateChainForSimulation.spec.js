import { act, cleanup, renderHook } from '@testing-library/react-hooks';

describe('useCreateChainForSimulation', () => {
  it('should create a chain for simulation', () => {
    const { result } = renderHook(() => useCreateChainForSimulation())
    expect(result.current).toEqual([])
  })
});
