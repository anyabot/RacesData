This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started
Install Dependencies the development server:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Pages
Pages are responsive and can handle mobile view.
## Landing Page
Consists of Image-Link leading to the other search pages, as well as some graphs for the current Season (2023) and Result History of Teams and Drivers.

Sections of the landing page has animations for entering and leaving the viewport.
## Search by Years
Search all data from the other categories (Races, Drivers, Teams) by Years, displaying as Tables.

Each entry in the tables for Teams and Drivers contains a link leading to the respective Team / Driver Page.

Searching for Teams and Drivers will also brings up Bar Chart / Pie Chart of the results.
## Search by Races
Contains a table of all the races from all the years. 

There is a search bar that allow users to search for specific Grand Prix / Winner / Car.
## Search by Players / Teams
These 2 pages are similar, containing a search bar for name of the desired Driver / Team, as well as a Year filter (OR operator) to find which Driver / Team played in which year.

The results are Cards that links to the specific Driver / Team pages.
## Driver / Team Pages
Contain a table displaying the Years that Driver / Team played in, as well as their average ranking and points.

Also contains a Graph of Ranking / Point per Years made with ***react-chartjs-2***

# Live Demo

A Live Demo can be used at [https://races-data.vercel.app/](https://races-data.vercel.app/) (Deployed with Vercel).
