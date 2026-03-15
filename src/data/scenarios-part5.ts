import { Scenario } from "@/types";

export const SCENARIOS_PART5: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (49-51)
  // ============================================

  // Scenario 49 - Jordan Cole, presentation, foundation
  {
    id: "scenario-49",
    title: "The Board Room Pitch",
    context:
      "Jordan Cole is presenting a restructuring proposal to the board of directors. The session was scheduled for 30 minutes but the previous agenda item overran, leaving Jordan with only 15 minutes.",
    chooseContext:
      "Jordan has delivered the opening and the board chair has asked for a quick summary of the financial impact. Jordan turns to you for support with the next slide.",
    rewriteContext:
      "The board wants a one-slide closing summary before they vote. Jordan has asked you to write three bullet points that capture the recommendation, the cost saving, and the timeline.",
    characterId: "jordan-cole",
    dialogue:
      "We are cutting this to 15 minutes so I am dropping the background section entirely. Slide one: the problem. Slide two: the fix. Slide three: the numbers. If they want history they can read the pre-read. Let us get moving.",
    chooseDialogue:
      "They want the financial impact in two sentences. Do not give me a paragraph. Just tell me the saving and when it lands.",
    rewriteDialogue:
      "Write the three closing bullets now. One line each, no fluff. This needs to land hard enough for a yes vote in the room.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "presentation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Jordan has cut the presentation down and dropped the background section entirely, insisting on moving straight to the problem, the fix, and the numbers. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan's immediate reaction to a time cut is to strip the presentation to its bare essentials, focusing only on the problem, solution, and numbers. That is classic direct communication.",
          observation:
            "Notice how Jordan dismissed the background section without hesitation. Direct communicators prioritise outcomes over context and expect the audience to keep up.",
          coachingTip:
            "When a presenter cuts context to jump straight to recommendations, they are signalling a direct style. Match their pace by keeping your contributions equally crisp.",
          styleContext:
            "Direct communicators treat presentations as decision-making tools, not storytelling exercises. Every slide must earn its place by driving toward a result.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both direct and analytical presenters are task-focused, but an analytical communicator would not cut the data slides. They would more likely compress the narrative while keeping the evidence intact.",
          observation:
            "Jordan dropped the background entirely rather than condensing it. Analytical communicators would be uncomfortable removing supporting evidence.",
          coachingTip:
            "The deciding factor is what gets cut under pressure. Direct communicators cut context; analytical communicators cut filler but keep data.",
          styleContext:
            "Direct and analytical styles both value substance over small talk, but they define substance differently: results versus evidence.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan's approach is entirely task-driven. There is no consideration of how the audience might feel or whether the pace suits everyone in the room.",
          observation:
            "Jordan did not check whether anyone needed more context or whether the condensed format would work for all board members. The focus is purely on getting to the decision.",
          coachingTip:
            "Ask yourself whether the presenter is focused on people, ideas, results, or data. Jordan is clearly focused on results and speed.",
          styleContext:
            "Direct communicators in presentations prioritise clarity and momentum. They see questions as obstacles unless those questions lead to faster decisions.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan wants the financial impact in two sentences. How do you respond?",
      options: [
        {
          id: "s49-opt-a",
          text: "The restructure saves 1.2 million annually, starting Q3 this year. Full payback on transition costs within 14 months.",
          score: 10,
          result: "strong",
          explanation:
            "Two tight sentences with specific numbers and a clear timeline. This is exactly what a direct communicator wants when presenting to the board.",
        },
        {
          id: "s49-opt-b",
          text: "The projected savings are substantial and we anticipate a positive return once the transition period is complete, likely within the next financial year.",
          score: 5,
          result: "partial",
          explanation:
            "This is too vague for Jordan. Words like 'substantial' and 'likely' lack the specificity a direct presenter needs to land the point with the board.",
        },
        {
          id: "s49-opt-c",
          text: "I think it is worth noting that the financial modelling involved several assumptions, and I would want to walk the board through the methodology before quoting a specific figure. Perhaps we could schedule a follow-up session to cover the detail properly.",
          score: 0,
          result: "weak",
          explanation:
            "This delays the answer and introduces uncertainty at the worst possible moment. Jordan needs a number now, not a suggestion to defer.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan needs three closing bullet points for the board, each one line, covering the recommendation, the cost saving, and the timeline. Write them in a direct style that is sharp enough to secure a yes vote.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Recommendation: Approve the regional restructure to consolidate four offices into two.\nCost saving: 1.2 million per year from Q3, with full payback by Q4 next year.\nTimeline: Implementation begins 1 April, completion by 30 September.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Each bullet is one line, specific, and drives toward a decision. A board with limited time would be able to act on this immediately.",
          observation:
            "You included concrete numbers, dates, and a clear recommendation without hedging language. That is exactly how direct communicators close a presentation.",
          coachingTip:
            "When writing for a direct presenter, treat every word as expensive. If a word does not add information or momentum, cut it.",
          styleContext:
            "Direct communicators close presentations with a call to action, not a summary of what was discussed. The final slide should make the decision feel obvious.",
        },
        partial: {
          result: "partial",
          explanation:
            "You have the right structure but some of the language is too soft or vague. Direct communicators want specifics, not approximations.",
          observation:
            "Look for words like 'approximately', 'we believe', or 'in the region of'. These weaken the message for a direct audience.",
          coachingTip:
            "Replace every hedge with a commitment. Instead of 'we expect savings of around 1 million', write 'savings of 1.2 million from Q3'.",
          styleContext:
            "In boardroom presentations, direct communicators earn trust through precision and confidence, not caveats.",
        },
        weak: {
          result: "weak",
          explanation:
            "The response is too long, too cautious, or missing the key data points. Jordan asked for three punchy lines that land hard.",
          observation:
            "If the board has to read a paragraph to find the recommendation, the direct presenter has lost the room.",
          coachingTip:
            "Start each bullet with the label (Recommendation, Cost saving, Timeline) followed by one declarative statement. No introductions, no qualifiers.",
          styleContext:
            "Direct communicators believe that if you cannot state your case in three lines, you have not thought about it clearly enough.",
        },
      },
    },
  },

  // Scenario 50 - Sam Hartley, presentation, intermediate
  {
    id: "scenario-50",
    title: "The Quarterly Numbers",
    context:
      "Sam Hartley is presenting Q3 results to the commercial leadership team. Revenue is up 8% but two key accounts have churned. Sam is framing the narrative before the slide deck goes live.",
    chooseContext:
      "Sam is preparing for the Q&A section. A senior leader is known for asking difficult questions about lost accounts. Sam wants to rehearse a sharp response with you.",
    rewriteContext:
      "Sam has asked you to rewrite the opening slide script so it leads with the win before addressing the churn. The script needs to be 40 words or fewer.",
    characterId: "sam-hartley",
    dialogue:
      "Revenue is up 8%. That is the headline, that is what the slide leads with. Yes, we lost two accounts, but I am not burying the lead with excuses. We address it, we own it, and we move on. I want this wrapped up in 20 minutes flat.",
    chooseDialogue:
      "When Clarke asks about the two lost accounts, I am not getting defensive. I need a two-sentence answer: what happened and what we are doing about it. Give me something clean.",
    rewriteDialogue:
      "Rewrite the opener for me. I want to walk in, hit them with the 8% growth, then transition to the churn in one sentence. Forty words maximum. Go.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "presentation",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Sam wants to lead with the headline revenue figure, address lost accounts briefly, and wrap the presentation in 20 minutes. Which communication style does this approach reflect?",
      correctStyle: "direct",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam is controlling the narrative with a results-first approach, refusing to dwell on negatives, and setting a tight time limit. This is direct communication applied to presentation delivery.",
          observation:
            "Notice the phrase 'I am not burying the lead with excuses'. Direct communicators frame bad news as a problem to solve, not a story to tell.",
          coachingTip:
            "When a presenter focuses on controlling the pace and leading with outcomes, they are operating in a direct style. Support them by keeping your input equally tight.",
          styleContext:
            "Direct presenters treat quarterly reviews as accountability moments. They want to demonstrate control, not invite debate.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Expressive communicators also lead with energy and confidence, but they focus on the story and the excitement rather than the raw numbers. Sam is leading with data, not narrative.",
          observation:
            "Sam's approach is about facts and pace, not about inspiring the audience or painting a vision. The style is command-driven, not charisma-driven.",
          coachingTip:
            "The difference between direct and expressive in presentations is the goal: direct wants a decision, expressive wants engagement.",
          styleContext:
            "Both direct and expressive communicators are high-energy presenters, but direct energy is focused on efficiency while expressive energy is focused on connection.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam is not seeking consensus, asking for input, or structuring the presentation around detailed evidence. The focus is on speed, control, and results.",
          observation:
            "There is no invitation for collaboration or concern about how the audience will receive the bad news emotionally. Sam's priority is owning the narrative.",
          coachingTip:
            "Consider what drives the presenter: is it results, relationships, ideas, or accuracy? Sam is clearly driven by results and accountability.",
          styleContext:
            "Direct communicators in quarterly reviews see their role as delivering a verdict, not facilitating a discussion.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam needs a two-sentence response for when Clarke asks about the two lost accounts. What do you suggest?",
      options: [
        {
          id: "s50-opt-a",
          text: "Both left due to a competitor undercutting us by 15%. We have revised our retention framework and are piloting loyalty pricing with our top 10 at-risk accounts.",
          score: 10,
          result: "strong",
          explanation:
            "Two sentences, clear cause, and an immediate action. This gives Sam the ammunition to answer without flinching, which is exactly what a direct communicator needs in a Q&A.",
        },
        {
          id: "s50-opt-b",
          text: "It is a complicated situation with multiple factors. I think we need to look at the bigger picture and recognise that some churn is natural in a competitive market.",
          score: 5,
          result: "partial",
          explanation:
            "This is too vague and sounds evasive. Sam wants specifics and a forward-looking action, not a philosophical take on market dynamics.",
        },
        {
          id: "s50-opt-c",
          text: "I feel like we should be careful about how we frame this because the team worked really hard on those accounts and I would not want them to feel blamed. Maybe we could acknowledge the effort before discussing what happened.",
          score: 0,
          result: "weak",
          explanation:
            "This is supportive-style thinking applied to a direct presenter's need. Sam is not worried about feelings in this moment; Sam wants a crisp, confident answer for a tough question.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rewrite Sam's opening slide script in 40 words or fewer. Lead with the 8% revenue growth, then transition to the account churn in one sentence. Make it punchy and direct.",
      targetTraits: ["concise", "results-first", "confident-tone", "no-hedging"],
      exampleStrongResponse:
        "Q3 revenue is up 8%, driven by new business wins in EMEA and expanded contracts across our top 20 accounts. We lost two accounts to competitor pricing; our revised retention strategy is already live and targeting the next 10 at-risk clients.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. You led with the win, stated the loss without apology, and immediately pointed to action. That is exactly how a direct communicator opens a quarterly review.",
          observation:
            "The transition from positive to negative is clean and unemotional. You treated the churn as a fact to address, not a problem to dwell on.",
          coachingTip:
            "When writing for a direct presenter, never lead with bad news. Put the result first, then address challenges with a forward-looking action.",
          styleContext:
            "Direct communicators believe the opening 10 seconds of a presentation set the tone. Lead strong, and the audience will follow.",
        },
        partial: {
          result: "partial",
          explanation:
            "The structure is close but either the language is too soft or you spent too many words on the churn. Direct communicators want the bad news stated once and moved past quickly.",
          observation:
            "Check whether your transition sentence sounds defensive or explanatory. Sam wants confidence, not justification.",
          coachingTip:
            "Use active voice for the win ('revenue is up') and factual language for the loss ('we lost two accounts'). Do not soften or expand.",
          styleContext:
            "In direct-style presentations, the ratio of good news to bad news language should be roughly 3 to 1. Spend most of your words on the result.",
        },
        weak: {
          result: "weak",
          explanation:
            "The response is either too long, too cautious, or leads with the wrong information. Sam wanted the growth figure in the first sentence, not buried in the middle.",
          observation:
            "If a direct presenter has to search for the headline number, you have lost them.",
          coachingTip:
            "Start with the number. Literally begin with 'Q3 revenue is up 8%'. Everything else follows from that anchor.",
          styleContext:
            "Direct communicators judge opening slides by how quickly the audience can extract the key metric. If it takes more than five seconds, it is too slow.",
        },
      },
    },
  },

  // Scenario 51 - Alex Tran, presentation, advanced
  {
    id: "scenario-51",
    title: "The Strategy Keynote",
    context:
      "Alex Tran is delivering a keynote to 200 people at an industry conference. The topic is operational transformation, and Alex has been asked to keep it practical and action-oriented rather than theoretical.",
    chooseContext:
      "Midway through the keynote, an audience member asks a long, winding question about change resistance. Alex wants to redirect quickly without being dismissive. Alex looks to you for a suggested bridging phrase.",
    rewriteContext:
      "Alex wants to close the keynote with a 30-second call to action that the audience can apply immediately when they return to their organisations. You need to draft it.",
    characterId: "alex-tran",
    dialogue:
      "I have 25 minutes and 18 slides. That means I am cutting anything that does not have a case study or a measurable outcome attached to it. I am not here to give a TED Talk. I am here to give people something they can use on Monday morning.",
    chooseDialogue:
      "That question is going to derail us if I let it run. I need a one-sentence bridge that acknowledges the question and pivots back to my framework. Give me something sharp but professional.",
    rewriteDialogue:
      "Write me a 30-second close. No inspirational quotes, no 'imagine a world where' nonsense. I want three concrete actions they can take next week. That is how you end a keynote.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "presentation",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Alex is cutting slides that lack case studies or measurable outcomes, insisting the keynote should give the audience something practical to use immediately. Which communication style is driving this approach?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex is applying a direct lens to keynote design: every slide must earn its place through practical value, and the measure of success is action, not applause.",
          observation:
            "The dismissal of TED Talk-style content is a clear direct marker. Alex values utility over inspiration and measures impact by what the audience does, not how they feel.",
          coachingTip:
            "When a speaker defines success as 'what the audience can use on Monday', they are operating in a direct style. Mirror that by keeping your contributions results-oriented.",
          styleContext:
            "Direct communicators approach keynotes differently from expressive communicators. Where an expressive speaker wants to move the audience emotionally, a direct speaker wants to move them to action.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Analytical communicators also value substance over style, but they would focus on evidence and methodology rather than immediate action. Alex is not asking for proof; Alex is asking for practical takeaways.",
          observation:
            "An analytical keynote would include data, references, and careful caveats. Alex wants case studies purely as proof that the approach works, not as intellectual exercises.",
          coachingTip:
            "The distinction is the end goal. Analytical communicators want the audience to understand deeply. Direct communicators want the audience to act quickly.",
          styleContext:
            "Both direct and analytical communicators distrust vague presentations, but for different reasons: direct finds them wasteful, analytical finds them unsubstantiated.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex's approach is entirely about efficiency and practical impact. There is no focus on audience comfort, team morale, or creative storytelling.",
          observation:
            "Alex explicitly rejected inspirational content. Supportive and expressive communicators would embrace those elements as essential parts of a keynote.",
          coachingTip:
            "Consider what the speaker is optimising for. Alex is optimising for speed and practical value, which points clearly to a direct style.",
          styleContext:
            "Direct keynote speakers see themselves as coaches, not entertainers. Their goal is to leave the audience with a clear action plan.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "An audience member has asked a long, winding question about change resistance. Alex needs a one-sentence bridge that acknowledges the question and pivots back to the framework. What do you suggest?",
      options: [
        {
          id: "s51-opt-a",
          text: "That is a real challenge, and the framework on my next slide addresses exactly how to handle resistance through structured quick wins. Let me show you.",
          score: 10,
          result: "strong",
          explanation:
            "This validates the question without dwelling on it and immediately redirects to the structured content. It keeps the pace moving, which is what a direct keynote speaker needs.",
        },
        {
          id: "s51-opt-b",
          text: "Great question. Change resistance is fascinating and there is a lot of research on it. I could talk about this for hours, but let me try to weave it into the next section.",
          score: 5,
          result: "partial",
          explanation:
            "This is too open-ended. Saying 'I could talk about this for hours' invites the audience to expect a longer detour. Alex wants a clean pivot, not an extended acknowledgement.",
        },
        {
          id: "s51-opt-c",
          text: "I think that is a really important point and I want to make sure everyone in the room feels heard on this. Shall we take a quick poll to see how many people have experienced similar resistance?",
          score: 0,
          result: "weak",
          explanation:
            "This derails the keynote entirely. Alex explicitly wanted to avoid losing momentum. Introducing a poll mid-keynote would frustrate a direct speaker who is watching the clock.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write a 30-second closing for Alex's keynote. Include three concrete actions the audience can take next week. No inspirational language, no rhetorical questions. Make it action-oriented and direct.",
      targetTraits: ["action-oriented", "concise", "specific", "no-hedging"],
      exampleStrongResponse:
        "Here is what you can do next week. One: identify your top three operational bottlenecks and rank them by revenue impact. Two: pick the smallest one and run a five-day improvement sprint with a cross-functional team. Three: measure the result and share it with your leadership within a fortnight. Start small, prove the value, then scale. That is how transformation actually happens.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Three specific, time-bound actions with no filler. This is a close that respects the audience's time and gives them something tangible to act on immediately.",
          observation:
            "You avoided inspirational cliches and rhetorical questions. Each action is specific enough to be started without further guidance.",
          coachingTip:
            "When closing a presentation for a direct communicator, end with verbs, not feelings. Tell the audience what to do, not what to think.",
          styleContext:
            "Direct communicators judge keynotes by the quality of the closing action. If the audience leaves with a to-do list, the talk was a success.",
        },
        partial: {
          result: "partial",
          explanation:
            "You have the right structure but some actions are too vague or the language drifts into inspirational territory. Alex wanted practicality, not motivation.",
          observation:
            "Check whether each action passes the 'Could someone start this on Monday?' test. If it requires further clarification, it is not specific enough.",
          coachingTip:
            "Replace vague verbs like 'think about' or 'consider' with concrete ones like 'identify', 'measure', or 'implement'.",
          styleContext:
            "Direct keynote closings work best when they sound more like a project brief than a motivational speech.",
        },
        weak: {
          result: "weak",
          explanation:
            "The response is either too long, too vague, or too inspirational. Alex specifically rejected 'imagine a world where' content. The closing needs to feel like a briefing, not a pep talk.",
          observation:
            "If the audience has to interpret what you mean or translate it into action, you have missed the direct style.",
          coachingTip:
            "Write the three actions as if they were items on a task list. Each one should start with a verb and include a timeframe.",
          styleContext:
            "Direct communicators believe that a keynote without actionable takeaways is a waste of 200 people's time.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (52-54)
  // ============================================

  // Scenario 52 - Priya Sharma, presentation, foundation
  {
    id: "scenario-52",
    title: "The Campaign Launch",
    context:
      "Priya Sharma is presenting a new brand campaign to the senior marketing team. She has built a visually rich deck and wants the room buzzing with excitement before she reveals the creative concept.",
    chooseContext:
      "The senior team has responded positively to the concept but one stakeholder asks how the campaign connects to the brand strategy. Priya wants to answer in a way that keeps the energy high.",
    rewriteContext:
      "Priya has asked you to write a two-sentence teaser for the campaign that she can use as her opening line when the first slide appears. It needs to grab attention and set the creative tone.",
    characterId: "priya-sharma",
    dialogue:
      "Before I show you anything, I want you to picture this: a customer scrolling their feed, bored, glazed over, and then they hit our ad and they stop. They actually stop. That is what this campaign is designed to do. Let me take you on the journey.",
    chooseDialogue:
      "I love that question because it gets to the heart of why this campaign matters. I do not want to just give you a strategy slide though. Let me show you how the creative idea was born from the brand DNA itself.",
    rewriteDialogue:
      "I need an opening line that makes people lean forward. Something that paints a picture, not a data point. Two sentences that make the room feel the campaign before they see it.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "presentation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya starts her presentation by painting a vivid picture of a customer scrolling their feed and stopping at the ad, then invites the audience to go on a journey. Which communication style is this?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya uses storytelling, visual language, and emotional engagement to draw the audience in before showing any slides. This is textbook expressive communication in a presentation setting.",
          observation:
            "Notice phrases like 'picture this' and 'let me take you on the journey'. Expressive communicators create an experience, not just a briefing.",
          coachingTip:
            "When a presenter uses sensory language and builds anticipation before revealing content, they are signalling an expressive style. Engage with their energy to build rapport.",
          styleContext:
            "Expressive communicators treat presentations as performances. The emotional arc matters as much as the information delivered.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both expressive and supportive communicators are people-oriented, but supportive presenters focus on inclusion and comfort, not theatrical storytelling. Priya is performing, not nurturing.",
          observation:
            "Priya is not checking whether everyone feels comfortable or included. She is commanding attention and creating excitement.",
          coachingTip:
            "The difference in presentations is energy direction. Expressive speakers project outward to captivate; supportive speakers project inward to include.",
          styleContext:
            "Expressive and supportive styles both value people, but expressive communicators lead with charisma while supportive communicators lead with empathy.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya's approach is creative and story-driven, not data-led or action-focused. She is building an emotional connection before presenting any facts.",
          observation:
            "There are no numbers, timelines, or action items in Priya's opening. The entire focus is on painting a picture and generating excitement.",
          coachingTip:
            "Ask yourself: is this presenter leading with results, ideas, people, or data? Priya is clearly leading with ideas and creative energy.",
          styleContext:
            "Expressive communicators open presentations with hooks, stories, or provocative questions. They believe attention must be earned before information can land.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A stakeholder asks how the campaign connects to the brand strategy. Priya wants to answer while keeping the room's energy high. How do you suggest she responds?",
      options: [
        {
          id: "s52-opt-a",
          text: "Brilliant question. Watch this: the campaign's core idea actually grew directly from our brand promise. Let me show you the creative evolution in three visuals, and you will see the DNA running through every frame.",
          score: 10,
          result: "strong",
          explanation:
            "This keeps the energy high by turning the question into a reveal. It validates the question with enthusiasm and promises a visual answer, which matches the expressive style perfectly.",
        },
        {
          id: "s52-opt-b",
          text: "The campaign aligns with pillars two and four of the brand strategy document. I can pull up the mapping matrix if that would help.",
          score: 5,
          result: "partial",
          explanation:
            "This is factually helpful but kills the energy. Priya wants to maintain momentum and excitement, not shift into a spreadsheet discussion.",
        },
        {
          id: "s52-opt-c",
          text: "The strategy connection is detailed in the appendix on page 14. We can review it offline after the session.",
          score: 0,
          result: "weak",
          explanation:
            "This deflects the question entirely and feels dismissive. It also breaks the creative flow that Priya has carefully built. An expressive presenter wants to answer with flair, not deferral.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write a two-sentence opening teaser for Priya's campaign presentation. It should grab attention and set a creative, energetic tone. Paint a picture, not a data point.",
      targetTraits: ["visually-descriptive", "emotionally-engaging", "bold", "energetic"],
      exampleStrongResponse:
        "What if one scroll-stopping moment could change how a million people see your brand? That is not a hypothetical; that is what this campaign delivers, and in the next ten minutes, you will see exactly how.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your opening creates intrigue and excitement. It promises something compelling and draws the audience in before a single slide has appeared.",
          observation:
            "You used vivid language and a forward-leaning tone that matches Priya's personality. Expressive presenters want their openings to feel like a curtain rising.",
          coachingTip:
            "When writing for an expressive presenter, prioritise curiosity and energy over precision. The opening is about emotion, not information.",
          styleContext:
            "Expressive communicators believe the first 10 seconds of a presentation determine whether the audience is with you or checking their phone.",
        },
        partial: {
          result: "partial",
          explanation:
            "There is a creative spark but the language could be bolder or more visual. Priya wants the room to feel something, not just understand something.",
          observation:
            "Check whether your opening creates a mental image. If it reads more like a summary than a scene, it needs more expressive energy.",
          coachingTip:
            "Use sensory words and present-tense imagery. Instead of 'we developed a campaign', try 'picture a customer stopping mid-scroll'.",
          styleContext:
            "Expressive presentation openings work best when they create a moment of shared imagination before revealing the solution.",
        },
        weak: {
          result: "weak",
          explanation:
            "The response is too dry, too factual, or lacks creative energy. Priya specifically asked for something that makes people lean forward, not a slide summary.",
          observation:
            "If the opening could appear on a corporate memo without modification, it is not expressive enough.",
          coachingTip:
            "Start with a provocative question or a vivid image. Make the audience curious before you inform them.",
          styleContext:
            "Expressive communicators judge openings by the audience's body language in the first five seconds. Leaning forward means you have them.",
        },
      },
    },
  },

  // Scenario 53 - Marcus Webb, presentation, intermediate
  {
    id: "scenario-53",
    title: "The Innovation Showcase",
    context:
      "Marcus Webb is presenting a new product concept to the executive team at a quarterly innovation showcase. He has built a prototype and wants to generate excitement before asking for development funding.",
    chooseContext:
      "The CFO has asked for a return on investment figure. Marcus does not have a precise number yet but wants to answer in a way that maintains momentum and enthusiasm.",
    rewriteContext:
      "Marcus needs to close the presentation with a vision statement that the exec team will remember. He wants it to be bold and forward-looking, painting a picture of what success looks like in 12 months.",
    characterId: "marcus-webb",
    dialogue:
      "Forget the slides for a second. Let me just tell you what happened when we put this prototype in front of real users. One woman looked at it and said, 'Where has this been my whole career?' That is the reaction we are building for. That is the opportunity sitting in front of us right now.",
    chooseDialogue:
      "The ROI question is totally fair, and I will get to the numbers, but first let me tell you why four pilot users said they would pay double our target price. That tells you more than a spreadsheet ever will.",
    rewriteDialogue:
      "I need a closing line that is not a revenue forecast. I need something that makes this room believe in where this product could take us. One paragraph, maximum four sentences. Make it vivid.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "presentation",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Marcus opens by sharing a user's emotional reaction to the prototype rather than leading with data or features. Which communication style is he demonstrating?",
      correctStyle: "expressive",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus leads with a human story and an emotional reaction rather than metrics or features. He is selling a vision, not a specification. This is expressive communication at its most persuasive.",
          observation:
            "Notice how Marcus said 'forget the slides for a second'. Expressive communicators trust personal stories over structured content to make their point.",
          coachingTip:
            "When a presenter leads with anecdotes and user reactions rather than data, they are using an expressive approach. Engage by responding to the story, not just the facts.",
          styleContext:
            "Expressive communicators in innovation pitches sell the 'why' before the 'what'. They believe emotional connection drives investment decisions more than spreadsheets.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both expressive and direct communicators are confident and forward-leaning, but direct presenters would lead with the market opportunity or revenue potential, not a user anecdote.",
          observation:
            "Marcus is not leading with outcomes or timelines. He is leading with a moment, a reaction, a feeling. That is the expressive difference.",
          coachingTip:
            "The litmus test: does the presenter start with what happened (expressive) or what it means in numbers (direct)?",
          styleContext:
            "Direct and expressive communicators both have high energy, but direct energy is focused on action while expressive energy is focused on inspiration.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus is not building consensus or providing evidence. He is creating excitement through storytelling and personal testimony.",
          observation:
            "There is no caution, no data analysis, and no concern about team comfort. Marcus is performing, persuading, and painting a picture.",
          coachingTip:
            "Ask yourself: is this presenter trying to inspire, decide, include, or prove? Marcus is clearly trying to inspire.",
          styleContext:
            "Expressive communicators believe that if you can make someone feel something, the logic will follow. Data supports the story; it does not replace it.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The CFO asks for an ROI figure. Marcus does not have exact numbers yet but wants to keep momentum. How should he respond?",
      options: [
        {
          id: "s53-opt-a",
          text: "Four pilot users said they would pay double our target price. Convert even 10% of our base and we are looking at a seven-figure opportunity. The demand signal is already clear.",
          score: 10,
          result: "strong",
          explanation:
            "This acknowledges the question, uses a compelling data point wrapped in a story, and promises the detail while maintaining energy. It is perfectly calibrated for an expressive presenter who needs to keep the room excited.",
        },
        {
          id: "s53-opt-b",
          text: "I do not have the exact ROI yet, but I will get it to you by the end of the month once the financial modelling is complete.",
          score: 5,
          result: "partial",
          explanation:
            "This is honest but deflates the energy. Marcus wants to maintain momentum, and this answer creates a pause where there should be forward movement.",
        },
        {
          id: "s53-opt-c",
          text: "I think it is premature to discuss ROI at this stage. We need to complete the full pilot programme, gather statistically significant data, and then model several scenarios before I would be comfortable putting a number forward.",
          score: 0,
          result: "weak",
          explanation:
            "This is an analytical response that undermines the expressive pitch Marcus has built. It introduces caution and process at the exact moment Marcus needs confidence and vision.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write a bold, vivid closing paragraph for Marcus's innovation showcase. Maximum four sentences. Paint a picture of what success looks like in 12 months. No revenue forecasts, just vision.",
      targetTraits: ["visionary", "emotionally-engaging", "bold", "story-driven"],
      exampleStrongResponse:
        "Twelve months from now, I want us to be the company that every competitor is trying to copy. I want our users posting about this product without us asking them to. I want the industry talking about the moment we changed the game. That future starts with the decision this room makes today.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. The closing is bold, forward-looking, and emotionally compelling. It puts the audience at the centre of the story and creates urgency without using a single spreadsheet.",
          observation:
            "You used repetition ('I want') and escalation to build momentum. Expressive communicators use rhetorical patterns to make closings memorable.",
          coachingTip:
            "When closing for an expressive presenter, end with a call to belief, not just a call to action. The audience should feel that something exciting is within reach.",
          styleContext:
            "Expressive communicators close presentations by connecting the decision in front of the room to a bigger, more exciting future.",
        },
        partial: {
          result: "partial",
          explanation:
            "The vision is there but the language could be more vivid or the emotional arc more compelling. Marcus wants the room to feel inspired, not just informed.",
          observation:
            "Check whether your closing creates a sense of momentum and possibility. If it reads like a summary, it needs more expressive energy.",
          coachingTip:
            "Use present tense and sensory language to make the future feel real. Instead of 'we could achieve', try 'picture our users telling their colleagues'.",
          styleContext:
            "Expressive closings work best when they create a shared vision that feels inevitable, not hypothetical.",
        },
        weak: {
          result: "weak",
          explanation:
            "The response is too cautious, too factual, or lacks the emotional punch Marcus is looking for. He wanted vision, not analysis.",
          observation:
            "If the closing could appear in a risk assessment document, it is not expressive enough.",
          coachingTip:
            "Start with a bold statement about the future. Use 'I want' or 'imagine' to signal ambition and draw the audience into the vision.",
          styleContext:
            "Expressive communicators believe a great presentation ending should make the audience feel like they are part of something bigger than a budget line.",
        },
      },
    },
  },

  // Scenario 54 - Nina Okafor, presentation, advanced
  {
    id: "scenario-54",
    title: "The Client Webinar",
    context:
      "Nina Okafor is leading a webinar for 150 external clients to launch a new service offering. She wants the session to feel personal and engaging despite the virtual format, and she is planning interactive elements to keep energy high.",
    chooseContext:
      "Halfway through the webinar, engagement metrics show that 30% of attendees have dropped off. Nina wants to re-energise the remaining audience with a spontaneous pivot. She asks you for a suggestion.",
    rewriteContext:
      "Nina needs a closing call to action that feels warm, personal, and exciting rather than corporate. She wants attendees to feel individually invited to take the next step, not mass-marketed to.",
    characterId: "nina-okafor",
    dialogue:
      "I refuse to do the standard corporate webinar where someone reads slides for 45 minutes and everyone mutes their camera. I want polls, I want chat responses, I want people sharing stories. If it does not feel like a conversation, I have failed.",
    chooseDialogue:
      "We have lost a third of the room. That means the content is not landing emotionally. I need to do something unexpected right now to pull people back in. Give me an idea that feels spontaneous and human, not scripted.",
    rewriteDialogue:
      "Write me a closing that sounds like I am speaking to one person, not 150. I want them to feel like this was a conversation we had together, not a broadcast they watched. Make it warm, make it personal, and make them want to reach out.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "presentation",
    skillFocus: "brevity",

    spotQuestion: {
      prompt:
        "Nina rejects the standard corporate webinar format and insists on polls, chat interaction, and storytelling, saying she has failed if it does not feel like a conversation. Which communication style is she demonstrating?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina's focus on energy, interaction, and storytelling in a webinar format is classic expressive communication. She measures success by audience engagement and emotional connection, not content delivery.",
          observation:
            "Notice how Nina frames failure as a lack of conversation, not a lack of information. Expressive communicators define impact through connection.",
          coachingTip:
            "When a presenter prioritises audience energy and interactivity over content coverage, they are operating in an expressive style. Contribute ideas that increase engagement.",
          styleContext:
            "Expressive communicators transform even virtual formats into interactive experiences. They would rather cover less content with high engagement than more content with passive viewing.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both expressive and supportive communicators value audience connection, but supportive presenters focus on making everyone feel comfortable and included, while expressive presenters focus on creating energy and excitement.",
          observation:
            "Nina is not asking whether people feel safe or included. She wants them animated, sharing stories, and reacting. The goal is energy, not comfort.",
          coachingTip:
            "The difference in presentations: expressive wants the audience buzzing, supportive wants them settled and reassured.",
          styleContext:
            "Expressive and supportive styles both care about the human experience, but expressive amplifies energy while supportive creates calm.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina is not focused on data delivery or efficient time management. Her entire approach centres on creating an emotionally engaging experience for the audience.",
          observation:
            "There is no mention of timelines, metrics, or structured agendas. Nina's priority is the quality of the audience experience.",
          coachingTip:
            "Consider what the presenter is optimising for. Nina is optimising for connection and energy, which is a clear expressive priority.",
          styleContext:
            "Expressive communicators in virtual settings work harder to create the warmth and interaction that happens naturally in person.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Thirty percent of webinar attendees have dropped off. Nina wants to do something spontaneous and human to re-energise the remaining audience. What do you suggest?",
      options: [
        {
          id: "s54-opt-a",
          text: "Pause and say: 'I can feel the energy dipping, so let us do something different. Drop one word in the chat that describes your biggest challenge right now and I will respond to three of them live.'",
          score: 10,
          result: "strong",
          explanation:
            "This is perfectly calibrated for an expressive presenter. It is spontaneous, honest, interactive, and turns a problem into a moment of authentic connection.",
        },
        {
          id: "s54-opt-b",
          text: "Perhaps we could skip ahead to the most relevant slides and finish early. That way people get the key information without the time commitment.",
          score: 5,
          result: "partial",
          explanation:
            "This is practical but misses the point. Nina does not want to shorten the session; she wants to re-engage the audience emotionally. Cutting content does not solve an energy problem.",
        },
        {
          id: "s54-opt-c",
          text: "I think we should stick to the script. The content is solid and the people who dropped off probably had scheduling conflicts. We should not change the plan based on drop-off rates.",
          score: 0,
          result: "weak",
          explanation:
            "This ignores the emotional signal entirely. Nina sees the drop-off as a connection failure, and staying rigidly on script is the opposite of what an expressive communicator would want.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write a closing call to action for Nina's webinar that feels warm, personal, and individually addressed. Make the 150 attendees feel like they each had a personal conversation with Nina. Two to three sentences maximum.",
      targetTraits: ["personal", "warm", "emotionally-engaging", "relationship-focused"],
      exampleStrongResponse:
        "If anything we discussed today sparked an idea or a question, I genuinely want to hear about it. Reply to the follow-up email with your thoughts, or just say hello. This is not the end of a webinar; it is the start of a conversation, and I am here for it.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. The closing feels intimate and genuine. It transforms a broadcast ending into a personal invitation, which is exactly what an expressive communicator aims for.",
          observation:
            "You used direct, personal language ('I genuinely want to hear') that makes each attendee feel addressed individually. That is the hallmark of an expressive close.",
          coachingTip:
            "When closing for an expressive presenter in a virtual setting, use 'you' and 'I' language to collapse the distance between speaker and audience.",
          styleContext:
            "Expressive communicators close webinars by opening doors, not closing them. The call to action is always relational, not transactional.",
        },
        partial: {
          result: "partial",
          explanation:
            "The intent is right but the language may feel slightly corporate or impersonal. Nina wants this to sound like she is speaking to a friend, not an email list.",
          observation:
            "Check for phrases like 'do not hesitate to reach out' or 'we look forward to hearing from you'. These are corporate defaults that undermine the personal tone.",
          coachingTip:
            "Replace formal sign-offs with conversational language. Instead of 'we welcome your feedback', try 'I would love to hear what you think'.",
          styleContext:
            "Expressive closings in virtual settings need to work harder because the audience cannot see the speaker's warmth in their body language.",
        },
        weak: {
          result: "weak",
          explanation:
            "The response feels like a standard webinar sign-off. Nina wanted something that breaks the corporate mould and makes people feel personally connected.",
          observation:
            "If the closing could appear at the end of any company's webinar without modification, it is too generic for an expressive presenter.",
          coachingTip:
            "Write the closing as if Nina is speaking to one person she met at a coffee shop. That level of personal warmth is what expressive communicators bring to every interaction.",
          styleContext:
            "Expressive communicators believe the most important moment in a webinar is the last 30 seconds, because that is what people remember and act on.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (55-57)
  // ============================================

  // Scenario 55 - Tom Brennan, presentation, foundation
  {
    id: "scenario-55",
    title: "The Team Away Day",
    context:
      "Tom Brennan is presenting a new customer success framework at a team away day. He is conscious that several team members are anxious about the changes and wants to make sure everyone feels heard before he introduces the new process.",
    chooseContext:
      "A quieter team member has raised a concern about workload during the transition. Tom wants to respond in a way that validates the concern and reassures the whole room.",
    rewriteContext:
      "Tom has asked you to write a short transition statement he can use between the 'what is changing' slide and the 'how we will support you' slide. It needs to acknowledge anxiety and offer reassurance.",
    characterId: "tom-brennan",
    dialogue:
      "Before I walk through the new framework, I want to check in with everyone. Change can feel unsettling, and I know some of you have questions about what this means for your day-to-day. There are no silly questions here. I would rather we talk about concerns now than let them build up.",
    chooseDialogue:
      "Thank you for raising that, Jess. I think a lot of people in this room are probably feeling the same way, and it is completely reasonable. Let me address that directly because I do not want anyone leaving today feeling worried.",
    rewriteDialogue:
      "I need a bridge between 'what is changing' and 'how we will support you'. Something that says, 'I know this might feel like a lot, and that is okay. Here is how we are going to make sure nobody is left behind.'",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "presentation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Tom opens by checking in with the team, acknowledging that change feels unsettling, and creating space for concerns before presenting the new framework. Which communication style is this?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom prioritises the emotional wellbeing of his team before delivering content. He creates a safe space for questions and explicitly validates concerns. This is classic supportive communication.",
          observation:
            "Notice phrases like 'no silly questions' and 'I would rather we talk about concerns now'. Supportive communicators put people before process in every presentation.",
          coachingTip:
            "When a presenter opens by checking in on how the audience feels rather than what they need to know, they are displaying a supportive style. Match their pace and warmth.",
          styleContext:
            "Supportive communicators treat presentations as two-way conversations. They would rather slow down and ensure buy-in than push through content at pace.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both supportive and expressive communicators are people-focused, but expressive presenters create excitement and energy, while supportive presenters create safety and reassurance.",
          observation:
            "Tom is not generating enthusiasm or telling stories. He is creating a calm, safe environment where people feel comfortable raising concerns.",
          coachingTip:
            "The key difference: expressive says 'let us get excited about this', supportive says 'let us make sure everyone is okay with this'.",
          styleContext:
            "Supportive and expressive styles both centre people, but supportive communication is anchored in care while expressive communication is anchored in energy.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom is not focused on efficiency, data, or rapid progress. His entire opening is designed to create emotional safety for his team.",
          observation:
            "A direct or analytical presenter would have started with the framework itself, not with a check-in on how people are feeling.",
          coachingTip:
            "Consider what the presenter prioritises. Tom prioritises people's comfort and psychological safety, which is the defining trait of a supportive communicator.",
          styleContext:
            "Supportive communicators in team presentations see their primary role as creating an environment where people can absorb change without anxiety.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A quiet team member has raised a concern about workload during the transition. Tom wants to validate the concern and reassure the room. How should he respond?",
      options: [
        {
          id: "s55-opt-a",
          text: "Thank you for saying that, Jess. I suspect a lot of us feel the same way. The transition plan includes protected time for learning, and no one will carry their full workload while getting up to speed. We will do this together.",
          score: 10,
          result: "strong",
          explanation:
            "This validates the concern, normalises it, and offers specific reassurance. It also uses inclusive language ('we will do this together') that is central to supportive communication.",
        },
        {
          id: "s55-opt-b",
          text: "Good point. We have built in some buffer time so it should be manageable. Let us move on to the next slide where I cover the timeline.",
          score: 5,
          result: "partial",
          explanation:
            "This acknowledges the concern but moves on too quickly. Tom's style requires dwelling on the concern long enough for the team member to feel genuinely heard, not just noted.",
        },
        {
          id: "s55-opt-c",
          text: "I understand the concern but honestly the new framework is designed to reduce workload in the long run. The short-term pressure is an investment in a better process. Let us stay focused on the bigger picture.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the emotional concern by pivoting to logic. A supportive communicator would never frame a team member's worry as something to 'stay focused' past.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write a short transition statement for Tom to use between the 'what is changing' slide and the 'how we will support you' slide. It should acknowledge anxiety and offer reassurance. Two to three sentences.",
      targetTraits: ["reassuring", "warm", "acknowledging", "inclusive"],
      exampleStrongResponse:
        "I know that was a lot to take in, and it is completely normal to feel uncertain about what this means for your role. The good news is that the next part of this session is all about the support we are putting in place for each of you. Nobody is expected to figure this out alone.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your transition acknowledges the emotional weight of the previous content and immediately reassures the audience that support is coming. It feels caring and genuine.",
          observation:
            "You normalised the feeling of uncertainty and used 'each of you' to make the reassurance personal. Supportive communicators excel at making groups feel individually cared for.",
          coachingTip:
            "When writing transitions for a supportive presenter, always bridge from 'I see how you feel' to 'here is how we will help'. That pattern builds trust.",
          styleContext:
            "Supportive communicators use transition moments in presentations to reset the emotional temperature before introducing more content.",
        },
        partial: {
          result: "partial",
          explanation:
            "The reassurance is present but the emotional acknowledgement could be warmer or more specific. Supportive communicators want the audience to feel that their anxiety has been truly seen, not just mentioned.",
          observation:
            "Check whether your statement names the feeling. 'I know this is a lot' is good; 'I know some of you might be worried about what this means for your day-to-day' is better.",
          coachingTip:
            "Be specific about the emotion. Naming it makes people feel understood, which is the foundation of supportive communication.",
          styleContext:
            "Supportive presenters earn trust by demonstrating emotional awareness, not just content knowledge.",
        },
        weak: {
          result: "weak",
          explanation:
            "The response either skips the emotional acknowledgement or moves too quickly to the practical content. Tom needs the audience to feel settled before they can absorb what comes next.",
          observation:
            "If the transition could work in a direct presenter's deck without modification, it is not supportive enough.",
          coachingTip:
            "Start by naming the emotion ('I know change can feel unsettling'), then normalise it ('that is completely natural'), then reassure ('here is what we are doing about it').",
          styleContext:
            "Supportive communicators believe that learning and change cannot happen until people feel emotionally safe. The transition slide is where that safety is built.",
        },
      },
    },
  },

  // Scenario 56 - Leah Morgan, presentation, intermediate
  {
    id: "scenario-56",
    title: "The Change Management Briefing",
    context:
      "Leah Morgan is presenting a change management plan to a cross-functional group of managers. A restructure has been announced and Leah's role is to walk the managers through how they will support their teams through the transition.",
    chooseContext:
      "One manager pushes back, saying the restructure was decided without consulting the people affected. Leah needs to acknowledge the frustration without undermining senior leadership's decision.",
    rewriteContext:
      "Leah has asked you to write the final slide's speaking notes. She wants to close with a message that empowers the managers to be a source of stability for their teams during the transition.",
    characterId: "leah-morgan",
    dialogue:
      "I know this is not easy. Some of you may have concerns of your own, and I want you to know that those are valid. My job today is not to convince you that everything is perfect. It is to give you the tools and the support you need so that your teams feel looked after through this process.",
    chooseDialogue:
      "I hear you, and I think that frustration is shared by a number of people in this room. I am not going to pretend the process was perfect, but what I can do is make sure that from this point forward, your teams feel supported and informed.",
    rewriteDialogue:
      "I want to close with something that makes these managers feel trusted and capable. They are going to be the ones having the tough conversations with their teams, and I want them to leave this room knowing they are not doing it alone.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "presentation",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Leah opens by validating the managers' concerns, acknowledging that the situation is not easy, and framing her role as providing tools and support rather than persuading them. Which communication style is she using?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah's opening prioritises emotional validation and positions herself as a source of support rather than authority. She is not selling the restructure; she is helping people navigate it. This is supportive communication in a challenging presentation context.",
          observation:
            "Notice how Leah explicitly says her job is not to convince people that everything is perfect. Supportive communicators build trust through honesty and empathy, not persuasion.",
          coachingTip:
            "When a presenter frames their role as supporting and equipping the audience rather than directing or inspiring them, they are operating in a supportive style.",
          styleContext:
            "Supportive communicators in change management presentations see themselves as guides, not advocates. Their credibility comes from empathy, not enthusiasm.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both supportive and expressive communicators connect with people, but expressive communicators would focus on creating excitement about the change, while Leah is focused on creating safety through it.",
          observation:
            "Leah is not trying to generate enthusiasm or paint a vision. She is acknowledging difficulty and offering support.",
          coachingTip:
            "The distinction in change presentations: expressive says 'this is going to be brilliant', supportive says 'I know this is hard, and I am here to help'.",
          styleContext:
            "Supportive communicators earn trust in change scenarios by being honest about the difficulty, not by glossing over it with optimism.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah's approach is people-first and emotionally aware. She is not focused on timelines, efficiency, or data. The entire opening is about making the audience feel understood and supported.",
          observation:
            "A direct or analytical presenter would have started with the restructure plan itself, not with an acknowledgement of how people are feeling.",
          coachingTip:
            "Ask yourself what the presenter is prioritising. Leah prioritises emotional safety and trust, which is the core of supportive communication.",
          styleContext:
            "Supportive communicators believe that people cannot absorb change information until they feel their concerns have been heard.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A manager says the restructure was decided without consulting the people affected. Leah needs to acknowledge the frustration without undermining senior leadership. How should she respond?",
      options: [
        {
          id: "s56-opt-a",
          text: "I appreciate you saying that. The consultation process was not ideal, and I will not pretend otherwise. From this point on, your voice matters in how the transition is managed. I want your input on the support plan.",
          score: 10,
          result: "strong",
          explanation:
            "This validates the frustration, is honest without blaming leadership, and empowers the manager by inviting their input going forward. It perfectly balances supportive honesty with organisational loyalty.",
        },
        {
          id: "s56-opt-b",
          text: "I understand the concern, but the decision has been made at board level and our role now is to implement it as smoothly as possible. Let us focus on what we can control.",
          score: 5,
          result: "partial",
          explanation:
            "This is pragmatic but dismisses the emotional concern too quickly. Leah's supportive style requires more space for the feeling before moving to action.",
        },
        {
          id: "s56-opt-c",
          text: "The restructure went through the proper governance channels and the data supported the decision. I would encourage you to review the business case document that was circulated last week.",
          score: 0,
          result: "weak",
          explanation:
            "This is an analytical response that completely ignores the emotional content of the manager's concern. It will make the room feel unheard and increase resistance.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write Leah's closing speaking notes for the final slide. Two to three sentences that empower the managers to be a source of stability for their teams, and reassure them that they are not doing it alone.",
      targetTraits: ["empowering", "warm", "reassuring", "collaborative"],
      exampleStrongResponse:
        "You are the people your teams will turn to first, and that matters more than any process document. I want you to know that you have the support of this entire HR team behind you, and if you ever feel unsure about how to handle a conversation, pick up the phone. We will work through it together.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your closing empowers the managers while wrapping them in support. It acknowledges the weight of their role and offers a personal safety net. This is exactly how a supportive communicator closes a difficult presentation.",
          observation:
            "You used 'we will work through it together' as your anchor, which signals that the managers are not being sent off to handle this alone.",
          coachingTip:
            "When closing for a supportive presenter, always end with a promise of ongoing support. The audience should leave feeling backed, not briefed.",
          styleContext:
            "Supportive communicators close change presentations by reinforcing the relationship, not the process. The last words should feel like a handshake, not a briefing document.",
        },
        partial: {
          result: "partial",
          explanation:
            "The reassurance is there but the personal warmth could be stronger. Leah wants the managers to feel individually supported, not just corporately informed.",
          observation:
            "Check whether your closing sounds like a policy statement or a personal commitment. Supportive communicators always choose the personal tone.",
          coachingTip:
            "Use 'I' and 'you' rather than 'the organisation' and 'managers'. Personal pronouns create connection; corporate language creates distance.",
          styleContext:
            "Supportive presenters measure the success of their closing by whether people approach them afterwards for private conversations. That is the sign of trust.",
        },
        weak: {
          result: "weak",
          explanation:
            "The response is either too corporate, too brief, or too focused on the process rather than the people. Leah wanted the managers to feel trusted, capable, and supported.",
          observation:
            "If the closing could appear in an internal memo without modification, it lacks the personal warmth that defines supportive communication.",
          coachingTip:
            "Start by acknowledging the difficulty of the managers' role, then express genuine confidence in them, then promise support. That three-step pattern is the supportive close.",
          styleContext:
            "Supportive communicators believe the most important output of a change presentation is trust, not information transfer.",
        },
      },
    },
  },

  // Scenario 57 - David Chen, presentation, advanced
  {
    id: "scenario-57",
    title: "The Town Hall Address",
    context:
      "David Chen is co-leading a town hall presentation for 300 employees following the announcement of a warehouse relocation. Many staff are worried about their jobs, commute changes, and the uncertainty of the transition. David's section focuses on the people impact and support available.",
    chooseContext:
      "An employee asks a pointed question during the live Q&A: 'Are you actually going to listen to our concerns or is this just a box-ticking exercise?' David needs to respond authentically in front of the whole workforce.",
    rewriteContext:
      "David has been asked to record a 30-second video message that will be emailed to all staff after the town hall, reinforcing the support commitment. He needs your help writing the script.",
    characterId: "david-chen",
    dialogue:
      "I am not going to stand up here and pretend this is easy news to hear. I know that for many of you, the first thing you thought about was your commute, your childcare, your daily routine. Those concerns are real, and they matter. My commitment to you today is that every single one of those concerns will be heard and addressed individually.",
    chooseDialogue:
      "That is a fair challenge, and I respect you for asking it. I am not going to give you a polished answer because you deserve an honest one. Let me tell you what we are actually doing, not what the slide says.",
    rewriteDialogue:
      "I need a 30-second video script that feels like me, not like corporate comms. It should sound like I am sitting across a table from someone, not reading from a teleprompter. Keep it human.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "presentation",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "David opens the town hall by acknowledging the personal worries staff might have, from commutes to childcare, and commits to addressing every concern individually. Which communication style is this?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David immediately names the personal, human concerns that employees are likely feeling and makes an individual commitment to address them. This is supportive communication at a large scale, bringing intimacy to a town hall setting.",
          observation:
            "Notice how David lists specific personal impacts (commute, childcare, daily routine) rather than speaking in generalities. Supportive communicators demonstrate understanding by being specific about what people are experiencing.",
          coachingTip:
            "When a presenter in a large forum names individual-level concerns and promises personal attention, they are using a supportive style to create connection despite the scale.",
          styleContext:
            "Supportive communicators face a unique challenge in town halls: how to make 300 people each feel individually heard. They do it by being specific about the human impact.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both supportive and expressive communicators connect emotionally with audiences, but expressive presenters would energise and inspire, while David is calming and reassuring.",
          observation:
            "David is not generating excitement or painting a vision of a better future. He is sitting with the discomfort and saying 'I see you'.",
          coachingTip:
            "The difference in town halls: expressive says 'imagine how great the new space will be', supportive says 'I know you are worried about your commute, and that is valid'.",
          styleContext:
            "Supportive communicators in town halls prioritise emotional acknowledgement over positive framing.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David is not focused on the business rationale, the timeline, or the efficiency of the move. His entire opening is about the human impact on individual employees.",
          observation:
            "A direct or analytical presenter would have led with the operational logic or the data supporting the relocation decision.",
          coachingTip:
            "Ask yourself whether the presenter is leading with people, results, ideas, or evidence. David is clearly leading with people and their personal concerns.",
          styleContext:
            "Supportive communicators believe that a town hall about change must address feelings before facts, or the facts will not be heard.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "An employee asks: 'Are you actually going to listen to our concerns or is this just a box-ticking exercise?' David needs to respond authentically in front of 300 people. What should he say?",
      options: [
        {
          id: "s57-opt-a",
          text: "I am not going to give you a rehearsed answer. Every person here will have a one-to-one with their manager within two weeks. If you feel your concern has been noted but not acted on, come to me directly. My door is open, and I mean it.",
          score: 10,
          result: "strong",
          explanation:
            "This is honest, specific, and deeply personal. It offers a concrete action (one-to-one conversations) and a personal guarantee (come to me directly). It matches the supportive style while meeting the challenge head-on.",
        },
        {
          id: "s57-opt-b",
          text: "I understand the scepticism and I want to assure you that we have put a proper consultation framework in place. The HR team will be running feedback sessions over the coming weeks.",
          score: 5,
          result: "partial",
          explanation:
            "This is reasonable but too corporate for the moment. The employee challenged the authenticity of the process, and this response sounds exactly like the box-ticking answer they feared.",
        },
        {
          id: "s57-opt-c",
          text: "The relocation decision was made based on a thorough cost-benefit analysis. I would encourage you to review the briefing document that outlines the business case and the consultation timeline.",
          score: 0,
          result: "weak",
          explanation:
            "This completely misreads the room. The employee is asking about trust and listening, not business cases. This analytical response will deepen the scepticism and alienate the audience.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write a 30-second video script for David to record after the town hall. It should sound personal and human, like sitting across a table from someone, not like corporate communications. Four to five sentences maximum.",
      targetTraits: ["personal", "genuine", "reassuring", "low-pressure"],
      exampleStrongResponse:
        "I wanted to follow up on today's town hall because I know it was a lot to take in. If you left with questions or worries you did not get to raise, that is completely fine. Send me a message, grab me in the corridor, or book time with your manager. There is no deadline on being heard. We are going to take this at a pace that works for you, and I am not going anywhere.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. This sounds like a real person talking, not a communications team drafting. It offers multiple ways to raise concerns and reassures without rushing anyone. David would deliver this naturally.",
          observation:
            "You used informal, human language ('grab me in the corridor') alongside genuine reassurance ('there is no deadline on being heard'). That combination is the hallmark of effective supportive communication.",
          coachingTip:
            "When writing video scripts for supportive communicators, read it aloud. If it sounds like a memo, rewrite it. If it sounds like a conversation, you have it right.",
          styleContext:
            "Supportive communicators in follow-up messages want to extend the safety of the town hall beyond the event itself. The video should feel like an open door.",
        },
        partial: {
          result: "partial",
          explanation:
            "The message has the right intent but may sound slightly formal or scripted. David wanted it to feel like sitting across a table from someone.",
          observation:
            "Look for phrases that sound more like a letter than a conversation. Replace them with simpler, more personal alternatives.",
          coachingTip:
            "Write the script as if David is talking to one colleague he cares about. Then use that same language for all 300 people.",
          styleContext:
            "Supportive communicators measure the success of follow-up messages by whether people actually reach out afterwards. The tone must invite contact.",
        },
        weak: {
          result: "weak",
          explanation:
            "The script sounds too corporate, too rushed, or too focused on process rather than people. David wanted something human and personal.",
          observation:
            "If the script could be read by any senior leader in any organisation without modification, it lacks the personal warmth David brings.",
          coachingTip:
            "Start with an acknowledgement of the emotional weight, then offer multiple accessible ways to connect, then close with a personal commitment.",
          styleContext:
            "Supportive communicators believe that follow-up communications are where trust is either built or broken. The town hall starts the conversation; the follow-up proves it was genuine.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (58-60)
  // ============================================

  // Scenario 58 - Rachel Finch, presentation, foundation
  {
    id: "scenario-58",
    title: "The Research Findings",
    context:
      "Rachel Finch is presenting customer research findings to the product leadership team. She has compiled three months of data and wants to walk the team through the methodology before revealing the results.",
    chooseContext:
      "A product director interrupts and asks Rachel to skip to the recommendations. Rachel wants to respond in a way that maintains the integrity of her process without alienating the room.",
    rewriteContext:
      "Rachel has been asked to prepare a one-paragraph executive summary for stakeholders who could not attend the presentation. It needs to capture the methodology, key finding, and recommendation.",
    characterId: "rachel-finch",
    dialogue:
      "Before I share the results, I want to take five minutes to walk you through the methodology. We surveyed 2,400 customers across three segments, controlled for seasonal variance, and ran a confidence interval analysis to make sure the patterns we are seeing are statistically significant. I think the findings will have more weight once you understand how we arrived at them.",
    chooseDialogue:
      "I appreciate the eagerness, but the recommendations only make sense in the context of the data. If I skip to the end, you will have conclusions without evidence, and I would rather give you both.",
    rewriteDialogue:
      "I need a one-paragraph summary that a senior stakeholder can read in 30 seconds and trust immediately. It must include the method, the key finding, and the recommendation. No gaps in the logic chain.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "presentation",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel insists on walking the team through the methodology and statistical controls before revealing the results, saying the findings will carry more weight once the audience understands the process. Which communication style is she demonstrating?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel prioritises methodology, evidence quality, and logical rigour before conclusions. She believes data must be understood in context to be trusted. This is classic analytical communication in a presentation setting.",
          observation:
            "Notice the specific detail: 2,400 customers, three segments, confidence interval analysis. Analytical communicators build credibility through precision.",
          coachingTip:
            "When a presenter insists on showing their working before their conclusions, they are operating in an analytical style. Respect the process rather than pushing for the headline.",
          styleContext:
            "Analytical communicators believe that recommendations without visible evidence are just opinions. They present the methodology to build trust in the findings.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both analytical and direct communicators are task-focused, but a direct presenter would lead with the recommendation and provide evidence only if challenged. Rachel leads with the evidence deliberately.",
          observation:
            "Rachel is building the case methodically, not racing to the conclusion. That patience with process is the analytical distinction.",
          coachingTip:
            "The order matters: analytical communicators go evidence then conclusion, while direct communicators go conclusion then evidence (if asked).",
          styleContext:
            "Analytical and direct communicators both value substance, but they structure presentations in opposite directions: bottom-up versus top-down.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel's approach is entirely evidence-driven. She is not focused on audience feelings, creative storytelling, or rapid decisions.",
          observation:
            "There is no attempt to create excitement, build rapport, or check on audience comfort. Rachel is focused on the integrity of the data and the logical chain of evidence.",
          coachingTip:
            "Consider what the presenter values most. Rachel values accuracy, methodology, and evidence, which are the hallmarks of analytical communication.",
          styleContext:
            "Analytical communicators in presentations see themselves as building a case, not telling a story. The structure is logical, not emotional.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A product director asks Rachel to skip to the recommendations. Rachel wants to maintain the integrity of her methodology without alienating the room. What should she say?",
      options: [
        {
          id: "s58-opt-a",
          text: "Let me cover the three most critical data points in 90 seconds, then move to the recommendations. That gives you the evidence you need without the full methodology walkthrough.",
          score: 10,
          result: "strong",
          explanation:
            "This respects the audience's time while maintaining the analytical principle that evidence must precede conclusions. It compromises on format without compromising on rigour.",
        },
        {
          id: "s58-opt-b",
          text: "Sure, I can skip ahead to the recommendations slide. We can always come back to the data if anyone has questions.",
          score: 5,
          result: "partial",
          explanation:
            "This accommodates the request but abandons the evidence chain. An analytical communicator would feel uncomfortable presenting conclusions without first establishing the data foundation.",
        },
        {
          id: "s58-opt-c",
          text: "I think we should all take a moment to appreciate the work that went into this research. The team has been incredibly dedicated and I want to make sure their effort is properly represented before we rush to the end.",
          score: 0,
          result: "weak",
          explanation:
            "This is a supportive response that shifts the focus to people and effort. Rachel's concern is not about recognition; it is about the integrity of the evidence chain.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write a one-paragraph executive summary for stakeholders who missed Rachel's presentation. Include the methodology, the key finding, and the recommendation. Keep it precise and evidence-based.",
      targetTraits: ["precise", "structured", "evidence-based", "methodical"],
      exampleStrongResponse:
        "A survey of 2,400 customers across three segments, controlled for seasonal variance and validated at a 95% confidence interval, revealed that 68% of users in the mid-tier segment rated onboarding support as their primary driver of renewal. Based on this finding, we recommend investing in a dedicated onboarding team for mid-tier accounts, with an estimated 12% uplift in retention within the first year.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary includes the methodology, the specific finding with a data point, and a clear recommendation linked to the evidence. An analytical stakeholder would trust this immediately.",
          observation:
            "You maintained the logical chain: method led to finding, finding led to recommendation. Each element supports the next, which is how analytical communicators build credibility.",
          coachingTip:
            "When writing for an analytical audience, every claim should be traceable to a data point. If a sentence contains an assertion without evidence, it will be challenged.",
          styleContext:
            "Analytical communicators trust executive summaries that show their working. A recommendation without a visible evidence chain is just an opinion to them.",
        },
        partial: {
          result: "partial",
          explanation:
            "The structure is close but either the methodology detail is missing, the finding lacks specificity, or the recommendation is not clearly linked to the evidence.",
          observation:
            "Check whether each element in your summary connects logically to the next. Analytical communicators will spot gaps in the evidence chain immediately.",
          coachingTip:
            "Use the structure: 'We did [method], which found [specific result], therefore we recommend [action with expected outcome]'.",
          styleContext:
            "Analytical executive summaries are miniature arguments. Every sentence should be a step in the logical chain from evidence to action.",
        },
        weak: {
          result: "weak",
          explanation:
            "The summary is either too vague, missing the methodology, or presenting the recommendation without sufficient evidence. Rachel would not send this to stakeholders.",
          observation:
            "If a stakeholder could reasonably ask 'but how do you know that?' after reading your summary, it lacks the analytical rigour Rachel requires.",
          coachingTip:
            "Start with the sample size and method, then state the key finding with a percentage or metric, then give the recommendation with an expected impact.",
          styleContext:
            "Analytical communicators believe that a summary without methodology is not a summary; it is a headline. And headlines without evidence are dangerous.",
        },
      },
    },
  },

  // Scenario 59 - Owen Grant, presentation, intermediate
  {
    id: "scenario-59",
    title: "The Quality Review",
    context:
      "Owen Grant is presenting a quarterly quality review to the operations board. He has identified a pattern of defects in one product line and wants to walk the board through his root cause analysis before proposing corrective actions.",
    chooseContext:
      "A board member challenges Owen's finding, suggesting the defect pattern might be coincidental rather than systemic. Owen needs to defend his analysis with evidence, not emotion.",
    rewriteContext:
      "Owen has been asked to prepare a risk summary slide for the board pack. It must present the defect trend, the root cause, and the recommended corrective action with supporting data for each point.",
    characterId: "owen-grant",
    dialogue:
      "I want to draw your attention to slide seven, where you can see the defect trend over the past four quarters. The pattern is not random. When you overlay the supplier batch data with our internal inspection logs, a clear correlation emerges between batches from Plant C and our elevated rejection rates. I have the statistical breakdown on the next two slides.",
    chooseDialogue:
      "I understand the scepticism, and I would be concerned if this were based on a small sample. But we are looking at 1,200 units across four quarters, and the correlation coefficient between Plant C batches and defect rates is 0.87. Let me show you the regression analysis.",
    rewriteDialogue:
      "Write the risk summary with three sections: the trend, the cause, and the fix. Each section needs a data point. I do not want anyone in the boardroom saying this is guesswork.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "presentation",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen presents a defect trend with overlaid supplier batch data and a statistical correlation, promising a full regression analysis on the next slides. Which communication style is he demonstrating?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen's presentation is structured around data correlation, statistical evidence, and a methodical build from observation to analysis. This is analytical communication applied to board-level reporting.",
          observation:
            "Notice how Owen does not state his conclusion first. He walks the board through the evidence so they can follow the logic and arrive at the same finding. Analytical communicators trust the process of discovery.",
          coachingTip:
            "When a presenter uses correlation data, statistical breakdowns, and regression analysis to build a case, they are operating in a deeply analytical style. Engage with the evidence, not just the conclusion.",
          styleContext:
            "Analytical communicators in board presentations see themselves as prosecutors building a case. Every data point is a piece of evidence that makes the conclusion unavoidable.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both analytical and direct communicators are results-oriented, but a direct presenter would state the conclusion first and offer data only if challenged. Owen builds the evidence chain deliberately.",
          observation:
            "Owen has multiple slides of data planned before reaching his recommendation. A direct presenter would put the recommendation on slide one.",
          coachingTip:
            "The structural difference is revealing: analytical presenters build up to the conclusion, direct presenters start with it.",
          styleContext:
            "Analytical and direct communicators both want clear outcomes, but analytical communicators believe the journey through the evidence is essential to the credibility of the conclusion.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen's presentation is entirely data-driven. There is no storytelling, emotional appeal, or concern about how the audience feels about the findings.",
          observation:
            "Owen is presenting statistical correlations and regression analysis. This is as far from expressive or supportive communication as a presentation can be.",
          coachingTip:
            "Consider the presenter's tools: stories and energy (expressive), empathy and safety (supportive), speed and decisions (direct), or data and logic (analytical). Owen is clearly using data and logic.",
          styleContext:
            "Analytical presenters in quality reviews treat the presentation as a peer review of their analysis. The audience's job is to challenge the evidence, not to feel inspired by it.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A board member suggests the defect pattern might be coincidental. Owen needs to defend his analysis with evidence. How should he respond?",
      options: [
        {
          id: "s59-opt-a",
          text: "The sample is 1,200 units across four quarters. The correlation between Plant C batches and elevated defects is 0.87, well above the significance threshold. Plants A and B showed no comparable pattern. The data rules out coincidence.",
          score: 10,
          result: "strong",
          explanation:
            "This responds to the challenge with more data, not defensiveness. It cites sample size, correlation strength, and a control comparison. An analytical communicator defending their work should always let the evidence do the talking.",
        },
        {
          id: "s59-opt-b",
          text: "I have been doing quality analysis for 15 years and I can assure you this is not coincidence. The pattern is clear when you look at the data.",
          score: 5,
          result: "partial",
          explanation:
            "This relies on personal authority rather than evidence. An analytical communicator would never ask the board to trust their experience over the data. The strength should come from the analysis, not the analyst.",
        },
        {
          id: "s59-opt-c",
          text: "I think we should be careful about jumping to conclusions and perhaps set up a working group to investigate further. There may be perspectives we have not considered.",
          score: 0,
          result: "weak",
          explanation:
            "This retreats from the evidence when challenged, which undermines three months of analysis. Owen has already done the investigation; suggesting another one signals a lack of confidence in his own data.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write a risk summary for Owen's board pack with three sections: the defect trend, the root cause, and the corrective action. Each section must include a supporting data point. Keep it precise and defensible.",
      targetTraits: ["data-backed", "structured", "precise", "defensible"],
      exampleStrongResponse:
        "Defect Trend: Rejection rates for Product Line D have risen from 2.1% to 4.8% over four quarters, representing a 129% increase against a stable baseline for all other lines.\n\nRoot Cause: Statistical analysis of 1,200 units identifies a 0.87 correlation between batches sourced from Plant C and elevated defect rates. Control comparisons with Plants A and B show no equivalent pattern.\n\nCorrective Action: Suspend new orders from Plant C pending a supplier audit, and redirect volume to Plant A, which has maintained a 1.3% defect rate over the same period. Estimated timeline for audit completion: six weeks.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Each section contains a specific, defensible data point, and the logical chain from trend to cause to action is clear. This is the kind of risk summary that an analytical board member would trust completely.",
          observation:
            "You structured the information so that each section builds on the previous one. The trend establishes the problem, the cause explains it, and the action resolves it. That logical flow is the foundation of analytical communication.",
          coachingTip:
            "When writing board-level summaries for analytical presenters, treat each section as a claim that must be supported by evidence. If a section lacks a number, it lacks credibility.",
          styleContext:
            "Analytical communicators design board packs so that a sceptical reader cannot challenge any section without encountering the data that supports it.",
        },
        partial: {
          result: "partial",
          explanation:
            "The structure is correct but one or more sections lack a specific data point. Analytical communicators need every claim backed by a number or a measurable reference.",
          observation:
            "Check each section: does the trend include a percentage? Does the cause include a statistical measure? Does the action include a timeline? Any gap weakens the summary.",
          coachingTip:
            "For each section, ask: 'If a board member challenged this point, would the data defend it?' If the answer is no, add a data point.",
          styleContext:
            "Analytical board packs are designed to withstand scrutiny. Every section should anticipate the toughest question and answer it pre-emptively.",
        },
        weak: {
          result: "weak",
          explanation:
            "The summary is too vague, too narrative, or missing the data that Owen requires. He specifically said he does not want anyone calling this guesswork.",
          observation:
            "If the summary uses words like 'significant', 'notable', or 'concerning' without a number attached, it will not satisfy an analytical presenter.",
          coachingTip:
            "Replace every adjective with a data point. Instead of 'defect rates have risen significantly', write 'defect rates have risen from 2.1% to 4.8%'.",
          styleContext:
            "Analytical communicators believe that a risk summary without data is not a risk summary. It is a worry list.",
        },
      },
    },
  },

  // Scenario 60 - Fiona Banks, presentation, advanced
  {
    id: "scenario-60",
    title: "The Investment Committee",
    context:
      "Fiona Banks is presenting a business case for a new technology platform to the investment committee. The proposal requires a 2.4 million capital expenditure and Fiona has prepared a detailed cost-benefit analysis with multiple scenario models.",
    chooseContext:
      "A committee member asks Fiona what happens if the adoption rate is lower than projected. Fiona has modelled this scenario and wants to walk through the sensitivity analysis.",
    rewriteContext:
      "The committee has asked Fiona to prepare a one-page decision paper summarising the investment case. It must include the cost, the projected return under three scenarios, and the risk-adjusted recommendation.",
    characterId: "fiona-banks",
    dialogue:
      "I have prepared three scenario models: base case, optimistic, and conservative. The base case shows a net present value of 1.8 million over five years, with an internal rate of return of 22%. I want to walk you through each model so you can see the assumptions behind the numbers before we discuss the recommendation.",
    chooseDialogue:
      "I anticipated that question, which is why I included a sensitivity analysis on slide 14. If adoption drops to 60% of our base projection, the payback period extends from 18 months to 29 months, but the NPV remains positive at 940,000. The investment case holds even under the conservative model.",
    rewriteDialogue:
      "The decision paper needs to be bulletproof. One page, three scenarios with numbers, and a recommendation that accounts for the downside risk. If someone reads this in isolation, they should have everything they need to make an informed decision.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "presentation",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Fiona has prepared three scenario models with NPV calculations and internal rates of return, and insists on walking the committee through the assumptions before discussing the recommendation. Which communication style is she demonstrating?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona's presentation is built on financial modelling, scenario analysis, and transparent assumptions. She wants the committee to evaluate the evidence before reaching a conclusion. This is analytical communication at its most rigorous.",
          observation:
            "Notice that Fiona has three scenario models, not just one. Analytical communicators anticipate challenges by modelling multiple outcomes and stress-testing their own conclusions.",
          coachingTip:
            "When a presenter leads with methodology, scenario models, and financial metrics like NPV and IRR, they are operating in a deeply analytical style. Engage by asking about the assumptions, not the headline.",
          styleContext:
            "Analytical communicators in investment presentations build credibility by showing that they have already challenged their own numbers. The presentation is a defence of the analysis, not a sales pitch.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both analytical and direct communicators focus on business outcomes, but a direct presenter would lead with the recommendation and NPV, not the methodology and assumptions. Fiona builds the case before stating the conclusion.",
          observation:
            "Fiona explicitly says she wants to walk through assumptions before discussing the recommendation. A direct presenter would say 'here is what I recommend and here is the number'.",
          coachingTip:
            "The presentation order reveals the style: analytical goes evidence then conclusion, direct goes conclusion then evidence.",
          styleContext:
            "In investment committee presentations, analytical communicators earn trust through transparency of method, while direct communicators earn trust through clarity of conviction.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona's presentation is entirely data-driven and model-based. There is no emotional appeal, creative storytelling, or concern about committee members' feelings.",
          observation:
            "The content is financial models, scenario analysis, and statistical metrics. This is as analytically rigorous as a presentation can be.",
          coachingTip:
            "Consider the tools the presenter is using. NPV, IRR, sensitivity analysis, and scenario modelling are the language of analytical communication.",
          styleContext:
            "Analytical communicators in finance see presentations as peer reviews of their analysis. The committee's job is to stress-test the model, and the presenter's job is to ensure it survives.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A committee member asks what happens if adoption is lower than projected. Fiona has modelled this scenario. How should she respond?",
      options: [
        {
          id: "s60-opt-a",
          text: "That is in the sensitivity analysis. At 60% adoption, payback extends from 18 to 29 months but NPV stays positive at 940,000. At 40% adoption, we still break even within 36 months. The case is resilient across all three models.",
          score: 10,
          result: "strong",
          explanation:
            "This is a masterclass in analytical response: pre-empted the question, provided specific numbers for multiple scenarios, and concluded with a data-backed assertion of resilience. The committee can see that the analysis is thorough.",
        },
        {
          id: "s60-opt-b",
          text: "That is a good point and something we will need to monitor closely. I am confident the adoption will meet our targets based on the market research, but we can build in a review point at six months.",
          score: 5,
          result: "partial",
          explanation:
            "This acknowledges the concern but relies on confidence rather than evidence. Fiona has the data to answer precisely; a vague reassurance undersells her preparation.",
        },
        {
          id: "s60-opt-c",
          text: "I think we need to trust our teams to drive adoption. We have great people on this, and I believe in their ability to hit the targets. The important thing is that we all get behind the decision and support the rollout.",
          score: 0,
          result: "weak",
          explanation:
            "This is a supportive response to a data question. The committee member asked about financial risk, not team capability. Fiona's analytical style demands a numbers-based answer.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Write a one-page decision paper for Fiona summarising the investment case. Include the capital cost, projected returns under three scenarios (base, optimistic, conservative), and a risk-adjusted recommendation. Make it precise enough that a reader can make an informed decision without attending the presentation.",
      targetTraits: ["precise", "structured", "evidence-based", "professionally-cautious"],
      exampleStrongResponse:
        "Investment Decision Paper: Technology Platform Upgrade\n\nCapital Expenditure: 2.4 million\n\nProjected Returns (5-year NPV):\nBase case (80% adoption): NPV 1.8 million, IRR 22%, payback 18 months\nOptimistic (95% adoption): NPV 2.6 million, IRR 28%, payback 14 months\nConservative (60% adoption): NPV 940,000, IRR 14%, payback 29 months\n\nSensitivity: The investment remains NPV-positive across all three scenarios. Break-even adoption threshold is 38%, well below even the conservative projection.\n\nRisk-Adjusted Recommendation: Approve the 2.4 million capital expenditure. The financial case is robust under stress-tested assumptions, and the conservative model still delivers a positive return within the standard investment horizon. A six-month review gate is recommended to validate adoption against the base case trajectory.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. The decision paper is comprehensive, precise, and self-contained. Every claim is supported by a number, and the recommendation is explicitly linked to the scenario analysis. This is the standard analytical communicators set for decision-grade documentation.",
          observation:
            "You included the break-even threshold, which pre-empts the most likely challenge. Analytical communicators anticipate objections and address them within the document.",
          coachingTip:
            "When writing decision papers for analytical stakeholders, include the worst-case scenario and show that the case still holds. That is what builds confidence in the recommendation.",
          styleContext:
            "Analytical communicators design decision papers to be self-defending documents. If a reader has to ask a follow-up question, the paper has a gap.",
        },
        partial: {
          result: "partial",
          explanation:
            "The structure is good but one or more scenarios lack sufficient detail, or the recommendation is not clearly linked to the evidence. Fiona needs every claim to be traceable to a number.",
          observation:
            "Check whether a sceptical reader could challenge any section. If the answer is yes, add the supporting data.",
          coachingTip:
            "Include specific metrics for each scenario: NPV, payback period, and the key assumption that differentiates it from the other scenarios.",
          styleContext:
            "Analytical decision papers work when every section could survive a boardroom challenge without the presenter in the room to defend it.",
        },
        weak: {
          result: "weak",
          explanation:
            "The paper is either too narrative, missing scenario data, or presenting the recommendation without sufficient evidence. Fiona said it needs to be bulletproof for standalone reading.",
          observation:
            "If the paper relies on phrases like 'we believe', 'significant returns', or 'strong potential' without attached numbers, it fails the analytical test.",
          coachingTip:
            "Structure the paper in clear sections with headers. Each section should contain at least one specific number. The recommendation should reference the scenario data explicitly.",
          styleContext:
            "Analytical communicators believe a decision paper without numbers is not a decision paper. It is a proposal, and proposals invite debate. Decision papers invite action.",
        },
      },
    },
  },
];
