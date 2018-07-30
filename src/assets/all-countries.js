// Array of country objects for the flag dropdown.

// Here is the criteria for the plugin to support a given country/territory
// - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
// - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
// - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml

// Each country array has the following information:
// [
//    Country name,
//    iso2 code,
//    International dial code,
//    Order (if >1 country with same dial code),
//    Area codes
// ]
const allCountries = [
  [
    'Albania (Shqipëri)',
    'al',
    '355'
  ],
  [
    'Andorra',
    'ad',
    '376'
  ],
  [
    'Armenia (Հայաստան)',
    'am',
    '374'
  ],
  [
    'Austria (Österreich)',
    'at',
    '43'
  ],
  [
    'Azerbaijan (Azərbaycan)',
    'az',
    '994'
  ],
  [
    'Belarus (Беларусь)',
    'by',
    '375'
  ],
  [
    'Belgium (België)',
    'be',
    '32'
  ],
  [
    'Bosnia and Herzegovina (Босна и Херцеговина)',
    'ba',
    '387'
  ],
  [
    'Bulgaria (България)',
    'bg',
    '359'
  ],
  [
    'Croatia (Hrvatska)',
    'hr',
    '385'
  ],
  [
    'Cyprus (Κύπρος)',
    'cy',
    '357'
  ],
  [
    'Czech Republic (Česká republika)',
    'cz',
    '420'
  ],
  [
    'Denmark (Danmark)',
    'dk',
    '45'
  ],
  [
    'Estonia (Eesti)',
    'ee',
    '372'
  ],
  [
    'Finland (Suomi)',
    'fi',
    '358',
    0
  ],
  [
    'France',
    'fr',
    '33'
  ],
  [
    'Georgia (საქართველო)',
    'ge',
    '995'
  ],
  [
    'Germany (Deutschland)',
    'de',
    '49'
  ],
  [
    'Gibraltar',
    'gi',
    '350'
  ],
  [
    'Greece (Ελλάδα)',
    'gr',
    '30'
  ],
  [
    'Hungary (Magyarország)',
    'hu',
    '36'
  ],
  [
    'Iceland (Ísland)',
    'is',
    '354'
  ],
  [
    'Ireland',
    'ie',
    '353'
  ],
  [
    'Italy (Italia)',
    'it',
    '39',
    0
  ],
  [
    'Kosovo',
    'xk',
    '383'
  ],
  [
    'Latvia (Latvija)',
    'lv',
    '371'
  ],
  [
    'Liechtenstein',
    'li',
    '423'
  ],
  [
    'Lithuania (Lietuva)',
    'lt',
    '370'
  ],
  [
    'Luxembourg',
    'lu',
    '352'
  ],
  [
    'Macedonia (FYROM) (Македонија)',
    'mk',
    '389'
  ],
  [
    'Malta',
    'mt',
    '356'
  ],
  [
    'Moldova (Republica Moldova)',
    'md',
    '373'
  ],
  [
    'Monaco',
    'mc',
    '377'
  ],
  [
    'Montenegro (Crna Gora)',
    'me',
    '382'
  ],
  [
    'Netherlands (Nederland)',
    'nl',
    '31'
  ],
  [
    'Norway (Norge)',
    'no',
    '47',
    0
  ],
  [
    'Poland (Polska)',
    'pl',
    '48'
  ],
  [
    'Portugal',
    'pt',
    '351'
  ],
  [
    'Romania (România)',
    'ro',
    '40'
  ],
  [
    'Russia (Россия)',
    'ru',
    '7',
    0
  ],
  [
    'San Marino',
    'sm',
    '378'
  ],
  [
    'Serbia (Србија)',
    'rs',
    '381'
  ],
  [
    'Slovakia (Slovensko)',
    'sk',
    '421'
  ],
  [
    'Slovenia (Slovenija)',
    'si',
    '386'
  ],
  [
    'Spain (España)',
    'es',
    '34'
  ],
  [
    'Sweden (Sverige)',
    'se',
    '46'
  ],
  [
    'Switzerland (Schweiz)',
    'ch',
    '41'
  ],
  [
    'Ukraine (Україна)',
    'ua',
    '380'
  ],
  [
    'United Kingdom',
    'gb',
    '44',
    0
  ],
  [
    'Vatican City (Città del Vaticano)',
    'va',
    '39',
    1
  ]
]

export default allCountries.map(country => ({
  name: country[0],
  iso2: country[1].toUpperCase(),
  dialCode: country[2],
  priority: country[3] || 0,
  areaCodes: country[4] || null
}))
