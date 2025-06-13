---
title: 📦 How to Install
layout: default
nav_order: 1
---

# 📦 How to Install

This guide will walk you through the installation process for C4D2HOU.
{: .fs-5 .fw-300 }

[Download: aescripts.com](https://aescripts.com/c4d2hou){: .btn .btn-orange .mt-4}

## Step 1: Download and Extract

1. Download the latest version of C4D2HOU (e.g., `c4d2hou_vx.x.x.zip`).
   > 💡 The "x.x.x" represents the version number (e.g., 1.0.0).
2. Extract the zip file. You should see the following structure:

```
📁 c4d2hou_vx.x.x.zip/
├── 📂 c4d2hou
│   ├── 📂 res
│   └── c4d2hou.pyp
├── c4d2hou.json
└── README.txt
```

### Step 2: Copy Files to Cinema 4D

1. Locate the `c4d2hou` folder within the *.zip archive.
2. Copy this folder to your Cinema 4D plugins directory:

   - **Windows**: `C:/Program Files/MAXON/CINEMA 4D <version>/plugins/`
   - **macOS**: `/Applications/MAXON/CINEMA 4D <version>/plugins/`

### Step 3: Configure Houdini

1. Open the `c4d2hou.json` file in a text editor.
2. Replace `__path_to_plugin_folder__` with your actual Cinema 4D plugins folder path, as the package contents reside in `c4d2hou/res/hou_package`
3. Move the modified `c4d2hou.json` file to your Houdini packages folder:

   - **Windows**: `C:/Users/<username>/Documents/houdini<version>/packages/`
   - **macOS**: `/Users/<username>/Library/Preferences/houdini/<version>/packages/`

### Step 4: Launch and Verify

1. Start Cinema 4D and Houdini.
2. In Cinema 4D, go to the Extensions menu and look for the c4d2hou plugin (version x.x.x).

- - - 

**Congratulations! You've successfully installed C4D2HOU.**

- - - 

## Troubleshooting

If you encounter any issues during installation or usage, please refer to the following tips:

| Issue | Solution |
|-------|----------|
| Cinema 4D doesn't recognize the plugin | - Verify the `c4d2hou` folder is in the correct plugins directory<br>- Ensure you have the correct Cinema 4D version<br>- Restart Cinema 4D |
| Houdini can't find the `c4d2hou.json` file | - Double-check the path in the JSON file<br>- Confirm the JSON file is in the correct packages folder |
| Plugin features not working | - Ensure both Cinema 4D and Houdini are running<br>- Check for error messages in the console or log files<br>- Verify you have the latest plugin version |

For additional assistance, please consult the [official documentation](https://link-to-your-docs.com) or visit our [support forums](https://link-to-your-forums.com).

## Version Compatibility

| c4d2hou Version | Cinema 4D Version | Houdini Version |
|-----------------|-------------------|-----------------|
| 1.0.0           | 23 – 2024.4.0     | 18.5 – 20.5     |

> 📌 **Note**: Always use the latest version of c4d2hou for optimal performance and compatibility.

- - - 

## Updating c4d2hou

To update to a newer version of c4d2hou:

1. Download the latest version (e.g., `c4d2hou_v1.0.0.zip`).
2. Follow the installation steps above, replacing the existing files.
3. Restart both Cinema 4D and Houdini to ensure the update takes effect.

Remember to check the changelog for any important updates or breaking changes between versions.