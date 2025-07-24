---
title: Changelog
layout: default
nav_order: 100
---

# Changelog

### version 0.5.2
- [Fixed] VDB Exports

### version 0.5.1
- [Added] Export state management to prevent state syncs during export operations
- [Added] Finally fixed the filelock on Windows
- [Added] Refactored a lot of the code
- [Added] New Freeze/Hardlock Button

### version 0.4.9
- [Fixed] Enhance dialog handling in dlg.py with improved state sync and UI updates
- [Fixed] session management
- [Fixed] Simplify export path validation in exporter.py and paths.py
- [Fixed] Update pythonrc.py to ensure session state is reloaded before removal
- [Fixed] Improve session info handling in shared.py with locking and update checks

### version 0.4.8
- [Added] $prj/c4d2hou to "Export to:" (Next to *.c4d file)
- [Added] Hardlock Geometry Boolean
- [Added] package.py to handle installation of hou_package
- [Added] PopupMenu for Connect, check Modifier-Keys!
- [Added] paths.py to handle all file related paths and dlg previews
- [Added] Export, Livecam and Connection all using C4D Async Manager
- [Added] Import Async with Undo and Modifier-Keys
- [Added] C4D Async Manager -> crazy Speed-Improvements

### version 0.4.7
- [Fixed] Async Dialog
- [Added] Trial Mode

### version 0.4.6
- [Added] Link to Documentation

### version 0.4.5
- [Fixed] README.txt
- [Added] Houdini Package Installer for macOS/Windows

### version 0.4.4
- [Fixed] Added all known Cinema4D VDB Types

### version 0.4.3
- [Fixed] delete_temp_files()
- [Fixed] Hardlock and Static Issues
- [Fixed] Dialog Connection Status-String
- [Fixed] Cleaner layout of imported nodes
- [Fixed] Handling of custom folder

### version 0.4.2
- [Fixed] Dialog Timer improvements
- [Fixed] Livecam speed improvements

### version 0.4.1
- [Added] Support for *.vdbs and particles
- [Added] Interface Import As Comboboxes
- [Added] Handle multiple selected Nodes and Objects
- [Added] New Hardlock-Mode > Freeze Null only > Remove tempfiles

### version 0.4.0
First beta-tester version, yeah! :)
- [Added] aescripts Python License Framework

### version 0.3.9
- [Fixed] Reduced Filename-Options to Random, Objects/Document, Custom...
- [Fixed] Sessions Handling
- [Fixed] Restructured Export Workflow and PopupMenu
- [Fixed] Construction of geo-filepaths especially when using custom filenames: "Untitled"
- [Added] "Static" to From/To Dropdown
- [Added] Importer waits for Exporter result
- [Added] Added python3.11libs for Houdini 20.5
- [Added] Support for older versions down to python3.8 -> Houdini 19.5
- [Fixed] Selected Export Range for Baker

### version 0.3.8
- [Fixed] New and Better session handling.
- [Fixed] Catch Exceptions when disconnecting while running.
- [Fixed] Moved logs to folder 
- [Added] *.zip debug files

### version 0.3.7
- [Added] Alt-Click on Connector to last active popup.
- [Fixed] Export Splines -> flipped Z-Axis
- [Fixed] Better session handling incl. psutil

### version 0.3.6
- [Fixed] Exporter Selection Problem (once and for all!)
- [Added] Exporter imports into current Context
- [Added] Importer supports Modifiers for inserting Objects
- [Added] Importer supports *.fbx
- [Added] Bake into Network Box if more than 3 Objects

### version 0.3.5
- [Fixed] Selection of *.abc Export
- [Added] Open Folder of Export

### version 0.3.4
- playbar.start/stop handling
- Added Importer
- Added dcc version to *.log

### version 0.3.3
- New dlg event handler and settings setup
- New livecam threads
- Few fixes and new icons

### version 0.3.2
- Dialog refactored
- Connector PopupMenu
- Export to: tmpfolder/tmp

### version 0.3.1
- Added Extra Camera Options like winx, winy, focus
- Folder Update and Selection

### version 0.3.0
- New Structure, New threaded Connection
- Baked Nulls and Camera Export!

### version 0.2.5
- New Dialog and registered plugins
- Messaging between commanddata plugins
- Popup Menu Exporter

### version 0.2.4
- Dropped support for Python 2 
- Fixed static FBX Export

### version 0.2.3
- C4DLiveCam

### version 0.2.2
- NEW! FBX Export
- Scale Multiplier
- Unpack *.fbx
- First Tests with C4DLiveCam

### version 0.2.1
- NEW! ABC Export
- Avoid file-lock on windows
- Replacement via Spare-Input
- GUI Changes

### version 0.2.0
- NEW! FBX Export
- Config and Settings implemented

### version 0.1.1
- Threaded Export
- Key only animated Objects
- Removed Rotation Problems (still not 100%)

### version 0.1.0
- First version, yeah![Back to top](#top){: .btn .float-right}

<div class="footer-info">
  <span class="connection-status">Built with 💙🧡 in Hamburg, Germany</span>
</div>

<link rel="stylesheet" href="{{ '/assets/css/general.css' | relative_url }}">