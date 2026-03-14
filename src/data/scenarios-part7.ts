import { Scenario } from "@/types";

export const SCENARIOS_PART7: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (73-75)
  // ============================================

  // Scenario 73 - Jordan Cole, remote, foundation
  {
    id: "scenario-73",
    title: "The Virtual Stand-up Shutdown",
    context:
      "You are running the daily virtual stand-up on Teams. Jordan has joined late and immediately interrupted the first speaker to ask why a deliverable has not been completed.",
    chooseContext:
      "Jordan has listened to your initial response but is now pushing for a commitment on when the blocker will be resolved. The rest of the team is watching on camera.",
    rewriteContext:
      "Jordan has asked you to post a follow-up message in the team channel summarising the blocker and resolution timeline so there is a written record.",
    characterId: "jordan-cole",
    dialogue:
      "Sorry, but I need to cut in. Why is the API migration still showing as in progress? It was due yesterday. I need a straight answer, not a status update.",
    chooseDialogue:
      "Right. So when will it actually be done? Give me a date, not a range. I will hold you to it.",
    rewriteDialogue:
      "Post it in the channel now. One paragraph, the blocker and the date. Everyone needs to see it.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "remote",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Jordan interrupted the stand-up to demand a straight answer about a missed deadline, rejecting a general status update. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan's interruption, demand for a straight answer, and rejection of a status update are classic direct communication behaviours. The focus is entirely on accountability and outcomes.",
          observation:
            "Notice how Jordan distinguishes between a 'straight answer' and a 'status update'. Direct communicators want the bottom line, not a progress narrative.",
          coachingTip:
            "In virtual meetings, direct communicators often cut through the agenda to get to what matters most. Match their pace by leading with the answer, then adding context only if asked.",
          styleContext:
            "Direct communicators can seem blunt in video calls, but they see it as respecting everyone's time. They would rather address the issue head-on than let the stand-up run over.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both direct and analytical communicators care about deadlines, but an analytical person would ask for root cause data and a breakdown of remaining tasks rather than simply demanding a completion date.",
          observation:
            "Jordan is not interested in investigating why the delay happened in detail. The focus is purely on when it will be finished.",
          coachingTip:
            "If someone asks 'show me the data behind the delay', they are likely analytical. If they say 'just tell me when it will be done', that points to direct.",
          styleContext:
            "Direct and analytical styles both track deadlines, but direct communicators focus on commitments while analytical communicators focus on understanding the underlying causes.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan showed no concern for how the team felt about the interruption and made no effort to build rapport. This is task-focused, not people-focused communication.",
          observation:
            "A supportive or expressive communicator would be more likely to check in with the person presenting before raising a concern, or frame it more gently.",
          coachingTip:
            "Ask yourself: is this person focused on results, ideas, people, or process? Jordan's laser focus on the missed deadline and demand for a commitment clearly signals a results orientation.",
          styleContext:
            "Direct communicators prioritise efficiency in virtual meetings. They will interrupt if they believe the conversation is avoiding the key issue.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan wants a specific completion date, not a range. The rest of the team is watching on the call. How do you respond?",
      options: [
        {
          id: "s73-opt-a",
          text: "The blocker is a dependency on the payments team. I have escalated it this morning and they have confirmed a fix by Thursday. The migration will be complete by Friday close of play. I will confirm in the channel.",
          score: 10,
          result: "strong",
          explanation:
            "This gives Jordan exactly what was asked for: a specific cause, a specific date, and a concrete next step. No hedging, no apologies. Direct communicators respect this clarity.",
        },
        {
          id: "s73-opt-b",
          text: "We are working on it and it should be sorted in the next couple of days. I will keep you posted on progress.",
          score: 5,
          result: "partial",
          explanation:
            "Too vague. 'Next couple of days' is the range Jordan explicitly rejected, and 'keep you posted' is not a commitment. A direct communicator needs a firm date.",
        },
        {
          id: "s73-opt-c",
          text: "I appreciate the urgency, Jordan, and I know the team has been working really hard on this. There have been a few unexpected complications but everyone is doing their best. Let me have a chat with the developers and come back to you.",
          score: 0,
          result: "weak",
          explanation:
            "This is people-focused and avoids giving the date Jordan demanded. Phrases like 'doing their best' and 'have a chat' will frustrate a direct communicator who wants facts and a commitment.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan wants you to post a one-paragraph message in the team channel summarising the blocker and the resolution date. Write the message in a direct style, leading with the outcome and keeping it tight.",
      targetTraits: ["concise", "outcome-led", "specific-dates", "no-hedging"],
      exampleStrongResponse:
        "API migration update: blocked by a dependency on the payments team fix, confirmed for Thursday. Migration will be complete by Friday close of play. No further risks identified. I will confirm completion in this channel on Friday.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message leads with the key information, includes a specific date, and commits to a follow-up. This is exactly how a direct communicator wants to receive written updates.",
          observation:
            "You kept it to one paragraph and avoided unnecessary preamble. In async channels, this kind of clarity prevents follow-up questions.",
          coachingTip:
            "When posting updates for direct communicators, front-load the conclusion. If they only read the first sentence, they should have the essential information.",
          styleContext:
            "Direct communicators scan channel messages quickly. A concise, factual update earns their trust far more than a lengthy explanation.",
        },
        partial: {
          result: "partial",
          explanation:
            "Decent effort, but your message may include filler phrases or lack a specific date. Check whether you led with the outcome rather than the background.",
          observation:
            "If your message starts with 'Just wanted to give everyone an update', consider cutting that and starting with the actual information.",
          coachingTip:
            "Write your message, then delete any sentence that does not contain a fact, a date, or an action. What remains is what Jordan wants to read.",
          styleContext:
            "In remote team channels, direct communicators appreciate messages they can process in under ten seconds.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too long, too vague, or focuses on reassurance rather than facts. Jordan asked for the blocker and the date, nothing more.",
          observation:
            "Opening with apologies or context about how hard the team has been working signals you have not adapted to the direct style.",
          coachingTip:
            "Try removing the first two sentences of your message entirely. Often the real content starts after the preamble.",
          styleContext:
            "Direct communicators judge async messages by how quickly they deliver the answer. If someone has to scroll, it is too long.",
        },
      },
    },
  },

  // Scenario 74 - Sam Hartley, remote, intermediate
  {
    id: "scenario-74",
    title: "The Async Escalation",
    context:
      "Sam has posted a blunt message in the project Slack channel flagging that the client deliverable is at risk. He has tagged you directly and asked for an immediate response, even though it is outside your working hours in a different timezone.",
    chooseContext:
      "You have replied with an initial assessment and Sam has responded demanding a concrete action plan posted in the channel within the hour.",
    rewriteContext:
      "Sam wants you to draft a message to the client Slack channel confirming the revised delivery timeline. He wants it factual and free of any soft language.",
    characterId: "sam-hartley",
    dialogue:
      "This deliverable is due in 48 hours and I have just found out the data set is incomplete. I do not care what timezone you are in. Fix this or escalate it. Reply in this channel, not in a DM.",
    chooseDialogue:
      "I have read your assessment. It is not enough. Post the action plan here, with owners and deadlines for each step. One hour.",
    rewriteDialogue:
      "Now message the client channel. Tell them the revised date and what we are doing. No apologies, no fluff. Facts only.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "remote",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Sam has posted a blunt message in a shared channel demanding an immediate fix or escalation, insisting on a public reply rather than a private message. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam's insistence on speed, public accountability, and action-oriented language are hallmarks of direct communication. The demand for visibility ('reply in this channel, not in a DM') reflects a preference for transparency and results.",
          observation:
            "Sam is not asking for analysis or a detailed report. The message is structured as a command: fix it or escalate it. This is action-first communication.",
          coachingTip:
            "When someone demands public accountability and immediate action in a shared channel, they are signalling a direct style. Respond with equal urgency and specificity.",
          styleContext:
            "Direct communicators in remote settings often prefer shared channels over DMs because they value transparency. They want everyone to see the commitment being made.",
        },
        partial: {
          result: "partial",
          explanation:
            "Reasonable thought. An analytical communicator might also flag a data problem, but they would ask for a root cause investigation rather than demanding an immediate fix. Sam wants action, not analysis.",
          observation:
            "Notice Sam is not asking 'what caused this?' but rather 'fix it or escalate it'. The focus is on resolution speed, not understanding the problem deeply.",
          coachingTip:
            "Analytical communicators would request data and a methodical assessment. Direct communicators want the shortest path to a solution.",
          styleContext:
            "Both styles are task-focused, but direct communicators prioritise speed of resolution while analytical communicators prioritise thoroughness of understanding.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam showed no concern for your timezone, your workload, or how the message might land emotionally. This is entirely results-driven, not relationship-driven.",
          observation:
            "A supportive or expressive communicator would acknowledge the timezone challenge and frame the request more collaboratively.",
          coachingTip:
            "Consider what the person is optimising for. Sam is optimising for speed and accountability, which points firmly to direct.",
          styleContext:
            "Direct communicators in remote environments can appear harsh in text because they strip away social niceties to focus on the problem.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam wants an action plan with owners and deadlines posted in the shared channel within the hour. How do you respond?",
      options: [
        {
          id: "s74-opt-a",
          text: "Action plan posted below. 1) Data gap identification, owned by me, complete by 14:00 GMT. 2) Supplementary data pull, owned by analytics team, complete by 18:00 GMT. 3) QA and client pack assembly, owned by me, complete by 09:00 GMT tomorrow. Escalation path: if analytics cannot deliver by 18:00, I will pull in the backup data set and flag to you immediately.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Sam's format precisely: clear actions, named owners, specific times, and a contingency. Direct communicators respect structured, commitment-based responses.",
        },
        {
          id: "s74-opt-b",
          text: "I am working on it now and will get the plan together as soon as I can. I think we should be able to sort the data issue by tomorrow morning if all goes well.",
          score: 5,
          result: "partial",
          explanation:
            "Too vague. 'As soon as I can' and 'if all goes well' are hedging phrases that will frustrate Sam. He asked for specific owners and deadlines, not optimistic estimates.",
        },
        {
          id: "s74-opt-c",
          text: "Hi Sam, I understand the pressure and I want to assure you the team is fully committed. Let me have a call with the relevant people and I will come back with a plan that works for everyone.",
          score: 0,
          result: "weak",
          explanation:
            "This is relationship-focused and avoids the specifics Sam demanded. 'Have a call' and 'works for everyone' signal a lack of urgency to a direct communicator who wants written commitments now.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam wants you to message the client Slack channel with the revised delivery date. No apologies, no fluff, facts only. Write the message in a direct style suitable for a client-facing channel.",
      targetTraits: ["factual", "concise", "client-appropriate", "no-apologies"],
      exampleStrongResponse:
        "Revised delivery update: the final data pack will be delivered by 09:00 GMT on Thursday. We identified an incomplete data set and have sourced supplementary data to ensure full coverage. QA is scheduled for Wednesday afternoon. I will confirm delivery in this channel on Thursday morning.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Well done. Your message is factual, includes a clear revised date, and avoids unnecessary apologies or soft language. This is exactly the tone Sam requested for client communication.",
          observation:
            "You struck the right balance between being direct and remaining professional for a client audience. The message is confident without being abrupt.",
          coachingTip:
            "In client-facing channels, direct style means leading with the revised commitment and briefly stating what you are doing to deliver. Clients, like direct communicators, want confidence and clarity.",
          styleContext:
            "Direct communicators believe that factual, confident updates build more client trust than apologetic ones. They see apologies as undermining credibility.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message may include unnecessary softening or lack a specific date. Check whether you stated the revised timeline clearly in the first sentence.",
          observation:
            "If you opened with 'We wanted to let you know' or included phrases like 'we are hoping to', those weaken the message for a direct audience.",
          coachingTip:
            "For client-facing messages in a direct style, state the new date first, then briefly explain what is being done. Remove any language that hedges the commitment.",
          styleContext:
            "Sam wants the client to see a team that is in control. Hedging language suggests uncertainty, which is the opposite of what direct communicators want to project.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message likely opens with an apology or includes too much context. Sam explicitly said 'no apologies, no fluff'. Revisit the brief and strip it back to facts.",
          observation:
            "Starting with 'We sincerely apologise for the delay' is exactly what Sam told you not to do. This signals you have not adapted to the direct style.",
          coachingTip:
            "Write the message, then search for words like 'sorry', 'unfortunately', 'hoping', and 'should'. Delete any sentence containing those words and see if the message improves.",
          styleContext:
            "Direct communicators see over-apologising as a waste of the reader's time. In their view, the best apology is a clear plan and a firm commitment.",
        },
      },
    },
  },

  // Scenario 75 - Alex Tran, remote, advanced
  {
    id: "scenario-75",
    title: "The Cross-Timezone Crunch",
    context:
      "You are leading a virtual project sync across three timezones. Alex has joined from Singapore and has immediately challenged the proposed timeline, stating that the APAC team cannot absorb a scope increase without a revised deadline.",
    chooseContext:
      "Alex has rejected your initial compromise and is now demanding that you either reduce scope or extend the deadline. She wants a decision made on this call, not deferred to another meeting.",
    rewriteContext:
      "Alex has asked you to draft the follow-up message to all three regional leads confirming the agreed scope change and new deadline. She wants it sent before the call ends.",
    characterId: "alex-tran",
    dialogue:
      "I have looked at the numbers. The APAC team cannot deliver this additional scope within the current timeline. Either cut the scope or move the deadline. I need a decision now, not another meeting to discuss it.",
    chooseDialogue:
      "That is not a decision, it is a deferral. Pick one: reduce scope by 20% or extend by five working days. We are not leaving this call without an answer.",
    rewriteDialogue:
      "Draft the message to all three leads now. Include the decision, the new deadline, and who owns what. I want it in their inboxes before we hang up.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "remote",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Alex has presented the capacity constraint, offered two clear options, and demanded a decision on the call rather than deferring. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex's approach is textbook direct: she has done the analysis, distilled it into two options, and is forcing a decision. There is no interest in exploring alternatives or gathering more input.",
          observation:
            "The phrase 'not another meeting to discuss it' reveals Alex's direct preference for decisive action over prolonged deliberation.",
          coachingTip:
            "When someone presents a binary choice and insists on an immediate decision, they are communicating in a direct style. Respond decisively rather than suggesting further exploration.",
          styleContext:
            "Direct communicators in cross-timezone calls are acutely aware of scheduling difficulties. They push for decisions on the call because they know getting everyone together again is costly.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Alex does reference data ('I have looked at the numbers'), which can appear analytical. However, she uses the data to force a decision rather than to request further investigation.",
          observation:
            "An analytical communicator would want to explore the data in detail and consider multiple options. Alex has already completed that step and is presenting conclusions.",
          coachingTip:
            "Watch what the person does with data. Analytical communicators explore it; direct communicators use it as leverage for a quick decision.",
          styleContext:
            "Direct communicators often do their analysis before the meeting so they can push for resolution during the meeting. The data supports the demand, it is not the focus.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex is not seeking consensus or trying to maintain harmony. She is forcing a binary decision with a deadline, which is fundamentally results-oriented.",
          observation:
            "A supportive communicator would suggest exploring options that work for all regions. An expressive communicator might rally the group around a vision. Alex is doing neither.",
          coachingTip:
            "Consider what the person wants to leave the meeting with. Alex wants a decision. Supportive communicators want agreement. Expressive communicators want energy. Analytical communicators want data.",
          styleContext:
            "Direct communicators view virtual meetings as decision-making sessions. If no decision is made, they consider the meeting a failure.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex has given you two options: reduce scope by 20% or extend by five working days. She will not leave the call without an answer. How do you respond?",
      options: [
        {
          id: "s75-opt-a",
          text: "We extend by five working days. The full scope is critical to the client commitment and cutting 20% creates a bigger risk downstream. I will confirm the new deadline with all three leads in a follow-up message within the next ten minutes.",
          score: 10,
          result: "strong",
          explanation:
            "This is a clear, reasoned decision with a rationale and an immediate next step. Alex will respect the decisiveness and the commitment to a fast follow-up.",
        },
        {
          id: "s75-opt-b",
          text: "I think we probably need to extend, but I would like to check with a few stakeholders first before making that call. Can I come back to you by end of day?",
          score: 5,
          result: "partial",
          explanation:
            "Alex explicitly said she does not want another deferral. 'Check with stakeholders' and 'come back to you' are the exact behaviours she is trying to avoid. The instinct to extend is right, but the lack of commitment undermines it.",
        },
        {
          id: "s75-opt-c",
          text: "I hear you, Alex, and I think both options have merit. Why do we not get input from the other regional leads and find a solution that everyone is comfortable with? I want to make sure nobody feels steamrolled.",
          score: 0,
          result: "weak",
          explanation:
            "This is consensus-seeking and avoids making the decision Alex demanded. 'Find a solution everyone is comfortable with' is the opposite of what a direct communicator wants in a time-pressured call.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex wants you to draft a message to all three regional leads confirming the scope decision and new deadline before the call ends. Write the message in a direct style with clear ownership and dates.",
      targetTraits: ["decisive", "structured", "specific-owners", "immediate"],
      exampleStrongResponse:
        "Decision confirmed on today's cross-region sync: we will deliver the full scope with a five-day extension. New deadline: Friday 28 March. Ownership: EMEA lead, data integration by 21 March. APAC lead, testing and validation by 26 March. Americas lead, client review pack by 27 March. I will track progress in the shared channel daily. Any blockers to be raised immediately, not held for the next sync.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Outstanding. Your message is decisive, structured, and assigns clear ownership with specific dates. This is exactly the kind of follow-up that direct communicators value.",
          observation:
            "You included the decision, the new deadline, and individual responsibilities. This leaves no room for ambiguity across the three regions.",
          coachingTip:
            "In cross-timezone remote work, direct communicators want written confirmation that eliminates any need for a follow-up call. Your message achieves that.",
          styleContext:
            "Direct communicators treat follow-up messages as contracts. If it is written down with names and dates, it is a commitment, not a suggestion.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message captures the decision but may lack specific ownership or dates for each region. Check whether each lead knows exactly what they own and by when.",
          observation:
            "If your message says 'we will all work together to deliver by the new date', it lacks the individual accountability Alex expects.",
          coachingTip:
            "For direct communicators, group ownership means no ownership. Assign each deliverable to a named person with a specific date.",
          styleContext:
            "Direct communicators in remote environments rely on written commitments because they cannot check in casually. Make your message the single source of truth.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is too soft, too vague, or reopens the discussion rather than confirming the decision. Alex wanted this settled on the call.",
          observation:
            "If your message includes phrases like 'subject to further discussion' or 'let me know your thoughts', you have undermined the decision that was just made.",
          coachingTip:
            "A follow-up message after a direct communicator's call should read like meeting minutes, not a consultation. State what was decided and who does what.",
          styleContext:
            "Direct communicators become frustrated when decisions made in meetings are softened or reopened in follow-up messages. Confirm, do not consult.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (76-78)
  // ============================================

  // Scenario 76 - Priya Sharma, remote, foundation
  {
    id: "scenario-76",
    title: "The Virtual Brainstorm Buzz",
    context:
      "You are facilitating a virtual brainstorming session on Teams. Priya has joined with her camera on and is already sharing ideas before the session has officially started, asking everyone to turn their cameras on too.",
    chooseContext:
      "Priya has generated a whiteboard full of ideas and is now asking you to pick the most exciting one to develop further. She is feeding off the group's energy.",
    rewriteContext:
      "Priya has asked you to post a summary of the brainstorm in the team channel that captures the energy and excitement of the session, not just the action points.",
    characterId: "priya-sharma",
    dialogue:
      "Oh, I love this. Can everyone turn their cameras on? I want to see your faces when I share this idea. Right, so imagine we completely rethink the onboarding flow. What if we made it feel like a story, not a checklist? I have got about ten ideas already, who wants to build on them?",
    chooseDialogue:
      "These are all brilliant. But which one gets you the most excited? I want us to pick the one that makes us think 'yes, this is going to be amazing' and run with it. Who is in?",
    rewriteDialogue:
      "Do not just list the action points, please. I want the channel to feel the energy from this session. Write it like we are inviting people into something exciting, not sending them homework.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "remote",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya asked everyone to turn cameras on, shared ideas enthusiastically before the session started, and wants to build on ideas collaboratively. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya's enthusiasm, desire for visual connection, and focus on energy and excitement are classic expressive communication traits. She is driven by ideas and the buzz of collaboration.",
          observation:
            "Notice Priya's language: 'I love this', 'imagine', 'amazing'. Expressive communicators use emotionally charged, visionary language to energise a group.",
          coachingTip:
            "When someone in a virtual meeting wants cameras on and starts sharing ideas before the agenda begins, they are likely expressive. Match their energy and build on their ideas.",
          styleContext:
            "Expressive communicators find virtual meetings challenging when cameras are off and energy is low. They thrive on visual cues and spontaneous interaction.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both expressive and supportive communicators value people and connection, but Priya is focused on ideas and excitement rather than making sure everyone feels included. Her energy is about innovation, not harmony.",
          observation:
            "A supportive communicator would ask 'has everyone had a chance to share?' Priya is asking 'who wants to build on my ideas?' The focus is on creative momentum, not inclusion.",
          coachingTip:
            "Expressive communicators want to create energy. Supportive communicators want to create safety. Watch whether the person is rallying or checking in.",
          styleContext:
            "Both styles are people-oriented, but expressive leans towards inspiration and vision while supportive leans towards consensus and care.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya is not focused on data, process, or bottom-line outcomes. Her communication is driven by enthusiasm, vision, and creative collaboration.",
          observation:
            "A direct communicator would ask 'what is the decision?' An analytical communicator would ask 'what does the data say?' Priya is asking 'what excites us?'",
          coachingTip:
            "Consider the emotional temperature of the communication. Priya is generating warmth and excitement, which is a clear expressive trait.",
          styleContext:
            "Expressive communicators bring energy to virtual meetings that can otherwise feel flat. They use storytelling, enthusiasm, and visual language to engage the group.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya wants to pick the most exciting idea and run with it. She is asking who is in. How do you respond?",
      options: [
        {
          id: "s76-opt-a",
          text: "I love the onboarding-as-a-story concept. It feels completely fresh and I can already see how it would change the new starter experience. Let us build on that one. Priya, what if you sketched out the first three chapters of that journey and we regroup tomorrow to develop it further?",
          score: 10,
          result: "strong",
          explanation:
            "This matches Priya's energy, validates her favourite idea with enthusiasm, and channels it into a creative next step. Expressive communicators thrive when their ideas are embraced and built upon.",
        },
        {
          id: "s76-opt-b",
          text: "These are good ideas. Let me take them away and evaluate which one is most feasible. I will send you a comparison matrix by end of week.",
          score: 5,
          result: "partial",
          explanation:
            "This is analytical and kills the momentum Priya has built. 'Comparison matrix' and 'end of week' will feel like the energy has been sucked out of the room for an expressive communicator.",
        },
        {
          id: "s76-opt-c",
          text: "Before we pick one, I think we need to make sure we have heard from everyone. Some people might not feel comfortable sharing in this format. Should we do a survey instead?",
          score: 0,
          result: "weak",
          explanation:
            "This is supportive in tone but stalls the creative momentum that Priya is generating. Moving to a survey would feel like putting the brakes on for an expressive communicator who thrives on live interaction.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya wants the brainstorm summary to capture the energy of the session, not just list action points. Write a channel message in an expressive style that invites people into the ideas with enthusiasm.",
      targetTraits: ["energetic", "visionary", "story-driven", "engaging"],
      exampleStrongResponse:
        "What a session! The team came together for a brainstorm and the ideas were flying. The big one: reimagining onboarding as a story, not a checklist. Imagine a new starter's first week feeling like the opening chapter of something they are genuinely excited to be part of. Priya is sketching out the first draft of that journey and we regroup tomorrow to build it out. If you want in, drop a comment below. This one is going to be special.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Brilliant. Your message captures the energy of the brainstorm and invites people to get involved. This is exactly the kind of communication that resonates with expressive colleagues.",
          observation:
            "You used vivid language and painted a picture of the idea rather than just listing it. Expressive communicators want to feel the potential, not just read the facts.",
          coachingTip:
            "When writing for expressive audiences, think of yourself as a storyteller. Set the scene, share the excitement, and invite participation.",
          styleContext:
            "Expressive communicators see channel messages as opportunities to build momentum and community. A flat list of actions feels like a missed opportunity to them.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message includes the key information but may lack the energy Priya was hoping for. Check whether you conveyed the excitement of the session, not just the outcomes.",
          observation:
            "If your message reads like meeting minutes, it has not captured the expressive tone Priya requested. Add some narrative and enthusiasm.",
          coachingTip:
            "Try reading your message aloud. If it sounds like a report, rewrite the opening to sound like you are telling a friend about something exciting that happened.",
          styleContext:
            "Expressive communicators want async messages to carry the same energy as the live conversation. Text is not an excuse to flatten the tone.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message reads as a factual summary or a list of actions. Priya explicitly asked for something that captures the energy, not homework.",
          observation:
            "Starting with 'Action points from today's brainstorm' is the opposite of what Priya wanted. She asked you to make people feel invited, not informed.",
          coachingTip:
            "Before listing any actions, write one sentence that captures why the session was exciting. Lead with that feeling, then weave the actions into the narrative.",
          styleContext:
            "Expressive communicators are motivated by enthusiasm and vision. A dry summary tells them their energy was not valued.",
        },
      },
    },
  },

  // Scenario 77 - Marcus Webb, remote, intermediate
  {
    id: "scenario-77",
    title: "The Virtual Onboarding Welcome",
    context:
      "You are virtually onboarding a new team member and Marcus, their assigned buddy, has joined the video call. Marcus is keen to make the new starter feel welcomed and excited about joining the team.",
    chooseContext:
      "Marcus has been introducing the new starter to team culture and is now asking you to share a story about a project you are proud of to help the new person feel the team's energy.",
    rewriteContext:
      "Marcus has asked you to write a welcome message in the team Slack channel introducing the new starter in a way that makes them feel part of something exciting.",
    characterId: "marcus-webb",
    dialogue:
      "Welcome aboard! You are going to love it here. This team does not just deliver projects, we create things that actually change how people work. Tell you what, let me introduce you to a few people who will blow your mind. And later, I want to hear your wildest ideas, because trust me, we will actually listen.",
    chooseDialogue:
      "Go on, share that story about the customer portal project. The one where we completely reimagined the user journey. I want our new starter to hear what this team is capable of when we get creative.",
    rewriteDialogue:
      "Write the welcome message for the channel. But make it personal. I do not want 'please welcome our new colleague'. I want people to actually want to reach out and say hello.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "remote",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Marcus welcomed the new starter with big energy, promised introductions to inspiring colleagues, and invited the new person to share their 'wildest ideas'. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus's enthusiasm, use of vivid language ('blow your mind', 'wildest ideas'), and focus on inspiration and creativity are hallmarks of expressive communication.",
          observation:
            "Marcus is not just welcoming the new person, he is selling the team's energy and culture. Expressive communicators turn routine moments into memorable experiences.",
          coachingTip:
            "When someone frames onboarding as an exciting journey rather than a process, they are communicating expressively. Match their energy by sharing stories, not procedures.",
          styleContext:
            "Expressive communicators see onboarding as a first impression of the team's culture. They want new starters to feel excited, not just informed.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both expressive and supportive communicators care about making new people feel welcome, but Marcus is focused on inspiration and excitement rather than safety and belonging.",
          observation:
            "A supportive communicator would say 'we want you to feel comfortable and supported'. Marcus says 'we want to hear your wildest ideas'. The energy is about creative potential, not emotional safety.",
          coachingTip:
            "Expressive welcome = 'this is going to be amazing'. Supportive welcome = 'we are here for you'. Watch for the difference.",
          styleContext:
            "Both styles create warm environments, but expressive warmth comes from shared excitement while supportive warmth comes from shared care.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus is not focused on targets, timelines, or data. His communication is driven by energy, stories, and creative vision.",
          observation:
            "A direct communicator would say 'here is your onboarding plan'. An analytical communicator would walk through the process step by step. Marcus is doing neither.",
          coachingTip:
            "Consider the emotional register. Marcus is using language designed to inspire and excite, which is a clear expressive trait.",
          styleContext:
            "Expressive communicators use onboarding moments to build emotional investment in the team. They believe first impressions set the tone for everything.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus wants you to share a story about the customer portal project to inspire the new starter. How do you respond?",
      options: [
        {
          id: "s77-opt-a",
          text: "So we had this customer portal that was functional but completely uninspiring. The team got together and said, what if we started from scratch and designed it around what customers actually feel when they log in? We threw out the template, ran some creative workshops, and built something that the client said was the best digital experience they had ever had. That is the kind of thing this team does.",
          score: 10,
          result: "strong",
          explanation:
            "This is a story told with energy and narrative arc, exactly what Marcus asked for. It paints a picture and ends with a rallying statement. Expressive communicators love this kind of storytelling.",
        },
        {
          id: "s77-opt-b",
          text: "The customer portal project was a success. We delivered on time and the client was satisfied with the results. It was a good team effort.",
          score: 5,
          result: "partial",
          explanation:
            "This is factual but flat. Marcus wanted a story that shows what the team is capable of, not a project summary. An expressive communicator would find this underwhelming.",
        },
        {
          id: "s77-opt-c",
          text: "I can share the project report if you would like. It includes the KPIs we hit and the methodology we followed. I can also send the post-implementation review.",
          score: 0,
          result: "weak",
          explanation:
            "This is analytical and completely misses the moment Marcus is trying to create. A new starter does not need a report; they need a reason to be excited about the team.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus wants you to write a personal, engaging welcome message for the new starter in the team Slack channel. Make it something that encourages people to reach out and say hello. Write it in an expressive style.",
      targetTraits: ["personal", "warm", "story-driven", "inviting"],
      exampleStrongResponse:
        "Team, meet Jamie! Jamie joins us from the fintech world and brings a passion for user experience that is going to raise the bar for all of us. In our onboarding chat today, Jamie shared some ideas that genuinely had us rethinking how we approach our client portals. If you want to know what fresh thinking looks like, drop Jamie a message. Trust me, you will want this person on your next project.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is personal, energetic, and makes the new starter sound like someone everyone should want to connect with. This is exactly the kind of introduction that expressive communicators value.",
          observation:
            "You went beyond the job title and shared something personal and inspiring. That is what turns a flat announcement into a genuine welcome.",
          coachingTip:
            "When writing introductions for expressive colleagues, focus on what makes the person interesting, not just what role they fill. Make it human.",
          styleContext:
            "Expressive communicators believe that how you introduce someone sets the tone for how the team will relate to them. Make it count.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message includes the basics but may lack the personal touch Marcus wanted. Check whether you said something specific about the person, not just their role.",
          observation:
            "If your message could apply to any new starter by swapping the name, it is not personal enough for an expressive communicator.",
          coachingTip:
            "Add one specific detail from the onboarding conversation that makes the new person come alive to the reader.",
          styleContext:
            "Expressive communicators want channel introductions to spark conversations, not just inform. Include something that invites a response.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message reads like a standard HR announcement. Marcus explicitly asked you not to write 'please welcome our new colleague'. He wanted something personal and inviting.",
          observation:
            "If your message lists the person's start date, role, and department without any personal colour, it has missed the brief entirely.",
          coachingTip:
            "Try writing the message as if you are introducing a friend to your other friends. What would you say that would make them want to get to know this person?",
          styleContext:
            "Expressive communicators see generic introductions as a missed opportunity. Every new person is a chance to energise the team.",
        },
      },
    },
  },

  // Scenario 78 - Nina Okafor, remote, advanced
  {
    id: "scenario-78",
    title: "The Remote Retro Revival",
    context:
      "You are facilitating a remote team retrospective on Zoom. Energy has been low across the last few sprints and Nina has suggested shaking up the format to re-energise the team.",
    chooseContext:
      "Nina has pitched a creative retro format using storytelling and metaphors instead of the usual 'what went well, what did not' structure. She is looking for your support to try it.",
    rewriteContext:
      "Nina has asked you to write the Slack invitation for the revamped retro, framing it as something the team will genuinely look forward to rather than another meeting to endure.",
    characterId: "nina-okafor",
    dialogue:
      "Honestly, the standard retro format is killing us. Everyone sits there on mute giving one-word answers. What if we did something completely different? I am thinking each person tells the story of their sprint as a movie genre. Comedy, thriller, drama, whatever fits. It gets people talking, it gets people laughing, and we still get the insights. Who is brave enough to try it?",
    chooseDialogue:
      "Come on, let us just try it once. If it falls flat, we go back to the old way. But I promise you, once people start telling their sprint story as a thriller, you will hear things they would never say in a normal retro. It unlocks honesty through creativity. Are you in?",
    rewriteDialogue:
      "Write the Slack invite so it sounds like something people actually want to attend. If it reads like 'Sprint 14 retrospective, Thursday 2pm', nobody will show up with any energy. Make it irresistible.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "remote",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Nina criticised the standard retro format, proposed a creative alternative using storytelling and movie genres, and challenged the team to be 'brave enough'. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina's desire to shake things up, her creative framing using storytelling, and her challenge to be brave are all classic expressive traits. She sees the retro as an opportunity for energy and connection, not just process improvement.",
          observation:
            "Notice how Nina frames the problem emotionally ('killing us') and the solution creatively ('movie genre'). Expressive communicators instinctively reach for narrative and metaphor.",
          coachingTip:
            "When someone proposes replacing a structured process with a creative one and challenges the team to take a risk, they are communicating expressively. Support their energy while ensuring the output still delivers value.",
          styleContext:
            "Expressive communicators often find standard meeting formats draining because they restrict spontaneous, creative interaction. They thrive when given space to reimagine how work gets done.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both expressive and supportive communicators care about team energy, but Nina is not focused on making people feel safe. She is focused on making the session creative and exciting, even using the word 'brave'.",
          observation:
            "A supportive communicator would ask 'how can we make this safer for quieter voices?' Nina is asking 'how can we make this more exciting and honest through creativity?'",
          coachingTip:
            "Expressive communicators energise through inspiration and risk-taking. Supportive communicators energise through safety and inclusion. Note which lever the person is pulling.",
          styleContext:
            "Nina wants to unlock honesty through creativity, not through psychological safety. That is a key distinction between expressive and supportive approaches.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina is not asking for data, process improvements, or efficiency gains. Her focus is on energy, creativity, and human connection through storytelling.",
          observation:
            "A direct communicator would say 'the retro is a waste of time, cut it to 15 minutes'. An analytical communicator would suggest a new framework. Nina suggests a story.",
          coachingTip:
            "Consider what the person is trying to change. Nina is not trying to improve the output of the retro, she is trying to change how it feels. That is an expressive priority.",
          styleContext:
            "Expressive communicators believe that how people feel in a meeting determines the quality of what they contribute. Fix the energy and the insights follow.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina is pitching her creative retro format and asking for your support. She has promised that if it falls flat, you can go back to the old way. How do you respond?",
      options: [
        {
          id: "s78-opt-a",
          text: "I love the idea. Let us try it this Thursday. I will kick things off by telling my sprint story first so people see it is safe to be creative. If we get even half the energy you are describing, it will be worth it. Let us make the invite something people actually want to open.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Nina's energy, commits to the idea, and offers to lead by example. Volunteering to go first shows you understand the expressive value of creative risk-taking.",
        },
        {
          id: "s78-opt-b",
          text: "It is an interesting idea but I am not sure the whole team will be comfortable with it. Maybe we could test it with a smaller group first and see how it goes before rolling it out.",
          score: 5,
          result: "partial",
          explanation:
            "This is cautious and risk-averse. While the concern is valid, the hedging will dampen Nina's enthusiasm. An expressive communicator wants a collaborator, not a gatekeeper.",
        },
        {
          id: "s78-opt-c",
          text: "I think the current format works fine, we just need better facilitation. Let me review some best practice retro frameworks and suggest some improvements to the existing structure.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses Nina's creative approach entirely and defaults to process improvement. An expressive communicator will feel shut down by a response that treats their idea as unnecessary.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina wants you to write a Slack invitation for the revamped retro that makes it sound irresistible. Write it in an expressive style that builds anticipation and makes people want to attend.",
      targetTraits: ["creative", "enticing", "playful", "energising"],
      exampleStrongResponse:
        "Forget everything you know about retros. This Thursday at 2pm, we are trying something completely different. Instead of sticky notes and awkward silences, we want you to tell the story of your sprint as a movie genre. Was it a thriller? A comedy? An unexpected plot twist? Come ready to share your story, laugh a bit, and discover what the team has really been going through. Cameras on, energy up. See you there.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Fantastic. Your invitation builds curiosity and makes the retro sound like an event, not a meeting. This is exactly the tone Nina was after.",
          observation:
            "You used questions, vivid language, and a sense of fun to create anticipation. Expressive communicators know that how you frame a meeting determines how people show up.",
          coachingTip:
            "When writing invitations for expressive colleagues, think of yourself as a promoter. You are not informing people about a meeting, you are selling them an experience.",
          styleContext:
            "Expressive communicators believe that the invitation sets the energy for the session. A boring invite leads to a boring meeting.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message includes the key details but may lack the playful energy Nina wanted. Check whether it sounds like an invitation or an announcement.",
          observation:
            "If your message includes the words 'retrospective', 'agenda', or 'mandatory', it probably does not have the tone Nina is looking for.",
          coachingTip:
            "Try reading your message as if you received it. Would you be curious? Would you look forward to it? If not, add more narrative and less logistics.",
          styleContext:
            "Expressive communicators judge meeting invitations by whether they spark interest. The logistics can go in the calendar entry; the Slack message should spark curiosity.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message reads like a standard meeting invitation. Nina explicitly said that 'Sprint 14 retrospective, Thursday 2pm' would not work. She wanted something irresistible.",
          observation:
            "If your message leads with the date, time, and agenda, it has missed the brief. Nina wanted you to lead with the feeling.",
          coachingTip:
            "Delete the first two lines of your message and start with a question or a bold statement. 'What if your sprint was a movie?' is more inviting than 'Please join us for the retro'.",
          styleContext:
            "Expressive communicators see standard meeting invitations as missed opportunities. Every piece of communication is a chance to build culture and energy.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (79-81)
  // ============================================

  // Scenario 79 - Tom Brennan, remote, foundation
  {
    id: "scenario-79",
    title: "The Disengaged Camera",
    context:
      "You are on a video call with Tom to check in on a team member who has seemed disengaged in recent remote meetings. Tom has noticed the same pattern and wants to discuss how to approach the situation with care.",
    chooseContext:
      "Tom has shared his observations and is now asking you how you think the team should approach the conversation with the disengaged colleague without making them feel singled out.",
    rewriteContext:
      "Tom has asked you to draft a gentle, informal Slack message to the disengaged team member suggesting a casual one-to-one catch-up, without making it feel like a performance conversation.",
    characterId: "tom-brennan",
    dialogue:
      "I have noticed that Jamie has had their camera off for the last three stand-ups and has not been contributing much. I do not want to jump to conclusions, though. People go through things. I was thinking we should find a way to check in that feels natural, not like we are calling them out. What do you think?",
    chooseDialogue:
      "I agree, but I really want to make sure we get the tone right. If Jamie feels like they are being monitored, it could make things worse. How do we create a space where they feel comfortable being honest about what is going on?",
    rewriteDialogue:
      "Could you draft a message to Jamie? Keep it light and friendly. Maybe suggest a coffee chat or something informal. I just want them to know someone has noticed and cares, without any pressure.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "remote",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Tom has noticed a colleague's disengagement but wants to approach the situation with care, avoiding making them feel singled out or monitored. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom's focus on the colleague's feelings, his desire to avoid causing harm, and his emphasis on creating a safe space are all hallmarks of supportive communication.",
          observation:
            "Notice Tom's language: 'people go through things', 'feels natural', 'not calling them out'. Every sentence is oriented around the other person's emotional experience.",
          coachingTip:
            "When someone prioritises how a message will land emotionally over what action to take, they are communicating in a supportive style. Honour their concern for people.",
          styleContext:
            "Supportive communicators are highly attuned to how remote work can amplify feelings of isolation. They instinctively look for ways to connect without creating pressure.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Both supportive and expressive communicators are people-oriented, but Tom is not trying to energise Jamie. He is trying to protect Jamie's feelings and create psychological safety.",
          observation:
            "An expressive communicator might suggest organising a fun team activity to lift everyone's spirits. Tom is focused on a careful, private, one-to-one approach.",
          coachingTip:
            "Supportive communication is about safety and care. Expressive communication is about energy and connection. Tom is clearly prioritising safety.",
          styleContext:
            "Both styles value relationships, but supportive communicators approach sensitive situations more cautiously, prioritising the individual's comfort over group energy.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom is not focused on productivity, deadlines, or data. His entire focus is on the wellbeing of a colleague and how to approach a sensitive conversation with care.",
          observation:
            "A direct communicator would say 'Jamie needs to turn their camera on and participate'. Tom is asking 'how do we make Jamie feel safe enough to tell us what is going on?'",
          coachingTip:
            "Consider what the person is optimising for. Tom is optimising for emotional safety and trust, which firmly signals supportive communication.",
          styleContext:
            "Supportive communicators see disengagement as a signal that someone needs support, not accountability. Their first instinct is always to check in, not to correct.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom wants to create a space where the disengaged colleague feels comfortable being honest. How do you respond?",
      options: [
        {
          id: "s79-opt-a",
          text: "What if we send Jamie a casual message, something like 'Fancy a virtual coffee this week?' No agenda, no pressure. Just create an opening for them to talk if they want to. And if they are not ready, that is fine too. The important thing is they know the door is open.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Tom's supportive approach perfectly. It is low-pressure, respects Jamie's autonomy, and creates space without demanding anything. Supportive communicators value this kind of gentle outreach.",
        },
        {
          id: "s79-opt-b",
          text: "I think we should schedule a formal check-in and ask Jamie directly what is going on. It is better to address it now before it affects team performance.",
          score: 5,
          result: "partial",
          explanation:
            "This is too direct for the situation Tom described. A formal check-in could feel like exactly the kind of monitoring Tom wants to avoid. The intent is right, but the approach is too forceful.",
        },
        {
          id: "s79-opt-c",
          text: "Jamie's engagement metrics have dropped 40% over the last two sprints. I think we need to document this and flag it in the next performance review cycle.",
          score: 0,
          result: "weak",
          explanation:
            "This is analytical and procedural, completely at odds with Tom's supportive approach. Jumping to performance documentation when Tom is asking for care will feel cold and dismissive.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom wants you to draft a casual, friendly Slack message to the disengaged colleague suggesting an informal catch-up. No pressure, no performance undertones. Write it in a supportive style.",
      targetTraits: ["warm", "low-pressure", "genuine", "no-agenda"],
      exampleStrongResponse:
        "Hey Jamie, it has been a while since we had a proper chat outside of stand-ups. Fancy a virtual coffee this week? No agenda, just thought it would be nice to catch up. Let me know what works for you, or no worries if this is a busy week.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Well done. Your message is warm, casual, and genuinely pressure-free. It gives Jamie the option to engage without feeling obligated. This is exactly the tone supportive communicators value.",
          observation:
            "You gave Jamie an easy way to decline ('no worries if this is a busy week'), which is crucial. Supportive communication always includes an escape route so the other person never feels trapped.",
          coachingTip:
            "When reaching out to someone who may be struggling, the most supportive thing you can do is make it easy for them to say no. Paradoxically, that often makes them more likely to say yes.",
          styleContext:
            "Supportive communicators in remote environments are skilled at creating warmth through text. The key is authenticity; the message should sound like you, not like a template.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message has the right idea but may feel slightly formal or agenda-driven. Check whether you included any language that hints at a performance concern.",
          observation:
            "If your message mentions 'checking in on how things are going' or 'wanted to touch base about the project', it may feel like a disguised performance conversation.",
          coachingTip:
            "Remove any reference to work performance. The message should read as one colleague genuinely wanting to chat with another, nothing more.",
          styleContext:
            "Supportive communicators are skilled at reading between the lines, and so are their colleagues. If the message has a hidden agenda, people will sense it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message likely feels too formal, too direct, or carries performance undertones. Tom explicitly asked for something light and pressure-free.",
          observation:
            "If your message says 'I have noticed you have been quiet in stand-ups' or 'is everything okay with your workload?', it is doing the opposite of what Tom asked.",
          coachingTip:
            "Imagine you are messaging a friend you have not spoken to in a while. That is the tone. No observations about their behaviour, no implied concern. Just genuine connection.",
          styleContext:
            "Supportive communicators know that sometimes the most powerful message is one that says nothing about the problem and everything about the relationship.",
        },
      },
    },
  },

  // Scenario 80 - Leah Morgan, remote, intermediate
  {
    id: "scenario-80",
    title: "The Remote Conflict Bridge",
    context:
      "Two team members have had a disagreement in a shared Slack channel about the approach to a client project. Leah has asked you to join a video call to discuss how to resolve it without damaging the working relationship.",
    chooseContext:
      "Leah has explained both perspectives and is now asking you how to bring the two colleagues together for a conversation that feels safe and constructive, not adversarial.",
    rewriteContext:
      "Leah has asked you to draft a Slack message to both colleagues inviting them to a resolution conversation, framed as a collaborative discussion rather than a mediation.",
    characterId: "leah-morgan",
    dialogue:
      "I have spoken to both of them individually and I think they both have valid points. The problem is the channel message came across more harshly than intended and now there is tension. I do not want to take sides. I want to help them find common ground. The most important thing is that they both feel heard.",
    chooseDialogue:
      "I think we need a video call with all three of us, but it cannot feel like a tribunal. How do we set it up so both people walk in feeling safe, not defensive? I want them to leave feeling closer, not further apart.",
    rewriteDialogue:
      "Can you write the message inviting them? Do not call it a mediation or a conflict resolution meeting. Frame it as a chat about the project direction. I want them to show up relaxed, not braced for a difficult conversation.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "remote",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Leah has spoken to both colleagues privately, refused to take sides, and is focused on ensuring both people feel heard and safe. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah's focus on emotional safety, her refusal to take sides, and her desire for both people to feel heard are defining features of supportive communication. She is prioritising the relationship over the task.",
          observation:
            "Notice Leah's language: 'feel heard', 'find common ground', 'closer, not further apart'. Every phrase centres the emotional experience of the people involved.",
          coachingTip:
            "When someone approaches conflict resolution by focusing on how people feel rather than who is right, they are communicating supportively. Honour that by matching their people-first approach.",
          styleContext:
            "Supportive communicators see conflict as a threat to relationships, not just a disagreement about work. Their goal is always to repair and strengthen the bond.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both supportive and expressive communicators care about people, but Leah is not trying to energise or inspire the group. She is trying to protect two people from emotional harm.",
          observation:
            "An expressive communicator might try to reframe the conflict as creative tension and channel it into something positive. Leah's approach is quieter and more protective.",
          coachingTip:
            "Supportive conflict resolution focuses on safety and healing. Expressive conflict resolution focuses on reframing and energy. Leah is clearly in protective mode.",
          styleContext:
            "Supportive communicators often work behind the scenes to prepare the ground for difficult conversations, speaking to people individually before bringing them together.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah is not interested in determining who is right, reaching a fast decision, or analysing the root cause. She is focused entirely on the wellbeing of two people.",
          observation:
            "A direct communicator would say 'sort it out between yourselves'. An analytical communicator would review the Slack thread objectively. Leah is doing neither.",
          coachingTip:
            "Consider what outcome the person is working towards. Leah wants a restored relationship, not a resolved dispute. That is the supportive priority.",
          styleContext:
            "Supportive communicators measure the success of a conflict resolution by how the people involved feel afterwards, not by whether the 'right' answer was reached.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah wants to set up a video call that feels safe, not adversarial. How do you suggest approaching it?",
      options: [
        {
          id: "s80-opt-a",
          text: "Let us frame it as a project alignment chat. We open by acknowledging that both approaches have strengths, then give each person uninterrupted time to share their perspective. We do not need to pick a winner. The goal is for both people to feel understood, and then we look for where their ideas overlap. We close by agreeing on one thing they both value.",
          score: 10,
          result: "strong",
          explanation:
            "This creates the safe, balanced environment Leah is looking for. Equal airtime, no judgement, and a focus on shared values rather than right versus wrong. Supportive communicators will appreciate this thoughtful approach.",
        },
        {
          id: "s80-opt-b",
          text: "Let us just get them on a call and hash it out. They are professionals. Sometimes you just need to clear the air and move on.",
          score: 5,
          result: "partial",
          explanation:
            "This is too direct for Leah's approach. 'Hash it out' implies a confrontation, which is the opposite of the safe space Leah wants to create. The intent to resolve it is right, but the method is wrong.",
        },
        {
          id: "s80-opt-c",
          text: "I think we should review both proposals objectively against the project criteria and let the data decide. That way nobody's feelings come into it.",
          score: 0,
          result: "weak",
          explanation:
            "This is analytical and ignores the relational damage Leah is concerned about. 'Nobody's feelings come into it' is the opposite of what a supportive communicator wants. The feelings are the point.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah wants you to draft a Slack message to both colleagues inviting them to a conversation about the project direction. Frame it as collaborative, not as mediation. Write it in a supportive style.",
      targetTraits: ["warm", "collaborative", "non-threatening", "inclusive"],
      exampleStrongResponse:
        "Hi both, I have been thinking about the client project and I would love to get your perspectives together in one conversation. You have both shared some strong ideas and I think there is real potential if we explore how they might complement each other. Are you free for a short video call on Thursday? It would be great to hear you both talk through your thinking. Let me know what works.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message frames the conversation as an opportunity rather than a problem. Both colleagues will feel valued and invited, not summoned. This is exactly the tone Leah wanted.",
          observation:
            "You focused on the potential of combining their ideas rather than resolving a dispute. That subtle reframe removes the adversarial dynamic entirely.",
          coachingTip:
            "When writing invitations to potentially sensitive conversations, supportive communicators focus on what people can build together, not what needs to be fixed.",
          styleContext:
            "Supportive communicators know that the language of an invitation determines the energy people bring to the conversation. A collaborative frame leads to collaborative behaviour.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message gets the basics right but may hint at the conflict or feel slightly formal. Check whether either colleague might read it and feel they are being called in for a problem.",
          observation:
            "If your message references the Slack disagreement or uses words like 'resolve', 'address', or 'issue', it may trigger defensiveness.",
          coachingTip:
            "Remove any reference to the previous disagreement. The message should read as a proactive invitation, not a reactive one.",
          styleContext:
            "Supportive communicators are skilled at creating fresh starts. The invitation should feel like a new conversation, not a continuation of the old one.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message likely references the conflict directly or frames the meeting as a resolution session. Leah explicitly asked you to avoid that.",
          observation:
            "If your message says 'following the discussion in the channel' or 'to clear the air', it is doing exactly what Leah wanted to avoid.",
          coachingTip:
            "Pretend the Slack disagreement never happened. Write the invitation as if you are simply keen to hear two smart colleagues share their ideas. That is the reframe Leah needs.",
          styleContext:
            "Supportive communicators understand that labelling a conversation as conflict resolution changes the power dynamic. Keep it light, keep it forward-looking.",
        },
      },
    },
  },

  // Scenario 81 - David Chen, remote, advanced
  {
    id: "scenario-81",
    title: "The Remote Performance Pulse",
    context:
      "You are holding a remote one-to-one with David to discuss a team member whose performance has recently dipped. David is concerned about the individual but wants to handle the situation in a way that supports rather than pressures them.",
    chooseContext:
      "David has shared his worry that the performance dip might be linked to personal circumstances and is asking how to have an honest conversation without overstepping.",
    rewriteContext:
      "David has asked you to draft a one-to-one meeting invitation for the team member that feels like a routine catch-up rather than a performance discussion, so the person arrives feeling relaxed.",
    characterId: "david-chen",
    dialogue:
      "Their output has dropped, yes, but I have a feeling there is something going on behind the scenes. I do not want to be the manager who only notices performance and ignores the person. How do I ask what is really going on without making them feel like they are in trouble? I want to help, not interrogate.",
    chooseDialogue:
      "That is the thing, though. If I go in talking about KPIs, I will lose them immediately. I need to lead with care. But I also need to be honest that I have noticed a change. How do I hold both of those things at once without it feeling like a trap?",
    rewriteDialogue:
      "Write the calendar invite. Make it sound like our regular fortnightly chat, nothing out of the ordinary. I do not want them spending the weekend worrying about what it means.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "remote",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "David is concerned about a team member's performance dip but suspects personal circumstances. He wants to lead with care and avoid making the person feel interrogated. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David's focus on the person behind the performance, his desire to lead with care, and his concern about how the conversation will feel are all defining supportive traits.",
          observation:
            "David's phrase 'I do not want to be the manager who only notices performance and ignores the person' reveals his core belief that people come before metrics. This is the supportive philosophy.",
          coachingTip:
            "When a manager prioritises the emotional experience of a difficult conversation over the conversation's outcome, they are leading with a supportive style. Match their care with empathetic suggestions.",
          styleContext:
            "Supportive communicators see performance conversations as fundamentally about trust. If the person does not feel safe, no useful information will be shared.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both supportive and expressive communicators are people-oriented, but David is not trying to energise or inspire. He is trying to protect and support a vulnerable individual.",
          observation:
            "An expressive communicator might try to lift the person's spirits through enthusiasm. David is focused on creating safety so the person can be honest about what they are going through.",
          coachingTip:
            "Supportive communication in performance contexts is about removing fear. Expressive communication in performance contexts is about building motivation. David is clearly removing fear.",
          styleContext:
            "Supportive communicators believe that the best way to improve performance is to first address what is getting in the way, and that often means caring for the person.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David explicitly rejected a metrics-led approach ('if I go in talking about KPIs, I will lose them'). His focus is entirely on the human side of the situation.",
          observation:
            "A direct communicator would address the performance gap head-on. An analytical communicator would review the data trends. David wants to understand the person first.",
          coachingTip:
            "Consider what the person fears most about the conversation. David fears causing harm. Direct communicators fear wasting time. Analytical communicators fear inaccuracy. The fear reveals the style.",
          styleContext:
            "Supportive communicators in management roles carry a deep sense of responsibility for their team's emotional wellbeing, especially in remote environments where signals are harder to read.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "David wants to have an honest conversation about the performance change while leading with care. How do you suggest he approaches it?",
      options: [
        {
          id: "s81-opt-a",
          text: "Start by asking how they are, genuinely. Let them talk. When you raise the performance change, frame it as something you have noticed, not something you are concerned about. Say something like 'I have noticed a shift recently and I wanted to check in with you, not about the work, but about you.' Give them permission to share as much or as little as they want.",
          score: 10,
          result: "strong",
          explanation:
            "This perfectly balances honesty with care. It names the observation without making it a judgement and gives the person control over how much they share. Supportive communicators will value this approach deeply.",
        },
        {
          id: "s81-opt-b",
          text: "Be upfront about the performance data and ask them what their plan is to get back on track. It is better to be honest now than let it drag on.",
          score: 5,
          result: "partial",
          explanation:
            "This is direct and could work in some contexts, but it ignores David's concern about the person's emotional state. Leading with performance data is exactly what David said he wanted to avoid.",
        },
        {
          id: "s81-opt-c",
          text: "Document the performance issues over the next two weeks and then present the evidence in a structured review. That way the conversation is objective and fact-based.",
          score: 0,
          result: "weak",
          explanation:
            "This is analytical and procedural, exactly the opposite of David's supportive instinct. Waiting two weeks to gather evidence while a colleague is potentially struggling would feel cold to a supportive communicator.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David wants you to draft a calendar invitation for a one-to-one that feels like a routine catch-up, not a performance meeting. Write it in a supportive style so the team member does not spend the weekend worrying.",
      targetTraits: ["routine", "warm", "low-pressure", "genuinely-casual"],
      exampleStrongResponse:
        "Fortnightly catch-up. Hi, just getting our regular chat in the diary. Nothing specific on the agenda from my side, just keen to hear how things are going. Let me know if the time works or if you would prefer a different slot. Speak soon.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Well done. Your invitation reads as genuinely routine and carries no signals of a performance conversation. The team member will open this and feel nothing out of the ordinary.",
          observation:
            "You kept it short, warm, and agenda-free. That is exactly what David needed. The absence of any specific topic is itself a form of reassurance.",
          coachingTip:
            "When supportive communicators ask you to make something feel routine, they mean it. Do not add anything that could trigger anxiety, even well-intentioned phrases like 'I would love to hear how you are doing'.",
          styleContext:
            "Supportive communicators understand that in remote work, a calendar invitation can carry enormous emotional weight. A carefully worded invite can either reassure or alarm.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your invitation is close but may contain subtle signals that something is different about this meeting. Check whether it reads differently from how you would normally invite someone to a routine chat.",
          observation:
            "If you wrote 'I wanted to check in with you' or 'there are a few things I would like to discuss', those phrases can trigger worry, especially for someone who is already struggling.",
          coachingTip:
            "Read your invitation through the eyes of someone who is having a tough time. Would any phrase make them think 'what is this really about?'",
          styleContext:
            "Supportive communicators are hyper-aware of how language lands. In remote work, text is all you have, so every word carries more weight.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your invitation likely signals that this is not a routine meeting. David explicitly asked you to make it feel ordinary so the person does not worry.",
          observation:
            "If your invitation mentions performance, recent work, or anything that deviates from a standard catch-up format, it will have the opposite of the intended effect.",
          coachingTip:
            "Think about what a genuinely routine catch-up invitation looks like. Use that as your template. Anything more specific will stand out.",
          styleContext:
            "Supportive communicators know that sometimes the kindest thing you can do is make a difficult conversation feel like a normal one. The safety is in the ordinariness.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (82-84)
  // ============================================

  // Scenario 82 - Rachel Finch, remote, foundation
  {
    id: "scenario-82",
    title: "The Async Decision Thread",
    context:
      "Rachel has started a detailed Slack thread asking the team to weigh in on a platform migration decision. She has posted a structured comparison of three options with criteria, risk ratings, and cost breakdowns.",
    chooseContext:
      "Several team members have replied with opinions but Rachel is pushing back, asking them to support their preferences with data rather than gut feeling.",
    rewriteContext:
      "Rachel has asked you to summarise the thread's findings into a structured recommendation message for the senior leadership Slack channel.",
    characterId: "rachel-finch",
    dialogue:
      "I have mapped out the three options against seven criteria. Option A scores highest on cost but lowest on scalability. Option C scores highest overall but has a longer implementation window. Before anyone votes, I need everyone to review the comparison table I have attached and base their input on the data, not personal preference.",
    chooseDialogue:
      "I appreciate the input, but saying 'I prefer Option B because it feels right' is not helpful. Can you point to which specific criteria make Option B stronger? I need evidence-based reasoning, not instinct.",
    rewriteDialogue:
      "Summarise the thread for leadership. Lead with the recommendation, then the evidence. Include the scoring matrix and flag the key trade-off between cost and scalability. Keep it structured.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "remote",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel posted a structured comparison table, asked the team to base input on data rather than preference, and pushed back on gut-feeling responses. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel's structured approach, insistence on evidence over opinion, and methodical comparison framework are classic analytical communication traits.",
          observation:
            "Notice how Rachel has mapped options against criteria and assigned scores. Analytical communicators create frameworks for decision-making rather than relying on discussion alone.",
          coachingTip:
            "When someone asks you to 'base input on the data', they are signalling an analytical style. Respond with evidence and reasoning, not opinions or enthusiasm.",
          styleContext:
            "Analytical communicators thrive in async environments because they can share detailed analysis without being interrupted. They use Slack threads as structured decision-making tools.",
        },
        partial: {
          result: "partial",
          explanation:
            "Reasonable. Both analytical and direct communicators are task-focused, but Rachel is not pushing for a quick decision. She wants a thorough, evidence-based evaluation before any decision is made.",
          observation:
            "A direct communicator would say 'pick one and move on'. Rachel is saying 'review the data first, then decide'. The emphasis on process distinguishes analytical from direct.",
          coachingTip:
            "Direct communicators want speed. Analytical communicators want accuracy. Watch whether the person is pushing for a fast decision or a well-supported one.",
          styleContext:
            "Both styles focus on outcomes, but analytical communicators believe that better analysis leads to better outcomes, even if it takes longer.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel is not focused on how people feel about the decision or on generating creative excitement. Her approach is structured, methodical, and evidence-driven.",
          observation:
            "A supportive communicator would check whether everyone is comfortable with the process. An expressive communicator would pitch their favourite option with enthusiasm. Rachel does neither.",
          coachingTip:
            "Consider what the person values most. Rachel values rigour and evidence. That is the core of analytical communication.",
          styleContext:
            "Analytical communicators use async channels to share analysis that would take too long to present verbally. They see written detail as a strength, not a barrier.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel is pushing back on opinion-based responses and asking for evidence-based reasoning. How do you contribute to the thread?",
      options: [
        {
          id: "s82-opt-a",
          text: "Based on the scoring matrix, Option C leads on four of the seven criteria including scalability, which I consider the highest-weighted factor given our three-year growth projections. The longer implementation window (12 weeks versus 8) is a trade-off, but the total cost of ownership over three years is 18% lower. I would recommend Option C with a phased rollout to manage the implementation timeline.",
          score: 10,
          result: "strong",
          explanation:
            "This is structured, data-driven, and references the specific criteria Rachel provided. It shows you have engaged with the analysis and are building on it with your own evidence. Analytical communicators respect this rigour.",
        },
        {
          id: "s82-opt-b",
          text: "I think Option C is the way to go. It just seems like the most future-proof choice and the team would adapt to it well.",
          score: 5,
          result: "partial",
          explanation:
            "The recommendation aligns but lacks the evidence Rachel explicitly requested. 'Seems like' and 'would adapt well' are subjective claims. Rachel needs you to show your working.",
        },
        {
          id: "s82-opt-c",
          text: "Honestly, I trust the team to make the right call on this. Whatever everyone else thinks is fine with me. Let us just go with the majority.",
          score: 0,
          result: "weak",
          explanation:
            "This is supportive and consensus-driven, the opposite of what Rachel needs. Deferring to the group without contributing evidence will frustrate an analytical communicator who values individual reasoning.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel wants you to summarise the Slack thread into a structured recommendation for leadership. Lead with the recommendation, include the scoring matrix findings, and flag the key trade-off. Write it in an analytical style.",
      targetTraits: ["structured", "evidence-based", "balanced", "methodical"],
      exampleStrongResponse:
        "Platform Migration Recommendation\n\nRecommendation: Option C (cloud-native platform)\n\nSummary: Option C scored highest across four of seven evaluation criteria, including scalability (9/10), integration capability (8/10), and long-term cost efficiency (8/10). Key trade-off: implementation timeline is 12 weeks versus 8 weeks for Option A.\n\nScoring overview: Option A, 42/70 overall, strongest on upfront cost. Option B, 38/70 overall, no category leader. Option C, 54/70 overall, strongest on scalability and total cost of ownership.\n\nRisk: the longer implementation window requires a phased rollout. A detailed phase plan is available on request.\n\nNext step: leadership approval by Friday to begin vendor engagement.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is structured, leads with the recommendation, and presents the evidence clearly. The inclusion of the trade-off shows balanced analysis. Analytical stakeholders will find this compelling.",
          observation:
            "You included specific scores and a clear comparison across options. This allows leadership to evaluate your reasoning rather than just accepting your conclusion.",
          coachingTip:
            "When writing for analytical audiences, always show the methodology behind the recommendation. They trust the process as much as the conclusion.",
          styleContext:
            "Analytical communicators believe that a well-structured recommendation builds credibility. The rigour of the analysis matters as much as the answer.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your summary includes a recommendation but may lack the supporting data or structured format Rachel requested. Check whether you included specific scores and the key trade-off.",
          observation:
            "If your summary reads as a narrative rather than a structured document, it may not meet the analytical expectation. Consider using clear sections and data points.",
          coachingTip:
            "For analytical audiences, structure is not optional. Use headings, numbered lists, or clear sections to make the logic easy to follow.",
          styleContext:
            "Analytical communicators read structured documents faster than narratives. Format your message to match their processing style.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary is likely too narrative, too brief, or lacks the evidence Rachel asked for. A recommendation without supporting data will not satisfy an analytical audience.",
          observation:
            "If your message says 'the team recommends Option C' without explaining why, it is missing the analysis that gives the recommendation credibility.",
          coachingTip:
            "Analytical communicators do not just want to know what you recommend. They want to know how you arrived at that recommendation and what you considered along the way.",
          styleContext:
            "For analytical communicators, an unsupported recommendation is worse than no recommendation at all. Always show your working.",
        },
      },
    },
  },

  // Scenario 83 - Owen Grant, remote, intermediate
  {
    id: "scenario-83",
    title: "The Cross-Timezone Handover",
    context:
      "Owen is leading a cross-timezone project and has scheduled a video call to review the handover process between the London and Sydney teams. He is concerned that information is being lost between shifts and wants to design a more rigorous handover protocol.",
    chooseContext:
      "Owen has presented a draft handover template and is asking for your input on whether it captures all the critical data points. He wants the feedback to be specific and structured.",
    rewriteContext:
      "Owen has asked you to draft the handover protocol document that will be shared with both teams, including clear fields, definitions, and examples for each data point.",
    characterId: "owen-grant",
    dialogue:
      "We are losing information between the London close and the Sydney open. I have tracked 14 handover gaps in the last month and 9 of them led to duplicated work. I have drafted a structured template with eight mandatory fields. I need you to review it and tell me if any fields are missing or redundant. Be precise. I do not want opinions, I want a gap analysis.",
    chooseDialogue:
      "Good observations. Now, for each gap you have identified, can you map it to the specific template field that would have caught it? I want to validate that the template actually solves the problem, not just looks comprehensive.",
    rewriteDialogue:
      "Write the protocol document. Each field needs a definition, a data type, and an example entry. I want both teams to fill it in identically regardless of who is writing. Remove any ambiguity.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "remote",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen has tracked 14 handover gaps, quantified the impact, drafted a structured template, and is asking for a gap analysis rather than opinions. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen's data-driven approach, structured template, and explicit request for a gap analysis rather than opinions are hallmarks of analytical communication. He has quantified the problem before proposing a solution.",
          observation:
            "Notice how Owen presents the problem with specific numbers (14 gaps, 9 leading to duplicated work) before introducing the solution. Analytical communicators always establish the evidence base first.",
          coachingTip:
            "When someone asks for a 'gap analysis' rather than 'your thoughts', they are signalling an analytical preference. Respond with structured, evidence-based input.",
          styleContext:
            "Analytical communicators design processes to eliminate ambiguity. In cross-timezone work, they see structured handovers as essential because verbal clarification is not available in real time.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Both analytical and direct communicators are task-focused, but Owen is building a process and methodology, not pushing for a quick fix. His eight-field template shows a systems-thinking approach.",
          observation:
            "A direct communicator would say 'the handovers are failing, fix it by next week'. Owen has spent time quantifying, categorising, and designing a structured solution.",
          coachingTip:
            "Direct communicators solve problems with decisions. Analytical communicators solve problems with systems. Owen is building a system.",
          styleContext:
            "Analytical communicators invest time upfront in designing robust processes because they believe good systems prevent recurring problems.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen is not focused on team morale, creative approaches, or building consensus. His approach is methodical, data-driven, and process-oriented.",
          observation:
            "A supportive communicator would focus on how the handover gaps affect the teams personally. An expressive communicator would pitch a creative reimagining of the process. Owen is analysing and structuring.",
          coachingTip:
            "Consider what tools the person reaches for. Owen reaches for data, templates, and structured analysis. Those are analytical tools.",
          styleContext:
            "Analytical communicators in remote environments are often the ones who design the systems that make cross-timezone work possible. They see structure as a substitute for proximity.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen wants you to map each identified gap to the specific template field that would have caught it. How do you respond?",
      options: [
        {
          id: "s83-opt-a",
          text: "I have mapped all 14 gaps against the template. Twelve are covered by existing fields. Two are not: first, in-progress tasks that are blocked pending external input, which needs a dedicated 'blocked items' field; second, client communications sent but not yet replied to, which needs a 'pending client responses' field. I recommend adding both. Here is the mapping table.",
          score: 10,
          result: "strong",
          explanation:
            "This is structured, specific, and directly addresses Owen's request. You have validated the template against real data and identified precisely what is missing. Analytical communicators value this methodical approach.",
        },
        {
          id: "s83-opt-b",
          text: "The template looks pretty solid. I think it covers most things. Maybe add a general notes field so people can include anything that does not fit the other categories.",
          score: 5,
          result: "partial",
          explanation:
            "This is too vague. Owen asked for a specific gap analysis, not a general impression. A 'general notes' field is the opposite of the structured, unambiguous approach he is building.",
        },
        {
          id: "s83-opt-c",
          text: "Instead of adding more fields, why do we not just get the London and Sydney leads on a quick call each day to talk through the handover? That way nothing gets missed and it builds a better relationship between the teams.",
          score: 0,
          result: "weak",
          explanation:
            "This ignores the timezone constraint that makes written handovers necessary and suggests a relationship-based solution when Owen is looking for a systems-based one. An analytical communicator would see this as avoiding the problem.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen wants you to draft the handover protocol document with clear field definitions, data types, and example entries. Write it in an analytical style that removes all ambiguity.",
      targetTraits: ["precise", "structured", "unambiguous", "repeatable"],
      exampleStrongResponse:
        "Cross-Timezone Handover Protocol v1.0\n\nPurpose: to ensure complete and consistent information transfer between the London (GMT) and Sydney (AEDT) teams at each shift transition.\n\nField 1: Handover timestamp. Data type: datetime (ISO 8601). Example: 2026-03-13T17:00:00Z. Definition: the exact time the outgoing team completed the handover document.\n\nField 2: Tasks completed. Data type: numbered list. Example: 1) Client report finalised and sent. 2) API testing for module 3 passed. Definition: all tasks fully completed during the shift, with outcomes noted.\n\nField 3: Tasks in progress. Data type: numbered list with percentage. Example: 1) Dashboard build, 60% complete, next step is front-end review. Definition: tasks started but not finished, with current progress and the immediate next action.\n\nField 4: Blocked items. Data type: numbered list with blocker owner. Example: 1) Data access request, awaiting IT approval (submitted 12 March). Definition: tasks that cannot proceed until an external dependency is resolved.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Outstanding. Your document is precisely structured with clear definitions, data types, and examples for each field. Both teams could use this independently and produce consistent handovers.",
          observation:
            "You included data types and examples, which eliminates the interpretation differences that cause handover gaps. This is exactly the level of specificity Owen requested.",
          coachingTip:
            "When writing protocols for analytical communicators, treat each field as a specification. If two people could interpret it differently, it is not specific enough.",
          styleContext:
            "Analytical communicators design documents that work without verbal explanation. If the document needs a conversation to accompany it, it is not finished.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your document includes the right fields but may lack definitions, data types, or examples. Check whether each field is specific enough that two different people would fill it in the same way.",
          observation:
            "If a field says 'Notes' without a definition of what should go there, it will be filled inconsistently. Owen wants to eliminate exactly this kind of ambiguity.",
          coachingTip:
            "For each field, ask yourself: if I gave this to someone with no context, would they know exactly what to write? If not, add a definition and an example.",
          styleContext:
            "Analytical communicators test documents by imagining the least informed user. If that person can fill it in correctly, the document works.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your document is likely too informal, too brief, or uses fields without clear definitions. Owen asked for precision and unambiguity, and the document needs to reflect that.",
          observation:
            "If your document is a simple bullet list without data types, definitions, or examples, it will not solve the handover problem. It will just give people a new place to write inconsistent notes.",
          coachingTip:
            "Think of the document as a form, not a notepad. Every field should have a label, a format, and an example. Leave nothing to interpretation.",
          styleContext:
            "Analytical communicators believe that poorly specified processes create more problems than no process at all. If you are going to design a system, design it properly.",
        },
      },
    },
  },

  // Scenario 84 - Fiona Banks, remote, advanced
  {
    id: "scenario-84",
    title: "The Virtual Client Audit",
    context:
      "You are on a video call with Fiona preparing for a virtual client meeting where you will present the findings of a process audit. Fiona is reviewing the slide deck and is concerned that the analysis lacks the depth the client expects.",
    chooseContext:
      "Fiona has identified three slides that she considers too surface-level and is asking you to strengthen them with deeper analysis before the client call tomorrow morning.",
    rewriteContext:
      "Fiona has asked you to draft the executive summary slide that will open the client presentation, ensuring it balances high-level findings with enough analytical depth to establish credibility.",
    characterId: "fiona-banks",
    dialogue:
      "Slide six says 'process efficiency improved'. That is not analysis, that is a headline. The client will ask 'by how much, measured how, compared to what baseline?' If we present this without the supporting data, we will lose credibility in the first ten minutes. I need every claim on every slide to be backed by a specific metric, a time period, and a comparison point.",
    chooseDialogue:
      "Better, but slide nine still has a qualitative statement without quantification. 'Stakeholder satisfaction increased' means nothing without a survey methodology, sample size, and confidence interval. If we cannot defend it, remove it.",
    rewriteDialogue:
      "Now write the executive summary slide. I want the three headline findings, each supported by one key metric. Below that, a methodology note so the client knows exactly how we measured. If it looks thin, they will question everything that follows.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "remote",
    skillFocus: "brevity",

    spotQuestion: {
      prompt:
        "Fiona challenged a slide for lacking specific metrics, demanded every claim be backed by data with baselines and time periods, and insisted on removing unsupported statements. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona's insistence on metrics, baselines, comparison points, and methodological rigour is textbook analytical communication. She is not just asking for data; she is asking for defensible data.",
          observation:
            "Notice how Fiona escalates from 'back it with a metric' to 'include methodology and confidence intervals'. Analytical communicators think in layers of evidence, each supporting the one above.",
          coachingTip:
            "When someone asks not just for data but for the methodology behind the data, they are communicating at an advanced analytical level. Match their rigour by showing your working.",
          styleContext:
            "Analytical communicators preparing for client presentations see credibility as the primary goal. Every unsupported claim is a potential vulnerability they want to eliminate.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Both analytical and direct communicators demand quality, but Fiona is not pushing for speed or decisions. She is pushing for depth and rigour, willing to spend more time to get the analysis right.",
          observation:
            "A direct communicator would say 'just make the slides sharper and send them'. Fiona is specifying exactly what 'sharper' means: metrics, time periods, baselines, and methodology.",
          coachingTip:
            "Direct communicators care about impact. Analytical communicators care about accuracy. Fiona is optimising for accuracy, even at the cost of additional preparation time.",
          styleContext:
            "In client presentations, analytical communicators would rather present fewer claims with strong evidence than many claims with weak evidence.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona is not focused on how the presentation will make the client feel or on building a compelling narrative. Her focus is entirely on the evidential foundation of every statement.",
          observation:
            "A supportive communicator would worry about the client relationship. An expressive communicator would focus on making the presentation engaging. Fiona is focused on making it defensible.",
          coachingTip:
            "Consider what the person is trying to prevent. Fiona is trying to prevent the client questioning their methodology. That defensive, evidence-first mindset is distinctly analytical.",
          styleContext:
            "Analytical communicators believe that in professional settings, credibility is built through evidence and lost through unsupported claims. Every slide is a test of rigour.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Fiona has identified three slides that need strengthening with deeper analysis before the client call. How do you respond?",
      options: [
        {
          id: "s84-opt-a",
          text: "Agreed. I will rework slides six, nine, and twelve tonight. For each claim, I will add the specific metric, the measurement period, and the baseline comparison. Slide nine's stakeholder satisfaction claim will be backed by the survey data: 342 respondents, 78% response rate, 4.2 out of 5 average score versus 3.1 at baseline. I will send the updated deck for your review by 8am.",
          score: 10,
          result: "strong",
          explanation:
            "This demonstrates the exact level of specificity Fiona is looking for. You have shown you understand the analytical standard and are committing to meet it with precise data points. The offer to send for review shows respect for her quality bar.",
        },
        {
          id: "s84-opt-b",
          text: "I will add more data to those slides and make them more convincing. I think once the client sees the overall story, they will be satisfied with the level of detail.",
          score: 5,
          result: "partial",
          explanation:
            "Too vague. 'More data' and 'more convincing' are not specific enough for Fiona. She told you exactly what she needs: metrics, time periods, and baselines. 'The overall story' is an expressive framing that misses her analytical concern.",
        },
        {
          id: "s84-opt-c",
          text: "I think we might be overthinking this. The client wants to see that we have made progress, and the slides show that clearly. If we add too much data, we risk losing them in the detail. Let us keep it high-level and handle questions verbally.",
          score: 0,
          result: "weak",
          explanation:
            "This directly contradicts Fiona's approach. Suggesting that evidence can be 'too detailed' and that questions can be 'handled verbally' will frustrate an analytical communicator who sees unsupported claims as a credibility risk.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona wants you to draft the executive summary slide with three headline findings, each supported by one key metric, and a methodology note. Write it in an analytical style that establishes credibility from the first slide.",
      targetTraits: ["evidence-based", "structured", "methodical", "credible"],
      exampleStrongResponse:
        "Executive Summary: Process Audit Findings\n\n1. Process cycle time reduced by 34%, from 12.4 days (Q1 baseline) to 8.2 days (Q3 measurement), measured across 847 completed transactions.\n\n2. Error rate decreased from 6.1% to 2.3% over the audit period, validated through automated QA logs covering 100% of processed items.\n\n3. Stakeholder satisfaction increased from 3.1 to 4.2 out of 5.0, based on a survey of 342 respondents (78% response rate) conducted in October 2025.\n\nMethodology: all metrics were measured against a Q1 2025 baseline established during the initial diagnostic phase. Data sources include the operational dashboard (cycle time and error rate) and a structured stakeholder survey (satisfaction). Full methodology documentation is available in the appendix.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Outstanding. Your executive summary balances headline impact with analytical depth. Each finding is supported by a specific metric, and the methodology note gives the client confidence in the rigour of the analysis.",
          observation:
            "You included baselines, measurement periods, sample sizes, and data sources. This is exactly the level of evidence that prevents a client from asking 'but how did you measure that?'",
          coachingTip:
            "For analytical clients, the executive summary is not just a summary. It is a credibility statement. If the first slide is rigorous, the client trusts everything that follows.",
          styleContext:
            "Analytical communicators know that executive summaries are often the only slide clients remember. Making it evidence-rich ensures the right message sticks.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your summary includes findings but may lack specific metrics, baselines, or methodology. Check whether each finding can withstand the question 'how do you know?'",
          observation:
            "If a finding says 'efficiency improved significantly' without a number, it is a claim, not a finding. Fiona would flag this immediately.",
          coachingTip:
            "For each finding, include the metric, the baseline, the current value, and the measurement method. If any of those four elements are missing, the finding is incomplete.",
          styleContext:
            "Analytical communicators define 'executive summary' differently from other styles. For them, it means 'the most important evidence, presented concisely', not 'the highlights without the detail'.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary is likely too high-level or narrative-driven. Fiona asked for metrics and methodology, and an executive summary without those will not establish the credibility she needs.",
          observation:
            "If your summary reads as 'we found improvements across all areas and the client should be pleased with the progress', it is a conclusion without evidence. Fiona would reject it.",
          coachingTip:
            "Start with the numbers. Write the three key metrics first, then build the summary around them. If the numbers are not in the first draft, the draft is not analytical.",
          styleContext:
            "Analytical communicators believe that numbers speak louder than narratives. Lead with the evidence and let the data tell the story.",
        },
      },
    },
  },
];
