---
language: en
title: Tools that support my workflow
pubDate: '2025-10-13'
---
### **Browsers**

#### **Firefox with OneBar**

The most important thing for me is minimizing the UI space, and that's where **OneBar** truly excels.
Firefox can also be configured to clear history, cookies, and all other data upon closing, which was the main reason I switched from Chrome years ago (though I'm not sure if that’s still the case today).  
Hands down, Firefox is the browser I least dislike.

#### **MS Edge (for work)**

You can cap the memory usage. Usefull when you need to allocate a big chunck of memory for something else, like spinning up a new VM.
Just like Firefox, it can be configured to delete everything upon closing, keeping things clean and private.


---

### **Notes**

#### **Obsidian (Synced via Git Plugin)**

I use **Obsidian** to keep all my notes. I sync everything across devices using the Git plugin.
It’s a great way to ensure my notes are available on all devices.

#### **Markview**

I use **Markview** to quickly open and view Markdown files directly from the filesystem.
It's very lightweight and fast.


---

### **Launchers**

#### **Flow Launcher**

**Flow Launcher** doesn’t have everything I need out of the box, but it’s easily extendable with C#, Python, or JavaScript.
The main downside is that it uses prefixes to scope functionality, which can make it a bit tricky to find exactly what you’re looking for.

#### **Keypirinha**

On the other hand, **Keypirinha** lets you start typing anything and find it instantly.
Everything is available as a top-level command, and it’s fuzzily matched for fast searching.
Though it has not been updated for years and it is not open source.


---

### **Operating Systems**

#### **Windows 10 (for now)**

I’m sticking with **Windows 10** for now, and here’s why I’m not migrating to Windows 11:

- **Windows 10** has better defaults, even though they're far from perfect.
    
- Everything lags on **Windows 11**—menus, notifications, right-click options. It just feels slower.
    
- The context menu is limited, requiring more steps for frequently used functions.
    
- The content on the screen shifts unexpectedly, which can be incredibly annoying. You think the context menu is ready, but Windows decides to swap out entries last-minute.
    
- No offline account option is a no for me.
    

#### **Fedora (in the future)**

As **Windows 10** approaches end-of-life, I’m planning to migrate to **Fedora** for a more modern, open-source environment.


---

### **Miscellaneous Tools**

- **PowerToys**
    
    - **FancyZones**: For window management.
        
    - **ZoomIt**: For on-screen annotations.
        
    - **File Locksmith**: Unlocks files in use by other processes.
        
    - **ShareX**: My go-to screenshot tool, especially for capturing content that requires scrolling. I use **Ctrl+Shift+S** in Firefox for this.
        
- **Windows Subsystem for Android (WSA)**: Great for testing Android apps without taking up phone storage.
    
- **Windows Hyper-V**: Essential for running clean environments, particularly when testing on Windows 10.
    
- **Docker**: Containerization for development needs.
    

---

### **Development Tools**

#### **Sublime Text with LSP Plugin**

I use **Sublime Text** because it’s incredibly fast and lightweight. People with high-end PCs may find **VS Code** comparable, but I’d love to see them try working on an Intel Celeron or Core Duo—Sublime leaves them in the dust.  
The downside is that it lags behind in terms of updates. The **Omnisharp** plugin (for C#) still works, but it hasn’t been updated in over 5 years, which is a recurring issue with many plugins.

#### **Sublime Merge & TortoiseGit**

For Git version control, I use **Sublime Merge** for a clean UI and **TortoiseGit** for integration with the file explorer.

#### **Bruno for API Testing**

I use **Bruno** for quick API testing. It's fast and lightweight, perfect for checking endpoints on the fly.