---
title: FAQ
layout: default
nav_order: 101
---

# FAQ

## Troubleshooting

### Cinema 4D Issues
- **Plugin not recognized:**
  - Verify `c4d2hou` folder is correctly placed [in the "plugins" directory]({{site.baseurl}}/install.html#after-c4d-installation)
  - Check Cinema 4D version compatibility (requires 2023+)
  - Restart Cinema 4D after installation

### Houdini Issues
- **Can't find "c4d2hou.json" file:**
  - Run [installer script]({{site.baseurl}}/install.html#after-c4d-installation) again
  - Verify `c4d2hou.json` exists in the packages folder
  - Double-check the path in the JSON file is correct
  - Restart Houdini after installation

### Connection Issues
- Both Cinema 4D and Houdini must be running
- Start Houdini AFTER package installation
- Check for error messages in **C4D > Extensions > Console (Python)**

### Plugin Features Not Working
- Ensure both applications are running simultaneously
- Check logs: **c4d2hou** → **Info** → **Open Temporary Folder...**
- Ensure you have the latest version of the plugin

### General Tips
- When contacting support: **c4d2hou** → **Info** → **Create *.debug files...** and attach `*.zip`
- Keep your software updated to the latest versions for better compatibility
- Refer to this documentation or support forums for additional help

[Back to top](#top){: .btn .float-right}

<div class="footer-info">
  <span class="connection-status">Built with 💙🧡 in Hamburg, Germany</span>
</div>

<link rel="stylesheet" href="{{ '/assets/css/general.css' | relative_url }}">