---
title: 📦 How to Install
layout: default
nav_order: 1
---

# 📦 How to Install

Complete installation guide for C4D2HOU - the professional Cinema 4D to Houdini bridge.
{: .fs-5 .fw-300 }
---
<!-- [Download: aescripts.com](https://aescripts.com/c4d2hou){: .btn .btn-orange } -->

## Method 1: aescripts Manager (Recommended)

[![Alt text for broken image link](assets/img/aescripts_manager.png)](https://aescripts.com/learn/aescripts-aeplugins-manager-app/){:target="_blank"}


The easiest way to install C4D2HOU is through the 
<!-- {: .label .label-blue }  -->
**aescripts + aeplugins Manager**:

1. **Download** the manager from [aescripts.com](https://aescripts.com/learn/aescripts-aeplugins-manager-app/) (click on the image above.)
2. **Search** for "c4d2hou" in the manager
3. **Click Install** and follow the prompts
4. The manager handles everything automatically! ✨

{: .warning }
> The aescripts manager also handles automatic updates, ensuring you always have the latest version.

## Method 2: Manual Installation

For users who prefer manual control over their installation process.

### Step 1: Install Cinema 4D Plugin

```
c4d2hou_v{x.x.x}.zip
├── 📂 c4d2hou                    ← Copy this folder!
│   ├── 📂 res
│   ├── c4d2hou.pyp
│   ├── _package_installer.sh     (macOS/Linux installer)
│   └── _package_installer.bat    (Windows installer)
└── README.txt
```

Extract the zip and copy the `c4d2hou` folder to your Cinema 4D plugins directory: 

```
C:/Program Files/MAXON/CINEMA 4D <version>/plugins/c4d2hou  (Windows)
/Applications/MAXON/CINEMA 4D <version>/plugins/c4d2hou     (macOS)
```

### Step 2: Install Houdini Package

### Option A: Use Installer Scripts ✨

<details open markdown="block">
  <summary>
    Windows
  </summary>

1. Navigate to the c4d2hou plugin folder
2. Double-click `_package_installer_win.bat`
3. Select which Houdini version(s) to install for
4. Done! 🎉

</details>

<details markdown="block">
  <summary>
    macOS
  </summary>

1. Open Terminal and navigate to the c4d2hou plugin folder
2. Make the script executable:
   ```bash
   chmod +x _package_installer_mac.sh
   ```
3. Run: `./_package_installer_mac.sh`
4. Select which Houdini version(s) to install for
5. Done! 🎉

</details>

### Option B: Manual JSON Installation

<details markdown="block">
  <summary>
    Advanced Setup
  </summary>

1. Create `c4d2hou.json`:

```json
{
    "enable": true,
    "load_package_once": true,
    "env": [{
        "c4d2hou": "__path_to_c4d_plugins_folder__/c4d2hou/res/hou_package"
    }],
    "path": "$c4d2hou"
}
```

2. Replace `__path_to_c4d_plugins_folder__` with your actual path

3. Save to:
   - **Windows**: `C:/Users/<username>/Documents/houdini<version>/packages/`
   - **macOS**: `/Users/<username>/Library/Preferences/houdini/<version>/packages/`

</details>

---

## Step 3: Start Using C4D2HOU

1. **Start** Cinema 4D
2. **Start** Houdini
3. In Cinema 4D: **Extensions** → **c4d2hou**
4. **Click** connect button
5. **Enjoy!** 🚀

---

## Troubleshooting

### Cinema 4D Issues
- Verify `c4d2hou` folder location
- Check Cinema 4D version (2023+)
- Restart Cinema 4D

### Houdini Issues
- Run installer script again
- Check `c4d2hou.json` exists in packages folder
- Verify path in JSON file
- Restart Houdini

### Connection Issues
- Both apps must be running
- Start Houdini AFTER package installation
- Check logs: **c4d2hou** → **Info** → **Open Temporary Folder...**

---

## System Requirements

| Component | Requirement |
|:----------|:------------|
| Cinema 4D | 2023 or newer |
| Houdini | 18.5 or newer |
| OS | Windows 10/11, macOS 10.14+, Linux |

---

## Need Help?

[Create Issue](https://github.com/lasselauch/c4d2hou-docs/issues){: .btn .btn-blue .mr-2 }
[Support](mailto:support@aescripts.com){: .btn .mr-2 }
[Forums](https://aescripts.com/forums/){: .btn }

<div class="footer-info">
  <span class="connection-status">Built with 💙🧡 in Hamburg, Germany</span>
</div>

<link rel="stylesheet" href="{{ '/assets/css/general.css' | relative_url }}">