// 0xgreenapple
// Created keywords with openAI
const illlustrations = {
  svgs: [
    {
      name: "dog",
      keyword: ["canine", "pet", "animal", "breed", "obedience", "dog", "cute"],
    },
    {
      name: "ipod",
      keyword: [
        "electronic device",
        "music player",
        "audio player",
        "portable media player",
        "multimedia player",
        "iphone",
        "apple",
        "mac",
      ],
    },
    {
      name: "reading-room",
      keyword: [
        "library",
        "study",
        "literacy",
        "books",
        "information",
        "reading",
        "kids",
        "maths",
        "read",
        "room",
      ],
    },
    {
      name: "selfi-girl",
      keyword: ["photo", "girl", "social-media", "internet"],
    },
    {
      name: "programing",
      keyword: [
        "programing",
        "coding",
        "python",
        "javascript",
        "css",
        "html",
        "java",
        "cpp",
      ],
    },
    {
      name: "sega-megdrive",
      keyword: ["Sega", "game", "video", "console", "entertainment"],
    },
    {
      name: "whale",
      keyword: [
        "whale",
        "ocean",
        "water",
        "sea",
        "mammal",
        "fish",
        "big whale",
        "shark",
        "blue",
        "deep",
      ],
    },
    {
      name: "floppy",
      keyword: [
        "computer",
        "drive",
        "disk",
        "storage",
        "device",
        "save",
        "electronics",
        "server",
      ],
    },
    {
      name: "gameboy",
      keyword: [
        "game",
        "boy",
        "fun",
        "play",
        "video",
        "video-games",
        "electronics",
      ],
    },
    {
      name: "gym-cycle",
      keyword: ["gym", "cycle", "fitness", "workout", "exercise", "health"],
    },
    {
      name: "coffee",
      keyword: [
        "coffee",
        "beans",
        "drink",
        "caffeine",
        "mug",
        "enjoy",
        "break",
      ],
    },
    {
      name: "wallet",
      keyword: [
        "keys",
        "money",
        "credit cards",
        "driver's license",
        "identification",
      ],
    },
    {
      name: "pirahna",
      keyword: [
        "ocean",
        "fish",
        "sea",
        "fresh water",
        "river",
        "carnivorous fish",
        "Amazon River",
        "Brazil",
        "teeth",
      ],
    },
    {
      name: "radio",
      keyword: [
        "communication",
        "electronics",
        "waves",
        "sound",
        "frequency",
        "AM",
        "FM",
        "stations",
        "broadcasting",
        "song",
        "music",
        "news",
      ],
    },
    {
      name: "forklift",
      keyword: [
        "forklift",
        "truck",
        "pallet",
        "load",
        "heavy",
        "duty",
        "transportation",
        "equipment",
        "stack",
        "warehouse",
      ],
    },
    {
      name: "pocket-knife",
      keyword: [
        "pocket-knife",
        "blade",
        "sheath",
        "folding",
        "knife",
        "camping",
        "hiking",
        "survival",
        "outdoor",
      ],
    },
    {
      name: "app-development",
      keyword: [
        "App development",
        "developers",
        "computer",
        "laptop",
        "stationary",
        "pencil",
        "apps",
        "mobile apps",
        "iPhone",
        "Android",
        "Windows",
        "web apps",
        "app store",
      ],
    },
    {
      name: "desktop",
      keyword: [
        "computer",
        "monitor",
        "CPU",
        "mouse",
        "keyboard",
        "touchpad",
        "printer",
        "scanner",
        "web cam",
      ],
    },
    {
      name: "christmas-gift",
      keyword: [
        "Christmas",
        "gift",
        "presents",
        "Santa",
        "holiday",
        "Christmas tree",
        "decorations",
        "lights",
        "family",
        "friends",
        "love",
        "joy",
        "peace",
        "hope",
      ],
    },
    {
      name: "map-location",
      keyword: [
        "map",
        "location",
        "GPS",
        "navigation",
        "Google Maps",
        "Apple Maps",
        "mapquest",
        "Bing Maps",
        "Yahoo! Maps",
        "OpenStreetMap",
      ],
    },
    {
      name: "bedroom",
      keyword: [
        "Furniture",
        "Bedding",
        "Mattress",
        "Pillow",
        "Bed",
        "Linen",
        "duvet",
        "comforter",
        "nightstand",
        "lamp",
      ],
    },
    {
      name: "installing",
      keyword: [
        "installing",
        "programming",
        "installer",
        "install",
        "setup",
        "configure",
        "WFH",
        "laptop",
        "computer",
      ],
    },
    {
      name: "it-girl",
      keyword: [
        "girl",
        "it",
        "fashion",
        "style",
        "beauty",
        "celebrity",
        "socialite",
        "model",
        "actress",
      ],
    },
    {
      name: "farm",
      keyword: [
        "agriculture",
        "farmer",
        "farmland",
        "crop",
        "livestock",
        "ranch",
        "till",
        "plough",
        "reap",
        "harvest",
        "tree",
      ],
    },
    {
      name: "happy-cat",
      keyword: [
        "Animal",
        "mammal",
        "pet",
        "feline",
        "cute",
        "adorable",
        "sleepy",
        "lazy",
        "happy",
        "cat",
        "pet",
        "animal",
        "friends",
        "family",
        "love",
        "joy",
      ],
    },
    {
      name: "working",
      keyword: [
        "Working",
        "job",
        "career",
        "employment",
        "money",
        "wages",
        "salary",
        "office",
        "company",
        "corporation",
        "business",
        "work",
        "labor",
        "effort",
        "toil",
      ],
    },
    {
      name: "cafe",
      keyword: [
        "Cafe",
        "coffee",
        "tea",
        "restaurant",
        "food",
        "drink",
        "breakfast",
        "lunch",
        "dinner",
        "desserts",
        "pastries",
        "snacks",
        "bagels",
        "muffins",
        "sandwiches",
        "soup",
        "salad",
        "coffee shop",
      ],
    },
    {
      name: "writing-tool",
      keyword: [
        "writing",
        "tool",
        "pen",
        "paper",
        "ink",
        "writer",
        "typewriter",
        "computer",
        "printer",
      ],
    },
    {
      name: "tv-room",
      keyword: [
        "television",
        "room",
        "TV",
        "house",
        "living",
        "area",
        "space",
        "estate",
        "property",
        "condo",
        "apartment",
        "dwelling",
      ],
    },
    {
      name: "chritmas-ball",
      keyword: [
        "Christmas",
        "ball",
        "ornaments",
        "tree",
        "lights",
        "Santa",
        "Claus",
        "presents",
        "gifts",
        "holiday",
        "season",
        "merry",
        "family",
        "friends",
        "love",
        "joy",
        "happiness",
        "peace",
      ],
    },
    {
      name: "powerbook-100",
      keyword: [
        "power",
        "book",
        "apple",
        "laptop",
        "mac",
        "computer",
        "device",
        "gadget",
        "tool",
        "instrument",
      ],
    },
    {
      name: "pirate-boat",
      keyword: [
        "pirate",
        "boat",
        "ship",
        "ocean",
        "water",
        "sailing",
        "crew",
        "deck",
        "rigging",
        "mast",
      ],
    },
    {
      name: "ironman",
      keyword: ["man", "iron", "superhero", "movie", "comic"],
    },
    {
      name: "my-robot",
      keyword: [
        "robot",
        "my",
        "machines",
        "artificial intelligence",
        "technology",
      ],
    },
    {
      name: "sweet-home",
      keyword: ["home", "sweet", "house", "property", "residence"],
    },
    {
      name: "candle",
      keyword: ["light", "wax", "flame", "luminous", "bright"],
    },
    {
      name: "camping",
      keyword: ["hiking", "outdoors", "nature", "adventure", "explore"],
    },
    {
      name: "ticket",
      keyword: [
        "ticket",
        "buy ticket",
        "train ticket",
        "movie ticket",
        "plane ticket",
      ],
    },
    {
      name: "vault",
      keyword: [
        "secret",
        "hidden",
        "treasure",
        "robbery",
        "bank",
        "money",
        "box",
      ],
    },
    {
      name: "sport-bicycle",
      keyword: ["sport", "bicycle", "cycling", "bike", "wheel"],
    },
    {
      name: "gamingmouse",
      keyword: ["computer mouse", "video games", "gamer", "gameplay", "mouse"],
    },
    {
      name: "freelancer",
      keyword: ["freelancer", "work", "job", "career", "employment"],
    },
    {
      name: "retro-tv",
      keyword: ["vintage tv", "old tv", "television", "tv", "retro"],
    },
    {
      name: "toolbox",
      keyword: ["tool", "toolbox", "tools", "toolkit", "utility"],
    },
    {
      name: "experiment-lab",
      keyword: ["experiment", "lab", "research", "test", "trial"],
    },
    {
      name: "reindeer",
      keyword: ["deer", "rein", "ride", "sled", "snow"],
    },
    {
      name: "apple-watch",
      keyword: ["smartwatch", "apple", "wearable", "technology", "gadget"],
    },
    {
      name: "jingle-bell",
      keyword: ["jingle", "bells", "santa", "christmas", "xmas"],
    },
    {
      name: "owl",
      keyword: ["nocturnal", "bird", "of prey", "wings", "hoot"],
    },
    {
      name: "gym-time",
      keyword: ["workout", "routine", "exercise", "training", "fitness"],
    },
    {
      name: "lantern",
      keyword: ["lantern", "candle", "light", "darkness", "night"],
    },
    {
      name: "bathroom",
      keyword: ["bath", "room", "toilet", "lavatory", "washroom"],
    },
    {
      name: "bed",
      keyword: ["comfortable", "furniture", "house", "rooms", "sleeping"],
    },
    {
      name: "designer-tools",
      keyword: [
        "drawing",
        "painting",
        "photoshop",
        "illustrator",
        "sketching",
        "pen",
        "coffee",
        "cup",
        "color",
        "pantone",
      ],
    },
    {
      name: "abacus",
      keyword: ["math", "abacus", "math tool", "math game", "math toys"],
    },
    {
      name: "socks",
      keyword: ["socks", "hosiery", "footwear", "clothing", "apparel"],
    },
    {
      name: "retro-cassette",
      keyword: [
        "retro",
        "cassette",
        "music",
        "player",
        "vintage",
        "audio",
        "tape",
      ],
    },
    {
      name: "walkie-talkie",
      keyword: [
        "two-way radio",
        "handheld radio",
        "HT",
        "transceiver",
        "amateur radio",
      ],
    },
    {
      name: "healthy",
      keyword: ["healthy", "diet", "nutrition", "exercise", "water", "lemon"],
    },
    {
      name: "workstation",
      keyword: [
        "desktop computer",
        "laptop",
        "notebook",
        "netbook",
        "tablet PC",
        "work",
      ],
    },
    {
      name: "freelancing",
      keyword: [
        "work from home",
        "online jobs",
        "remote jobs",
        "telecommute",
        "freelance",
      ],
    },
    {
      name: "macintosh",
      keyword: ["Apple", "Mac", "OS", "X", "computer"],
    },
    {
      name: "macbook-pro",
      keyword: ["MacBook Pro", "Apple", "Laptop", "Computer", "Notebook"],
    },
    {
      name: "office-bag",
      keyword: ["office", "bag", "work", "laptop", "computer"],
    },
    {
      name: "building",
      keyword: [
        "construction",
        "architecture",
        "design",
        "engineering",
        "materials",
        "skyscrapper",
        "city",
      ],
    },
    {
      name: "auntum",
      keyword: [
        "fall",
        "season",
        "leaves",
        "pumpkin",
        "Thanksgiving",
        "tree",
        "bench",
      ],
    },
    {
      name: "designer-tools-2",
      keyword: [
        "tools",
        "designer",
        "art",
        "craft",
        "software",
        "eraser",
        "knife",
        "scale",
      ],
    },
    {
      name: "ice-cream",
      keyword: ["cone", "scoop", "flavor", "toppings", "milkshake"],
    },
    {
      name: "calculator",
      keyword: ["math", "science", "addition", "subtraction", "multiplication"],
    },
    {
      name: "hdd",
      keyword: ["storage", "device", "computer", "hard", "drive"],
    },
    {
      name: "stationary-set-2",
      keyword: [
        "stationary",
        "set",
        "office",
        "school",
        "desk",
        "pin",
        "clip",
        "glue",
        "scissor",
      ],
    },
    {
      name: "santa",
      keyword: ["santa", "present", "christmas", "reindeer", "sleigh"],
    },
    {
      name: "forget-password",
      keyword: [
        "forgot password",
        "forgot my password",
        "reset password",
        "change password",
        "forgot email password",
        "reset",
        "forgot",
      ],
    },
    {
      name: "rocket",
      keyword: ["blast off", "space", "NASA", "astronauts", "satellite"],
    },
    {
      name: "power-of-pen",
      keyword: ["writing", "ink", "sticker", "pencil", "hand"],
    },
    {
      name: "pc",
      keyword: [
        "Personal computer",
        "Windows",
        "Microsoft",
        "Intel",
        "Apple",
        "computer",
        "laptop",
      ],
    },
    {
      name: "gamingconsole",
      keyword: ["games", "console", "video games", "gaming", "Xbox"],
    },
    {
      name: "vintage-camera",
      keyword: ["vintage", "camera", "photography", "retro", "style"],
    },
    {
      name: "ram",
      keyword: ["memory", "storage", "computer", "hard drive", "flash drive"],
    },
    {
      name: "gpu-ati",
      keyword: [
        "graphics processing unit",
        "GPU",
        "ATI",
        "computer graphics",
        "video cards",
      ],
    },
    {
      name: "medical-lab",
      keyword: ["laboratory", "test", "doctor", "health", "hospital"],
    },
    {
      name: "living-room-interior",
      keyword: ["living room", "room interior", "bed room", "drawing room"],
    },
    {
      name: "the-snail",
      keyword: ["Shells", "Slow", "Slimy", "Garden", "Pests"],
    },
    {
      name: "canvas-stand",
      keyword: ["canvas", "stand", "display", "art", "picture"],
    },
    {
      name: "dumbbell",
      keyword: ["Exercise", "Fitness", "Workout", "Muscles", "Weights"],
    },
    {
      name: "polariod",
      keyword: ["camera", "photography", "film", "picture", "Polaroid"],
    },
    {
      name: "snowman",
      keyword: ["snow", "man", "snowman", "winter", "cold"],
    },
    {
      name: "merry-christmas",
      keyword: [
        "Merry Christmas",
        "Christmas",
        "Christmas time",
        "Christmas season",
        "Christmas day",
      ],
    },
    {
      name: "chemistry-lab",
      keyword: [
        "laboratory",
        "experiment",
        "chemicals",
        "reaction",
        "substance",
      ],
    },
    {
      name: "watch-spectacle",
      keyword: ["timepiece", "jewelry", "wristwatch", "timekeeping", "clock"],
    },
    {
      name: "frankenstein",
      keyword: ["monsters", "creation", "sci-fi", "horror", "literature"],
    },
    {
      name: "italy-mendola",
      keyword: [
        "Italian Alps",
        "Dolomites",
        "Lake Garda",
        "Lake Como",
        "Venice",
      ],
    },
    {
      name: "day66travel",
      keyword: [
        "vacation",
        "destination",
        "trip",
        "explore",
        "adventure",
        "car",
      ],
    },
    {
      name: "kitchen",
      keyword: ["utensils", "cookware", "stove", "fridge", "sink"],
    },
    {
      name: "color-tool",
      keyword: ["Color", "Tool", "Paint", "Shade", "Hue", "brush", "marker"],
    },
    {
      name: "imac",
      keyword: ["Apple", "iMac", "Computer", "Macintosh", "OS X"],
    },
    {
      name: "selfie-boy",
      keyword: ["selfie boy", "selfportrait", "smile", "camera", "photo"],
    },
    {
      name: "school-bag",
      keyword: ["school", "bag", "books", "pens", "laptop"],
    },
    {
      name: "designer-fav-tool-wacom",
      keyword: ["Wacom", "Design", "Tool", "Favourite", "Designer", "mouse"],
    },
    {
      name: "blackboard",
      keyword: [
        "school",
        "classroom",
        "teacher",
        "students",
        "writing",
        "paint",
      ],
    },
    {
      name: "printer",
      keyword: ["printer", "print", "printers", "printing", "ink"],
    },
    {
      name: "champagne",
      keyword: ["Celebrate", "Wine", "Fancy", "Celebration", "Toast"],
    },
    {
      name: "stationary-set",
      keyword: ["pin", "supplies", "workspace", "clip", "paperclip"],
    },
    {
      name: "angler-fish",
      keyword: ["angler fish", "deep sea fish", "lure", "bait", "fishing"],
    },
    {
      name: "pumpkin",
      keyword: ["Halloween", "Carving", "Pie", "Seeds", "Spice"],
    },
    {
      name: "gym-guy",
      keyword: ["gym", "guy", "workout", "muscle", "fitness"],
    },
    {
      name: "tea",
      keyword: ["coffee", "milk", "sugar", "spoon", "cup"],
    },
    {
      name: "day65city-road",
      keyword: ["city", "road", "travel", "commute", "traffic", "car"],
    },
    {
      name: "travel-bag",
      keyword: ["luggage", "carry-on", "suitcase", "backpack", "duffel bag"],
    },
    {
      name: "burger",
      keyword: ["fries", "food", "ketchup", "mayonnaise", "cheese"],
    },
    {
      name: "day64followers",
      keyword: [
        "social media",
        "Twitter",
        "Instagram",
        "engagement",
        "trending",
      ],
    },
    {
      name: "dotted-notebook",
      keyword: [
        "notebook",
        "laptop",
        "computer",
        "paper",
        "diary",
        "journel",
        "pen",
      ],
    },
    {
      name: "firework",
      keyword: [
        "firework",
        "explosion",
        "pyrotechnics",
        "rocket",
        "firecracker",
      ],
    },
    {
      name: "open-vault",
      keyword: [
        "vault",
        "open",
        "security",
        " deposits",
        "privacy",
        "money",
        "box",
      ],
    },
    {
      name: "coding",
      keyword: [
        "programming",
        "code",
        "algorithms",
        "software",
        "developer",
        "WFH",
        "computer",
        "laptop",
      ],
    },
    {
      name: "ui-ux",
      keyword: [
        "user interface",
        "user experience",
        "design",
        "ux",
        "ui",
        "computer",
        "laptop",
      ],
    },
    {
      name: "eiffel-tower",
      keyword: ["Eiffel Tower", "Paris", "France", "Tower", "Landmark"],
    },
    {
      name: "e-scooter",
      keyword: [
        "e-scooter",
        "electric scooter",
        "moped",
        "motor scooter",
        "bike",
      ],
    },
    {
      name: "rainbow",
      keyword: [
        "colorful",
        "light",
        "refraction",
        "prism",
        "bird",
        "Red, Orange, Yellow, Green, Blue, Indigo, Violet",
      ],
    },
    {
      name: "covid",
      keyword: ["wfh", "covid", "sick", "virus"],
    },
    {
      name: "forehead-temprature-tester",
      keyword: ["sick", "covid", "ill", "doctor"],
    },
    {
      name: "namaste-no-hand-shake",
      keyword: ["wfh", "covid", "hello", "hand"],
    },
    {
      name: "sanitizer",
      keyword: ["wfh", "covid", "clean", "doctor"],
    },
    {
      name: "sick-sneezing",
      keyword: ["covid", "ill", "face", "girl"],
    },
    {
      name: "temprature",
      keyword: ["wfh", "covid", "sick", "tool", "doctor"],
    },
    {
      name: "wash-hand",
      keyword: ["wfh", "covid", "sanitizer", "clean"],
    },
    {
      name: "wear-mask",
      keyword: ["wfh", "covid", "flu", "sick", "face"],
    },
    {
      name: "work-from-home-video-chat",
      keyword: [
        "wfh",
        "covid",
        "work",
        "call",
        "zoom",
        "meet",
        "office",
        "laptop",
        "girl",
      ],
    },
    {
      name: "work-from-home",
      keyword: ["wfh", "covid", "work", "office", "laptop", "call", "computer"],
    },
  ],
};

module.exports = illlustrations;
