---
title: 🔍  Get Started
layout: default
nav_order: 4
---

# 🔍 Get Started

Seamlessly bridge your Cinema 4D to Houdini workflow
{: .fs-5 .fw-300 }

---

<div class="main-actions">
  <div class="actions-grid">
    <div class="action-item" data-action="connect">
      <span class="action-icon">
      <img src="{{ '/assets/svg/connect.svg' | relative_url }}" alt="Disconnected" class="default-icon">
      <img src="{{ '/assets/svg/stop_connect.svg' | relative_url }}" alt="Connected" class="active-icon">
      </span>
      <strong>Connect</strong>
    </div>
    <div class="action-item" data-action="export">
      <span class="action-icon"><img src="{{ '/assets/svg/export_arrow.svg' | relative_url }}" alt="Export"></span>
      <strong>Export</strong>
    </div>
    <div class="action-item" data-action="import">
      <span class="action-icon"><img src="{{ '/assets/svg/import_arrow.svg' | relative_url }}" alt="Import"></span>
      <strong>Import</strong>
    </div>
    <div class="action-item" data-action="livecam">
      <span class="action-icon">
      <img src="{{ '/assets/svg/livecam_off.svg' | relative_url }}" alt="LiveCam Off" class="default-icon">
      <img src="{{ '/assets/svg/livecam_on.svg' | relative_url }}" alt="LiveCam On" class="active-icon">
      </span>
      <strong>LiveCam</strong>
    </div>
    <div class="action-item" data-action="folder">
      <span class="action-icon"><img src="{{ '/assets/svg/folder.svg' | relative_url }}" alt="Open Folder"></span>
      <strong>Open Folder</strong>
    </div>
  </div>
  
  <div class="action-explanation" id="explanation-container">
    <div class="explanation active" data-explanation="connect">
      <h4>Connect to Houdini</h4>
      <p>Establishes a live connection between Cinema 4D and your active Houdini session. The plugin automatically detects running Houdini instances and maintains a stable bridge for real-time data transfer. Click to toggle connection on/off.</p>
    </div>
    <div class="explanation" data-explanation="export">
      <h4>Export to Houdini</h4>
      <p>Send selected objects or entire scenes from Cinema 4D to Houdini. Supports multiple formats including Alembic and FBX, with options for animation baking and hierarchy preservation. Respects your configured export settings.</p>
    </div>
    <div class="explanation" data-explanation="import">
      <h4>Import from Houdini</h4>
      <p>Bring Houdini geometry back into Cinema 4D. Automatically converts between different geometry types and handles unit scaling. Supports modifiers for precise placement in your scene hierarchy.</p>
    </div>
    <div class="explanation" data-explanation="livecam">
      <h4>Live Camera Sync</h4>
      <p>Synchronize viewport cameras between Cinema 4D and Houdini in real-time. Perfect for lookdev and layout work. Includes support for camera parameters like focal length, aperture, and focus distance.</p>
    </div>
    <div class="explanation" data-explanation="folder">
      <h4>Open Folder</h4>
      <p>Quick access to your export directory. Opens the folder containing your exported files in your system's file browser. Useful for managing exported assets and checking file outputs.</p>
    </div>
  </div>
</div>

# Current Session:

Establishes a live connection between Cinema 4D and your active Houdini session. The plugin automatically detects running Houdini instances and maintains a stable bridge for real-time data transfer. Click to toggle connection on/off.

# Filename:

Controls how exported files are named. **Random** generates unique filenames, **Objects/Document** uses selected object names or document name, **Custom** allows manual filename entry in the text field below.

# Export to:

Defines the destination folder for exported files. **$HIP/c4d2hou** uses Houdini's project directory, **$JOB/c4d2hou** uses the job directory, **Temp/Hardlock** creates temporary files with geometry data baked directly into nodes, **Choose** allows custom folder selection.

# Export as:

Sets the file format for geometry export. **\*.abc** exports standard Alembic files, **.abc (Archive)** creates Alembic Archive nodes in Houdini, **\*.fbx** exports FBX files, **\*.fbx (Subnet)** imports as FBX subnets with full hierarchy.

# Import as (VDB):

Determines how VDB volume files are imported into Cinema 4D. **Volume Loader** creates standard Cinema 4D Volume objects, **RS Volume** creates Redshift Volume objects for rendering with Redshift.

# Import as (Particles):

Controls particle system import behavior. **As Particle Geometry** imports as Cinema 4D particle geometry, **As Polygon Object** converts particles to polygon meshes, **As Particle Group** creates particle group objects.

# From/To:

Sets the frame range for animated exports. **Static** exports only the current frame, **Document Range** uses the full timeline range, **Preview Range** exports only the preview/playback range defined in Cinema 4D.

# Scale:

Adjusts the scale factor between Cinema 4D and Houdini coordinate systems. Default is 0.01, which converts Cinema 4D's centimeter units to Houdini's meter units. Increase for larger objects, decrease for smaller precision work.

<div class="footer-info">
  <span class="connection-status">Saved: "untitled.hip" in Hamburg, Germany – with 🧡</span>
</div>

<link rel="stylesheet" href="{{ '/assets/css/overview.css' | relative_url }}">
<script src="{{ '/assets/js/overview.js' | relative_url }}" defer></script>