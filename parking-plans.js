// Digitized car spaces from supplied B1/B2/B3 plans; viewBox 1888 x 1335.
const BASEMENT_MARKS = [
  {
    "id": "plan-B1-257",
    "floor": "B1",
    "label": "257",
    "kind": "parking",
    "key": "B1-257",
    "verified": true,
    "box": [
      333,
      925,
      40,
      75
    ]
  },
  {
    "id": "plan-B1-256",
    "floor": "B1",
    "label": "256",
    "kind": "parking",
    "key": "B1-256",
    "verified": true,
    "box": [
      389,
      925,
      33,
      75
    ]
  },
  {
    "id": "plan-B1-255",
    "floor": "B1",
    "label": "255",
    "kind": "parking",
    "key": "B1-255",
    "verified": true,
    "box": [
      423,
      925,
      33,
      75
    ]
  },
  {
    "id": "plan-B1-254",
    "floor": "B1",
    "label": "254",
    "kind": "parking",
    "key": "B1-254",
    "verified": true,
    "box": [
      457,
      925,
      33,
      75
    ]
  },
  {
    "id": "plan-B1-253",
    "floor": "B1",
    "label": "253",
    "kind": "parking",
    "key": "B1-253",
    "verified": true,
    "box": [
      513,
      925,
      36,
      75
    ]
  },
  {
    "id": "plan-B1-252",
    "floor": "B1",
    "label": "252",
    "kind": "parking",
    "key": "B1-252",
    "verified": true,
    "box": [
      574,
      925,
      32,
      75
    ]
  },
  {
    "id": "plan-B1-251",
    "floor": "B1",
    "label": "251",
    "kind": "parking",
    "key": "B1-251",
    "verified": true,
    "box": [
      608,
      925,
      33,
      75
    ]
  },
  {
    "id": "plan-B1-250",
    "floor": "B1",
    "label": "250",
    "kind": "parking",
    "key": "B1-250",
    "verified": true,
    "box": [
      642,
      925,
      33,
      75
    ]
  },
  {
    "id": "plan-B1-249",
    "floor": "B1",
    "label": "249",
    "kind": "parking",
    "key": "B1-249",
    "verified": true,
    "box": [
      691,
      925,
      34,
      75
    ]
  },
  {
    "id": "plan-B1-248",
    "floor": "B1",
    "label": "248",
    "kind": "parking",
    "key": "B1-248",
    "verified": true,
    "box": [
      728,
      925,
      34,
      75
    ]
  },
  {
    "id": "plan-B1-247",
    "floor": "B1",
    "label": "247",
    "kind": "parking",
    "key": "B1-247",
    "verified": true,
    "box": [
      765,
      925,
      34,
      75
    ]
  },
  {
    "id": "plan-B1-246",
    "floor": "B1",
    "label": "246",
    "kind": "parking",
    "key": "B1-246",
    "verified": true,
    "box": [
      815,
      925,
      33,
      75
    ]
  },
  {
    "id": "plan-B1-245",
    "floor": "B1",
    "label": "245",
    "kind": "parking",
    "key": "B1-245",
    "verified": true,
    "box": [
      850,
      925,
      33,
      75
    ]
  },
  {
    "id": "plan-B1-263",
    "floor": "B1",
    "label": "263",
    "kind": "parking",
    "key": "B1-263",
    "verified": true,
    "box": [
      240,
      559,
      79,
      32
    ]
  },
  {
    "id": "plan-B1-262",
    "floor": "B1",
    "label": "262",
    "kind": "parking",
    "key": "B1-262",
    "verified": true,
    "box": [
      240,
      592,
      79,
      32
    ]
  },
  {
    "id": "plan-B1-261",
    "floor": "B1",
    "label": "261",
    "kind": "parking",
    "key": "B1-261",
    "verified": true,
    "box": [
      240,
      626,
      79,
      32
    ]
  },
  {
    "id": "plan-B1-260",
    "floor": "B1",
    "label": "260",
    "kind": "parking",
    "key": "B1-260",
    "verified": true,
    "box": [
      240,
      805,
      79,
      32
    ]
  },
  {
    "id": "plan-B1-259",
    "floor": "B1",
    "label": "259",
    "kind": "parking",
    "key": "B1-259",
    "verified": true,
    "box": [
      240,
      838,
      79,
      32
    ]
  },
  {
    "id": "plan-B1-258",
    "floor": "B1",
    "label": "258",
    "kind": "parking",
    "key": "B1-258",
    "verified": true,
    "box": [
      240,
      871,
      79,
      32
    ]
  },
  {
    "id": "plan-B1-264",
    "floor": "B1",
    "label": "264",
    "kind": "parking",
    "key": "B1-264",
    "verified": true,
    "box": [
      406,
      559,
      78,
      32
    ]
  },
  {
    "id": "plan-B1-265",
    "floor": "B1",
    "label": "265",
    "kind": "parking",
    "key": "B1-265",
    "verified": true,
    "box": [
      406,
      592,
      78,
      32
    ]
  },
  {
    "id": "plan-B1-266",
    "floor": "B1",
    "label": "266",
    "kind": "parking",
    "key": "B1-266",
    "verified": true,
    "box": [
      406,
      626,
      78,
      32
    ]
  },
  {
    "id": "plan-B1-267",
    "floor": "B1",
    "label": "267",
    "kind": "parking",
    "key": "B1-267",
    "verified": true,
    "box": [
      406,
      684,
      78,
      32
    ]
  },
  {
    "id": "plan-B1-268",
    "floor": "B1",
    "label": "268",
    "kind": "parking",
    "key": "B1-268",
    "verified": true,
    "box": [
      406,
      719,
      78,
      32
    ]
  },
  {
    "id": "plan-B1-289",
    "floor": "B1",
    "label": "289",
    "kind": "parking",
    "key": "B1-289",
    "verified": true,
    "box": [
      696,
      523,
      33,
      75
    ]
  },
  {
    "id": "plan-B1-290",
    "floor": "B1",
    "label": "290",
    "kind": "parking",
    "key": "B1-290",
    "verified": true,
    "box": [
      731,
      523,
      33,
      75
    ]
  },
  {
    "id": "plan-B1-291",
    "floor": "B1",
    "label": "291",
    "kind": "parking",
    "key": "B1-291",
    "verified": true,
    "box": [
      767,
      523,
      33,
      75
    ]
  },
  {
    "id": "plan-B1-292",
    "floor": "B1",
    "label": "292",
    "kind": "parking",
    "key": "B1-292",
    "verified": true,
    "box": [
      818,
      523,
      33,
      75
    ]
  },
  {
    "id": "plan-B1-293",
    "floor": "B1",
    "label": "293",
    "kind": "parking",
    "key": "B1-293",
    "verified": true,
    "box": [
      854,
      523,
      33,
      75
    ]
  },
  {
    "id": "plan-B1-294",
    "floor": "B1",
    "label": "294",
    "kind": "parking",
    "key": "B1-294",
    "verified": true,
    "box": [
      889,
      523,
      33,
      75
    ]
  },
  {
    "id": "plan-B1-295",
    "floor": "B1",
    "label": "295",
    "kind": "parking",
    "key": "B1-295",
    "verified": true,
    "box": [
      937,
      523,
      33,
      75
    ]
  },
  {
    "id": "plan-B1-296",
    "floor": "B1",
    "label": "296",
    "kind": "parking",
    "key": "B1-296",
    "verified": true,
    "box": [
      973,
      523,
      33,
      75
    ]
  },
  {
    "id": "plan-B1-297",
    "floor": "B1",
    "label": "297",
    "kind": "parking",
    "key": "B1-297",
    "verified": true,
    "box": [
      1009,
      523,
      33,
      75
    ]
  },
  {
    "id": "plan-B1-288",
    "floor": "B1",
    "label": "288",
    "kind": "parking",
    "key": "B1-288",
    "verified": true,
    "box": [
      578,
      684,
      33,
      70
    ]
  },
  {
    "id": "plan-B1-287",
    "floor": "B1",
    "label": "287",
    "kind": "parking",
    "key": "B1-287",
    "verified": true,
    "box": [
      613,
      684,
      33,
      70
    ]
  },
  {
    "id": "plan-B1-286",
    "floor": "B1",
    "label": "286",
    "kind": "parking",
    "key": "B1-286",
    "verified": true,
    "box": [
      648,
      684,
      33,
      70
    ]
  },
  {
    "id": "plan-B1-285",
    "floor": "B1",
    "label": "285",
    "kind": "parking",
    "key": "B1-285",
    "verified": true,
    "box": [
      729,
      684,
      33,
      70
    ]
  },
  {
    "id": "plan-B1-284",
    "floor": "B1",
    "label": "284",
    "kind": "parking",
    "key": "B1-284",
    "verified": true,
    "box": [
      765,
      684,
      33,
      70
    ]
  },
  {
    "id": "plan-B1-283",
    "floor": "B1",
    "label": "283",
    "kind": "parking",
    "key": "B1-283",
    "verified": true,
    "box": [
      817,
      684,
      33,
      70
    ]
  },
  {
    "id": "plan-B1-282",
    "floor": "B1",
    "label": "282",
    "kind": "parking",
    "key": "B1-282",
    "verified": true,
    "box": [
      852,
      684,
      33,
      70
    ]
  },
  {
    "id": "plan-B1-281",
    "floor": "B1",
    "label": "281",
    "kind": "parking",
    "key": "B1-281",
    "verified": true,
    "box": [
      888,
      684,
      33,
      70
    ]
  },
  {
    "id": "plan-B1-280",
    "floor": "B1",
    "label": "280",
    "kind": "parking",
    "key": "B1-280",
    "verified": true,
    "box": [
      938,
      684,
      33,
      70
    ]
  },
  {
    "id": "plan-B1-279",
    "floor": "B1",
    "label": "279",
    "kind": "parking",
    "key": "B1-279",
    "verified": true,
    "box": [
      973,
      684,
      33,
      70
    ]
  },
  {
    "id": "plan-B1-278",
    "floor": "B1",
    "label": "278",
    "kind": "parking",
    "key": "B1-278",
    "verified": true,
    "box": [
      1009,
      684,
      33,
      70
    ]
  },
  {
    "id": "plan-B1-269",
    "floor": "B1",
    "label": "269",
    "kind": "parking",
    "key": "B1-269",
    "verified": true,
    "box": [
      694,
      762,
      33,
      74
    ]
  },
  {
    "id": "plan-B1-270",
    "floor": "B1",
    "label": "270",
    "kind": "parking",
    "key": "B1-270",
    "verified": true,
    "box": [
      729,
      762,
      33,
      74
    ]
  },
  {
    "id": "plan-B1-271",
    "floor": "B1",
    "label": "271",
    "kind": "parking",
    "key": "B1-271",
    "verified": true,
    "box": [
      765,
      762,
      33,
      74
    ]
  },
  {
    "id": "plan-B1-272",
    "floor": "B1",
    "label": "272",
    "kind": "parking",
    "key": "B1-272",
    "verified": true,
    "box": [
      816,
      762,
      33,
      74
    ]
  },
  {
    "id": "plan-B1-273",
    "floor": "B1",
    "label": "273",
    "kind": "parking",
    "key": "B1-273",
    "verified": true,
    "box": [
      852,
      762,
      33,
      74
    ]
  },
  {
    "id": "plan-B1-274",
    "floor": "B1",
    "label": "274",
    "kind": "parking",
    "key": "B1-274",
    "verified": true,
    "box": [
      888,
      762,
      33,
      74
    ]
  },
  {
    "id": "plan-B1-275",
    "floor": "B1",
    "label": "275",
    "kind": "parking",
    "key": "B1-275",
    "verified": true,
    "box": [
      938,
      762,
      33,
      74
    ]
  },
  {
    "id": "plan-B1-276",
    "floor": "B1",
    "label": "276",
    "kind": "parking",
    "key": "B1-276",
    "verified": true,
    "box": [
      973,
      762,
      33,
      74
    ]
  },
  {
    "id": "plan-B1-277",
    "floor": "B1",
    "label": "277",
    "kind": "parking",
    "key": "B1-277",
    "verified": true,
    "box": [
      1009,
      762,
      33,
      74
    ]
  },
  {
    "id": "plan-B1-303",
    "floor": "B1",
    "label": "303",
    "kind": "parking",
    "key": "B1-303",
    "verified": true,
    "box": [
      408,
      756,
      27,
      80
    ]
  },
  {
    "id": "plan-B1-302",
    "floor": "B1",
    "label": "302",
    "kind": "parking",
    "key": "B1-302",
    "verified": true,
    "box": [
      460,
      756,
      26,
      80
    ]
  },
  {
    "id": "plan-B1-311",
    "floor": "B1",
    "label": "311",
    "kind": "parking",
    "key": "B1-311",
    "verified": true,
    "box": [
      591,
      758,
      27,
      77
    ]
  },
  {
    "id": "plan-B1-310",
    "floor": "B1",
    "label": "310",
    "kind": "parking",
    "key": "B1-310",
    "verified": true,
    "box": [
      643,
      758,
      26,
      77
    ]
  },
  {
    "id": "plan-B1-299",
    "floor": "B1",
    "label": "299",
    "kind": "parking",
    "key": "B1-299",
    "verified": true,
    "box": [
      1128,
      677,
      29,
      33
    ]
  },
  {
    "id": "plan-B1-300",
    "floor": "B1",
    "label": "300",
    "kind": "parking",
    "key": "B1-300",
    "verified": true,
    "box": [
      1128,
      711,
      29,
      30
    ]
  },
  {
    "id": "plan-B1-301",
    "floor": "B1",
    "label": "301",
    "kind": "parking",
    "key": "B1-301",
    "verified": true,
    "box": [
      1128,
      743,
      29,
      30
    ]
  },
  {
    "id": "plan-B1-298",
    "floor": "B1",
    "label": "298",
    "kind": "parking",
    "key": "B1-298",
    "verified": true,
    "box": [
      1304,
      661,
      29,
      82
    ]
  },
  {
    "id": "plan-B1-309",
    "floor": "B1",
    "label": "309",
    "kind": "parking",
    "key": "B1-309",
    "verified": false,
    "box": [
      1255,
      661,
      29,
      82
    ]
  },
  {
    "id": "plan-B2-150",
    "floor": "B2",
    "label": "150",
    "kind": "parking",
    "key": "B2-150",
    "verified": true,
    "box": [
      330,
      935,
      37,
      77
    ]
  },
  {
    "id": "plan-B2-149",
    "floor": "B2",
    "label": "149",
    "kind": "parking",
    "key": "B2-149",
    "verified": true,
    "box": [
      382,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B2-148",
    "floor": "B2",
    "label": "148",
    "kind": "parking",
    "key": "B2-148",
    "verified": true,
    "box": [
      417,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B2-147",
    "floor": "B2",
    "label": "147",
    "kind": "parking",
    "key": "B2-147",
    "verified": true,
    "box": [
      452,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B2-146",
    "floor": "B2",
    "label": "146",
    "kind": "parking",
    "key": "B2-146",
    "verified": true,
    "box": [
      510,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B2-145",
    "floor": "B2",
    "label": "145",
    "kind": "parking",
    "key": "B2-145",
    "verified": true,
    "box": [
      572,
      935,
      34,
      77
    ]
  },
  {
    "id": "plan-B2-144",
    "floor": "B2",
    "label": "144",
    "kind": "parking",
    "key": "B2-144",
    "verified": true,
    "box": [
      606,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B2-143",
    "floor": "B2",
    "label": "143",
    "kind": "parking",
    "key": "B2-143",
    "verified": true,
    "box": [
      641,
      935,
      36,
      77
    ]
  },
  {
    "id": "plan-B2-142",
    "floor": "B2",
    "label": "142",
    "kind": "parking",
    "key": "B2-142",
    "verified": true,
    "box": [
      690,
      935,
      36,
      77
    ]
  },
  {
    "id": "plan-B2-141",
    "floor": "B2",
    "label": "141",
    "kind": "parking",
    "key": "B2-141",
    "verified": true,
    "box": [
      726,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B2-140",
    "floor": "B2",
    "label": "140",
    "kind": "parking",
    "key": "B2-140",
    "verified": true,
    "box": [
      761,
      935,
      36,
      77
    ]
  },
  {
    "id": "plan-B2-139",
    "floor": "B2",
    "label": "139",
    "kind": "parking",
    "key": "B2-139",
    "verified": true,
    "box": [
      813,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B2-138",
    "floor": "B2",
    "label": "138",
    "kind": "parking",
    "key": "B2-138",
    "verified": true,
    "box": [
      848,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B2-137",
    "floor": "B2",
    "label": "137",
    "kind": "parking",
    "key": "B2-137",
    "verified": true,
    "box": [
      883,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B2-136",
    "floor": "B2",
    "label": "136",
    "kind": "parking",
    "key": "B2-136",
    "verified": true,
    "box": [
      938,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B2-135",
    "floor": "B2",
    "label": "135",
    "kind": "parking",
    "key": "B2-135",
    "verified": true,
    "box": [
      973,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B2-134",
    "floor": "B2",
    "label": "134",
    "kind": "parking",
    "key": "B2-134",
    "verified": true,
    "box": [
      1008,
      935,
      36,
      77
    ]
  },
  {
    "id": "plan-B2-133",
    "floor": "B2",
    "label": "133",
    "kind": "parking",
    "key": "B2-133",
    "verified": true,
    "box": [
      1064,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B2-132",
    "floor": "B2",
    "label": "132",
    "kind": "parking",
    "key": "B2-132",
    "verified": true,
    "box": [
      1099,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B2-131",
    "floor": "B2",
    "label": "131",
    "kind": "parking",
    "key": "B2-131",
    "verified": true,
    "box": [
      1134,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B2-130",
    "floor": "B2",
    "label": "130",
    "kind": "parking",
    "key": "B2-130",
    "verified": true,
    "box": [
      1184,
      935,
      36,
      77
    ]
  },
  {
    "id": "plan-B2-129",
    "floor": "B2",
    "label": "129",
    "kind": "parking",
    "key": "B2-129",
    "verified": true,
    "box": [
      1247,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B2-128",
    "floor": "B2",
    "label": "128",
    "kind": "parking",
    "key": "B2-128",
    "verified": true,
    "box": [
      1282,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B2-127",
    "floor": "B2",
    "label": "127",
    "kind": "parking",
    "key": "B2-127",
    "verified": true,
    "box": [
      1317,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B2-126",
    "floor": "B2",
    "label": "126",
    "kind": "parking",
    "key": "B2-126",
    "verified": true,
    "box": [
      1366,
      935,
      34,
      77
    ]
  },
  {
    "id": "plan-B2-125",
    "floor": "B2",
    "label": "125",
    "kind": "parking",
    "key": "B2-125",
    "verified": true,
    "box": [
      1400,
      935,
      34,
      77
    ]
  },
  {
    "id": "plan-B2-124",
    "floor": "B2",
    "label": "124",
    "kind": "parking",
    "key": "B2-124",
    "verified": true,
    "box": [
      1434,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B2-123",
    "floor": "B2",
    "label": "123",
    "kind": "parking",
    "key": "B2-123",
    "verified": true,
    "box": [
      1486,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B2-122",
    "floor": "B2",
    "label": "122",
    "kind": "parking",
    "key": "B2-122",
    "verified": true,
    "box": [
      1521,
      935,
      36,
      77
    ]
  },
  {
    "id": "plan-B2-156",
    "floor": "B2",
    "label": "156",
    "kind": "parking",
    "key": "B2-156",
    "verified": true,
    "box": [
      233,
      563,
      79,
      34
    ]
  },
  {
    "id": "plan-B2-155",
    "floor": "B2",
    "label": "155",
    "kind": "parking",
    "key": "B2-155",
    "verified": true,
    "box": [
      233,
      598,
      79,
      34
    ]
  },
  {
    "id": "plan-B2-154",
    "floor": "B2",
    "label": "154",
    "kind": "parking",
    "key": "B2-154",
    "verified": true,
    "box": [
      233,
      632,
      79,
      34
    ]
  },
  {
    "id": "plan-B2-153",
    "floor": "B2",
    "label": "153",
    "kind": "parking",
    "key": "B2-153",
    "verified": true,
    "box": [
      234,
      813,
      79,
      34
    ]
  },
  {
    "id": "plan-B2-152",
    "floor": "B2",
    "label": "152",
    "kind": "parking",
    "key": "B2-152",
    "verified": true,
    "box": [
      234,
      848,
      79,
      34
    ]
  },
  {
    "id": "plan-B2-151",
    "floor": "B2",
    "label": "151",
    "kind": "parking",
    "key": "B2-151",
    "verified": true,
    "box": [
      234,
      882,
      79,
      34
    ]
  },
  {
    "id": "plan-B2-157",
    "floor": "B2",
    "label": "157",
    "kind": "parking",
    "key": "B2-157",
    "verified": true,
    "box": [
      415,
      563,
      78,
      34
    ]
  },
  {
    "id": "plan-B2-158",
    "floor": "B2",
    "label": "158",
    "kind": "parking",
    "key": "B2-158",
    "verified": true,
    "box": [
      415,
      598,
      78,
      34
    ]
  },
  {
    "id": "plan-B2-159",
    "floor": "B2",
    "label": "159",
    "kind": "parking",
    "key": "B2-159",
    "verified": true,
    "box": [
      415,
      632,
      78,
      34
    ]
  },
  {
    "id": "plan-B2-203",
    "floor": "B2",
    "label": "203",
    "kind": "parking",
    "key": "B2-203",
    "verified": true,
    "box": [
      494,
      563,
      78,
      34
    ]
  },
  {
    "id": "plan-B2-202",
    "floor": "B2",
    "label": "202",
    "kind": "parking",
    "key": "B2-202",
    "verified": true,
    "box": [
      494,
      598,
      78,
      34
    ]
  },
  {
    "id": "plan-B2-201",
    "floor": "B2",
    "label": "201",
    "kind": "parking",
    "key": "B2-201",
    "verified": true,
    "box": [
      494,
      632,
      78,
      34
    ]
  },
  {
    "id": "plan-B2-160",
    "floor": "B2",
    "label": "160",
    "kind": "parking",
    "key": "B2-160",
    "verified": true,
    "box": [
      406,
      694,
      77,
      33
    ]
  },
  {
    "id": "plan-B2-161",
    "floor": "B2",
    "label": "161",
    "kind": "parking",
    "key": "B2-161",
    "verified": true,
    "box": [
      406,
      729,
      77,
      33
    ]
  },
  {
    "id": "plan-B2-162",
    "floor": "B2",
    "label": "162",
    "kind": "parking",
    "key": "B2-162",
    "verified": true,
    "box": [
      410,
      764,
      34,
      76
    ]
  },
  {
    "id": "plan-B2-163",
    "floor": "B2",
    "label": "163",
    "kind": "parking",
    "key": "B2-163",
    "verified": true,
    "box": [
      446,
      764,
      34,
      76
    ]
  },
  {
    "id": "plan-B2-164",
    "floor": "B2",
    "label": "164",
    "kind": "parking",
    "key": "B2-164",
    "verified": true,
    "box": [
      588,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-165",
    "floor": "B2",
    "label": "165",
    "kind": "parking",
    "key": "B2-165",
    "verified": true,
    "box": [
      623,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-166",
    "floor": "B2",
    "label": "166",
    "kind": "parking",
    "key": "B2-166",
    "verified": true,
    "box": [
      690,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-167",
    "floor": "B2",
    "label": "167",
    "kind": "parking",
    "key": "B2-167",
    "verified": true,
    "box": [
      725,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-168",
    "floor": "B2",
    "label": "168",
    "kind": "parking",
    "key": "B2-168",
    "verified": true,
    "box": [
      761,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-169",
    "floor": "B2",
    "label": "169",
    "kind": "parking",
    "key": "B2-169",
    "verified": true,
    "box": [
      813,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-170",
    "floor": "B2",
    "label": "170",
    "kind": "parking",
    "key": "B2-170",
    "verified": true,
    "box": [
      849,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-171",
    "floor": "B2",
    "label": "171",
    "kind": "parking",
    "key": "B2-171",
    "verified": true,
    "box": [
      884,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-172",
    "floor": "B2",
    "label": "172",
    "kind": "parking",
    "key": "B2-172",
    "verified": true,
    "box": [
      938,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-173",
    "floor": "B2",
    "label": "173",
    "kind": "parking",
    "key": "B2-173",
    "verified": true,
    "box": [
      974,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-174",
    "floor": "B2",
    "label": "174",
    "kind": "parking",
    "key": "B2-174",
    "verified": true,
    "box": [
      1009,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-175",
    "floor": "B2",
    "label": "175",
    "kind": "parking",
    "key": "B2-175",
    "verified": true,
    "box": [
      1065,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-176",
    "floor": "B2",
    "label": "176",
    "kind": "parking",
    "key": "B2-176",
    "verified": true,
    "box": [
      1100,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-177",
    "floor": "B2",
    "label": "177",
    "kind": "parking",
    "key": "B2-177",
    "verified": true,
    "box": [
      1277,
      750,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-178",
    "floor": "B2",
    "label": "178",
    "kind": "parking",
    "key": "B2-178",
    "verified": true,
    "box": [
      1313,
      750,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-179",
    "floor": "B2",
    "label": "179",
    "kind": "parking",
    "key": "B2-179",
    "verified": true,
    "box": [
      1364,
      750,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-180",
    "floor": "B2",
    "label": "180",
    "kind": "parking",
    "key": "B2-180",
    "verified": true,
    "box": [
      1400,
      750,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-181",
    "floor": "B2",
    "label": "181",
    "kind": "parking",
    "key": "B2-181",
    "verified": true,
    "box": [
      1436,
      750,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-186",
    "floor": "B2",
    "label": "186",
    "kind": "parking",
    "key": "B2-186",
    "verified": true,
    "box": [
      1277,
      671,
      34,
      76
    ]
  },
  {
    "id": "plan-B2-185",
    "floor": "B2",
    "label": "185",
    "kind": "parking",
    "key": "B2-185",
    "verified": true,
    "box": [
      1313,
      671,
      34,
      76
    ]
  },
  {
    "id": "plan-B2-184",
    "floor": "B2",
    "label": "184",
    "kind": "parking",
    "key": "B2-184",
    "verified": true,
    "box": [
      1364,
      671,
      34,
      76
    ]
  },
  {
    "id": "plan-B2-183",
    "floor": "B2",
    "label": "183",
    "kind": "parking",
    "key": "B2-183",
    "verified": true,
    "box": [
      1400,
      671,
      34,
      76
    ]
  },
  {
    "id": "plan-B2-182",
    "floor": "B2",
    "label": "182",
    "kind": "parking",
    "key": "B2-182",
    "verified": true,
    "box": [
      1436,
      671,
      34,
      76
    ]
  },
  {
    "id": "plan-B2-200",
    "floor": "B2",
    "label": "200",
    "kind": "parking",
    "key": "B2-200",
    "verified": true,
    "box": [
      575,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-199",
    "floor": "B2",
    "label": "199",
    "kind": "parking",
    "key": "B2-199",
    "verified": true,
    "box": [
      609,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-198",
    "floor": "B2",
    "label": "198",
    "kind": "parking",
    "key": "B2-198",
    "verified": true,
    "box": [
      644,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-197",
    "floor": "B2",
    "label": "197",
    "kind": "parking",
    "key": "B2-197",
    "verified": true,
    "box": [
      726,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-196",
    "floor": "B2",
    "label": "196",
    "kind": "parking",
    "key": "B2-196",
    "verified": true,
    "box": [
      762,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-195",
    "floor": "B2",
    "label": "195",
    "kind": "parking",
    "key": "B2-195",
    "verified": true,
    "box": [
      813,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-194",
    "floor": "B2",
    "label": "194",
    "kind": "parking",
    "key": "B2-194",
    "verified": true,
    "box": [
      849,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-193",
    "floor": "B2",
    "label": "193",
    "kind": "parking",
    "key": "B2-193",
    "verified": true,
    "box": [
      884,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-192",
    "floor": "B2",
    "label": "192",
    "kind": "parking",
    "key": "B2-192",
    "verified": true,
    "box": [
      937,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-191",
    "floor": "B2",
    "label": "191",
    "kind": "parking",
    "key": "B2-191",
    "verified": true,
    "box": [
      973,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-190",
    "floor": "B2",
    "label": "190",
    "kind": "parking",
    "key": "B2-190",
    "verified": true,
    "box": [
      1008,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-189",
    "floor": "B2",
    "label": "189",
    "kind": "parking",
    "key": "B2-189",
    "verified": true,
    "box": [
      1059,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-188",
    "floor": "B2",
    "label": "188",
    "kind": "parking",
    "key": "B2-188",
    "verified": true,
    "box": [
      1094,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-187",
    "floor": "B2",
    "label": "187",
    "kind": "parking",
    "key": "B2-187",
    "verified": true,
    "box": [
      1130,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B2-204",
    "floor": "B2",
    "label": "204",
    "kind": "parking",
    "key": "B2-204",
    "verified": true,
    "box": [
      694,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B2-205",
    "floor": "B2",
    "label": "205",
    "kind": "parking",
    "key": "B2-205",
    "verified": true,
    "box": [
      729,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B2-206",
    "floor": "B2",
    "label": "206",
    "kind": "parking",
    "key": "B2-206",
    "verified": true,
    "box": [
      765,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B2-207",
    "floor": "B2",
    "label": "207",
    "kind": "parking",
    "key": "B2-207",
    "verified": true,
    "box": [
      813,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B2-208",
    "floor": "B2",
    "label": "208",
    "kind": "parking",
    "key": "B2-208",
    "verified": true,
    "box": [
      849,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B2-209",
    "floor": "B2",
    "label": "209",
    "kind": "parking",
    "key": "B2-209",
    "verified": true,
    "box": [
      884,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B2-210",
    "floor": "B2",
    "label": "210",
    "kind": "parking",
    "key": "B2-210",
    "verified": true,
    "box": [
      936,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B2-211",
    "floor": "B2",
    "label": "211",
    "kind": "parking",
    "key": "B2-211",
    "verified": true,
    "box": [
      972,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B2-212",
    "floor": "B2",
    "label": "212",
    "kind": "parking",
    "key": "B2-212",
    "verified": true,
    "box": [
      1008,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B2-213",
    "floor": "B2",
    "label": "213",
    "kind": "parking",
    "key": "B2-213",
    "verified": true,
    "box": [
      1058,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B2-214",
    "floor": "B2",
    "label": "214",
    "kind": "parking",
    "key": "B2-214",
    "verified": true,
    "box": [
      1094,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B2-215",
    "floor": "B2",
    "label": "215",
    "kind": "parking",
    "key": "B2-215",
    "verified": true,
    "box": [
      1129,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B2-220",
    "floor": "B2",
    "label": "220",
    "kind": "parking",
    "key": "B2-220",
    "verified": true,
    "box": [
      1152,
      379,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-219",
    "floor": "B2",
    "label": "219",
    "kind": "parking",
    "key": "B2-219",
    "verified": true,
    "box": [
      1152,
      414,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-218",
    "floor": "B2",
    "label": "218",
    "kind": "parking",
    "key": "B2-218",
    "verified": true,
    "box": [
      1152,
      458,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-217",
    "floor": "B2",
    "label": "217",
    "kind": "parking",
    "key": "B2-217",
    "verified": true,
    "box": [
      1152,
      493,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-216",
    "floor": "B2",
    "label": "216",
    "kind": "parking",
    "key": "B2-216",
    "verified": true,
    "box": [
      1159,
      545,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-221",
    "floor": "B2",
    "label": "221",
    "kind": "parking",
    "key": "B2-221",
    "verified": true,
    "box": [
      1325,
      381,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-222",
    "floor": "B2",
    "label": "222",
    "kind": "parking",
    "key": "B2-222",
    "verified": true,
    "box": [
      1325,
      416,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-223",
    "floor": "B2",
    "label": "223",
    "kind": "parking",
    "key": "B2-223",
    "verified": true,
    "box": [
      1325,
      463,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-224",
    "floor": "B2",
    "label": "224",
    "kind": "parking",
    "key": "B2-224",
    "verified": true,
    "box": [
      1325,
      498,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-228",
    "floor": "B2",
    "label": "228",
    "kind": "parking",
    "key": "B2-228",
    "verified": true,
    "box": [
      1403,
      379,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-227",
    "floor": "B2",
    "label": "227",
    "kind": "parking",
    "key": "B2-227",
    "verified": true,
    "box": [
      1403,
      414,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-226",
    "floor": "B2",
    "label": "226",
    "kind": "parking",
    "key": "B2-226",
    "verified": true,
    "box": [
      1403,
      463,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-225",
    "floor": "B2",
    "label": "225",
    "kind": "parking",
    "key": "B2-225",
    "verified": true,
    "box": [
      1403,
      498,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-232",
    "floor": "B2",
    "label": "232",
    "kind": "parking",
    "key": "B2-232",
    "verified": true,
    "box": [
      1578,
      378,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-233",
    "floor": "B2",
    "label": "233",
    "kind": "parking",
    "key": "B2-233",
    "verified": true,
    "box": [
      1578,
      414,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-234",
    "floor": "B2",
    "label": "234",
    "kind": "parking",
    "key": "B2-234",
    "verified": true,
    "box": [
      1578,
      464,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-235",
    "floor": "B2",
    "label": "235",
    "kind": "parking",
    "key": "B2-235",
    "verified": true,
    "box": [
      1578,
      500,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-236",
    "floor": "B2",
    "label": "236",
    "kind": "parking",
    "key": "B2-236",
    "verified": true,
    "box": [
      1578,
      560,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-237",
    "floor": "B2",
    "label": "237",
    "kind": "parking",
    "key": "B2-237",
    "verified": true,
    "box": [
      1578,
      596,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-238",
    "floor": "B2",
    "label": "238",
    "kind": "parking",
    "key": "B2-238",
    "verified": true,
    "box": [
      1578,
      632,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-239",
    "floor": "B2",
    "label": "239",
    "kind": "parking",
    "key": "B2-239",
    "verified": true,
    "box": [
      1578,
      680,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-240",
    "floor": "B2",
    "label": "240",
    "kind": "parking",
    "key": "B2-240",
    "verified": true,
    "box": [
      1578,
      716,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-241",
    "floor": "B2",
    "label": "241",
    "kind": "parking",
    "key": "B2-241",
    "verified": true,
    "box": [
      1578,
      770,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-242",
    "floor": "B2",
    "label": "242",
    "kind": "parking",
    "key": "B2-242",
    "verified": true,
    "box": [
      1578,
      806,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-243",
    "floor": "B2",
    "label": "243",
    "kind": "parking",
    "key": "B2-243",
    "verified": true,
    "box": [
      1578,
      854,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-244",
    "floor": "B2",
    "label": "244",
    "kind": "parking",
    "key": "B2-244",
    "verified": true,
    "box": [
      1578,
      890,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-229",
    "floor": "B2",
    "label": "229",
    "kind": "parking",
    "key": "B2-229",
    "verified": true,
    "box": [
      1578,
      255,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-230",
    "floor": "B2",
    "label": "230",
    "kind": "parking",
    "key": "B2-230",
    "verified": true,
    "box": [
      1578,
      291,
      77,
      34
    ]
  },
  {
    "id": "plan-B2-231",
    "floor": "B2",
    "label": "231",
    "kind": "parking",
    "key": "B2-231",
    "verified": true,
    "box": [
      1578,
      327,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-29",
    "floor": "B3",
    "label": "29",
    "kind": "parking",
    "key": "B3-29",
    "verified": true,
    "box": [
      330,
      935,
      37,
      77
    ]
  },
  {
    "id": "plan-B3-28",
    "floor": "B3",
    "label": "28",
    "kind": "parking",
    "key": "B3-28",
    "verified": true,
    "box": [
      382,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B3-27",
    "floor": "B3",
    "label": "27",
    "kind": "parking",
    "key": "B3-27",
    "verified": true,
    "box": [
      417,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B3-26",
    "floor": "B3",
    "label": "26",
    "kind": "parking",
    "key": "B3-26",
    "verified": true,
    "box": [
      452,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B3-25",
    "floor": "B3",
    "label": "25",
    "kind": "parking",
    "key": "B3-25",
    "verified": true,
    "box": [
      510,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B3-24",
    "floor": "B3",
    "label": "24",
    "kind": "parking",
    "key": "B3-24",
    "verified": true,
    "box": [
      572,
      935,
      34,
      77
    ]
  },
  {
    "id": "plan-B3-23",
    "floor": "B3",
    "label": "23",
    "kind": "parking",
    "key": "B3-23",
    "verified": true,
    "box": [
      606,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B3-22",
    "floor": "B3",
    "label": "22",
    "kind": "parking",
    "key": "B3-22",
    "verified": true,
    "box": [
      641,
      935,
      36,
      77
    ]
  },
  {
    "id": "plan-B3-21",
    "floor": "B3",
    "label": "21",
    "kind": "parking",
    "key": "B3-21",
    "verified": true,
    "box": [
      690,
      935,
      36,
      77
    ]
  },
  {
    "id": "plan-B3-20",
    "floor": "B3",
    "label": "20",
    "kind": "parking",
    "key": "B3-20",
    "verified": true,
    "box": [
      726,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B3-19",
    "floor": "B3",
    "label": "19",
    "kind": "parking",
    "key": "B3-19",
    "verified": true,
    "box": [
      761,
      935,
      36,
      77
    ]
  },
  {
    "id": "plan-B3-18",
    "floor": "B3",
    "label": "18",
    "kind": "parking",
    "key": "B3-18",
    "verified": true,
    "box": [
      813,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B3-17",
    "floor": "B3",
    "label": "17",
    "kind": "parking",
    "key": "B3-17",
    "verified": true,
    "box": [
      848,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B3-16",
    "floor": "B3",
    "label": "16",
    "kind": "parking",
    "key": "B3-16",
    "verified": true,
    "box": [
      883,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B3-15",
    "floor": "B3",
    "label": "15",
    "kind": "parking",
    "key": "B3-15",
    "verified": true,
    "box": [
      938,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B3-14",
    "floor": "B3",
    "label": "14",
    "kind": "parking",
    "key": "B3-14",
    "verified": true,
    "box": [
      973,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B3-13",
    "floor": "B3",
    "label": "13",
    "kind": "parking",
    "key": "B3-13",
    "verified": true,
    "box": [
      1008,
      935,
      36,
      77
    ]
  },
  {
    "id": "plan-B3-12",
    "floor": "B3",
    "label": "12",
    "kind": "parking",
    "key": "B3-12",
    "verified": true,
    "box": [
      1064,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B3-11",
    "floor": "B3",
    "label": "11",
    "kind": "parking",
    "key": "B3-11",
    "verified": true,
    "box": [
      1099,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B3-10",
    "floor": "B3",
    "label": "10",
    "kind": "parking",
    "key": "B3-10",
    "verified": true,
    "box": [
      1134,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B3-9",
    "floor": "B3",
    "label": "9",
    "kind": "parking",
    "key": "B3-9",
    "verified": true,
    "box": [
      1184,
      935,
      36,
      77
    ]
  },
  {
    "id": "plan-B3-8",
    "floor": "B3",
    "label": "8",
    "kind": "parking",
    "key": "B3-8",
    "verified": true,
    "box": [
      1247,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B3-7",
    "floor": "B3",
    "label": "7",
    "kind": "parking",
    "key": "B3-7",
    "verified": true,
    "box": [
      1282,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B3-6",
    "floor": "B3",
    "label": "6",
    "kind": "parking",
    "key": "B3-6",
    "verified": true,
    "box": [
      1317,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B3-5",
    "floor": "B3",
    "label": "5",
    "kind": "parking",
    "key": "B3-5",
    "verified": true,
    "box": [
      1366,
      935,
      34,
      77
    ]
  },
  {
    "id": "plan-B3-4",
    "floor": "B3",
    "label": "4",
    "kind": "parking",
    "key": "B3-4",
    "verified": true,
    "box": [
      1400,
      935,
      34,
      77
    ]
  },
  {
    "id": "plan-B3-3",
    "floor": "B3",
    "label": "3",
    "kind": "parking",
    "key": "B3-3",
    "verified": true,
    "box": [
      1434,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B3-2",
    "floor": "B3",
    "label": "2",
    "kind": "parking",
    "key": "B3-2",
    "verified": true,
    "box": [
      1486,
      935,
      35,
      77
    ]
  },
  {
    "id": "plan-B3-1",
    "floor": "B3",
    "label": "1",
    "kind": "parking",
    "key": "B3-1",
    "verified": true,
    "box": [
      1521,
      935,
      36,
      77
    ]
  },
  {
    "id": "plan-B3-35",
    "floor": "B3",
    "label": "35",
    "kind": "parking",
    "key": "B3-35",
    "verified": true,
    "box": [
      233,
      563,
      79,
      34
    ]
  },
  {
    "id": "plan-B3-34",
    "floor": "B3",
    "label": "34",
    "kind": "parking",
    "key": "B3-34",
    "verified": true,
    "box": [
      233,
      598,
      79,
      34
    ]
  },
  {
    "id": "plan-B3-33",
    "floor": "B3",
    "label": "33",
    "kind": "parking",
    "key": "B3-33",
    "verified": true,
    "box": [
      233,
      632,
      79,
      34
    ]
  },
  {
    "id": "plan-B3-32",
    "floor": "B3",
    "label": "32",
    "kind": "parking",
    "key": "B3-32",
    "verified": true,
    "box": [
      234,
      813,
      79,
      34
    ]
  },
  {
    "id": "plan-B3-31",
    "floor": "B3",
    "label": "31",
    "kind": "parking",
    "key": "B3-31",
    "verified": true,
    "box": [
      234,
      848,
      79,
      34
    ]
  },
  {
    "id": "plan-B3-30",
    "floor": "B3",
    "label": "30",
    "kind": "parking",
    "key": "B3-30",
    "verified": true,
    "box": [
      234,
      882,
      79,
      34
    ]
  },
  {
    "id": "plan-B3-36",
    "floor": "B3",
    "label": "36",
    "kind": "parking",
    "key": "B3-36",
    "verified": true,
    "box": [
      415,
      563,
      78,
      34
    ]
  },
  {
    "id": "plan-B3-37",
    "floor": "B3",
    "label": "37",
    "kind": "parking",
    "key": "B3-37",
    "verified": true,
    "box": [
      415,
      598,
      78,
      34
    ]
  },
  {
    "id": "plan-B3-38",
    "floor": "B3",
    "label": "38",
    "kind": "parking",
    "key": "B3-38",
    "verified": true,
    "box": [
      415,
      632,
      78,
      34
    ]
  },
  {
    "id": "plan-B3-83",
    "floor": "B3",
    "label": "83",
    "kind": "parking",
    "key": "B3-83",
    "verified": true,
    "box": [
      494,
      563,
      78,
      34
    ]
  },
  {
    "id": "plan-B3-82",
    "floor": "B3",
    "label": "82",
    "kind": "parking",
    "key": "B3-82",
    "verified": true,
    "box": [
      494,
      598,
      78,
      34
    ]
  },
  {
    "id": "plan-B3-81",
    "floor": "B3",
    "label": "81",
    "kind": "parking",
    "key": "B3-81",
    "verified": true,
    "box": [
      494,
      632,
      78,
      34
    ]
  },
  {
    "id": "plan-B3-39",
    "floor": "B3",
    "label": "39",
    "kind": "parking",
    "key": "B3-39",
    "verified": true,
    "box": [
      406,
      694,
      77,
      33
    ]
  },
  {
    "id": "plan-B3-40",
    "floor": "B3",
    "label": "40",
    "kind": "parking",
    "key": "B3-40",
    "verified": true,
    "box": [
      406,
      729,
      77,
      33
    ]
  },
  {
    "id": "plan-B3-41",
    "floor": "B3",
    "label": "41",
    "kind": "parking",
    "key": "B3-41",
    "verified": true,
    "box": [
      410,
      764,
      34,
      76
    ]
  },
  {
    "id": "plan-B3-42",
    "floor": "B3",
    "label": "42",
    "kind": "parking",
    "key": "B3-42",
    "verified": true,
    "box": [
      446,
      764,
      34,
      76
    ]
  },
  {
    "id": "plan-B3-43",
    "floor": "B3",
    "label": "43",
    "kind": "parking",
    "key": "B3-43",
    "verified": true,
    "box": [
      588,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-44",
    "floor": "B3",
    "label": "44",
    "kind": "parking",
    "key": "B3-44",
    "verified": true,
    "box": [
      623,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-45",
    "floor": "B3",
    "label": "45",
    "kind": "parking",
    "key": "B3-45",
    "verified": true,
    "box": [
      690,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-46",
    "floor": "B3",
    "label": "46",
    "kind": "parking",
    "key": "B3-46",
    "verified": true,
    "box": [
      725,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-47",
    "floor": "B3",
    "label": "47",
    "kind": "parking",
    "key": "B3-47",
    "verified": true,
    "box": [
      761,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-48",
    "floor": "B3",
    "label": "48",
    "kind": "parking",
    "key": "B3-48",
    "verified": true,
    "box": [
      813,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-49",
    "floor": "B3",
    "label": "49",
    "kind": "parking",
    "key": "B3-49",
    "verified": true,
    "box": [
      849,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-50",
    "floor": "B3",
    "label": "50",
    "kind": "parking",
    "key": "B3-50",
    "verified": true,
    "box": [
      884,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-51",
    "floor": "B3",
    "label": "51",
    "kind": "parking",
    "key": "B3-51",
    "verified": true,
    "box": [
      938,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-52",
    "floor": "B3",
    "label": "52",
    "kind": "parking",
    "key": "B3-52",
    "verified": true,
    "box": [
      974,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-53",
    "floor": "B3",
    "label": "53",
    "kind": "parking",
    "key": "B3-53",
    "verified": true,
    "box": [
      1009,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-54",
    "floor": "B3",
    "label": "54",
    "kind": "parking",
    "key": "B3-54",
    "verified": true,
    "box": [
      1065,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-55",
    "floor": "B3",
    "label": "55",
    "kind": "parking",
    "key": "B3-55",
    "verified": true,
    "box": [
      1100,
      772,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-56",
    "floor": "B3",
    "label": "56",
    "kind": "parking",
    "key": "B3-56",
    "verified": true,
    "box": [
      1277,
      750,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-57",
    "floor": "B3",
    "label": "57",
    "kind": "parking",
    "key": "B3-57",
    "verified": true,
    "box": [
      1313,
      750,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-58",
    "floor": "B3",
    "label": "58",
    "kind": "parking",
    "key": "B3-58",
    "verified": true,
    "box": [
      1364,
      750,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-59",
    "floor": "B3",
    "label": "59",
    "kind": "parking",
    "key": "B3-59",
    "verified": true,
    "box": [
      1400,
      750,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-60",
    "floor": "B3",
    "label": "60",
    "kind": "parking",
    "key": "B3-60",
    "verified": true,
    "box": [
      1436,
      750,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-65",
    "floor": "B3",
    "label": "65",
    "kind": "parking",
    "key": "B3-65",
    "verified": true,
    "box": [
      1277,
      671,
      34,
      76
    ]
  },
  {
    "id": "plan-B3-64",
    "floor": "B3",
    "label": "64",
    "kind": "parking",
    "key": "B3-64",
    "verified": true,
    "box": [
      1313,
      671,
      34,
      76
    ]
  },
  {
    "id": "plan-B3-63",
    "floor": "B3",
    "label": "63",
    "kind": "parking",
    "key": "B3-63",
    "verified": true,
    "box": [
      1364,
      671,
      34,
      76
    ]
  },
  {
    "id": "plan-B3-62",
    "floor": "B3",
    "label": "62",
    "kind": "parking",
    "key": "B3-62",
    "verified": true,
    "box": [
      1400,
      671,
      34,
      76
    ]
  },
  {
    "id": "plan-B3-61",
    "floor": "B3",
    "label": "61",
    "kind": "parking",
    "key": "B3-61",
    "verified": true,
    "box": [
      1436,
      671,
      34,
      76
    ]
  },
  {
    "id": "plan-B3-80",
    "floor": "B3",
    "label": "80",
    "kind": "parking",
    "key": "B3-80",
    "verified": true,
    "box": [
      575,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-79",
    "floor": "B3",
    "label": "79",
    "kind": "parking",
    "key": "B3-79",
    "verified": true,
    "box": [
      609,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-78",
    "floor": "B3",
    "label": "78",
    "kind": "parking",
    "key": "B3-78",
    "verified": true,
    "box": [
      644,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-77",
    "floor": "B3",
    "label": "77",
    "kind": "parking",
    "key": "B3-77",
    "verified": true,
    "box": [
      690,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-76",
    "floor": "B3",
    "label": "76",
    "kind": "parking",
    "key": "B3-76",
    "verified": true,
    "box": [
      726,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-75",
    "floor": "B3",
    "label": "75",
    "kind": "parking",
    "key": "B3-75",
    "verified": true,
    "box": [
      762,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-74",
    "floor": "B3",
    "label": "74",
    "kind": "parking",
    "key": "B3-74",
    "verified": true,
    "box": [
      813,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-73",
    "floor": "B3",
    "label": "73",
    "kind": "parking",
    "key": "B3-73",
    "verified": true,
    "box": [
      849,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-72",
    "floor": "B3",
    "label": "72",
    "kind": "parking",
    "key": "B3-72",
    "verified": true,
    "box": [
      884,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-71",
    "floor": "B3",
    "label": "71",
    "kind": "parking",
    "key": "B3-71",
    "verified": true,
    "box": [
      937,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-70",
    "floor": "B3",
    "label": "70",
    "kind": "parking",
    "key": "B3-70",
    "verified": true,
    "box": [
      973,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-69",
    "floor": "B3",
    "label": "69",
    "kind": "parking",
    "key": "B3-69",
    "verified": true,
    "box": [
      1008,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-68",
    "floor": "B3",
    "label": "68",
    "kind": "parking",
    "key": "B3-68",
    "verified": true,
    "box": [
      1059,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-67",
    "floor": "B3",
    "label": "67",
    "kind": "parking",
    "key": "B3-67",
    "verified": true,
    "box": [
      1094,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-66",
    "floor": "B3",
    "label": "66",
    "kind": "parking",
    "key": "B3-66",
    "verified": true,
    "box": [
      1130,
      694,
      34,
      75
    ]
  },
  {
    "id": "plan-B3-84",
    "floor": "B3",
    "label": "84",
    "kind": "parking",
    "key": "B3-84",
    "verified": true,
    "box": [
      694,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B3-85",
    "floor": "B3",
    "label": "85",
    "kind": "parking",
    "key": "B3-85",
    "verified": true,
    "box": [
      729,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B3-86",
    "floor": "B3",
    "label": "86",
    "kind": "parking",
    "key": "B3-86",
    "verified": true,
    "box": [
      765,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B3-87",
    "floor": "B3",
    "label": "87",
    "kind": "parking",
    "key": "B3-87",
    "verified": true,
    "box": [
      813,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B3-88",
    "floor": "B3",
    "label": "88",
    "kind": "parking",
    "key": "B3-88",
    "verified": true,
    "box": [
      849,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B3-89",
    "floor": "B3",
    "label": "89",
    "kind": "parking",
    "key": "B3-89",
    "verified": true,
    "box": [
      884,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B3-90",
    "floor": "B3",
    "label": "90",
    "kind": "parking",
    "key": "B3-90",
    "verified": true,
    "box": [
      936,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B3-91",
    "floor": "B3",
    "label": "91",
    "kind": "parking",
    "key": "B3-91",
    "verified": true,
    "box": [
      972,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B3-92",
    "floor": "B3",
    "label": "92",
    "kind": "parking",
    "key": "B3-92",
    "verified": true,
    "box": [
      1008,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B3-93",
    "floor": "B3",
    "label": "93",
    "kind": "parking",
    "key": "B3-93",
    "verified": true,
    "box": [
      1058,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B3-94",
    "floor": "B3",
    "label": "94",
    "kind": "parking",
    "key": "B3-94",
    "verified": true,
    "box": [
      1094,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B3-95",
    "floor": "B3",
    "label": "95",
    "kind": "parking",
    "key": "B3-95",
    "verified": true,
    "box": [
      1129,
      528,
      34,
      76
    ]
  },
  {
    "id": "plan-B3-100",
    "floor": "B3",
    "label": "100",
    "kind": "parking",
    "key": "B3-100",
    "verified": true,
    "box": [
      1152,
      379,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-99",
    "floor": "B3",
    "label": "99",
    "kind": "parking",
    "key": "B3-99",
    "verified": true,
    "box": [
      1152,
      414,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-98",
    "floor": "B3",
    "label": "98",
    "kind": "parking",
    "key": "B3-98",
    "verified": true,
    "box": [
      1152,
      458,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-97",
    "floor": "B3",
    "label": "97",
    "kind": "parking",
    "key": "B3-97",
    "verified": true,
    "box": [
      1152,
      493,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-96",
    "floor": "B3",
    "label": "96",
    "kind": "parking",
    "key": "B3-96",
    "verified": true,
    "box": [
      1159,
      545,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-101",
    "floor": "B3",
    "label": "101",
    "kind": "parking",
    "key": "B3-101",
    "verified": true,
    "box": [
      1325,
      381,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-102",
    "floor": "B3",
    "label": "102",
    "kind": "parking",
    "key": "B3-102",
    "verified": true,
    "box": [
      1325,
      416,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-103",
    "floor": "B3",
    "label": "103",
    "kind": "parking",
    "key": "B3-103",
    "verified": true,
    "box": [
      1325,
      463,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-104",
    "floor": "B3",
    "label": "104",
    "kind": "parking",
    "key": "B3-104",
    "verified": true,
    "box": [
      1325,
      498,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-108",
    "floor": "B3",
    "label": "108",
    "kind": "parking",
    "key": "B3-108",
    "verified": true,
    "box": [
      1403,
      379,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-107",
    "floor": "B3",
    "label": "107",
    "kind": "parking",
    "key": "B3-107",
    "verified": true,
    "box": [
      1403,
      414,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-106",
    "floor": "B3",
    "label": "106",
    "kind": "parking",
    "key": "B3-106",
    "verified": true,
    "box": [
      1403,
      463,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-105",
    "floor": "B3",
    "label": "105",
    "kind": "parking",
    "key": "B3-105",
    "verified": true,
    "box": [
      1403,
      498,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-109",
    "floor": "B3",
    "label": "109",
    "kind": "parking",
    "key": "B3-109",
    "verified": true,
    "box": [
      1578,
      378,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-110",
    "floor": "B3",
    "label": "110",
    "kind": "parking",
    "key": "B3-110",
    "verified": true,
    "box": [
      1578,
      414,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-111",
    "floor": "B3",
    "label": "111",
    "kind": "parking",
    "key": "B3-111",
    "verified": true,
    "box": [
      1578,
      464,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-112",
    "floor": "B3",
    "label": "112",
    "kind": "parking",
    "key": "B3-112",
    "verified": true,
    "box": [
      1578,
      500,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-113",
    "floor": "B3",
    "label": "113",
    "kind": "parking",
    "key": "B3-113",
    "verified": true,
    "box": [
      1578,
      560,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-114",
    "floor": "B3",
    "label": "114",
    "kind": "parking",
    "key": "B3-114",
    "verified": true,
    "box": [
      1578,
      596,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-115",
    "floor": "B3",
    "label": "115",
    "kind": "parking",
    "key": "B3-115",
    "verified": true,
    "box": [
      1578,
      632,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-116",
    "floor": "B3",
    "label": "116",
    "kind": "parking",
    "key": "B3-116",
    "verified": true,
    "box": [
      1578,
      680,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-117",
    "floor": "B3",
    "label": "117",
    "kind": "parking",
    "key": "B3-117",
    "verified": true,
    "box": [
      1578,
      716,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-118",
    "floor": "B3",
    "label": "118",
    "kind": "parking",
    "key": "B3-118",
    "verified": true,
    "box": [
      1578,
      770,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-119",
    "floor": "B3",
    "label": "119",
    "kind": "parking",
    "key": "B3-119",
    "verified": true,
    "box": [
      1578,
      806,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-120",
    "floor": "B3",
    "label": "120",
    "kind": "parking",
    "key": "B3-120",
    "verified": true,
    "box": [
      1578,
      854,
      77,
      34
    ]
  },
  {
    "id": "plan-B3-121",
    "floor": "B3",
    "label": "121",
    "kind": "parking",
    "key": "B3-121",
    "verified": true,
    "box": [
      1578,
      890,
      77,
      34
    ]
  }
];
if(typeof module!=='undefined')module.exports=BASEMENT_MARKS;
