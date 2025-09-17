---
title: Changelog
layout: default
nav_order: 100
---

# Changelog

### version 1.0.3
- [Fixed] Remove redundant RPyC calls and connection timeout handling and optimize geometry checks in importer
- [Added] Windows-specific path length warnings with actionable suggestions
- [Fixed] hou.expandString() calls that caused "stream has been closed" errors

### version 1.0.2
- [Fixed] Always use update_status() from the status_manager module
- [Fixed] Check for: hasattr(c4d, 'ABCIMPORT_POINTS_PARTICLEGROUP')

### version 1.0.1
- [Added] Display of export path in Status
- [Fixed] Import issues with non exisiting or restricted folders

### version 1.0.0
- Initial Release[Back to top](#top){: .btn .float-right}

<div class="footer-info">
  <span class="connection-status">Built with 💙🧡 in Hamburg, Germany</span>
</div>

<link rel="stylesheet" href="{{ '/assets/css/general.css' | relative_url }}">