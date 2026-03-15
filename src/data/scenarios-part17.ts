import { Scenario } from "@/types";

export const SCENARIOS_PART17: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (193-195)
  // ============================================

  // Scenario 193 - Jordan Cole, meeting, foundation
  {
    id: "scenario-193",
    title: "The Budget Allocation Meeting",
    context:
      "Your department is meeting to allocate next quarter's budget across four project streams. Jordan has arrived with a spreadsheet and a clear opinion on where the money should go.",
    chooseContext:
      "Jordan has listened to two rounds of pitches from project leads and is now pushing for a decision. Two of the four streams have weak business cases, and Jordan is not hiding that view.",
    rewriteContext:
      "Jordan has asked you to draft the meeting summary email that confirms the budget allocation, including who got what and what the expectations are for each funded stream.",
    characterId: "jordan-cole",
    dialogue:
      "We have four proposals and enough money for two. I have read all four business cases. Two of them have clear ROI projections and two do not. I am not spending another hour debating gut feelings. Let us fund the ones with numbers behind them and move on.",
    chooseDialogue:
      "The wellness programme is a nice idea, but there is no measurable outcome attached to it. The automation project pays for itself in six months. Someone tell me why we are still discussing this.",
    rewriteDialogue:
      "Send the summary today. State what was funded, what was not, and why. If someone missed the meeting, they should be able to read your email and know exactly where they stand without having to ask a single follow-up question.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "meeting",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Jordan has arrived at a budget meeting with a clear position, dismissed proposals without measurable outcomes, and demanded a fast decision. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan leads with decisiveness, dismisses ambiguity, and pushes for a resolution based on clear criteria. This is direct communication focused on outcomes and speed.",
          observation:
            "Notice how Jordan frames the decision as binary: numbers or no numbers. Direct communicators simplify choices to accelerate decision-making.",
          coachingTip:
            "When someone arrives at a meeting having already formed a view and pushes for quick resolution, they are signalling a direct style. Respond with equally crisp contributions.",
          styleContext:
            "Direct communicators see prolonged budget discussions as a sign of indecision. They want criteria applied and decisions confirmed.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Jordan does reference ROI and data, which can look analytical. But the emphasis is on speed and cutting debate short, not on thorough evaluation of the numbers.",
          observation:
            "An analytical communicator would want to examine the ROI methodology and challenge the assumptions. Jordan uses the numbers as a shortcut to a fast decision.",
          coachingTip:
            "If someone uses data to end a conversation quickly, that is direct. If they use data to deepen a conversation, that is analytical. Jordan is clearly ending the debate.",
          styleContext:
            "Direct communicators reference data as a decision-making weapon, not as a subject for further analysis.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has not invited input on how people feel about the proposals, nor has she asked about team morale or the personal impact of defunding projects.",
          observation:
            "There is no attempt to build consensus or check emotional temperature. The entire approach is transactional.",
          coachingTip:
            "Ask yourself: is this person trying to understand everyone's perspective, or trying to reach a decision? Jordan is entirely in decision mode.",
          styleContext:
            "Direct communicators treat budget meetings as allocation exercises, not collaborative discussions. They want outcomes, not consensus.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan has dismissed the wellness programme for lacking measurable outcomes and is pushing to fund the automation project instead. How do you respond?",
      options: [
        {
          id: "s193-opt-a",
          text: "Agreed. The automation project has a six-month payback and frees up 200 hours per quarter. Fund it, and ask the wellness team to come back next quarter with measurable targets.",
          score: 10,
          result: "strong",
          explanation:
            "You have matched Jordan's style by supporting the decision with specific numbers and offering a clear path forward for the rejected proposal.",
        },
        {
          id: "s193-opt-b",
          text: "I see the logic, but the wellness programme could reduce attrition. Could we perhaps run a small pilot to gather data before ruling it out entirely?",
          score: 5,
          result: "partial",
          explanation:
            "Reasonable suggestion, but Jordan wants a decision now, not a deferral. The pilot idea delays resolution, which frustrates a direct communicator.",
        },
        {
          id: "s193-opt-c",
          text: "I think we should consider what message it sends to the team if we defund wellness. People are already feeling stretched, and this could damage morale significantly.",
          score: 0,
          result: "weak",
          explanation:
            "This shifts the conversation to feelings and perception, which Jordan has explicitly signalled she does not want to discuss. It will be seen as avoiding the decision.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan wants you to draft the post-meeting email confirming budget allocations. It should state what was funded, what was not, and why. Write it in a direct style with no ambiguity.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Q3 Budget - Decisions Confirmed\n\nTwo projects funded, two deferred.\n\nFunded:\n1. Process Automation - 45k. Six-month payback, 200 hours saved per quarter. Lead: Patel. First milestone due 15 July.\n2. Customer Data Platform - 30k. Supports three active client commitments. Lead: Torres. Scoping complete by 1 July.\n\nDeferred:\n3. Wellness Programme - No measurable outcomes defined. Resubmit with targets for Q4 review.\n4. Office Redesign - Low strategic priority this quarter.\n\nQuestions to Jordan by Friday.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is clear, specific, and leaves no room for interpretation. Anyone reading it knows exactly what was decided and what happens next.",
          observation:
            "You included deadlines, owners, and reasons for each decision. This is the kind of email Jordan can forward without adding context.",
          coachingTip:
            "When writing for direct communicators, ask yourself: could someone who was not in the meeting act on this email immediately? If yes, you have hit the mark.",
          styleContext:
            "Direct communicators judge meeting summaries by whether they eliminate the need for follow-up conversations. Completeness and clarity are everything.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether you have included specific amounts, deadlines, and owners for every decision. Missing any of these creates ambiguity.",
          observation:
            "If your email says 'the automation project was approved' without stating the budget, timeline, or accountable person, it is incomplete for a direct communicator.",
          coachingTip:
            "For each funded item, include: what, how much, who owns it, and the first deadline. For each deferred item, state why and what would need to change.",
          styleContext:
            "Direct communicators use meeting summaries as accountability documents. Vague summaries undermine trust in the decision-making process.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too vague, too diplomatic about rejected proposals, or reads like meeting notes rather than a set of confirmed decisions.",
          observation:
            "If your email includes phrases like 'after careful consideration, the group felt that...' it is too soft. Jordan wants declarations, not narratives.",
          coachingTip:
            "Remove every qualifying phrase. Replace 'we decided to explore' with 'funded' or 'deferred'. The email should read like a set of instructions, not a story.",
          styleContext:
            "Direct communicators want meeting outputs that read like contracts. If the tone is conversational, it does not feel binding enough.",
        },
      },
    },
  },

  // Scenario 194 - Sam Hartley, meeting, intermediate
  {
    id: "scenario-194",
    title: "The Vendor Selection Meeting",
    context:
      "Your team is meeting to choose between three software vendors for a new CRM system. Sam has tested all three and has strong views about which one to pick, based on speed of implementation.",
    chooseContext:
      "Sam has heard the procurement team's detailed comparison matrix but is frustrated that the discussion keeps circling back to minor feature differences rather than making a call.",
    rewriteContext:
      "Sam has asked you to write the recommendation email to the leadership team, making a clear case for the chosen vendor without burying the decision in caveats.",
    characterId: "sam-hartley",
    dialogue:
      "I have used all three. Vendor A deploys in six weeks. Vendor B needs twelve. Vendor C is still in beta for the module we need. The choice is obvious. We go with A, sign the contract this week, and start onboarding on Monday.",
    chooseDialogue:
      "I understand that Vendor B has a slightly better reporting dashboard, but we are not buying a dashboard. We are buying a CRM that works in six weeks, not twelve. Every week we delay costs us pipeline visibility. Can we please just decide?",
    rewriteDialogue:
      "Write the recommendation so it is impossible to misread. We want Vendor A, we want the contract signed by Friday, and we want onboarding starting next Monday. Do not give leadership a reason to defer.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "meeting",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Sam has tested all three vendors, formed a clear preference based on deployment speed, and is pushing the group to stop debating minor features and commit. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam has done his own evaluation, arrived with a firm recommendation, and is frustrated by continued deliberation. This is direct communication driven by urgency and decisiveness.",
          observation:
            "Sam frames the cost of delay in business terms - pipeline visibility - to create pressure for immediate action. Direct communicators weaponise business impact to force decisions.",
          coachingTip:
            "When someone expresses frustration at ongoing discussion and keeps redirecting to a single decisive criterion, they are communicating directly. Match their urgency.",
          styleContext:
            "Direct communicators choose vendors the way they choose restaurants: fast, based on the most important criterion, and without revisiting the decision afterwards.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Sam does reference specific timelines and comparisons, which can look analytical. But notice he is using the data to shut down debate, not to open deeper analysis.",
          observation:
            "An analytical communicator would want to weight each criterion and score the vendors methodically. Sam has already decided and is using facts to justify the call.",
          coachingTip:
            "Direct communicators use data as ammunition. Analytical communicators use data as a process. Sam already has his answer and wants everyone else to accept it.",
          styleContext:
            "Direct communicators pre-analyse decisions privately and arrive at meetings ready to advocate, not explore.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not asked how the team feels about the vendors, nor has he invited stories about user experience or team preferences. The entire framing is about speed and business impact.",
          observation:
            "There is no mention of team comfort, change readiness, or emotional response to the switch. Sam treats this as a procurement exercise, not a people exercise.",
          coachingTip:
            "Ask yourself: is this person interested in the best-researched answer or the fastest good-enough answer? Sam clearly wants speed over thoroughness.",
          styleContext:
            "Direct communicators tolerate imperfect decisions far better than slow ones. They would rather correct course later than delay the start.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam is frustrated that the team keeps comparing minor features instead of committing to a vendor. He wants a decision now. How do you respond?",
      options: [
        {
          id: "s194-opt-a",
          text: "You are right. Vendor A deploys fastest and meets our core requirements. I will draft the contract request today and circulate the onboarding timeline by end of play tomorrow.",
          score: 10,
          result: "strong",
          explanation:
            "You have matched Sam's urgency, confirmed his recommendation, and immediately moved to execution. This is exactly how to support a direct communicator in decision mode.",
        },
        {
          id: "s194-opt-b",
          text: "I am inclined to agree, but I want to flag that Vendor B's reporting capability might matter more in six months. Can we get a written commitment from Vendor A on their reporting roadmap before we sign?",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable safeguard, but Sam will see it as adding a condition that delays the signature. Keep conditions minimal and frame them as parallel tasks, not blockers.",
        },
        {
          id: "s194-opt-c",
          text: "I think we should survey the wider team to see which interface people feel most comfortable with. User adoption is critical, and we do not want to impose a tool nobody likes.",
          score: 0,
          result: "weak",
          explanation:
            "Sam wants a decision today, and you have just proposed a survey. This introduces weeks of delay and shifts from decisive action to consensus-building, which will frustrate a direct communicator.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam wants you to write a recommendation email to leadership that makes a clear case for Vendor A. No caveats, no hedging. Write it in a direct style that leaves no room for deferral.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: CRM Vendor Recommendation - Action Required by Friday\n\nWe recommend Vendor A. Here is why.\n\nDeployment: 6 weeks (vs 12 for Vendor B, unknown for Vendor C).\nCost: 15% below budget at 42k annually.\nCore requirements: All met. Reporting module available Q3.\n\nAction needed: Contract approval by Friday. Onboarding starts Monday.\n\nDelaying one week costs us another sprint without pipeline visibility. We are ready to move.\n\nHappy to answer questions, but the recommendation is firm.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email states the recommendation upfront, backs it with the decisive criteria, and makes the ask unmistakable. Leadership can approve or question, but they cannot ignore it.",
          observation:
            "You framed the cost of delay in business terms, which creates urgency without being aggressive. This is how direct communicators influence upward.",
          coachingTip:
            "When writing recommendations for direct communicators, put the answer in the first line and the evidence below. Never make a reader scroll to find out what you are asking for.",
          styleContext:
            "Direct communicators write recommendations as if they are the decision-maker. The tone is confident, not tentative.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether your email buries the recommendation under analysis. If leadership has to read three paragraphs before finding out what you want, Sam will rewrite it himself.",
          observation:
            "If your email opens with background context or a comparison table rather than a clear recommendation, it is structured for analytical readers, not direct ones.",
          coachingTip:
            "Lead with the decision, then provide just enough evidence to support it. Three bullet points beat three paragraphs.",
          styleContext:
            "Direct communicators want recommendation emails that can be approved in under sixty seconds. Make it easy to say yes.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either hedges the recommendation, presents all three vendors as viable options, or invites further discussion. Sam wanted a clear call to action, not an open question.",
          observation:
            "If your email includes 'we would welcome your thoughts on the best path forward', it has failed. Sam does not want thoughts; he wants a signature.",
          coachingTip:
            "Delete every sentence that gives leadership permission to defer. A recommendation should feel like a decision that just needs a stamp.",
          styleContext:
            "Direct communicators see hedged recommendations as a sign that the writer does not actually believe in their own proposal.",
        },
      },
    },
  },

  // Scenario 195 - Alex Tran, meeting, advanced
  {
    id: "scenario-195",
    title: "The Quarterly Business Review",
    context:
      "You are preparing for a quarterly business review where Alex will present the division's results to the board. She has asked you to help her rehearse, and she is already frustrated with the draft deck.",
    chooseContext:
      "Alex is halfway through rehearsal and has just been told by a colleague that the board prefers a narrative approach with context-setting before data. Alex disagrees strongly.",
    rewriteContext:
      "Alex wants you to rewrite the opening slide's speaking notes so they set the tone she wants: results first, questions later, no preamble.",
    characterId: "alex-tran",
    dialogue:
      "This deck has thirty slides. The board has forty-five minutes. I am not spending ten of them on 'setting context'. They know the context. Slide one should be the headline number. If it is good, we celebrate. If it is bad, we explain. Either way, we start with the truth.",
    chooseDialogue:
      "I have been told to ease the board in with a market overview before showing the numbers. That is a stalling tactic. If the numbers are strong, lead with them. If they are weak, lead with them anyway and show what you are doing about it. Hiding behind context slides is dishonest.",
    rewriteDialogue:
      "Rewrite my opening. I want the first thing out of my mouth to be the quarter's revenue figure. Then gross margin. Then the one thing I need the board to approve today. Thirty seconds, no more. Write it so it hits hard.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "meeting",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Alex wants to open a board presentation with the headline number, refuses to add context-setting slides, and calls narrative preamble a stalling tactic. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex prioritises impact and speed over narrative structure. She wants the board to confront the data immediately and sees context-setting as unnecessary delay. This is advanced direct communication in a high-stakes setting.",
          observation:
            "The phrase 'start with the truth' reveals Alex's core belief: directness equals honesty. For direct communicators, softening a message feels like dishonesty.",
          coachingTip:
            "When someone frames directness as a moral position rather than just a preference, they are deeply direct in their communication style. Respect that conviction.",
          styleContext:
            "Direct communicators at senior levels see preamble as a sign of low confidence. They believe strong leaders present data without apology.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Alex does value data, which can look analytical. But notice she does not want to analyse the data in the presentation - she wants to declare it. The data serves as a headline, not as a discussion point.",
          observation:
            "An analytical communicator would build from data to conclusion. Alex wants to state the conclusion and only drill into data if questioned.",
          coachingTip:
            "Direct communicators present data as verdicts. Analytical communicators present data as evidence to be weighed. Alex is delivering a verdict.",
          styleContext:
            "In board settings, direct communicators use numbers as assertions of performance, not as invitations to explore methodology.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex has not discussed how the team feels about the results, the emotional journey of the quarter, or how to bring the board along gently. Her approach is confrontational by design.",
          observation:
            "There is no attempt to build rapport, tell a story, or cushion the numbers with qualitative context. Alex treats the board as adults who want facts, not feelings.",
          coachingTip:
            "Ask yourself: does this person want the audience to feel something, or know something? Alex wants them to know the number and act on it.",
          styleContext:
            "Direct communicators in senior roles believe that over-contextualising results is patronising to the audience. They trust the board to handle raw data.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex has rejected advice to ease the board in with a market overview and wants to open with the headline number. A colleague is pushing back. How do you support Alex?",
      options: [
        {
          id: "s195-opt-a",
          text: "I agree. Lead with the number. If the board wants context, they will ask. Put the market overview in the appendix so it is there if needed, but do not let it slow the opening.",
          score: 10,
          result: "strong",
          explanation:
            "You have backed Alex's instinct, offered a practical compromise for the context material, and kept the focus on speed. This shows you understand how direct communicators present.",
        },
        {
          id: "s195-opt-b",
          text: "What if we add one slide before the number - just the three key market shifts - so the board has a frame for interpreting the result? It would take sixty seconds.",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable suggestion, but Alex has already called context-setting a stalling tactic. Adding even one slide may feel like you are not fully backing her approach.",
        },
        {
          id: "s195-opt-c",
          text: "The board might not react well to being hit with a number cold. I think we should build up to it with a story about the quarter's challenges so they appreciate the result in context.",
          score: 0,
          result: "weak",
          explanation:
            "This is exactly what Alex has rejected. Suggesting a narrative build-up after she has called it dishonest will feel like you are not listening to her or do not trust her judgement.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex wants you to rewrite her opening speaking notes for the board. Revenue first, then gross margin, then the one approval she needs. Thirty seconds maximum. Write it in a direct style that hits hard.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Q3 revenue: 4.2 million. That is 11% above target.\n\nGross margin: 38%, up from 34% last quarter. Operational improvements drove the gain, not pricing.\n\nOne ask today: approve the 200k expansion budget for the Northern region. The pipeline supports it and the team is ready to move.\n\nI will take questions after the full review. Let us get into the detail.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your opening is punchy, specific, and wastes no time. Alex could deliver this in thirty seconds and the board would know exactly where they stand and what she needs from them.",
          observation:
            "You led with impact and closed with a clear ask. This is how direct communicators earn board confidence - through clarity and brevity.",
          coachingTip:
            "When writing speaking notes for direct communicators, count the seconds. If the opening takes longer than thirty seconds to read aloud, cut until it does not.",
          styleContext:
            "Direct communicators believe the first thirty seconds of a board presentation determine whether the audience trusts the presenter. Start strong or lose them.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close, but check whether your opening includes any unnecessary context, qualifiers, or warm-up language. Alex wants raw numbers and a clear ask, nothing else.",
          observation:
            "If your opening includes phrases like 'I am pleased to share' or 'as you will recall from last quarter', it has preamble that Alex would cut.",
          coachingTip:
            "Read it aloud and time it. If it runs over thirty seconds, identify which words are not numbers or actions, and delete them.",
          styleContext:
            "Direct communicators edit speaking notes by deletion. Every word that is not a number, a fact, or a request is a candidate for removal.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your opening either buries the numbers in narrative, includes unnecessary context-setting, or fails to state the approval request clearly.",
          observation:
            "If your opening thanks the board for their time, references the market landscape, or builds up to the number gradually, it is not what Alex asked for.",
          coachingTip:
            "Write the number first. Then write what it means. Then write what you need. Stop. That is the entire opening.",
          styleContext:
            "Direct communicators at board level see verbose openings as a sign of poor preparation. If you cannot state the result in one sentence, you do not understand it well enough.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (196-198)
  // ============================================

  // Scenario 196 - Priya Sharma, feedback, foundation
  {
    id: "scenario-196",
    title: "The First Presentation Debrief",
    context:
      "A junior team member has just delivered their first client presentation. It went reasonably well but had some rough edges. Priya is leading the debrief and wants to make it a positive learning experience.",
    chooseContext:
      "Priya has praised the junior's energy and preparation, and is now gently raising the fact that they spoke too quickly and skipped a key slide. The junior looks deflated.",
    rewriteContext:
      "Priya has asked you to write a follow-up message to the junior, summarising the debrief and leaving them feeling encouraged and clear on what to work on next.",
    characterId: "priya-sharma",
    dialogue:
      "First of all, I remember my first client presentation. I was terrified. You stood up there, made eye contact, and owned the room. That takes real courage. Now, there are a couple of things we can work on together, and honestly, they are the easy bits compared to what you already nailed.",
    chooseDialogue:
      "I noticed you sped up when you got to the pricing section. I think it is because you were nervous about their reaction. Here is the thing - that section is your strongest material. Next time, slow down and let the numbers do the talking. You have earned the right to be confident there.",
    rewriteDialogue:
      "Write them something warm but useful. I want them to read it and feel proud of what they did, clear on what to improve, and excited about doing it again. Make it sound like it is coming from someone who genuinely cares about their growth.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "feedback",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Priya has opened a feedback debrief by sharing her own experience, celebrating the junior's courage, and framing improvements as easy compared to what they already achieved. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya leads with personal storytelling, celebrates the emotional achievement, and frames the feedback as a shared growth journey. This is expressive communication that inspires confidence.",
          observation:
            "Notice how Priya shares her own vulnerability first. Expressive communicators build trust by modelling openness, making it safe for others to receive feedback.",
          coachingTip:
            "When a feedback-giver opens with a personal story and frames improvements as exciting rather than concerning, they are communicating expressively. Mirror that energy.",
          styleContext:
            "Expressive communicators turn feedback into storytelling moments. They want the recipient to remember how the conversation felt, not just what was said.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya is warm and caring, which can look supportive. But notice she centres her own experience and uses storytelling rather than focusing primarily on the other person's wellbeing.",
          observation:
            "A supportive communicator would ask 'how are you feeling about it?' before sharing their own perspective. Priya leads with her own narrative.",
          coachingTip:
            "Expressive communicators share their own experiences as a way of connecting. Supportive communicators ask about yours. Notice who speaks first about feelings.",
          styleContext:
            "Expressive feedback is performance-like: animated, personal, and designed to uplift. Supportive feedback is quieter and more focused on the recipient's emotional state.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not presented a structured evaluation, a scoring rubric, or a data-driven assessment. The entire debrief is built around emotion, encouragement, and personal connection.",
          observation:
            "There are no ratings, no comparison to benchmarks, and no systematic analysis. Priya is coaching through inspiration, not measurement.",
          coachingTip:
            "Ask yourself: is this person evaluating performance or celebrating effort? Priya is firmly in celebration mode, with improvements framed as exciting next steps.",
          styleContext:
            "Expressive communicators believe that how someone feels after a feedback conversation determines whether they actually improve. Positive emotion drives growth.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya has gently pointed out that the junior sped through the pricing section and they now look deflated. How do you support the conversation?",
      options: [
        {
          id: "s196-opt-a",
          text: "Priya is right. That pricing section is where your preparation really showed. Trust those numbers, slow down, and it becomes the strongest part of your whole presentation.",
          score: 10,
          result: "strong",
          explanation:
            "You have matched Priya's approach by reframing the improvement area as a strength waiting to emerge. The language is warm, forward-looking, and energising.",
        },
        {
          id: "s196-opt-b",
          text: "A good tip is to practise the pricing section at half speed three times before the next presentation. Rehearsal removes the nerves and lets the content speak for itself.",
          score: 5,
          result: "partial",
          explanation:
            "Practical and helpful, but it misses the emotional moment. The junior is deflated and needs encouragement before technique. The advice is sound but the timing is off.",
        },
        {
          id: "s196-opt-c",
          text: "To be fair, the pricing section is always the hardest part. Most people struggle with it in their first few presentations. It is completely normal.",
          score: 0,
          result: "weak",
          explanation:
            "This normalises the issue but does not uplift. Telling someone their struggle is common does not make them feel special or motivated. An expressive communicator wants to inspire, not reassure through generality.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya wants you to write a follow-up message to the junior that is warm, encouraging, and clear on what to improve. It should leave them feeling proud and excited to present again. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Hi Jamie,\n\nI just wanted to say well done. Seriously. Your first client presentation is a milestone, and you handled it with more composure than most people manage after a dozen. The way you opened with that industry insight had the whole room paying attention.\n\nTwo things to work on for next time, and they are both quick wins. First, slow down through the pricing section - your numbers are solid, so give them room to land. Second, pause after your key points and let the client react. You will be amazed at how much more confident you feel when you give yourself that space.\n\nI am genuinely excited to see your next one. You have got something special, and it is only going to get sharper.\n\nPriya",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message sounds genuinely warm, celebrates the achievement, and wraps the improvements in encouragement. The junior would read this and feel motivated to improve.",
          observation:
            "You balanced pride with practical next steps, which is exactly what expressive feedback looks like. The closing line is forward-looking and personal.",
          coachingTip:
            "When writing feedback for expressive communicators, end on a high. The last sentence should leave the reader feeling excited about their future, not anxious about their gaps.",
          styleContext:
            "Expressive communicators measure the success of written feedback by the emotional response it produces. If the reader smiles, the message worked.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good content, but check whether the tone feels personal enough. If the improvements are listed without warmth around them, it reads more like an evaluation than an encouraging message.",
          observation:
            "If your message uses phrases like 'areas for development' or 'key takeaways', it has slipped into formal territory that does not match Priya's voice.",
          coachingTip:
            "Read it aloud in Priya's voice. Does it sound like something she would actually say? If it feels like a form template, add more personality.",
          styleContext:
            "Expressive communicators want feedback messages to feel handwritten, not generated. The personal touches are what make the content land.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too clinical, too brief, or leads with what went wrong rather than what went right. Priya wanted the junior to feel proud first and coached second.",
          observation:
            "If your message opens with the improvement areas or uses bullet-pointed feedback without warmth, it has missed Priya's brief entirely.",
          coachingTip:
            "Restructure: celebration first, improvements second, encouragement last. The sandwich is a cliche, but expressive communicators genuinely believe in it.",
          styleContext:
            "Expressive communicators see cold feedback as a failure of relationship, not just communication. The warmth is not decoration - it is the foundation.",
        },
      },
    },
  },

  // Scenario 197 - Marcus Webb, feedback, intermediate
  {
    id: "scenario-197",
    title: "The Creative Pitch Review",
    context:
      "Your team has prepared a creative pitch for a major client campaign. Marcus has been reviewing the work and wants to give feedback that pushes the team to be bolder without crushing their confidence.",
    chooseContext:
      "Marcus has praised the strategic thinking but is now challenging the creative execution, saying it feels safe and predictable. One designer is taking the feedback personally.",
    rewriteContext:
      "Marcus has asked you to write a feedback summary for the creative team that captures his vision for the revised pitch - bolder, more distinctive, and true to the client's brand voice.",
    characterId: "marcus-webb",
    dialogue:
      "The strategy is bulletproof. You have nailed the insight. But the creative execution does not match the ambition of the thinking. It looks like every other pitch in this category. I want the client to see this and think, 'nobody else would have done this'. Right now, it feels safe. Safe does not win pitches.",
    chooseDialogue:
      "I can see the effort, and the foundations are brilliant. But I need you to take a risk with the visual identity. Imagine the client CEO showing this to her board. Does she feel proud or embarrassed? Right now it is neither - it is forgettable. Let us make it unforgettable.",
    rewriteDialogue:
      "Write the feedback so the team feels challenged, not defeated. I want them to read it and think, 'he is right, we can go further'. Not, 'he hated it'. There is a difference, and the tone has to carry it.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "feedback",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Marcus has praised the strategic thinking but challenged the creative execution for being too safe, using vivid language about making the pitch unforgettable. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus uses vivid imagery, emotional framing, and inspirational language to push the team further. He wants them to feel the gap between good and great, not just understand it logically.",
          observation:
            "Notice the phrase 'safe does not win pitches'. Marcus frames feedback as a call to ambition, not a correction of errors. This is expressive leadership through inspiration.",
          coachingTip:
            "When someone gives feedback through storytelling and emotional scenarios rather than specific corrections, they are communicating expressively. Respond with your own creative energy.",
          styleContext:
            "Expressive communicators believe that bold feedback, delivered with care, is a gift. They see playing safe as a greater risk than pushing too far.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus is encouraging, which can look supportive. But notice he is pushing for boldness and ambition, not for comfort and safety. His warmth serves a challenge, not reassurance.",
          observation:
            "A supportive communicator would check whether the team is comfortable with the feedback before pushing further. Marcus uses warmth as a runway to higher expectations.",
          coachingTip:
            "Expressive feedback challenges upward. Supportive feedback cushions downward. Marcus is lifting the bar, not softening the landing.",
          styleContext:
            "Expressive communicators use encouragement strategically: they make you feel capable so you will accept a bigger challenge.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus has not provided a detailed critique, a list of specific revisions, or a structured evaluation framework. His feedback is impressionistic and emotional, designed to inspire rather than instruct.",
          observation:
            "There are no mockup annotations, no design specifications, and no benchmarking against competitor work. Marcus is painting a vision, not marking a paper.",
          coachingTip:
            "Ask yourself: is this person telling the team what to fix, or inspiring them to reimagine? Marcus is entirely in the reimagining space.",
          styleContext:
            "Expressive communicators trust creative teams to find the specific solutions once they have been inspired to aim higher. The vision is the feedback.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus has said the creative work feels safe and forgettable. One designer is taking it personally. How do you bridge the gap?",
      options: [
        {
          id: "s197-opt-a",
          text: "Marcus is saying the thinking deserves braver execution. He is not saying start again - he is saying go further with what you have built. The hard part is done.",
          score: 10,
          result: "strong",
          explanation:
            "You have reframed Marcus's challenge as a vote of confidence in the team's foundation work, which is exactly how an expressive communicator intends their feedback to land.",
        },
        {
          id: "s197-opt-b",
          text: "Let us be specific about what 'bolder' means. Could we pick two slides and create alternative versions that push the visual identity further? That gives us something concrete to compare.",
          score: 5,
          result: "partial",
          explanation:
            "Practical and productive, but it skips the emotional repair the designer needs. Before moving to tactics, acknowledge that the feedback stings and reframe it positively.",
        },
        {
          id: "s197-opt-c",
          text: "Marcus, I think we need to be careful here. The team has worked hard on this, and calling it forgettable is quite harsh. Maybe we could phrase it more constructively.",
          score: 0,
          result: "weak",
          explanation:
            "Challenging Marcus's delivery in front of the team undermines his leadership and misreads his intention. He is being provocative to inspire, not to hurt. Correcting his tone will shut down the creative energy he is trying to generate.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus wants you to write a feedback summary that challenges the team to go bolder while making them feel excited rather than defeated. Write it in an expressive style that inspires creative ambition.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Team,\n\nThe strategic foundation of this pitch is outstanding. The client insight is sharp, the positioning is clear, and the narrative arc works. You should feel proud of that - it is the hardest part to get right.\n\nNow here is the challenge: the creative execution needs to match the ambition of the thinking. Right now, the visual identity feels like it could belong to any brand in this category. We need it to be unmistakably this client. The kind of work their CEO would screenshot and send to her board.\n\nThink about what makes this brand different from every competitor and let that guide the next round. Take risks. Push the colour palette harder. Play with layout conventions. The safety net is the strategy - it is solid. So be brave with the execution.\n\nI cannot wait to see what you come back with. This pitch has something special in it, and I want the creative to match that feeling.\n\nMarcus",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary balances challenge with celebration and ends on a forward-looking note that makes the revision feel exciting rather than punitive. Marcus would send this without changes.",
          observation:
            "You used the strategy as a safety net for creative risk-taking, which is exactly how expressive leaders enable boldness without recklessness.",
          coachingTip:
            "When writing for expressive communicators, make the reader feel that going further is an opportunity, not a burden. The tone should accelerate, not weigh down.",
          styleContext:
            "Expressive communicators want feedback documents that the team would pin to their wall, not file in a folder. If it inspires, it works.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether your summary feels inspiring enough. If it reads more like a revision brief than a rallying cry, it needs more personality and energy.",
          observation:
            "If your feedback uses phrases like 'areas for improvement' or 'please revise the following', it has slipped into formal territory that does not match Marcus's voice.",
          coachingTip:
            "Add a line that makes the team feel chosen for something special. Expressive communicators make people feel like protagonists in a story, not workers on a task list.",
          styleContext:
            "Expressive feedback summaries should make the reader want to start working immediately, not schedule a meeting to discuss the notes.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary is either too clinical, too focused on what went wrong, or too light on encouragement. Marcus wanted the team to feel challenged and excited, not corrected.",
          observation:
            "If your summary opens with what needs to change rather than what already works, it has inverted the emotional structure Marcus relies on.",
          coachingTip:
            "Rebuild the structure: celebrate the foundation, issue the challenge, express excitement about what comes next. The ratio should be roughly 40% praise, 30% challenge, 30% forward energy.",
          styleContext:
            "Expressive communicators know that teams who feel beaten down produce cautious work. The feedback must energise, or it defeats its own purpose.",
        },
      },
    },
  },

  // Scenario 198 - Nina Okafor, feedback, advanced
  {
    id: "scenario-198",
    title: "The Cross-Cultural Feedback Challenge",
    context:
      "You are working with a team that includes colleagues from different cultural backgrounds. Nina has noticed that feedback sessions tend to favour Western communication norms and wants to make them more inclusive.",
    chooseContext:
      "Nina has proposed changes to the feedback process, but a senior manager is resistant, arguing that direct feedback is simply more efficient. Nina wants to find a way forward that honours different communication preferences.",
    rewriteContext:
      "Nina has asked you to draft a set of updated feedback guidelines that balance clarity with cultural sensitivity, making the process feel safe for everyone regardless of their communication background.",
    characterId: "nina-okafor",
    dialogue:
      "I have been thinking about how we give feedback, and I think we are accidentally excluding people. When we say 'just be direct', we are assuming everyone processes feedback the same way. Some cultures prioritise face-saving. Others use storytelling. If we only reward one style of receiving feedback, we are going to lose the perspectives of people who communicate differently.",
    chooseDialogue:
      "I am not saying direct feedback is wrong. I am saying it should not be the only acceptable format. What if we offered options - written feedback, peer-to-peer, small group? Let people choose the environment where they can hear and respond most honestly. That is not lowering the bar. It is widening the door.",
    rewriteDialogue:
      "Write guidelines that feel welcoming without being vague. I want someone from any background to read them and think, 'this team understands that there are many ways to communicate well'. But they also need to be practical - managers need to know what to actually do differently.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "feedback",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Nina has raised concerns about feedback processes excluding different cultural communication styles and used metaphors like 'widening the door'. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina uses inclusive, values-driven language and vivid metaphors to advocate for change. She frames the issue around identity, belonging, and diverse perspectives - hallmarks of expressive communication with a social purpose.",
          observation:
            "The phrase 'widening the door' is a deliberate metaphor that reframes accommodation as expansion, not compromise. Expressive communicators choose language that shifts how people perceive an issue.",
          coachingTip:
            "When someone frames a process improvement as a values issue and uses metaphorical language to make their case, they are communicating expressively. Engage with the vision, not just the logistics.",
          styleContext:
            "Expressive communicators often champion inclusivity because they value the richness of diverse perspectives. They see uniformity as a loss, not an efficiency.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina does care about people's feelings, which can look supportive. But she is advocating for systemic change through persuasion, not simply comforting individuals. Her focus is transformational, not protective.",
          observation:
            "A supportive communicator would quietly check in with affected individuals. Nina is publicly challenging the system and proposing a new vision for how feedback works.",
          coachingTip:
            "Expressive communicators advocate loudly for change they believe in. Supportive communicators advocate quietly for the people affected. Nina is working at the system level.",
          styleContext:
            "Expressive communicators channel empathy into advocacy. They do not just feel for the excluded - they build a case for inclusion that inspires collective action.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has not presented research data, comparison studies, or a cost-benefit analysis of different feedback methods. Her argument is built on values and human experience, not metrics.",
          observation:
            "There are no statistics, no benchmarking, and no structured framework. Nina is making a moral and emotional argument for change.",
          coachingTip:
            "Ask yourself: is this person presenting evidence or painting a picture? Nina is creating a vivid image of a more inclusive workplace, not building a data case.",
          styleContext:
            "Expressive communicators believe that the right story can change minds faster than the right spreadsheet. They lead with meaning, not measurement.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina has proposed offering multiple feedback formats to accommodate different communication preferences. A senior manager argues that direct feedback is simply more efficient. How do you respond?",
      options: [
        {
          id: "s198-opt-a",
          text: "If someone cannot hear feedback in its current format, we are not being efficient - we are talking to ourselves. Nina's approach means the feedback actually lands.",
          score: 10,
          result: "strong",
          explanation:
            "You have reframed the efficiency argument on Nina's terms, showing that true efficiency means feedback that produces change, not feedback that is quick to deliver. This matches her expressive logic.",
        },
        {
          id: "s198-opt-b",
          text: "Could we pilot it with one team? If we see that different formats lead to better outcomes, we have evidence to expand it. If not, we have lost nothing.",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable compromise, but it treats Nina's values-based argument as a hypothesis to be tested. She may feel that the moral case for inclusion should not need a pilot to prove its worth.",
        },
        {
          id: "s198-opt-c",
          text: "I think offering too many options could be confusing. A single, clear process is easier for managers to follow and ensures consistency across the organisation.",
          score: 0,
          result: "weak",
          explanation:
            "This prioritises administrative simplicity over human experience, which is exactly the mindset Nina is challenging. It dismisses her argument without engaging with the underlying values.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina wants you to draft updated feedback guidelines that balance clarity with cultural sensitivity. They should feel welcoming and practical. Write them in an expressive style that honours diverse communication preferences.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Feedback at [Company]: A Guide for Everyone\n\nGreat feedback changes people's work and their experience of work. This guide is designed to make sure our feedback process works for everyone, regardless of how they communicate best.\n\nPrinciples:\n- Feedback should be clear, kind, and useful. All three matter equally.\n- People receive feedback differently. Offer the format that helps them hear it - written, verbal, one-to-one, or small group.\n- Ask before you deliver: 'What format works best for you?' is the most respectful question a manager can ask.\n\nFor managers:\n- Before a feedback conversation, ask the recipient how they prefer to receive it.\n- Offer at least two options: a face-to-face conversation or a written summary they can reflect on first.\n- Follow up to check whether the feedback landed and whether they need anything else.\n\nThe goal is not to make feedback softer. It is to make it reachable. When people feel safe receiving feedback, they act on it. That is the outcome we are all here for.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your guidelines are warm, inclusive, and practical without sacrificing clarity. They honour Nina's vision of a feedback process that works for everyone, not just those who match the dominant communication style.",
          observation:
            "You framed the guidelines as enabling better outcomes, not lowering standards. This is key to winning support from people who value efficiency.",
          coachingTip:
            "When writing inclusive guidelines for expressive communicators, lead with the purpose, not the rules. The 'why' makes the 'what' feel meaningful.",
          styleContext:
            "Expressive communicators want organisational documents to sound human. If a policy reads like a legal document, it has failed before anyone follows it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the tone feels genuinely welcoming. If the guidelines read like a policy update rather than an invitation, they need more warmth.",
          observation:
            "If your guidelines use phrases like 'employees must' or 'in accordance with company policy', they have lost the human tone Nina is looking for.",
          coachingTip:
            "Replace mandatory language with invitational language. 'Managers must offer options' becomes 'the most respectful thing a manager can do is ask how someone prefers to receive feedback'.",
          styleContext:
            "Expressive communicators believe that how a guideline is written determines whether people follow it voluntarily. Bureaucratic language invites compliance, not commitment.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your guidelines are either too rigid, too clinical, or do not address the cultural sensitivity that was central to Nina's brief. If they read like a standard HR policy, they have missed the point.",
          observation:
            "If your guidelines do not mention different communication preferences, cultural backgrounds, or the importance of asking how someone wants to receive feedback, they are incomplete.",
          coachingTip:
            "Return to Nina's core message: people communicate differently, and our process should accommodate that. Build every guideline around that principle.",
          styleContext:
            "Expressive communicators see guidelines as a reflection of organisational values. Generic, impersonal policies signal that the organisation does not truly care about the issue.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (199-201)
  // ============================================

  // Scenario 199 - Tom Brennan, sales, foundation
  {
    id: "scenario-199",
    title: "The Reluctant Prospect",
    context:
      "You are on a sales call with a prospect who has been burned by a previous vendor. Tom is coaching you on how to rebuild trust and take the pressure off the conversation.",
    chooseContext:
      "The prospect has admitted they are nervous about committing again. Tom is guiding you to acknowledge that fear rather than pushing through it with a hard sell.",
    rewriteContext:
      "Tom has asked you to write a follow-up email to the prospect that reassures them, answers their concerns, and makes clear there is no pressure to decide quickly.",
    characterId: "tom-brennan",
    dialogue:
      "I can hear that the last experience has left a mark. That makes complete sense. You trusted a partner and it did not work out, and now you are being asked to trust again. I would feel exactly the same way. Let us not rush this. Tell me what would need to be true for you to feel comfortable taking a next step.",
    chooseDialogue:
      "She is not going to sign anything today, and that is fine. What she needs is to feel heard. If we push the close now, we will lose her for good. Let her set the pace. Our job right now is to make her feel safe, not to make her feel sold to.",
    rewriteDialogue:
      "Write the email as if you are talking to someone who is bruised. Do not sell. Do not push. Just answer their questions, acknowledge their hesitation, and make it clear they are in control of the timeline. If it feels like a sales email, start again.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "sales",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Tom has acknowledged the prospect's past disappointment, validated their nervousness, and offered to let them set the pace of the conversation. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom centres the prospect's emotional experience, validates their caution, and explicitly removes time pressure. This is supportive communication that prioritises the relationship over the transaction.",
          observation:
            "The phrase 'I would feel exactly the same way' is a hallmark of supportive communication. It normalises the other person's feelings without minimising them.",
          coachingTip:
            "When someone explicitly slows a conversation down, validates hesitation, and gives control to the other person, they are communicating supportively. Follow their lead.",
          styleContext:
            "Supportive communicators in sales see trust-building as the primary objective. They believe that a prospect who feels safe will eventually buy; one who feels pressured will not.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom does show warmth and emotion, which can look expressive. But notice his focus is entirely on the other person's comfort, not on sharing his own experience or generating enthusiasm.",
          observation:
            "An expressive communicator might share a story about a time they were let down to build connection. Tom stays focused on the prospect's experience and hands them control.",
          coachingTip:
            "Supportive communicators make the other person the centre of the conversation. Expressive communicators make the relationship the centre. Notice where the spotlight falls.",
          styleContext:
            "Supportive sales communication is quiet and client-led. Expressive sales communication is warm and seller-led. Tom is clearly letting the client lead.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not presented product features, competitive comparisons, or a structured business case. His entire approach is built around emotional safety, not logical persuasion.",
          observation:
            "There are no slides, no data points, and no urgency tactics. Tom is building a relationship, not delivering a pitch.",
          coachingTip:
            "Ask yourself: is this person trying to convince or to comfort? Tom is entirely in the comfort space, trusting that the sale will follow when the prospect feels ready.",
          styleContext:
            "Supportive communicators in sales play the long game. They invest in trust knowing that it pays back in loyalty and referrals, not just this quarter's number.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The prospect has admitted she is nervous about committing again. Tom says not to push the close. How do you respond to the prospect?",
      options: [
        {
          id: "s199-opt-a",
          text: "That makes complete sense. There is no timeline on our side. Take whatever time you need, and if it helps, I can share references from clients who had similar concerns.",
          score: 10,
          result: "strong",
          explanation:
            "You have validated the prospect's hesitation, removed pressure, and offered social proof without forcing it. This matches Tom's supportive approach perfectly.",
        },
        {
          id: "s199-opt-b",
          text: "I understand the hesitation. Let me walk you through our onboarding process so you can see how we have built in safeguards based on exactly the kind of experience you described.",
          score: 5,
          result: "partial",
          explanation:
            "Well-intentioned, but moving straight to process and safeguards before fully sitting with the prospect's feelings may feel premature. Acknowledge longer before solving.",
        },
        {
          id: "s199-opt-c",
          text: "We are nothing like your previous vendor. Our retention rate is 94% and we have been in business for twelve years. I am confident that once you see the platform, those concerns will disappear.",
          score: 0,
          result: "weak",
          explanation:
            "Dismissing the prospect's feelings with confidence claims and statistics will feel tone-deaf. She does not need to be convinced she is wrong to feel cautious; she needs to feel heard.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom wants you to write a follow-up email that reassures the prospect without selling. It should acknowledge their hesitation, answer their questions, and make clear they are in control of the timeline. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi Sarah,\n\nThank you for being so open on today's call. I know it is not easy to revisit a decision like this after a difficult experience, and I genuinely respect the care you are taking with it.\n\nTo answer the questions you raised:\n- Implementation timeline: We typically work in four-week sprints, but we can adjust to whatever pace feels right for you.\n- Contract terms: We offer a rolling quarterly commitment. No long lock-in.\n- Support: You would have a named account manager from day one, and we do monthly check-ins for the first six months.\n\nThere is no deadline on our side. Whenever you feel ready to take the next step - whether that is another call, a demo, or just more questions by email - I am here.\n\nWarm regards,\nTom",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email feels genuinely caring, answers the practical questions without pressure, and hands control of the timeline to the prospect. It reads like a message from someone who cares about the relationship, not just the deal.",
          observation:
            "You avoided any urgency language, discount offers, or competitive positioning. The entire email is built around the prospect's comfort and readiness.",
          coachingTip:
            "When writing for supportive communicators, test every sentence by asking: does this make the reader feel in control? If any sentence creates urgency or obligation, remove it.",
          styleContext:
            "Supportive communicators write sales follow-ups that could be mistaken for messages from a trusted adviser. That is the goal.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good content, but check whether any sentences create subtle pressure. Phrases like 'I would love to get this moving' or 'our next available slot is...' can undermine the no-pressure tone.",
          observation:
            "If your email includes any mention of limited availability, special pricing, or upcoming deadlines, it has introduced pressure that Tom explicitly wanted to avoid.",
          coachingTip:
            "Remove any sentence that could be interpreted as a reason to act quickly. The entire message should communicate patience and availability.",
          styleContext:
            "Supportive communicators build trust through patience. Even one line of subtle urgency can undo the safety they have carefully established.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email either reads like a standard sales follow-up, pushes for a next step, or does not adequately acknowledge the prospect's hesitation. Tom wanted this to feel like a conversation with a friend, not a sales process.",
          observation:
            "If your email opens with a product benefit or closes with a call to action, it has missed the brief. The prospect needs to feel cared for, not targeted.",
          coachingTip:
            "Rewrite the email imagining you are writing to a friend who has been hurt. What would you say? Lead with empathy, follow with answers, close with patience.",
          styleContext:
            "Supportive communicators judge follow-up emails by whether the recipient feels relieved or pressured after reading them. Aim for relief.",
        },
      },
    },
  },

  // Scenario 200 - Leah Morgan, sales, intermediate
  {
    id: "scenario-200",
    title: "The Long-Term Client Renewal",
    context:
      "A long-standing client is up for contract renewal, but they have been exploring alternatives. Leah is leading the renewal conversation and wants to focus on the relationship rather than competing on price.",
    chooseContext:
      "The client has mentioned that a competitor is offering a lower price. Leah wants to reframe the conversation around trust, continuity, and the partnership's history rather than entering a price war.",
    rewriteContext:
      "Leah has asked you to write a renewal proposal that leads with the relationship story rather than the product features, making the client feel valued rather than processed.",
    characterId: "leah-morgan",
    dialogue:
      "We have been working together for three years. You know our team by name. We know your business inside out. I am not going to pretend a competitor cannot offer a lower price - they probably can. What I want to talk about is what you would lose if you switched, because switching is not just a vendor change. It is starting from zero with people who do not know you yet.",
    chooseDialogue:
      "I understand the appeal of a lower price. But think about what happened last April when your system went down at midnight. We had someone on the phone within fifteen minutes because we know your setup. A new vendor would not have that context for at least a year. I want you to feel confident in this decision, not just comfortable with the number.",
    rewriteDialogue:
      "Write a proposal that reminds them why they chose us in the first place. I do not want it to read like a pitch. I want it to read like a letter from a partner who knows them well. The price can be on page two. Page one should be about the journey we have been on together.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "sales",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Leah has framed the renewal conversation around the three-year relationship, the personal knowledge her team holds, and the cost of starting over with someone new. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah builds her case around trust, continuity, and emotional security rather than features or pricing. She wants the client to feel the value of the relationship, not just calculate it.",
          observation:
            "The phrase 'starting from zero with people who do not know you yet' appeals to the emotional cost of change, not the financial cost. Supportive communicators make relationships feel irreplaceable.",
          coachingTip:
            "When someone deflects a price conversation towards trust and history, they are using supportive communication to reframe the decision criteria. The relationship is their product.",
          styleContext:
            "Supportive communicators in renewal conversations want the client to feel that leaving would mean losing a partner, not just cancelling a contract.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah does tell a story about the midnight support call, which can look expressive. But the purpose is to make the client feel secure, not inspired. The story serves reassurance, not excitement.",
          observation:
            "An expressive communicator would use the story to generate excitement about future possibilities. Leah uses it to remind the client of the safety they already have.",
          coachingTip:
            "Supportive communicators tell stories to comfort. Expressive communicators tell stories to inspire. Listen for whether the story looks backward (safety) or forward (ambition).",
          styleContext:
            "Supportive sales communication is retrospective: remember what we have built together. Expressive sales communication is prospective: imagine what we could build next.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has not presented a competitive analysis, feature-by-feature comparison, or pricing matrix. Her entire approach is relational, not transactional.",
          observation:
            "There are no spreadsheets, no benchmark data, and no discount structures. Leah is selling the feeling of being known and cared for.",
          coachingTip:
            "Ask yourself: is this person competing on value or on relationship? Leah is entirely in the relationship space, trusting that emotional loyalty will outweigh a price difference.",
          styleContext:
            "Supportive communicators believe that clients stay because they feel cared for, not because the price is right. They compete on trust, not terms.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The client has mentioned a competitor's lower price. Leah wants to reframe the conversation around relationship value. How do you support her approach?",
      options: [
        {
          id: "s200-opt-a",
          text: "You are right to think about cost. What we would ask is this: think about the moments where having a partner who truly knew your business made a difference. That knowledge is not something a new vendor can replicate on day one.",
          score: 10,
          result: "strong",
          explanation:
            "You have validated the client's concern, then redirected to the emotional and practical value of the existing relationship. This matches Leah's supportive approach without dismissing the price issue.",
        },
        {
          id: "s200-opt-b",
          text: "We can look at the pricing structure and see if there is flexibility. Would it help if I put together a comparison showing total cost of ownership including transition costs?",
          score: 5,
          result: "partial",
          explanation:
            "Practical, but it accepts the competitor's framing by engaging on price. Leah wants to change the conversation, not compete within it.",
        },
        {
          id: "s200-opt-c",
          text: "A lower upfront price often means hidden costs down the line. Most of our competitors cut corners on support and account management. You would be taking a real risk by switching.",
          score: 0,
          result: "weak",
          explanation:
            "This is aggressive and fear-based, which contradicts Leah's supportive approach entirely. Criticising competitors and creating anxiety is the opposite of making the client feel safe.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah wants you to write a renewal proposal that leads with the relationship story, not product features. It should make the client feel valued and remind them why they chose you. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Dear Claire,\n\nThree years ago, you took a chance on a partnership, and we have worked hard every day since to make sure that decision felt right. From the midnight support calls to the quarterly strategy sessions, we have learned your business from the inside out.\n\nThis renewal is not about a contract. It is about whether we have earned your trust for another year. We believe we have, and here is what the next twelve months look like if we continue together:\n\n- A dedicated account team who already know your systems, your people, and your priorities.\n- Continued quarterly reviews to make sure we are adapting as your needs evolve.\n- Priority access to our new analytics platform, with onboarding tailored to your team.\n\nThe pricing details are on page two, and we are happy to discuss them whenever you are ready. But we wanted to start here, with the partnership, because that is what matters most to us.\n\nWith appreciation,\nLeah and the team",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your proposal leads with relationship, expresses gratitude, and positions the renewal as a continuation of trust rather than a transaction. The pricing is present but secondary. Leah would be proud of this.",
          observation:
            "You framed the next twelve months around the client's needs, not your product roadmap. This is supportive selling at its best: everything is about them.",
          coachingTip:
            "When writing proposals for supportive communicators, start with the relationship and end with the logistics. The order signals what you value most.",
          styleContext:
            "Supportive communicators believe that a proposal which leads with price signals that the relationship is transactional. Leading with the partnership signals that it is personal.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the proposal truly feels personal. If it could be sent to any client with minor edits, it needs more specific references to this particular relationship.",
          observation:
            "If your proposal does not mention specific shared experiences, named team members, or moments from the partnership, it feels generic rather than personal.",
          coachingTip:
            "Add one concrete memory from the partnership. A specific example of going above and beyond turns a good proposal into a meaningful one.",
          styleContext:
            "Supportive communicators personalise proposals because they believe every client relationship is unique. Templates feel impersonal to them.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your proposal either leads with product features, focuses too heavily on pricing, or reads like a standard commercial document. Leah wanted this to feel like a letter from a partner, not a vendor.",
          observation:
            "If your opening paragraph mentions contract terms, discount structures, or competitive positioning, it has missed the emotional foundation Leah was looking for.",
          coachingTip:
            "Remove every sentence that could appear in a competitor's proposal. What remains should be personal, specific, and relationship-centred.",
          styleContext:
            "Supportive communicators distinguish themselves by making the client feel known. If the proposal does not demonstrate deep familiarity with the client's world, it fails the test.",
        },
      },
    },
  },

  // Scenario 201 - David Chen, sales, advanced
  {
    id: "scenario-201",
    title: "The Hesitant Decision Maker",
    context:
      "A senior buyer is ready to recommend your solution internally but is anxious about defending the decision to a sceptical CFO. David is coaching you on how to prepare them without adding to their stress.",
    chooseContext:
      "The buyer has confessed that their CFO tends to interrogate purchasing decisions aggressively. David is helping you equip the buyer with talking points while keeping them calm and confident.",
    rewriteContext:
      "David has asked you to write a one-page summary the buyer can use internally to justify the decision, focusing on risk reduction and stability rather than aspirational benefits.",
    characterId: "david-chen",
    dialogue:
      "She believes in the solution. The issue is not whether it is right; it is whether she feels strong enough to defend it when her CFO picks it apart. Our job is to make her feel prepared, not pressured. Give her the tools to walk into that room and know she has an answer for everything. But do it gently - she is already carrying enough stress about this.",
    chooseDialogue:
      "Think about what the CFO will ask. Cost justification, risk of switching, timeline to value. Now think about how our buyer will feel when she gets those questions. Nervous. Exposed. Our prep document is not just answers - it is armour. It should make her feel protected going into that room.",
    rewriteDialogue:
      "Write the summary so she can hand it to the CFO and feel proud of it. No jargon, no hype. Just clear, calm answers to the questions she knows are coming. If it reads like a sales document, it will undermine her credibility. Make it read like her own business case.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "sales",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "David is focused on making the buyer feel emotionally prepared for an internal challenge, describing prep materials as 'armour' and prioritising her confidence over the close. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David is entirely focused on the buyer's emotional state and sense of safety. He frames the sales support as protection for someone under stress, not as a tool to close the deal. This is deeply supportive communication.",
          observation:
            "The word 'armour' is telling. David sees his role as shielding the buyer from a difficult experience, not as driving a transaction. Supportive communicators protect first and sell second.",
          coachingTip:
            "When someone frames sales enablement as emotional protection for the buyer, they are communicating supportively. Match their care by creating materials that prioritise the buyer's comfort.",
          styleContext:
            "Supportive communicators in complex sales understand that the real decision-maker is often not in the room. Their job is to equip the internal champion with confidence, not just data.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David does use vivid language like 'armour', which can look expressive. But the imagery serves protection, not inspiration. He is not trying to excite the buyer - he is trying to steady them.",
          observation:
            "An expressive communicator would fire up the buyer with enthusiasm about the opportunity. David is calming them down and making them feel prepared for a challenge.",
          coachingTip:
            "Supportive communicators use metaphors of safety: shields, armour, anchors. Expressive communicators use metaphors of adventure: missions, journeys, breakthroughs. Listen for the emotional direction.",
          styleContext:
            "Supportive communicators see pre-meeting anxiety as something to soothe, not to channel into energy. Their instinct is to calm, not to rally.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not structured a detailed analysis, a competitive comparison, or a financial model. His entire focus is on the human being who will walk into a difficult room.",
          observation:
            "There are no spreadsheets, no ROI calculations, and no vendor scorecards. David is coaching confidence, not building a business case from data.",
          coachingTip:
            "Ask yourself: is this person focused on the document or the person holding the document? David is entirely focused on the person.",
          styleContext:
            "Supportive communicators believe that a confident advocate with a simple document beats an anxious one with a perfect spreadsheet. The person is the medium; the document is just a prop.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The buyer is anxious about defending the decision to a sceptical CFO. David wants you to equip her gently. How do you approach the prep conversation?",
      options: [
        {
          id: "s201-opt-a",
          text: "Let us go through the three questions your CFO is most likely to ask. For each one, I will give you a clear answer you can use in your own words. If anything else comes up, I am a phone call away.",
          score: 10,
          result: "strong",
          explanation:
            "You have limited the prep to a manageable number, framed the answers as hers to personalise, and offered ongoing backup. This is exactly how supportive communicators equip internal champions.",
        },
        {
          id: "s201-opt-b",
          text: "I have built a detailed ROI model and a competitive analysis that should cover every question the CFO might raise. Let me walk you through all twelve slides so you are fully prepared.",
          score: 5,
          result: "partial",
          explanation:
            "Thorough but overwhelming. David specifically said the buyer is already stressed. Twelve slides will add to her anxiety rather than reducing it. Less is more in supportive sales enablement.",
        },
        {
          id: "s201-opt-c",
          text: "The CFO will come around once they see the numbers. Just present the business case confidently and let the data speak for itself. You have nothing to worry about.",
          score: 0,
          result: "weak",
          explanation:
            "Dismissing the buyer's anxiety with reassurance and telling her not to worry is the opposite of supportive communication. She needs acknowledgement and practical tools, not breezy confidence.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David wants you to write a one-page summary the buyer can use to justify the decision to her CFO. It should feel like her own business case, not a sales document. Write it in a supportive style that reduces anxiety.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Internal Business Case: Platform Partner Selection\n\nRecommendation: Continue with [Vendor] on a 12-month renewal.\n\nWhy this partner:\n- Three years of operational knowledge means zero ramp-up time and no transition risk.\n- Named account team already embedded in our processes, reducing dependency on internal IT resource.\n- Quarterly business reviews ensure the service adapts as our needs change.\n\nCost position:\n- Annual cost: 48k (3% increase on current contract).\n- Estimated transition cost to a new vendor: 25-35k in lost productivity, onboarding, and integration work.\n- Net position: staying is more cost-effective than switching, before accounting for relationship value.\n\nRisk summary:\n- Switching risk: High. New vendor requires 6-12 months to reach current performance baseline.\n- Staying risk: Low. Current partner has met or exceeded SLA targets for 11 of 12 quarters.\n\nThis recommendation is based on operational stability, cost efficiency, and continuity of service.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is calm, factual, and feels like an internal document rather than a sales pitch. The buyer could present this as her own work without embarrassment. David would approve immediately.",
          observation:
            "You framed the recommendation around risk reduction and stability, which is exactly what a cautious CFO wants to hear. No hype, no aspiration, just solid justification.",
          coachingTip:
            "When writing enablement materials for supportive communicators, ask: would the buyer be comfortable putting their name on this? If it smells like a vendor document, rewrite it.",
          styleContext:
            "Supportive communicators create materials that protect their champion's credibility. The document should make the buyer look thorough, not make the vendor look impressive.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether any language feels like vendor marketing. Phrases like 'industry-leading', 'best-in-class', or 'transformative' will undermine the buyer's credibility with a sceptical CFO.",
          observation:
            "If your summary includes testimonials, case study references, or product accolades, it reads as vendor material and will be dismissed.",
          coachingTip:
            "Write as if you are the buyer, not the seller. Use internal language, reference internal priorities, and present the recommendation as a business decision, not a purchase.",
          styleContext:
            "Supportive communicators understand that internal champions need documents they can own. The seller's name should be invisible in the narrative.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary either reads like a sales proposal, uses marketing language, or fails to address the specific concerns a sceptical CFO would raise. David wanted a business case, not a brochure.",
          observation:
            "If your document opens with company history, product awards, or client logos, it is a sales document. The CFO will see through it immediately.",
          coachingTip:
            "Delete everything a vendor would write and keep everything a buyer would write. The result should feel like an internal memo, not an external pitch.",
          styleContext:
            "Supportive communicators know that a buyer's credibility is at stake in every internal presentation. Materials that look vendor-supplied undermine the very person they are trying to help.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (202-204)
  // ============================================

  // Scenario 202 - Rachel Finch, client, foundation
  {
    id: "scenario-202",
    title: "The Data Migration Briefing",
    context:
      "A client is planning a data migration and has asked Rachel to assess the risks and provide a structured recommendation. Rachel has spent two days analysing the technical landscape.",
    chooseContext:
      "Rachel has presented her risk assessment and the client wants to skip straight to the migration without completing all the recommended pre-checks. Rachel is pushing back methodically.",
    rewriteContext:
      "Rachel has asked you to write the executive summary of the risk assessment, ensuring every recommendation is backed by specific evidence from the analysis.",
    characterId: "rachel-finch",
    dialogue:
      "I have mapped all 14 data sources, categorised them by volume, format compatibility, and dependency chain. Three sources have undocumented field mappings, which means if we migrate without resolving those first, we risk corrupting downstream reports. I have flagged those in red on page four of the assessment. I recommend resolving all three before we proceed.",
    chooseDialogue:
      "I understand the pressure to move quickly, but skipping the pre-checks is not a shortcut - it is a risk multiplier. Of the 14 sources, three have mapping issues. If even one of those corrupts during migration, the remediation cost is roughly four times the cost of fixing it now. The data supports doing this properly.",
    rewriteDialogue:
      "Write the summary so every recommendation links to a specific finding. If I say 'resolve field mappings before migration', the reader should be able to trace that recommendation back to the three sources I identified, the specific issue with each one, and the estimated impact of not addressing it.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "client",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Rachel has mapped 14 data sources, categorised them by multiple criteria, flagged three with specific issues, and linked her recommendation to a documented risk. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel communicates through structured analysis, specific data points, and evidence-based recommendations. Every statement is grounded in documented findings. This is analytical communication at its most thorough.",
          observation:
            "Notice how Rachel references the exact page of her assessment. Analytical communicators create traceable chains of evidence, making it easy to verify every claim.",
          coachingTip:
            "When someone provides exact counts, categories, and page references in a verbal briefing, they are communicating analytically. Match their precision with equally specific responses.",
          styleContext:
            "Analytical communicators see risk assessments as living documents that should be traceable from finding to recommendation. Vague advice feels irresponsible to them.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is decisive about her recommendation, which can look direct. But notice the decision is built on exhaustive analysis, not instinct. She recommends because the data tells her to, not because she feels strongly.",
          observation:
            "A direct communicator would say 'fix those three before we migrate'. Rachel says 'I have mapped all 14 sources and three have issues, therefore I recommend fixing them'. The reasoning chain is the point.",
          coachingTip:
            "Direct communicators state conclusions. Analytical communicators show the working that leads to conclusions. Rachel is showing every step of her reasoning.",
          styleContext:
            "Analytical communicators believe that a recommendation without visible evidence is just an opinion. They make the evidence as prominent as the advice.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not expressed how she feels about the migration, told a story about a past project, or discussed the team's comfort level. Her entire communication is data-driven and structured.",
          observation:
            "There are no personal anecdotes, no emotional appeals, and no references to team morale. Rachel operates entirely in the domain of evidence and logic.",
          coachingTip:
            "Ask yourself: is this person building a case from evidence or from experience and feeling? Rachel is firmly in the evidence space.",
          styleContext:
            "Analytical communicators in client settings establish credibility through rigour, not rapport. They trust the data to be more persuasive than personal warmth.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel has warned that skipping pre-checks will multiply risk. The client still wants to move quickly. How do you support Rachel's position?",
      options: [
        {
          id: "s202-opt-a",
          text: "The remediation cost for a corrupted migration is four times the cost of pre-checks. The numbers do not support skipping them. Can we agree a two-week window and then proceed at full speed?",
          score: 10,
          result: "strong",
          explanation:
            "You have used Rachel's own data to make the case, quantified the trade-off, and proposed a specific compromise with a defined timeline. This is how to support an analytical communicator.",
        },
        {
          id: "s202-opt-b",
          text: "I think Rachel has a good point. These pre-checks exist for a reason, and rushing past them feels risky. Maybe we should listen to her recommendation.",
          score: 5,
          result: "partial",
          explanation:
            "Supportive of Rachel but vague. 'Feels risky' and 'exists for a reason' are not the specific, evidence-based arguments an analytical communicator would build upon.",
        },
        {
          id: "s202-opt-c",
          text: "Let us just run the migration on the eleven clean sources now and deal with the three problem ones later. That way we make progress without waiting.",
          score: 0,
          result: "weak",
          explanation:
            "This ignores Rachel's dependency chain analysis. If the three flagged sources feed downstream reports, migrating the others first may create worse problems. Rachel will see this as ignoring her evidence.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel wants you to write the executive summary of the risk assessment. Every recommendation must link to a specific finding with evidence. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Executive Summary: Data Migration Risk Assessment\n\nScope: 14 data sources assessed across volume, format compatibility, and dependency chain.\n\nKey findings:\n1. 11 of 14 sources are migration-ready with documented field mappings and no downstream dependencies at risk.\n2. 3 sources (HR-Legacy, Finance-Archive, CRM-v2) have undocumented field mappings affecting 27 downstream reports.\n3. Estimated remediation cost if migrated without resolution: 80-120k in data correction and report rebuilds.\n4. Estimated pre-check cost to resolve all three: 18k over two weeks.\n\nRecommendations:\n- R1: Resolve field mappings for HR-Legacy, Finance-Archive, and CRM-v2 before migration (ref: findings 2-4).\n- R2: Proceed with migration of the 11 compliant sources in parallel with pre-check work (ref: finding 1).\n- R3: Schedule a post-migration validation checkpoint at week 4 to confirm data integrity across all 27 dependent reports.\n\nRisk position: Completing pre-checks reduces total project risk from High to Low at a cost of 18k and two weeks.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Every recommendation traces back to a numbered finding, costs are quantified, and the risk reduction is stated in concrete terms. Rachel would approve this as a faithful representation of her analysis.",
          observation:
            "You included cross-references between recommendations and findings, which is exactly how analytical communicators expect executive summaries to be structured.",
          coachingTip:
            "When writing for analytical communicators, number your findings and reference them in your recommendations. Traceability is a form of respect for their work.",
          styleContext:
            "Analytical communicators judge executive summaries by whether every recommendation can be traced to evidence. If a recommendation appears without a supporting finding, it looks like guesswork.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every recommendation is explicitly linked to a finding. If any recommendation says 'we recommend' without citing the specific evidence, it needs tightening.",
          observation:
            "If your summary uses phrases like 'based on our analysis' without specifying which analysis or which data points, it is too vague for an analytical communicator.",
          coachingTip:
            "Replace every instance of 'based on our analysis' with 'based on finding X, which identified Y'. Specificity is the currency of analytical communication.",
          styleContext:
            "Analytical communicators see vague references to 'the analysis' as lazy. They want the reader to be able to verify every claim without asking a follow-up question.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary either lacks specific data, uses vague language like 'significant risk' without quantification, or fails to link recommendations to evidence. Rachel would send it back for revision.",
          observation:
            "If your summary includes phrases like 'we believe the migration carries some risk' or 'it would be advisable to', it is too soft and unsubstantiated for an analytical communicator.",
          coachingTip:
            "Replace every qualitative statement with a quantitative one. 'Significant risk' becomes '80-120k remediation cost'. 'Advisable' becomes 'recommended based on findings 2-4'.",
          styleContext:
            "Analytical communicators see unquantified risk statements as meaningless. If you cannot put a number on it, you have not analysed it properly.",
        },
      },
    },
  },

  // Scenario 203 - Owen Grant, client, intermediate
  {
    id: "scenario-203",
    title: "The Service Level Dispute",
    context:
      "A client is claiming that your team has missed several service level targets over the past quarter. Owen has been asked to review the data and prepare a factual response that either validates or refutes the claim.",
    chooseContext:
      "Owen has completed his analysis and found that two of the five claimed breaches are valid, but three are based on the client using incorrect measurement criteria. He needs to present this diplomatically but accurately.",
    rewriteContext:
      "Owen has asked you to draft the response letter to the client, presenting the findings with full transparency and proposing corrective actions for the two genuine breaches.",
    characterId: "owen-grant",
    dialogue:
      "The client has claimed five SLA breaches. I have reviewed each one against the contractual definitions and the monitoring data. Two are legitimate - response times on incidents 4471 and 4489 exceeded the four-hour target. Three are not - the client measured from ticket creation, but the SLA clock starts from triage, which is defined in clause 7.3 of the contract. The data is clear.",
    chooseDialogue:
      "I do not want to make the client feel wrong. But I also cannot accept three invalid claims, because that sets a precedent for future disputes. My approach: acknowledge the two genuine breaches upfront, take full responsibility, and then explain the measurement methodology for the other three with reference to the contract terms. Facts first, then goodwill.",
    rewriteDialogue:
      "Write the response so the client sees two things: first, that we take genuine breaches seriously and have a plan to prevent recurrence. Second, that three of their claims are based on a misunderstanding of the SLA measurement methodology. Be precise but not combative. I want them to trust our data, not feel attacked by it.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "client",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Owen has reviewed five SLA breach claims against contractual definitions and monitoring data, validated two, and refuted three with specific clause references. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen approaches the dispute with structured analysis, contractual references, and a clear methodology for separating valid from invalid claims. This is analytical communication applied to conflict resolution.",
          observation:
            "Notice how Owen cites the specific contract clause and distinguishes between measurement methodologies. Analytical communicators resolve disputes by returning to documented agreements, not by arguing.",
          coachingTip:
            "When someone resolves a dispute by referencing contract clauses and data logs rather than appealing to fairness or relationship, they are communicating analytically. Support them with equally precise contributions.",
          styleContext:
            "Analytical communicators see disputes as data problems, not relationship problems. If the data is clear, the resolution should be straightforward.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen is decisive about his conclusions, which can look direct. But notice he builds the case methodically, showing the working for each claim rather than simply stating the verdict.",
          observation:
            "A direct communicator would say 'two are valid, three are not, here is what we are doing about it'. Owen walks through the methodology, the clause references, and the data trail.",
          coachingTip:
            "Analytical communicators show how they reached a conclusion. Direct communicators state the conclusion and move on. Owen is building an evidence trail, not delivering a verdict.",
          styleContext:
            "Analytical communicators believe that transparency about methodology is essential for trust. They would rather over-explain than under-evidence.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not focused on how the client feels about the dispute, offered empathetic language, or prioritised the relationship over the facts. His approach is entirely evidence-based.",
          observation:
            "There are no phrases about understanding the client's frustration or acknowledging the emotional impact. Owen is presenting data, not managing feelings.",
          coachingTip:
            "Ask yourself: is this person managing a relationship or managing a data set? Owen is entirely focused on getting the facts right.",
          styleContext:
            "Analytical communicators believe that accurate data, transparently presented, is the best path to resolution. They trust evidence more than empathy to resolve disputes.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen has found that two of five claimed SLA breaches are valid and three are based on incorrect measurement criteria. The client may react poorly to having three claims refuted. How do you suggest presenting the findings?",
      options: [
        {
          id: "s203-opt-a",
          text: "Lead with the two genuine breaches and own them fully with root cause analysis. Then show the contract definition for the other three and offer a joint session to align on SLA tracking.",
          score: 10,
          result: "strong",
          explanation:
            "You have structured the response to establish credibility through accountability before introducing the measurement correction. This follows Owen's analytical logic while managing the client relationship.",
        },
        {
          id: "s203-opt-b",
          text: "I would focus on the two valid breaches and gently mention that we have a slightly different reading of the SLA definitions for the other three. No need to labour the point if it risks damaging the relationship.",
          score: 5,
          result: "partial",
          explanation:
            "Diplomatically safe but analytically incomplete. Owen believes that accepting invalid claims sets a precedent. Being vague about the methodology issue does not solve the underlying problem.",
        },
        {
          id: "s203-opt-c",
          text: "I think we should just accept all five and focus on improving. Fighting three of them will make us look defensive, and the goodwill is worth more than being technically right.",
          score: 0,
          result: "weak",
          explanation:
            "Owen has clearly stated that accepting invalid claims sets a dangerous precedent. An analytical communicator sees inaccurate data as a systemic risk, not a relationship cost to absorb.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen wants you to draft the response letter to the client. It should acknowledge the two valid breaches with corrective actions and explain the measurement issue for the other three with contract references. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Dear Ms Chen,\n\nThank you for raising the SLA performance concerns for Q2. We have completed a full review of all five claimed breaches against the contractual SLA definitions (ref: Master Service Agreement, clause 7.3) and our incident monitoring data.\n\nValidated breaches (2 of 5):\n- Incident 4471 (12 March): Response time 4 hours 22 minutes against a 4-hour target. Root cause: escalation routing error. Corrective action: routing logic updated on 15 March.\n- Incident 4489 (28 March): Response time 5 hours 11 minutes against a 4-hour target. Root cause: out-of-hours coverage gap. Corrective action: additional on-call resource added from 1 April.\n\nClaims not validated (3 of 5):\n- Incidents 4502, 4515, and 4523: Your measurement appears to calculate response time from ticket creation. Per clause 7.3, the SLA clock starts from triage completion, which occurs after initial categorisation. Using the contractual definition, all three incidents were resolved within the agreed target.\n\nProposed next steps:\n1. We accept full responsibility for the two validated breaches and confirm corrective actions are in place.\n2. We propose a joint SLA alignment session to ensure both parties are measuring against the same definitions.\n3. We will provide a monthly SLA dashboard showing performance against contractual targets.\n\nWe value the transparency of this conversation and are committed to maintaining the highest service standards.\n\nOwen Grant",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your response is transparent, structured, and evidence-based. It takes full responsibility where warranted and corrects the measurement issue with contract references. Owen would consider this a faithful representation of his analysis.",
          observation:
            "You separated validated from non-validated claims clearly, provided incident numbers and specific dates, and proposed concrete next steps. This is analytical communication applied to client management.",
          coachingTip:
            "When writing for analytical communicators, structure the response so every claim is individually addressed with specific evidence. Grouped or generalised responses feel imprecise.",
          styleContext:
            "Analytical communicators believe that transparency about both successes and failures builds more trust than selective disclosure. Full data builds full confidence.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether every incident is individually addressed with dates, numbers, and contract references. If you have grouped the non-validated claims without specific evidence for each, it needs more detail.",
          observation:
            "If your response says 'three claims were based on a different measurement approach' without citing the contract clause or the specific incidents, it lacks the precision Owen requires.",
          coachingTip:
            "Treat each claim as a separate mini-analysis. The client raised five specific issues; your response should contain five specific assessments.",
          styleContext:
            "Analytical communicators see grouped responses as lazy. Each claim deserves its own evidence trail, even if the conclusion is the same.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response either lacks specific incident data, avoids the measurement issue, or uses vague language where precision is needed. Owen would not approve a response that leaves any claim unaddressed.",
          observation:
            "If your response apologises generally for 'service shortfalls' without distinguishing between valid and invalid claims, it has failed analytically and set a bad precedent.",
          coachingTip:
            "Go back to the data. For each of the five claims, state: what was claimed, what the data shows, what the contract says, and what the conclusion is. That is the structure Owen needs.",
          styleContext:
            "Analytical communicators would rather send a longer, more detailed response than a shorter, vaguer one. Brevity at the cost of precision is not a trade-off they accept.",
        },
      },
    },
  },

  // Scenario 204 - Fiona Banks, client, advanced
  {
    id: "scenario-204",
    title: "The Process Audit Findings",
    context:
      "Fiona has been hired to audit a client's procurement process and present findings to their leadership team. She has identified several inefficiencies but wants to present them in a way that is constructive and data-driven.",
    chooseContext:
      "Fiona has presented the audit findings and one senior stakeholder is challenging her methodology, suggesting the sample size was too small to draw reliable conclusions.",
    rewriteContext:
      "Fiona has asked you to write the audit recommendations section, ensuring each recommendation is traceable to a specific finding with quantified impact and a clear implementation pathway.",
    characterId: "fiona-banks",
    dialogue:
      "I audited 340 purchase orders from the last twelve months, which represents 68% of total volume and 81% of total spend. Within that sample, 23% had approval delays exceeding five working days, with an average delay of 8.2 days. The primary cause in 71% of delayed cases was a missing cost centre code at the point of submission. That single data quality issue accounts for an estimated 1,200 hours of lost productivity annually.",
    chooseDialogue:
      "I appreciate the question about sample size. The 340 orders represent a stratified sample covering all spend categories and all approval pathways. Statistically, at a 95% confidence level, the margin of error is plus or minus 3.4%. If anything, a larger sample would likely strengthen these findings, not weaken them. I am happy to share the sampling methodology in full.",
    rewriteDialogue:
      "Write the recommendations so that each one is a chain: finding, impact, recommendation, expected benefit, and implementation steps. If a reader cannot follow the logic from the problem to the solution without asking a question, the document is not finished.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "client",
    skillFocus: "brevity",

    spotQuestion: {
      prompt:
        "Fiona has presented audit findings with specific percentages, sample sizes, confidence intervals, and a traceable chain from data quality issues to productivity impact. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona communicates through precise statistics, structured methodology, and traceable reasoning. Every number is contextualised, every finding is quantified, and every conclusion is evidence-based. This is advanced analytical communication.",
          observation:
            "Notice how Fiona volunteered the confidence interval and margin of error without being asked. Analytical communicators anticipate methodological challenges and preemptively address them.",
          coachingTip:
            "When someone presents findings with statistical rigour, volunteer sampling methodology, and offer to share source data, they are communicating at the highest level of analytical precision. Match that rigour.",
          styleContext:
            "Analytical communicators at the advanced level treat their methodology as a product in its own right. They know their conclusions are only as strong as their process, and they make that process visible.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is confident and assertive in her defence of the methodology, which can look direct. But her confidence comes from the data, not from personality. She defends with evidence, not authority.",
          observation:
            "A direct communicator would say 'the sample size is fine, let us move on'. Fiona walks through confidence intervals and margins of error to prove it mathematically.",
          coachingTip:
            "Direct communicators assert. Analytical communicators prove. Fiona is proving her position, not simply asserting it.",
          styleContext:
            "Analytical communicators see challenges to methodology as invitations to demonstrate rigour, not as attacks to deflect.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not discussed team dynamics, stakeholder feelings, or the emotional impact of her findings on the leadership team. Her entire presentation is statistical and logical.",
          observation:
            "There are no softening phrases, no stories, and no emotional framing. Fiona presents data as if it speaks for itself, because for her, it does.",
          coachingTip:
            "Ask yourself: does this person present to connect or to convince through evidence? Fiona is entirely in the evidence space, trusting the numbers to do the persuading.",
          styleContext:
            "Analytical communicators believe that well-presented data is more persuasive than any narrative. They invest in the quality of their analysis, not the warmth of their delivery.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A senior stakeholder has challenged Fiona's sample size, suggesting it is too small for reliable conclusions. How do you support her response?",
      options: [
        {
          id: "s204-opt-a",
          text: "The sample covers 68% of volume and 81% of spend with a stratified design. At 95% confidence, the margin of error is 3.4%. That is well within accepted standards.",
          score: 10,
          result: "strong",
          explanation:
            "You have reinforced Fiona's response with the same statistical precision she used, demonstrating that you understand and support her analytical approach.",
        },
        {
          id: "s204-opt-b",
          text: "I think the sample is large enough to be representative, and the findings feel consistent with what we have observed anecdotally across the business.",
          score: 5,
          result: "partial",
          explanation:
            "Supportive but imprecise. 'Large enough' and 'feels consistent' are qualitative assessments that do not strengthen an analytical argument. Fiona needs data-backed support, not opinion.",
        },
        {
          id: "s204-opt-c",
          text: "Rather than debating methodology, can we focus on the practical implications of the findings? The details matter less than what we do about them.",
          score: 0,
          result: "weak",
          explanation:
            "Dismissing the methodology question undermines the foundation of the entire audit. For an analytical communicator, the methodology is the substance. Skipping it invalidates the conclusions.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona wants you to write the recommendations section of the audit report. Each recommendation must trace from finding to impact to action to expected benefit. Write it in an analytical style with full traceability.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Recommendations\n\nR1: Implement mandatory cost centre validation at point of submission.\n- Finding: 71% of approval delays (ref: Finding 3) are caused by missing cost centre codes at submission.\n- Impact: Estimated 1,200 hours of annual productivity lost to rework and re-routing.\n- Action: Configure the procurement portal to reject submissions without a valid cost centre code. Estimated development effort: 3 days.\n- Expected benefit: Reduction in approval delays from 23% to under 8% within the first quarter. Estimated productivity recovery: 850 hours annually.\n\nR2: Introduce tiered approval thresholds to reduce bottlenecks.\n- Finding: 34% of purchase orders under 500 pounds follow the same approval pathway as orders over 50,000 pounds (ref: Finding 5).\n- Impact: Low-value orders occupy senior approver time disproportionately, adding an average of 3.1 days to cycle time.\n- Action: Create a two-tier approval structure. Orders under 2,000 pounds require line manager approval only. Orders over 2,000 pounds follow the current pathway.\n- Expected benefit: 40% reduction in average approval cycle time for low-value orders. Senior approvers freed for approximately 6 hours per week.\n\nR3: Establish quarterly procurement data quality reviews.\n- Finding: Data quality issues are not currently monitored or reported (ref: Finding 7).\n- Impact: Without monitoring, the improvements from R1 and R2 may degrade over time.\n- Action: Assign a data steward to run quarterly audits against the top five data quality indicators identified in this report.\n- Expected benefit: Sustained improvement in approval efficiency and early detection of emerging issues.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Every recommendation follows the chain Fiona specified: finding, impact, action, expected benefit. Cross-references to numbered findings provide full traceability. This is the standard Fiona expects.",
          observation:
            "You quantified expected benefits and estimated implementation effort, which allows the client to prioritise recommendations based on return on investment.",
          coachingTip:
            "When writing recommendations for analytical communicators, include both the effort required and the benefit expected. This enables data-driven prioritisation.",
          styleContext:
            "Analytical communicators believe that recommendations without quantified benefits are just opinions. The numbers make them actionable.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every recommendation traces back to a numbered finding and includes a quantified expected benefit. Missing either breaks the traceability chain.",
          observation:
            "If any recommendation says 'this will improve efficiency' without quantifying by how much, it is incomplete. Fiona needs the number to assess whether the recommendation is worth implementing.",
          coachingTip:
            "For each recommendation, ask: can the reader calculate the ROI from what I have written? If not, add the missing numbers.",
          styleContext:
            "Analytical communicators evaluate recommendations by their evidence base, not their ambition. A modestly scoped recommendation with strong data beats a bold one with vague projections.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your recommendations section either lacks specific data, uses vague improvement language, or does not trace back to the findings. Fiona would not submit this to the client.",
          observation:
            "If your recommendations say 'improve the procurement process' or 'consider implementing better controls' without specifics, they are too general for an analytical audit report.",
          coachingTip:
            "Return to the findings. For each one, ask: what specific action would address this? What would it cost? What would it save? Write the answers down, and you have your recommendation.",
          styleContext:
            "Analytical communicators see vague recommendations as a failure of analysis. If the auditor cannot be specific, the audit was not thorough enough.",
        },
      },
    },
  },
];
