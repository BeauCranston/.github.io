var classicInfoButton = document.getElementById("classicInfoButton");
var classicModeInfo = document.getElementById("classicModeInfo");
var teamInfoButton = document.getElementById("teamInfoButton");
var teamModeInfo = document.getElementById("teamModeInfo");
classicInfoButton.onclick = function() {
  if (classicModeInfo.classList.contains("open")) {
    classicModeInfo.classList.remove("open");
  } else {
    classicModeInfo.classList.add("open");
  }
};

teamInfoButton.onclick = function() {
  if (teamModeInfo.classList.contains("open")) {
    teamModeInfo.classList.remove("open");
  } else {
    teamModeInfo.classList.add("open");
  }
};
