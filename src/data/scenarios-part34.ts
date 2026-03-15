import { Scenario } from "@/types";

export const SCENARIOS_PART34: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (397-399) - one-to-one
  // ============================================

  // Scenario 397 - Jordan Cole, one-to-one, foundation
  {
    id: "scenario-397",
    title: "The Probation Review",
    context:
      "Jordan is conducting a three-month probation review with a new hire who has strong technical skills but has not been proactive enough in seeking feedback or building relationships with the wider team.",
    chooseContext:
      "Jordan has praised the technical work and is now raising the development areas. The new hire looks surprised - they thought the review was going well.",
    rewriteContext:
      "Jordan has asked you to write a summary of the probation review that the new hire can refer back to, with clear expectations for the next three months.",
    characterId: "jordan-cole",
    dialogue:
      "Your technical work is solid - no complaints there. But that is table stakes. What I have not seen enough of is you putting yourself out there. You wait for people to come to you with feedback, and you have not introduced yourself to anyone outside our immediate team. In the next three months, I need to see you actively seeking input and building your network here.",
    chooseDialogue:
      "I am not saying this to be harsh. I am saying it because I think you have real potential, and I do not want you to limit yourself by staying in your comfort zone. The technical skills got you the job. The relationships will get you the career. What is your plan for the next 90 days?",
    rewriteDialogue:
      "Write the probation summary. Two sections: what has gone well and what needs to change. Be specific in both. In the development areas, include two or three concrete actions they should take, not vague statements about 'being more proactive'. Give them something they can actually do.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "one-to-one",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Jordan is conducting a probation review by delivering clear praise alongside blunt development feedback, demanding a specific plan, and framing the conversation around action rather than feelings. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan separates praise from development areas clearly, delivers feedback without softening it excessively, and immediately asks for a plan. This is direct communication in a one-to-one - honest, specific, and forward-looking.",
          observation:
            "Notice how Jordan says 'the technical skills got you the job - the relationships will get you the career'. Direct communicators frame feedback as an investment in the person's success, not as criticism.",
          coachingTip:
            "When someone delivers feedback clearly, follows it with a demand for an action plan, and frames honesty as a form of care, they are using a direct style.",
          styleContext:
            "Direct communicators see probation reviews as a chance to set clear expectations. They would rather be uncomfortably honest now than let someone fail quietly later.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Jordan is structured in the feedback, which can look analytical. But notice the emphasis is on action and momentum, not on detailed assessment criteria. An analytical reviewer would provide a scored rubric.",
          observation:
            "An analytical reviewer would say 'your networking score is 2 out of 5 based on these three metrics'. Jordan simply says 'I have not seen enough of this - change it'. The approach is directive, not evaluative.",
          coachingTip:
            "If feedback is delivered as an instruction to change, that is direct. If it is delivered as an assessment against criteria, that is analytical.",
          styleContext:
            "Direct communicators give feedback as direction: 'do more of this, do less of that'. Analytical communicators give feedback as evaluation: 'here is where you scored and why'.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has not asked how the new hire feels about their first three months, explored whether they are settling in emotionally, or checked whether they feel supported.",
          observation:
            "There is no mention of wellbeing, comfort, or emotional adjustment. Jordan is reviewing performance and setting expectations, not exploring feelings.",
          coachingTip:
            "Is this person checking on the new hire's performance or their feelings? Jordan is firmly focused on performance and development.",
          styleContext:
            "Direct communicators see probation reviews as performance conversations, not pastoral care. They care about the person's success, which they demonstrate through honest feedback.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan has asked the new hire for their plan for the next 90 days. They say they will 'try to be more visible and build more relationships'. How do you respond?",
      options: [
        {
          id: "s397-opt-a",
          text: "Too vague. Give me three specifics: a weekly coffee chat outside the team, present at the next showcase, and get stakeholder feedback by month end. Can you commit?",
          score: 10,
          result: "strong",
          explanation:
            "You converted a vague intention into three specific, measurable actions with timelines. This is exactly how Jordan wants development plans to work.",
        },
        {
          id: "s397-opt-b",
          text: "That sounds like a good start. Let us check in again in a month and see how things are progressing.",
          score: 5,
          result: "partial",
          explanation:
            "This accepts the vague plan without challenging it. Jordan explicitly said they do not want vague statements about being more proactive. A check-in without specifics will produce the same result.",
        },
        {
          id: "s397-opt-c",
          text: "I think the fact that you are aware of it is a great first step. Self-awareness is half the battle. I am sure you will find your rhythm.",
          score: 0,
          result: "weak",
          explanation:
            "This is encouraging but offers no actionable guidance. Jordan would see this as letting the new hire off the hook with a feel-good response that changes nothing.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan has asked you to write a probation review summary with two sections: what has gone well and what needs to change. Include specific actions for the development areas. Write it in a direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Three-Month Probation Review Summary\n\nWhat has gone well:\n- Technical output is strong. All deliverables met quality standards and deadlines.\n- Quick to learn new systems. Fully independent on core tools within four weeks.\n- Reliable. Zero missed deadlines or escalations in the first quarter.\n\nWhat needs to change:\n- Proactive feedback-seeking. Current state: waits for feedback to be given. Required state: actively requests feedback from stakeholders at least twice per month.\n- Network building. Current state: no introductions made outside the immediate team. Required state: one coffee chat per week with someone from another department. Maintain a log of contacts made.\n- Visibility. Current state: contributes in team meetings but does not volunteer for presentations or showcases. Required state: present at least once at the monthly team showcase before the six-month review.\n\nNext review: Six-month probation review on 14 June 2026. All three development actions will be assessed with evidence.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is specific in both praise and development areas, includes measurable actions, and sets a clear review date. Jordan would hand this to the new hire with full confidence.",
          observation:
            "You used 'current state' and 'required state' for each development area, which makes the gap visible and the target unambiguous. That is the level of clarity direct communicators expect.",
          coachingTip:
            "When writing review summaries for direct communicators, make every development area include what is happening now and what needs to happen next. The gap should be obvious.",
          styleContext:
            "Direct communicators want review documents that function as contracts. If the new hire reads it, they should know exactly what is expected and when it will be checked.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your development actions are truly specific. 'Be more proactive' or 'build better relationships' are not actionable without defining what that looks like in practice.",
          observation:
            "If your actions use phrases like 'improve', 'develop', or 'enhance' without specifying the behaviour and the measure, they are too vague.",
          coachingTip:
            "Replace every development goal with a behaviour and a number. 'Improve networking' becomes 'one coffee chat per week outside the team'. Measure everything.",
          styleContext:
            "Direct communicators do not set goals they cannot verify. If you cannot tell whether the goal was achieved at the six-month review, it is not specific enough.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary is either too vague, lacks specific actions, or reads more like a conversation summary than a development document.",
          observation:
            "If your summary says 'overall a good start, with some areas for development' without specifying what those areas are and what to do about them, it has missed Jordan's brief.",
          coachingTip:
            "Every line in the summary should be either a specific achievement or a specific action. Delete anything that is neither.",
          styleContext:
            "Direct communicators see vague review summaries as a failure of management. If the document does not create accountability, it is not doing its job.",
        },
      },
    },
  },

  // Scenario 398 - Sam Hartley, one-to-one, intermediate
  {
    id: "scenario-398",
    title: "The Career Conversation",
    context:
      "Sam is having a one-to-one with a mid-level team member who has been in the same role for three years and is starting to show signs of disengagement. Sam wants to have a direct conversation about their ambitions.",
    chooseContext:
      "The team member has admitted they feel stuck but are not sure what they want to do next. Sam is pushing them to move past uncertainty and commit to a direction.",
    rewriteContext:
      "Sam has asked you to draft a development plan based on the conversation, outlining two possible career paths and the specific steps required for each.",
    characterId: "sam-hartley",
    dialogue:
      "I am going to be straight with you. You have been in this role three years, and I have watched your energy drop over the last six months. You are too good to coast, and I am not going to let you. So let us talk honestly - where do you want to be in 18 months, and what is stopping you from getting there?",
    chooseDialogue:
      "Saying 'I do not know what I want' is fine for a month, but it has been six. At some point you have to pick a direction and test it. You do not need a perfect plan - you need a hypothesis. Are you drawn more to people leadership or technical depth? Pick one and we will build from there.",
    rewriteDialogue:
      "Write the development plan. Two columns - one for the leadership track, one for the technical specialist track. Under each, list the three things they need to do in the next six months to test that path. Make it clear that picking one does not close the door on the other - but they have to pick one to start with.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "one-to-one",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Sam has confronted a team member about their declining energy, refused to accept 'I do not know' as an answer, and demanded they pick a career direction to test. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam names the disengagement directly, sets a time limit on indecision, and demands a directional choice. This is direct communication in a development conversation - honest, challenging, and action-oriented.",
          observation:
            "Notice how Sam says 'you do not need a perfect plan - you need a hypothesis'. Direct communicators believe that action under uncertainty is better than paralysis seeking certainty.",
          coachingTip:
            "When someone challenges indecision, sets a deadline for choosing a direction, and frames imperfect action as better than perfect analysis, they are using a direct style.",
          styleContext:
            "Direct communicators see prolonged career indecision as a risk to the person's potential. They intervene with urgency because they care about the outcome.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Sam's structured approach to two career paths can look analytical. But notice the emphasis is on speed of decision, not thoroughness of analysis. An analytical manager would help build a detailed evaluation of both options before asking for a choice.",
          observation:
            "An analytical manager would say 'let us map both paths against your skills, interests, and market demand'. Sam says 'pick one and we will build from there'. The approach prioritises momentum over analysis.",
          coachingTip:
            "If someone pushes for a quick directional choice and then builds the plan around it, that is direct. If they build the analysis first and let the data suggest the choice, that is analytical.",
          styleContext:
            "Direct communicators believe that career direction is discovered through action, not analysis. Pick a path, test it, and adjust if needed.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not explored the emotional reasons behind the disengagement, asked about personal circumstances, or created a safe space for the team member to share their fears.",
          observation:
            "There is no exploration of whether the person is struggling with confidence, overwhelmed by options, or dealing with personal issues. Sam is focused on career direction, not emotional wellbeing.",
          coachingTip:
            "Is this person exploring feelings or pushing for action? Sam is firmly pushing for a commitment, not counselling through uncertainty.",
          styleContext:
            "Direct communicators see career conversations as decisions to be made, not feelings to be explored. They express care through challenge, not comfort.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam has told the team member to pick between leadership and technical depth. They say they are interested in both and do not want to close any doors. How do you respond?",
      options: [
        {
          id: "s398-opt-a",
          text: "Keeping both doors open sounds safe, but it means you walk through neither. Pick the one that excites you more. We build a six-month plan around it and pivot if needed. But we are not standing still.",
          score: 10,
          result: "strong",
          explanation:
            "You acknowledged the desire to keep options open but pushed past it with a clear rationale and a safety net. This matches Sam's demand for a directional commitment.",
        },
        {
          id: "s398-opt-b",
          text: "What if we designed a role that combines both? Some leadership responsibility with a technical specialism. That way you can test both without committing fully to either.",
          score: 5,
          result: "partial",
          explanation:
            "Creative, but this avoids the decision Sam is asking for. Hybrid roles often dilute focus, and Sam has explicitly said they need to pick one direction to start with.",
        },
        {
          id: "s398-opt-c",
          text: "There is no rush. Career development is a journey, and it is okay not to have all the answers right now. Let us keep exploring over the next few months.",
          score: 0,
          result: "weak",
          explanation:
            "This is exactly the response Sam is trying to prevent. The team member has been in exploration mode for six months. More time without direction will deepen the disengagement.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam has asked you to write a development plan with two career path columns and three specific actions under each for the next six months. Make it clear they must choose one to start with. Write it in a direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Career Development Plan - Six Months\n\nRule: Pick one track to focus on for the next six months. This is not a permanent decision - it is a test. At the six-month review, we assess progress and decide whether to continue, switch, or specialise further.\n\nTrack A: People Leadership\n1. Shadow a team lead for two weeks. Attend their one-to-ones (with permission) and debrief with them on their approach.\n2. Lead the next team project from start to finish. Own the planning, delegation, and delivery. Report on what you learned about managing others.\n3. Complete the company's management essentials programme by month five. Present your key takeaways to me.\n\nTrack B: Technical Specialist\n1. Identify one technical area where the team has a skills gap. Propose a plan to close it and deliver a knowledge-sharing session by month three.\n2. Contribute to an open-source project or external technical community. Evidence: at least two meaningful contributions by month five.\n3. Earn one relevant technical certification by month six. Choose one aligned with our technology roadmap.\n\nDeadline for choosing a track: End of this week.\nFirst check-in: Two weeks from today.\nFull review: Six months from today.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your plan is clear, each action is specific and time-bound, and the choice framework is unambiguous. Sam would hand this over knowing it creates momentum immediately.",
          observation:
            "You framed the choice as a test, not a commitment, which removes the fear of making the wrong decision. That is a smart direct move - reduce the stakes to increase the speed of decision.",
          coachingTip:
            "When writing development plans for direct communicators, make actions specific and time-bound. Frame choices as experiments to reduce decision anxiety without reducing commitment.",
          styleContext:
            "Direct communicators design development plans that force action. If the plan allows someone to defer decisions or avoid specific tasks, it is not doing its job.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether each action is truly specific. 'Develop leadership skills' or 'build technical expertise' are categories, not actions.",
          observation:
            "If any of your actions could not be verified at the six-month review - either done or not done - they need more specificity.",
          coachingTip:
            "Each action should be binary at review time: completed or not completed. If the outcome is subjective, add a deliverable or a measure.",
          styleContext:
            "Direct communicators want development plans that create accountability. Every action should have a clear output that proves it happened.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your plan is either too vague, lacks the two-track structure, or does not force a decision between the two paths.",
          observation:
            "If your plan says 'explore both areas and see which feels right', it is not a plan - it is the status quo wrapped in a document.",
          coachingTip:
            "Two tracks, three actions each, a deadline for choosing, and a review date. If any of these elements is missing, add it.",
          styleContext:
            "Direct communicators see development plans without deadlines and choices as a waste of paper. The plan must create movement, not just describe possibilities.",
        },
      },
    },
  },

  // Scenario 399 - Alex Tran, one-to-one, advanced
  {
    id: "scenario-399",
    title: "The Difficult Feedback Conversation",
    context:
      "Alex needs to have a one-to-one with a senior team member whose interpersonal style is causing friction with colleagues. Multiple people have raised concerns privately, but nobody has addressed it directly with the individual.",
    chooseContext:
      "Alex has opened the conversation and shared the feedback themes without naming individuals. The team member is defensive and says the real problem is that the team cannot handle honest communication.",
    rewriteContext:
      "Alex has asked you to draft a follow-up email summarising the feedback, the agreed actions, and the consequences if the behaviour does not change.",
    characterId: "alex-tran",
    dialogue:
      "I need to talk to you about something that is not going to be comfortable, and I respect you too much to sugarcoat it. Multiple people have come to me about the way you communicate in meetings. The feedback is consistent: you interrupt, you dismiss ideas publicly, and people have stopped contributing because they do not want to be on the receiving end. That has to change.",
    chooseDialogue:
      "I hear what you are saying about honest communication, and I agree that this team needs candour. But there is a difference between being honest and being abrasive. You can challenge ideas without making people feel small. Right now, the impact of your style is that people are withholding ideas rather than sharing them. That is the opposite of what honest communication should achieve.",
    rewriteDialogue:
      "Write the follow-up email. Summarise the three specific behaviours I raised - interrupting, dismissing ideas publicly, and the chilling effect on team contribution. List the two actions we agreed: attending a communication skills workshop and having a check-in with me every fortnight to review progress. And include the consequence: if the behaviour continues, it will be escalated to a formal performance process. Be factual, not emotional.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "one-to-one",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Alex is delivering interpersonal feedback by naming specific behaviours, presenting consistent themes from multiple sources, distinguishing between candour and abrasiveness, and demanding change. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex delivers uncomfortable feedback head-on, names specific behaviours, rejects the defensive reframe, and demands change. This is direct communication handling one of the hardest conversations a manager can have.",
          observation:
            "Notice how Alex says 'I respect you too much to sugarcoat it'. Direct communicators frame blunt feedback as a sign of respect, not hostility. Avoidance would be the real disrespect.",
          coachingTip:
            "When someone delivers behavioural feedback by naming specific patterns, rejecting deflection, and demanding measurable change, they are using a direct style at an advanced level.",
          styleContext:
            "Direct communicators believe that avoiding difficult feedback is a form of cruelty. They deliver it because they believe the person can handle it and deserves the truth.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Alex presents evidence from multiple sources, which can look analytical. But notice that the evidence serves a confrontation, not an investigation. Alex is not analysing the behaviour - they are demanding it stops.",
          observation:
            "An analytical manager would present a detailed log of incidents with dates and contexts. Alex presents themes: interrupting, dismissing, chilling effect. The approach is pattern-based, not incident-based.",
          coachingTip:
            "If someone uses evidence to confront and demand change, that is direct. If they use evidence to diagnose and propose systematic improvement, that is analytical.",
          styleContext:
            "Direct communicators use evidence as leverage for change, not as the basis for a collaborative investigation. The verdict has already been reached.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex has not explored the underlying reasons for the behaviour, asked about personal stressors, or considered whether the team's norms might be contributing to the friction.",
          observation:
            "There is no attempt to understand why the person communicates this way. Alex is focused on the impact and the required change, not the root cause.",
          coachingTip:
            "Is this person seeking to understand the behaviour or change it? Alex is firmly focused on change.",
          styleContext:
            "Direct communicators in feedback conversations prioritise impact over intent. It does not matter why someone interrupts - what matters is that they stop.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex has distinguished between candour and abrasiveness. The team member says people need to toughen up and that the real problem is a lack of resilience on the team. How do you respond?",
      options: [
        {
          id: "s399-opt-a",
          text: "That framing puts the responsibility on everyone else. When three people independently say they have stopped contributing because of how you respond, that is not a resilience problem. That is a leadership problem, and it is yours to fix.",
          score: 10,
          result: "strong",
          explanation:
            "You rejected the deflection clearly, redirected ownership back to the individual, and framed the issue as a leadership failure rather than a team weakness. This is exactly how Alex would respond.",
        },
        {
          id: "s399-opt-b",
          text: "I think there might be truth on both sides. Maybe the team does need to be more resilient, and maybe you could adjust your delivery. What if we worked on both?",
          score: 5,
          result: "partial",
          explanation:
            "This tries to be balanced but dilutes the message. Alex has clear evidence of one person's impact on the team. Splitting the responsibility reduces accountability.",
        },
        {
          id: "s399-opt-c",
          text: "I appreciate your perspective. Let me think about whether the team culture might be part of the issue, and we can revisit this conversation next week.",
          score: 0,
          result: "weak",
          explanation:
            "This accepts the deflection and delays the conversation. Alex has already heard from multiple sources and is delivering a clear message. Deferring signals that the feedback is negotiable.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex has asked you to write a follow-up email summarising the three behaviours, the two agreed actions, and the consequences for continued behaviour. Write it in a direct style - factual, clear, and unambiguous.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Follow-up from our conversation today\n\nHi Chris,\n\nThank you for the conversation this morning. I want to put in writing what we discussed so there is a clear record for both of us.\n\nThree behaviours raised:\n1. Interrupting colleagues during meetings before they have finished their point.\n2. Dismissing ideas publicly with language that makes people feel their contributions are not valued.\n3. A chilling effect on team participation - multiple team members have told me they withhold ideas to avoid a negative response.\n\nTwo agreed actions:\n1. Attend the communication skills workshop offered through the L&D team. To be completed within the next eight weeks.\n2. Fortnightly check-ins with me to review progress. We will discuss specific examples of how your communication has changed and gather feedback from the team.\n\nConsequence:\nIf these behaviours continue after the actions above have been completed, the matter will be escalated to a formal performance improvement process.\n\nI am committed to supporting you through this, and I believe you can make the change. But the change is non-negotiable.\n\nAlex",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is factual, specific, and leaves no room for ambiguity about what was discussed, what is expected, and what happens if things do not change. Alex would send this as a formal record with full confidence.",
          observation:
            "You ended with support and belief in the person while making the expectation non-negotiable. That combination is the hallmark of direct feedback done well.",
          coachingTip:
            "When writing feedback follow-up emails for direct communicators, state the behaviours, the actions, and the consequences in that order. Close with support but not softness.",
          styleContext:
            "Direct communicators see follow-up emails after difficult conversations as protective documents - they protect the person from misunderstanding, and the manager from the feedback being denied later.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the behaviours are specific enough and whether the consequence is clearly stated. If any element is vague, it weakens the document.",
          observation:
            "If the behaviours are described as 'communication issues' rather than specific patterns, the person can later claim they did not understand what was being asked.",
          coachingTip:
            "Name each behaviour precisely. 'Interrupting colleagues before they finish' is specific. 'Communication style needs improvement' is not.",
          styleContext:
            "Direct communicators write feedback emails that could be read by HR or a third party and still be crystal clear. If the email requires context to understand, it is not precise enough.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too soft, too vague about the behaviours, or omits the consequence. A feedback follow-up without clear consequences is a suggestion, not a requirement.",
          observation:
            "If your email says 'I hope we can work on this together' or 'I trust you will take this on board', it has no teeth. Alex wants a document that creates accountability.",
          coachingTip:
            "Include all three elements: behaviours, actions, consequences. If the consequence is missing, the person has no reason to believe the feedback is serious.",
          styleContext:
            "Direct communicators do not write feedback emails to make people feel better. They write them to create a clear, documented expectation that both parties can refer back to.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (400-402) - meeting
  // ============================================

  // Scenario 400 - Priya Sharma, meeting, foundation
  {
    id: "scenario-400",
    title: "The Innovation Brainstorm",
    context:
      "Priya is facilitating a team brainstorm to generate ideas for the company's annual innovation challenge. She wants the session to feel creative, inclusive, and energising.",
    chooseContext:
      "The brainstorm is 15 minutes in and only two people have spoken. Priya is trying to draw out ideas from quieter team members without putting them on the spot.",
    rewriteContext:
      "Priya has asked you to write a follow-up message summarising the ideas generated and thanking the team for their contributions, keeping the creative energy alive for the next session.",
    characterId: "priya-sharma",
    dialogue:
      "I love that we are here to dream big. The innovation challenge is our chance to pitch ideas that we normally would not get time for - the wild ones, the ones that sound impossible until someone actually builds them. No idea is too strange for this room. Let us go for quantity, not quality, and see what sparks.",
    chooseDialogue:
      "I can see some of you thinking hard but not saying it out loud, and I want those ideas too. How about this - everyone take two minutes to write down your boldest idea on a sticky note. No names, no judgement. Then we will read them out together and build on each other's thinking.",
    rewriteDialogue:
      "Write the follow-up message. Start by celebrating how many ideas we generated - even the wild ones. Pick out two or three that sparked the most energy and mention them. Close by getting people excited for the next session where we will shortlist and develop our top three.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "meeting",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Priya is facilitating a brainstorm by encouraging wild ideas, using inclusive techniques to draw out quieter voices, and creating an atmosphere of energy and possibility. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya creates an energising, inclusive atmosphere, celebrates boldness, and uses enthusiastic language like 'dream big' and 'let us see what sparks'. This is expressive facilitation - making creativity feel exciting and safe simultaneously.",
          observation:
            "Notice how Priya says 'no idea is too strange for this room'. Expressive communicators remove judgement to unleash creativity, but they do it with excitement rather than reassurance.",
          coachingTip:
            "When a facilitator creates energy, celebrates bold thinking, and uses inclusive techniques with enthusiasm, they are using an expressive style.",
          styleContext:
            "Expressive communicators believe that the best ideas come from environments where people feel energised and unjudged. They build that environment through enthusiasm and warmth.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya's concern for quieter voices can look supportive. But notice the energy level - 'dream big', 'see what sparks', 'boldest idea'. A supportive facilitator would create safety; Priya creates excitement.",
          observation:
            "A supportive facilitator would say 'it is okay if you are not ready to share yet'. Priya says 'I want those ideas too - write them down'. She is drawing people out with energy, not patience.",
          coachingTip:
            "If someone creates inclusion through excitement and momentum, that is expressive. If they create inclusion through safety and patience, that is supportive.",
          styleContext:
            "Expressive communicators include quieter people by making participation feel exciting rather than safe. The anonymous sticky note technique is energetic, not cautious.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not set evaluation criteria for ideas, created a scoring matrix, or structured the brainstorm around specific problem categories.",
          observation:
            "There is no reference to feasibility analysis, category frameworks, or structured evaluation. Priya is generating creative energy, not analytical rigour.",
          coachingTip:
            "Is this person facilitating for creativity or for structure? Priya is firmly in the creativity camp, prioritising quantity and boldness over quality and feasibility.",
          styleContext:
            "Expressive communicators run brainstorms to generate energy and volume. The evaluation comes later - this session is about unlocking ideas, not judging them.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya has asked everyone to write their boldest idea on a sticky note. One note suggests a completely unrealistic idea - a free product tier for every customer worldwide. How do you respond?",
      options: [
        {
          id: "s400-opt-a",
          text: "I love that ambition. What if we explored a limited free version in one market as a test? The spirit is brilliant - let us see what a realistic version looks like.",
          score: 10,
          result: "strong",
          explanation:
            "You celebrated the ambition, extracted the underlying insight, and reframed it into something buildable without dismissing the original idea. This matches Priya's creative, inclusive facilitation perfectly.",
        },
        {
          id: "s400-opt-b",
          text: "Interesting thought. Let us park that one and come back to it when we discuss feasibility in the next session.",
          score: 5,
          result: "partial",
          explanation:
            "This preserves the idea but loses the energy around it. Priya would want to build on the spark now, not defer it to a more analytical session.",
        },
        {
          id: "s400-opt-c",
          text: "That would not be financially viable. Our margins would not support a free tier at global scale. Let us focus on ideas that could realistically be funded.",
          score: 0,
          result: "weak",
          explanation:
            "This is exactly the kind of judgement Priya said has no place in this session. Shooting down a bold idea publicly will silence everyone else in the room.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya has asked you to write a follow-up message celebrating the brainstorm, highlighting two or three standout ideas, and building excitement for the next session. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Hi team,\n\nWhat a session! We generated 23 ideas in under an hour, and honestly, some of them gave me goosebumps.\n\nA few that sparked real energy in the room:\n- The idea of a customer 'innovation board' where our biggest clients help shape our product roadmap. That could transform how we build relationships.\n- The suggestion to create a 90-day rapid prototyping track where anyone in the company can pitch and build a concept. That is the kind of culture-shift idea that gets me excited.\n- The accessibility-first product concept - making our platform usable by everyone, regardless of ability. That is not just good business; it is the right thing to do.\n\nEvery idea from today is being captured, and nothing is off the table yet. In our next session on Thursday, we will shortlist our top three and start shaping them into real pitches for the innovation challenge.\n\nThank you all for bringing your creativity and courage today. This team never stops impressing me.\n\nPriya",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is warm, celebrates specific ideas with genuine enthusiasm, and builds momentum for the next session. Priya would send this knowing the team feels proud and energised.",
          observation:
            "You named specific ideas and explained why each one is exciting, which makes the contributors feel personally valued. That is more powerful than a generic 'great ideas everyone'.",
          coachingTip:
            "When writing brainstorm follow-ups for expressive communicators, celebrate specific contributions. People want to know that their idea was noticed and valued, not just counted.",
          styleContext:
            "Expressive communicators use follow-up messages to keep creative momentum alive between sessions. The message is as important as the meeting.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good intent, but check whether your message genuinely creates excitement or just summarises the session. The difference is emotional energy - does the reader finish feeling proud and eager, or just informed?",
          observation:
            "If your message lists ideas without commenting on what makes them exciting, it reads like minutes rather than a celebration.",
          coachingTip:
            "Add a line about why each highlighted idea excited you. 'That could transform how we build relationships' is more energising than 'good idea about a customer board'.",
          styleContext:
            "Expressive communicators use commentary, not just description. They tell people why ideas matter, not just what they were.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too brief, too neutral, or reads like meeting notes rather than a celebratory follow-up.",
          observation:
            "If your message says 'attached are the ideas from today's brainstorm for review', it has missed Priya's intent entirely.",
          coachingTip:
            "Start with energy ('what a session!'). Celebrate specific ideas. Close with forward momentum. If any of those three elements is missing, add it.",
          styleContext:
            "Expressive communicators see brainstorm follow-ups as culture-building moments. The message should make people want to contribute even more next time.",
        },
      },
    },
  },

  // Scenario 401 - Marcus Webb, meeting, intermediate
  {
    id: "scenario-401",
    title: "The Quarterly Kickoff",
    context:
      "Marcus is leading the quarterly team kickoff meeting. Last quarter was difficult - targets were missed and morale took a hit. Marcus wants to acknowledge the tough quarter honestly while re-energising the team for the one ahead.",
    chooseContext:
      "Marcus has acknowledged the difficult quarter and is now pivoting to what makes this quarter different. He wants the team to feel that the plan is fresh and that their input shaped it.",
    rewriteContext:
      "Marcus has asked you to write the kickoff email that goes out to the wider team after the meeting, capturing the energy of the session and the commitments for the quarter ahead.",
    characterId: "marcus-webb",
    dialogue:
      "Last quarter was tough - there is no point pretending otherwise. We missed two of our three targets, and I know that was demoralising for a team that sets high standards. But here is what I also know: we learned more in those three months than we did in the two quarters before them. And I have built this quarter's plan using every lesson from that experience.",
    chooseDialogue:
      "This is not a plan I wrote alone in my office. This is a plan built from your feedback - the retro sessions, the one-to-ones, and the honest conversations we had in January. Every priority you see on this board came from someone in this room. That matters, because when we own the plan, we fight for it.",
    rewriteDialogue:
      "Write the kickoff email. Acknowledge last quarter honestly but briefly - do not dwell. Celebrate the fact that this quarter's plan was shaped by the team. Highlight the three priorities and close with something that makes people want to get started. Energy and ownership are the two feelings I want people to walk away with.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "meeting",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Marcus is leading a quarterly kickoff by acknowledging a difficult quarter honestly, reframing the lessons learned as valuable, and emphasising that the new plan was built from the team's input. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus acknowledges difficulty honestly, reframes setbacks as learning, and builds ownership by highlighting team contribution to the plan. This is expressive leadership - turning a difficult moment into a rallying point.",
          observation:
            "Notice how Marcus says 'when we own the plan, we fight for it'. Expressive communicators create buy-in through shared ownership, not through authority.",
          coachingTip:
            "When a leader acknowledges a setback, reframes it as growth, and builds the next phase around team input, they are using an expressive style.",
          styleContext:
            "Expressive communicators turn quarterly kickoffs into emotional pivot points. The meeting is not just informational - it is transformational.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus is empathetic about the tough quarter, which can look supportive. But notice the energy and forward momentum. A supportive leader would spend more time sitting with the disappointment before moving forward.",
          observation:
            "A supportive leader would say 'I know last quarter was hard, and I want to make sure everyone is okay before we look ahead'. Marcus says 'we learned more than we did in two quarters'. He reframes rather than dwells.",
          coachingTip:
            "If someone acknowledges difficulty and quickly pivots to an energising future, that is expressive. If they acknowledge difficulty and stay with it to ensure everyone feels processed, that is supportive.",
          styleContext:
            "Expressive communicators honour the past briefly and then sprint toward the future. They believe that momentum heals better than reflection.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus has not presented a data analysis of why targets were missed, shared performance metrics, or outlined a structured improvement plan based on root cause findings.",
          observation:
            "There is no reference to performance data, failure analysis, or process improvements. Marcus is managing energy and ownership, not diagnosing operational failures.",
          coachingTip:
            "Is this person leading with data or with energy? Marcus is firmly in the energy camp.",
          styleContext:
            "Expressive communicators use quarterly kickoffs to set the emotional tone, not the analytical framework. They inspire first and detail later.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus has said the plan was built from team feedback. A sceptical team member says they have heard this before and doubts things will be different this quarter. How do you respond?",
      options: [
        {
          id: "s401-opt-a",
          text: "Fair challenge. But priority two came directly from your retro feedback on workload distribution. That is your words on the plan. If it does not feel different by month two, call me out. Publicly.",
          score: 10,
          result: "strong",
          explanation:
            "You acknowledged the scepticism, pointed to specific evidence of their input in the plan, and invited accountability. This combines honesty with the expressive commitment to follow-through.",
        },
        {
          id: "s401-opt-b",
          text: "I understand the scepticism. Let us set up monthly check-ins where we review whether the plan is being followed and adjust if needed.",
          score: 5,
          result: "partial",
          explanation:
            "This is constructive but lacks the energy and personal commitment Marcus brings. A monthly check-in is procedural; Marcus would want an emotional commitment that this time is genuinely different.",
        },
        {
          id: "s401-opt-c",
          text: "Every quarter is a fresh start. I think we should focus on the positives and give this plan a chance before assuming it will not work.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the scepticism with a platitude. Marcus has explicitly said he values honesty, and telling someone to be positive when they are raising a valid concern signals that feedback is not actually welcome.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus has asked you to write a kickoff email that acknowledges last quarter briefly, celebrates team input, highlights three priorities, and closes with energy and ownership. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Hi team,\n\nThank you for an incredible kickoff session this morning. The energy in that room reminded me exactly why I love working with this team.\n\nLet us be honest - last quarter was not our best, and we all know it. But what happened after that matters more than the results themselves. You showed up to the retros, you gave honest feedback, and you told me what needed to change. That takes guts, and I am grateful for it.\n\nThis quarter's plan is built from your input. Here are our three priorities:\n\n1. Simplify the pipeline. We are cutting three unnecessary approval steps that slowed us down last quarter. Proposed by the ops team and approved.\n2. Rebalance workloads. No one should be carrying twice the load of their peers. We are redistributing accounts based on capacity, not history.\n3. Win back client confidence. One dedicated recovery plan for each of the two accounts we underdelivered on. Named owners, weekly check-ins.\n\nThis plan is ours - not mine, not leadership's. Ours. And I believe that when a team owns its plan, it does not just deliver it. It exceeds it.\n\nLet us make this quarter the one we look back on and say 'that is when it turned around.'\n\nMarcus",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email acknowledges the past briefly, celebrates team contribution specifically, and closes with genuine energy and a memorable call to action. Marcus would send this knowing the team feels energised and empowered.",
          observation:
            "You connected each priority to team feedback, which reinforces ownership. And your closing line creates a narrative the team can rally around.",
          coachingTip:
            "When writing kickoff emails for expressive communicators, connect each priority to the team's voice, and close with a line that creates a story worth fighting for.",
          styleContext:
            "Expressive communicators turn kickoff emails into battle cries. The email should make people feel that this quarter matters personally, not just professionally.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your email creates genuine emotional momentum or just lists the priorities competently. The difference is in the closing - does it inspire action or just inform?",
          observation:
            "If your closing is 'looking forward to a great quarter', it is flat. If it is 'let us make this the quarter we turned it around', it is a story people can join.",
          coachingTip:
            "Add a line that frames the quarter as a narrative. People fight harder for a story than for a target.",
          styleContext:
            "Expressive communicators close every important message with a line that people remember. If your closing could be deleted without losing anything, it needs rewriting.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too formal, too focused on the past, or fails to create any sense of shared ownership and energy for the quarter ahead.",
          observation:
            "If your email spends more time analysing last quarter than energising this one, it has the wrong balance.",
          coachingTip:
            "One paragraph on the past. Three paragraphs on the future. Close with a rally cry. That is the structure Marcus wants.",
          styleContext:
            "Expressive communicators use kickoff emails to set the emotional trajectory for the quarter. If the team reads it and feels nothing, the email has failed.",
        },
      },
    },
  },

  // Scenario 402 - Nina Okafor, meeting, advanced
  {
    id: "scenario-402",
    title: "The Stakeholder Alignment Session",
    context:
      "Nina is leading a cross-functional meeting to align five department heads on a company-wide initiative that has stalled due to competing priorities. Each stakeholder has their own agenda, and trust is low.",
    chooseContext:
      "Nina has opened by acknowledging the stalemate and is now reframing the initiative as a shared opportunity rather than a shared burden. She wants each person to see their role in the success story.",
    rewriteContext:
      "Nina has asked you to draft a follow-up email to all five stakeholders summarising the alignment reached, the individual commitments, and the shared vision for the initiative.",
    characterId: "nina-okafor",
    dialogue:
      "I know this initiative has felt like one more thing on everyone's list, and I understand why it has stalled. But I want to reframe something. This is not five departments contributing to someone else's project. This is five departments co-creating something that makes each of your teams stronger. If we get this right, every person in this room has a better story to tell their board.",
    chooseDialogue:
      "I have spoken to each of you individually, and what struck me is that your priorities are not as different as they seem in a room together. Marketing wants visibility. Product wants adoption. Sales wants pipeline. Ops wants efficiency. Finance wants return. The initiative delivers all five if we design it together instead of defending our corners.",
    rewriteDialogue:
      "Write the follow-up email. Open with what we achieved today - genuine alignment after weeks of stalemate. Summarise each person's commitment in a way that connects it to their department's priorities, so it feels like their win, not a concession. Close by reminding them what this initiative means when all five departments are pulling together.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "meeting",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Nina is aligning five competing stakeholders by reframing a stalled initiative as a shared opportunity, connecting each person's priorities to the collective outcome, and painting a vision of what success looks like together. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina reframes a burden as an opportunity, connects individual priorities to a collective vision, and uses energetic, forward-looking language to build alignment. This is expressive communication driving stakeholder alignment through shared narrative.",
          observation:
            "Notice how Nina says 'every person in this room has a better story to tell their board'. Expressive communicators motivate by connecting actions to personal narratives of success.",
          coachingTip:
            "When someone aligns competing stakeholders by reframing their individual priorities as parts of a shared success story, they are using an expressive style at an advanced level.",
          styleContext:
            "Expressive communicators build alignment by making everyone feel like the hero of the same story. Each stakeholder sees their contribution as essential, not sacrificial.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina is empathetic to each stakeholder's position, which can look supportive. But notice the strategic reframing and the forward energy. A supportive facilitator would focus more on making each person feel heard; Nina is connecting them to a bigger picture.",
          observation:
            "A supportive facilitator would say 'I want to make sure everyone feels their concerns have been addressed'. Nina says 'your priorities deliver the same outcome if we design it together'. The approach is visionary, not validating.",
          coachingTip:
            "If someone connects individual priorities to a collective vision with energy and narrative, that is expressive. If they ensure each person feels individually heard and safe, that is supportive.",
          styleContext:
            "Expressive communicators align stakeholders by finding the story that includes everyone. They do not resolve competing priorities - they reframe them as complementary chapters in the same book.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has not presented a project plan with dependencies, a resource allocation model, or a structured governance framework for the cross-functional initiative.",
          observation:
            "There is no reference to project management methodology, milestone tracking, or risk registers. Nina is building alignment through vision and narrative, not through operational planning.",
          coachingTip:
            "Is this person creating alignment through structure or through story? Nina is firmly in the story camp.",
          styleContext:
            "Expressive communicators know that the best project plan in the world fails without stakeholder buy-in. They build the emotional foundation first, and the operational plan follows.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina has reframed each department's priority as part of the shared initiative. The head of finance says they support the vision but need to see the ROI modelled before committing resources. How do you respond?",
      options: [
        {
          id: "s402-opt-a",
          text: "Absolutely - and I want the ROI model to be as exciting as the vision. What if we built it together this week? Your financial rigour plus each department's input gives us a model everyone trusts. This should be the easiest business case you have written.",
          score: 10,
          result: "strong",
          explanation:
            "You honoured the need for financial evidence while keeping the collaborative, enthusiastic spirit of the meeting. Making the ROI model a shared project maintains the alignment Nina has built.",
        },
        {
          id: "s402-opt-b",
          text: "I will have the project team put together an ROI model and send it to you by next week. Once you are comfortable with the numbers, we can move forward.",
          score: 5,
          result: "partial",
          explanation:
            "This is responsive but shifts from co-creation to unilateral delivery. Nina would want the finance head to be part of building the case, not just reviewing it.",
        },
        {
          id: "s402-opt-c",
          text: "I think if we wait for perfect financial modelling, we will lose the momentum we have just built. Can we commit in principle and refine the numbers as we go?",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses a legitimate financial concern to preserve momentum. Nina is enthusiastic but not naive - she would never ask a finance director to commit without evidence.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina has asked you to write a follow-up email to five stakeholders summarising alignment achieved, individual commitments tied to department priorities, and the collective vision. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Hi all,\n\nI wanted to say thank you for today. After weeks of this initiative feeling stuck, we did something remarkable this morning - we aligned. Five departments, five different priorities, one shared purpose. That does not happen often, and it is a testament to the quality of leadership in that room.\n\nHere is what each of you committed to, framed in the context of what matters most to your team:\n\n- Marketing (Claire): Lead the customer communication strategy. This gives your team the visibility campaign you have been building toward, with a built-in audience across all five departments' channels.\n- Product (Raj): Integrate the initiative features into the Q3 roadmap. This accelerates adoption of two features your team has already prioritised.\n- Sales (Kim): Pilot the initiative with three enterprise accounts. This creates pipeline evidence that your team can use in every prospect conversation.\n- Operations (Dev): Design the operational workflow for cross-department delivery. This embeds the efficiency gains your team has been advocating for into the company's core process.\n- Finance (Sarah): Build the ROI model collaboratively with all departments. This gives your team the evidence base for a business case that every department has already endorsed.\n\nWhat I am most excited about is this: none of these commitments are sacrifices. Every one of them advances your team's priorities while contributing to something bigger. That is the definition of a great initiative.\n\nNext step: we reconvene in two weeks with progress updates. I genuinely cannot wait to see what we build together.\n\nNina",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email celebrates the alignment, frames each commitment as a departmental win, and closes with genuine excitement. Nina would send this knowing every stakeholder feels invested and valued.",
          observation:
            "You connected each commitment to the department's own priorities, which transforms compliance into ownership. That reframing is the core of expressive stakeholder management.",
          coachingTip:
            "When writing alignment follow-ups for expressive communicators, frame every commitment as a win for the committer. If someone reads their commitment and feels like they are giving something up, the framing has failed.",
          styleContext:
            "Expressive communicators design follow-up emails that make every stakeholder feel like a co-author, not a contributor. The initiative belongs to all of them equally.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether each commitment is genuinely framed as a win for that department or just listed as an action item. The reframing is what makes the email expressive rather than administrative.",
          observation:
            "If commitments are listed as 'Marketing will handle communications' rather than 'Marketing leads the customer communication strategy, giving your team the visibility campaign you have been building toward', the energy is missing.",
          coachingTip:
            "For each commitment, add a sentence about why it is good for that department specifically. That transforms a to-do list into a value proposition.",
          styleContext:
            "Expressive communicators never send follow-up emails that read like meeting minutes. Every action item should feel like an opportunity, not an obligation.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too formal, lists commitments without connecting them to department priorities, or fails to capture the energy of the alignment that was achieved.",
          observation:
            "If your email reads like a project status update rather than a celebration of a breakthrough, it has missed Nina's intent.",
          coachingTip:
            "Open with gratitude and celebration. List each commitment with its departmental benefit. Close with vision and excitement. All three elements are essential.",
          styleContext:
            "Expressive communicators see alignment follow-ups as the cement that holds stakeholder buy-in together. A flat email lets the energy dissipate; a great one locks it in.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (403-405) - feedback
  // ============================================

  // Scenario 403 - Tom Brennan, feedback, foundation
  {
    id: "scenario-403",
    title: "The First Performance Review",
    context:
      "Tom is conducting a first annual performance review with a junior team member who has been anxious about the process. Tom wants to make the review feel like a supportive conversation, not an evaluation.",
    chooseContext:
      "Tom has opened with praise and is now moving to development areas. He can see the team member tensing up and wants to deliver the feedback in a way that feels constructive rather than critical.",
    rewriteContext:
      "Tom has asked you to write the performance review summary in a tone that feels encouraging and growth-oriented, not like a report card.",
    characterId: "tom-brennan",
    dialogue:
      "Before we go any further, I want to say something. This review is not a test, and there is no pass or fail. It is a conversation about where you have grown and where we can help you grow next. I want you to leave this feeling good about what you have achieved, and clear about what comes next.",
    chooseDialogue:
      "There is one area I think we can work on together, and I want to frame it carefully because it is not a criticism - it is an opportunity. You tend to hold back in meetings when you actually have valuable things to say. I have seen it in one-to-one conversations - your ideas are strong. I would love to help you find ways to share them more widely.",
    rewriteDialogue:
      "Write the review summary. Lead with strengths - be specific about what they have done well. When you get to the development area, frame it as something we are working on together, not something they are failing at. Close with a sentence about how excited you are to see them grow in the year ahead.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "feedback",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Tom is conducting a performance review by reframing it as a supportive conversation, acknowledging the team member's anxiety, and delivering development feedback as a shared growth opportunity. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom reframes the review as a conversation, addresses anxiety directly, and frames development areas as shared opportunities rather than individual shortcomings. This is supportive communication making a vulnerable process feel safe.",
          observation:
            "Notice how Tom says 'something we can work on together'. Supportive communicators share ownership of development areas to prevent the recipient from feeling isolated or blamed.",
          coachingTip:
            "When someone reframes evaluation as conversation, acknowledges emotional anxiety, and uses 'we' language for development areas, they are using a supportive style.",
          styleContext:
            "Supportive communicators know that the emotional experience of a review determines whether the feedback is heard. If someone feels judged, they defend. If they feel supported, they grow.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom is warm and encouraging, which can look expressive. But notice the careful, measured pace and the focus on making the person feel safe rather than excited. An expressive reviewer would say 'I am so excited about your potential!'",
          observation:
            "An expressive reviewer would use enthusiastic language about growth opportunities. Tom uses gentle, reassuring language about support and collaboration. The tone is protective, not energising.",
          coachingTip:
            "If someone focuses on making the review feel safe, that is supportive. If they focus on making the review feel exciting, that is expressive.",
          styleContext:
            "Supportive communicators prioritise emotional safety in reviews because they know that growth only happens when someone feels secure enough to be honest about their gaps.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not presented a performance scorecard, benchmarked the team member against peers, or assessed them against a structured competency framework.",
          observation:
            "There is no reference to ratings, rankings, or comparative metrics. Tom is managing the human experience of being reviewed, not executing an assessment methodology.",
          coachingTip:
            "Is this person rating performance or nurturing growth? Tom is firmly in the nurturing camp.",
          styleContext:
            "Supportive communicators see performance reviews as development conversations, not evaluation events. The purpose is growth, not grading.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom has gently raised that the team member holds back in meetings. They say they are afraid of saying something wrong in front of senior people. How do you respond?",
      options: [
        {
          id: "s403-opt-a",
          text: "That is honest, and I appreciate you trusting me with it. The fear of getting it wrong is natural. What if I gave you a heads-up before the next meeting on a topic you have insight on, so you can prepare something you feel confident about?",
          score: 10,
          result: "strong",
          explanation:
            "You validated the fear, normalised it, and offered a practical, gentle step forward. The 'heads-up' approach reduces anxiety without forcing public exposure. This matches Tom's supportive style perfectly.",
        },
        {
          id: "s403-opt-b",
          text: "Everyone feels that way at first. The more you contribute, the more confident you will get. Try speaking up at least once in the next meeting and see how it feels.",
          score: 5,
          result: "partial",
          explanation:
            "This normalises the fear but the suggestion is a bit blunt. 'Try speaking up once' might feel like pressure rather than support. Tom would offer a softer on-ramp.",
        },
        {
          id: "s403-opt-c",
          text: "Your ideas are good - you just need to back yourself. Senior people were once junior too. Do not overthink it, just say what you are thinking.",
          score: 0,
          result: "weak",
          explanation:
            "This minimises the fear with 'do not overthink it'. For someone who is genuinely anxious, being told to just do it is not helpful. Tom would see this as dismissive of a real emotional barrier.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom has asked you to write a performance review summary that leads with specific strengths, frames the development area as a shared growth opportunity, and closes with encouragement. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Annual Performance Review Summary\n\nStrengths:\n- Your attention to detail has been outstanding. The client reports you produced in Q3 were cited by two senior partners as the best they had seen from the team.\n- You have built a strong relationship with the data team, and they specifically mentioned how reliable and responsive you are to work with.\n- Your ability to learn new tools quickly has been impressive. You were fully independent on the analytics platform within three weeks of joining.\n\nDevelopment area:\n- Contributing in meetings. You have excellent ideas - I have seen them in our one-to-ones, and they are consistently thoughtful and well-reasoned. The next step is finding ways to share them in wider forums. This is something we will work on together. I will give you advance notice of meeting topics so you can prepare, and we will build your confidence gradually at a pace that feels right for you.\n\nLooking ahead:\nYou have had an excellent first year, and I am genuinely excited to see you continue to grow. The foundations you have built are strong, and I am here to support you every step of the way.\n\nTom",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary leads with specific, evidence-based praise, frames the development area as collaborative and gradual, and closes with genuine warmth. Tom would hand this over feeling confident the team member leaves encouraged.",
          observation:
            "You said 'at a pace that feels right for you', which signals that the development journey respects the individual's comfort level. That phrasing builds trust and removes pressure.",
          coachingTip:
            "When writing reviews for supportive communicators, make the strengths specific and the development area collaborative. The reader should feel proud of what they have done and safe about what comes next.",
          styleContext:
            "Supportive communicators write review summaries that people keep. If the document makes someone feel valued and supported, it has succeeded.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether the strengths are truly specific and whether the development area feels collaborative. If the strengths are generic ('good team player') or the development area feels like a mandate ('you need to speak up more'), the tone is off.",
          observation:
            "If your summary uses the word 'but' between strengths and development, it signals a pivot from positive to negative. Use 'and' or separate sections instead.",
          coachingTip:
            "Replace 'but' with 'and' or a new section heading. The development area should feel like an addition to the person's growth, not a caveat to their praise.",
          styleContext:
            "Supportive communicators never let praise feel conditional. The strengths are real. The development area is separate. Both are genuine.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary is either too brief, too clinical, or frames the development area as a failing rather than an opportunity.",
          observation:
            "If your summary reads like a scorecard with 'areas for improvement' listed as deficiencies, it has missed Tom's brief entirely.",
          coachingTip:
            "Lead with at least three specific strengths. Frame the development area as 'something we will work on together'. Close with genuine encouragement. All three elements must be warm and personal.",
          styleContext:
            "Supportive communicators see reviews as acts of care. The summary should make the reader feel seen, valued, and supported - not assessed and graded.",
        },
      },
    },
  },

  // Scenario 404 - Leah Morgan, feedback, intermediate
  {
    id: "scenario-404",
    title: "The Missed Deadline Conversation",
    context:
      "Leah needs to discuss a missed deadline with a team member who is normally reliable. Rather than treating it as a performance issue, she wants to understand what happened and offer support.",
    chooseContext:
      "The team member has explained that they were overwhelmed by competing priorities and did not feel able to ask for help. Leah wants to address both the missed deadline and the reluctance to speak up.",
    rewriteContext:
      "Leah has asked you to write a brief follow-up note that acknowledges the conversation, restates the support available, and gently reinforces the importance of flagging risks early.",
    characterId: "leah-morgan",
    dialogue:
      "I noticed the report deadline was missed, and I wanted to check in - not to give you a hard time, but to understand what happened. You are normally one of the most reliable people on this team, so if a deadline slipped, my first instinct is that something got in the way, not that you dropped the ball.",
    chooseDialogue:
      "I am glad you told me about the competing priorities - that helps me understand. But I also want to talk about the other thing you said, about not feeling able to ask for help. That concerns me more than the missed deadline, honestly. I want this to be a team where asking for help is seen as strength, not weakness. What can I do to make that feel more possible for you?",
    rewriteDialogue:
      "Write a short follow-up note. Thank them for the honest conversation. Restate that asking for help early is always welcome and will never be held against them. And gently mention that flagging risks early protects the whole team, so I need them to do that next time something feels unmanageable.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "feedback",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Leah is addressing a missed deadline by leading with trust in the team member's reliability, seeking to understand before judging, and expressing greater concern about the reluctance to ask for help than the missed deadline itself. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah leads with trust, assumes good intent, prioritises understanding over accountability, and is more concerned about the emotional barrier to asking for help than the operational impact of the missed deadline. This is deeply supportive communication.",
          observation:
            "Notice how Leah says 'that concerns me more than the missed deadline'. Supportive communicators see the human pattern behind the operational failure and address the root cause.",
          coachingTip:
            "When someone addresses a failure by seeking to understand rather than blame, and is more concerned about the person than the deliverable, they are using a supportive style.",
          styleContext:
            "Supportive communicators see missed deadlines as symptoms, not problems. The real issue is almost always about the person's experience, not their performance.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah is warm and caring, which can look expressive. But notice the measured pace and focus on creating safety rather than energy. An expressive leader would say 'do not worry - we will fix this together and it will be great!'",
          observation:
            "An expressive leader would energise the person and redirect toward a positive outcome. Leah is sitting with the vulnerability and working to remove the barrier to asking for help. The approach is patient, not propulsive.",
          coachingTip:
            "If someone prioritises creating psychological safety, that is supportive. If they prioritise creating forward momentum, that is expressive.",
          styleContext:
            "Supportive communicators address missed deadlines by making it safer to flag problems early next time. They invest in the conditions that prevent future failures.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has not reviewed the project timeline, assessed the impact on downstream deliverables, or proposed a structured risk management process.",
          observation:
            "There is no reference to project management methodology, risk registers, or process improvements. Leah is managing the human dimension of the failure, not the operational one.",
          coachingTip:
            "Is this person fixing a process or supporting a person? Leah is firmly focused on the person.",
          styleContext:
            "Supportive communicators believe that if you fix the conditions that led to the failure - in this case, the reluctance to ask for help - the operational fixes follow naturally.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah has asked what she can do to make asking for help feel more possible. The team member says they do not want to look incompetent in front of their peers. How do you respond?",
      options: [
        {
          id: "s404-opt-a",
          text: "I understand that fear, and it is more common than you think. What if we set up a weekly check-in, just us? You flag anything overwhelming before it becomes visible. Asking for help does not have to feel public.",
          score: 10,
          result: "strong",
          explanation:
            "You validated the fear, normalised it, offered a private mechanism for flagging issues, and provided genuine reassurance. This creates a safe path forward without any public exposure.",
        },
        {
          id: "s404-opt-b",
          text: "Nobody would think that. You are one of the strongest performers on the team. You should feel confident asking for support when you need it.",
          score: 5,
          result: "partial",
          explanation:
            "This is reassuring but dismisses the fear by telling them how they should feel. Leah would want to acknowledge the fear as valid before offering reassurance.",
        },
        {
          id: "s404-opt-c",
          text: "Asking for help is part of being professional. Everyone on the team does it. I would rather you flagged a risk early than missed a deadline quietly.",
          score: 0,
          result: "weak",
          explanation:
            "This is logical but tone-deaf. The team member has shared a vulnerability, and responding with 'it is part of being professional' minimises their feeling. Leah would see this as a missed moment of connection.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah has asked you to write a brief follow-up note thanking them for the honest conversation, restating that asking for help is welcome, and gently reinforcing the need to flag risks early. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi Jordan,\n\nThank you for the conversation today. I know it was not easy to talk about, and I genuinely appreciate your honesty.\n\nI want to reiterate something I said in person: asking for help will never be held against you. It is one of the smartest things a professional can do, and it takes courage. If anything feels unmanageable, I would always rather hear about it early so we can work through it together.\n\nThe one thing I would ask going forward is that you flag risks as soon as you feel them building, even before you are sure they are real problems. That early signal helps me protect you and the wider team from pressure that should not sit on one person's shoulders.\n\nYou are doing excellent work, and one missed deadline does not change that. I am here whenever you need me.\n\nLeah",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your note is warm, reinforces the open-door policy, gently sets the expectation for early risk-flagging, and closes with genuine reassurance. Leah would send this knowing the team member feels cared for and clear on what comes next.",
          observation:
            "You framed risk-flagging as protection rather than obligation - 'helps me protect you and the wider team'. That makes the request feel caring, not demanding.",
          coachingTip:
            "When writing feedback follow-ups for supportive communicators, frame expectations as acts of care. 'Flag risks so I can protect you' is more powerful than 'flag risks because it is your responsibility'.",
          styleContext:
            "Supportive communicators see follow-up notes after difficult conversations as a chance to cement trust. The note should confirm that the vulnerability shared was safe and valued.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether the risk-flagging request feels gentle or directive. If it reads as an instruction rather than a caring ask, the tone is off for Leah's style.",
          observation:
            "If your note says 'I expect you to flag risks early going forward', it sounds like a mandate. 'I would ask that you flag risks when they feel like they are building' sounds like a partnership.",
          coachingTip:
            "Soften expectations with 'I would ask' or 'what would really help me is'. Supportive communicators frame requests as collaborative, not directive.",
          styleContext:
            "Supportive communicators set expectations by explaining how the change helps both parties. The request should feel mutual, not one-directional.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your note is either too brief, too formal, or focuses on the process expectation without acknowledging the emotional dimension of the conversation.",
          observation:
            "If your note jumps straight to 'please ensure risks are flagged early' without first thanking them for their honesty and reinforcing support, it signals that the conversation was about the deadline, not the person.",
          coachingTip:
            "Start with gratitude for their openness. Reinforce support. Then gently add the forward-looking ask. Close with reassurance. All four elements matter.",
          styleContext:
            "Supportive communicators know that the follow-up note determines whether the person feels safe to be vulnerable next time. Get it wrong and they will suffer in silence again.",
        },
      },
    },
  },

  // Scenario 405 - David Chen, feedback, advanced
  {
    id: "scenario-405",
    title: "The Peer Feedback Facilitation",
    context:
      "David is introducing a peer feedback process for his team. He knows that giving and receiving feedback from colleagues can be more anxiety-inducing than manager feedback, and he wants to create a safe structure.",
    chooseContext:
      "David has presented the format: anonymous written feedback on three specific themes, followed by optional group discussion. Some team members are uncomfortable with the idea.",
    rewriteContext:
      "David has asked you to write the introduction message for the peer feedback exercise, setting the tone, explaining the process, and making people feel safe enough to participate honestly.",
    characterId: "david-chen",
    dialogue:
      "I know the idea of peer feedback can feel uncomfortable - it is one thing to hear development points from your manager, and something quite different to hear them from the person you sit next to. So I want to be clear about why we are doing this, and more importantly, how we are doing it. This is designed to help, not to hurt. And I have built in safeguards to make sure it stays that way.",
    chooseDialogue:
      "The feedback is anonymous and themed around three specific questions. You are not being asked to rate each other or deliver harsh truths. You are being asked: what does this person do that helps you do your best work, what could they do differently, and what do you appreciate about them? Two positives and one developmental. And you can skip any person or question you are not comfortable answering.",
    rewriteDialogue:
      "Write the introduction message. Start by acknowledging that this might feel uncomfortable. Explain the three questions clearly. Emphasise that it is anonymous, that it is themed around helpfulness, and that nobody has to answer anything they are not comfortable with. Close by explaining why this matters - because we get better when we hear how we impact each other.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "feedback",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "David is introducing peer feedback by acknowledging the anxiety it causes, building in anonymity and opt-out safeguards, framing questions around helpfulness, and emphasising that the process is designed to help rather than hurt. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David leads with empathy for the anxiety, builds extensive psychological safeguards, frames the feedback positively (two appreciations to one developmental), and allows opt-outs. This is supportive communication designing a process around emotional safety.",
          observation:
            "Notice how David says 'you can skip any person or question you are not comfortable answering'. Supportive communicators always build in escape routes so people never feel trapped.",
          coachingTip:
            "When someone introduces a vulnerable process by acknowledging the discomfort, building in safeguards, and making participation genuinely optional, they are using a deeply supportive style.",
          styleContext:
            "Supportive communicators know that peer feedback is one of the most emotionally charged processes in a team. They invest heavily in design to ensure it builds trust rather than damaging it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David is warm and caring, which can look expressive. But notice the focus on safety design rather than enthusiasm. An expressive leader would say 'this is going to be amazing for our team culture!' David says 'I have built in safeguards to make sure it stays safe'.",
          observation:
            "An expressive leader would energise the team about the growth opportunity. David is systematically removing the barriers to honest participation. The approach is protective, not energising.",
          coachingTip:
            "If someone designs a feedback process around emotional safety, that is supportive. If they design it around excitement and growth energy, that is expressive.",
          styleContext:
            "Supportive communicators prioritise psychological safety in feedback processes because they know that unsafe feedback damages relationships permanently.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not presented research data on peer feedback effectiveness, designed a scoring rubric, or proposed a statistical analysis of the results.",
          observation:
            "There is no reference to 360-degree feedback methodology, psychometric frameworks, or evidence-based assessment design. David is managing the emotional experience, not the measurement system.",
          coachingTip:
            "Is this person designing a measurement tool or a safe experience? David is firmly focused on making the process feel safe enough that people participate honestly.",
          styleContext:
            "Supportive communicators believe that the quality of peer feedback depends entirely on how safe people feel giving and receiving it. The process design is emotional, not analytical.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "David has explained the peer feedback format. A team member says they are worried about receiving negative feedback anonymously because they will not know who said it or get a chance to discuss it. How do you respond?",
      options: [
        {
          id: "s405-opt-a",
          text: "That is a valid concern. The safeguard is this: the question asks 'what could they do differently to help you', not 'what are they doing wrong'. After the written round, there is an optional facilitated discussion to explore the feedback. Participation is entirely your choice.",
          score: 10,
          result: "strong",
          explanation:
            "You validated the concern, explained the specific safeguard, and highlighted the optional discussion mechanism. The emphasis on choice at every stage maintains David's supportive design.",
        },
        {
          id: "s405-opt-b",
          text: "Anonymous feedback can feel uncomfortable, but it is also more honest. People are more likely to share useful feedback when their name is not attached. Try to focus on the growth opportunity rather than the discomfort.",
          score: 5,
          result: "partial",
          explanation:
            "This is true but dismisses the emotional concern by redirecting to the logical benefit. David would want you to validate the feeling before explaining the reasoning.",
        },
        {
          id: "s405-opt-c",
          text: "If the feedback is constructive, it should not matter who said it. The content is what matters, not the source. Focus on what you can learn from it.",
          score: 0,
          result: "weak",
          explanation:
            "This is dismissive of a genuine emotional response. Telling someone that their feelings about anonymous feedback are irrelevant contradicts everything David is trying to create.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David has asked you to write the introduction message for the peer feedback exercise. Acknowledge the discomfort, explain the three questions, emphasise anonymity and opt-out options, and explain why it matters. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Hi team,\n\nNext week we are trying something new: a peer feedback exercise. I want to be upfront - I know this might feel uncomfortable for some of you, and that is completely normal. Giving and receiving feedback from the people you work alongside every day is different from hearing it from a manager, and I respect that.\n\nHere is how it works. You will be asked three questions about each team member:\n\n1. What does this person do that helps you do your best work?\n2. What is one thing they could do differently that would help you even more?\n3. What do you genuinely appreciate about working with them?\n\nTwo appreciations, one suggestion. The focus is on helpfulness, not evaluation.\n\nImportant safeguards:\n- All responses are anonymous. Nobody will know who wrote what.\n- You can skip any person or any question you are not comfortable answering. No explanation needed.\n- After the written round, there will be an optional facilitated discussion where you can explore any feedback you received. Participation in that session is entirely your choice.\n\nWhy are we doing this? Because we spend more time with each other than with our managers, and the way we work together has a huge impact on how each of us performs. Hearing how you help - and how you could help more - is one of the most powerful development tools available to a team.\n\nIf you have any concerns about the process before we start, please come and talk to me. I would rather adjust the approach than have anyone participate feeling anxious.\n\nDavid",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message acknowledges the discomfort honestly, explains the process clearly, highlights every safeguard, and explains the purpose in human terms. David would send this knowing his team feels safe enough to participate genuinely.",
          observation:
            "You closed with an invitation to raise concerns privately before the exercise starts. That final safeguard ensures nobody feels forced into something they are not ready for.",
          coachingTip:
            "When introducing vulnerable processes for supportive communicators, build in safeguards at every stage and make the final sentence an open door. Safety is not a feature - it is the foundation.",
          styleContext:
            "Supportive communicators know that the quality of feedback is directly proportional to the safety of the process. Every safeguard increases honesty. Every removed safeguard increases fear.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether you have acknowledged the emotional difficulty explicitly enough and whether all safeguards are clearly stated. If the opt-out option is buried or implied rather than stated, people may not feel truly free to use it.",
          observation:
            "If your message explains the process efficiently but does not linger on the emotional dimension, it feels procedural rather than caring.",
          coachingTip:
            "Give the emotional acknowledgement and safeguards as much space as the process explanation. Supportive communicators lead with feelings, not logistics.",
          styleContext:
            "Supportive communicators know that in anxious situations, people read the emotional tone before the content. If the message feels safe in the first paragraph, they will read the rest. If it does not, they will disengage.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too brief, too procedural, or fails to address the emotional dimension of peer feedback. It reads like a process announcement rather than a carefully designed introduction.",
          observation:
            "If your message says 'we will be conducting a peer feedback exercise next week - please complete the attached form by Friday', it has missed David's brief entirely.",
          coachingTip:
            "Start with empathy. Explain the process with care. List every safeguard explicitly. Explain the purpose in human terms. Close with a personal invitation to raise concerns. All five elements are essential.",
          styleContext:
            "Supportive communicators see the introduction message as the most important part of the peer feedback process. If the message is wrong, the exercise fails before it starts.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (406-408) - sales
  // ============================================

  // Scenario 406 - Rachel Finch, sales, foundation
  {
    id: "scenario-406",
    title: "The Pipeline Review",
    context:
      "Rachel is reviewing the sales pipeline with her team. She has noticed that the conversion rate from proposal to close has dropped by 15% over the last quarter and wants to identify the root cause.",
    chooseContext:
      "Rachel has segmented the data by deal size, industry, and sales rep. She has found that the drop is concentrated in mid-market deals where the decision-making cycle has lengthened.",
    rewriteContext:
      "Rachel has asked you to write a briefing document for the sales team summarising the pipeline analysis, the root cause, and three recommended actions to improve the conversion rate.",
    characterId: "rachel-finch",
    dialogue:
      "Our proposal-to-close conversion rate has dropped from 42% to 27% this quarter. I have broken the data down three ways: by deal size, by industry, and by rep. The drop is not uniform. Enterprise deals are stable at 38%. Small deals are actually up. The problem is mid-market, specifically deals between 50K and 200K, where the average decision cycle has extended from 28 days to 47 days.",
    chooseDialogue:
      "The extended cycle is not about our product or pricing. I cross-referenced with the CRM data and the drop-off point is consistent: week four, after the second stakeholder meeting. My hypothesis is that we are losing to internal procurement processes that have become more complex since last year's budget cuts. The deals are not dying - they are stalling.",
    rewriteDialogue:
      "Write the briefing. Start with the data - the conversion drop, the segmentation, and the root cause hypothesis. Then propose three actions: a mid-market specific follow-up cadence, a procurement navigation guide for the sales team, and a revised forecasting model that accounts for the longer cycle. Make every recommendation evidence-based.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "sales",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel has analysed a sales conversion drop by segmenting data three ways, identifying the specific deal size and stage where deals stall, and forming an evidence-based hypothesis about the root cause. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel segments data by multiple dimensions, identifies the specific segment where the problem occurs, pinpoints the exact stage of the deal cycle where drop-off happens, and forms a testable hypothesis. This is analytical communication applied to sales diagnosis.",
          observation:
            "Notice how Rachel says 'my hypothesis is that we are losing to internal procurement processes'. Analytical communicators frame their conclusions as hypotheses to be tested, not as facts to be accepted.",
          coachingTip:
            "When someone diagnoses a sales problem by segmenting data, identifying patterns, and forming testable hypotheses, they are using an analytical style.",
          styleContext:
            "Analytical communicators do not accept 'sales are down' as a diagnosis. They break the problem into components, isolate the variable causing the decline, and propose targeted fixes.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Rachel is decisive about the diagnosis, which can look direct. But notice the depth of analysis - three segmentation dimensions, CRM cross-referencing, and a hypothesis about procurement complexity. A direct communicator would have said 'mid-market deals are stalling - fix it'.",
          observation:
            "A direct communicator would jump from the problem to the fix. Rachel investigates the why before proposing the what.",
          coachingTip:
            "If someone investigates a problem at multiple levels before proposing solutions, that is analytical. If they identify the problem and immediately demand action, that is direct.",
          styleContext:
            "Analytical communicators believe that the quality of the solution depends on the quality of the diagnosis. They invest in understanding before acting.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not explored how the sales team feels about the pipeline, whether morale is affecting performance, or whether the reps need emotional support during a difficult quarter.",
          observation:
            "There is no reference to team motivation, individual confidence, or the human impact of declining numbers. Rachel is solving a data problem, not a people problem.",
          coachingTip:
            "Is this person diagnosing a human problem or a data problem? Rachel is firmly in the data camp.",
          styleContext:
            "Analytical communicators address sales declines by finding the structural cause. They trust that fixing the system will fix the results, and the morale will follow.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel has identified that mid-market deals are stalling at week four due to procurement complexity. A sales rep says the real problem is that mid-market clients just take longer to decide and there is nothing we can do about it. How do you respond?",
      options: [
        {
          id: "s406-opt-a",
          text: "The data tells a different story. The stall happens at week four after the second stakeholder meeting, not randomly. That suggests a procurement step we are not navigating well. If we identify what happens there and build it into our process, we shorten the cycle without pressuring the client.",
          score: 10,
          result: "strong",
          explanation:
            "You used Rachel's data to challenge the assumption with evidence, identified a specific intervention point, and proposed a targeted solution. This matches Rachel's analytical approach perfectly.",
        },
        {
          id: "s406-opt-b",
          text: "You might be right for some deals. But let us test the hypothesis with the next ten mid-market proposals and track where exactly they slow down. If the data confirms your view, we will adjust the approach.",
          score: 5,
          result: "partial",
          explanation:
            "Testing is good, but Rachel has already done the analysis. Proposing more data collection delays action on a problem that has already been diagnosed with sufficient evidence.",
        },
        {
          id: "s406-opt-c",
          text: "I think we should just accept that mid-market takes longer and adjust our forecasting accordingly. Fighting the natural sales cycle will only frustrate the team.",
          score: 0,
          result: "weak",
          explanation:
            "This accepts the status quo without investigating whether it can be changed. Rachel has evidence that the stall is at a specific point, which suggests it is addressable. Accepting it wastes the diagnostic insight.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel has asked you to write a briefing document with the pipeline data, root cause analysis, and three evidence-based recommendations. Write it in an analytical style - structured, specific, and data-driven.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Sales Pipeline Briefing - Q1 Conversion Analysis\n\nProblem: Proposal-to-close conversion dropped from 42% to 27% this quarter.\n\nSegmentation:\n- Enterprise (200K+): Stable at 38%. No intervention required.\n- Small (<50K): Improved to 55% from 48%. Positive trend.\n- Mid-market (50K-200K): Dropped from 44% to 18%. This segment accounts for the entire overall decline.\n\nRoot cause hypothesis: Mid-market deals are stalling at week four, after the second stakeholder meeting. Average decision cycle extended from 28 to 47 days. CRM data shows consistent drop-off at the internal procurement review stage. Budget cuts in 2025 introduced additional approval layers for mid-market spend.\n\nRecommended actions:\n\n1. Mid-market follow-up cadence\n   Introduce a specific day-21 touchpoint addressing procurement requirements. Provide a 'procurement-ready' pack that includes ROI summary, implementation timeline, and risk mitigation statement - the three documents most commonly requested at this stage.\n   Expected impact: Reduce cycle extension by 7-10 days.\n\n2. Procurement navigation guide\n   Create a one-page guide for the sales team mapping the typical mid-market procurement process. Include the common approval stages, the documents required at each, and the questions to ask at proposal stage to identify the client's internal process early.\n   Expected impact: Reduce week-four stalls by pre-empting procurement requirements.\n\n3. Revised forecasting model\n   Adjust mid-market deal forecasting to reflect a 47-day average cycle (previously 28). Weight pipeline probability by days in cycle rather than stage alone.\n   Expected impact: Improve forecast accuracy by aligning predictions with observed behaviour.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your briefing is data-driven, clearly structured, and every recommendation is linked to the evidence. Rachel would share this with the sales team knowing it gives them a clear, actionable plan grounded in reality.",
          observation:
            "You included expected impact estimates for each recommendation, which allows the team to prioritise and the leadership to evaluate ROI. Analytical communicators always quantify the expected outcome.",
          coachingTip:
            "When writing briefings for analytical communicators, connect every recommendation to the data that justifies it and estimate the expected impact. Recommendations without evidence are opinions.",
          styleContext:
            "Analytical communicators judge briefings by whether they could be defended in a room full of sceptics. Every claim needs data. Every recommendation needs a rationale.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether each recommendation is truly linked to the data and whether the expected impact is quantified. If any recommendation is generic sales advice without a data connection, it weakens the briefing.",
          observation:
            "If your recommendations include 'improve follow-up processes' without specifying what, when, and why based on the data, they are too vague.",
          coachingTip:
            "For each recommendation, ask: which data point justifies this? If you cannot point to a specific finding, the recommendation may not be evidence-based.",
          styleContext:
            "Analytical communicators distrust recommendations that could appear in any sales briefing. The recommendations should be uniquely tailored to the specific data patterns identified.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your briefing lacks the data specificity, the root cause analysis, or the evidence-based recommendations that Rachel requested.",
          observation:
            "If your briefing says 'conversion rates have declined and we recommend improving our sales process', it is too generic to be useful.",
          coachingTip:
            "Start with the specific numbers. Show the segmentation. Present the root cause. Then propose actions that directly address the diagnosed problem. Every element must be specific.",
          styleContext:
            "Analytical communicators reject briefings that could have been written without looking at the data. The analysis should be inseparable from the recommendations.",
        },
      },
    },
  },

  // Scenario 407 - Owen Grant, sales, intermediate
  {
    id: "scenario-407",
    title: "The Competitive Win-Loss Analysis",
    context:
      "Owen has been asked to conduct a win-loss analysis for the last quarter. The sales team believes they are losing on price, but Owen suspects the data tells a different story.",
    chooseContext:
      "Owen has completed his analysis of 34 lost deals and 28 won deals. He is presenting findings that challenge the team's assumption that price is the primary loss factor.",
    rewriteContext:
      "Owen has asked you to write a summary report that presents the win-loss findings with actionable recommendations for adjusting the sales approach based on the real reasons deals are won and lost.",
    characterId: "owen-grant",
    dialogue:
      "I reviewed 34 lost deals and 28 won deals from last quarter. The team's assumption is that we are losing on price. The data does not support that. Price was cited as the primary reason in only 6 of the 34 losses - that is 18%. The top loss factor was implementation timeline: 14 of the 34 - 41% - cited our projected go-live date as too slow compared to competitors. The second factor was reference availability: 9 losses, 26%, where the prospect asked for a reference in their industry and we could not provide one.",
    chooseDialogue:
      "On the win side, the data is equally interesting. Our top win factor is not price either. It is solution fit: 16 of 28 wins - 57% - cited our product's alignment with their specific requirements as the primary reason for choosing us. The second win factor is relationship quality at 25%. Price was the primary win factor in only 4 of 28 deals - 14%. We are not winning or losing on price. We are winning on fit and losing on speed and credibility.",
    rewriteDialogue:
      "Write the report. Present the win and loss factors with the data. Include a comparison table showing the team's assumptions versus reality. Then propose three changes: accelerate the implementation timeline by offering a phased approach, build an industry-specific reference library, and retrain the team to lead on solution fit rather than price. Every recommendation must reference the specific data point that justifies it.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "sales",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Owen has analysed 62 deals, challenged the team's price assumption with specific percentages, identified the real win and loss factors with data, and proposed evidence-based changes to the sales approach. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen conducted a systematic win-loss analysis, challenged assumptions with specific data, identified patterns, and proposed recommendations tied directly to the evidence. This is analytical communication at its most valuable - replacing gut feeling with facts.",
          observation:
            "Notice how Owen presents the win-side data alongside the loss-side data. Analytical communicators analyse both directions to build a complete picture, not just the problem side.",
          coachingTip:
            "When someone uses data to challenge assumptions, presents both win and loss factors with specific percentages, and ties recommendations to evidence, they are using an advanced analytical approach.",
          styleContext:
            "Analytical communicators see assumptions as hypotheses to be tested. If the data does not support the assumption, they follow the data, not the assumption.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen is decisive about what the data shows, which can look direct. But notice the scale of investigation - 62 deals analysed, multiple factors identified, assumptions explicitly tested. A direct communicator would have said 'we are not losing on price - change the pitch'.",
          observation:
            "A direct communicator would present the conclusion. Owen presents the evidence that leads to the conclusion, allowing the audience to follow the logic.",
          coachingTip:
            "If someone shows their working before presenting the conclusion, that is analytical. If they present the conclusion and expect compliance, that is direct.",
          styleContext:
            "Analytical communicators build credibility by showing the analysis, not just the answer. The audience's confidence in the recommendation comes from the rigour of the investigation.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not explored how the sales team feels about their win rate, whether low morale is contributing to the losses, or whether individual reps need support.",
          observation:
            "There is no reference to team dynamics, individual confidence, or the emotional impact of losing deals. Owen is diagnosing a process problem, not a people problem.",
          coachingTip:
            "Is this person analysing deals or supporting people? Owen is firmly analysing deals.",
          styleContext:
            "Analytical communicators address sales challenges by finding the systemic cause. They trust that fixing the approach will fix the results.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen has shown that implementation timeline is the top loss factor, not price. A senior rep argues that clients always say speed but really mean price, and the timeline objection is just a negotiation tactic. How do you respond?",
      options: [
        {
          id: "s407-opt-a",
          text: "That is testable. Of 14 timeline losses, 9 clients chose a competitor with a higher price but faster go-live. If timeline were a proxy for price, they would have chosen cheaper. The data shows they genuinely value speed over cost.",
          score: 10,
          result: "strong",
          explanation:
            "You tested the rep's assumption against the data and disproved it with specific evidence. This is exactly how Owen would respond - with facts, not opinions.",
        },
        {
          id: "s407-opt-b",
          text: "That is an interesting perspective. Let us add a question to our loss interview process to test whether timeline is genuine or a negotiation tactic. We will know for sure after another quarter of data.",
          score: 5,
          result: "partial",
          explanation:
            "More data is good, but Owen has already provided sufficient evidence. Delaying action for another quarter means losing more deals to the same preventable factor.",
        },
        {
          id: "s407-opt-c",
          text: "You have been selling for longer than I have been analysing. I defer to your experience on how clients really make decisions.",
          score: 0,
          result: "weak",
          explanation:
            "This abandons the data in favour of anecdotal experience. Owen's entire analysis exists because intuition was wrong. Deferring to the assumption that the data disproves is the opposite of evidence-based decision-making.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen has asked you to write a win-loss report with data, an assumption vs. reality comparison, and three recommendations linked to specific data points. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Win-Loss Analysis Report - Q4\n\nSample: 34 lost deals, 28 won deals (62 total).\n\nAssumption vs. Reality:\n| Factor | Team assumption | Actual data |\n|---|---|---|\n| Primary loss factor | Price | Implementation timeline (41% of losses) |\n| Secondary loss factor | Product gaps | Reference availability (26% of losses) |\n| Primary win factor | Price | Solution fit (57% of wins) |\n| Price as primary factor | Dominant | 18% of losses, 14% of wins |\n\nLoss factors (34 deals):\n1. Implementation timeline: 14 deals (41%). Clients chose competitors with faster go-live dates, including 9 cases where the chosen competitor was higher-priced.\n2. Reference availability: 9 deals (26%). Prospects requested industry-specific references we could not provide.\n3. Price: 6 deals (18%). Genuine price losses.\n4. Other: 5 deals (15%). Various factors including geographic coverage and language support.\n\nWin factors (28 deals):\n1. Solution fit: 16 deals (57%). Our product's alignment with specific requirements was the deciding factor.\n2. Relationship quality: 7 deals (25%). Strength of the sales relationship during the evaluation.\n3. Price: 4 deals (14%). We were chosen primarily on cost.\n4. Other: 1 deal (4%).\n\nRecommendations:\n\n1. Offer phased implementation to reduce go-live timeline.\n   Data link: 41% of losses cite timeline. A phased approach (core features in 6 weeks, full deployment in 12) would address this without increasing delivery risk.\n   Target: Reduce timeline losses from 41% to below 20% within two quarters.\n\n2. Build an industry-specific reference library.\n   Data link: 26% of losses cite reference gaps. Identify three reference clients in each of our top five target industries. Create standardised case studies and offer facilitated reference calls.\n   Target: Eliminate reference availability as a loss factor within three quarters.\n\n3. Retrain the sales team to lead on solution fit.\n   Data link: 57% of wins are driven by solution fit, but current pitch materials lead with pricing and features. Redesign the pitch to open with specific requirement alignment.\n   Target: Increase win rate by 10 percentage points within two quarters by leading with our strongest win factor.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your report challenges assumptions with data, presents findings clearly, and ties every recommendation to a specific data point with a measurable target. Owen would present this to the sales leadership with complete confidence.",
          observation:
            "You included the assumption vs. reality comparison table, which makes the gap between belief and evidence undeniable. That framing device is powerful for changing entrenched thinking.",
          coachingTip:
            "When writing analytical reports that challenge assumptions, include an explicit comparison between what people believe and what the data shows. The contrast is more persuasive than the data alone.",
          styleContext:
            "Analytical communicators use win-loss reports to replace opinion with evidence. The report's purpose is not to validate feelings but to redirect strategy based on facts.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every recommendation is linked to a specific data point and whether the targets are quantified. If any recommendation is generic sales advice, it weakens the evidence-based approach.",
          observation:
            "If your recommendations include 'improve the sales process' without specifying what to change and why, based on the data, they are too general.",
          coachingTip:
            "For each recommendation, include three elements: the data point that justifies it, the specific action to take, and the measurable target. All three are essential.",
          styleContext:
            "Analytical communicators judge reports by whether the recommendations follow logically from the data. If a recommendation could have been made without the analysis, it does not belong in the report.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your report lacks the data specificity, the assumption challenge, or the evidence-linked recommendations that Owen requested.",
          observation:
            "If your report says 'we need to improve our competitiveness' without specifying against which factors, based on which data, it is too vague to be actionable.",
          coachingTip:
            "Start with the data. Show the segmentation. Present the assumption vs. reality comparison. Then propose actions that directly address the top loss factors with measurable targets.",
          styleContext:
            "Analytical communicators see generic sales reports as worse than no report, because they give the illusion of insight without delivering actual evidence-based direction.",
        },
      },
    },
  },

  // Scenario 408 - Fiona Banks, sales, advanced
  {
    id: "scenario-408",
    title: "The Pricing Strategy Review",
    context:
      "Fiona has been asked to review the company's pricing strategy after sales leadership expressed concern that they are leaving money on the table with enterprise clients. Fiona has analysed two years of deal data.",
    chooseContext:
      "Fiona is presenting her findings to the commercial leadership team. The data reveals that enterprise deals are consistently closing at 15-20% below list price, and the discount rate is accelerating quarter over quarter.",
    rewriteContext:
      "Fiona has asked you to write a pricing strategy recommendation document that presents the analysis, proposes a new tiered pricing model, and includes a transition plan with specific implementation steps.",
    characterId: "fiona-banks",
    dialogue:
      "I analysed 156 enterprise deals over the last eight quarters. The average discount from list price has grown from 12% in Q1 2024 to 22% in Q4 2025. That is not market pressure - competitor pricing has remained stable over the same period. The discount creep is internal: our sales team has learned that they can discount freely to close faster, and there is no governance in place to prevent it. We are training our clients to expect a discount.",
    chooseDialogue:
      "The pattern is clear when you segment by deal size. Deals under 100K close at an average 8% discount. Deals between 100K and 500K close at 19%. Deals over 500K close at 27%. The larger the deal, the larger the discount - but the margin impact is disproportionate. Those 500K+ deals represent 35% of revenue but only 22% of profit contribution because of the discounting.",
    rewriteDialogue:
      "Write the recommendation. Start with the two-year trend data. Include the segmentation by deal size showing how discount rates and profit contribution diverge. Then propose the new model: three pricing tiers with defined discount authorities - reps can approve up to 10%, managers up to 15%, and anything above 15% requires commercial review. Include a transition timeline and the metrics we will track to measure whether the new model is working.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "sales",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Fiona has analysed 156 deals over eight quarters, identified an accelerating discount trend, ruled out market pressure as a cause, segmented by deal size to reveal a profit contribution gap, and proposed a governed pricing model. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona conducted a multi-quarter, multi-segment analysis, identified trends, ruled out alternative explanations, and proposed a structured governance model based on the evidence. This is analytical communication applied to commercial strategy at an advanced level.",
          observation:
            "Notice how Fiona rules out market pressure before attributing the trend to internal behaviour. Analytical communicators eliminate alternative hypotheses systematically before presenting their conclusion.",
          coachingTip:
            "When someone analyses a problem across multiple dimensions, rules out alternative explanations, and proposes a governed system to address the root cause, they are operating at a highly analytical level.",
          styleContext:
            "Analytical communicators do not just identify problems - they prove what is not causing them before proving what is. This rigour makes their conclusions much harder to challenge.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona's proposed governance model is decisive, which can look direct. But notice the eight quarters of analysis, the three-way segmentation, and the comparison against competitor pricing. A direct leader would have said 'discounting is out of control - cap it at 10%'.",
          observation:
            "A direct leader would mandate a cap. Fiona proves why the cap is needed, at what levels it should be set, and how to transition to it. The analysis precedes and justifies the action.",
          coachingTip:
            "If someone proposes a pricing change backed by extensive data analysis and a structured transition plan, that is analytical. If they mandate the change based on gut feeling, that is direct.",
          styleContext:
            "Analytical communicators build pricing models as systems with defined parameters. They do not just set prices - they create frameworks that govern how prices are negotiated.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not explored why sales reps feel the need to discount, whether commission structures incentivise discounting, or whether the team culture rewards deal volume over deal quality.",
          observation:
            "There is no reference to sales team motivation, incentive design, or the personal pressures that drive discounting behaviour. Fiona is fixing a system, not managing a culture.",
          coachingTip:
            "Is this person diagnosing a behavioural problem or a structural problem? Fiona is firmly in the structural camp, proposing governance rather than cultural change.",
          styleContext:
            "Analytical communicators address pricing discipline through systems and governance because they trust structures more than intentions. A well-designed approval system is more reliable than a motivational speech about margin.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Fiona has proposed tiered discount authorities. The VP of Sales argues that adding approval layers will slow down deal cycles and cost them enterprise clients who expect fast decision-making. How do you respond?",
      options: [
        {
          id: "s408-opt-a",
          text: "The data does not support that. Deals under 10% discount close in 32 days on average. Over 20% close in 41 days - deeper discounts trigger procurement reviews that lengthen cycles. The approval layer adds 24-48 hours, marginal against a 32-day cycle.",
          score: 10,
          result: "strong",
          explanation:
            "You challenged the VP's assumption with specific data, showed that discounting does not actually accelerate closing, and quantified the additional time required. This is exactly how Fiona would defend her recommendation.",
        },
        {
          id: "s408-opt-b",
          text: "What if we streamlined the approval process with a 24-hour turnaround guarantee? That way we have governance without significantly slowing the deal.",
          score: 5,
          result: "partial",
          explanation:
            "This addresses the concern practically but concedes the premise that approval layers slow deals. Fiona's data shows they do not, which is the stronger argument.",
        },
        {
          id: "s408-opt-c",
          text: "You know the enterprise market better than I do. If you think approval layers will cost us deals, perhaps we should keep the current system and just set guidelines instead.",
          score: 0,
          result: "weak",
          explanation:
            "This defers to opinion over evidence. Fiona has demonstrated with data that the current system is eroding margin. Reverting to guidelines without governance will produce the same result.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona has asked you to write a pricing strategy recommendation with the two-year trend data, deal-size segmentation, a three-tier discount governance model, a transition timeline, and success metrics. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Pricing Strategy Recommendation - Enterprise Discount Governance\n\nContext: Analysis of 156 enterprise deals over Q1 2024 to Q4 2025.\n\nTrend: Average discount from list price has grown from 12% to 22%. Competitor pricing has remained stable, indicating the increase is internally driven.\n\nSegmentation by deal size:\n| Deal size | Avg. discount | Revenue share | Profit share |\n|---|---|---|---|\n| Under 100K | 8% | 25% | 30% |\n| 100K-500K | 19% | 40% | 48% |\n| Over 500K | 27% | 35% | 22% |\n\nRoot cause: No formal discount governance. Sales reps can offer any discount without approval. Over eight quarters, the average discount has increased by approximately 1.25 percentage points per quarter. At current trajectory, the average will reach 27% by Q4 2026.\n\nProposed model: Three-tier discount authority\n\nTier 1 (up to 10% discount): Sales rep can approve independently. No additional process.\nTier 2 (10-15% discount): Sales manager approval required. Written justification including competitive pressure evidence and margin impact assessment.\nTier 3 (above 15% discount): Commercial review board approval. Requires business case with competitor pricing evidence, strategic account rationale, and lifetime value projection.\n\nTransition timeline:\n- Week 1-2: Communicate new model to sales team. Provide training on the approval process and justification requirements.\n- Week 3-4: Soft launch. New model applies to all new deals. Existing deals in pipeline follow current terms.\n- Week 5-8: Full enforcement. All deals regardless of stage follow the new governance model.\n- Month 3: First quarterly review of discount trends under the new model.\n\nSuccess metrics:\n1. Average enterprise discount rate: Target reduction from 22% to 15% within two quarters.\n2. Profit contribution of 500K+ deals: Target increase from 22% to 28% within three quarters.\n3. Deal cycle time: Monitor for any increase above 5% from current baseline (target: no material change).\n4. Win rate: Monitor for any decrease. If win rate drops more than 3 percentage points, trigger a review of Tier 3 threshold.\n\nReview: Quarterly review of all four metrics. Model will be adjusted if deal cycle or win rate are materially impacted.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your recommendation is comprehensive, evidence-based, and includes a transition plan and success metrics with specific thresholds. Fiona would present this to the commercial leadership team with full confidence.",
          observation:
            "You included safeguard metrics - monitoring win rate and cycle time for negative impacts. Analytical communicators build monitoring into their recommendations to detect unintended consequences early.",
          coachingTip:
            "When writing strategic recommendations for analytical communicators, include both the target metrics and the safeguard metrics. Show that you have thought about what could go wrong, not just what should go right.",
          styleContext:
            "Analytical communicators design recommendations as systems with feedback loops. They do not just implement changes - they build the measurement infrastructure to evaluate whether the changes work.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether the governance tiers are specific enough, whether the transition timeline has clear milestones, and whether the success metrics include thresholds for triggering a review.",
          observation:
            "If your recommendation says 'reduce discounting' without specifying tiers, thresholds, and review criteria, it is a goal, not a system.",
          coachingTip:
            "For each tier, specify the discount range, the approver, and the documentation required. For the metrics, include the target, the timeline, and the trigger for intervention.",
          styleContext:
            "Analytical communicators build governance models that operate independently of individual judgement. If the system requires someone to 'use discretion', it is not specific enough.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your recommendation lacks the data foundation, the structured governance model, or the implementation plan that Fiona specified.",
          observation:
            "If your recommendation says 'we should control discounting more carefully and review pricing regularly', it is too vague to implement.",
          coachingTip:
            "Start with the data that proves the problem. Design the system that fixes it. Plan the transition that implements it. Define the metrics that evaluate it. All four layers are essential.",
          styleContext:
            "Analytical communicators reject recommendations that rely on good intentions. A pricing governance model must be specific enough that any sales manager can apply it consistently without interpretation.",
        },
      },
    },
  },
];
