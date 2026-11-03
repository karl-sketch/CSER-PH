(() => {
  "use strict";

  const STORE_KEY = "cser-ph-v1";
  const phases = [
    { name: "Verbal Ability", short: "VERBAL ABILITY", icon: "✎", color: "mint", desc: "Grammar, vocabulary & comprehension" },
    { name: "Numerical Ability", short: "NUMERICAL ABILITY", icon: "∑", color: "gold", desc: "Numbers, percentages & problem solving" },
    { name: "Logical Reasoning", short: "LOGICAL REASONING", icon: "⌘", color: "blue", desc: "Patterns, deduction & critical thinking" },
    { name: "General Information", short: "GENERAL INFORMATION", icon: "⚖", color: "violet", desc: "Constitution, history & public service" }
  ];
  const heroRoster = [
    { id: "azure-knight", name: "AZURE KNIGHT", title: "THE VANGUARD", image: "player-heroes/azure-knight.png" },
    { id: "violet-arcanist", name: "VIOLET ARCANIST", title: "ORBWEAVER", image: "player-heroes/violet-arcanist.png" },
    { id: "briar-ranger", name: "BRIAR RANGER", title: "WILDSHOT", image: "player-heroes/briar-ranger.png" },
    { id: "veil-assassin", name: "VEIL ASSASSIN", title: "DUSKBLADE", image: "player-heroes/veil-assassin.png" },
    { id: "sun-paladin", name: "SUN PALADIN", title: "DAWNSHIELD", image: "player-heroes/sun-paladin.png" },
    { id: "iron-berserker", name: "IRON BERSERKER", title: "WARBREAKER", image: "player-heroes/iron-berserker.png" },
    { id: "dawn-priestess", name: "DAWN PRIESTESS", title: "LIGHTKEEPER", image: "player-heroes/dawn-priestess.png" },
    { id: "thorn-druid", name: "THORN DRUID", title: "ROOTCALLER", image: "player-heroes/thorn-druid.png" },
    { id: "void-necromancer", name: "VOID NECROMANCER", title: "SOULBINDER", image: "player-heroes/void-necromancer.png" },
    { id: "ember-mage", name: "EMBER MAGE", title: "FLAMEWEAVER", image: "player-heroes/ember-mage.png" },
    { id: "scarlet-duelist", name: "SCARLET DUELIST", title: "RED TEMPEST", image: "player-heroes/scarlet-duelist.png" },
    { id: "monk-of-stone", name: "STONE MONK", title: "IRON FIST", image: "player-heroes/monk-of-stone.png" },
    { id: "forest-archer", name: "FOREST ARCHER", title: "GREEN ARROW", image: "player-heroes/forest-archer.png" },
    { id: "frost-wolf", name: "FROST WOLF", title: "ICEWARDEN", image: "player-heroes/frost-wolf.png" },
    { id: "crimson-blade", name: "CRIMSON BLADE", title: "ROGUE CAPTAIN", image: "player-heroes/crimson-blade.png" },
    { id: "winged-guardian", name: "WINGED GUARDIAN", title: "SKY SENTINEL", image: "player-heroes/winged-guardian.png" },
    { id: "infernal-knight", name: "INFERNAL KNIGHT", title: "ASHEN LORD", image: "player-heroes/infernal-knight.png" },
    { id: "red-samurai", name: "RED SAMURAI", title: "STORMBLADE", image: "player-heroes/red-samurai.png" },
    { id: "gear-ranger", name: "GEAR RANGER", title: "IRONSHOT", image: "player-heroes/gear-ranger.png" },
    { id: "violet-sorceress", name: "VIOLET SORCERESS", title: "RUNEKEEPER", image: "player-heroes/violet-sorceress.png" }
  ];
  const examinerRoster = [
    { id: "emerald-revenant", name: "EMERALD REVENANT", title: "THE GRAVEWARDEN", image: "examiners/emerald-revenant.png" },
    { id: "void-oracle", name: "VOID ORACLE", title: "KEEPER OF THE RIFT", image: "examiners/void-oracle.png" },
    { id: "ashen-stalker", name: "ASHEN STALKER", title: "THE SILENT EDGE", image: "examiners/ashen-stalker.png" },
    { id: "night-reaper", name: "NIGHT REAPER", title: "SHADOW OF JUDGMENT", image: "examiners/night-reaper.png" },
    { id: "obsidian-warlock", name: "OBSIDIAN WARLOCK", title: "MASTER OF HEXES", image: "examiners/obsidian-warlock.png" },
    { id: "iron-ogre", name: "IRON OGRE", title: "THE GATEBREAKER", image: "examiners/iron-ogre.png" },
    { id: "blood-priestess", name: "BLOOD PRIESTESS", title: "THE RED VEIL", image: "examiners/blood-priestess.png" },
    { id: "mire-shaman", name: "MIRE SHAMAN", title: "ROOTS OF RUIN", image: "examiners/mire-shaman.png" },
    { id: "bone-lich", name: "BONE LICH", title: "THE LAST EXAMINER", image: "examiners/bone-lich.png" },
    { id: "chaos-mage", name: "CHAOS MAGE", title: "WILDSPELL", image: "examiners/chaos-mage.png" },
    { id: "shadow-monk", name: "SHADOW MONK", title: "FIST OF THE ABYSS", image: "examiners/shadow-monk.png" },
    { id: "goblin-alchemist", name: "GOBLIN ALCHEMIST", title: "BREWER OF DOOM", image: "examiners/goblin-alchemist.png" },
    { id: "crimson-vampire", name: "CRIMSON VAMPIRE", title: "THE NIGHT TYRANT", image: "examiners/crimson-vampire.png" },
    { id: "frost-shogun", name: "FROST SHOGUN", title: "ICEBOUND GENERAL", image: "examiners/frost-shogun.png" },
    { id: "dread-pirate", name: "DREAD PIRATE", title: "CAPTAIN OF THE DAMNED", image: "examiners/dread-pirate.png" },
    { id: "winged-fiend", name: "WINGED FIEND", title: "TERROR OF THE DEEP", image: "examiners/winged-fiend.png" },
    { id: "infernal-dragon", name: "INFERNAL DRAGON", title: "THE ASHEN TITAN", image: "examiners/infernal-dragon.png" },
    { id: "gargoyle-fiend", name: "GARGOYLE FIEND", title: "THE STONE DEVOURER", image: "examiners/gargoyle-fiend.png" },
    { id: "iron-golem", name: "IRON GOLEM", title: "THE UNYIELDING", image: "examiners/iron-golem.png" },
    { id: "serpent-sorceress", name: "SERPENT SORCERESS", title: "THE GORGON QUEEN", image: "examiners/serpent-sorceress.png" }
  ];

  const makeQuestion = (prompt, answer, wrong, explanation) => {
    const options = [answer, ...wrong].map((text, index) => ({ text, correct: index === 0 }));
    let seed = 0;
    for (const char of prompt) seed = (seed * 31 + char.charCodeAt(0)) >>> 0;
    for (let i = options.length - 1; i > 0; i--) {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      const j = seed % (i + 1);
      [options[i], options[j]] = [options[j], options[i]];
    }
    return { prompt, options, explanation, answer };
  };
  const makeOrderedQuestion = (prompt, choices, correctIndex, explanation) => ({
    prompt,
    options: choices.map((text, index) => ({ text, correct: index === correctIndex })),
    explanation,
    answer: choices[correctIndex]
  });

  const verbalRaw = [
    ["Choose the correct verb: Each of the applicants ___ required to bring valid identification.", "is", ["are", "were", "have been"], "The subject is “each,” which is singular, so it takes “is.”"],
    ["Choose the correct verb: Neither the manager nor the clerks ___ available this afternoon.", "are", ["is", "was", "has been"], "With “neither…nor,” the verb agrees with the nearer subject, “clerks.”"],
    ["Choose the correct verb: The committee ___ its recommendation tomorrow.", "will submit", ["will submits", "submit", "are submitting"], "A collective noun acting as one unit takes a singular verb."],
    ["Choose the correct verb: Everyone in the two sections ___ the instructions.", "understands", ["understand", "have understood", "are understanding"], "“Everyone” is an indefinite pronoun that takes a singular verb."],
    ["Choose the correct verb: The list of qualified examinees ___ posted online.", "was", ["were", "have been", "are"], "The subject is “list,” not “examinees,” so the singular verb “was” is correct."],
    ["Choose the correct verb: My brother and sister ___ for the examination together.", "are preparing", ["is preparing", "prepares", "has prepared"], "Two subjects joined by “and” generally take a plural verb."],
    ["Choose the correct verb: A number of candidates ___ early for the orientation.", "arrived", ["arrives", "has arrived", "was arriving"], "“A number of” means several and takes a plural verb."],
    ["Choose the correct verb: The number of vacant positions ___ limited.", "is", ["are", "have been", "were"], "“The number” refers to one total and takes a singular verb."],
    ["Choose the correct verb: Either answer ___ acceptable to the panel.", "is", ["are", "were", "have been"], "“Either” is singular and takes a singular verb."],
    ["Choose the correct verb: Mathematics ___ one of her strongest subjects.", "is", ["are", "were", "have been"], "The name of a subject ending in “s” is singular here."],
    ["Choose the best synonym for “diligent.”", "hardworking", ["careless", "uncertain", "impatient"], "“Diligent” means showing steady, careful effort."],
    ["Choose the best synonym for “concise.”", "brief", ["confusing", "lengthy", "informal"], "“Concise” means brief while expressing the essential meaning."],
    ["Choose the best synonym for “impartial.”", "unbiased", ["inexperienced", "uncertain", "unaware"], "An impartial person does not favor one side."],
    ["Choose the best synonym for “abundant.”", "plentiful", ["scarce", "fragile", "ordinary"], "“Abundant” means existing in large quantities."],
    ["Choose the best synonym for “mitigate.”", "lessen", ["prohibit", "announce", "intensify"], "To mitigate is to make something less severe."],
    ["Choose the best synonym for “prudent.”", "wise", ["reckless", "wealthy", "hesitant"], "“Prudent” describes someone careful and sensible in making decisions."],
    ["Choose the best synonym for “obsolete.”", "outdated", ["useful", "unusual", "complete"], "“Obsolete” means no longer used because something newer exists."],
    ["Choose the best synonym for “eloquent.”", "expressive", ["silent", "uncertain", "ordinary"], "An eloquent speaker expresses ideas fluently and effectively."],
    ["Choose the best synonym for “scrutinize.”", "examine closely", ["ignore", "summarize", "approve quickly"], "To scrutinize is to inspect something carefully."],
    ["Choose the best synonym for “candid.”", "frank", ["secretive", "polite", "cautious"], "“Candid” means truthful and straightforward."],
    ["Complete the analogy: compass is to direction as clock is to ___.", "time", ["distance", "temperature", "weight"], "A compass indicates direction; a clock indicates time."],
    ["Complete the analogy: author is to novel as composer is to ___.", "symphony", ["gallery", "instrument", "audience"], "An author creates a novel; a composer creates music such as a symphony."],
    ["Complete the analogy: seed is to plant as egg is to ___.", "bird", ["nest", "feather", "shell"], "A seed can develop into a plant; an egg can develop into a bird."],
    ["Complete the analogy: surgeon is to scalpel as carpenter is to ___.", "saw", ["blueprint", "wood", "nail"], "A scalpel is a surgeon’s tool; a saw is a carpenter’s tool."],
    ["Complete the analogy: generous is to stingy as ancient is to ___.", "modern", ["historic", "distant", "familiar"], "Generous and stingy are opposites; ancient and modern are opposites."],
    ["Complete the analogy: chapter is to book as scene is to ___.", "play", ["actor", "stage", "costume"], "A chapter is a part of a book; a scene is a part of a play."],
    ["Complete the analogy: thermometer is to temperature as barometer is to ___.", "air pressure", ["wind speed", "humidity", "rainfall"], "A thermometer measures temperature; a barometer measures air pressure."],
    ["Complete the analogy: puppy is to dog as foal is to ___.", "horse", ["cow", "deer", "goat"], "A puppy is a young dog; a foal is a young horse."],
    ["Complete the analogy: island is to water as oasis is to ___.", "desert", ["forest", "mountain", "valley"], "An island is surrounded by water; an oasis is an area of water in a desert."],
    ["Complete the analogy: editor is to manuscript as curator is to ___.", "collection", ["museum visitor", "ticket", "lecture"], "An editor works on a manuscript; a curator manages a collection."],
    ["Select the sentence with correct punctuation.", "The briefing, which begins at eight, is open to all staff.", ["The briefing which begins at eight is open, to all staff.", "The briefing, which begins at eight is open to all staff.", "The briefing which, begins at eight, is open to all staff."], "A nonessential clause is set off by commas on both sides."],
    ["Select the correct word: The new policy may ___ all examinees.", "affect", ["effect", "effects", "affects"], "“Affect” is usually a verb meaning to influence; “effect” is usually a noun."],
    ["Select the correct word: The office will ___ the revised schedule tomorrow.", "publish", ["published", "publishing", "publishes"], "After the modal verb “will,” use the base form of the verb."],
    ["Choose the correct sentence.", "She and I attended the orientation.", ["Her and me attended the orientation.", "Me and her attended the orientation.", "She and me attended the orientation."], "Use subject pronouns “she” and “I” as the subject."],
    ["Choose the correct sentence.", "The report contains fewer errors than the previous draft.", ["The report contains less errors than the previous draft.", "The report contains fewest errors than the previous draft.", "The report contains lesser errors than the previous draft."], "Use “fewer” with countable items such as errors."],
    ["Choose the correct sentence.", "The applicants who passed the test received an email.", ["The applicants which passed the test received an email.", "The applicants whom passed the test received an email.", "The applicants whose passed the test received an email."], "“Who” is the subject relative pronoun for people."],
    ["Choose the correct sentence.", "The director spoke clearly and confidently.", ["The director spoke clear and confident.", "The director spoke clearly and confident.", "The director spoke clear and confidently."], "Adverbs “clearly” and “confidently” modify the verb “spoke.”"],
    ["Choose the correct sentence.", "By the time we arrived, the program had started.", ["By the time we arrived, the program has start.", "By the time we arrive, the program had started.", "By the time we arrived, the program have started."], "Past perfect “had started” describes an event completed before another past event."],
    ["Choose the correct sentence.", "Applicants must bring their own pencils.", ["Applicants must bring his own pencils.", "Applicants must bring its own pencils.", "Applicants must brings their own pencils."], "The plural antecedent “applicants” agrees with “their.”"],
    ["Choose the correct sentence.", "The files were placed between Ana and me.", ["The files were placed between Ana and I.", "The files were placed between she and I.", "The files were placed between Ana and myself."], "The preposition “between” takes object pronouns: “Ana and me.”"],
    ["Read: “The city library extended its hours during exam season. Staff also added quiet study tables.” What is the main purpose of the changes?", "To give examinees more time and space to study", ["To reduce the number of library visitors", "To replace the library staff", "To close the library earlier"], "Both extended hours and added quiet tables support people studying."],
    ["Read: “Lina reviewed one topic each evening and kept a log of difficult questions.” Which habit helped Lina identify what to revisit?", "Keeping a log of difficult questions", ["Studying only on weekends", "Skipping challenging topics", "Changing subjects every few minutes"], "The passage directly says Lina logged difficult questions."],
    ["Read: “The agency moved applications online, but it kept a help desk for people who needed assistance.” What can be inferred?", "The agency wanted online access while retaining support.", ["The agency stopped accepting applications.", "Everyone was required to use the help desk.", "The help desk replaced the online service."], "The online process and help desk are presented as complementary."],
    ["Read: “Rain delayed the morning inspection. The team completed the remaining sites after conditions improved.” When did they finish the other inspections?", "After the weather improved", ["Before the rain began", "During the heaviest rain", "The following month"], "The passage states that the team continued after conditions improved."],
    ["Read: “A clear checklist can reduce missed steps, although it cannot replace sound judgment.” What is the author’s view of checklists?", "They are useful but do not replace judgment.", ["They are unnecessary in every situation.", "They guarantee perfect decisions.", "They should replace all training."], "The sentence credits checklists while noting their limitation."],
    ["Read: “The free seminar filled quickly, so organizers scheduled a second session.” Why was another session added?", "The first session had strong demand.", ["The seminar was canceled.", "The venue was unavailable.", "The topic had changed."], "Filling quickly indicates that more people wanted to attend."],
    ["Read: “No single source answered every question, so the researcher compared official records with interviews.” What approach did the researcher use?", "Comparing different sources", ["Relying only on memory", "Avoiding official records", "Repeating one interview"], "The researcher combined records and interviews to address gaps."],
    ["Read: “The memo is short, but its dates and instructions are precise.” What does “precise” mean here?", "Exact and clearly stated", ["Long and detailed", "Difficult to verify", "Written informally"], "The context links precision to dates and instructions being exact."],
    ["Read: “Even after the route changed, the volunteers arrived before the event began.” What quality did the volunteers demonstrate?", "Reliability", ["Indifference", "Confusion", "Impatience"], "They arrived on time despite a change, showing reliability."],
    ["Read: “The proposal was postponed, not rejected; the panel requested more supporting data.” What should the author do next?", "Provide additional evidence", ["Withdraw the proposal permanently", "Ignore the panel’s request", "Submit the same proposal without changes"], "The panel asked for more supporting data before reconsideration."]
  ];

  const numberRaw = [];
  for (let i = 1; i <= 50; i++) {
    const mode = (i - 1) % 10;
    const n = Math.floor((i - 1) / 10) + 2;
    let prompt, answer, wrong, explanation;
    if (mode === 0) {
      const a = n * 7 + i, b = n * 3 + 4;
      prompt = `What is ${a} + ${b}?`; answer = String(a + b);
      wrong = [String(a + b + 2), String(a + b - 3), String(a * b)];
      explanation = `Add the two numbers: ${a} + ${b} = ${a + b}.`;
    } else if (mode === 1) {
      const a = n * 12 + i, b = n * 4;
      prompt = `What is ${a} − ${b}?`; answer = String(a - b);
      wrong = [String(a - b + 4), String(a - b - 2), String(a + b)];
      explanation = `Subtract ${b} from ${a}: the difference is ${a - b}.`;
    } else if (mode === 2) {
      const a = n + 4, b = n + 2;
      prompt = `What is ${a} × ${b}?`; answer = String(a * b);
      wrong = [String(a + b), String(a * b + a), String(a * b - b)];
      explanation = `${a} groups of ${b} equal ${a * b}.`;
    } else if (mode === 3) {
      const divisor = n + 2, quotient = n * 3 + 5, value = divisor * quotient;
      prompt = `What is ${value} ÷ ${divisor}?`; answer = String(quotient);
      wrong = [String(quotient + 2), String(quotient - 1), String(value - divisor)];
      explanation = `${divisor} × ${quotient} = ${value}, so the quotient is ${quotient}.`;
    } else if (mode === 4) {
      const base = n * 10 + 50, percent = [10, 20, 25, 30, 15][n % 5];
      prompt = `What is ${percent}% of ${base}?`; answer = String(base * percent / 100);
      wrong = [String(base * percent / 10), String(base - percent), String(base * (100 - percent) / 100)];
      explanation = `${percent}% = ${percent / 100}; ${base} × ${percent / 100} = ${answer}.`;
    } else if (mode === 5) {
      const x = n + 3, total = x * 4 + 2;
      prompt = `Solve for x: ${total} = 4x + 2.`; answer = String(x);
      wrong = [String(x + 1), String(x - 2), String(total - 2)];
      explanation = `Subtract 2 from both sides, then divide by 4: x = (${total} − 2) ÷ 4 = ${x}.`;
    } else if (mode === 6) {
      const original = n * 20 + 100, percent = [10, 15, 20, 25, 30][n % 5];
      prompt = `A ₱${original} item is discounted by ${percent}%. What is the sale price?`;
      answer = `₱${original * (100 - percent) / 100}`;
      wrong = [`₱${original * percent / 100}`, `₱${original + original * percent / 100}`, `₱${original - percent}`];
      explanation = `The discount is ₱${original * percent / 100}. Subtract it from ₱${original} to get ${answer}.`;
    } else if (mode === 7) {
      const length = n + 5, width = n + 2;
      prompt = `A rectangle is ${length} cm long and ${width} cm wide. What is its area?`;
      answer = `${length * width} cm²`;
      wrong = [`${2 * (length + width)} cm²`, `${length + width} cm²`, `${length * width * 2} cm²`];
      explanation = `Area = length × width = ${length} × ${width} = ${length * width} cm².`;
    } else if (mode === 8) {
      const values = [n * 2, n * 2 + 2, n * 2 + 4];
      prompt = `Find the mean of ${values.join(", ")}.`; answer = String(values.reduce((a, b) => a + b, 0) / 3);
      wrong = [String(values[1]), String(values[0] + values[2]), String(values[2] + 2)];
      explanation = `Add the values and divide by 3: (${values.join(" + ")}) ÷ 3 = ${answer}.`;
    } else {
      const a = n * 5 + 10, b = n + 2;
      prompt = `A bus travels ${a} km in ${b} hours at a constant rate. What is its average speed?`;
      answer = `${a / b} km/h`;
      wrong = [`${a + b} km/h`, `${a * b} km/h`, `${b / a} km/h`];
      explanation = `Average speed = distance ÷ time = ${a} ÷ ${b} = ${a / b} km/h.`;
    }
    numberRaw.push(makeQuestion(prompt, answer, wrong, explanation));
  }

  const logicRaw = [
    makeOrderedQuestion("Statement:\n“The company has decided to introduce flexible working hours so that employees can manage work-life balance better.”\n\nAssumptions:\nI. Some employees are struggling to maintain a good work-life balance under the current system.\nII. Flexible working hours will automatically increase the company’s productivity.\nIII. Employees value work-life balance.", ["Only I is implicit", "Only III is implicit", "Both I and III are implicit", "All I, II, and III are implicit"], 2, "The decision assumes employees value work-life balance and that the current arrangement leaves at least some room for improvement. It does not assume productivity will automatically rise."),
    makeOrderedQuestion("Needle : Thread :: Paintbrush : ?", ["Canvas", "Paint", "Painter", "Easel"], 1, "A needle is used with thread; a paintbrush is used with paint."),
    makeOrderedQuestion("Firewall : Network :: Helmet : ?", ["Motorcycle", "Safety", "Head", "Injury"], 2, "A firewall protects a network; a helmet protects the head."),
    makeOrderedQuestion("Here are some words from an artificial language:\nlupatak means bright star\ntakgor means star light\nlupador means bright sun\n\nWhich word could mean “sunlight”?", ["dorgor", "taklupa", "gorupa", "dorupa"], 0, "“lupa” means bright, “tak” means star, “gor” means light, and “dor” means sun. Therefore “dor” + “gor” means sunlight."),
    makeOrderedQuestion("Statement: Due to a sudden rise in fuel prices, the cost of public transportation has increased across the city.\n\nWhich of the following is the most likely effect of the above situation?", ["More people will start using their own private vehicles to travel.", "The government will immediately decide to reduce fuel taxes.", "Commuters may look for cheaper or alternative modes of transport.", "Public transportation companies will reduce their fare prices soon."], 2, "Higher fares may lead commuters to seek less expensive or alternative transportation. The other choices make unsupported predictions."),
    makeOrderedQuestion("Statement:\nOnly those who have strong analytical skills can become successful data scientists. Maria is a successful data scientist.\n\nAssumptions:\n(1) Maria has strong analytical skills.\n(2) People without strong analytical skills cannot become successful data scientists.\n(3) All people with strong analytical skills are data scientists.\n\nWhich of the above assumptions is/are valid?", ["Only 1", "1 and 2", "2 and 3", "All 1, 2, and 3"], 1, "Strong analytical skills are necessary for success in data science, so Maria must have them and people without them cannot succeed. The statement does not say everyone with those skills becomes a data scientist."),
    makeOrderedQuestion("Find the next letter in the sequence:\nA, C, E, G, ?", ["H", "I", "J", "K"], 1, "The sequence advances two letters each time: A, C, E, G, I."),
    makeOrderedQuestion("Five students — Anna, Ben, Carla, David, and Ella — took an exam.\n- Anna scored higher than Ben but lower than Carla.\n- David scored higher than Carla but lower than Ella.\n- Ella scored the highest.\n\nWho is ranked 3rd in terms of scores?", ["Anna", "Ben", "Carla", "David"], 2, "The order is Ella, David, Carla, Anna, Ben. Carla is third."),
    makeOrderedQuestion("A coastal town experienced severe flooding last week after several days of intense storms.\n\nWhich of the following is the most direct cause of the flooding described?", ["Deforestation in the town’s hinterland over the past decade", "Several days of intense storms bringing heavy rainfall", "An increase in the town’s population over the last five years", "Construction of new roads in the town last year"], 1, "The passage directly links the flooding to several days of intense storms and heavy rainfall."),
    makeOrderedQuestion("Which letter comes next in the sequence? A, C, F, J, O, ___", ["P", "S", "T", "U"], 3, "The letter-position gaps increase by one: +2, +3, +4, +5, then +6. O plus six letters is U."),
    makeOrderedQuestion("BOOK is to LIBRARY as ARTIFACT is to ?", ["Museum", "Gallery", "Archive", "Exhibition"], 0, "A library is a place that houses books; a museum houses artifacts."),
    makeOrderedQuestion("Fact 1: All project managers prepare project plans.\nFact 2: Some project managers are software developers.\nFact 3: All software developers write code.\n\nIf the first three statements are facts, which of the following statements must also be a fact?\n\nI. All project managers write code.\nII. Some project managers write code.\nIII. All software developers prepare project plans.", ["I only", "II only", "I and II only", "None of the statements is a known fact"], 1, "Some project managers are software developers, and all software developers write code. Therefore, some project managers write code. The facts do not establish I or III."),
    makeOrderedQuestion("Assertion (A): People are advised to take vitamin D supplements during winter.\n\nReason (R): Vitamin D is produced in the skin when exposed to sunlight, which is less during winter months.", ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], 0, "Less sunlight during winter can reduce skin production of vitamin D, which explains why supplementation may be advised."),
    makeOrderedQuestion("Statement:\nSome managers are leaders.\nAll leaders are decision-makers.\nNo decision-maker is careless.\n\nConclusion I:\nSome managers are not careless.\n\nConclusion II:\nAll managers are decision-makers.\n\nWhich conclusion(s) logically follow?", ["Only Conclusion I follows", "Only Conclusion II follows", "Both Conclusion I and II follow", "Neither Conclusion I nor II follows"], 0, "The managers who are leaders are decision-makers and therefore not careless. This does not establish that all managers are decision-makers."),
    makeOrderedQuestion("A survey of 200 employees in a company showed that 120 preferred tea, 60 preferred coffee, and the rest preferred juice. What percentage of employees preferred juice?", ["5%", "10%", "15%", "20%"], 1, "Juice preference is 200 − 120 − 60 = 20 employees. 20 ÷ 200 = 10%."),
    makeOrderedQuestion("Read the statement and determine which conclusion logically follows.\n\nA company introduced an online customer-support system. Within six months, the average response time to customer inquiries decreased significantly.\n\nConclusions:\nI. The online customer-support system improved response efficiency.\nII. Customer satisfaction increased during the six-month period.", ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"], 0, "The shorter response time supports improved response efficiency, but customer satisfaction was not measured in the statement."),
    makeOrderedQuestion("What is the next term in the sequence?\n\nAB, C D E, F G H I, J K L M N, ?", ["O P Q R S T", "O P Q R", "O P Q R S", "O P Q"], 0, "The groups contain 2, 3, 4, and 5 consecutive letters. The next group contains six letters, O through T."),
    makeOrderedQuestion("(A): Renewable energy sources like solar and wind are being promoted worldwide.\n(R): They help reduce dependence on fossil fuels and lower environmental pollution.", ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], 0, "Renewables are promoted in part because they reduce reliance on fossil fuels and can lower pollution."),
    makeOrderedQuestion("Fact 1: All dogs have tails.\nFact 2: Some dogs are brown, and others are black.\nFact 3: Beagles are dogs.\n\nIf the above statements are facts, which of the following statements must also be true?\n\nI. All beagles have tails.\nII. Some beagles are brown.\nIII. Beagles have no tails.", ["I only", "II only", "I and II only", "None of the statements is a known fact."], 0, "Beagles are dogs, and all dogs have tails, so all beagles have tails. The color facts do not specify that any beagle is brown."),
    makeOrderedQuestion("What number should replace the question mark in the sequence below?\n\n2, 9, 28, 65, ?, 217", ["108", "121", "125", "126"], 3, "The terms are cubes plus one: 1³+1, 2³+1, 3³+1, 4³+1, 5³+1, 6³+1. The missing value is 126."),
    makeOrderedQuestion("Oxygen : Respiration :: Chlorophyll : ?", ["Photosynthesis", "Digestion", "Fermentation", "Transpiration"], 0, "Oxygen is essential to respiration; chlorophyll is essential to photosynthesis."),
    makeOrderedQuestion("Find the next letter in the sequence: B, D, G, K, P, V, ?", ["Z", "X", "C", "E"], 2, "The gaps are +2, +3, +4, +5, +6, then +7. Advancing seven letters from V wraps to C."),
    makeOrderedQuestion("A company has 500 employees. Out of these, 300 are male and the rest are female. 60% of the male employees are married, and 40% of the female employees are married. How many employees in total are married?", ["260", "280", "300", "320"], 0, "There are 180 married male employees and 80 married female employees, for a total of 260."),
    makeOrderedQuestion("A cube has its six faces painted in six different colors: Red, Blue, Green, Yellow, White, and Black.\n\nIf the Red face is opposite the Blue face, and the Green face is opposite the Yellow face, which color must be opposite the White face?", ["Red", "Blue", "Green", "Black"], 3, "Red and Blue form one opposite pair, and Green and Yellow form another. The remaining pair is White and Black."),
    makeOrderedQuestion("Find the next number in the sequence:\n1, 8, 27, 64, ?", ["100", "121", "125", "144"], 2, "These are consecutive cubes: 1³, 2³, 3³, 4³. The next is 5³ = 125."),
    makeOrderedQuestion("Find the next two terms in the sequence:\n\n1, 8, 27, 64, ? , ?", ["100, 121", "125, 216", "81, 100", "144, 169"], 1, "These are consecutive cubes. The next two are 5³ = 125 and 6³ = 216."),
    makeOrderedQuestion("Find the next number in the sequence:\n2, 6, 12, 20, 30, ?", ["36", "40", "42", "44"], 2, "The terms are n(n+1): 1×2, 2×3, 3×4, 4×5, 5×6. Next is 6×7 = 42."),
    makeOrderedQuestion("Complete the series: 2, 6, 12, 20, 30, 42, ?", ["54", "56", "60", "64"], 1, "The terms are consecutive products n(n+1). The next is 7×8 = 56."),
    makeOrderedQuestion("A company produced 800 units of product in January, 1,000 units in February, and 1,200 units in March.\nWhat is the average production over these three months?", ["900", "950", "1,000", "1,050"], 2, "The average is (800 + 1,000 + 1,200) ÷ 3 = 1,000 units."),
    makeOrderedQuestion("Find the next number in the series:\n\n3, 5, 9, 17, 33, ?", ["49", "57", "65", "67"], 2, "The differences double: +2, +4, +8, +16; next is +32, giving 65."),
    makeOrderedQuestion("Statement: “Only experienced managers can handle this project efficiently.”\n\nAssumptions:\n1.) Inexperienced managers cannot handle this project efficiently.\n2.) Some experienced managers may still handle the project inefficiently.\n3.) Handling the project efficiently requires experience.\n\nWhich of the above assumptions is/are implicit in the statement?", ["Only 1", "Only 3", "1 and 3", "1, 2, and 3"], 2, "The statement makes experience necessary for efficient handling, so both 1 and 3 restate its implication. It does not assert anything about whether some experienced managers may be inefficient."),
    makeOrderedQuestion("Find the next number in the sequence:\n\n2, 6, 12, 20, 30, 42, ?", ["54", "56", "60", "64"], 1, "The terms are consecutive products n(n+1); the next is 7×8 = 56."),
    makeOrderedQuestion("Here are some words translated from an artificial language.\ntorabeki means red flower\ntoranimo means red bird\nsavanimo means blue bird\n\nWhich word could mean “blue flower”?", ["savabeki", "torasava", "bekisava", "nimobeki"], 0, "“tora” means red, “sava” means blue, “beki” means flower, and “nimo” means bird. Thus “sava” + “beki” means blue flower."),
    makeOrderedQuestion("Statement I: Many students are enrolling in online review classes.\nStatement II: Accessibility of internet and gadgets has improved in recent years.\n\nWhich of the following best describes the relationship between the two statements?", ["Statement I is the cause and Statement II is the effect", "Statement II is the cause and Statement I is the effect", "Both statements are independent", "Both are effects of a common cause"], 1, "Improved access to internet and devices can enable more students to enroll in online review classes."),
    makeOrderedQuestion("Statement: “Only employees who complete the annual compliance training are allowed to access the new data management system.”\n\nWhich of the following assumptions is implicit in the statement?", ["All employees will eventually complete the compliance training.", "Employees who do not complete the training cannot access the system.", "The training program is difficult and time-consuming.", "The data management system is unsafe without compliance training."], 1, "Completing training is a necessary condition for access, so employees who do not complete it are not allowed access."),
    makeOrderedQuestion("Find the next number in the series:\n4, 9, 19, 39, 79, ?", ["119", "159", "149", "169"], 1, "Each term is doubled and then one is added: 79×2+1 = 159."),
    makeOrderedQuestion("Study the statements and determine which conclusion logically follows.\n\nStatements:\nAll engineers are graduates.\nSome graduates are managers.\nNo manager is an intern.\n\nConclusions:\nI. Some engineers are managers.\nII. Some graduates are not interns.", ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"], 1, "Some graduates are managers, and no manager is an intern; therefore some graduates are not interns. Nothing establishes that any engineers are managers."),
    makeOrderedQuestion("In a class of 200 students, 120 are male and the rest are female.\nWhat percentage of the students are female?", ["35%", "40%", "45%", "50%"], 1, "There are 80 female students. 80 ÷ 200 = 40%."),
    makeOrderedQuestion("In a certain code language:\n\nPEN is written as QFO\nBOOK is written as CPPL\n\nHow is NOTE written in that code?", ["OPVF", "OPUF", "NPTF", "OPUE"], 1, "Each letter advances one place in the alphabet: N→O, O→P, T→U, E→F."),
    makeOrderedQuestion("John says, “That man is the brother of the father of my sister’s only brother.”\n\nHow is the man related to John?", ["Uncle", "Father", "Cousin", "Grandfather"], 0, "John’s sister’s only brother is John. The father of John is his father, and that father’s brother is John’s uncle."),
    makeOrderedQuestion("Find the next letter in the sequence.\nB, E, H, K, N, ?", ["P", "Q", "R", "S"], 1, "The sequence advances three letters each time: B, E, H, K, N, Q."),
    makeOrderedQuestion("A company’s sales report shows the following sales (in million pesos) for 5 consecutive years:\n2019: 120\n2020: 150\n2021: 180\n2022: 210\n2023: 240\n\nWhat is the percentage increase in sales from 2019 to 2023?", ["80%", "90%", "100%", "120%"], 2, "The increase is 240 − 120 = 120. Relative to 120, that is 120 ÷ 120 × 100 = 100%."),
    makeOrderedQuestion("All online learners are self-motivated.\nSome students in this class are online learners.\n\nConclusions:\nI. Some students in this class are self-motivated.\nII. All students in this class are self-motivated.\n\nWhich conclusion(s) follow(s) from the statements?", ["Only Conclusion I follows", "Only Conclusion II follows", "Both I and II follow", "Neither I nor II follows"], 0, "The students who are online learners are self-motivated, so some students are. The statements do not say all students are online learners."),
    makeOrderedQuestion("Find the next number in the series:\n3, 5, 15, 17, 51, 53, 159, ?", ["320", "161", "318", "160"], 1, "The pattern alternates +2 and ×3. After 159, add 2 to get 161."),
    makeOrderedQuestion("5, 10, 20, 40, ___", ["50", "60", "70", "80"], 3, "Each term doubles, so 40×2 = 80."),
    makeOrderedQuestion("Find the next letter in the sequence:\n\nB, E, J, Q, Z, ?", ["K", "L", "Y", "M"], 0, "The letter positions increase by 3, 5, 7, 9, then 11. Z + 11 wraps around to K."),
    makeOrderedQuestion("Data (Number of students in a class):\n\nBoys = 48\nGirls = 32\n\nWhat is the ratio of boys to girls, and what is the ratio of girls to the total number of students?", ["3 : 2 and 2 : 5", "2 : 3 and 3 : 5", "3 : 4 and 2 : 7", "4 : 3 and 3 : 8"], 0, "Boys:girls = 48:32 = 3:2. Girls:total = 32:80 = 2:5."),
    makeOrderedQuestion("Fact 1: All smartphones have touchscreens.\nFact 2: Some smartphones are made by TechOne.\nFact 3: All TechOne devices can connect to Wi-Fi.\n\nIf the first three statements are facts, which of the following statements must also be a fact?\n\nI. All TechOne smartphones can connect to Wi-Fi.\nII. Some Wi-Fi–enabled devices are smartphones.\nIII. All smartphones are TechOne devices.", ["I only", "I and II only", "II and III only", "I, II, and III"], 1, "Every TechOne smartphone is a TechOne device and can connect to Wi-Fi. Since some smartphones are made by TechOne, some Wi-Fi-enabled devices are smartphones. The facts do not say all smartphones are TechOne."),
    makeOrderedQuestion("In a certain code language:\nFLAME → GNDQJ\nTREE → UTHI\n\nUsing the same coding rule, how is BRAIN written?", ["CTDMS", "CSDMS", "CTEMS", "CTEHS"], 0, "Each letter moves forward by its position in the word: B+1=C, R+2=T, A+3=D, I+4=M, and N+5=S. The code is CTDMS."),
    makeOrderedQuestion("A company decided to allow employees to work remotely three days a week to improve productivity.\n\nWhich assumption is necessary for this decision?", ["Employees prefer remote work.", "Remote work supports productivity.", "Employees will work longer hours.", "Location determines productivity."], 1, "The decision relies on the belief that remote work can support productivity; employee preference and longer hours are not necessary assumptions.")
  ];

  const generalData = [
    ["Under the 1987 Philippine Constitution, where is legislative power vested?", "The Congress of the Philippines", ["The Supreme Court", "The Office of the President", "The Civil Service Commission"], "Article VI vests legislative power in the Congress, except to the extent reserved to the people by initiative and referendum."],
    ["How many senators make up the Philippine Senate under the Constitution?", "24", ["12", "18", "36"], "The Constitution provides for a Senate composed of 24 senators."],
    ["What is the term of office of a Philippine senator?", "Six years", ["Three years", "Four years", "Nine years"], "Senators serve six-year terms, with term limits specified by the Constitution."],
    ["What is the term of office of a member of the House of Representatives?", "Three years", ["Two years", "Four years", "Six years"], "Members of the House serve three-year terms."],
    ["Which constitutional body administers the civil service?", "Civil Service Commission", ["Commission on Audit", "Commission on Elections", "National Economic and Development Authority"], "The Civil Service Commission is one of the three constitutional commissions."],
    ["Which constitutional commission audits government revenues and expenditures?", "Commission on Audit", ["Civil Service Commission", "Commission on Elections", "Human Rights Commission"], "The Commission on Audit examines, audits, and settles government accounts."],
    ["What is the minimum voting age stated in the Philippine Constitution?", "18 years", ["16 years", "20 years", "21 years"], "Citizens who are at least 18 years old and meet the other qualifications may vote."],
    ["What does the Constitution identify as the national language of the Philippines?", "Filipino", ["English", "Spanish", "Cebuano"], "The Constitution identifies Filipino as the national language; Filipino and English are official languages."],
    ["Which branch of government interprets laws and settles actual controversies?", "The judiciary", ["The executive", "The legislature", "The local government"], "Judicial power is vested in the Supreme Court and lower courts established by law."],
    ["Which article of the 1987 Constitution contains the Bill of Rights?", "Article III", ["Article I", "Article V", "Article XII"], "The Bill of Rights is found in Article III."],
    ["Who led the 1896 Philippine Revolution and is widely recognized as its Supremo?", "Andres Bonifacio", ["Emilio Aguinaldo", "Apolinario Mabini", "Marcelo H. del Pilar"], "Andres Bonifacio founded the Katipunan and led the revolution against Spanish rule."],
    ["On what date is Philippine Independence Day celebrated?", "June 12", ["July 4", "August 21", "December 30"], "Independence Day commemorates the June 12, 1898 declaration in Kawit, Cavite."],
    ["Who proclaimed Philippine independence in Kawit, Cavite, in 1898?", "Emilio Aguinaldo", ["Andres Bonifacio", "Manuel Quezon", "Jose Rizal"], "Emilio Aguinaldo proclaimed independence on June 12, 1898."],
    ["Who wrote Noli Me Tangere and El Filibusterismo?", "Jose Rizal", ["Graciano Lopez Jaena", "Apolinario Mabini", "Emilio Jacinto"], "Jose Rizal wrote the novels that criticized abuses under Spanish colonial rule."],
    ["What was the reform movement of Filipinos in Spain in the late 19th century called?", "The Propaganda Movement", ["The Katipunan", "The Philippine Commonwealth", "The Malolos Congress"], "The Propaganda Movement sought reforms and representation through peaceful advocacy."],
    ["What was the secret society founded by Andres Bonifacio in 1892?", "Katipunan", ["La Solidaridad", "La Liga Filipina", " ilustrados"], "The Kataastaasan, Kagalanggalangang Katipunan ng mga Anak ng Bayan was commonly called the Katipunan."],
    ["Where was the First Philippine Republic inaugurated in 1899?", "Malolos, Bulacan", ["Kawit, Cavite", "Cebu City", "Baguio City"], "The First Philippine Republic was inaugurated in Malolos, Bulacan."],
    ["Who became the first president of the Philippine Commonwealth?", "Manuel L. Quezon", ["Sergio Osmena", "Emilio Aguinaldo", "Manuel Roxas"], "Manuel L. Quezon served as president of the Commonwealth established in 1935."],
    ["What is the official name of Republic Act No. 6713?", "Code of Conduct and Ethical Standards for Public Officials and Employees", ["Local Government Code", "Anti-Graft and Corrupt Practices Act", "Administrative Code of 1987"], "RA 6713 sets standards of conduct and ethical behavior for public officials and employees."],
    ["Under RA 6713, public officials should lead modest lives appropriate to their positions and income. What value does this reflect?", "Commitment to public interest and simple living", ["Personal enrichment", "Political neutrality only", "Confidentiality of all records"], "RA 6713 includes commitment to public interest and a simple lifestyle among its norms."],
    ["Which is a norm of conduct under RA 6713?", "Justness and sincerity", ["Preferential treatment of relatives", "Use of office for personal gain", "Avoidance of public accountability"], "Justness and sincerity is one of the norms of conduct listed in RA 6713."],
    ["What does RA 6713 require public officials to file annually, subject to law?", "Statement of Assets, Liabilities and Net Worth", ["Personal travel diary", "Private client list", "Household voting record"], "The law requires filing of a Statement of Assets, Liabilities and Net Worth (SALN)."],
    ["Which principle requires government transactions to be made public, subject to lawful exceptions?", "Transparency", ["Secrecy", "Patronage", "Partisanship"], "Transparency supports public access to information and accountability, subject to legal limits."],
    ["Under RA 6713, when should public service be treated as a public trust?", "At all times", ["Only during office hours", "Only when audited", "Only during elections"], "The law states public officials and employees must uphold public interest over personal interest."],
    ["Which law is known as the Philippine Clean Air Act of 1999?", "Republic Act No. 8749", ["Republic Act No. 9003", "Republic Act No. 9275", "Republic Act No. 6969"], "RA 8749 is the Philippine Clean Air Act of 1999."],
    ["Which law is known as the Ecological Solid Waste Management Act of 2000?", "Republic Act No. 9003", ["Republic Act No. 8749", "Republic Act No. 9275", "Republic Act No. 7586"], "RA 9003 provides for ecological solid waste management, including segregation and recycling."],
    ["Which law is known as the Philippine Clean Water Act of 2004?", "Republic Act No. 9275", ["Republic Act No. 9003", "Republic Act No. 8749", "Republic Act No. 6969"], "RA 9275 is the Philippine Clean Water Act of 2004."],
    ["Which law regulates toxic substances and hazardous and nuclear wastes in the Philippines?", "Republic Act No. 6969", ["Republic Act No. 9003", "Republic Act No. 8749", "Republic Act No. 9275"], "RA 6969 regulates toxic substances and hazardous and nuclear wastes."],
    ["What is a key practice promoted by ecological solid waste management?", "Segregating waste at source", ["Mixing all waste before disposal", "Burning all household waste", "Dumping waste into waterways"], "RA 9003 promotes waste prevention, segregation, recycling, and composting."],
    ["Which national agency is the primary government body for environmental management and protection?", "Department of Environment and Natural Resources", ["Department of Tourism", "Department of Trade and Industry", "Department of Labor and Employment"], "The DENR is the principal agency responsible for the conservation and management of the environment and natural resources."],
    ["What does the acronym DENR stand for?", "Department of Environment and Natural Resources", ["Department of Energy and National Reform", "Directorate of Ecology and Natural Reserves", "Department of Environmental Needs and Regulation"], "DENR stands for Department of Environment and Natural Resources."],
    ["Which document generally evaluates potential environmental impacts of a proposed project?", "Environmental Impact Statement", ["Statement of Assets and Liabilities", "Certificate of Candidacy", "General Appropriations Act"], "An Environmental Impact Statement assesses a project's likely environmental effects and proposed measures."],
    ["What is the first step in the waste hierarchy: reduce, reuse, recycle?", "Reduce", ["Recycle", "Dispose", "Incinerate"], "Reducing consumption and waste generation is the preferred first step."],
    ["What does biodiversity describe?", "The variety of life in an area or on Earth", ["The age of a rock formation", "The amount of rainfall in a year", "The depth of a river"], "Biodiversity refers to variety among living organisms and ecosystems."],
    ["Which gas is a major greenhouse gas emitted by burning fossil fuels?", "Carbon dioxide", ["Oxygen", "Helium", "Neon"], "Carbon dioxide is released by fossil-fuel combustion and contributes to the greenhouse effect."],
    ["Which international agreement focuses on limiting global warming and climate action?", "The Paris Agreement", ["The Geneva Convention", "The Treaty of Versailles", "The Montreal Protocol only"], "The Paris Agreement is an international treaty on climate change adopted in 2015."],
    ["Which is an example of a renewable energy source?", "Solar energy", ["Coal", "Diesel", "Natural gas"], "Solar energy is replenished naturally, unlike fossil fuels."],
    ["What is the main purpose of protected areas?", "To conserve important ecosystems and biodiversity", ["To permit unrestricted resource extraction", "To eliminate all local communities", "To increase urban traffic"], "Protected areas conserve nature and associated cultural values through long-term management."],
    ["Which branch executes and enforces laws?", "The executive", ["The judiciary", "The legislature", "The constitutional commissions"], "The executive branch implements and enforces laws."],
    ["What is the highest court in the Philippines?", "The Supreme Court", ["The Court of Appeals", "The Sandiganbayan", "The Court of Tax Appeals"], "The Supreme Court is the highest court in the Philippine judicial system."],
    ["What is the constitutional term of office of the Philippine President?", "Six years", ["Three years", "Four years", "Eight years"], "The President serves a six-year term and is not eligible for reelection."],
    ["Which Philippine institution is responsible for conducting national and local elections?", "Commission on Elections", ["Civil Service Commission", "Commission on Audit", "Department of the Interior and Local Government"], "The Commission on Elections (COMELEC) administers and enforces election laws."],
    ["What does the constitutional principle of separation of powers do?", "Distributes government powers among branches", ["Places all government power in one office", "Removes judicial review", "Replaces elections with appointments"], "Separating powers among branches helps prevent concentration of authority."],
    ["What is a basic purpose of local government units?", "To provide local governance and public services", ["To replace the national Constitution", "To conduct foreign relations", "To appoint members of Congress"], "Local governments exercise powers and provide services within their jurisdictions under law."],
    ["Which value is most consistent with impartial public service?", "Applying the same lawful standards to comparable cases", ["Giving priority to personal friends", "Changing rules for favored applicants", "Withholding published requirements"], "Impartiality means decisions are not based on favoritism or improper personal interest."],
    ["Why should a public employee avoid using official position for personal gain?", "It creates a conflict with the public trust", ["It increases public transparency", "It is required by RA 6713", "It improves equal access"], "Public office is a public trust; private benefit can undermine integrity and fairness."],
    ["What is the purpose of public records retention rules?", "To preserve records and support accountability", ["To prevent all public access", "To discard records immediately", "To replace official decisions"], "Proper records management supports continuity, transparency, and accountability."],
    ["When is National Heroes Day generally observed in the Philippines?", "Last Monday of August", ["June 12", "December 30", "April 9"], "National Heroes Day is observed on the last Monday of August under the holiday schedule."],
    ["What does the Philippine flag's sun have eight rays representing?", "The first eight provinces that revolted against Spanish rule", ["The eight major islands", "The eight branches of government", "The eight national languages"], "The eight rays represent the first eight provinces that revolted against Spanish rule."],
    ["Under the 1987 Constitution, where is executive power vested?", "The President of the Philippines", ["The Senate President", "The Chief Justice", "The Civil Service Commission"], "Article VII vests executive power in the President of the Philippines."]
  ];
  const suppliedGeneralRaw = [
    makeOrderedQuestion("In 2023, the Philippines officially became a member of which international trade agreement that aims to promote economic integration among Asia-Pacific countries?", ["ASEAN Free Trade Area (AFTA)", "Comprehensive and Progressive Agreement for Trans-Pacific Partnership (CPTPP)", "Regional Comprehensive Economic Partnership (RCEP)", "Asia-Pacific Economic Cooperation (APEC)"], 2, "The Philippines ratified and joined the Regional Comprehensive Economic Partnership (RCEP) in 2023."),
    makeOrderedQuestion("Congress passes a law imposing additional restrictions on freedom of expression. The President signs it into law despite public criticism. Later, the Supreme Court declares the law unconstitutional. Which principle of separation of powers is BEST illustrated in this situation?", ["The President’s power to veto laws passed by Congress", "The Judiciary’s power of judicial review over legislative and executive acts", "The Legislature’s power to override the President’s decisions", "The Executive’s power to implement laws without question"], 1, "Judicial review allows courts to determine whether legislative and executive acts comply with the Constitution."),
    makeOrderedQuestion("Which of the following rights is explicitly protected under the Bill of Rights in the 1987 Philippine Constitution?", ["The right to vote for all citizens aged 16 and above", "The right to free public transportation", "The right to freedom of speech, expression, and the press", "The right to receive government subsidies"], 2, "Article III of the Constitution protects freedom of speech, expression, and the press."),
    makeOrderedQuestion("In the Philippines, House Bill No. 4727, commonly referred to as the “Death Penalty Bill,” sought to reimpose capital punishment. Which crimes were mainly targeted under this proposed law?", ["Corruption and plunder cases", "Drug-related offenses", "Electoral fraud and vote-buying", "Cybercrime offenses"], 1, "The proposed measure principally sought to restore capital punishment for specified drug-related offenses."),
    makeOrderedQuestion("A government engineer is tasked to evaluate bids for a major infrastructure project. One of the bidding companies is partly owned by his brother. The engineer decides to participate in the evaluation but promises to be 'fair and objective.' Which is the BEST assessment of the situation?", ["There is no conflict of interest because the engineer claims objectivity.", "A conflict of interest exists because of the close family relationship.", "There is only a potential conflict if the brother’s company wins.", "Conflict of interest applies only to elected officials, not employees."], 1, "The close family relationship creates a conflict of interest that should be disclosed and addressed, regardless of the engineer’s stated intentions."),
    makeOrderedQuestion("Congress passes a law creating a new government agency with a ₱50 billion budget. The President vetoes certain provisions of the law, arguing that they violate the Constitution. Congress overrides the veto with a two-thirds vote. Later, the Supreme Court strikes down the disputed provisions as unconstitutional. Which principle of separation of powers is MOST clearly illustrated by this sequence of events?", ["Checks and balances, where each branch restrains the others’ powers", "Legislative supremacy, since Congress ultimately prevails over the Executive", "Executive dominance, because the President can block laws indefinitely", "Judicial independence, but without any check from other branches"], 0, "The President’s veto, Congress’s override, and the Supreme Court’s judicial review demonstrate checks and balances among branches."),
    makeOrderedQuestion("Which of the following is the highest law of the land in the Philippines?", ["Republic Acts (RA)", "Presidential Decrees (PD)", "The 1987 Philippine Constitution", "Local Government Codes"], 2, "The Constitution is the supreme law; other laws and government acts must conform to it."),
    makeOrderedQuestion("Who was the first Filipino to lead a republic in Asia after declaring independence from Spanish rule in 1898?", ["Andres Bonifacio", "Apolinario Mabini", "Emilio Aguinaldo", "Gregorio del Pilar"], 2, "Emilio Aguinaldo led the First Philippine Republic, inaugurated in 1899 after the 1898 declaration of independence."),
    makeOrderedQuestion("Which of the following recent international events focused on global defense, security, and cooperation among NATO member countries?", ["78th World Health Assembly in Geneva", "The Hague NATO Summit 2025", "International Year of Glaciers’ Preservation", "EU–Central Asia Summit in Samarkand"], 1, "The Hague NATO Summit in 2025 focused on collective defense and security among NATO members."),
    makeOrderedQuestion("Which Presidential Decree established the Professional Regulation Commission (PRC) to regulate and supervise the practice of various professions in the Philippines?", ["Presidential Decree No. 807", "Presidential Decree No. 1445", "Presidential Decree No. 223", "Presidential Decree No. 985"], 2, "Presidential Decree No. 223 established the Professional Regulation Commission."),
    makeOrderedQuestion("Under R.A. 6713, which of the following principles requires public officials and employees to perform their duties with the highest degree of excellence, professionalism, intelligence, and skill?", ["Political Neutrality", "Professionalism", "Commitment to Public Interest", "Responsiveness to the Public"], 1, "Professionalism requires public officials and employees to perform their duties with excellence and skill."),
    makeOrderedQuestion("Which of the following statements best reflects the relationship between peace and human rights?", ["Peace and human rights are unrelated concepts that deal with different aspects of society.", "Peace can be achieved by limiting certain human rights for the sake of order.", "Lasting peace is possible only when human rights are respected, protected, and fulfilled.", "Human rights are secondary to maintaining political stability."], 2, "Respecting, protecting, and fulfilling human rights supports lasting and inclusive peace."),
    makeOrderedQuestion("Which of the following laws is known as the Code of Conduct and Ethical Standards for Public Officials and Employees?", ["Republic Act No. 3019", "Republic Act No. 6713", "Republic Act No. 9184", "Republic Act No. 7160"], 1, "Republic Act No. 6713 is the Code of Conduct and Ethical Standards for Public Officials and Employees."),
    makeOrderedQuestion("What is the fundamental law of the Philippines that serves as the basis of all other laws?", ["Civil Code of the Philippines", "Revised Penal Code", "1987 Constitution", "Local Government Code"], 2, "The 1987 Constitution is the fundamental and supreme law of the Philippines."),
    makeOrderedQuestion("What is the main purpose of the International Monetary Fund (IMF) in the global economy?", ["To promote fair trade and regulate tariffs between member nations", "To provide financial aid and stabilize exchange rates worldwide", "To encourage cultural cooperation and global tourism programs", "To collect revenues from multinational corporations for development"], 1, "The IMF promotes international monetary cooperation and provides financial assistance to help maintain stability."),
    makeOrderedQuestion("Which of the following is a global issue that directly impacts both the environment and the economy, prompting international agreements such as the Paris Climate Accord?", ["Nuclear proliferation", "Climate change", "Global terrorism", "Trade protectionism"], 1, "Climate change has broad environmental and economic effects and is addressed by agreements such as the Paris Agreement."),
    makeOrderedQuestion("In 2025, the Philippine government extended the 60-day ban on rice imports. What was the primary reason behind this policy?", ["To strengthen local rice production and protect Filipino farmers", "To comply with World Trade Organization (WTO) trade restrictions", "To increase dependence on imported rice from neighboring countries", "To reduce government subsidies for the agricultural sector"], 0, "The import restriction was intended to support local rice farmers and the domestic rice market."),
    makeOrderedQuestion("Which of the following statements BEST describes the principle of sovereignty under the 1987 Philippine Constitution?", ["Sovereignty means that only the President has supreme power over the country.", "Sovereignty resides in the people, and all government authority emanates from them.", "Sovereignty refers to the power of Congress to make and pass laws.", "Sovereignty is the exclusive right of the Supreme Court to interpret the laws."], 1, "Article II states that sovereignty resides in the people and all government authority emanates from them."),
    makeOrderedQuestion("Who is considered a \"nuisance candidate\" under the Omnibus Election Code?", ["A candidate who filed his certificate of candidacy past the deadline set by COMELEC.", "A candidate who is currently facing a criminal case filed against him in court.", "A candidate who filed his candidacy just to mock the election or confuse the voters.", "A candidate who withdrew his certificate of candidacy before the campaign period began."], 2, "A nuisance candidate files a certificate of candidacy to put the election process in mockery or disrepute, or to confuse voters."),
    makeOrderedQuestion("Which of the following situations BEST illustrates the principle of separation of powers under the 1987 Philippine Constitution?", ["Congress enacts a law, the President implements its provisions, and the Supreme Court reviews its validity when challenged.", "The President formulates laws, approves their passage, and executes them without involving Congress or the Judiciary.", "The Supreme Court drafts legal measures, enforces policies, and directly manages the affairs of local governments.", "Congress creates traffic regulations, enforces penalties, and carries out arrests without coordination with the Executive branch."], 0, "The legislature enacts laws, the executive implements them, and the judiciary may review their constitutionality."),
    makeOrderedQuestion("In a protracted land dispute between indigenous communities and a private corporation, the government appointed a neutral body to facilitate dialogue. Instead of focusing on who legally owns the land, the body encouraged both parties to explore ways of ensuring cultural preservation, sustainable development, and long-term cooperation. Which peace and conflict resolution concept does this illustrate?", ["Power-based negotiation – relying on authority and coercion", "Interest-based negotiation – addressing underlying needs and shared concerns", "Rights-based negotiation – emphasizing legal ownership and entitlements", "Avoidance – postponing or ignoring the conflict"], 1, "Interest-based negotiation explores underlying needs and shared concerns rather than focusing only on opposing positions."),
    makeOrderedQuestion("What significant event in Philippine history is commemorated every June 12?", ["The signing of the Treaty of Paris ending Spanish rule in the Philippines", "The declaration of Philippine independence from Spanish colonization in Kawit, Cavite", "The establishment of the First Philippine Republic in Malolos, Bulacan", "The birth anniversary of Dr. José Rizal"], 1, "June 12 commemorates the 1898 declaration of Philippine independence in Kawit, Cavite."),
    makeOrderedQuestion("The Tejeros Convention of March 22, 1897 is considered a turning point in the Philippine Revolution. Which of the following most accurately describes its outcome?", ["It unified all revolutionary factions under Andres Bonifacio as the supreme leader of the revolution.", "It resulted in the replacement of the Katipunan with a revolutionary government, which Bonifacio refused to recognize.", "It established the first revolutionary constitution that governed the Tagalog Republic.", "It formalized the alliance between the Magdalo and Magdiwang factions under Emilio Aguinaldo."], 1, "The convention elected a revolutionary government that supplanted the Katipunan structure; Bonifacio rejected the results."),
    makeOrderedQuestion("In 2023, the Philippines joined the Regional Comprehensive Economic Partnership (RCEP). What is the primary purpose of this trade agreement?", ["Promote free movement of labor within Southeast Asia", "Facilitate economic integration and trade liberalization among Asia-Pacific countries", "Establish a common currency for ASEAN member states", "Enforce environmental regulations across the Asia-Pacific region"], 1, "RCEP promotes economic integration and trade liberalization among participating Asia-Pacific countries."),
    makeOrderedQuestion("Under Republic Act No. 6713, what is the primary duty of every public official and employee?", ["To follow the directives of their immediate supervisor at all times.", "To uphold public interest over personal interest.", "To prioritize loyalty to political allies and parties.", "To avoid conflicts with co-workers and maintain harmony."], 1, "RA 6713 requires public officials and employees to uphold public interest over personal interest."),
    makeOrderedQuestion("A public official is tasked to evaluate project bids for a government infrastructure program. One of the bidding companies is owned by the official’s sibling. Which of the following BEST describes this situation?", ["Acceptable as long as the official remains impartial", "Not considered conflict of interest because the official is not the owner", "Conflict of interest because the official’s impartiality may be compromised", "Allowed if the sibling’s company offers the lowest bid"], 2, "A close family relationship to a bidder creates a conflict that may compromise the official’s impartiality."),
    makeOrderedQuestion("A government employee owns a private business that may conflict with his official duties. According to R.A. 6713, what should the employee do to comply with the law?", ["Temporarily suspend the business until the end of his government service", "Transfer management of the business to a trusted friend", "Divest himself of the interest in the business within a prescribed period", "Continue the business as long as it does not affect his working hours"], 2, "RA 6713 requires divestment of interests that create a conflict with official duties within the prescribed period."),
    makeOrderedQuestion("In a community dispute over ancestral land, government mediators encourage both parties to sit together and identify shared interests rather than focusing only on their opposing positions. This method emphasizes collaboration and addressing the root causes of conflict. Which conflict resolution approach is MOST clearly demonstrated here?", ["Arbitration, where a neutral third party imposes a binding decision", "Mediation, focusing on interests to foster mutual understanding", "Negotiation, where parties insist on their original positions until a compromise is reached", "Adjudication, where courts resolve the conflict through legal rulings"], 1, "Mediation facilitates dialogue and helps parties identify shared interests and understand underlying concerns."),
    makeOrderedQuestion("What form of government does the Philippines follow under its 1987 Constitution?", ["Parliamentary and unitary", "Presidential and federal", "Presidential and unitary", "Parliamentary and federal"], 2, "The Philippines has a presidential system and a unitary form of government."),
    makeOrderedQuestion("Which of the following principles of human rights means that every person is entitled to enjoy rights and freedoms without distinction of any kind, such as race, gender, language, or religion?", ["Universality", "Inalienability", "Non-discrimination", "Interdependence"], 2, "Non-discrimination requires rights to be enjoyed without distinctions such as race, gender, language, or religion."),
    makeOrderedQuestion("A House Bill is filed in the Philippine Congress to propose the creation of a Department of Disaster Resilience. Before it becomes a law, what is the NEXT step in the legislative process after the first reading?", ["It is immediately signed by the President", "It is referred to the proper committee for study and recommendation", "It is transmitted to the Senate for concurrence", "It is published in the Official Gazette"], 1, "After first reading, a bill is referred to the appropriate committee for study and recommendation."),
    makeOrderedQuestion("What is the maximum penalty that may be imposed on a public official or employee who violates the provisions of R.A. 6713?", ["Suspension for one month without pay.", "Imprisonment not exceeding five (5) years, or a fine not exceeding ₱5,000, or both.", "Dismissal from service with forfeiture of benefits only.", "Imprisonment not exceeding one (1) year, or a fine not exceeding ₱1,000, or both."], 1, "The stated maximum is imprisonment of up to five years, a fine of up to ₱5,000, or both, without prejudice to other applicable penalties."),
    makeOrderedQuestion("Which of the following best illustrates the principle of climate justice in addressing climate change issues?", ["Industrialized countries providing financial and technical support to developing nations most affected by climate impacts", "All countries contributing the same fixed amount to climate change mitigation regardless of their level of emissions", "Developing countries taking full responsibility for reducing global greenhouse gas emissions", "Wealthy nations delaying climate action until developing nations commit to stricter policies"], 0, "Climate justice recognizes differences in responsibility and capacity and supports vulnerable countries through finance and technology."),
    makeOrderedQuestion("A government procurement officer is in charge of evaluating suppliers for an upcoming IT equipment purchase. One of the bidding companies offers him an all-expense-paid trip abroad “as a token of appreciation” if their company is awarded the contract. The officer does not disclose this offer and continues to oversee the bidding process. What ethical issue does this situation BEST demonstrate?", ["Acceptance of gifts as part of Filipino hospitality", "Conflict of interest due to potential personal gain", "Simple neglect of duty for not reporting the incident", "Secondary employment in violation of civil service rules"], 1, "The offered personal benefit creates a conflict of interest and threatens the integrity of the procurement process."),
    makeOrderedQuestion("The Philippine government approves a project that promises rapid economic growth but will cause irreversible damage to a protected watershed. Environmental groups file a case invoking the principle of sustainable development. If the Supreme Court applies the Oposa v. Factoran (1993) doctrine, which BEST illustrates the Court’s reasoning?", ["Economic growth is the primary goal of the State; environmental protection must yield when jobs are at stake.", "The right to a balanced and healthful ecology is a fundamental right, enforceable even on behalf of future generations.", "Environmental rights are political questions reserved only for Congress and cannot be reviewed by the courts.", "The Executive has absolute discretion in approving development projects, as it balances economic and environmental interests."], 1, "Oposa v. Factoran recognized the right to a balanced and healthful ecology and the ability of generations to protect that right for those yet unborn."),
    makeOrderedQuestion("What is the official national language of the Philippines according to the 1987 Constitution?", ["English", "Filipino", "Tagalog", "Pilipino"], 1, "The Constitution identifies Filipino as the national language."),
    makeOrderedQuestion("Which law establishes the Code of Conduct and Ethical Standards for Public Officials and Employees in the Philippines?", ["Republic Act No. 3019", "Republic Act No. 6713", "Republic Act No. 9485", "Republic Act No. 9165"], 1, "Republic Act No. 6713 establishes this code of conduct and ethical standards."),
    makeOrderedQuestion("During a local community dispute over land boundaries, the barangay council decides not only to mediate between the parties but also to implement programs addressing poverty and social inequality in the area. Which conflict resolution principle is being applied here?", ["Conflict prevention", "Conflict management", "Conflict transformation", "Mediation"], 2, "Conflict transformation addresses underlying social structures and relationships, not only the immediate dispute."),
    makeOrderedQuestion("In a conflict between two indigenous communities over ancestral land, a local government unit mediates without considering historical grievances, power imbalances, or the cultural practices of the groups involved. The resulting agreement collapses within weeks, and tensions escalate further.\n\nWhich principle of effective peace and conflict resolution was most clearly neglected?", ["Neutrality and impartiality of the mediator", "Addressing root causes and structural inequalities", "Quick settlement to prevent escalation", "Reliance on top-down authority to enforce resolution"], 1, "Ignoring historical grievances, power imbalances, and cultural context leaves the root causes unresolved."),
    makeOrderedQuestion("What is the primary function of a Republic Act (RA) in the Philippine legal system?", ["To issue temporary directives that guide executive actions", "To amend constitutional provisions through national procedures", "To establish statutory laws enacted by Congress and approved", "To provide judicial guidelines used in resolving legal cases"], 2, "A Republic Act is a statutory law enacted by Congress through the legislative process."),
    makeOrderedQuestion("Which of the following international agreements aims to reduce global greenhouse gas emissions and limit global warming, directly impacting national environmental and economic policies?", ["The Paris Agreement", "The Geneva Convention", "The Trans-Pacific Partnership (TPP)", "The Universal Declaration of Human Rights"], 0, "The Paris Agreement is an international treaty addressing climate change and global warming."),
    makeOrderedQuestion("Which situation best demonstrates the principle of separation of powers in the Philippine government?", ["The President vetoes a bill passed by Congress.", "The Chief Justice issues an executive order for government agencies.", "A senator directly commands the military to enforce a law.", "The President writes and approves laws without congressional approval."], 0, "The presidential veto is a constitutional check on the legislative branch."),
    makeOrderedQuestion("Which of the following BEST reflects the principle of universality under the Universal Declaration of Human Rights (UDHR)?", ["Rights may only apply to citizens of democratic states", "Rights are inherent to all people regardless of race, religion, or nationality", "Rights can be suspended permanently during national emergencies", "Rights depend on the approval of the government in power"], 1, "Universality means human rights belong to all people, without distinction."),
    makeOrderedQuestion("Which of the following is an ethical standard mandated by R.A. 6713 (Code of Conduct and Ethical Standards for Public Officials and Employees)?", ["Pursuit of wealth accumulation", "Commitment to Public Interest", "Partisan political activity", "Extravagant lifestyle"], 1, "Commitment to public interest is one of the norms of conduct under RA 6713."),
    makeOrderedQuestion("What is the main goal of the Association of Southeast Asian Nations (ASEAN) in relation to peace and security in the region?", ["To create a single military force to defend member states from external threats.", "To promote regional cooperation and resolve disputes through peaceful means.", "To expand trade with Western nations only.", "To centralize political power among the founding member countries."], 1, "ASEAN promotes regional cooperation and peaceful approaches to disputes and security."),
    makeOrderedQuestion("Which of the following BEST describes the duty of public officials and employees under the Philippine Constitution and RA 6713 (Code of Conduct and Ethical Standards for Public Officials and Employees)?", ["To serve the government first before the people", "To always prioritize personal interest as long as laws are not violated", "To uphold public interest over personal interest at all times", "To avoid filing Statements of Assets, Liabilities, and Net Worth (SALN) if unnecessary"], 2, "Public office is a public trust, and public interest must prevail over personal interest."),
    makeOrderedQuestion("Which of the following correctly describes the concept of jus soli as a mode of acquiring citizenship?", ["Citizenship is acquired through the naturalization process.", "Citizenship is acquired based on the citizenship of one's parents.", "Citizenship is acquired based on the place of birth.", "Citizenship is acquired through marriage to a citizen."], 2, "Jus soli means citizenship is based on the place of birth."),
    makeOrderedQuestion("Which European country was the first to colonize the Philippines?", ["Spain", "Portugal", "Netherlands", "United Kingdom"], 0, "Spain established colonial rule in the Philippines beginning in the 16th century."),
    makeOrderedQuestion("Which of the following situations is the best example of a climate change issue?", ["Seasonal shifts between dry and wet periods that normally occur in the Philippines.", "Long-term rise in global temperature causing stronger typhoons and higher sea levels.", "Daily weather variations such as sudden rainfall followed by clear sunny intervals.", "Occasional volcanic eruptions that create environmental impacts in nearby areas."], 1, "Climate change refers to long-term shifts in climate patterns, including rising global temperatures and sea levels."),
    makeOrderedQuestion("Which of the following laws is known as the Local Government Code of 1991, which promotes local autonomy and decentralization in governance?", ["Republic Act No. 7160", "Republic Act No. 3019", "Republic Act No. 6713", "Republic Act No. 9184"], 0, "Republic Act No. 7160 is the Local Government Code of 1991.")
  ];
  const generalRaw = suppliedGeneralRaw;
  const questionBanks = [verbalRaw.map(([p, a, w, e]) => makeQuestion(p, a, w, e)), numberRaw, logicRaw, generalRaw];

  const emptyProgress = () => ({
    xp: 0, correct: 0, answered: 0, phaseLevels: [1, 1, 1, 1], phaseWins: [0, 0, 0, 0],
    streak: 0, lastStudyDate: "", dailyXP: 0, dailyDate: "", examLevel: "", examDate: "", bio: "",
    displayName: "Guest", avatar: ""
  });
  const readStore = () => {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORE_KEY) || "{}");
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch (error) {
      console.error("Could not read local reviewer data.", error);
      return {};
    }
  };
  let store = readStore();
  let activeEmail = store.activeEmail || "";
  let guest = emptyProgress();
  let selectedPhase = 0;
  let battle = null;
  let pendingQuestion = null;
  let soundOn = store.soundOn !== false;
  let musicOn = false;
  let audioContext = null;
  let musicBuffer = null;
  let musicSource = null;
  let musicGain = null;
  let musicLoading = null;
  let toastTimer;

  const $ = (id) => document.getElementById(id);
  const dialogs = { auth: $("auth-dialog"), profile: $("profile-dialog"), feedback: $("feedback-dialog") };
  const currentUser = () => activeEmail && store.accounts?.[activeEmail] ? store.accounts[activeEmail] : null;
  const progress = () => currentUser()?.progress || guest;
  const save = () => {
    if (currentUser()) {
      store.accounts[activeEmail].progress = progress();
      store.activeEmail = activeEmail;
    }
    store.soundOn = soundOn;
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); }
    catch (error) { console.error("Could not save reviewer data.", error); showToast("Storage is full. Remove a large avatar to save progress."); }
  };
  const normalizedDate = () => new Date().toLocaleDateString("en-CA");
  const initials = (name) => (name || "?").trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "?";
  const setAvatar = (element, userProgress) => {
    if (userProgress.avatar) {
      element.style.backgroundImage = `url("${userProgress.avatar}")`;
      element.textContent = "";
    } else {
      element.style.backgroundImage = "";
      element.textContent = initials(userProgress.displayName);
    }
  };
  const showToast = (message) => {
    $("toast").textContent = message;
    $("toast").classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => $("toast").classList.remove("show"), 2600);
  };
  const displayDate = (value) => {
    if (!value) return "Not set";
    const date = new Date(`${value}T00:00:00`);
    return Number.isNaN(date.getTime()) ? "Not set" : date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  };

  function getLevelHero(userProgress) {
    userProgress.heroVariants ||= [];
    userProgress.heroVariantLevels ||= [];
    const level = Math.min(50, userProgress.phaseLevels[selectedPhase] || 1);
    if (userProgress.heroVariantLevels[selectedPhase] !== level || !heroRoster[userProgress.heroVariants[selectedPhase]]) {
      const previous = userProgress.heroVariants[selectedPhase];
      const choices = heroRoster.map((_, index) => index).filter((index) => heroRoster.length < 2 || index !== previous);
      userProgress.heroVariants[selectedPhase] = choices[Math.floor(Math.random() * choices.length)];
      userProgress.heroVariantLevels[selectedPhase] = level;
      save();
    }
    return heroRoster[userProgress.heroVariants[selectedPhase]];
  }

  function getLevelExaminer(userProgress) {
    userProgress.examinerVariants ||= [];
    userProgress.examinerVariantLevels ||= [];
    const level = Math.min(50, userProgress.phaseLevels[selectedPhase] || 1);
    if (userProgress.examinerVariantLevels[selectedPhase] !== level || !examinerRoster[userProgress.examinerVariants[selectedPhase]]) {
      const previous = userProgress.examinerVariants[selectedPhase];
      const choices = examinerRoster.map((_, index) => index).filter((index) => examinerRoster.length < 2 || index !== previous);
      userProgress.examinerVariants[selectedPhase] = choices[Math.floor(Math.random() * choices.length)];
      userProgress.examinerVariantLevels[selectedPhase] = level;
      save();
    }
    return examinerRoster[userProgress.examinerVariants[selectedPhase]];
  }

  function render() {
    const p = progress();
    const user = currentUser();
    const levelHero = battle?.hero || getLevelHero(p);
    $("landing-screen").classList.toggle("hidden", Boolean(user));
    $("app-shell").classList.toggle("hidden", !user);
    const name = p.displayName || user?.username || "Guest";
    const heroArt = $("hero-art");
    const previousHero = heroArt.dataset.animal;
    heroArt.dataset.animal = levelHero.id;
    $("player-hero-image").src = levelHero.image;
    if (previousHero && previousHero !== levelHero.id) {
      heroArt.classList.remove("respawning");
      void heroArt.offsetWidth;
      heroArt.classList.add("respawning");
      window.setTimeout(() => heroArt.classList.remove("respawning"), 700);
    }
    const levelExaminer = battle?.enemy || getLevelExaminer(p);
    const enemyArt = $("enemy-art");
    const previousExaminer = enemyArt.dataset.examiner;
    enemyArt.dataset.examiner = levelExaminer.id;
    $("examiner-image").src = levelExaminer.image;
    $("enemy-name").textContent = levelExaminer.name;
    $("enemy-title").textContent = levelExaminer.title;
    $("enemy-sigil").textContent = "✦";
    if (previousExaminer && previousExaminer !== levelExaminer.id) {
      enemyArt.classList.remove("respawning");
      void enemyArt.offsetWidth;
      enemyArt.classList.add("respawning");
      window.setTimeout(() => enemyArt.classList.remove("respawning"), 700);
    }
    $("nav-name").textContent = name;
    $("hero-name").textContent = name;
    $("hero-character").textContent = levelHero.name;
    $("profile-name").textContent = user ? name : "Guest learner";
    $("profile-bio").textContent = p.bio || "Your civil service journey starts today.";
    $("target-exam").textContent = p.examLevel || "Not set";
    $("target-date").textContent = displayDate(p.examDate);
    [$("nav-avatar"), $("hero-avatar"), $("profile-avatar")].forEach((el) => setAvatar(el, p));
    $("hero-level").textContent = `LV ${String(Math.min(50, p.phaseLevels[selectedPhase] || 1)).padStart(2, "0")}`;
    $("total-xp").textContent = p.xp.toLocaleString();
    $("accuracy-rate").textContent = p.answered ? `${Math.round(p.correct / p.answered * 100)}%` : "—";
    $("highest-level").textContent = String(Math.min(50, Math.max(...p.phaseLevels))).padStart(2, "0");
    $("streak-count").textContent = p.streak || 0;
    $("logout-button").classList.toggle("hidden", !user);
    $("sound-toggle").classList.toggle("muted", !soundOn);
    $("sound-toggle").setAttribute("aria-label", soundOn ? "Mute sound effects" : "Enable sound effects");
    $("sound-toggle").setAttribute("aria-pressed", String(soundOn));
    $("sound-toggle").title = soundOn ? "Mute sound effects" : "Enable sound effects";
    $("sound-toggle").textContent = soundOn ? "♫" : "🔇";
    $("music-toggle").classList.toggle("muted", !musicOn);
    $("music-toggle").classList.toggle("audio-active", musicOn);
    $("music-toggle").setAttribute("aria-label", musicOn ? "Stop background music" : "Play background music");
    $("music-toggle").setAttribute("aria-pressed", String(musicOn));
    $("music-toggle").title = musicOn ? "Stop background music" : "Play background music";
    $("arena-phase").textContent = `PHASE 0${selectedPhase + 1} · ${phases[selectedPhase].short}`;
    $("level-label").textContent = `LEVEL ${String(p.phaseLevels[selectedPhase]).padStart(2, "0")} / 50`;
    $("phase-progress-label").textContent = `${p.phaseWins[selectedPhase] || 0} / 50 CLEARED`;
    $("level-progress").style.width = `${Math.max(0, (p.phaseLevels[selectedPhase] - 1) * 2)}%`;
    $("goal-progress").textContent = p.dailyDate === normalizedDate() ? p.dailyXP || 0 : 0;
    $("goal-bar").style.width = `${Math.min(100, (p.dailyDate === normalizedDate() ? p.dailyXP || 0 : 0) / 20 * 100)}%`;
    $("goal-message").textContent = p.dailyXP >= 20 && p.dailyDate === normalizedDate() ? "Daily goal complete. Great work!" : "Answer correctly to earn XP and build your streak.";
    renderPhases();
    if (!battle) renderIdle();
  }

  function renderPhases() {
    const p = progress();
    $("phase-grid").innerHTML = phases.map((phase, index) => {
      const level = Math.min(50, p.phaseLevels[index] || 1);
      const cleared = p.phaseWins[index] || 0;
      const pct = Math.round(cleared / 50 * 100);
      return `<button class="phase-card ${selectedPhase === index ? "selected" : ""} ${cleared >= 50 ? "completed" : ""}" data-phase="${index}" aria-pressed="${selectedPhase === index}" ${battle ? "disabled" : ""}>
        <span class="phase-icon">${phase.icon}</span><h3>${phase.name}</h3><p>${phase.desc}</p>
        <div class="phase-card-meta"><strong>LEVEL ${String(level).padStart(2, "0")} / 50</strong><span>${pct}%</span></div>
        <span class="phase-card-action">${selectedPhase === index ? "✓ SELECTED" : cleared >= 50 ? "✓ CLEARED · PLAY AGAIN" : "CHOOSE THIS PHASE"}</span>
      </button>`;
    }).join("");
  }

  function renderIdle() {
    const level = progress().phaseLevels[selectedPhase] || 1;
    $("question-category").textContent = `PHASE 0${selectedPhase + 1} · ${phases[selectedPhase].short}`;
    $("question-title").textContent = level > 50 ? "Phase complete. A new challenge awaits." : "The first strike is yours.";
    $("start-battle").disabled = level > 50;
    $("start-battle").innerHTML = level > 50 ? "PHASE COMPLETE" : "<span>▶</span> START ENCOUNTER";
    $("question-content").innerHTML = `<div class="empty-question"><span class="empty-icon">⚔</span><div><strong>${level > 50 ? "You conquered this phase" : "Your training ground awaits"}</strong><p>${level > 50 ? "Choose another phase to continue your training." : "Start an encounter to face up to four questions."}</p></div></div>`;
    setHealth("hero", 100); setHealth("enemy", 100);
    $("round-indicator").textContent = "ROUND 01";
    $("battle-message").textContent = level > 50 ? "This phase has been cleared." : "Choose a phase and begin your first encounter.";
  }

  function setHealth(side, value) {
    const hp = Math.max(0, Math.min(100, value));
    $(`${side}-hp`).style.width = `${hp}%`;
    $(`${side}-hp-label`).textContent = `${hp} / 100`;
  }

  function startBattle() {
    if (battle || progress().phaseLevels[selectedPhase] > 50) return;
    const bank = questionBanks[selectedPhase];
    const start = (progress().phaseLevels[selectedPhase] - 1) % bank.length;
    const indices = Array.from({ length: bank.length }, (_, i) => (start + i) % bank.length);
    battle = {
      hp: 100, enemyHp: 100, correct: 0, answered: 0, questionIndices: indices, cursor: 0,
      hero: getLevelHero(progress()),
      enemy: getLevelExaminer(progress())
    };
    renderPhases();
    $("start-battle").disabled = true;
    $("battle-message").textContent = "The examiner is waiting. Make each answer count.";
    showQuestion();
  }

  function showQuestion() {
    if (!battle) return;
    if (battle.answered >= 4 || battle.hp <= 0 || battle.enemyHp <= 0) return finishBattle();
    const index = battle.questionIndices[battle.cursor % battle.questionIndices.length];
    const question = questionBanks[selectedPhase][index];
    pendingQuestion = question;
    $("round-indicator").textContent = `ROUND 0${battle.answered + 1}`;
    $("question-category").textContent = `${phases[selectedPhase].short} · ENCOUNTER QUESTION ${battle.answered + 1} OF 4`;
    $("question-title").textContent = "Choose your answer.";
    $("question-content").innerHTML = `<div class="question-live"><p class="question-text">${question.prompt}</p><div class="answers-grid">${question.options.map((option, i) => `<button class="answer-button" data-answer="${i}"><b>${String.fromCharCode(65 + i)}</b>${option.text}</button>`).join("")}</div></div>`;
    $("question-content").querySelectorAll(".answer-button").forEach((button) => button.addEventListener("click", () => submitAnswer(Number(button.dataset.answer))));
  }

  function getAudioContext() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) throw new Error("Web Audio is not supported in this browser.");
    if (!audioContext || audioContext.state === "closed") audioContext = new AudioContextClass();
    return audioContext;
  }

  async function startMusic() {
    try {
      const context = getAudioContext();
      await context.resume();
      if (!musicOn || musicSource) return;
      if (!musicBuffer) {
        musicLoading ||= fetch("audio/background-music.wav").then((response) => {
          if (!response.ok && response.status !== 0) throw new Error(`Could not load background music (${response.status}).`);
          return response.arrayBuffer();
        }).then((data) => context.decodeAudioData(data));
        musicBuffer = await musicLoading;
        musicLoading = null;
      }
      if (!musicOn || musicSource) return;
      const source = context.createBufferSource();
      const gain = context.createGain();
      source.buffer = musicBuffer;
      source.loop = true;
      gain.gain.value = 0.32;
      source.connect(gain);
      gain.connect(context.destination);
      musicSource = source;
      musicGain = gain;
      source.onended = () => {
        source.disconnect();
        gain.disconnect();
        if (musicSource === source) {
          musicSource = null;
          musicGain = null;
        }
      };
      source.start();
    } catch (error) {
      musicLoading = null;
      console.warn("Background music could not start.", error);
      if (!musicOn) return;
      musicOn = false;
      save();
      render();
      showToast("Could not load background music. Check the audio file.");
    }
  }

  function stopMusic() {
    if (!musicSource) return;
    const source = musicSource;
    const gain = musicGain;
    musicSource = null;
    musicGain = null;
    source.onended = null;
    source.stop();
    source.disconnect();
    gain?.disconnect();
  }

  function playCombatSound(type) {
    if (!soundOn) return;
    try {
      const ctx = getAudioContext();
      const play = () => {
        if (!soundOn) return;
        const now = ctx.currentTime;
        const duration = type === "attack" ? 0.48 : 0.3;
        const buffer = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * duration), ctx.sampleRate);
        const samples = buffer.getChannelData(0);
        for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1;
        const noise = ctx.createBufferSource();
        const filter = ctx.createBiquadFilter();
        const noiseGain = ctx.createGain();
        noise.buffer = buffer;
        filter.type = type === "attack" ? "bandpass" : "lowpass";
        filter.Q.value = type === "attack" ? 0.7 : 0.8;
        filter.frequency.setValueAtTime(type === "attack" ? 3400 : 260, now);
        filter.frequency.exponentialRampToValueAtTime(type === "attack" ? 500 : 90, now + duration);
        noiseGain.gain.setValueAtTime(0.0001, now);
        noiseGain.gain.exponentialRampToValueAtTime(type === "attack" ? 0.38 : 0.28, now + 0.035);
        noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + (type === "attack" ? 0.34 : duration));
        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(ctx.destination);
        noise.start(now);
        noise.stop(now + duration);
        noise.onended = () => { noise.disconnect(); filter.disconnect(); noiseGain.disconnect(); };

        if (type === "attack") {
          const hitAt = now + 0.19;
          const thud = ctx.createOscillator();
          const thudGain = ctx.createGain();
          thud.type = "triangle";
          thud.frequency.setValueAtTime(170, hitAt);
          thud.frequency.exponentialRampToValueAtTime(55, hitAt + 0.14);
          thudGain.gain.setValueAtTime(0.0001, hitAt);
          thudGain.gain.exponentialRampToValueAtTime(0.16, hitAt + 0.008);
          thudGain.gain.exponentialRampToValueAtTime(0.0001, hitAt + 0.16);
          thud.connect(thudGain);
          thudGain.connect(ctx.destination);
          thud.start(hitAt);
          thud.stop(hitAt + 0.17);
          thud.onended = () => { thud.disconnect(); thudGain.disconnect(); };

          [520, 815, 1230].forEach((frequency, index) => {
            const ring = ctx.createOscillator();
            const ringGain = ctx.createGain();
            ring.type = "sine";
            ring.frequency.value = frequency * (1 + (Math.random() - 0.5) * 0.025);
            ringGain.gain.setValueAtTime(0.0001, hitAt);
            ringGain.gain.exponentialRampToValueAtTime([0.11, 0.065, 0.035][index], hitAt + 0.006);
            ringGain.gain.exponentialRampToValueAtTime(0.0001, hitAt + 0.32 - index * 0.035);
            ring.connect(ringGain);
            ringGain.connect(ctx.destination);
            ring.start(hitAt);
            ring.stop(hitAt + 0.33);
            ring.onended = () => { ring.disconnect(); ringGain.disconnect(); };
          });
        } else {
          const impact = ctx.createOscillator();
          const impactGain = ctx.createGain();
          impact.type = "triangle";
          impact.frequency.setValueAtTime(125, now);
          impact.frequency.exponentialRampToValueAtTime(48, now + duration);
          impactGain.gain.setValueAtTime(0.18, now);
          impactGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
          impact.connect(impactGain);
          impactGain.connect(ctx.destination);
          impact.start(now);
          impact.stop(now + duration);
          impact.onended = () => { impact.disconnect(); impactGain.disconnect(); };
        }
      };
      if (ctx.state === "suspended") {
        ctx.resume().then(play).catch((error) => console.warn("Sound effects could not resume.", error));
      } else {
        play();
      }
    } catch (error) {
      console.warn("Sound effects could not be played.", error);
    }
  }

  function submitAnswer(choiceIndex) {
    if (!battle || !pendingQuestion) return;
    const selected = pendingQuestion.options[choiceIndex];
    if (!selected) return;
    $("question-content").querySelectorAll(".answer-button").forEach((button, index) => {
      button.disabled = true;
      if (pendingQuestion.options[index].correct) button.classList.add("correct");
      else if (index === choiceIndex) button.classList.add("incorrect");
    });
    const isCorrect = selected.correct;
    battle.answered++;
    battle.cursor++;
    progress().answered++;
    const arena = $("enemy-fighter");
    if (isCorrect) {
      battle.correct++;
      battle.enemyHp = Math.max(0, battle.enemyHp - 34);
      progress().correct++;
      progress().xp += 10;
      const p = progress();
      if (p.dailyDate !== normalizedDate()) { p.dailyDate = normalizedDate(); p.dailyXP = 0; }
      p.dailyXP += 10;
      const today = normalizedDate();
      if (p.lastStudyDate !== today) {
        const yesterday = new Date(Date.now() - 86400000).toLocaleDateString("en-CA");
        p.streak = p.lastStudyDate === yesterday ? (p.streak || 0) + 1 : 1;
        p.lastStudyDate = today;
      }
      setHealth("enemy", battle.enemyHp);
      $("hero-fighter").classList.remove("attack"); arena.classList.remove("hit");
      void $("hero-fighter").offsetWidth;
      $("hero-fighter").classList.add("attack"); arena.classList.add("hit");
      $("battle-message").textContent = "Direct hit! The examiner takes damage.";
    } else {
      battle.hp = Math.max(0, battle.hp - 25);
      setHealth("hero", battle.hp);
      $("enemy-fighter").classList.remove("counter"); $("hero-fighter").classList.remove("damaged");
      void $("hero-fighter").offsetWidth;
      $("enemy-fighter").classList.add("counter"); $("hero-fighter").classList.add("damaged");
      $("battle-message").textContent = "The examiner counter-attacks. Review the explanation.";
    }
    playCombatSound(isCorrect ? "attack" : "damage");
    save();
    render();
    $("feedback-dialog").classList.toggle("is-wrong", !isCorrect);
    $("feedback-mark").textContent = isCorrect ? "✦" : "!";
    $("feedback-eyebrow").textContent = isCorrect ? "NICE WORK" : "LEARN FROM THE MISS";
    $("feedback-title").textContent = isCorrect ? "Correct!" : "Not quite.";
    $("feedback-explanation").textContent = `${isCorrect ? "" : `Correct answer: ${pendingQuestion.answer}. `}${pendingQuestion.explanation}`;
    $("feedback-reward").textContent = isCorrect ? "+10 XP · ENEMY HIT" : "KEEP GOING";
    dialogs.feedback.showModal();
  }

  function finishBattle() {
    const won = battle.correct >= 3;
    const p = progress();
    if (won) {
      p.phaseWins[selectedPhase] = Math.min(50, (p.phaseWins[selectedPhase] || 0) + 1);
      p.phaseLevels[selectedPhase] = Math.min(51, (p.phaseLevels[selectedPhase] || 1) + 1);
      showToast("Encounter cleared! Your next level is ready.");
    } else {
      showToast("Not enough correct answers this time. Try again!");
    }
    battle = null; pendingQuestion = null;
    $("hero-fighter").classList.remove("attack", "damaged");
    $("enemy-fighter").classList.remove("hit", "counter");
    save();
    render();
    $("battle-message").textContent = won ? "Victory! You broke through the examiner's defense." : "Encounter lost. Review the explanations and try again.";
    $("question-title").textContent = won ? "The examiner is defeated!" : "Every attempt makes you stronger.";
    $("question-content").innerHTML = `<div class="empty-question"><span class="empty-icon">${won ? "✦" : "↻"}</span><div><strong>${won ? "Encounter cleared" : "Run it back?"}</strong><p>You answered ${p.lastEncounterCorrect ?? 0} questions correctly. ${won ? "Your next level is unlocked." : "You need 3 correct answers to win."}</p></div></div>`;
    $("start-battle").disabled = p.phaseLevels[selectedPhase] > 50;
    $("start-battle").innerHTML = p.phaseLevels[selectedPhase] > 50 ? "PHASE COMPLETE" : "<span>▶</span> FIGHT AGAIN";
  }

  function continueAfterFeedback() {
    dialogs.feedback.close();
    if (!battle) return;
    if (battle.answered >= 4 || battle.hp <= 0 || battle.enemyHp <= 0) {
      progress().lastEncounterCorrect = battle.correct;
      finishBattle();
      return;
    }
    showQuestion();
  }

  function openAuth(mode = "register") {
    dialogs.profile.close();
    $("auth-error").textContent = "";
    setAuthMode(mode);
    dialogs.auth.showModal();
  }
  function setAuthMode(mode) {
    $("auth-form").dataset.mode = mode;
    document.querySelectorAll(".auth-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.mode === mode));
    $("username-field").classList.toggle("hidden", mode === "login");
    $("auth-form").elements.username.required = mode === "register";
    $("auth-form").elements.password.autocomplete = mode === "login" ? "current-password" : "new-password";
    $("auth-heading").textContent = mode === "login" ? "Welcome back" : "Welcome to CSER PH";
    $("auth-subheading").textContent = mode === "login" ? "Log in to continue your review journey." : "Create a local learner profile to save your progress.";
    $("auth-submit").innerHTML = mode === "login" ? "LOG IN <span>→</span>" : "CREATE PROFILE <span>→</span>";
  }

  async function hashPassword(password, salt) {
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey("raw", encoder.encode(password), "PBKDF2", false, ["deriveBits"]);
    const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", salt: encoder.encode(salt), iterations: 120000, hash: "SHA-256" }, key, 256);
    return Array.from(new Uint8Array(bits), (byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  async function handleAuth(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim().toLowerCase();
    const password = String(data.get("password") || "");
    const mode = form.dataset.mode;
    $("auth-error").textContent = "";
    try {
      if (!crypto?.subtle) throw new Error("Secure password hashing is unavailable in this browser context.");
      if (mode === "register") {
        const username = String(data.get("username") || "").trim();
        if (username.length < 2) throw new Error("Username must be at least 2 characters.");
        if (store.accounts?.[email]) throw new Error("An account with this email already exists on this device.");
        const salt = crypto.getRandomValues(new Uint8Array(16));
        const saltHex = Array.from(salt, (byte) => byte.toString(16).padStart(2, "0")).join("");
        const hash = await hashPassword(password, saltHex);
        store.accounts ||= {};
        store.accounts[email] = { username, salt: saltHex, passwordHash: hash, progress: { ...emptyProgress(), displayName: username } };
        activeEmail = email;
      } else {
        const account = store.accounts?.[email];
        if (!account) throw new Error("No local account found for that email.");
        if (await hashPassword(password, account.salt) !== account.passwordHash) throw new Error("The email or password is incorrect.");
        activeEmail = email;
      }
      store.activeEmail = activeEmail;
      save();
      dialogs.auth.close();
      render();
      showToast(mode === "register" ? "Your local profile is ready." : "Welcome back.");
    } catch (error) {
      $("auth-error").textContent = error.message || "Could not complete sign in.";
    }
  }

  function openProfile() {
    if (!currentUser()) return openAuth();
    const p = progress(), form = $("profile-form");
    form.elements.displayName.value = p.displayName || currentUser().username;
    form.elements.bio.value = p.bio || "";
    form.elements.examLevel.value = p.examLevel || "";
    form.elements.examDate.value = p.examDate || "";
    $("profile-error").textContent = "";
    setAvatar($("edit-avatar-preview"), p);
    dialogs.profile.showModal();
  }

  $("phase-grid").addEventListener("click", (event) => {
    const card = event.target.closest("[data-phase]");
    if (!card || battle) return;
    selectedPhase = Number(card.dataset.phase);
    render();
  });
  $("start-battle").addEventListener("click", startBattle);
  $("feedback-continue").addEventListener("click", continueAfterFeedback);
  $("profile-open").addEventListener("click", openProfile);
  $("profile-edit").addEventListener("click", openProfile);
  $("profile-cta").addEventListener("click", openProfile);
  $("landing-register").addEventListener("click", () => openAuth("register"));
  $("landing-login").addEventListener("click", () => openAuth("login"));
  $("auth-form").addEventListener("submit", handleAuth);
  document.querySelectorAll(".auth-tab").forEach((tab) => tab.addEventListener("click", () => setAuthMode(tab.dataset.mode)));
  $("profile-form").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!currentUser()) return;
    const data = new FormData(event.currentTarget), p = progress();
    const displayName = String(data.get("displayName") || "").trim();
    if (!displayName) { $("profile-error").textContent = "Display name is required."; return; }
    p.displayName = displayName;
    p.bio = String(data.get("bio") || "").trim();
    p.examLevel = String(data.get("examLevel") || "");
    p.examDate = String(data.get("examDate") || "");
    currentUser().username = displayName;
    save(); dialogs.profile.close(); render(); showToast("Profile updated.");
  });
  $("avatar-upload").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!["image/png", "image/jpeg", "image/webp"].includes(file.type)) { $("profile-error").textContent = "Choose a PNG, JPEG, or WebP image."; event.target.value = ""; return; }
    if (file.size > 1024 * 1024) { $("profile-error").textContent = "Avatar must be 1 MB or smaller."; event.target.value = ""; return; }
    const reader = new FileReader();
    reader.onload = () => {
      progress().avatar = String(reader.result);
      save(); setAvatar($("edit-avatar-preview"), progress()); render();
    };
    reader.onerror = () => { $("profile-error").textContent = "Could not read that image. Please try another."; };
    reader.readAsDataURL(file);
  });
  $("clear-avatar").addEventListener("click", () => {
    progress().avatar = ""; $("avatar-upload").value = "";
    save(); setAvatar($("edit-avatar-preview"), progress()); render();
  });
  $("delete-account").addEventListener("click", () => {
    if (!currentUser()) return;
    if (!window.confirm("Delete this local account and all saved progress from this device? This cannot be undone.")) return;
    delete store.accounts[activeEmail];
    activeEmail = ""; store.activeEmail = ""; guest = emptyProgress();
    save(); dialogs.profile.close(); render(); showToast("Local account deleted.");
  });
  $("logout-button").addEventListener("click", () => {
    if (battle) { showToast("Finish your encounter before logging out."); return; }
    activeEmail = ""; store.activeEmail = ""; save(); render(); showToast("You have logged out.");
  });
  $("music-toggle").addEventListener("click", () => {
    musicOn = !musicOn;
    if (musicOn) startMusic();
    else stopMusic();
    save();
    render();
  });
  $("sound-toggle").addEventListener("click", () => { soundOn = !soundOn; save(); render(); });
  $("feedback-dialog").addEventListener("cancel", (event) => event.preventDefault());
  dialogs.auth.addEventListener("cancel", () => { $("auth-form").reset(); });

  render();
})();
