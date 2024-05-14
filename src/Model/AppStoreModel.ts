export interface AppStoreAppInterface {
  title: string;
  description: string;
  coverImage: string;
  appStoreURL: string;
}

export class AppStoreApp implements AppStoreAppInterface {
  title: string;
  description: string;
  coverImage: string;
  appStoreURL: string;

  constructor(
    title: string,
    description: string,
    coverImage: string,
    appStoreURL: string,
  ) {
    this.title = title;
    this.description = description;
    this.coverImage = coverImage;
    this.appStoreURL = appStoreURL;
  }
}

const loteriaApp = new AppStoreApp(
  "¡Viva Lotería!",
  "A fun mulitplayer board game",
  "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/39/79/fb/3979fb5e-3f0a-fed3-f373-85ef8dee8ded/AppIcon-0-0-1x_U007epad-0-85-220.jpeg/460x0w.webp",
  "https://apps.apple.com/us/app/viva-loteria/id6502218311",
);
const harmoniusApp = new AppStoreApp(
  "Harmonius",
  "A Melodious Ear Training App",
  "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d5/de/c8/d5dec814-3256-0073-765f-1a01c6655fc4/AppIcon-0-0-1x_U007epad-0-85-220.jpeg/460x0w.webp",
  "https://apps.apple.com/us/app/harmonius/id6499569641",
);
const hornistsAlmanacApp = new AppStoreApp(
  "Hornist's Almanac",
  "French Horn Fingering Chart and Tuner",
  "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/44/a8/1d/44a81dd7-7859-fb68-1c3f-5d7e3a8c6c38/AppIcon-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp",
  "https://apps.apple.com/us/app/the-hornists-almanac/id6462354990",
);

export const appStoreApps = [loteriaApp, harmoniusApp, hornistsAlmanacApp];
