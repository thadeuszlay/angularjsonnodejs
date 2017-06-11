var app = angular.module('app', ['controllers', 'ui.bootstrap']);

angular.module('controllers', [])
.controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false
  };
})
  .controller('ShortcutController', function ($scope, $filter) {
    //git config --global alias.co checkout
    $scope.selectOs = function() {
      $scope.status.open = true;
    }
    $scope.clearSearch = function() {
      $scope.myfilter.description = '';
    }
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
  .controller('GitController', function ($scope, $filter) {
    $scope.git = {commands: [
      {
        command: ["git config --global alias.co checkout"],
        description: "Set an alias for git checkout. Instead of writing 'git checkout ...', you can now write 'git co ...'",
        rate: 2
      }, {
        command: ["git reflog", "git reset HEAD@{index}"],
        description: "Reset to a previous stage by first getting all the list of stages in your repository throughout all your branches. Then select one of the indexes in that list and set the HEAD to that stage.",
        rate: 2
      }, {
        command: ["git branch some-new-branch-name", "git reset HEAD~ --hard", "git checkout some-new-branch-name"],
        description: "Remove a commit from the master branch to a completely new branch.",
        rate: 2
      }, {
        command: ["git commit --amend"],
        description: "Change commit message. This only works if you haven't pushed yet. If you have pushed already, then there are also ways to change the commit message. But it's not recommended, since it produces more harm than good.",
        rate: 2
      }, {
        command: ["git diff HEAD"],
        description: "See my last changes before committing.",
        rate: 2
      }, {
        command: ["git log"],
        description: "If you want to log out your past commits",
        rate: 2
      }, {
        command: ["git log --pretty=oneline"],
        description: "If you want to log out your past commits with every commit in one line",
        rate: 2
      }, {
        command: ["git reset HEAD~ --soft", "git stash", "git checkout branch-you actually-wanted-to-commit-to", "git stash pop", "git add .", "git commit -m 'your commit message'"],
        description: "If you have committed to the wrong branch you have to undo the last commit and then leave the changes available. Then move to the branch you actually wanted to commit to, apply the stashed changes there, and commit your changes there.",
        rate: 2
      }, {
        command: ["git checkout branch-you actually-wanted-to-commit-to", "git cherry-pick master", "git checkout master", "git reset HEAD~ --hard"],
        description: "If you have committed to the wrong branch you cherry pick your changes from the master branch to the branch you acutally wanted to commit to.",
        rate: 2
      }, {
        command: ["git branch -d branch-to-be-deleted"],
        description: "Delete a local branch",
        rate: 2
      }, {
        command: ["git push origin --delete branch-to-be-deleted"],
        description: "Delete a remote branch",
        rate: 2
      }, {
        command: ["git remote -v"],
        description: "List all currently configured remote repositories",
        rate: 2
      }, {
        command: ["git tag your-tag-number the-commit-ID"],
        description: "You can use tagging to mark a significant changeset, e.g. a release",
        rate: 2
      }, {
        command: ["git grep 'the-term-you-are-searching-for'"],
        description: "If you want to search for a certain term in your working directory",
        rate: 2
      }
    ]};
  })
  .controller('TerminalController', function ($scope, $filter) {
    $scope.terminal = {commands: [{
        command: ["sudo -i"],
        description: "Change to root, so you don't have to write 'sudo' all the time",
        rate: 2
      }, {
        command: ["pwd"],
        description: "Get current directory",
        rate: 2
      }, {
        command: ["sudo rm -r to-be-removed-directory"],
        description: "Remove a directory/folder",
        rate: 2
      }, {
        command: ["sudo locate directory-you-are-looking-for"],
        description: "Search for a directory/file",
        rate: 2
      }, {
        command: ["gnome-screenshot"],
        description: "Takes a screenshot",
        rate: 2
      }, {
        command: ["sleep 5;gnome-screenshot"],
        description: "Takes a screenshot with a delay. In this case a delay of 5 seconds",
        rate: 2
      }, {
        command: ["sudo locate -e directory-you-are-looking-for | less"],
        description: "Sometimes the name pattern you are looking for can appear in many places. In this case you want to limit the results. '-e' excludes recently deletes files 'less' only shows you the top results.",
        rate: 2
      }
    ]};
  })
  .controller('CollapseDemoCtrl', function ($scope) {
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;
  })
  .controller('AccordionController', function ($scope) {
    $scope.activeClass = null;
    $scope.activateNav = function(navigation) {
      $scope.activeClass = navigation;
    };
  });
