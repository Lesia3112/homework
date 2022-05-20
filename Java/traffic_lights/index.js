import { modal } from "./modal.js";

const circleList = document.getElementsByClassName("js-circle");

const TRAFFIC = {
  RED: "red",
  YELLOW: "yellow",
  GREEN: "green",
};
let activeTraffic = TRAFFIC.RED;
document.getElementById("js-button").addEventListener("click", () => {
  for (const circle of circleList) {
    circle.classList.remove("active");
  }
  switch (activeTraffic) {
    case TRAFFIC.RED:
      activeTraffic = TRAFFIC.YELLOW;
      circleList[1].classList.add("active");
      break;
    case TRAFFIC.YELLOW:
      activeTraffic = TRAFFIC.GREEN;
      circleList[2].classList.add("active");

      break;
    case TRAFFIC.GREEN:
      activeTraffic = TRAFFIC.RED;
      circleList[0].classList.add("active");

      break;
  }
});

document.getElementById("js-click-button").addEventListener("click", modal);
document.getElementById("js-close-button").addEventListener("click", modal);
