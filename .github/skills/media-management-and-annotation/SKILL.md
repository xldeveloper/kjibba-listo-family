---
name: media-management-and-annotation
description: Management of project photos, optimization, and on-image annotations for technicians.
---

# Media Management & Annotation

Photos are the primary evidence and instruction tool for installers. This skill covers how to handle them efficiently.

## Image Lifecycle
1. **Capture:** Technician takes a photo via the mobile-first UI.
2. **Compression (Client-side):** Reduce size *before* upload to save data and speed up sync (e.g., `browser-image-compression`).
3. **Upload:** Store in S3-compatible storage (Hetzner Object Storage or similar).
4. **Display:** Serve via CDN with appropriate caching.

## Annotation Workflow
Technicians need to "point" at the placement on a photo.
- **Tools:** Use `react-konva` or a simple HTML5 Canvas layer.
- **Markers:**
  - Red circles for drilling points.
  - Arrows for pipe routes.
  - Text labels for heights/distances.
- **Persistence:** Save annotations as JSON (layers) or flattened "baked" images.

## Performance Optimization
- **Lazy Loading:** Crucial for survey pages with dozens of photos.
- **Thumbnails:** Generate low-res thumbnails for list views to minimize memory usage on mobile devices.
- **AVIF/WebP:** Prefer modern formats for storage and delivery.

## Security & Privacy
- **Watermarking:** Optional branding on photos.
- **Access Control:** Photos should only be accessible via signed URLs or authenticated sessions.
