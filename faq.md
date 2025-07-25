---
title: FAQ
layout: default
nav_order: 101
---

# FAQ

## Installation

### Where is the Houdini package stored?
The C4D2HOU package files are stored in a persistent location that survives plugin updates:
- **Windows:** `%APPDATA%\c4d2hou\hou_package\`
- **macOS:** `~/Library/Application Support/c4d2hou/hou_package/`

### Do I need to reinstall the Houdini package after updating C4D2HOU?
Not always. The Package Installer will show if your installation needs updating (orange warning icon). Simply open the installer and update if needed.

### Can I use multiple Houdini versions?
Yes! The Package Installer lets you install C4D2HOU for multiple Houdini versions simultaneously. Just select all versions you want to use.

## Troubleshooting

### Cinema 4D Issues
- **Plugin not recognized:**
  - Verify `c4d2hou` folder is correctly placed in the [plugins directory]({{site.baseurl}}/install.html#option-b-manual-installation)
  - Check Cinema 4D version compatibility (requires 2023+)
  - Restart Cinema 4D after installation

### Houdini Issues
- **Can't connect to Houdini:**
  - Use the [Package Installer]({{site.baseurl}}/install.html#automatic-package-installation) (Extensions → c4d2hou → Info → Houdini Package Installer...)
  - Select your Houdini version(s) and click "Install Selected"
  - Restart Houdini after package installation
  - Both applications must be running

### Connection Issues
- Both Cinema 4D and Houdini must be running
- Start Houdini AFTER package installation
- Check for error messages in **C4D > Extensions > Console (Python)**
- Verify package status in Package Installer (green checkmark = installed)

### Plugin Features Not Working
- Ensure both applications are running simultaneously
- Check logs: **c4d2hou** → **Info** → **Open Temporary Folder...**
- Ensure you have the latest version of the plugin

### Scale and Unit Conversion
**Important:** If your imported assets appear at an incorrect scale, this is typically related to Cinema 4D's project scale settings.

The C4D2HOU plugin is calibrated for Cinema 4D projects using **"Project Scale: 1 Centimeter"**. This setting establishes the conversion factor between Cinema 4D's internal units and real-world measurements, which is why the plugin interface displays a default scale value of 0.01 (converting from centimeters to meters for Houdini).

**Resolution:** If your Cinema 4D project uses a different scale setting:
1. Check your current project scale: **Edit** → **Project Settings** → **Project Scale**
2. Adjust the scale parameter in the C4D2HOU interface to compensate for the difference
3. For example, if your project scale is set to 1 Meter, you may need to adjust the plugin's scale value accordingly

This ensures proper unit conversion between Cinema 4D and Houdini, maintaining accurate asset dimensions throughout your pipeline.

### General Tips
- When contacting support: **c4d2hou** → **Info** → **Create *.debug files...** and attach `*.zip`
- Keep your software updated to the latest versions for better compatibility
- Refer to this documentation or support forums for additional help

## System Requirements
- **Cinema 4D:** 2023 or newer
- **Houdini:** 19.5 or newer (Python 3.8-3.11)
- **OS:** Windows 10/11, macOS 10.14+

## Package Management

### How do I update the Houdini package?
1. Open Cinema 4D
2. Go to **Extensions** → **c4d2hou** → **Info** → **Houdini Package Installer...**
3. Check for orange warning icons (outdated installations)
4. Click "Install Selected" or "Install for All" to update

### How do I remove the Houdini package?
Use the Package Installer's "Remove All" button to cleanly uninstall from all Houdini versions.

### What happens during automatic installation?
When you first launch C4D2HOU:
1. The Package Installer opens automatically if no installation is detected
2. It pre-selects compatible Houdini versions
3. Click "Install Selected" to complete the setup
4. Restart Houdini and you're ready to connect

[Back to top](#top){: .btn .float-right}

<div class="footer-info">
  <span class="connection-status">Built with 💙🧡 in Hamburg, Germany</span>
</div>

<link rel="stylesheet" href="{{ '/assets/css/general.css' | relative_url }}">