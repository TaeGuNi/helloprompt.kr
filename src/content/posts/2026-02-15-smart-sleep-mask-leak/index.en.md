---
title: "Somnium X Smart Sleep Mask: User Voice Data Leak Scandal"
date: 2026-02-15
tags: ["IoT", "Privacy", "Security", "Wearables"]
cover: ./cover.png
description: "The popular Somnium X smart sleep mask has been found to be uploading user sleep conversations without authorization."
---

## They Said They'd Record Dreams, But They Recorded Privacy

The **Somnium X** smart sleep mask, which saw huge success on Kickstarter recently, has been embroiled in a serious security issue. Security researchers discovered that the device was transmitting unencrypted audio data, collected for sleep pattern analysis, to a public cloud server.

### What is the Problem?

Somnium Labs claimed the device processed audio locally only for "snoring and sleep apnea detection." However, in reality, the following data was being sent to an external server:

1.  **Sleep Talking Recordings**: Direct recordings of what users say in their sleep.
2.  **Ambient Noise**: Could include conversations in the bedroom, TV sounds, etc.
3.  **Metadata**: User location, sleep duration, device unique ID.

### Discovery by Security Researchers

An anonymous security researcher, 'SleepWalker', noticed Somnium X transmitting large amounts of data at a specific time every night during network traffic analysis. Analyzing the packets revealed `.wav` format audio files being stored in an AWS S3 bucket accessible without authentication.

> "This is not just a simple mistake. It is equivalent to thousands of users being surveilled during their most vulnerable sleep time." - SleepWalker

### Company Response

As the controversy spread, Somnium Labs immediately made the server private and issued an apology. They explained it as "a debugging feature left over from beta testing accidentally included in the official firmware," and announced an immediate firmware update distribution.

However, the scale of the leaked data and the exact extent of the damage have not yet been determined, so user anxiety is unlikely to subside easily.

### Our Lesson

This incident reminds us once again how critical security is for IoT devices, especially those used in extremely private spaces like the bedroom. When choosing smart home devices, one must carefully consider not just convenience, but also the manufacturer's security policies and data handling practices.
