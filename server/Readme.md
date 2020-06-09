# Server Application
This folder contains the back-end application of the Next Level Week. In order to run this server, just download the "server" folder and run the following commands:
- npm install
- npm run dev

The server will the be running on port 3333.

**P.S.: this server provides images to be consumed by the Mobile Application and Front-end Application. Due to this, the IP Address is being concatenated with the image names and this IP Address needs to be changed for your local PC IP Address in order to work correctly.**

**Where to change:**
- **File src -> controllers -> ItemsController.ts, key "image_url in line 11";**
- **File src -> controllers -> PointsController.ts, key "image_url" in lines 73 and 94.**
