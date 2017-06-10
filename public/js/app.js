var app = angular.module('app', ['controllers']);

angular.module('controllers', [])
  .controller('MainController', function ($scope, $filter) {
    $scope.shortcuts = {arr: [
      {
        keyCombi: ["Alt", "Tab"],
        description: "Switch between programs",
        os: ["linux", "win"],
        rate: 2
      }, {
        keyCombi: ["Alt", "Shift", "Tab"],
        description: "Switch between programs backwards",
        os: ["linux", "win"],
        rate: 22
      }, {
        keyCombi: ["Ctrl", "Alt", "T"],
        description: "Open terminal",
        os: ["linux"],
        rate: 22
      }, {
        keyCombi: ["Space"],
        description: "Scroll in a browser",
        os: ["linux", "win", "mac"],
        rate: 42
      }, {
        keyCombi: ["Alt", "F4"],
        description: "Close window",
        os: ["linux", "win"],
        rate: 2
      }, {
        keyCombi: ["Alt", "`"],
        description: "Switch between windows from the same application",
        os: ["linux", "win"],
        rate: 253
      }, {
        keyCombi: ["Super", "W"],
        description: "Activate the workspace switcher. Zoom out on all workspaces",
        os: ["linux"],
        rate: 25
      }, {
        keyCombi: ["Ctrl", "Alt", "Delete"],
        description: "Lock or log out",
        os: ["linux"],
        rate: 25
      }, {
        keyCombi: ["Ctrl", "Super", "D"],
        description: "Hide all windows and show the desktop. Press the keys again to restore your windows.",
        os: ["linux"],
        rate: 25
      }, {
        keyCombi: ["Ctrl", "A"],
        description: "Select all text or items in a list",
        os: ["linux", "win"],
        rate: 25
      }, {
        keyCombi: ["Ctrl", "X"],
        description: "Cut (remove) selected text or items and place it on the clipboard",
        os: ["linux", "win"],
        rate: 25
      }, {
        keyCombi: ["Ctrl", "C"],
        description: "Copy selected text or items to the clipboard",
        os: ["linux", "win"],
        rate: 25
      }, {
        keyCombi: ["Ctrl", "V"],
        description: "Paste the contents of the clipboard",
        os: ["linux", "win"],
        rate: 25
      }, {
        keyCombi: ["Ctrl", "Z"],
        description: "Undo the last action",
        os: ["linux", "win"],
        rate: 25
      }, {
        keyCombi: ["PrtSc"],
        description: "Take a screenshot",
        os: ["linux", "win"],
        rate: 25
      }, {
        keyCombi: ["Alt", "PrtSc"],
        description: "Take a screenshot of the active window",
        os: ["linux"],
        rate: 25
      }, {
        keyCombi: ["Shift", "PrtSc"],
        description: "Take a screenshot of an area of the screen. The pointer changes to a crosshair. Click and drag to select an area",
        os: ["linux"],
        rate: 25
      }, {
        keyCombi: ["Shift", "Ctrl", "PrtSc"],
        description: "Take a screenshot of an area of the screen and saves it directly in the clipboard. The pointer changes to a crosshair. Click and drag to select an area",
        os: ["linux"],
        rate: 25
      }, {
        keyCombi: ["Ctrl", "F"],
        description: "Search for a certain keyword",
        os: ["linux", "win", "mac"],
        rate: 25
      }, {
        keyCombi: ["F2"],
        description: "Rename a file",
        os: ["linux", "win"],
        rate: 25
      }, {
        keyCombi: ["Win", "D"],
        description: "Show Desktop",
        os: ["win"],
        rate: 25
      }, {
        keyCombi: ["Win", "M"],
        description: "Minimize all windows",
        os: ["win"],
        rate: 25
      }, {
        keyCombi: ["Alt", "Space"],
        description: "Access the windows menu for the current window",
        os: ["linux", "win"],
        rate: 25
      }, {
        keyCombi: ["Win", "U"],
        description: "Shut down window",
        os: ["win"],
        rate: 25
      }, {
        keyCombi: ["Ctrl", "Shift", "Esc"],
        description: "Open Task Manager",
        os: ["linux", "win"],
        rate: 25
      }, {
        keyCombi: ["Backspace"],
        description: "Backbutton in Windows Explorer",
        os: ["win"],
        rate: 25
      }, {
        keyCombi: ["Alt", "W"],
        description: "Close browser Tab",
        os: ["linux", "mac", "win"],
        rate: 25
      }, {
        keyCombi: ["Win", "E"],
        description: "Open an Windows Explorer reference",
        os: ["win"],
        rate: 25
      }, {
        keyCombi: ["Ctrl", "Esc"],
        description: "Open Start menu",
        os: ["win"],
        rate: 25
      }, {
        keyCombi: ["Win", "Pause"],
        description: "Open System Information",
        os: ["win"],
        rate: 25
      }, {
        keyCombi: ["Ctrl", "Left/Right"],
        description: "Move the caret to the previous/next word",
        os: ["linux", "win"],
        rate: 25
      }, {
        keyCombi: ["Ctrl", "Home/End"],
        description: "Go to beginning/end of the current field or document",
        os: ["linux", "win"],
        rate: 25
      }, {
        keyCombi: ["Ctrl", "PgUp/PgDn"],
        description: "Switch between tabs in browser",
        os: ["linux", "win"],
        rate: 25
      }, {
        keyCombi: ["Ctrl", "Super", "Up"],
        description: "Maximises the current window",
        os: ["linux", "win"],
        rate: 25
      }, {
        keyCombi: ["Ctrl", "Super", "Down"],
        description: "Restores or minimizes the current window",
        os: ["linux", "win"],
        rate: 25
      }, {
        keyCombi: ["Ctrl", "Super", "Left/Right"],
        description: "Semi-maximizes the current window to the left/right",
        os: ["linux", "win"],
        rate: 25
      }, {
        keyCombi: ["Super", "T"],
        description: "Opens the trash window",
        os: ["linux"],
        rate: 25
      }, {
        keyCombi: ["Cmd", "Tab"],
        description: "Switch between different programs/applications",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Shift", "Ctrl", "N"],
        description: "Create a new folder in file window",
        os: ["linux"],
        rate: 25
      }, {
        keyCombi: ["Shift", "Cmd", "N"],
        description: "Instantly creates a new folder on your Mac desktop, or in the active Finder window",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Space"],
        description: "Activates the Mac’s powerful 'Quick Look' feature for the selected document",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Cmd", "Y"],
        description: "Activates the Mac’s powerful 'Quick Look' feature for the selected document",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Shift", "Cmd", "U"],
        description: "Takes you straight to your Mac’s Utilities folder, where you’ll find such tools as Disk Utility, Grab, and Keychain Access",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Cmd", "Space"],
        description: "Opens the Spotlight search form in the top-right corner of the screen; start typing, and your search results will appear within seconds",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["F11"],
        description: "All open windows will fly off the screen, revealing the bare desktop; press it again, and all the windows will zip back into place",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Cmd", "Ctrl", "D"],
        description: "Displays a definition of the selected word. (Note: works best in Apple’s Safari web browser, less so in other applications.)",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Cmd", "Delete"],
        description: "Sends the selected file directly to the Mac’s trash can",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Shift", "Cmd", "3"],
        description: "Takes a screenshot, then saves the image file to your Mac’s desktop",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Shift", "Cmd", "4"],
        description: "Take a screenshot of just a selected area",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Ctrl", "Shift", "Cmd", "3"],
        description: "Takes a screenshot and copies it to your clipboard",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Ctrl", "Shift", "Cmd", "4"],
        description: "Takes a screenshot of a selected area and copies it to your clipboard",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Cmd", "Q"],
        description: "Quit an app",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Cmd", "T"],
        description: "Open a new tab",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Cmd", ","],
        description: "Open an apps' preference window",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Cmd", "Shift", "?"],
        description: "Open Help menu",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Cmd", "Opt", "Esc"],
        description: "Force-quit an app",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Cmd", "F"],
        description: "Find words or phrases in a document, web page, or other app",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Cmd", "M"],
        description: "Minimize a window",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Cmd", "W"],
        description: "Close an active window",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Cmd", "Opt", "W"],
        description: "Close all windows of an app",
        os: ["mac"],
        rate: 25
      }, {
        keyCombi: ["Cmd", "Opt", "Shift", "Q"],
        description: "Log out of your user account with one step",
        os: ["mac"],
        rate: 25
      }
    ]};
  })
  .filter('selectOs', function() {
    return function(data, selectedOs) {
      var filtered = [];
      for (var i = 0; i<data.length;i++) {
        var value = data[i];
        if(value.os.indexOf(selectedOs) >= 0) {
          filtered.push(value);
        }
      }
      return filtered;
    }
  })
  .controller('SubController', function ($scope) {
    $scope.classVar = 'orange';
    $scope.boolVal = false;
  });
