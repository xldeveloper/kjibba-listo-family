---
name: scheduling-logic-and-optimization
description: Logic for managing technician schedules, travel times, and resource allocation.
---

# Scheduling Logic & Resource Management

The "Weekly Planner" in Digital Befaring requires intelligent scheduling beyond a standard calendar.

## Core Components

### 1. Technician Availability
- **Work Hours:** Standard 08:00 - 16:00.
- **Absence/Vacation:** Integration with HR/Absence logs.
- **Buffer Times:** Mandatory gaps between jobs for administrative tasks.

### 2. Travel Time Estimation
- **Geocoding:** Convert addresses to Lat/Long using Google Maps/OpenStreetMap API.
- **Travel Loops:** Optimize the technician's route for the day (Simplified Traveling Salesman).
- **Buffer:** Add 15-20% travel time buffer for traffic in Bergen (especially Danmarksplass/Fløyfjellstunnelen).

### 3. Allocation Constraints
- **Skill Matching:** Some technicians might only do air-to-air, others air-to-water (Varmepumpemontør vs. Rørlegger/Elektriker).
- **Equipment:** Does the job require a lift? Ensure the technician has access to one that day.

## Conflict Resolution
- **Double Booking:** Block assigning two jobs at the same time.
- **Encroachment:** Warn if a job is likely to run over and affect the next appointment.

## Business Logic Patterns
- **Drag-and-Drop:** Logic for updating start/end times via UI movements.
- **Recurring Jobs:** Service/Maintenance intervals (e.g., every 2 years).
