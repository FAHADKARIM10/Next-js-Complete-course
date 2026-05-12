export interface GameFaq {
  question: string;
  answer: string;
}

export interface Game {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: string;
  rating: number;
  totalReviews: number;
  downloads: string;
  icon: string;
  developer: string;
  version: string;
  size: string;
  lastUpdated: string;
  platforms: string[];
  affiliateLink: string;
  androidLink: string;
  iosLink: string;
  established: string;
  screenshots: { url: string; alt: string }[];
  features: string[];
  pros: string[];
  cons: string[];
  minDeposit: string;
  welcomeBonus: string;
  faqs: GameFaq[];
  expertReview: string;
  expertName: string;
  expertTitle: string;
  tags: string[];
  featured: boolean;
}

export const games: Game[] = [
  {
    id: "1",
    slug: "aviator",
    name: "Aviator",
    tagline: "The original crash game with real money multipliers",
    description:
      "Aviator by Spribe is the world's most popular crash game. Watch the multiplier climb and cash out before the plane flies away to win big.",
    longDescription:
      "Aviator is a provably fair crash game developed by Spribe that has taken the online gambling world by storm. The concept is brilliantly simple: a plane takes off and a multiplier starts rising from 1x. You must cash out before the plane flies away — if it does, you lose your bet. The longer you wait, the bigger your potential win, but the risk grows every second. With real-time multiplayer betting, live stats, and the ability to place two simultaneous bets, Aviator combines skill, nerve, and strategy like no other game. It's available on all major online casino platforms and licensed by reputable gaming authorities.",
    category: "Crash Games",
    rating: 4.8,
    totalReviews: 14200,
    downloads: "10M+",
    icon: "✈️",
    developer: "Spribe",
    version: "2.1.0",
    size: "45 MB",
    lastUpdated: "2025-04-10",
    platforms: ["android", "ios", "web"],
    affiliateLink: "#affiliate-aviator",
    androidLink: "#download-android-aviator",
    iosLink: "#download-ios-aviator",
    established: "2019",
    screenshots: [
      { url: "/images/games/aviator/screenshot-1.webp", alt: "Aviator game main screen showing plane and multiplier" },
      { url: "/images/games/aviator/screenshot-2.webp", alt: "Aviator cash out moment with 3.5x multiplier" },
      { url: "/images/games/aviator/screenshot-3.webp", alt: "Aviator bet history and live statistics panel" },
      { url: "/images/games/aviator/screenshot-4.webp", alt: "Aviator mobile interface on Android" },
    ],
    features: [
      "Provably fair algorithm — verify every round",
      "Live multiplayer with real-time bet feed",
      "Auto cash-out and auto-bet settings",
      "Two simultaneous bets per round",
      "In-game chat and social features",
      "Free play demo mode",
      "Instant withdrawals via major payment methods",
    ],
    pros: [
      "Simple, fast-paced gameplay",
      "Transparent and provably fair",
      "Low minimum bets suitable for all budgets",
      "Available on all casino platforms",
      "High potential multipliers (up to 10,000x)",
    ],
    cons: [
      "High volatility can drain bankroll quickly",
      "No skill element — pure probability",
      "Can be addictive due to fast rounds",
    ],
    minDeposit: "₹100",
    welcomeBonus: "100% up to ₹10,000 + 100 Free Spins",
    expertReview:
      "Aviator earns its status as the king of crash games. The provably fair system builds genuine trust, while the social elements — watching others cash out, live bets — create an atmosphere unlike any traditional slot. Our testing over 500+ rounds confirmed the RTP holds near the published 97%, and the mobile experience is flawless. Best played with disciplined bankroll management: set auto cash-out between 1.5x–2x for consistent returns.",
    expertName: "Rahul Sharma",
    expertTitle: "Senior Casino Games Analyst, 8 Years Experience",
    tags: ["crash game", "multiplier", "spribe", "provably fair", "real money"],
    featured: true,
    faqs: [
      {
        question: "Is Aviator legal to play in India?",
        answer:
          "Aviator is available on internationally licensed online casinos accessible from India. While India does not have a central law banning online casino games, players should check their state regulations. Goa, Sikkim, and Daman have legalized certain forms of gambling.",
      },
      {
        question: "How do I download Aviator on Android?",
        answer:
          "Aviator is not a standalone app but runs on casino platforms. Visit any licensed casino that hosts Aviator (like 1Win, Parimatch, etc.), go to their mobile site or download their APK from their official website, register, and find Aviator in the games lobby.",
      },
      {
        question: "What is the RTP of Aviator?",
        answer:
          "Aviator has a published RTP (Return to Player) of 97%, meaning for every ₹100 wagered, ₹97 is returned to players on average over millions of rounds. This is among the highest RTPs in online casino games.",
      },
      {
        question: "Can I play Aviator for free?",
        answer:
          "Yes. Most casinos that offer Aviator provide a free demo mode where you can play with virtual coins and learn the game without risking real money.",
      },
      {
        question: "What is the maximum win in Aviator?",
        answer:
          "The multiplier in Aviator can theoretically reach 10,000x before the game enforces a cap. Your maximum win depends on your bet size multiplied by the multiplier at cash-out.",
      },
      {
        question: "How is Aviator provably fair?",
        answer:
          "Each round's outcome is generated using a combination of server seed and client seed that you can verify after the round ends. The SHA-256 hash is published before each round, proving the result was not manipulated.",
      },
    ],
  },
  {
    id: "2",
    slug: "teen-patti-gold",
    name: "Teen Patti Gold",
    tagline: "India's most-loved 3-card poker game",
    description:
      "Teen Patti Gold is the ultimate 3-card poker experience for Indian players. Play with friends or millions online, win big with Joker and Plus variants.",
    longDescription:
      "Teen Patti Gold by Moonfrog Labs is India's #1 card game app with over 50 million downloads. Based on the traditional Indian card game Teen Patti (three-card brag), this app brings the authentic experience to your smartphone with stunning graphics and social features. Play Classic Teen Patti, Joker mode, AK47, Muflis, and more variants. Join public tables or create private rooms for friends. The game uses virtual chips — top up to keep playing. Special live events, daily bonuses, and VIP rewards keep the action going. Teen Patti Gold is purely social gaming; it uses virtual coins and does not involve real money wagering.",
    category: "Card Games",
    rating: 4.7,
    totalReviews: 28500,
    downloads: "50M+",
    icon: "🃏",
    developer: "Moonfrog Labs",
    version: "7.45",
    size: "89 MB",
    lastUpdated: "2025-03-28",
    platforms: ["android", "ios"],
    affiliateLink: "#affiliate-teen-patti-gold",
    androidLink: "#download-android-teen-patti-gold",
    iosLink: "#download-ios-teen-patti-gold",
    established: "2014",
    screenshots: [
      { url: "/images/games/teen-patti-gold/screenshot-1.webp", alt: "Teen Patti Gold main lobby with chip balance" },
      { url: "/images/games/teen-patti-gold/screenshot-2.webp", alt: "Classic Teen Patti table with 6 players" },
      { url: "/images/games/teen-patti-gold/screenshot-3.webp", alt: "Joker variant gameplay" },
      { url: "/images/games/teen-patti-gold/screenshot-4.webp", alt: "VIP private room table" },
    ],
    features: [
      "Multiple variants: Classic, Joker, AK47, Muflis, Hukam",
      "Live private rooms for friends",
      "Daily login bonuses and spin wheel",
      "VIP club with exclusive tables",
      "Real-time chat with emojis and gifts",
      "Offline practice mode",
      "Facebook and Google login support",
    ],
    pros: [
      "Most popular card game in India",
      "Huge player base — never wait for a table",
      "Multiple engaging variants",
      "Regular updates and new features",
      "Free to play with generous daily bonuses",
    ],
    cons: [
      "In-app purchases can add up",
      "Some players experience chip drain on high-stakes tables",
      "Occasional server connectivity issues",
    ],
    minDeposit: "Free (virtual chips)",
    welcomeBonus: "5 Crore chips on first login",
    expertReview:
      "Teen Patti Gold remains the gold standard for social card gaming in India. After testing all major variants, the game mechanics are faithful to the traditional rules while the social layer — gifting, emotes, private rooms — genuinely enhances the fun. The VIP tables offer a premium feel. As a social casino game (no real money), it's the perfect way to sharpen your Teen Patti skills risk-free.",
    expertName: "Priya Mehta",
    expertTitle: "Card Games Specialist & Strategy Writer",
    tags: ["teen patti", "3-card poker", "indian card game", "social casino", "multiplayer"],
    featured: true,
    faqs: [
      {
        question: "Does Teen Patti Gold involve real money?",
        answer:
          "No. Teen Patti Gold is a social casino game that uses virtual chips only. You cannot withdraw chips as real money. It is purely for entertainment purposes.",
      },
      {
        question: "How do I get more chips in Teen Patti Gold?",
        answer:
          "You receive free chips through daily login bonuses, wheel spins, watching ads, completing daily quests, and inviting friends. You can also purchase chip packs through in-app purchases.",
      },
      {
        question: "How do I download Teen Patti Gold on Android?",
        answer:
          "Open the Google Play Store, search 'Teen Patti Gold', and tap Install. The app is free. Alternatively, download the APK from the official website if the Play Store is unavailable in your region.",
      },
      {
        question: "Can I play Teen Patti Gold on PC?",
        answer:
          "Yes. Use an Android emulator like BlueStacks or LDPlayer on your Windows PC. Install the Teen Patti Gold APK through the emulator to play with mouse and keyboard.",
      },
      {
        question: "Is Teen Patti Gold safe to download?",
        answer:
          "Yes. Teen Patti Gold is developed by Moonfrog Labs, a reputable Indian gaming company. The app is available on both the Google Play Store and Apple App Store and has been verified safe.",
      },
      {
        question: "What are the different game modes in Teen Patti Gold?",
        answer:
          "Teen Patti Gold offers Classic, Joker, Muflis, AK47, Hukam, Royal, 2 Cards, and more. New variants are added regularly. Each mode has different rules and excitement levels.",
      },
    ],
  },
  {
    id: "3",
    slug: "rummy-circle",
    name: "RummyCircle",
    tagline: "India's largest real-money rummy platform",
    description:
      "RummyCircle is the #1 online rummy platform in India with over 10 million players. Play Points Rummy, Pool Rummy, and Deals Rummy for real cash prizes.",
    longDescription:
      "RummyCircle, operated by Play Games24x7 Pvt. Ltd., is India's most trusted online rummy destination. It's one of the few skill-based card game platforms that are legally recognized under Indian law in most states. With RummyCircle, you can play Points Rummy, Pool Rummy (51 Pool, 101 Pool), and Deals Rummy — all for real cash. The platform is certified by iTech Labs for fair play and uses bank-grade security for transactions. Tournaments run daily with prize pools up to ₹1 crore. The app is fast, has a clean interface, and supports instant withdrawals to bank accounts and UPI.",
    category: "Card Games",
    rating: 4.6,
    totalReviews: 18900,
    downloads: "25M+",
    icon: "🎴",
    developer: "Play Games24x7 Pvt. Ltd.",
    version: "6.12",
    size: "67 MB",
    lastUpdated: "2025-04-05",
    platforms: ["android", "ios", "web"],
    affiliateLink: "#affiliate-rummy-circle",
    androidLink: "#download-android-rummy-circle",
    iosLink: "#download-ios-rummy-circle",
    established: "2010",
    screenshots: [
      { url: "/images/games/rummy-circle/screenshot-1.webp", alt: "RummyCircle main lobby with game options" },
      { url: "/images/games/rummy-circle/screenshot-2.webp", alt: "Points Rummy table with cards dealt" },
      { url: "/images/games/rummy-circle/screenshot-3.webp", alt: "Tournament lobby with prize pool details" },
      { url: "/images/games/rummy-circle/screenshot-4.webp", alt: "RummyCircle withdrawal page" },
    ],
    features: [
      "Points, Pool (51/101), and Deals Rummy",
      "Daily tournaments with ₹1 crore+ prize pools",
      "iTech Labs certified fair play",
      "Instant withdrawals via UPI, Net Banking, Paytm",
      "Welcome bonus up to ₹10,000",
      "Practice tables with virtual chips",
      "24/7 customer support",
    ],
    pros: [
      "Legal skill game in most Indian states",
      "Largest player pool — fast matchmaking",
      "Certified fair play by iTech Labs",
      "Instant withdrawal to bank/UPI",
      "Regular high-value tournaments",
    ],
    cons: [
      "Not available in some Indian states (TN, AP, Telangana)",
      "Real money involves financial risk",
      "KYC required for withdrawals",
    ],
    minDeposit: "₹25",
    welcomeBonus: "100% Welcome Bonus up to ₹10,000",
    expertReview:
      "RummyCircle sets the benchmark for real-money rummy in India. In our testing, match-making at mid-stakes tables took under 10 seconds, card animations were smooth, and withdrawals cleared to UPI within minutes. The iTech Labs certification provides genuine assurance of fairness. For skill-based gaming with real stakes, RummyCircle is our top recommendation.",
    expertName: "Arjun Kapoor",
    expertTitle: "Skill Games Analyst & Rummy Strategist",
    tags: ["rummy", "real money", "skill game", "online rummy", "card game india"],
    featured: true,
    faqs: [
      {
        question: "Is RummyCircle legal in India?",
        answer:
          "Rummy is recognized as a skill game by the Supreme Court of India. RummyCircle operates legally in most Indian states. However, it is not available in Tamil Nadu, Andhra Pradesh, Telangana, and a few other states due to local gaming laws.",
      },
      {
        question: "How do I download RummyCircle on my phone?",
        answer:
          "Visit the RummyCircle website and tap 'Download App' to get the Android APK directly (it's not on Google Play due to Google's real-money gaming policy). iOS users can download from the Apple App Store.",
      },
      {
        question: "How do I withdraw money from RummyCircle?",
        answer:
          "Complete KYC verification, then go to your account wallet and select 'Withdraw'. Withdrawals are processed via UPI, NEFT/IMPS to bank account, or Paytm. Most withdrawals clear within 24–48 hours.",
      },
      {
        question: "What is the minimum deposit on RummyCircle?",
        answer:
          "The minimum deposit on RummyCircle is ₹25, making it accessible to players of all budgets.",
      },
      {
        question: "Is my money safe on RummyCircle?",
        answer:
          "Yes. RummyCircle uses 128-bit SSL encryption for all transactions. Player funds are held in a separate escrow account and are protected by the company's licensing terms.",
      },
      {
        question: "What types of Rummy can I play on RummyCircle?",
        answer:
          "RummyCircle offers Points Rummy (fastest variant), Pool Rummy (51-card pool and 101-card pool), and Deals Rummy. All three variants are available at multiple stake levels from ₹0.10 to ₹1,000+.",
      },
    ],
  },
  {
    id: "4",
    slug: "pokerbaazi",
    name: "PokerBaazi",
    tagline: "India's premier real-money online poker room",
    description:
      "PokerBaazi is the most trusted online poker platform in India offering Texas Hold'em, Omaha, and massive daily tournaments with guaranteed prize pools.",
    longDescription:
      "PokerBaazi, launched by Baazi Games, is India's leading skill-based online poker platform. It offers Texas Hold'em, Pot Limit Omaha (PLO), and short-deck poker across cash games, Sit & Go, and MTT (Multi-Table Tournaments). With millions of registered users and daily guaranteed tournament prize pools crossing ₹50 lakh, PokerBaazi caters to everyone from micro-stakes beginners to high-roller professionals. The platform is certified by iTech Labs, offers a comprehensive hand history tool, real-time stats, and a robust training section with strategy articles. Deposits and withdrawals support UPI, Net Banking, and major e-wallets.",
    category: "Poker",
    rating: 4.5,
    totalReviews: 9800,
    downloads: "5M+",
    icon: "♠️",
    developer: "Baazi Games Pvt. Ltd.",
    version: "4.8.2",
    size: "78 MB",
    lastUpdated: "2025-04-12",
    platforms: ["android", "ios", "web"],
    affiliateLink: "#affiliate-pokerbaazi",
    androidLink: "#download-android-pokerbaazi",
    iosLink: "#download-ios-pokerbaazi",
    established: "2014",
    screenshots: [
      { url: "/images/games/pokerbaazi/screenshot-1.webp", alt: "PokerBaazi lobby with cash game tables" },
      { url: "/images/games/pokerbaazi/screenshot-2.webp", alt: "Texas Hold'em table in action" },
      { url: "/images/games/pokerbaazi/screenshot-3.webp", alt: "MTT tournament registration screen" },
      { url: "/images/games/pokerbaazi/screenshot-4.webp", alt: "PokerBaazi hand history stats" },
    ],
    features: [
      "Texas Hold'em, PLO, and Short Deck poker",
      "Daily GTD tournaments with ₹50L+ prize pools",
      "Real-time hand history and HUD stats",
      "Multi-table support (up to 4 tables)",
      "Built-in strategy school and tutorials",
      "Rakeback and loyalty program",
      "UPI and instant bank transfers",
    ],
    pros: [
      "Skill-based game — legal and regulated",
      "Large player pool and fast cash game action",
      "Transparent rakeback and VIP rewards",
      "Excellent mobile app design",
      "Strong tutorial resources for beginners",
    ],
    cons: [
      "High competition at upper stakes",
      "KYC process can take 24–48 hours",
      "Limited game variety beyond poker variants",
    ],
    minDeposit: "₹100",
    welcomeBonus: "200% welcome bonus up to ₹50,000",
    expertReview:
      "PokerBaazi has consistently impressed our team with its software quality. The multi-table interface runs without frame drops even on mid-range Android devices. Traffic at NL200 and below is excellent — expect to find full tables within 30 seconds any time of day. The tournament schedule is aggressive with a strong nightly PKO series. For serious poker players in India, this is the most complete package available.",
    expertName: "Vikram Sinha",
    expertTitle: "Professional Poker Player & Platform Reviewer",
    tags: ["poker", "texas holdem", "real money poker", "MTT", "online poker india"],
    featured: false,
    faqs: [
      {
        question: "Is online poker legal in India?",
        answer:
          "Poker is widely recognized as a game of skill and is legally permitted in most Indian states. PokerBaazi operates under the skill gaming exemption. It is restricted in states like Telangana, Andhra Pradesh, and Nagaland.",
      },
      {
        question: "How do I download PokerBaazi APK on Android?",
        answer:
          "Go to the official PokerBaazi website, tap 'Download App', and download the APK file. Enable 'Install from unknown sources' in your Android settings, then run the APK to install.",
      },
      {
        question: "What is the minimum buy-in for cash games?",
        answer:
          "PokerBaazi offers micro-stakes tables starting as low as ₹5 big blind, making it accessible to new players. The minimum buy-in at the lowest stakes is around ₹25.",
      },
      {
        question: "Does PokerBaazi offer a rakeback deal?",
        answer:
          "Yes. PokerBaazi runs a loyalty program called 'Supremacy' with tiered rakeback from 20% to 40% depending on your level. High-volume players can negotiate custom deals.",
      },
      {
        question: "How do I complete KYC on PokerBaazi?",
        answer:
          "Go to 'My Account' > 'KYC Verification'. Upload a government ID (Aadhaar, PAN card, passport) and a selfie. Verification typically completes within 24 hours.",
      },
      {
        question: "Can I play PokerBaazi on a PC?",
        answer:
          "Yes. PokerBaazi has a dedicated web client that runs in any browser. No download required for PC play — just visit the website and log in.",
      },
    ],
  },
  {
    id: "5",
    slug: "blackjack-pro",
    name: "Blackjack Pro",
    tagline: "Classic blackjack with live dealers and side bets",
    description:
      "Blackjack Pro delivers casino-quality blackjack online with perfect strategy guides, live dealers, and multiple variants including Vegas Strip, Classic 21, and Pontoon.",
    longDescription:
      "Blackjack Pro brings the thrill of the world's most-played casino table game to your screen with unmatched authenticity. Featuring multiple blackjack variants — Vegas Strip, Atlantic City, European, Pontoon, and Perfect Pairs — the game caters to both beginners and card counters. The built-in perfect basic strategy chart is a massive advantage for new players, helping them minimize the house edge to just 0.5%. Live dealer tables with professional croupiers streaming in HD add the real casino atmosphere. Side bets like Perfect Pairs and 21+3 keep every hand exciting. The game runs on a certified RNG (Random Number Generator) audited by eCOGRA.",
    category: "Table Games",
    rating: 4.6,
    totalReviews: 11200,
    downloads: "8M+",
    icon: "🃏",
    developer: "Evolution Gaming / Multiple Providers",
    version: "3.5.1",
    size: "55 MB",
    lastUpdated: "2025-03-20",
    platforms: ["android", "ios", "web"],
    affiliateLink: "#affiliate-blackjack-pro",
    androidLink: "#download-android-blackjack-pro",
    iosLink: "#download-ios-blackjack-pro",
    established: "2015",
    screenshots: [
      { url: "/images/games/blackjack-pro/screenshot-1.webp", alt: "Blackjack Pro Vegas Strip table layout" },
      { url: "/images/games/blackjack-pro/screenshot-2.webp", alt: "Live dealer blackjack with HD streaming" },
      { url: "/images/games/blackjack-pro/screenshot-3.webp", alt: "Perfect Pairs side bet winning screen" },
      { url: "/images/games/blackjack-pro/screenshot-4.webp", alt: "Blackjack strategy guide overlay" },
    ],
    features: [
      "5+ blackjack variants including live dealer",
      "Built-in basic strategy guide",
      "Side bets: Perfect Pairs, 21+3, Insurance",
      "eCOGRA certified RNG",
      "HD live dealer streaming",
      "Multi-hand play (up to 5 hands)",
      "Free demo mode",
    ],
    pros: [
      "Lowest house edge (0.5%) of any casino game",
      "Live dealer option for authentic experience",
      "Strategy guide built into the game",
      "Multiple variants keep gameplay fresh",
      "Fast-paced rounds perfect for mobile",
    ],
    cons: [
      "Requires basic strategy knowledge to maximize returns",
      "Live tables have minimum bet requirements",
      "Side bets increase house edge significantly",
    ],
    minDeposit: "₹200",
    welcomeBonus: "150% up to ₹15,000 on first deposit",
    expertReview:
      "Blackjack Pro is our top recommendation for players seeking the best odds in online casino gaming. With basic strategy, the house edge drops to just 0.5% — among the lowest you'll find anywhere. The live dealer integration is seamless with under 1-second stream latency. We particularly appreciate the in-game strategy chart that new players can reference during actual hands.",
    expertName: "Sanjay Malhotra",
    expertTitle: "Casino Games Expert & Blackjack Strategist",
    tags: ["blackjack", "21", "live dealer", "table games", "low house edge"],
    featured: false,
    faqs: [
      {
        question: "What is the house edge in Blackjack Pro?",
        answer:
          "With perfect basic strategy, the house edge in standard blackjack is approximately 0.5%. Without strategy, it rises to 2–3%. The built-in strategy guide helps you achieve near-optimal play.",
      },
      {
        question: "How do I download Blackjack Pro on Android?",
        answer:
          "Visit the casino website that hosts Blackjack Pro, download their mobile app or APK, register an account, make a deposit, and find Blackjack Pro in the table games section.",
      },
      {
        question: "What are the best side bets in Blackjack?",
        answer:
          "Most side bets in blackjack carry a high house edge (3–20%). Perfect Pairs has about 6% house edge and 21+3 around 5%. They add excitement but should be played sparingly.",
      },
      {
        question: "Can I count cards in online blackjack?",
        answer:
          "Card counting is ineffective in online RNG blackjack because the deck is reshuffled after every hand. In live dealer blackjack, some games use continuous shuffling machines, making counting impractical.",
      },
      {
        question: "What is the difference between European and Vegas Strip blackjack?",
        answer:
          "In European Blackjack, the dealer does not take a hole card until after players act, which affects the insurance and doubling strategy. Vegas Strip uses 4 decks and has more favorable doubling rules.",
      },
      {
        question: "Is Blackjack Pro available for free?",
        answer:
          "Yes. Most casino platforms offer a free demo mode for Blackjack Pro where you can practice with virtual chips and master basic strategy before playing for real money.",
      },
    ],
  },
  {
    id: "6",
    slug: "baccarat-royal",
    name: "Baccarat Royal",
    tagline: "The most played VIP casino game — now in your pocket",
    description:
      "Baccarat Royal brings the elegance of James Bond's favorite game online. Fast 3-card draws, Banker vs Player bets, and live tables with HD streaming.",
    longDescription:
      "Baccarat Royal is a premium implementation of the world's most bet-upon casino game. The rules are elegantly simple: bet on Banker, Player, or Tie, and watch two hands of cards resolve in under 30 seconds. With a Banker house edge of just 1.06% (excluding commission), baccarat offers some of the best odds in the casino. Baccarat Royal features standard Punto Banco, Speed Baccarat, No Commission Baccarat, and Super 6 variants. The live dealer version streams from professional studios with real-time statistics — road bead, big road, and big eye boy — beloved by baccarat regulars. Squeeze rounds where the dealer slowly reveals cards add tension to every hand.",
    category: "Table Games",
    rating: 4.5,
    totalReviews: 8400,
    downloads: "3M+",
    icon: "👑",
    developer: "Evolution Gaming",
    version: "2.8.0",
    size: "60 MB",
    lastUpdated: "2025-02-18",
    platforms: ["android", "ios", "web"],
    affiliateLink: "#affiliate-baccarat-royal",
    androidLink: "#download-android-baccarat-royal",
    iosLink: "#download-ios-baccarat-royal",
    established: "2016",
    screenshots: [
      { url: "/images/games/baccarat-royal/screenshot-1.webp", alt: "Baccarat Royal main table with bet placement UI" },
      { url: "/images/games/baccarat-royal/screenshot-2.webp", alt: "Live baccarat dealer revealing cards" },
      { url: "/images/games/baccarat-royal/screenshot-3.webp", alt: "Bead road and statistics panel" },
      { url: "/images/games/baccarat-royal/screenshot-4.webp", alt: "Speed Baccarat table with timer" },
    ],
    features: [
      "Multiple variants: Punto Banco, Speed Baccarat, Super 6",
      "Live dealer rooms with bead road statistics",
      "Squeeze rounds with slow card reveal",
      "Side bets: Pairs, Dragon Bonus",
      "Detailed road maps for pattern tracking",
      "Multi-language table chat",
      "Demo mode available",
    ],
    pros: [
      "Second-lowest house edge after blackjack",
      "Extremely fast rounds (30 seconds)",
      "Live dealer experience is exceptional",
      "Simple rules — easy for beginners",
      "VIP high-limit tables available",
    ],
    cons: [
      "Tie bet has a very high house edge (14%+)",
      "Pattern systems have no mathematical basis",
      "High-limit tables require large bankroll",
    ],
    minDeposit: "₹300",
    welcomeBonus: "120% up to ₹20,000 for new players",
    expertReview:
      "Baccarat Royal's live studio production quality rivals physical casinos. The multi-camera squeeze format — where the dealer slowly bends and reveals the corner of each card — genuinely builds tension in a way that RNG games cannot match. Traffic on both Player and Banker-focused tables is consistent across all hours. Mathematically, always betting Banker (1.06% edge minus 5% commission = 1.17% net) is the optimal strategy.",
    expertName: "Anjali Desai",
    expertTitle: "Live Casino Specialist & Game Reviewer",
    tags: ["baccarat", "live casino", "punto banco", "VIP casino", "low house edge"],
    featured: false,
    faqs: [
      {
        question: "What bet has the lowest house edge in baccarat?",
        answer:
          "The Banker bet has a house edge of 1.06% (before commission). After the standard 5% commission, the effective edge is 1.17%. This is one of the best bets in the casino. Player bet has a 1.24% edge.",
      },
      {
        question: "How do I download Baccarat Royal on mobile?",
        answer:
          "Baccarat Royal is hosted on major online casino platforms. Download the casino's app (or access their mobile site), register, and find Baccarat in the live casino or table games lobby.",
      },
      {
        question: "What is the Tie bet in baccarat?",
        answer:
          "The Tie bet pays 8:1 when both Banker and Player hands end with the same value. However, the house edge on the Tie bet is 14.4%, making it one of the worst bets in the casino. Avoid it.",
      },
      {
        question: "What is Speed Baccarat?",
        answer:
          "Speed Baccarat plays a round every 27 seconds instead of the standard 60 seconds. Cards are dealt face-up immediately without the squeeze, making it ideal for players who prefer a faster pace.",
      },
      {
        question: "Can I track patterns in baccarat?",
        answer:
          "The road maps (Big Road, Bead Plate, Big Eye Boy, Small Road, Cockroach Road) track historical results. However, each baccarat hand is independent — past results have no mathematical impact on future outcomes.",
      },
      {
        question: "Is Baccarat Royal available for free play?",
        answer:
          "RNG Baccarat Royal has a free demo mode. However, live dealer baccarat tables require a real-money deposit as they use actual dealers and cards.",
      },
    ],
  },
  {
    id: "7",
    slug: "dragon-tiger",
    name: "Dragon Tiger Live",
    tagline: "The fastest casino card game — one card decides all",
    description:
      "Dragon Tiger is the simplest and fastest casino card game. Bet on Dragon or Tiger to receive the higher card and win. Rounds complete in under 25 seconds.",
    longDescription:
      "Dragon Tiger is a two-card version of baccarat that became massively popular across Asian casinos and has now conquered the online gaming world. The rules could not be simpler: one card is dealt to Dragon, one to Tiger — the higher card wins. Betting on Dragon or Tiger pays 1:1 (minus ties). The Tie bet pays 8:1. Side bets include Suited Tie (50:1), Big, Small, Odd, and Even. Dragon Tiger Live features professional live dealers, multiple camera angles, detailed card history, and betting patterns. With a house edge of just 3.73% on the main bets, it's one of the fairest games in live casino. The speed of play makes it ideal for mobile gaming.",
    category: "Card Games",
    rating: 4.4,
    totalReviews: 12600,
    downloads: "12M+",
    icon: "🐉",
    developer: "Evolution Gaming / Ezugi",
    version: "3.2.1",
    size: "48 MB",
    lastUpdated: "2025-03-05",
    platforms: ["android", "ios", "web"],
    affiliateLink: "#affiliate-dragon-tiger",
    androidLink: "#download-android-dragon-tiger",
    iosLink: "#download-ios-dragon-tiger",
    established: "2017",
    screenshots: [
      { url: "/images/games/dragon-tiger/screenshot-1.webp", alt: "Dragon Tiger Live table with betting areas" },
      { url: "/images/games/dragon-tiger/screenshot-2.webp", alt: "Live dealer dealing Dragon and Tiger cards" },
      { url: "/images/games/dragon-tiger/screenshot-3.webp", alt: "Dragon Tiger side bet options" },
      { url: "/images/games/dragon-tiger/screenshot-4.webp", alt: "Dragon Tiger win screen with payout" },
    ],
    features: [
      "Lightning-fast 25-second rounds",
      "Live dealer with HD streaming",
      "Side bets: Suited Tie, Big, Small, Odd, Even",
      "Card history and trend statistics",
      "Multiple betting positions available",
      "Mobile-optimized interface",
      "Auto-bet feature",
    ],
    pros: [
      "Simplest casino card game to learn",
      "Extremely fast rounds",
      "Low house edge on main bets",
      "Exciting side bets for variety",
      "Perfect for quick mobile gaming sessions",
    ],
    cons: [
      "Less strategic depth than blackjack or poker",
      "Tie and suited tie bets have high house edge",
      "Can feel repetitive over long sessions",
    ],
    minDeposit: "₹150",
    welcomeBonus: "100% up to ₹8,000 on first deposit",
    expertReview:
      "Dragon Tiger Live is perfectly designed for players who want live casino action without complexity. The 25-second round time means you can squeeze in 100+ rounds in an hour. Evolution's live studio quality is top-tier — clear video even on 4G connections. Stick to Dragon or Tiger bets only; the side bets are entertaining but carry house edges of 10%+. Our recommended strategy: flat bet Dragon until 3 consecutive wins, then switch to Tiger.",
    expertName: "Rohit Verma",
    expertTitle: "Live Casino Games Reviewer",
    tags: ["dragon tiger", "live casino", "card game", "fast game", "asian casino"],
    featured: false,
    faqs: [
      {
        question: "What is the house edge in Dragon Tiger?",
        answer:
          "The Dragon and Tiger bets each have a house edge of 3.73%. The Tie bet has a 32.77% edge at 8:1 payout. Avoid the Tie bet. Side bets like Big and Small have a 7.69% house edge.",
      },
      {
        question: "How do I download Dragon Tiger Live?",
        answer:
          "Dragon Tiger Live is part of live casino suites offered by platforms powered by Evolution Gaming or Ezugi. Download the casino app, find the live casino section, and look for Dragon Tiger.",
      },
      {
        question: "What happens on a Tie in Dragon Tiger?",
        answer:
          "When Dragon and Tiger receive cards of equal value, it's a Tie. The Tie bet wins at 8:1. Dragon and Tiger bets lose half their wager (the casino takes 50% push rule in some versions, or the full bet in others — check your casino's rules).",
      },
      {
        question: "Is Dragon Tiger based on skill or luck?",
        answer:
          "Dragon Tiger is purely a luck-based game. There are no decisions to make beyond placing your bet. Each round is independent and no betting system can overcome the house edge long-term.",
      },
      {
        question: "Can I play Dragon Tiger for free?",
        answer:
          "RNG (non-live) Dragon Tiger versions have free demo modes. Live Dragon Tiger tables require a real-money account as they use real dealers and equipment.",
      },
      {
        question: "What is the Suited Tie bet in Dragon Tiger?",
        answer:
          "The Suited Tie pays 50:1 when both Dragon and Tiger cards are of the same rank AND same suit. While the payout is exciting, the probability is very low and the house edge exceeds 60%.",
      },
    ],
  },
  {
    id: "8",
    slug: "andar-bahar",
    name: "Andar Bahar Classic",
    tagline: "The traditional Indian card game gone digital",
    description:
      "Andar Bahar is India's most beloved traditional card game. Bet on Andar or Bahar — which side will match the Joker card? Simple, fast, and purely Indian.",
    longDescription:
      "Andar Bahar, also known as Katti, is a traditional Indian gambling card game that has moved from street corners to premium online casinos worldwide. The dealer places one face-up card (the Joker) in the middle and deals cards alternately to the Andar (inside) and Bahar (outside) piles. Your bet: which pile will first receive a card matching the Joker's value? Andar Bahar Classic brings this experience to mobile with RNG and live dealer versions. With its origins deeply rooted in Indian culture, every major online casino now offers Andar Bahar with Indian dealers speaking Hindi. Bet sizes range from ₹10 to ₹1 lakh per hand. Side bets include First Card Suit, Number of Cards Until Match, and Card Position.",
    category: "Card Games",
    rating: 4.5,
    totalReviews: 16800,
    downloads: "15M+",
    icon: "🎭",
    developer: "Ezugi / Playtech Live",
    version: "2.9.4",
    size: "42 MB",
    lastUpdated: "2025-03-30",
    platforms: ["android", "ios", "web"],
    affiliateLink: "#affiliate-andar-bahar",
    androidLink: "#download-android-andar-bahar",
    iosLink: "#download-ios-andar-bahar",
    established: "2018",
    screenshots: [
      { url: "/images/games/andar-bahar/screenshot-1.webp", alt: "Andar Bahar Classic table with Joker card" },
      { url: "/images/games/andar-bahar/screenshot-2.webp", alt: "Hindi-speaking live dealer with Andar Bahar game" },
      { url: "/images/games/andar-bahar/screenshot-3.webp", alt: "Andar Bahar side bet selection screen" },
      { url: "/images/games/andar-bahar/screenshot-4.webp", alt: "Andar Bahar winning round celebration" },
    ],
    features: [
      "Hindi and English-speaking live dealers",
      "RNG and Live dealer versions",
      "Multiple side bets: suit, position, card count",
      "Statistics panel with history",
      "Bet limits from ₹10 to ₹1,00,000",
      "Lightning Andar Bahar with multipliers",
      "Mobile-first design",
    ],
    pros: [
      "Culturally familiar game for Indian players",
      "Simple and fast gameplay",
      "Hindi dealers create authentic experience",
      "Near 50/50 odds on main bet",
      "Low minimum bets",
    ],
    cons: [
      "Almost no strategy element — pure luck",
      "House edge slightly higher on Bahar vs Andar",
      "Side bets carry significant house advantage",
    ],
    minDeposit: "₹100",
    welcomeBonus: "100% up to ₹5,000 welcome bonus",
    expertReview:
      "Andar Bahar Classic perfectly bridges traditional Indian culture and modern online gaming. Ezugi's Hindi-speaking dealers make the game feel genuinely authentic — a detail that western casinos consistently overlook. The house edge is approximately 2.15% on Andar and 2.29% on Bahar (since Bahar pays 0.9:1 when Joker's first card is black). For Indian players seeking a culturally familiar live casino experience, this is our top pick.",
    expertName: "Deepika Singh",
    expertTitle: "Indian Casino Games Expert",
    tags: ["andar bahar", "katti", "indian card game", "live casino", "hindi dealer"],
    featured: true,
    faqs: [
      {
        question: "What is the difference between Andar and Bahar bets?",
        answer:
          "Andar (left side) pays 0.9:1 when the first card dealt is the same color as the Joker, or 1:1 otherwise. Bahar (right side) pays 1:1. Andar wins approximately 51.5% of the time when the Joker is a black card, making it statistically slightly better.",
      },
      {
        question: "How do I download Andar Bahar on Android?",
        answer:
          "Andar Bahar is hosted on casino apps. Download the app of a casino that offers Ezugi or Playtech Live games (many India-focused casinos do), register, and find Andar Bahar in the live casino section.",
      },
      {
        question: "Is Andar Bahar legal in India?",
        answer:
          "Andar Bahar falls under online gambling, which is not explicitly illegal under central Indian law but is regulated differently by state. Play on internationally licensed platforms for security.",
      },
      {
        question: "What is the house edge in Andar Bahar?",
        answer:
          "The standard house edge on the main Andar bet is 2.15% and Bahar is 2.29%. Side bets like 'number of cards before match' have varying edges from 5% to 25%.",
      },
      {
        question: "Can I play Andar Bahar for free?",
        answer:
          "RNG Andar Bahar versions are available in free demo mode on many casino websites. Live dealer Andar Bahar requires a real-money account.",
      },
      {
        question: "What is Lightning Andar Bahar?",
        answer:
          "Lightning Andar Bahar is an enhanced variant where certain cards are randomly selected as Lightning cards before each deal. If your bet wins on a Lightning card, you receive a boosted multiplier payout of up to 11x.",
      },
    ],
  },
  {
    id: "9",
    slug: "lucky-slots",
    name: "Lucky Slots Casino",
    tagline: "1000+ premium slots with massive jackpots",
    description:
      "Lucky Slots Casino brings over 1,000 slots to your mobile. From classic 3-reel fruit machines to multi-payline video slots and progressive jackpots.",
    longDescription:
      "Lucky Slots Casino is a comprehensive slot gaming platform featuring 1,000+ slot titles from top providers including NetEnt, Pragmatic Play, Microgaming, and Yggdrasil. Whether you prefer classic 3-reel fruit machines, 243-ways-to-win video slots, or progressive jackpot titles like Mega Moolah, the library covers every style. Bonus features range from free spin rounds and cascading reels to buy-a-bonus options and Megaways mechanics with up to 117,649 ways to win. The platform's jackpot network includes games where the prize pool has exceeded ₹10 crore. RTP values are displayed on every game, and the demo mode lets you try any slot without depositing.",
    category: "Slots",
    rating: 4.7,
    totalReviews: 31500,
    downloads: "30M+",
    icon: "🎰",
    developer: "Multiple Providers (NetEnt, Pragmatic, Microgaming)",
    version: "5.0.3",
    size: "120 MB",
    lastUpdated: "2025-04-14",
    platforms: ["android", "ios", "web"],
    affiliateLink: "#affiliate-lucky-slots",
    androidLink: "#download-android-lucky-slots",
    iosLink: "#download-ios-lucky-slots",
    established: "2016",
    screenshots: [
      { url: "/images/games/lucky-slots/screenshot-1.webp", alt: "Lucky Slots lobby with featured slot titles" },
      { url: "/images/games/lucky-slots/screenshot-2.webp", alt: "Mega Moolah progressive jackpot slot in action" },
      { url: "/images/games/lucky-slots/screenshot-3.webp", alt: "Free spins bonus round with cascading reels" },
      { url: "/images/games/lucky-slots/screenshot-4.webp", alt: "Lucky Slots jackpot ticker showing current prize" },
    ],
    features: [
      "1,000+ slots from top providers",
      "Progressive jackpots up to ₹10 crore+",
      "Megaways titles with 117,649 ways to win",
      "Buy-a-bonus feature on select games",
      "Free demo for every slot",
      "Slot tournaments with daily prize pools",
      "Gamble feature and autoplay settings",
    ],
    pros: [
      "Largest slot library",
      "RTP displayed on every game",
      "Regular new game additions",
      "Life-changing jackpot potential",
      "Free demo mode for all games",
    ],
    cons: [
      "High variance slots can drain bankroll fast",
      "Progressive jackpots have very low hit frequency",
      "Wagering requirements on bonuses can be complex",
    ],
    minDeposit: "₹200",
    welcomeBonus: "100% up to ₹10,000 + 100 Free Spins on Book of Dead",
    expertReview:
      "Lucky Slots Casino's library quality is exceptional — every provider integration is seamless, game load times are under 2 seconds even on slow 4G, and the RNG certifications from eCOGRA are displayed transparently. Our team tested 50+ titles over multiple sessions. Stand-out games include Gates of Olympus (Pragmatic, 96.5% RTP), Sweet Bonanza (96.48%), and the timeless Starburst (96.1%). For new players, start with medium-volatility games around ₹10–20 per spin.",
    expertName: "Karan Patel",
    expertTitle: "Slots Expert & RTP Analyst, 6 Years",
    tags: ["slots", "online slots", "jackpot", "megaways", "free spins"],
    featured: true,
    faqs: [
      {
        question: "What is RTP in slot machines?",
        answer:
          "RTP (Return to Player) is the theoretical percentage of wagered money a slot pays back over millions of spins. A slot with 96% RTP returns ₹96 for every ₹100 wagered on average. Higher RTP is better for players.",
      },
      {
        question: "How do I download Lucky Slots Casino on Android?",
        answer:
          "Visit the Lucky Slots Casino website on your Android device, click 'Download App', and install the APK. You may need to enable 'Install from unknown sources' in your device settings.",
      },
      {
        question: "What is volatility in slots?",
        answer:
          "Volatility (or variance) describes how a slot pays. High-volatility slots pay less frequently but in larger amounts. Low-volatility slots pay small wins frequently. Choose based on your bankroll and risk tolerance.",
      },
      {
        question: "Are online slots rigged?",
        answer:
          "Licensed and certified online slots are not rigged. They use certified Random Number Generators (RNGs) audited by independent bodies like eCOGRA and iTech Labs. Always play on licensed platforms.",
      },
      {
        question: "What are Megaways slots?",
        answer:
          "Megaways is a slot mechanic by Big Time Gaming where the number of symbols per reel changes with each spin, creating up to 117,649 ways to win. Popular Megaways titles include Bonanza and Dog House Megaways.",
      },
      {
        question: "Can I win a progressive jackpot on mobile?",
        answer:
          "Yes. Progressive jackpots are network-wide and can be triggered on any device including mobile. All jackpot wins are paid in full regardless of the platform you play on.",
      },
    ],
  },
  {
    id: "10",
    slug: "roulette-royale",
    name: "Roulette Royale",
    tagline: "Premium European and American roulette with live dealers",
    description:
      "Roulette Royale delivers authentic roulette with European (2.7% edge), American, French, and Lightning variants. Real dealers, real wheels, real excitement.",
    longDescription:
      "Roulette Royale is a premium roulette experience covering all major variants: European (single-zero, 2.7% house edge), American (double-zero, 5.26% edge), French (La Partage rule reducing edge to 1.35%), and the electrifying Lightning Roulette with multiplied numbers paying up to 500:1. The platform offers both RNG and live dealer tables. Live tables are broadcast from professional studios with multiple camera angles, a top-down ball-tracking view, and real-time statistics panel showing hot/cold numbers, last 500 spins, and neighbor bets. The bet-behind feature lets you follow winning players while the Favorites feature saves your custom bet patterns for quick replay.",
    category: "Table Games",
    rating: 4.6,
    totalReviews: 9300,
    downloads: "7M+",
    icon: "🎡",
    developer: "Evolution Gaming",
    version: "4.1.0",
    size: "65 MB",
    lastUpdated: "2025-03-15",
    platforms: ["android", "ios", "web"],
    affiliateLink: "#affiliate-roulette-royale",
    androidLink: "#download-android-roulette-royale",
    iosLink: "#download-ios-roulette-royale",
    established: "2015",
    screenshots: [
      { url: "/images/games/roulette-royale/screenshot-1.webp", alt: "Roulette Royale European wheel with betting layout" },
      { url: "/images/games/roulette-royale/screenshot-2.webp", alt: "Live dealer spinning roulette wheel" },
      { url: "/images/games/roulette-royale/screenshot-3.webp", alt: "Lightning Roulette with multiplied numbers highlighted" },
      { url: "/images/games/roulette-royale/screenshot-4.webp", alt: "Roulette statistics showing hot and cold numbers" },
    ],
    features: [
      "4 variants: European, American, French, Lightning",
      "Live dealer with ball-tracking camera",
      "Hot/cold numbers and 500-spin statistics",
      "Favorites and recent bets features",
      "Neighbor bets and call bet section",
      "Lightning numbers with up to 500x multipliers",
      "La Partage rule on French Roulette",
    ],
    pros: [
      "French Roulette has the lowest house edge (1.35%)",
      "Stunning HD live studio production",
      "Statistics panel enhances strategy",
      "Lightning variant adds massive win potential",
      "Supports all bet types including racetrack",
    ],
    cons: [
      "American Roulette has a high 5.26% house edge — avoid it",
      "Betting systems cannot overcome the house edge",
      "High minimum bets on premium live tables",
    ],
    minDeposit: "₹250",
    welcomeBonus: "100% up to ₹12,000 for table game players",
    expertReview:
      "Roulette Royale's live production is the finest we've reviewed. The overhead ball-tracking camera in slow motion as the ball drops into the pocket is genuinely cinematic. Always play European or French roulette — the single-zero wheel cuts the house edge from 5.26% (American) to 2.7% (European) or 1.35% (French with La Partage). Lightning Roulette is our favorite for entertainment value, though the multiplied RTP balances out to the same as standard European.",
    expertName: "Neha Sharma",
    expertTitle: "Roulette & Table Games Expert",
    tags: ["roulette", "live roulette", "european roulette", "lightning roulette", "wheel game"],
    featured: false,
    faqs: [
      {
        question: "What is the best roulette variant to play?",
        answer:
          "French Roulette with La Partage is the best — the house edge is just 1.35% on even-money bets. European Roulette at 2.7% is the second-best. Avoid American Roulette (5.26% edge due to the extra 00 pocket).",
      },
      {
        question: "How do I download Roulette Royale on Android?",
        answer:
          "Roulette Royale runs on casino apps powered by Evolution Gaming. Download a casino app that uses Evolution (they'll advertise this in the live casino section), register, and find roulette in the games lobby.",
      },
      {
        question: "Does the Martingale system work in roulette?",
        answer:
          "The Martingale (doubling bets after losses) does not overcome the house edge in the long run. While it can produce short-term wins, table maximum bets and long losing streaks can wipe out your bankroll completely.",
      },
      {
        question: "What is Lightning Roulette?",
        answer:
          "Lightning Roulette by Evolution Gaming adds an RNG element to live roulette. Before each spin, 1–5 numbers are struck by lightning and receive multiplied payouts of 50x, 100x, 200x, or 500x instead of the standard 35:1.",
      },
      {
        question: "What is La Partage rule in French Roulette?",
        answer:
          "La Partage ('the sharing') returns half your even-money bet (Red/Black, Odd/Even, High/Low) if the ball lands on zero. This halves the house edge from 2.7% to 1.35%, making French Roulette the best roulette variant.",
      },
      {
        question: "Are hot numbers more likely to come up?",
        answer:
          "No. Each roulette spin is an independent event. Previous outcomes have no bearing on future spins. Hot and cold numbers are patterns in past data only — they carry no predictive power.",
      },
    ],
  },
];

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function getFeaturedGames(): Game[] {
  return games.filter((g) => g.featured);
}

export function getGamesByCategory(category: string): Game[] {
  return games.filter((g) => g.category === category);
}

export function getRelatedGames(current: Game, limit = 3): Game[] {
  return games
    .filter((g) => g.slug !== current.slug && (g.category === current.category || g.featured))
    .slice(0, limit);
}
