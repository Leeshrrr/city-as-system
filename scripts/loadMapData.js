let mapData = [
    { "countyName": "Albany", "totalNum": 18773, "testedNum": 4745, "testedPer": 0.252756619, "up5Num": 236, "up5Per": 0.049736565, "up10Num": 82, "up10Per": 0.017281349, "bll5to9": 154, "bll10to14": 41, "bll15to19": 14, "bll20to24": 7, "bll24to45": 17, "bll45plus": 0 },
    { "countyName": "Allegany", "totalNum": 3000, "testedNum": 777, "testedPer": 0.259, "up5Num": 29, "up5Per": 0.037323037, "up10Num": 11, "up10Per": 0.014157014, "bll5to9": 18, "bll10to14": 0, "bll15to19": 6, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Broome", "totalNum": 12115, "testedNum": 2711, "testedPer": 0.223772183, "up5Num": 89, "up5Per": 0.032829214, "up10Num": 32, "up10Per": 0.011803762, "bll5to9": 57, "bll10to14": 17, "bll15to19": 8, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Cattaraugus", "totalNum": 5371, "testedNum": 1398, "testedPer": 0.260286725, "up5Num": 67, "up5Per": 0.047925608, "up10Num": 16, "up10Per": 0.011444921, "bll5to9": 51, "bll10to14": 7, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Cayuga", "totalNum": 4624, "testedNum": 1271, "testedPer": 0.274870242, "up5Num": 44, "up5Per": 0.034618411, "up10Num": 7, "up10Per": 0.005507474, "bll5to9": 37, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Chautauqua", "totalNum": 8436, "testedNum": 2328, "testedPer": 0.275960171, "up5Num": 91, "up5Per": 0.039089347, "up10Num": 30, "up10Per": 0.012886598, "bll5to9": 61, "bll10to14": 19, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Chemung", "totalNum": 5872, "testedNum": 1460, "testedPer": 0.248637602, "up5Num": 49, "up5Per": 0.033561644, "up10Num": 19, "up10Per": 0.013013699, "bll5to9": 30, "bll10to14": 8, "bll15to19": 6, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Chenango", "totalNum": 3060, "testedNum": 809, "testedPer": 0.264379085, "up5Num": 42, "up5Per": 0.051915946, "up10Num": 12, "up10Per": 0.014833127, "bll5to9": 30, "bll10to14": 7, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Clinton", "totalNum": 4718, "testedNum": 1252, "testedPer": 0.265366681, "up5Num": 6, "up5Per": 0.004792332, "up10Num": 0, "up10Per": 0, "bll5to9": 0, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Columbia", "totalNum": 3151, "testedNum": 726, "testedPer": 0.230403047, "up5Num": 52, "up5Per": 0.071625344, "up10Num": 8, "up10Per": 0.011019284, "bll5to9": 44, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Cortland", "totalNum": 2891, "testedNum": 778, "testedPer": 0.269111034, "up5Num": 38, "up5Per": 0.048843188, "up10Num": 9, "up10Per": 0.011568123, "bll5to9": 29, "bll10to14": 6, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Delaware", "totalNum": 2214, "testedNum": 608, "testedPer": 0.274616079, "up5Num": 30, "up5Per": 0.049342105, "up10Num": 7, "up10Per": 0.011513158, "bll5to9": 23, "bll10to14": 6, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Dutchess", "totalNum": 16589, "testedNum": 4575, "testedPer": 0.275785159, "up5Num": 91, "up5Per": 0.01989071, "up10Num": 32, "up10Per": 0.006994536, "bll5to9": 59, "bll10to14": 16, "bll15to19": 9, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Erie", "totalNum": 61090, "testedNum": 20148, "testedPer": 0.329808479, "up5Num": 1130, "up5Per": 0.056084971, "up10Num": 415, "up10Per": 0.020597578, "bll5to9": 715, "bll10to14": 217, "bll15to19": 95, "bll20to24": 49, "bll24to45": 46, "bll45plus": 8 },
    { "countyName": "Essex", "totalNum": 1857, "testedNum": 419, "testedPer": 0.225632741, "up5Num": 0, "up5Per": 0, "up10Num": 0, "up10Per": 0, "bll5to9": 0, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Franklin", "totalNum": 3001, "testedNum": 787, "testedPer": 0.262245918, "up5Num": 17, "up5Per": 0.021601017, "up10Num": 0, "up10Per": 0, "bll5to9": 14, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Fulton", "totalNum": 3315, "testedNum": 965, "testedPer": 0.291101056, "up5Num": 129, "up5Per": 0.133678756, "up10Num": 34, "up10Per": 0.035233161, "bll5to9": 95, "bll10to14": 21, "bll15to19": 7, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Genesee", "totalNum": 3646, "testedNum": 932, "testedPer": 0.2556226, "up5Num": 30, "up5Per": 0.032188841, "up10Num": 9, "up10Per": 0.009656652, "bll5to9": 21, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Greene", "totalNum": 2438, "testedNum": 577, "testedPer": 0.236669401, "up5Num": 22, "up5Per": 0.03812825, "up10Num": 6, "up10Per": 0.010398614, "bll5to9": 16, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Hamilton", "totalNum": 173, "testedNum": 46, "testedPer": 0.265895954, "up5Num": 0, "up5Per": 0, "up10Num": 0, "up10Per": 0, "bll5to9": 0, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Herkimer", "totalNum": 3941, "testedNum": 1153, "testedPer": 0.292565339, "up5Num": 62, "up5Per": 0.053772767, "up10Num": 20, "up10Per": 0.017346054, "bll5to9": 42, "bll10to14": 11, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Jefferson", "totalNum": 10469, "testedNum": 2502, "testedPer": 0.238991308, "up5Num": 77, "up5Per": 0.03077538, "up10Num": 23, "up10Per": 0.009192646, "bll5to9": 54, "bll10to14": 11, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Lewis", "totalNum": 1973, "testedNum": 435, "testedPer": 0.220476432, "up5Num": 26, "up5Per": 0.059770115, "up10Num": 7, "up10Per": 0.016091954, "bll5to9": 19, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Livingston", "totalNum": 3333, "testedNum": 861, "testedPer": 0.258325833, "up5Num": 29, "up5Per": 0.033681765, "up10Num": 8, "up10Per": 0.009291521, "bll5to9": 21, "bll10to14": 6, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Madison", "totalNum": 4021, "testedNum": 884, "testedPer": 0.21984581, "up5Num": 40, "up5Per": 0.045248869, "up10Num": 9, "up10Per": 0.010180995, "bll5to9": 31, "bll10to14": 7, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Monroe", "totalNum": 50066, "testedNum": 12791, "testedPer": 0.255482763, "up5Num": 403, "up5Per": 0.031506528, "up10Num": 105, "up10Per": 0.008208897, "bll5to9": 298, "bll10to14": 53, "bll15to19": 31, "bll20to24": 9, "bll24to45": 10, "bll45plus": 0 },
    { "countyName": "Montgomery", "totalNum": 3750, "testedNum": 932, "testedPer": 0.248533333, "up5Num": 98, "up5Per": 0.105150215, "up10Num": 28, "up10Per": 0.030042918, "bll5to9": 70, "bll10to14": 17, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Nassau", "totalNum": 90464, "testedNum": 31150, "testedPer": 0.344335868, "up5Num": 201, "up5Per": 0.006452648, "up10Num": 42, "up10Per": 0.001348315, "bll5to9": 159, "bll10to14": 26, "bll15to19": 7, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Niagara", "totalNum": 13349, "testedNum": 3648, "testedPer": 0.273278897, "up5Num": 94, "up5Per": 0.025767544, "up10Num": 33, "up10Per": 0.009046053, "bll5to9": 61, "bll10to14": 17, "bll15to19": 7, "bll20to24": 0, "bll24to45": 6, "bll45plus": 0 },
    { "countyName": "Oneida", "totalNum": 15981, "testedNum": 4431, "testedPer": 0.277266754, "up5Num": 519, "up5Per": 0.117129316, "up10Num": 139, "up10Per": 0.031369894, "bll5to9": 380, "bll10to14": 86, "bll15to19": 27, "bll20to24": 13, "bll24to45": 11, "bll45plus": 0 },
    { "countyName": "Onodaga", "totalNum": 31962, "testedNum": 10400, "testedPer": 0.325386396, "up5Num": 482, "up5Per": 0.046346154, "up10Num": 155, "up10Per": 0.014903846, "bll5to9": 327, "bll10to14": 97, "bll15to19": 19, "bll20to24": 19, "bll24to45": 17, "bll45plus": 0 },
    { "countyName": "Ontario", "totalNum": 6710, "testedNum": 1475, "testedPer": 0.219821162, "up5Num": 43, "up5Per": 0.029152542, "up10Num": 13, "up10Per": 0.008813559, "bll5to9": 30, "bll10to14": 8, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Orange", "totalNum": 30541, "testedNum": 7972, "testedPer": 0.261026162, "up5Num": 132, "up5Per": 0.016557953, "up10Num": 37, "up10Per": 0.004641244, "bll5to9": 95, "bll10to14": 27, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Orleans", "totalNum": 2533, "testedNum": 628, "testedPer": 0.247927359, "up5Num": 29, "up5Per": 0.046178344, "up10Num": 13, "up10Per": 0.020700637, "bll5to9": 16, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Oswego", "totalNum": 7639, "testedNum": 1902, "testedPer": 0.248985469, "up5Num": 66, "up5Per": 0.034700315, "up10Num": 14, "up10Per": 0.007360673, "bll5to9": 52, "bll10to14": 9, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Otsego", "totalNum": 3111, "testedNum": 944, "testedPer": 0.303439409, "up5Num": 19, "up5Per": 0.020127119, "up10Num": 0, "up10Per": 0, "bll5to9": 16, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Putnam", "totalNum": 5401, "testedNum": 1429, "testedPer": 0.264580633, "up5Num": 15, "up5Per": 0.010496851, "up10Num": 0, "up10Per": 0, "bll5to9": 11, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Rensselaer", "totalNum": 10036, "testedNum": 2525, "testedPer": 0.251594261, "up5Num": 110, "up5Per": 0.043564356, "up10Num": 42, "up10Per": 0.016633663, "bll5to9": 68, "bll10to14": 24, "bll15to19": 9, "bll20to24": 0, "bll24to45": 7, "bll45plus": 0 },
    { "countyName": "Rockland", "totalNum": 30924, "testedNum": 9322, "testedPer": 0.301448713, "up5Num": 92, "up5Per": 0.009869127, "up10Num": 25, "up10Per": 0.002681828, "bll5to9": 67, "bll10to14": 16, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "St. Lawrence", "totalNum": 6974, "testedNum": 1340, "testedPer": 0.192142243, "up5Num": 67, "up5Per": 0.05, "up10Num": 13, "up10Per": 0.009701493, "bll5to9": 54, "bll10to14": 9, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Saratoga", "totalNum": 14431, "testedNum": 3793, "testedPer": 0.262836948, "up5Num": 27, "up5Per": 0.007118376, "up10Num": 7, "up10Per": 0.001845505, "bll5to9": 20, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Schenectady", "totalNum": 11014, "testedNum": 2849, "testedPer": 0.258670783, "up5Num": 95, "up5Per": 0.033345033, "up10Num": 25, "up10Per": 0.008775009, "bll5to9": 70, "bll10to14": 18, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Schoharie", "totalNum": 1579, "testedNum": 418, "testedPer": 0.264724509, "up5Num": 6, "up5Per": 0.014354067, "up10Num": 0, "up10Per": 0, "bll5to9": 0, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Schuyler", "totalNum": 1107, "testedNum": 282, "testedPer": 0.254742547, "up5Num": 12, "up5Per": 0.042553191, "up10Num": 6, "up10Per": 0.021276596, "bll5to9": 6, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Seneca", "totalNum": 2185, "testedNum": 391, "testedPer": 0.178947368, "up5Num": 13, "up5Per": 0.033248082, "up10Num": 0, "up10Per": 0, "bll5to9": 10, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Steuben", "totalNum": 6447, "testedNum": 1488, "testedPer": 0.230805026, "up5Num": 51, "up5Per": 0.034274194, "up10Num": 17, "up10Per": 0.011424731, "bll5to9": 34, "bll10to14": 12, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Suffolk", "totalNum": 96390, "testedNum": 25165, "testedPer": 0.2610748, "up5Num": 175, "up5Per": 0.006954103, "up10Num": 47, "up10Per": 0.001867673, "bll5to9": 128, "bll10to14": 26, "bll15to19": 8, "bll20to24": 7, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Sullivan", "totalNum": 5064, "testedNum": 1190, "testedPer": 0.234992101, "up5Num": 32, "up5Per": 0.026890756, "up10Num": 9, "up10Per": 0.007563025, "bll5to9": 23, "bll10to14": 6, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Tioga", "totalNum": 3024, "testedNum": 599, "testedPer": 0.198082011, "up5Num": 29, "up5Per": 0.048414023, "up10Num": 0, "up10Per": 0, "bll5to9": 24, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Tompkins", "totalNum": 5012, "testedNum": 1376, "testedPer": 0.274541101, "up5Num": 23, "up5Per": 0.016715116, "up10Num": 7, "up10Per": 0.005087209, "bll5to9": 16, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Ulster", "totalNum": 9654, "testedNum": 2313, "testedPer": 0.239589807, "up5Num": 101, "up5Per": 0.043666234, "up10Num": 31, "up10Per": 0.013402508, "bll5to9": 70, "bll10to14": 16, "bll15to19": 6, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Warren", "totalNum": 3500, "testedNum": 1087, "testedPer": 0.310571429, "up5Num": 18, "up5Per": 0.016559338, "up10Num": 7, "up10Per": 0.006439742, "bll5to9": 11, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Washington", "totalNum": 3661, "testedNum": 992, "testedPer": 0.270964217, "up5Num": 37, "up5Per": 0.037298387, "up10Num": 11, "up10Per": 0.01108871, "bll5to9": 26, "bll10to14": 9, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Wayne", "totalNum": 6109, "testedNum": 1408, "testedPer": 0.23047962, "up5Num": 58, "up5Per": 0.041193182, "up10Num": 10, "up10Per": 0.007102273, "bll5to9": 48, "bll10to14": 7, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Westchester", "totalNum": 67112, "testedNum": 22177, "testedPer": 0.33044761, "up5Num": 404, "up5Per": 0.018217072, "up10Num": 95, "up10Per": 0.004283717, "bll5to9": 309, "bll10to14": 53, "bll15to19": 14, "bll20to24": 11, "bll24to45": 14, "bll45plus": 0 },
    { "countyName": "Wyoming", "totalNum": 2359, "testedNum": 629, "testedPer": 0.266638406, "up5Num": 17, "up5Per": 0.027027027, "up10Num": 0, "up10Per": 0, "bll5to9": 15, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 },
    { "countyName": "Yates", "totalNum": 1849, "testedNum": 343, "testedPer": 0.185505679, "up5Num": 16, "up5Per": 0.04664723, "up10Num": 0, "up10Per": 0, "bll5to9": 13, "bll10to14": 0, "bll15to19": 0, "bll20to24": 0, "bll24to45": 0, "bll45plus": 0 }
];