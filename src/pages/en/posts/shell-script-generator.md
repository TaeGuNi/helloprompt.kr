---
layout: /src/layouts/Layout.astro
title: "God of Server Management, Shell Script Auto Generator"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Development"
description: "No need to memorize complex Linux commands. Just say what you want to do, and it will create a safe and powerful Bash script."
tags: ["Linux", "Shell Script", "DevOps", "Automation", "Bash"]
---

# 📝 God of Server Management, Shell Script Auto Generator

> **🎯 Recommended For:** Everyone
> **⏱️ Time Required:** 5 minutes
> **🤖 Recommended Model:** All AI Models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

_"I need to compress log files for backup and delete ones older than 30 days... What was the command?"_

`tar`, `find`, `crontab`, `awk`, `sed`... Linux commands are powerful, but just one wrong option can lead to a major accident where files fly away.
Don't test dangerously anymore. Order a perfect shell script with safety devices from AI.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Convert complex system management tasks into automation scripts
2. Include Error Handling and Logging functions
3. Detailed explanation of commands through comments

---

## 🚀 The Solution: "Bash Wizard"

### 🥉 Basic Version

Use this when you just need a quick result.

> **Role:** You are a Linux System Administration and DevOps expert.
> **Request:** Create a prompt that makes safe and powerful Bash scripts without needing to memorize complex Linux commands.

<br>

### 🥇 Pro Version (Expert)

Use this when you need detailed quality.

Copy the **PROMPT** content below and paste it into ChatGPT or Claude.

> **Role:** You are a Linux System Administration and DevOps expert.
>
> **Context:** I want to automate repetitive server management tasks. But I'm not used to writing shell scripts, so I need safe code.
>
> **Task:**
>
> 1. Write a **Bash Shell Script** that performs the requirements below.
> 2. **Safety Device:** Make it stop immediately upon error occurrence using `set -e` etc. at the beginning of the script.
> 3. **Logging:** Print progress with `echo` so the user knows.
> 4. **Comments:** Add comments on what role each command plays.
>
> **Requirements:**
> `[Write desired tasks here. e.g.: Delete logs older than 7 days in /var/log folder, compress the rest to tar.gz and move to /backup folder]`
>
> **Constraints:**
>
> - If a delete (`rm`) command is included, ask the user once more (confirm) or insert logic to check if the path exists.
> - Use only standard Linux commands.

---

## 🧬 Prompt Anatomy (Why it works?)

---

## 📊 Proof: Before & After

### ❌ Before (Input Requirement)

"Move all JPG files in current folder to images folder, change filename to date_originalname.jpg."

### ✅ After (Result)

```bash
#!/bin/bash
set -e  # Stop script on error

TARGET_DIR="images"
DATE_PREFIX=$(date +%Y%m%d)

# 1. Create target directory if not exists
if [ ! -d "$TARGET_DIR" ]; then
    echo "📁 Creating '$TARGET_DIR' directory..."
    mkdir -p "$TARGET_DIR"
fi

# 2. Move JPG files and rename
echo "🚀 Starting file move..."
for file in *.jpg; do
    if [ -f "$file" ]; then
        new_name="${DATE_PREFIX}_${file}"
        mv "$file" "$TARGET_DIR/$new_name"
        echo "✅ Moved: $file -> $TARGET_DIR/$new_name"
    fi
done

echo "🎉 All tasks completed!"
```

---

## 🎯 Conclusion

Don't be afraid of the black terminal screen.
With one line of script written by AI, a simple repetitive task that took 1 hour ends with one enter. Now go grab a coffee! 🍷
