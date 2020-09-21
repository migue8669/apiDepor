export class Model {
  'success': boolean;
  'data': sports;
}
export class dataSiteSports {
  [x: string]: any;

  'site_key': string;
  'site_nice': string;
  'last_update': string;
  'odds': [odds];
}
export class odds {
  'odds': h2h;
}
export class h2h {
  'h2': string;
}
export class sports {
  [x: string]: any;
  'sport_key': string;
  'sport_nice': string;
  'sites_count': number;
  'teams': [teams];
  'commence_time': number;
  'home_team': string;
  'sites': [dataSiteSports];
}
export class teams {
  'team1': string;
  'team2': string;
}

//         "h2h": [
//             1.68,
//             5.5,
//             4.05
//         ]
//     }
