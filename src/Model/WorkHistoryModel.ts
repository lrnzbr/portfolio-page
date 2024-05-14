export interface WorkHistoryInterface {
  company: string;
  jobTitle: string;
  coverImage: string;
  startDate: Date;
  endDate: Date;
  websiteURL?: string;
  bulletPoints: string[];
  tags: string[];
}

export class WorkHistoryModel implements WorkHistoryInterface {
  constructor(
    public company: string,
    public jobTitle: string,
    public coverImage: string,
    public bulletPoints: string[],
    public tags: string[],
    public startDate: Date,
    public endDate: Date,
    public websiteURL?: string,
  ) {
    this.company = company;
    this.jobTitle = jobTitle;
    this.coverImage = coverImage;
    this.startDate = startDate;
    this.endDate = endDate;
    this.websiteURL = websiteURL;
    this.bulletPoints = bulletPoints;
    this.tags = tags;
  }
}

const echoBind = new WorkHistoryModel(
  "EchoBind",
  "iOS Software Engineer - Contractor",
  "https://echobind.com/images/eb-logo.svg",
  [
    "Added multiple enhancements to the iPad app for our client The Wall Street Journal",
    "Created new article views using GraphQL, SwiftUI and MVVM design patterns",
    "Built an offline solution for downloading past articles leveraging disk persistence and Apollo caching",
    "Consulted on high-level architecture solutions and best practices",
  ],
  ["SwiftUI", "Swift", "Xcode", "GraphQL", "Apollo"],
  new Date("2024-01-01"),
  new Date("2024-03-01"),
  "https://echobind.com",
);

const brightfin = new WorkHistoryModel(
  "Brightfin",
  "iOS Software Engineer - Freelancer",
  "https://images.squarespace-cdn.com/content/v1/5e627dafcb4b770e53fee8ff/0264c860-4d20-4d99-bd72-7a9a9b48beac/bf_logo_vo.png?format=1500w",
  [
    "Created budgeting app in iOS converting founder's ideas and designs into functioning code",
    "Leveraged Plaid to incorporate users financial data",
    "Utilized Firebase to leverage data persistence and OAuth user logins",
    "Supervising app Beta release as first 100 users begin using the platform",
    "Using SwiftUI to build out all components in a modern framework",
  ],
  ["SwiftUI", "Plaid", "Firebase", "OAuth"],
  new Date("2023-06-01"),
  new Date("2024-03-01"),
  "https://brightfin.io",
);

const fidelity = new WorkHistoryModel(
  "Fidelity Investments",
  "iOS Software Engineer - Contractor",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzo2KPj80gf4LEYrEYuoxz7bs8MqcUh6b-CVg9Q7wTUg&s",
  [
    "Responsible for the Client Performance Benchmark views in iOS for our +10000 portfolio clients",
    "Maintained legacy Objective-C code while the company transitions to a modern Swift/SwiftUI codebase",
    "Coordinated with UX teams to ensure the implementation of the company’s new design language",
    "Supervising app Beta release as first 100 users begin using the platform",
    "Collaborated with our Frameworks team to reduce compilation times that exceeded 2 hours",
  ],
  ["SwiftUI", "UIKit", "Objective-C", "CI/CD", "Swift"],
  new Date("2022-09-01"),
  new Date("2023-06-01"),
  "https://fidelity.com",
);

const daylight = new WorkHistoryModel(
  "Daylight",
  "Senior Software Engineer",
  "https://vacuumlabs.com/wp-content/uploads/2022/06/daylight-title-image.png",
  [
    "Led frontend development team for new LGBT-focused banking platform",
    "Inherited a project from an offshore company and implemented best practices for a new in-house team",
    "Developed internal QA tools to speed up testing procedures over 2x and minimize regressions",
  ],
  ["React Native", "QA", "Tooling", "Leadership", "JavaScript", "TypeScript"],
  new Date("2022-02-01"),
  new Date("2022-06-01"),
  "https://twitter.com/joindaylight",
);

const alt = new WorkHistoryModel(
  "Alt",
  "React Native Software Engineer ",
  "https://assets-global.website-files.com/62829b28e6300b34ff739f02/62b4f272ffdd3a049cc647fd_ItsYours.png",
  [
    "Built the first mobile application for the Alt asset trading platform with React Native",
    "Integrated mobile app to existing monorepo for the React web platform reducing code footprint by half",
    "Provided training to allow other frontend developers to understand and add to the React Native codebase",
  ],
  [
    "React Native",
    "GraphQL",
    "App Store",
    "Play Store",
    "Greenfield",
    "JavaScript",
    "TypeScript",
  ],
  new Date("2021-05-01"),
  new Date("2021-10-01"),
  "https://alt.xyz",
);

const climateAI = new WorkHistoryModel(
  "ClimateAI",
  "Senior Software Engineer ",
  "https://s7-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/237/600/original/climateai_logo_dark_teal_200x200_transparent.png?1698340104",
  [
    "Led a young engineering team in the construction of the company’s minimum viable product",
    "Integrated analysis from machine learning engineers and climatologists to create production-ready analytic endpoints",
    "Constructed high performance cloud development environments for satellite analysis and forecasting",
  ],
  [
    "Python",
    "React",
    "Docker Compose",
    "Modeling",
    "Machine Learning",
    "Cloud",
  ],
  new Date("2020-01-01"),
  new Date("2020-10-01"),
  "https://climate.ai",
);

const grey = new WorkHistoryModel(
  "Grey Inc.",
  "iOS Software Engineer",
  "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/udkec1kudkcdgchfpe6m",
  [
    "First engineering hire for small blockchain startup",
    "Built Point-of-Sales solutions for iOS used Blockchain to create secure, and transparent transactions for high-risk and underbanked merchants",
    "Created and maintained backend solutions using AWS and Google Cloud to monitor transactions and user credentials",
  ],
  [
    "iOS",
    "Blockchain",
    "Point of Sale",
    "Firebase",
    "Hardware Integration",
    "UIKit",
    "Swift",
  ],
  new Date("2018-03-01"),
  new Date("2019-11-01"),
  "https://www.crunchbase.com/organization/grey-inc",
);

const givelify = new WorkHistoryModel(
  "Givelify",
  "iOS Software Engineer",
  "https://www.givelify.com/wp-content/themes/givelify/assets/images/logo.svg?ver=2.4",
  [
    "Inherited and maintained an Objective-C version of the app fixing bugs and suggesting improvements",
    "Spearheaded the migration from Objective-C to Swift in the new version of the Givelify App",
    "Implemented new UI updates for version 3.0 of the Givelify App",
  ],
  ["Objective-C", "Swift", "UIKit", "AWS"],
  new Date("2017-10-01"),
  new Date("2018-03-01"),
  "https://givelify.com",
);

export const workHistory = [
  echoBind,
  brightfin,
  fidelity,
  daylight,
  alt,
  climateAI,
  grey,
  givelify,
];
