import { useState } from "react";

export const useForceReload = () => {
  const [value, setValue] = useState(false);

  const forceReload = () => setValue(!value);

  return [forceReload];
};
