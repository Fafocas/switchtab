import { focusTab , getSwitchTabId} from "./background.js";

chrome.commands.onCommand.addListener(async (command) => {
  let switchTabId
  switch(command){
    case "switch-right":
      switchTabId = await getSwitchTabId("right")
      break
    case "switch-left":
      switchTabId = await getSwitchTabId("left")
      break
  }
  focusTab(switchTabId)
});