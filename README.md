# Web Development Project 6 - *Game Gazer Dashboard Pro*

Submitted by: **William Zheng**

This web app: **Game Gazer Pro is a modern game dashboard app that lets you browse, search, and analyze popular video games through a clean, interactive interface. With direct access to detailed game profiles, live data-driven charts, and fast filtering features, the site delivers an intuitive experience for exploring gaming trends and discovering new titles.**

Time spent: **10** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking on an item in the list view displays more details about it**
  - Clicking on an item in the dashboard list navigates to a detail view for that item
  - Detail view includes extra information about the item not included in the dashboard view
  - The same sidebar is displayed in detail view as in dashboard view
  - *To ensure an accurate grade, your sidebar **must** be viewable when showing the details view in your recording.*
- [x] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
  -  *To ensure an accurate grade, the URL/address bar of your web browser **must** be viewable in your recording.*
- [x] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - At least two charts should be incorporated into the dashboard view of the site
  - Each chart should describe a different aspect of the dataset


The following **optional** features are implemented:

- [x] The site’s customized dashboard contains more content that explains what is interesting about the data 
  - e.g., an additional description, graph annotation, suggestion for which filters to use, or an additional page that explains more about the data
- [ ] The site allows users to toggle between different data visualizations
  - User should be able to use some mechanism to toggle between displaying and hiding visualizations 

  
The following **additional** features are implemented:

* [x] Added a 404 page, and charts dynamically update based on filtered data

## Video Walkthrough

Here's a walkthrough of implemented user stories:



GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

I’ve never used Recharts before, but it was a surprisingly enjoyable experience. It actually reminded me a lot of the data science libraries I’m used to working with in Python. The most challenging part on the JavaScript side was fetching data, which felt more complex than what I’m used to.

I made a beginner mistake by not properly importing the required library, which ended up taking more time to debug than I expected. I used the labs website as a reference while building this project, which introduced some extra code that I won’t have time to clean up right now, but it doesn’t noticeably affect functionality or performance. Styling became especially tricky with deeply nested components, and the CSS got more complex than I anticipated.

## License

    Copyright [2025] [William Zheng]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.