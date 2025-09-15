---
title: FAQ
layout: default
nav_order: 101
---

# FAQ

## How to Bugreport

*When encountering 🐞 or issues with C4D2HOU, please follow these steps to provide the support team with the necessary information:*

### Step 1: Create Debug Files
1. In Cinema 4D, go to **Extensions** → **c4d2hou** → **Info** → **Create *.debug files...**

   ![Create Debug Files]({{site.baseurl}}/assets/img/create_debug_files.png)

2. This will generate a `.zip` file containing all relevant log files and system information
3. The folder containing this `.zip` file is opened after creation

### Step 2: Contact Support
1. Go to **Extensions** → **c4d2hou** → **Info** → **License Manager...**
2. Click the **"Send to Support"** button
3. In your support message, describe:
   - What you were trying to do
   - What happened instead
   - Any error messages you saw
4. **Important:** Attach the `.debug.zip` file created in [Step 1](#step-1-create-debug-files)

*This debug information helps the support team quickly identify and resolve your issue.*

- - -

## Troubleshooting

<details>
<summary>Cinema 4D Issues</summary>
<div markdown="1">

- Verify `c4d2hou` folder is correctly placed in the [plugins directory]({{site.baseurl}}/install.html#option-b-manual-installation)
- Check Cinema 4D version compatibility (requires 2023+)
- Restart Cinema 4D after installation

</div>
</details>

<details>
<summary>Houdini Issues</summary>
<div markdown="1">

- Use the [Package Installer]({{site.baseurl}}/install.html#automatic-package-installation) **Extensions → c4d2hou → Info → Houdini Package Installer...**
- Select your Houdini version(s) and click "Install Selected"
- Restart Houdini after package installation
- Both applications must be running

</div>
</details>

<details>
<summary>Connection Issues</summary>
<div markdown="1">

- Both Cinema 4D and Houdini must be running
- Start Houdini AFTER package installation
- Check for error messages in **C4D → Extensions → Console (Python)**
- Verify package status in Package Installer (green checkmark = installed)

</div>
</details>

<details>
<summary>Plugin Features Not Working</summary>
<div markdown="1">

- Ensure both applications are running simultaneously
- Check logs: **c4d2hou** → **Info** → **Open Temporary Folder...**
- Ensure you have the latest version of the plugin
- <strong>Send a [🐞 Bugreport](#how-to-bugreport)</strong>

</div>
</details>

- - -

## Scale and Unit Conversion

***Important:** If your imported assets appear at an incorrect scale, this is typically related to Cinema 4D's project scale settings.*

The C4D2HOU plugin is calibrated for Cinema 4D projects using **"Project Scale: 1 Centimeter"**. This setting establishes the conversion factor between Cinema 4D's internal units and real-world measurements, which is why the plugin interface displays a default scale value of 0.01 (converting from centimeters to meters for Houdini).

**Resolution:** If your Cinema 4D project uses a different scale setting:
1. Check your current project scale: **Edit** → **Project Settings** → **Project Scale**
2. Adjust the scale parameter in the C4D2HOU interface to compensate for the difference
3. For example, if your project scale is set to 1 Meter, you may need to adjust the plugin's scale value accordingly

This ensures proper unit conversion between Cinema 4D and Houdini, maintaining accurate asset dimensions throughout your pipeline.

- - -

## General Tips
- Keep your software updated to the latest versions for better compatibility
- Refer to this documentation or support forums for additional help
- For bug reports, see the [How to Bugreport](#how-to-bugreport) section above

[Back to top](#top){: .btn .float-right}

<div class="footer-info">
  <span class="connection-status">Built with 💙🧡 in Hamburg, Germany</span>
</div>

<link rel="stylesheet" href="{{ '/assets/css/general.css' | relative_url }}">