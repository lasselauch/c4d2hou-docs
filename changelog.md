---
title: Changelog
layout: default
nav_order: 100
---

# Changelog

### version 0.5.0
- [Added] Finally fixed the filelock on Windows
- [Added] Refactored a lot of the code

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
- **First beta-tester version, yeah! :)**
- [Added] aescripts Python License Framework

[Back to top](#top){: .btn .float-right}

<div class="footer-info">
  <span class="connection-status">Built with 💙🧡 in Hamburg, Germany</span>
</div>

<link rel="stylesheet" href="{{ '/assets/css/general.css' | relative_url }}">