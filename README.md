No Duplicate Tabs automatically identifies and closes duplicate tabs, putting an end to unintentional tab duplication! 

No Duplicate Tabs solely targets duplicate tabs based on URLs. No browsing data of any kind is collected, shared, or stored.

How to build:
- In XCode, create new project using Safari App Extension template. Select iOS and MacOS as platforms.
- Clone this project and `pnpm i`
- Build this project with `pnpm build`
- Link all the resources from `dist/` folder to the Extension target in XCode project
- In XCode's Product menu, select Run
