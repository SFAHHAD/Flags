const flagsData = {
  "AD": "أندورا",
  "AE": "الإمارات العربية المتحدة",
  "AF": "أفغانستان",
  "AG": "أنتيغوا وبربودا",
  "AI": "أنغيلا",
  "AL": "ألبانيا",
  "AM": "أرمينيا",
  "AO": "أنغولا",
  "AQ": "القارة القطبية الجنوبية",
  "AR": "الأرجنتين",
  "AS": "ساموا الأمريكية",
  "AT": "النمسا",
  "AU": "أستراليا",
  "AW": "أروبا",
  "AX": "جزر آلاند",
  "AZ": "أذربيجان",
  "BA": "البوسنة والهرسك",
  "BB": "بربادوس",
  "BD": "بنغلاديش",
  "BE": "بلجيكا",
  "BF": "بوركينا فاسو",
  "BG": "بلغاريا",
  "BH": "البحرين",
  "BI": "بوروندي",
  "BJ": "بنين",
  "BL": "سان بارتيلمي",
  "BM": "برمودا",
  "BN": "بروناي دار السلام",
  "BO": "بوليفيا، دولة متعددة القوميات",
  "BQ": "هولندا الكاريبية",
  "BR": "البرازيل",
  "BS": "الباهاماس",
  "BT": "بوتان",
  "BV": "جزيرة بوفيه",
  "BW": "بوتسوانا",
  "BY": "بيلاروسيا",
  "BZ": "بليز",
  "CA": "كندا",
  "CC": "جزر كوكوس (كيلينغ)",
  "CD": "جمهورية الكونغو الديمقراطية",
  "CF": "جمهورية أفريقيا الوسطى",
  "CG": "جمهورية الكونغو",
  "CH": "سويسرا",
  "CI": "ساحل العاج",
  "CK": "جزر كوك",
  "CL": "تشيلي",
  "CM": "الكاميرون",
  "CN": "الصين (جمهورية الصين الشعبية)",
  "CO": "كولومبيا",
  "CR": "كوستا ريكا",
  "CU": "كوبا",
  "CV": "الرأس الأخضر",
  "CW": "كوراساو",
  "CX": "جزيرة الكريسماس",
  "CY": "قبرص",
  "CZ": "جمهورية التشيك",
  "DE": "ألمانيا",
  "DJ": "جيبوتي",
  "DK": "الدانمارك",
  "DM": "دومينيكا",
  "DO": "جمهورية الدومينيكان",
  "DZ": "الجزائر",
  "EC": "الإكوادور",
  "EE": "استونيا",
  "EG": "مصر",
  "EH": "الصحراء الغربية",
  "ER": "إريتريا",
  "ES": "إسبانيا",
  "ET": "إثيوبيا",
  "EU": "أوروبا",
  "FI": "فنلندا",
  "FJ": "فيجي",
  "FK": "جزر فوكلاند (مالفيناس)",
  "FM": "ولايات ميكرونيسيا المتحدة",
  "FO": "جزر فارو",
  "FR": "فرنسا",
  "GA": "الغابون",
  "GB-ENG": "إنجلترا",
  "GB-NIR": "إيرلندا الشمالية",
  "GB-SCT": "اسكتلندا",
  "GB-WLS": "ويلز",
  "GB": "المملكة المتحدة",
  "GD": "غرينادا",
  "GE": "جورجيا",
  "GF": "غويانا الفرنسية",
  "GG": "غيرنزي",
  "GH": "غانا",
  "GI": "جبل طارق",
  "GL": "غرينلاند",
  "GM": "غامبيا",
  "GN": "غينيا",
  "GP": "جوادلوب",
  "GQ": "غينيا الاستوائية",
  "GR": "اليونان",
  "GS": "جورجيا الجنوبية وجزر ساندويتش الجنوبية",
  "GT": "غواتيمالا",
  "GU": "غوام",
  "GW": "غينيا بيساو",
  "GY": "غيانا",
  "HK": "هونغ كونغ",
  "HM": "جزيرة هيرد وجزر ماكدونالد",
  "HN": "هندوراس",
  "HR": "كرواتيا",
  "HT": "هايتي",
  "HU": "المجر",
  "ID": "إندونيسيا",
  "IE": "أيرلندا",
  "IL": "إسرائيل",
  "IM": "جزيرة مان",
  "IN": "الهند",
  "IO": "الإقليم البريطاني في المحيط الهندي",
  "IQ": "العراق",
  "IR": "إيران",
  "IS": "أيسلندا",
  "IT": "إيطاليا",
  "JE": "جيرسي",
  "JM": "جامايكا",
  "JO": "الأردن",
  "JP": "اليابان",
  "KE": "كينيا",
  "KG": "قيرغيزستان",
  "KH": "كمبوديا",
  "KI": "كيريباتي",
  "KM": "جزر القمر",
  "KN": "سانت كيتس ونيفيس",
  "KP": "كوريا الديمقراطية",
  "KR": "كوريا الجنوبية",
  "KW": "الكويت",
  "KY": "جزر كايمان",
  "KZ": "كازاخستان",
  "LA": "لاوس",
  "LB": "لبنان",
  "LC": "سانت لوسيا",
  "LI": "ليختنشتاين",
  "LK": "سريلانكا",
  "LR": "ليبيريا",
  "LS": "ليسوتو",
  "LT": "ليتوانيا",
  "LU": "لوكسمبورغ",
  "LV": "لاتفيا",
  "LY": "ليبيا",
  "MA": "المغرب",
  "MC": "موناكو",
  "MD": "مولدوفا",
  "ME": "الجبل الأسود",
  "MF": "سانت مارتن",
  "MG": "مدغشقر",
  "MH": "جزر مارشال",
  "MK": "مقدونيا الشمالية",
  "ML": "مالي",
  "MM": "ميانمار",
  "MN": "منغوليا",
  "MO": "ماكاو",
  "MP": "جزر ماريانا الشمالية",
  "MQ": "مارتينيك",
  "MR": "موريتانيا",
  "MS": "مونتسرات",
  "MT": "مالطا",
  "MU": "موريشيوس",
  "MV": "المالديف",
  "MW": "مالاوي",
  "MX": "المكسيك",
  "MY": "ماليزيا",
  "MZ": "موزمبيق",
  "NA": "ناميبيا",
  "NC": "كاليدونيا الجديدة",
  "NE": "النيجر",
  "NF": "جزيرة نورفولك",
  "NG": "نيجيريا",
  "NI": "نيكاراغوا",
  "NL": "هولندا",
  "NO": "النرويج",
  "NP": "نيبال",
  "NR": "ناورو",
  "NU": "نيوي",
  "NZ": "نيوزيلندا",
  "OM": "عمان",
  "PA": "بنما",
  "PE": "بيرو",
  "PF": "بولينيزيا الفرنسية",
  "PG": "بابوا غينيا الجديدة",
  "PH": "الفلبين",
  "PK": "باكستان",
  "PL": "بولندا",
  "PM": "سان بيير وميكلون",
  "PN": "جزر بيتكيرن",
  "PR": "بورتوريكو",
  "PS": "فلسطين",
  "PT": "البرتغال",
  "PW": "بالاو",
  "PY": "باراغواي",
  "QA": "قطر",
  "RE": "ريونيون",
  "RO": "رومانيا",
  "RS": "صربيا",
  "RU": "الاتحاد الروسي",
  "RW": "رواندا",
  "SA": "المملكة العربية السعودية",
  "SB": "جزر سليمان",
  "SC": "سيشل",
  "SD": "السودان",
  "SG": "سنغافورة",
  "SH": "سانت هيلينا، أسينشن وتريستان دا كونها",
  "SI": "سلوفينيا",
  "SJ": "جزر سفالبارد وجان ماين",
  "SK": "سلوفاكيا",
  "SL": "سيراليون",
  "SM": "سان مارينو",
  "SN": "السنغال",
  "SO": "الصومال",
  "SR": "سورينام",
  "SS": "جنوب السودان",
  "ST": "ساو تومي وبرينسيبي",
  "SV": "السلفادور",
  "SX": "سينت مارتن (الجزء الهولندي)",
  "SY": "الجمهورية العربية السورية",
  "SZ": "سوازيلاند",
  "TC": "جزر الترك وجايكوس",
  "TD": "تشاد",
  "TF": "الأقاليم الجنوبية الفرنسية",
  "TG": "توغو",
  "TH": "تايلاند",
  "TJ": "طاجيكستان",
  "TK": "توكيلاو",
  "TL": "تيمور الشرقية",
  "TM": "تركمانستان",
  "TN": "تونس",
  "TO": "تونغا",
  "TR": "تركيا",
  "TT": "ترينيداد وتوباغو",
  "TV": "توفالو",
  "TW": "تايوان (جمهورية الصين)",
  "TZ": "تنزانيا، الجمهورية المتحدة لـ",
  "UA": "أوكرانيا",
  "UG": "أوغندا",
  "UM": "جزر الولايات المتحدة البعيدة الصغيرة",
  "US": "الولايات المتحدة الأمريكية",
  "UY": "أوروغواي",
  "UZ": "أوزبكستان",
  "VA": "الكرسي الرسولي (دولة مدينة الفاتيكان)",
  "VC": "سانت فنسنت والغرينادين",
  "VE": "فنزويلا، جمهورية بوليفارية",
  "VG": "جزر العذراء البريطانية",
  "VI": "جزر العذراء الأمريكية",
  "VN": "فيتنام",
  "VU": "فانواتو",
  "WF": "جزر والس وفوتونا",
  "WS": "ساموا",
  "XK": "كوسوفو",
  "YE": "اليمن",
  "YT": "مايوت",
  "ZA": "جنوب أفريقيا",
  "ZM": "زامبيا",
  "ZW": "زيمبابوي"
};
