import * as React from "react";

import { TwilioLogo } from "./TwilioLogo";

export { TwilioLogo };

export const useMyHook = () => {
  let [{ counter }, setState] = React.useState({
    counter: 0,
  });

  React.useEffect(() => {
    let interval = window.setInterval(() => {
      counter++;
      setState({ counter });
    }, 1000);
    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return counter;
};
