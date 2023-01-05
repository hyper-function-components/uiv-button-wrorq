import type {
  HyperFunctionComponent,
  HfcProps,
} from "hyper-function-component";

import "./index.css";

const HFC: HyperFunctionComponent<HTMLButtonElement> = (
  container,
  initProps
) => {
  container.classList.add("uiv-button-wrorq");
  const buttonTop = document.createElement("span");
  buttonTop.classList.add("button-top");
  container.appendChild(buttonTop);

  function render(props: HfcProps) {
    if (props.events.onClick) {
      container.onclick = props.events.onClick;
    } else {
      if (container.onclick) {
        container.onclick = null;
      }
    }

    if (props.slots.default) {
      props.slots.default(buttonTop);
    } else {
      buttonTop.innerHTML = props.attrs.text || "";
    }
  }

  render(initProps);

  return {
    changed(props) {
      render(props);
    },
    disconnected() {},
  };
};

HFC.tag = "button";
// @ts-ignore
HFC.hfc = process.env.HFC_NAME;
// @ts-ignore
HFC.ver = process.env.HFC_VERSION;
// @ts-ignore
HFC.names = process.env.HFC_PROP_NAMES;

export default HFC;
