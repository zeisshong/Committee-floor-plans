// Coordinates use the shared 1888 × 1335 viewBox; clickable areas are not surveyed boundaries.
// User confirmed the developer plans share the layout for 4–18F.
const RESIDENTIAL_MARKS = [
  {
    "id": "res-2-A1",
    "floor": "2F",
    "label": "A1",
    "kind": "unit",
    "key": "A1-2",
    "verified": true,
    "box": [
      289,
      720,
      108,
      111
    ]
  },
  {
    "id": "res-2-A2",
    "floor": "2F",
    "label": "A2",
    "kind": "unit",
    "key": "A2-2",
    "verified": true,
    "box": [
      410,
      722,
      98,
      95
    ]
  },
  {
    "id": "res-2-A3",
    "floor": "2F",
    "label": "A3",
    "kind": "unit",
    "key": "A3-2",
    "verified": true,
    "box": [
      599,
      721,
      98,
      97
    ]
  },
  {
    "id": "res-2-A9",
    "floor": "2F",
    "label": "A9",
    "kind": "unit",
    "key": "A9-2",
    "verified": true,
    "box": [
      290,
      882,
      110,
      74
    ]
  },
  {
    "id": "res-2-A8",
    "floor": "2F",
    "label": "A8",
    "kind": "unit",
    "key": "A8-2",
    "verified": true,
    "box": [
      417,
      862,
      96,
      93
    ]
  },
  {
    "id": "res-2-A7",
    "floor": "2F",
    "label": "A7",
    "kind": "unit",
    "key": "A7-2",
    "verified": true,
    "box": [
      600,
      863,
      98,
      92
    ]
  },
  {
    "id": "res-2-B2",
    "floor": "2F",
    "label": "B2",
    "kind": "unit",
    "key": "B2-2",
    "verified": true,
    "box": [
      1082,
      722,
      100,
      94
    ]
  },
  {
    "id": "res-2-B3",
    "floor": "2F",
    "label": "B3",
    "kind": "unit",
    "key": "B3-2",
    "verified": true,
    "box": [
      1277,
      722,
      93,
      94
    ]
  },
  {
    "id": "res-2-B8",
    "floor": "2F",
    "label": "B8",
    "kind": "unit",
    "key": "B8-2",
    "verified": true,
    "box": [
      1084,
      863,
      100,
      92
    ]
  },
  {
    "id": "res-2-B7",
    "floor": "2F",
    "label": "B7",
    "kind": "unit",
    "key": "B7-2",
    "verified": true,
    "box": [
      1279,
      862,
      91,
      93
    ]
  },
  {
    "id": "res-2-S12",
    "floor": "2F",
    "label": "S12",
    "kind": "space",
    "key": "",
    "verified": true,
    "box": [
      1417,
      722,
      72,
      232
    ]
  },
  {
    "id": "res-2-S13",
    "floor": "2F",
    "label": "S13",
    "kind": "space",
    "key": "",
    "verified": true,
    "box": [
      1530,
      722,
      74,
      232
    ]
  },
  {
    "id": "res-2-S15",
    "floor": "2F",
    "label": "S15",
    "kind": "space",
    "key": "",
    "verified": true,
    "box": [
      1427,
      603,
      165,
      95
    ]
  },
  {
    "id": "res-2-S16",
    "floor": "2F",
    "label": "S16",
    "kind": "space",
    "key": "",
    "verified": true,
    "box": [
      1518,
      506,
      71,
      70
    ]
  },
  {
    "id": "res-2-S17",
    "floor": "2F",
    "label": "S17",
    "kind": "space",
    "key": "",
    "verified": true,
    "box": [
      1395,
      304,
      188,
      145
    ]
  },
  {
    "id": "res-3-A1",
    "floor": "3F",
    "label": "A1",
    "kind": "unit",
    "key": "A1-3",
    "verified": true,
    "box": [
      227,
      729,
      105,
      110
    ]
  },
  {
    "id": "res-3-A2",
    "floor": "3F",
    "label": "A2",
    "kind": "unit",
    "key": "A2-3",
    "verified": true,
    "box": [
      351,
      729,
      93,
      96
    ]
  },
  {
    "id": "res-3-A3",
    "floor": "3F",
    "label": "A3",
    "kind": "unit",
    "key": "A3-3",
    "verified": true,
    "box": [
      537,
      729,
      95,
      96
    ]
  },
  {
    "id": "res-3-A5",
    "floor": "3F",
    "label": "A5",
    "kind": "unit",
    "key": "A5-3",
    "verified": true,
    "box": [
      656,
      731,
      99,
      58
    ]
  },
  {
    "id": "res-3-A6",
    "floor": "3F",
    "label": "A6",
    "kind": "unit",
    "key": "A6-3",
    "verified": true,
    "box": [
      655,
      851,
      99,
      106
    ]
  },
  {
    "id": "res-3-A7",
    "floor": "3F",
    "label": "A7",
    "kind": "unit",
    "key": "A7-3",
    "verified": true,
    "box": [
      535,
      873,
      95,
      86
    ]
  },
  {
    "id": "res-3-A8",
    "floor": "3F",
    "label": "A8",
    "kind": "unit",
    "key": "A8-3",
    "verified": true,
    "box": [
      353,
      873,
      96,
      85
    ]
  },
  {
    "id": "res-3-A9",
    "floor": "3F",
    "label": "A9",
    "kind": "unit",
    "key": "A9-3",
    "verified": true,
    "box": [
      226,
      860,
      105,
      98
    ]
  },
  {
    "id": "res-3-B1",
    "floor": "3F",
    "label": "B1",
    "kind": "unit",
    "key": "B1-3",
    "verified": true,
    "box": [
      897,
      730,
      102,
      56
    ]
  },
  {
    "id": "res-3-B2",
    "floor": "3F",
    "label": "B2",
    "kind": "unit",
    "key": "B2-3",
    "verified": true,
    "box": [
      1021,
      729,
      91,
      97
    ]
  },
  {
    "id": "res-3-B3",
    "floor": "3F",
    "label": "B3",
    "kind": "unit",
    "key": "B3-3",
    "verified": true,
    "box": [
      1206,
      729,
      94,
      96
    ]
  },
  {
    "id": "res-3-B5",
    "floor": "3F",
    "label": "B5",
    "kind": "unit",
    "key": "B5-3",
    "verified": true,
    "box": [
      1324,
      730,
      98,
      107
    ]
  },
  {
    "id": "res-3-B6",
    "floor": "3F",
    "label": "B6",
    "kind": "unit",
    "key": "B6-3",
    "verified": true,
    "box": [
      1324,
      853,
      98,
      105
    ]
  },
  {
    "id": "res-3-B7",
    "floor": "3F",
    "label": "B7",
    "kind": "unit",
    "key": "B7-3",
    "verified": true,
    "box": [
      1205,
      875,
      95,
      83
    ]
  },
  {
    "id": "res-3-B8",
    "floor": "3F",
    "label": "B8",
    "kind": "unit",
    "key": "B8-3",
    "verified": true,
    "box": [
      1020,
      875,
      93,
      82
    ]
  },
  {
    "id": "res-3-B9",
    "floor": "3F",
    "label": "B9",
    "kind": "unit",
    "key": "B9-3",
    "verified": true,
    "box": [
      897,
      855,
      102,
      103
    ]
  },
  {
    "id": "res-3-S15",
    "floor": "3F",
    "label": "S15",
    "kind": "space",
    "key": "",
    "verified": true,
    "box": [
      1405,
      605,
      118,
      96
    ]
  },
  {
    "id": "res-4-A1",
    "floor": "4F",
    "label": "A1",
    "kind": "unit",
    "key": "A1-4",
    "verified": true,
    "box": [
      216,
      587,
      120,
      116
    ]
  },
  {
    "id": "res-4-A2",
    "floor": "4F",
    "label": "A2",
    "kind": "unit",
    "key": "A2-4",
    "verified": true,
    "box": [
      353,
      588,
      102,
      105
    ]
  },
  {
    "id": "res-4-A3",
    "floor": "4F",
    "label": "A3",
    "kind": "unit",
    "key": "A3-4",
    "verified": true,
    "box": [
      569,
      588,
      103,
      105
    ]
  },
  {
    "id": "res-4-A5",
    "floor": "4F",
    "label": "A5",
    "kind": "unit",
    "key": "A5-4",
    "verified": true,
    "box": [
      697,
      588,
      115,
      56
    ]
  },
  {
    "id": "res-4-A6",
    "floor": "4F",
    "label": "A6",
    "kind": "unit",
    "key": "A6-4",
    "verified": true,
    "box": [
      697,
      725,
      112,
      115
    ]
  },
  {
    "id": "res-4-A7",
    "floor": "4F",
    "label": "A7",
    "kind": "unit",
    "key": "A7-4",
    "verified": true,
    "box": [
      562,
      746,
      109,
      94
    ]
  },
  {
    "id": "res-4-A8",
    "floor": "4F",
    "label": "A8",
    "kind": "unit",
    "key": "A8-4",
    "verified": true,
    "box": [
      356,
      746,
      110,
      94
    ]
  },
  {
    "id": "res-4-A9",
    "floor": "4F",
    "label": "A9",
    "kind": "unit",
    "key": "A9-4",
    "verified": true,
    "box": [
      216,
      725,
      119,
      115
    ]
  },
  {
    "id": "res-4-B1",
    "floor": "4F",
    "label": "B1",
    "kind": "unit",
    "key": "B1-4",
    "verified": true,
    "box": [
      969,
      589,
      115,
      54
    ]
  },
  {
    "id": "res-4-B2",
    "floor": "4F",
    "label": "B2",
    "kind": "unit",
    "key": "B2-4",
    "verified": true,
    "box": [
      1104,
      588,
      108,
      105
    ]
  },
  {
    "id": "res-4-B3",
    "floor": "4F",
    "label": "B3",
    "kind": "unit",
    "key": "B3-4",
    "verified": true,
    "box": [
      1326,
      589,
      97,
      104
    ]
  },
  {
    "id": "res-4-B5",
    "floor": "4F",
    "label": "B5",
    "kind": "unit",
    "key": "B5-4",
    "verified": true,
    "box": [
      1444,
      589,
      114,
      116
    ]
  },
  {
    "id": "res-4-B6",
    "floor": "4F",
    "label": "B6",
    "kind": "unit",
    "key": "B6-4",
    "verified": true,
    "box": [
      1444,
      726,
      114,
      114
    ]
  },
  {
    "id": "res-4-B7",
    "floor": "4F",
    "label": "B7",
    "kind": "unit",
    "key": "B7-4",
    "verified": true,
    "box": [
      1321,
      747,
      103,
      94
    ]
  },
  {
    "id": "res-4-B8",
    "floor": "4F",
    "label": "B8",
    "kind": "unit",
    "key": "B8-4",
    "verified": true,
    "box": [
      1104,
      747,
      112,
      95
    ]
  },
  {
    "id": "res-4-B9",
    "floor": "4F",
    "label": "B9",
    "kind": "unit",
    "key": "B9-4",
    "verified": true,
    "box": [
      969,
      726,
      115,
      114
    ]
  },
  {
    "id": "res-5-A1",
    "floor": "5F",
    "label": "A1",
    "kind": "unit",
    "key": "A1-5",
    "verified": true,
    "box": [
      216,
      587,
      120,
      116
    ]
  },
  {
    "id": "res-5-A2",
    "floor": "5F",
    "label": "A2",
    "kind": "unit",
    "key": "A2-5",
    "verified": true,
    "box": [
      353,
      588,
      102,
      105
    ]
  },
  {
    "id": "res-5-A3",
    "floor": "5F",
    "label": "A3",
    "kind": "unit",
    "key": "A3-5",
    "verified": true,
    "box": [
      569,
      588,
      103,
      105
    ]
  },
  {
    "id": "res-5-A5",
    "floor": "5F",
    "label": "A5",
    "kind": "unit",
    "key": "A5-5",
    "verified": true,
    "box": [
      697,
      588,
      115,
      56
    ]
  },
  {
    "id": "res-5-A6",
    "floor": "5F",
    "label": "A6",
    "kind": "unit",
    "key": "A6-5",
    "verified": true,
    "box": [
      697,
      725,
      112,
      115
    ]
  },
  {
    "id": "res-5-A7",
    "floor": "5F",
    "label": "A7",
    "kind": "unit",
    "key": "A7-5",
    "verified": true,
    "box": [
      562,
      746,
      109,
      94
    ]
  },
  {
    "id": "res-5-A8",
    "floor": "5F",
    "label": "A8",
    "kind": "unit",
    "key": "A8-5",
    "verified": true,
    "box": [
      356,
      746,
      110,
      94
    ]
  },
  {
    "id": "res-5-A9",
    "floor": "5F",
    "label": "A9",
    "kind": "unit",
    "key": "A9-5",
    "verified": true,
    "box": [
      216,
      725,
      119,
      115
    ]
  },
  {
    "id": "res-5-B1",
    "floor": "5F",
    "label": "B1",
    "kind": "unit",
    "key": "B1-5",
    "verified": true,
    "box": [
      969,
      589,
      115,
      54
    ]
  },
  {
    "id": "res-5-B2",
    "floor": "5F",
    "label": "B2",
    "kind": "unit",
    "key": "B2-5",
    "verified": true,
    "box": [
      1104,
      588,
      108,
      105
    ]
  },
  {
    "id": "res-5-B3",
    "floor": "5F",
    "label": "B3",
    "kind": "unit",
    "key": "B3-5",
    "verified": true,
    "box": [
      1326,
      589,
      97,
      104
    ]
  },
  {
    "id": "res-5-B5",
    "floor": "5F",
    "label": "B5",
    "kind": "unit",
    "key": "B5-5",
    "verified": true,
    "box": [
      1444,
      589,
      114,
      116
    ]
  },
  {
    "id": "res-5-B6",
    "floor": "5F",
    "label": "B6",
    "kind": "unit",
    "key": "B6-5",
    "verified": true,
    "box": [
      1444,
      726,
      114,
      114
    ]
  },
  {
    "id": "res-5-B7",
    "floor": "5F",
    "label": "B7",
    "kind": "unit",
    "key": "B7-5",
    "verified": true,
    "box": [
      1321,
      747,
      103,
      94
    ]
  },
  {
    "id": "res-5-B8",
    "floor": "5F",
    "label": "B8",
    "kind": "unit",
    "key": "B8-5",
    "verified": true,
    "box": [
      1104,
      747,
      112,
      95
    ]
  },
  {
    "id": "res-5-B9",
    "floor": "5F",
    "label": "B9",
    "kind": "unit",
    "key": "B9-5",
    "verified": true,
    "box": [
      969,
      726,
      115,
      114
    ]
  },
  {
    "id": "res-6-A1",
    "floor": "6F",
    "label": "A1",
    "kind": "unit",
    "key": "A1-6",
    "verified": true,
    "box": [
      216,
      587,
      120,
      116
    ]
  },
  {
    "id": "res-6-A2",
    "floor": "6F",
    "label": "A2",
    "kind": "unit",
    "key": "A2-6",
    "verified": true,
    "box": [
      353,
      588,
      102,
      105
    ]
  },
  {
    "id": "res-6-A3",
    "floor": "6F",
    "label": "A3",
    "kind": "unit",
    "key": "A3-6",
    "verified": true,
    "box": [
      569,
      588,
      103,
      105
    ]
  },
  {
    "id": "res-6-A5",
    "floor": "6F",
    "label": "A5",
    "kind": "unit",
    "key": "A5-6",
    "verified": true,
    "box": [
      697,
      588,
      115,
      56
    ]
  },
  {
    "id": "res-6-A6",
    "floor": "6F",
    "label": "A6",
    "kind": "unit",
    "key": "A6-6",
    "verified": true,
    "box": [
      697,
      725,
      112,
      115
    ]
  },
  {
    "id": "res-6-A7",
    "floor": "6F",
    "label": "A7",
    "kind": "unit",
    "key": "A7-6",
    "verified": true,
    "box": [
      562,
      746,
      109,
      94
    ]
  },
  {
    "id": "res-6-A8",
    "floor": "6F",
    "label": "A8",
    "kind": "unit",
    "key": "A8-6",
    "verified": true,
    "box": [
      356,
      746,
      110,
      94
    ]
  },
  {
    "id": "res-6-A9",
    "floor": "6F",
    "label": "A9",
    "kind": "unit",
    "key": "A9-6",
    "verified": true,
    "box": [
      216,
      725,
      119,
      115
    ]
  },
  {
    "id": "res-6-B1",
    "floor": "6F",
    "label": "B1",
    "kind": "unit",
    "key": "B1-6",
    "verified": true,
    "box": [
      969,
      589,
      115,
      54
    ]
  },
  {
    "id": "res-6-B2",
    "floor": "6F",
    "label": "B2",
    "kind": "unit",
    "key": "B2-6",
    "verified": true,
    "box": [
      1104,
      588,
      108,
      105
    ]
  },
  {
    "id": "res-6-B3",
    "floor": "6F",
    "label": "B3",
    "kind": "unit",
    "key": "B3-6",
    "verified": true,
    "box": [
      1326,
      589,
      97,
      104
    ]
  },
  {
    "id": "res-6-B5",
    "floor": "6F",
    "label": "B5",
    "kind": "unit",
    "key": "B5-6",
    "verified": true,
    "box": [
      1444,
      589,
      114,
      116
    ]
  },
  {
    "id": "res-6-B6",
    "floor": "6F",
    "label": "B6",
    "kind": "unit",
    "key": "B6-6",
    "verified": true,
    "box": [
      1444,
      726,
      114,
      114
    ]
  },
  {
    "id": "res-6-B7",
    "floor": "6F",
    "label": "B7",
    "kind": "unit",
    "key": "B7-6",
    "verified": true,
    "box": [
      1321,
      747,
      103,
      94
    ]
  },
  {
    "id": "res-6-B8",
    "floor": "6F",
    "label": "B8",
    "kind": "unit",
    "key": "B8-6",
    "verified": true,
    "box": [
      1104,
      747,
      112,
      95
    ]
  },
  {
    "id": "res-6-B9",
    "floor": "6F",
    "label": "B9",
    "kind": "unit",
    "key": "B9-6",
    "verified": true,
    "box": [
      969,
      726,
      115,
      114
    ]
  },
  {
    "id": "res-7-A1",
    "floor": "7F",
    "label": "A1",
    "kind": "unit",
    "key": "A1-7",
    "verified": true,
    "box": [
      216,
      587,
      120,
      116
    ]
  },
  {
    "id": "res-7-A2",
    "floor": "7F",
    "label": "A2",
    "kind": "unit",
    "key": "A2-7",
    "verified": true,
    "box": [
      353,
      588,
      102,
      105
    ]
  },
  {
    "id": "res-7-A3",
    "floor": "7F",
    "label": "A3",
    "kind": "unit",
    "key": "A3-7",
    "verified": true,
    "box": [
      569,
      588,
      103,
      105
    ]
  },
  {
    "id": "res-7-A5",
    "floor": "7F",
    "label": "A5",
    "kind": "unit",
    "key": "A5-7",
    "verified": true,
    "box": [
      697,
      588,
      115,
      56
    ]
  },
  {
    "id": "res-7-A6",
    "floor": "7F",
    "label": "A6",
    "kind": "unit",
    "key": "A6-7",
    "verified": true,
    "box": [
      697,
      725,
      112,
      115
    ]
  },
  {
    "id": "res-7-A7",
    "floor": "7F",
    "label": "A7",
    "kind": "unit",
    "key": "A7-7",
    "verified": true,
    "box": [
      562,
      746,
      109,
      94
    ]
  },
  {
    "id": "res-7-A8",
    "floor": "7F",
    "label": "A8",
    "kind": "unit",
    "key": "A8-7",
    "verified": true,
    "box": [
      356,
      746,
      110,
      94
    ]
  },
  {
    "id": "res-7-A9",
    "floor": "7F",
    "label": "A9",
    "kind": "unit",
    "key": "A9-7",
    "verified": true,
    "box": [
      216,
      725,
      119,
      115
    ]
  },
  {
    "id": "res-7-B1",
    "floor": "7F",
    "label": "B1",
    "kind": "unit",
    "key": "B1-7",
    "verified": true,
    "box": [
      969,
      589,
      115,
      54
    ]
  },
  {
    "id": "res-7-B2",
    "floor": "7F",
    "label": "B2",
    "kind": "unit",
    "key": "B2-7",
    "verified": true,
    "box": [
      1104,
      588,
      108,
      105
    ]
  },
  {
    "id": "res-7-B3",
    "floor": "7F",
    "label": "B3",
    "kind": "unit",
    "key": "B3-7",
    "verified": true,
    "box": [
      1326,
      589,
      97,
      104
    ]
  },
  {
    "id": "res-7-B5",
    "floor": "7F",
    "label": "B5",
    "kind": "unit",
    "key": "B5-7",
    "verified": true,
    "box": [
      1444,
      589,
      114,
      116
    ]
  },
  {
    "id": "res-7-B6",
    "floor": "7F",
    "label": "B6",
    "kind": "unit",
    "key": "B6-7",
    "verified": true,
    "box": [
      1444,
      726,
      114,
      114
    ]
  },
  {
    "id": "res-7-B7",
    "floor": "7F",
    "label": "B7",
    "kind": "unit",
    "key": "B7-7",
    "verified": true,
    "box": [
      1321,
      747,
      103,
      94
    ]
  },
  {
    "id": "res-7-B8",
    "floor": "7F",
    "label": "B8",
    "kind": "unit",
    "key": "B8-7",
    "verified": true,
    "box": [
      1104,
      747,
      112,
      95
    ]
  },
  {
    "id": "res-7-B9",
    "floor": "7F",
    "label": "B9",
    "kind": "unit",
    "key": "B9-7",
    "verified": true,
    "box": [
      969,
      726,
      115,
      114
    ]
  },
  {
    "id": "res-8-A1",
    "floor": "8F",
    "label": "A1",
    "kind": "unit",
    "key": "A1-8",
    "verified": true,
    "box": [
      216,
      587,
      120,
      116
    ]
  },
  {
    "id": "res-8-A2",
    "floor": "8F",
    "label": "A2",
    "kind": "unit",
    "key": "A2-8",
    "verified": true,
    "box": [
      353,
      588,
      102,
      105
    ]
  },
  {
    "id": "res-8-A3",
    "floor": "8F",
    "label": "A3",
    "kind": "unit",
    "key": "A3-8",
    "verified": true,
    "box": [
      569,
      588,
      103,
      105
    ]
  },
  {
    "id": "res-8-A5",
    "floor": "8F",
    "label": "A5",
    "kind": "unit",
    "key": "A5-8",
    "verified": true,
    "box": [
      697,
      588,
      115,
      56
    ]
  },
  {
    "id": "res-8-A6",
    "floor": "8F",
    "label": "A6",
    "kind": "unit",
    "key": "A6-8",
    "verified": true,
    "box": [
      697,
      725,
      112,
      115
    ]
  },
  {
    "id": "res-8-A7",
    "floor": "8F",
    "label": "A7",
    "kind": "unit",
    "key": "A7-8",
    "verified": true,
    "box": [
      562,
      746,
      109,
      94
    ]
  },
  {
    "id": "res-8-A8",
    "floor": "8F",
    "label": "A8",
    "kind": "unit",
    "key": "A8-8",
    "verified": true,
    "box": [
      356,
      746,
      110,
      94
    ]
  },
  {
    "id": "res-8-A9",
    "floor": "8F",
    "label": "A9",
    "kind": "unit",
    "key": "A9-8",
    "verified": true,
    "box": [
      216,
      725,
      119,
      115
    ]
  },
  {
    "id": "res-8-B1",
    "floor": "8F",
    "label": "B1",
    "kind": "unit",
    "key": "B1-8",
    "verified": true,
    "box": [
      969,
      589,
      115,
      54
    ]
  },
  {
    "id": "res-8-B2",
    "floor": "8F",
    "label": "B2",
    "kind": "unit",
    "key": "B2-8",
    "verified": true,
    "box": [
      1104,
      588,
      108,
      105
    ]
  },
  {
    "id": "res-8-B3",
    "floor": "8F",
    "label": "B3",
    "kind": "unit",
    "key": "B3-8",
    "verified": true,
    "box": [
      1326,
      589,
      97,
      104
    ]
  },
  {
    "id": "res-8-B5",
    "floor": "8F",
    "label": "B5",
    "kind": "unit",
    "key": "B5-8",
    "verified": true,
    "box": [
      1444,
      589,
      114,
      116
    ]
  },
  {
    "id": "res-8-B6",
    "floor": "8F",
    "label": "B6",
    "kind": "unit",
    "key": "B6-8",
    "verified": true,
    "box": [
      1444,
      726,
      114,
      114
    ]
  },
  {
    "id": "res-8-B7",
    "floor": "8F",
    "label": "B7",
    "kind": "unit",
    "key": "B7-8",
    "verified": true,
    "box": [
      1321,
      747,
      103,
      94
    ]
  },
  {
    "id": "res-8-B8",
    "floor": "8F",
    "label": "B8",
    "kind": "unit",
    "key": "B8-8",
    "verified": true,
    "box": [
      1104,
      747,
      112,
      95
    ]
  },
  {
    "id": "res-8-B9",
    "floor": "8F",
    "label": "B9",
    "kind": "unit",
    "key": "B9-8",
    "verified": true,
    "box": [
      969,
      726,
      115,
      114
    ]
  },
  {
    "id": "res-9-A1",
    "floor": "9F",
    "label": "A1",
    "kind": "unit",
    "key": "A1-9",
    "verified": true,
    "box": [
      216,
      587,
      120,
      116
    ]
  },
  {
    "id": "res-9-A2",
    "floor": "9F",
    "label": "A2",
    "kind": "unit",
    "key": "A2-9",
    "verified": true,
    "box": [
      353,
      588,
      102,
      105
    ]
  },
  {
    "id": "res-9-A3",
    "floor": "9F",
    "label": "A3",
    "kind": "unit",
    "key": "A3-9",
    "verified": true,
    "box": [
      569,
      588,
      103,
      105
    ]
  },
  {
    "id": "res-9-A5",
    "floor": "9F",
    "label": "A5",
    "kind": "unit",
    "key": "A5-9",
    "verified": true,
    "box": [
      697,
      588,
      115,
      56
    ]
  },
  {
    "id": "res-9-A6",
    "floor": "9F",
    "label": "A6",
    "kind": "unit",
    "key": "A6-9",
    "verified": true,
    "box": [
      697,
      725,
      112,
      115
    ]
  },
  {
    "id": "res-9-A7",
    "floor": "9F",
    "label": "A7",
    "kind": "unit",
    "key": "A7-9",
    "verified": true,
    "box": [
      562,
      746,
      109,
      94
    ]
  },
  {
    "id": "res-9-A8",
    "floor": "9F",
    "label": "A8",
    "kind": "unit",
    "key": "A8-9",
    "verified": true,
    "box": [
      356,
      746,
      110,
      94
    ]
  },
  {
    "id": "res-9-A9",
    "floor": "9F",
    "label": "A9",
    "kind": "unit",
    "key": "A9-9",
    "verified": true,
    "box": [
      216,
      725,
      119,
      115
    ]
  },
  {
    "id": "res-9-B1",
    "floor": "9F",
    "label": "B1",
    "kind": "unit",
    "key": "B1-9",
    "verified": true,
    "box": [
      969,
      589,
      115,
      54
    ]
  },
  {
    "id": "res-9-B2",
    "floor": "9F",
    "label": "B2",
    "kind": "unit",
    "key": "B2-9",
    "verified": true,
    "box": [
      1104,
      588,
      108,
      105
    ]
  },
  {
    "id": "res-9-B3",
    "floor": "9F",
    "label": "B3",
    "kind": "unit",
    "key": "B3-9",
    "verified": true,
    "box": [
      1326,
      589,
      97,
      104
    ]
  },
  {
    "id": "res-9-B5",
    "floor": "9F",
    "label": "B5",
    "kind": "unit",
    "key": "B5-9",
    "verified": true,
    "box": [
      1444,
      589,
      114,
      116
    ]
  },
  {
    "id": "res-9-B6",
    "floor": "9F",
    "label": "B6",
    "kind": "unit",
    "key": "B6-9",
    "verified": true,
    "box": [
      1444,
      726,
      114,
      114
    ]
  },
  {
    "id": "res-9-B7",
    "floor": "9F",
    "label": "B7",
    "kind": "unit",
    "key": "B7-9",
    "verified": true,
    "box": [
      1321,
      747,
      103,
      94
    ]
  },
  {
    "id": "res-9-B8",
    "floor": "9F",
    "label": "B8",
    "kind": "unit",
    "key": "B8-9",
    "verified": true,
    "box": [
      1104,
      747,
      112,
      95
    ]
  },
  {
    "id": "res-9-B9",
    "floor": "9F",
    "label": "B9",
    "kind": "unit",
    "key": "B9-9",
    "verified": true,
    "box": [
      969,
      726,
      115,
      114
    ]
  },
  {
    "id": "res-10-A1",
    "floor": "10F",
    "label": "A1",
    "kind": "unit",
    "key": "A1-10",
    "verified": true,
    "box": [
      216,
      587,
      120,
      116
    ]
  },
  {
    "id": "res-10-A2",
    "floor": "10F",
    "label": "A2",
    "kind": "unit",
    "key": "A2-10",
    "verified": true,
    "box": [
      353,
      588,
      102,
      105
    ]
  },
  {
    "id": "res-10-A3",
    "floor": "10F",
    "label": "A3",
    "kind": "unit",
    "key": "A3-10",
    "verified": true,
    "box": [
      569,
      588,
      103,
      105
    ]
  },
  {
    "id": "res-10-A5",
    "floor": "10F",
    "label": "A5",
    "kind": "unit",
    "key": "A5-10",
    "verified": true,
    "box": [
      697,
      588,
      115,
      56
    ]
  },
  {
    "id": "res-10-A6",
    "floor": "10F",
    "label": "A6",
    "kind": "unit",
    "key": "A6-10",
    "verified": true,
    "box": [
      697,
      725,
      112,
      115
    ]
  },
  {
    "id": "res-10-A7",
    "floor": "10F",
    "label": "A7",
    "kind": "unit",
    "key": "A7-10",
    "verified": true,
    "box": [
      562,
      746,
      109,
      94
    ]
  },
  {
    "id": "res-10-A8",
    "floor": "10F",
    "label": "A8",
    "kind": "unit",
    "key": "A8-10",
    "verified": true,
    "box": [
      356,
      746,
      110,
      94
    ]
  },
  {
    "id": "res-10-A9",
    "floor": "10F",
    "label": "A9",
    "kind": "unit",
    "key": "A9-10",
    "verified": true,
    "box": [
      216,
      725,
      119,
      115
    ]
  },
  {
    "id": "res-10-B1",
    "floor": "10F",
    "label": "B1",
    "kind": "unit",
    "key": "B1-10",
    "verified": true,
    "box": [
      969,
      589,
      115,
      54
    ]
  },
  {
    "id": "res-10-B2",
    "floor": "10F",
    "label": "B2",
    "kind": "unit",
    "key": "B2-10",
    "verified": true,
    "box": [
      1104,
      588,
      108,
      105
    ]
  },
  {
    "id": "res-10-B3",
    "floor": "10F",
    "label": "B3",
    "kind": "unit",
    "key": "B3-10",
    "verified": true,
    "box": [
      1326,
      589,
      97,
      104
    ]
  },
  {
    "id": "res-10-B5",
    "floor": "10F",
    "label": "B5",
    "kind": "unit",
    "key": "B5-10",
    "verified": true,
    "box": [
      1444,
      589,
      114,
      116
    ]
  },
  {
    "id": "res-10-B6",
    "floor": "10F",
    "label": "B6",
    "kind": "unit",
    "key": "B6-10",
    "verified": true,
    "box": [
      1444,
      726,
      114,
      114
    ]
  },
  {
    "id": "res-10-B7",
    "floor": "10F",
    "label": "B7",
    "kind": "unit",
    "key": "B7-10",
    "verified": true,
    "box": [
      1321,
      747,
      103,
      94
    ]
  },
  {
    "id": "res-10-B8",
    "floor": "10F",
    "label": "B8",
    "kind": "unit",
    "key": "B8-10",
    "verified": true,
    "box": [
      1104,
      747,
      112,
      95
    ]
  },
  {
    "id": "res-10-B9",
    "floor": "10F",
    "label": "B9",
    "kind": "unit",
    "key": "B9-10",
    "verified": true,
    "box": [
      969,
      726,
      115,
      114
    ]
  },
  {
    "id": "res-11-A1",
    "floor": "11F",
    "label": "A1",
    "kind": "unit",
    "key": "A1-11",
    "verified": true,
    "box": [
      216,
      587,
      120,
      116
    ]
  },
  {
    "id": "res-11-A2",
    "floor": "11F",
    "label": "A2",
    "kind": "unit",
    "key": "A2-11",
    "verified": true,
    "box": [
      353,
      588,
      102,
      105
    ]
  },
  {
    "id": "res-11-A3",
    "floor": "11F",
    "label": "A3",
    "kind": "unit",
    "key": "A3-11",
    "verified": true,
    "box": [
      569,
      588,
      103,
      105
    ]
  },
  {
    "id": "res-11-A5",
    "floor": "11F",
    "label": "A5",
    "kind": "unit",
    "key": "A5-11",
    "verified": true,
    "box": [
      697,
      588,
      115,
      56
    ]
  },
  {
    "id": "res-11-A6",
    "floor": "11F",
    "label": "A6",
    "kind": "unit",
    "key": "A6-11",
    "verified": true,
    "box": [
      697,
      725,
      112,
      115
    ]
  },
  {
    "id": "res-11-A7",
    "floor": "11F",
    "label": "A7",
    "kind": "unit",
    "key": "A7-11",
    "verified": true,
    "box": [
      562,
      746,
      109,
      94
    ]
  },
  {
    "id": "res-11-A8",
    "floor": "11F",
    "label": "A8",
    "kind": "unit",
    "key": "A8-11",
    "verified": true,
    "box": [
      356,
      746,
      110,
      94
    ]
  },
  {
    "id": "res-11-A9",
    "floor": "11F",
    "label": "A9",
    "kind": "unit",
    "key": "A9-11",
    "verified": true,
    "box": [
      216,
      725,
      119,
      115
    ]
  },
  {
    "id": "res-11-B1",
    "floor": "11F",
    "label": "B1",
    "kind": "unit",
    "key": "B1-11",
    "verified": true,
    "box": [
      969,
      589,
      115,
      54
    ]
  },
  {
    "id": "res-11-B2",
    "floor": "11F",
    "label": "B2",
    "kind": "unit",
    "key": "B2-11",
    "verified": true,
    "box": [
      1104,
      588,
      108,
      105
    ]
  },
  {
    "id": "res-11-B3",
    "floor": "11F",
    "label": "B3",
    "kind": "unit",
    "key": "B3-11",
    "verified": true,
    "box": [
      1326,
      589,
      97,
      104
    ]
  },
  {
    "id": "res-11-B5",
    "floor": "11F",
    "label": "B5",
    "kind": "unit",
    "key": "B5-11",
    "verified": true,
    "box": [
      1444,
      589,
      114,
      116
    ]
  },
  {
    "id": "res-11-B6",
    "floor": "11F",
    "label": "B6",
    "kind": "unit",
    "key": "B6-11",
    "verified": true,
    "box": [
      1444,
      726,
      114,
      114
    ]
  },
  {
    "id": "res-11-B7",
    "floor": "11F",
    "label": "B7",
    "kind": "unit",
    "key": "B7-11",
    "verified": true,
    "box": [
      1321,
      747,
      103,
      94
    ]
  },
  {
    "id": "res-11-B8",
    "floor": "11F",
    "label": "B8",
    "kind": "unit",
    "key": "B8-11",
    "verified": true,
    "box": [
      1104,
      747,
      112,
      95
    ]
  },
  {
    "id": "res-11-B9",
    "floor": "11F",
    "label": "B9",
    "kind": "unit",
    "key": "B9-11",
    "verified": true,
    "box": [
      969,
      726,
      115,
      114
    ]
  },
  {
    "id": "res-12-A1",
    "floor": "12F",
    "label": "A1",
    "kind": "unit",
    "key": "A1-12",
    "verified": true,
    "box": [
      216,
      587,
      120,
      116
    ]
  },
  {
    "id": "res-12-A2",
    "floor": "12F",
    "label": "A2",
    "kind": "unit",
    "key": "A2-12",
    "verified": true,
    "box": [
      353,
      588,
      102,
      105
    ]
  },
  {
    "id": "res-12-A3",
    "floor": "12F",
    "label": "A3",
    "kind": "unit",
    "key": "A3-12",
    "verified": true,
    "box": [
      569,
      588,
      103,
      105
    ]
  },
  {
    "id": "res-12-A5",
    "floor": "12F",
    "label": "A5",
    "kind": "unit",
    "key": "A5-12",
    "verified": true,
    "box": [
      697,
      588,
      115,
      56
    ]
  },
  {
    "id": "res-12-A6",
    "floor": "12F",
    "label": "A6",
    "kind": "unit",
    "key": "A6-12",
    "verified": true,
    "box": [
      697,
      725,
      112,
      115
    ]
  },
  {
    "id": "res-12-A7",
    "floor": "12F",
    "label": "A7",
    "kind": "unit",
    "key": "A7-12",
    "verified": true,
    "box": [
      562,
      746,
      109,
      94
    ]
  },
  {
    "id": "res-12-A8",
    "floor": "12F",
    "label": "A8",
    "kind": "unit",
    "key": "A8-12",
    "verified": true,
    "box": [
      356,
      746,
      110,
      94
    ]
  },
  {
    "id": "res-12-A9",
    "floor": "12F",
    "label": "A9",
    "kind": "unit",
    "key": "A9-12",
    "verified": true,
    "box": [
      216,
      725,
      119,
      115
    ]
  },
  {
    "id": "res-12-B1",
    "floor": "12F",
    "label": "B1",
    "kind": "unit",
    "key": "B1-12",
    "verified": true,
    "box": [
      969,
      589,
      115,
      54
    ]
  },
  {
    "id": "res-12-B2",
    "floor": "12F",
    "label": "B2",
    "kind": "unit",
    "key": "B2-12",
    "verified": true,
    "box": [
      1104,
      588,
      108,
      105
    ]
  },
  {
    "id": "res-12-B3",
    "floor": "12F",
    "label": "B3",
    "kind": "unit",
    "key": "B3-12",
    "verified": true,
    "box": [
      1326,
      589,
      97,
      104
    ]
  },
  {
    "id": "res-12-B5",
    "floor": "12F",
    "label": "B5",
    "kind": "unit",
    "key": "B5-12",
    "verified": true,
    "box": [
      1444,
      589,
      114,
      116
    ]
  },
  {
    "id": "res-12-B6",
    "floor": "12F",
    "label": "B6",
    "kind": "unit",
    "key": "B6-12",
    "verified": true,
    "box": [
      1444,
      726,
      114,
      114
    ]
  },
  {
    "id": "res-12-B7",
    "floor": "12F",
    "label": "B7",
    "kind": "unit",
    "key": "B7-12",
    "verified": true,
    "box": [
      1321,
      747,
      103,
      94
    ]
  },
  {
    "id": "res-12-B8",
    "floor": "12F",
    "label": "B8",
    "kind": "unit",
    "key": "B8-12",
    "verified": true,
    "box": [
      1104,
      747,
      112,
      95
    ]
  },
  {
    "id": "res-12-B9",
    "floor": "12F",
    "label": "B9",
    "kind": "unit",
    "key": "B9-12",
    "verified": true,
    "box": [
      969,
      726,
      115,
      114
    ]
  },
  {
    "id": "res-13-A1",
    "floor": "13F",
    "label": "A1",
    "kind": "unit",
    "key": "A1-13",
    "verified": true,
    "box": [
      216,
      587,
      120,
      116
    ]
  },
  {
    "id": "res-13-A2",
    "floor": "13F",
    "label": "A2",
    "kind": "unit",
    "key": "A2-13",
    "verified": true,
    "box": [
      353,
      588,
      102,
      105
    ]
  },
  {
    "id": "res-13-A3",
    "floor": "13F",
    "label": "A3",
    "kind": "unit",
    "key": "A3-13",
    "verified": true,
    "box": [
      569,
      588,
      103,
      105
    ]
  },
  {
    "id": "res-13-A5",
    "floor": "13F",
    "label": "A5",
    "kind": "unit",
    "key": "A5-13",
    "verified": true,
    "box": [
      697,
      588,
      115,
      56
    ]
  },
  {
    "id": "res-13-A6",
    "floor": "13F",
    "label": "A6",
    "kind": "unit",
    "key": "A6-13",
    "verified": true,
    "box": [
      697,
      725,
      112,
      115
    ]
  },
  {
    "id": "res-13-A7",
    "floor": "13F",
    "label": "A7",
    "kind": "unit",
    "key": "A7-13",
    "verified": true,
    "box": [
      562,
      746,
      109,
      94
    ]
  },
  {
    "id": "res-13-A8",
    "floor": "13F",
    "label": "A8",
    "kind": "unit",
    "key": "A8-13",
    "verified": true,
    "box": [
      356,
      746,
      110,
      94
    ]
  },
  {
    "id": "res-13-A9",
    "floor": "13F",
    "label": "A9",
    "kind": "unit",
    "key": "A9-13",
    "verified": true,
    "box": [
      216,
      725,
      119,
      115
    ]
  },
  {
    "id": "res-13-B1",
    "floor": "13F",
    "label": "B1",
    "kind": "unit",
    "key": "B1-13",
    "verified": true,
    "box": [
      969,
      589,
      115,
      54
    ]
  },
  {
    "id": "res-13-B2",
    "floor": "13F",
    "label": "B2",
    "kind": "unit",
    "key": "B2-13",
    "verified": true,
    "box": [
      1104,
      588,
      108,
      105
    ]
  },
  {
    "id": "res-13-B3",
    "floor": "13F",
    "label": "B3",
    "kind": "unit",
    "key": "B3-13",
    "verified": true,
    "box": [
      1326,
      589,
      97,
      104
    ]
  },
  {
    "id": "res-13-B5",
    "floor": "13F",
    "label": "B5",
    "kind": "unit",
    "key": "B5-13",
    "verified": true,
    "box": [
      1444,
      589,
      114,
      116
    ]
  },
  {
    "id": "res-13-B6",
    "floor": "13F",
    "label": "B6",
    "kind": "unit",
    "key": "B6-13",
    "verified": true,
    "box": [
      1444,
      726,
      114,
      114
    ]
  },
  {
    "id": "res-13-B7",
    "floor": "13F",
    "label": "B7",
    "kind": "unit",
    "key": "B7-13",
    "verified": true,
    "box": [
      1321,
      747,
      103,
      94
    ]
  },
  {
    "id": "res-13-B8",
    "floor": "13F",
    "label": "B8",
    "kind": "unit",
    "key": "B8-13",
    "verified": true,
    "box": [
      1104,
      747,
      112,
      95
    ]
  },
  {
    "id": "res-13-B9",
    "floor": "13F",
    "label": "B9",
    "kind": "unit",
    "key": "B9-13",
    "verified": true,
    "box": [
      969,
      726,
      115,
      114
    ]
  },
  {
    "id": "res-14-A1",
    "floor": "14F",
    "label": "A1",
    "kind": "unit",
    "key": "A1-14",
    "verified": true,
    "box": [
      216,
      587,
      120,
      116
    ]
  },
  {
    "id": "res-14-A2",
    "floor": "14F",
    "label": "A2",
    "kind": "unit",
    "key": "A2-14",
    "verified": true,
    "box": [
      353,
      588,
      102,
      105
    ]
  },
  {
    "id": "res-14-A3",
    "floor": "14F",
    "label": "A3",
    "kind": "unit",
    "key": "A3-14",
    "verified": true,
    "box": [
      569,
      588,
      103,
      105
    ]
  },
  {
    "id": "res-14-A5",
    "floor": "14F",
    "label": "A5",
    "kind": "unit",
    "key": "A5-14",
    "verified": true,
    "box": [
      697,
      588,
      115,
      56
    ]
  },
  {
    "id": "res-14-A6",
    "floor": "14F",
    "label": "A6",
    "kind": "unit",
    "key": "A6-14",
    "verified": true,
    "box": [
      697,
      725,
      112,
      115
    ]
  },
  {
    "id": "res-14-A7",
    "floor": "14F",
    "label": "A7",
    "kind": "unit",
    "key": "A7-14",
    "verified": true,
    "box": [
      562,
      746,
      109,
      94
    ]
  },
  {
    "id": "res-14-A8",
    "floor": "14F",
    "label": "A8",
    "kind": "unit",
    "key": "A8-14",
    "verified": true,
    "box": [
      356,
      746,
      110,
      94
    ]
  },
  {
    "id": "res-14-A9",
    "floor": "14F",
    "label": "A9",
    "kind": "unit",
    "key": "A9-14",
    "verified": true,
    "box": [
      216,
      725,
      119,
      115
    ]
  },
  {
    "id": "res-14-B1",
    "floor": "14F",
    "label": "B1",
    "kind": "unit",
    "key": "B1-14",
    "verified": true,
    "box": [
      969,
      589,
      115,
      54
    ]
  },
  {
    "id": "res-14-B2",
    "floor": "14F",
    "label": "B2",
    "kind": "unit",
    "key": "B2-14",
    "verified": true,
    "box": [
      1104,
      588,
      108,
      105
    ]
  },
  {
    "id": "res-14-B3",
    "floor": "14F",
    "label": "B3",
    "kind": "unit",
    "key": "B3-14",
    "verified": true,
    "box": [
      1326,
      589,
      97,
      104
    ]
  },
  {
    "id": "res-14-B5",
    "floor": "14F",
    "label": "B5",
    "kind": "unit",
    "key": "B5-14",
    "verified": true,
    "box": [
      1444,
      589,
      114,
      116
    ]
  },
  {
    "id": "res-14-B6",
    "floor": "14F",
    "label": "B6",
    "kind": "unit",
    "key": "B6-14",
    "verified": true,
    "box": [
      1444,
      726,
      114,
      114
    ]
  },
  {
    "id": "res-14-B7",
    "floor": "14F",
    "label": "B7",
    "kind": "unit",
    "key": "B7-14",
    "verified": true,
    "box": [
      1321,
      747,
      103,
      94
    ]
  },
  {
    "id": "res-14-B8",
    "floor": "14F",
    "label": "B8",
    "kind": "unit",
    "key": "B8-14",
    "verified": true,
    "box": [
      1104,
      747,
      112,
      95
    ]
  },
  {
    "id": "res-14-B9",
    "floor": "14F",
    "label": "B9",
    "kind": "unit",
    "key": "B9-14",
    "verified": true,
    "box": [
      969,
      726,
      115,
      114
    ]
  },
  {
    "id": "res-15-A1",
    "floor": "15F",
    "label": "A1",
    "kind": "unit",
    "key": "A1-15",
    "verified": true,
    "box": [
      216,
      587,
      120,
      116
    ]
  },
  {
    "id": "res-15-A2",
    "floor": "15F",
    "label": "A2",
    "kind": "unit",
    "key": "A2-15",
    "verified": true,
    "box": [
      353,
      588,
      102,
      105
    ]
  },
  {
    "id": "res-15-A3",
    "floor": "15F",
    "label": "A3",
    "kind": "unit",
    "key": "A3-15",
    "verified": true,
    "box": [
      569,
      588,
      103,
      105
    ]
  },
  {
    "id": "res-15-A5",
    "floor": "15F",
    "label": "A5",
    "kind": "unit",
    "key": "A5-15",
    "verified": true,
    "box": [
      697,
      588,
      115,
      56
    ]
  },
  {
    "id": "res-15-A6",
    "floor": "15F",
    "label": "A6",
    "kind": "unit",
    "key": "A6-15",
    "verified": true,
    "box": [
      697,
      725,
      112,
      115
    ]
  },
  {
    "id": "res-15-A7",
    "floor": "15F",
    "label": "A7",
    "kind": "unit",
    "key": "A7-15",
    "verified": true,
    "box": [
      562,
      746,
      109,
      94
    ]
  },
  {
    "id": "res-15-A8",
    "floor": "15F",
    "label": "A8",
    "kind": "unit",
    "key": "A8-15",
    "verified": true,
    "box": [
      356,
      746,
      110,
      94
    ]
  },
  {
    "id": "res-15-A9",
    "floor": "15F",
    "label": "A9",
    "kind": "unit",
    "key": "A9-15",
    "verified": true,
    "box": [
      216,
      725,
      119,
      115
    ]
  },
  {
    "id": "res-15-B1",
    "floor": "15F",
    "label": "B1",
    "kind": "unit",
    "key": "B1-15",
    "verified": true,
    "box": [
      969,
      589,
      115,
      54
    ]
  },
  {
    "id": "res-15-B2",
    "floor": "15F",
    "label": "B2",
    "kind": "unit",
    "key": "B2-15",
    "verified": true,
    "box": [
      1104,
      588,
      108,
      105
    ]
  },
  {
    "id": "res-15-B3",
    "floor": "15F",
    "label": "B3",
    "kind": "unit",
    "key": "B3-15",
    "verified": true,
    "box": [
      1326,
      589,
      97,
      104
    ]
  },
  {
    "id": "res-15-B5",
    "floor": "15F",
    "label": "B5",
    "kind": "unit",
    "key": "B5-15",
    "verified": true,
    "box": [
      1444,
      589,
      114,
      116
    ]
  },
  {
    "id": "res-15-B6",
    "floor": "15F",
    "label": "B6",
    "kind": "unit",
    "key": "B6-15",
    "verified": true,
    "box": [
      1444,
      726,
      114,
      114
    ]
  },
  {
    "id": "res-15-B7",
    "floor": "15F",
    "label": "B7",
    "kind": "unit",
    "key": "B7-15",
    "verified": true,
    "box": [
      1321,
      747,
      103,
      94
    ]
  },
  {
    "id": "res-15-B8",
    "floor": "15F",
    "label": "B8",
    "kind": "unit",
    "key": "B8-15",
    "verified": true,
    "box": [
      1104,
      747,
      112,
      95
    ]
  },
  {
    "id": "res-15-B9",
    "floor": "15F",
    "label": "B9",
    "kind": "unit",
    "key": "B9-15",
    "verified": true,
    "box": [
      969,
      726,
      115,
      114
    ]
  },
  {
    "id": "res-16-A1",
    "floor": "16F",
    "label": "A1",
    "kind": "unit",
    "key": "A1-16",
    "verified": true,
    "box": [
      216,
      587,
      120,
      116
    ]
  },
  {
    "id": "res-16-A2",
    "floor": "16F",
    "label": "A2",
    "kind": "unit",
    "key": "A2-16",
    "verified": true,
    "box": [
      353,
      588,
      102,
      105
    ]
  },
  {
    "id": "res-16-A3",
    "floor": "16F",
    "label": "A3",
    "kind": "unit",
    "key": "A3-16",
    "verified": true,
    "box": [
      569,
      588,
      103,
      105
    ]
  },
  {
    "id": "res-16-A5",
    "floor": "16F",
    "label": "A5",
    "kind": "unit",
    "key": "A5-16",
    "verified": true,
    "box": [
      697,
      588,
      115,
      56
    ]
  },
  {
    "id": "res-16-A6",
    "floor": "16F",
    "label": "A6",
    "kind": "unit",
    "key": "A6-16",
    "verified": true,
    "box": [
      697,
      725,
      112,
      115
    ]
  },
  {
    "id": "res-16-A7",
    "floor": "16F",
    "label": "A7",
    "kind": "unit",
    "key": "A7-16",
    "verified": true,
    "box": [
      562,
      746,
      109,
      94
    ]
  },
  {
    "id": "res-16-A8",
    "floor": "16F",
    "label": "A8",
    "kind": "unit",
    "key": "A8-16",
    "verified": true,
    "box": [
      356,
      746,
      110,
      94
    ]
  },
  {
    "id": "res-16-A9",
    "floor": "16F",
    "label": "A9",
    "kind": "unit",
    "key": "A9-16",
    "verified": true,
    "box": [
      216,
      725,
      119,
      115
    ]
  },
  {
    "id": "res-16-B1",
    "floor": "16F",
    "label": "B1",
    "kind": "unit",
    "key": "B1-16",
    "verified": true,
    "box": [
      969,
      589,
      115,
      54
    ]
  },
  {
    "id": "res-16-B2",
    "floor": "16F",
    "label": "B2",
    "kind": "unit",
    "key": "B2-16",
    "verified": true,
    "box": [
      1104,
      588,
      108,
      105
    ]
  },
  {
    "id": "res-16-B3",
    "floor": "16F",
    "label": "B3",
    "kind": "unit",
    "key": "B3-16",
    "verified": true,
    "box": [
      1326,
      589,
      97,
      104
    ]
  },
  {
    "id": "res-16-B5",
    "floor": "16F",
    "label": "B5",
    "kind": "unit",
    "key": "B5-16",
    "verified": true,
    "box": [
      1444,
      589,
      114,
      116
    ]
  },
  {
    "id": "res-16-B6",
    "floor": "16F",
    "label": "B6",
    "kind": "unit",
    "key": "B6-16",
    "verified": true,
    "box": [
      1444,
      726,
      114,
      114
    ]
  },
  {
    "id": "res-16-B7",
    "floor": "16F",
    "label": "B7",
    "kind": "unit",
    "key": "B7-16",
    "verified": true,
    "box": [
      1321,
      747,
      103,
      94
    ]
  },
  {
    "id": "res-16-B8",
    "floor": "16F",
    "label": "B8",
    "kind": "unit",
    "key": "B8-16",
    "verified": true,
    "box": [
      1104,
      747,
      112,
      95
    ]
  },
  {
    "id": "res-16-B9",
    "floor": "16F",
    "label": "B9",
    "kind": "unit",
    "key": "B9-16",
    "verified": true,
    "box": [
      969,
      726,
      115,
      114
    ]
  },
  {
    "id": "res-17-A1",
    "floor": "17F",
    "label": "A1",
    "kind": "unit",
    "key": "A1-17",
    "verified": true,
    "box": [
      216,
      587,
      120,
      116
    ]
  },
  {
    "id": "res-17-A2",
    "floor": "17F",
    "label": "A2",
    "kind": "unit",
    "key": "A2-17",
    "verified": true,
    "box": [
      353,
      588,
      102,
      105
    ]
  },
  {
    "id": "res-17-A3",
    "floor": "17F",
    "label": "A3",
    "kind": "unit",
    "key": "A3-17",
    "verified": true,
    "box": [
      569,
      588,
      103,
      105
    ]
  },
  {
    "id": "res-17-A5",
    "floor": "17F",
    "label": "A5",
    "kind": "unit",
    "key": "A5-17",
    "verified": true,
    "box": [
      697,
      588,
      115,
      56
    ]
  },
  {
    "id": "res-17-A6",
    "floor": "17F",
    "label": "A6",
    "kind": "unit",
    "key": "A6-17",
    "verified": true,
    "box": [
      697,
      725,
      112,
      115
    ]
  },
  {
    "id": "res-17-A7",
    "floor": "17F",
    "label": "A7",
    "kind": "unit",
    "key": "A7-17",
    "verified": true,
    "box": [
      562,
      746,
      109,
      94
    ]
  },
  {
    "id": "res-17-A8",
    "floor": "17F",
    "label": "A8",
    "kind": "unit",
    "key": "A8-17",
    "verified": true,
    "box": [
      356,
      746,
      110,
      94
    ]
  },
  {
    "id": "res-17-A9",
    "floor": "17F",
    "label": "A9",
    "kind": "unit",
    "key": "A9-17",
    "verified": true,
    "box": [
      216,
      725,
      119,
      115
    ]
  },
  {
    "id": "res-17-B1",
    "floor": "17F",
    "label": "B1",
    "kind": "unit",
    "key": "B1-17",
    "verified": true,
    "box": [
      969,
      589,
      115,
      54
    ]
  },
  {
    "id": "res-17-B2",
    "floor": "17F",
    "label": "B2",
    "kind": "unit",
    "key": "B2-17",
    "verified": true,
    "box": [
      1104,
      588,
      108,
      105
    ]
  },
  {
    "id": "res-17-B3",
    "floor": "17F",
    "label": "B3",
    "kind": "unit",
    "key": "B3-17",
    "verified": true,
    "box": [
      1326,
      589,
      97,
      104
    ]
  },
  {
    "id": "res-17-B5",
    "floor": "17F",
    "label": "B5",
    "kind": "unit",
    "key": "B5-17",
    "verified": true,
    "box": [
      1444,
      589,
      114,
      116
    ]
  },
  {
    "id": "res-17-B6",
    "floor": "17F",
    "label": "B6",
    "kind": "unit",
    "key": "B6-17",
    "verified": true,
    "box": [
      1444,
      726,
      114,
      114
    ]
  },
  {
    "id": "res-17-B7",
    "floor": "17F",
    "label": "B7",
    "kind": "unit",
    "key": "B7-17",
    "verified": true,
    "box": [
      1321,
      747,
      103,
      94
    ]
  },
  {
    "id": "res-17-B8",
    "floor": "17F",
    "label": "B8",
    "kind": "unit",
    "key": "B8-17",
    "verified": true,
    "box": [
      1104,
      747,
      112,
      95
    ]
  },
  {
    "id": "res-17-B9",
    "floor": "17F",
    "label": "B9",
    "kind": "unit",
    "key": "B9-17",
    "verified": true,
    "box": [
      969,
      726,
      115,
      114
    ]
  },
  {
    "id": "res-18-A1",
    "floor": "18F",
    "label": "A1",
    "kind": "unit",
    "key": "A1-18",
    "verified": true,
    "box": [
      216,
      587,
      120,
      116
    ]
  },
  {
    "id": "res-18-A2",
    "floor": "18F",
    "label": "A2",
    "kind": "unit",
    "key": "A2-18",
    "verified": true,
    "box": [
      353,
      588,
      102,
      105
    ]
  },
  {
    "id": "res-18-A3",
    "floor": "18F",
    "label": "A3",
    "kind": "unit",
    "key": "A3-18",
    "verified": true,
    "box": [
      569,
      588,
      103,
      105
    ]
  },
  {
    "id": "res-18-A5",
    "floor": "18F",
    "label": "A5",
    "kind": "unit",
    "key": "A5-18",
    "verified": true,
    "box": [
      697,
      588,
      115,
      56
    ]
  },
  {
    "id": "res-18-A6",
    "floor": "18F",
    "label": "A6",
    "kind": "unit",
    "key": "A6-18",
    "verified": true,
    "box": [
      697,
      725,
      112,
      115
    ]
  },
  {
    "id": "res-18-A7",
    "floor": "18F",
    "label": "A7",
    "kind": "unit",
    "key": "A7-18",
    "verified": true,
    "box": [
      562,
      746,
      109,
      94
    ]
  },
  {
    "id": "res-18-A8",
    "floor": "18F",
    "label": "A8",
    "kind": "unit",
    "key": "A8-18",
    "verified": true,
    "box": [
      356,
      746,
      110,
      94
    ]
  },
  {
    "id": "res-18-A9",
    "floor": "18F",
    "label": "A9",
    "kind": "unit",
    "key": "A9-18",
    "verified": true,
    "box": [
      216,
      725,
      119,
      115
    ]
  },
  {
    "id": "res-18-B1",
    "floor": "18F",
    "label": "B1",
    "kind": "unit",
    "key": "B1-18",
    "verified": true,
    "box": [
      969,
      589,
      115,
      54
    ]
  },
  {
    "id": "res-18-B2",
    "floor": "18F",
    "label": "B2",
    "kind": "unit",
    "key": "B2-18",
    "verified": true,
    "box": [
      1104,
      588,
      108,
      105
    ]
  },
  {
    "id": "res-18-B3",
    "floor": "18F",
    "label": "B3",
    "kind": "unit",
    "key": "B3-18",
    "verified": true,
    "box": [
      1326,
      589,
      97,
      104
    ]
  },
  {
    "id": "res-18-B5",
    "floor": "18F",
    "label": "B5",
    "kind": "unit",
    "key": "B5-18",
    "verified": true,
    "box": [
      1444,
      589,
      114,
      116
    ]
  },
  {
    "id": "res-18-B6",
    "floor": "18F",
    "label": "B6",
    "kind": "unit",
    "key": "B6-18",
    "verified": true,
    "box": [
      1444,
      726,
      114,
      114
    ]
  },
  {
    "id": "res-18-B7",
    "floor": "18F",
    "label": "B7",
    "kind": "unit",
    "key": "B7-18",
    "verified": true,
    "box": [
      1321,
      747,
      103,
      94
    ]
  },
  {
    "id": "res-18-B8",
    "floor": "18F",
    "label": "B8",
    "kind": "unit",
    "key": "B8-18",
    "verified": true,
    "box": [
      1104,
      747,
      112,
      95
    ]
  },
  {
    "id": "res-18-B9",
    "floor": "18F",
    "label": "B9",
    "kind": "unit",
    "key": "B9-18",
    "verified": true,
    "box": [
      969,
      726,
      115,
      114
    ]
  }
];
if(typeof module!=="undefined")module.exports=RESIDENTIAL_MARKS;
