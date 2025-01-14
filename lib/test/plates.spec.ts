import { PlateDefintion } from "../types";

import { findPlates } from "../find";

// i know these plates
describe("find known plates", () => {
  it("Organisations and Charities", () => {
    const testExpect: [string, string][] = [
      ["4WDA", "4WD Associations of WA"],
      ["ASC111", "Armadale Soccer Club"],
      ["REDS 2", "Western Reds Ruby League"],
      ["VPXHS2222", "Vic Park Xavier Hockey Club"],
    ];

    testExpectArray(testExpect);
  });

  it("Town and Shire Councils", () => {
    const testExpect: [string, string][] = [
      // single
      ["B", "Bridgetown"],
      ["B222", "Bridgetown"],
      ["B 222", "Bridgetown"],
      ["B-222", "Bridgetown"],

      // dbl
      ["MR", "Moora"],
      ["MR222", "Moora"],
      ["MR 222", "Moora"],
      ["MR-222", "Moora"],

      // LETTER AT END?
      // ["MH0761A", "Mandurah"],

      // more
      ["MRR", "Moore River Region"],
      ["MRR222", "Moore River Region"],
      ["MRR 222", "Moore River Region"],
      ["MRR-222", "Moore River Region"],
    ];

    testExpectArray(testExpect);
  });

  it("Road Districts", () => {
    const testExpect: [string, string][] = [
      // single
      ["A", "Albany"],
      ["A222", "Albany"],
      ["A 222", "Albany"],
      ["A-222", "Albany"],

      // dbl
      ["CM", "Cunderdin - Meckering"],
      ["CM222", "Cunderdin - Meckering"],
      ["CM 222", "Cunderdin - Meckering"],
      ["CM-222", "Cunderdin - Meckering"],

      // more
      ["CMT", "Cunderdin - Meckering (Tammin)"],
      ["CMT222", "Cunderdin - Meckering (Tammin)"],
      ["CMT 222", "Cunderdin - Meckering (Tammin)"],
      ["CMT-222", "Cunderdin - Meckering (Tammin)"],
    ];

    testExpectArray(testExpect);
  });
});

describe("identify general format plates", () => {
  it("General Plates", () => {
    const testExpect: [string, string, number?][] = [
      ["1ADD333", "General (~1990's)"],
      ["1FFF333", "Vanity Plate Purchase Only"],
      ["IT", "Interchangeable"],
      // ["6SR-123", "Stock Transport"],
    ];

    testExpectArray(testExpect);
  });

  it("General Plates - General Format", () => {
    const testExpect: [string, string, number?][] = [
      ["1ADD333", "General (~1990's)"],
      ["1IDD333", "General (~2023)"],
      ["1FFF333", "Vanity Plate Purchase Only"],

      ["1F", "Vanity Plate Purchase Only"],
      ["1FF", "Vanity Plate Purchase Only"],
      ["1FFF", "Vanity Plate Purchase Only"],
      ["1FFF2", "Vanity Plate Purchase Only"],
      ["1FFF-2", "Vanity Plate Purchase Only"],
      ["1FFF-62", "Vanity Plate Purchase Only"],
      ["1FFF-642", "Vanity Plate Purchase Only"],
      ["1FFF642", "Vanity Plate Purchase Only"],
    ];

    testExpectArray(testExpect);
  });
});

describe("edge case plates", () => {
  it("General Plates - Edge Cases", () => {
    const testExpect: [string, string, number?][] = [
      ["1ADD333", "General (~1990's)"],
      ["1FFF333", "Vanity Plate Purchase Only"],
      ["IT", "Interchangeable"],

      ["WAC", "Freemasonry - Charity and Fraternity", 0],
      ["WAC", "Commonwealth Games", 1],

      ["CVL", "Charter Vehicle"],

      ["MFC", 'Mullewa Football Club "Mighty Saints"', 0],
      ["MFC", "Melbourne Football Club", 1],

      ["WFC", "Wagin Football Club", 0],
      ["WFC", "Watheroo Football Club", 1],
    ];

    testExpectArray(testExpect);
  });
});

// i found some images on the internet of wa plates
describe("find found plates", () => {
  /// sports teams https://www.waaflplates.com.au/
  it("https://www.waaflplates.com.au/", () => {
    const testExpect: [string, string, number?][] = [
      ["AFC", "Adelaide Crows"],
      ["BL", "Brisbane Lions"],
      ["CFC", "Cervantes Football Club", 0],
      ["CFC", "Carlton Blues", 1],
      ["CFC", "Collingwood Magpies", 2],
      ["EFC", "Essendon Bombers"],
      ["FD", "Fremantle Dockers"],
      ["GFC", "Geelong Cats"],
      ["HFC", "Hawthorn Hawks"],

      ["MFC", 'Mullewa Football Club "Mighty Saints"', 0],
      ["MFC", "Melbourne Football Club", 1],

      ["ROO", "North Melbourne"],
      ["PORT", "Port Adelaide"],
      ["RFC", "Richmond Football Club"],
      ["SKS", "St Kilda"],
      ["SFC", "Sydney Swans"],
      // ["SFC", "Sydney Swans"],
      ["WCE", "West Coast Eagles"],
      ["WBFC", "Western Bulldogs Football Club"],
    ];

    testExpectArray(testExpect);
  });

  it("http://www.worldlicenseplates.com/jpglps/AU_WAXX_GI2.jpg", () => {
    const testExpect: [string, string, number?][] = [
      ["B-305", "Bridgetown"],
      ["BSN-938", "Busselton"],
      ["CO-1060", "Collie"],
      ["M-1029", "Moora"],
      ["NR4204", "Northampton"],
      ["RA302", "Ravensthorpe"],
      ["323 DB", "Donnybrook - Balingup", 1],
      ["A 13938", "Albany"],
      ["KM-5259", "Kalamunda"],
      ["35 IR", "Irwin"],
      ["100 D", "Dowerin"],
      ["1969 KE", "Kellerberrin"],
      ["28 MP", "Mosman Park"],
      ["1966 MH", "Mandurah"],
      ["940 PCC", "Perth City"],
    ];

    testExpectArray(testExpect);
  });

  it("https://web.archive.org/web/20120313005521/http://www.regionalwa.com.au/WAinfo/TT_CountryCars.htm", () => {
    const testExpect: [string, string, number?][] = [
      ["A", "Albany"],
      ["BY", "Bunbury"],
      ["GNG", "Geraldton - Greenough"],
      ["KBC", "Kalgoorlie - Boulder"],
      ["MH", "Mandurah"],
      ["NGN", "Narrogin"],
      ["N", "Northam"],
      ["RO", "Rockingham"],
      ["AL", "Albany"],
      ["AK", "Armadale - Kelmscott"],
      ["AW", "West Arthur"],
      ["AS", "Ashburton"],
      ["AU", "Augusta", 0],
      ["AU", "Augusta - Margaret River", 1],
      ["BD", "Boulder"],
      ["BE", "Beverley"],
      ["BT", "Boddington"],
      ["BU", "Boyup Brook", 0],
      ["BU", "Blackwood Upper (Boyup Brook)", 1],
      ["B", "Bridgetown"],
      ["BO", "Brookton"],
      ["BM", "Broome"],
      ["BH", "Broomehill"],
      ["BK", "Bruce Rock"],
      ["BSN", "Busselton"],
      ["CP", "Capel"],
      ["CA", "Carnamah"],
      ["C", "Carnarvon"],
      ["CV", "Chapman Valley"],
      ["CH", "Chittering"],
      ["CO", "Collie"],
      ["CG", "Coolgardie"],
      ["CW", "Coorow"],
      ["CR", "Corrigin"],
      ["CB", "Cranbrook"],
      ["CN", "Dryandra Country", 0],
      ["CN", "Cuballing", 1],
      ["CD", "Cue Daydawn"],
      ["CM", "Cunderdin - Meckering"],
      ["CMT", "Cunderdin - Meckering (Tammin)"],
      ["DL", "Dalwallinu"],
      ["DN", "Dandaragan"],
      ["DA", "Dardanup"],
      ["DE", "Denmark"],
      ["DB", "Donnybrook", 0],
      ["DB", "Donnybrook - Balingup", 1],
      ["D", "Dowerin"],
      ["DU", "Dumbleyung"],
      ["DS", "Dundas", 0],
      ["DS", "Dundas (Norseman)", 1],
      ["E", "Esperance"],
      ["EP", "East Pilbara"],
      ["EX", "Exmouth"],
      ["GU", "Gascoyne Upper"],
      ["GG", "Gingin"],
      ["GO", "Goomalling"],
      ["HC", "Hall's Creek"],
      ["H", "Harvey"],
      ["IR", "Irwin"],
      ["JP", "Jerramungup"],
      ["KM", "Kalamunda"],
      ["KMC", "Kalgoorlie"],
      ["KA", "Katanning"],
      ["KE", "Kellerberrin"],
      ["KT", "Shire of Kent (Nyabing / Pingrup)"],
      ["KW", "Shire of Derby / Kimberley West"],
      ["KO", "Kojonup"],
      ["KN", "Kondinin"],
      ["KD", "Koorda"],
      ["KU", "Kulin"],
      ["KWN", "Kwinana"],
      ["KTY", "Kununoppin - Trayning - Yelbeni"],
      ["LG", "Lake Grace"],
      ["LA", "Laverton"],
      ["L", "Leonora"],
      ["MK", "Meekatharra"],
      ["MN", "Menzies"],
      ["MD", "Merredin"],
      ["MI", "Mingenew"],
      ["M", "Moora"],
      ["MO", "Morawa"],
      ["MA", "Mount Magnet"],
      ["MM", "Mount Marshall"],
      ["MBL", "Mukinbudin Brown Lake", 0],
      ["MBL", "Mukinbudin - Bonnie Rock - Lake Brown", 1],
      ["MW", "Mullewa"],
      ["MDG", "Mundaring"],
      ["MU", "Murchison"],
      ["MY", "Murray (Pinjarra)"],
      ["NP", "Nannup"],
      ["NB", "Narembeen"],
      ["NA", "Nungarin"],
      ["N", "Northam"],
      ["NR", "Northampton"],
      ["NO", "Narrogin (Road Board)"],
      ["PJ", "Perenjori"],
      ["PN", "Pingelly"],
      ["PL", "Plantagenet (Mount Barker)"],
      ["PH", "Port Hedland"],
      ["Q", "Quairading"],
      ["RA", "Ravensthorpe"],
      ["R", "Roebourne"],
      ["S", "Sandstone"],
      ["SJ", "Serpentine - Jarradale"],
      ["SB", "Shark Bay"],
      ["SW", "Swan"],
      ["TB", "Tablelands"],
      ["TA", "Tambellup"],
      ["TN", "Tammin"],
      ["TS", "Three Springs"],
      ["T", "Toodyay"],
      ["VP", "Victoria Plains"],
      ["W", "Wagin (Woolorama)"],
      ["WA", "Manjimup Shire (Warren)"],
      ["WB", "Wongan - Ballidu"],
      ["WD", "Wandering"],
      ["WN", "Wanneroo"],
      ["WK", "Wickepin"],
      ["WL", "Williams"],
      ["WM", "Wyalkatchem"],
      ["WO", "Woodanilling"],
      ["WP", "West Pilbara"],
      ["WR", "Waroona"],
      ["WT", "Westonia"],
      ["WU", "Wiluna"],
      ["WY", "Shire of Wyndham, East Kimberley including Kununurra"],
      ["YA", "Yalgoo"],
      ["YL", "Yilgarn"],
      ["Y", "York"],
    ];

    testExpectArray(testExpect);
  });
});

function testExpectArray(testExpect: [string, string, number?, string?][]) {
  testExpect.forEach(([plate, expected, int = 0, string = false]) => {
    const result = findPlates(plate);
    // console.log(plate, result);
    try {
      expect(result).not.toBeFalsy();
      expect(result && result[int].name).toEqual(expected);
      if (string) expect(result && result[int].type).toEqual(string);
    } catch (e) {
      console.error(plate, result);
      throw e;
    }
  });
}
