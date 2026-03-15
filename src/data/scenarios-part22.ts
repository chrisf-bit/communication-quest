import { Scenario } from "@/types";

export const SCENARIOS_PART22: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (253-255)
  // ============================================

  // Scenario 253 - Jordan Cole, meeting, foundation
  {
    id: "scenario-253",
    title: "The Budget Reallocation Meeting",
    context:
      "Jordan has called a cross-functional meeting to announce that the department budget is being reallocated for Q3. Several projects will lose funding, and Jordan needs the team to accept the changes and commit to revised deliverables within the next two weeks.",
    chooseContext:
      "A project lead has pushed back, arguing that cutting their budget will delay a client-facing launch. Jordan needs to hold the line while acknowledging the concern.",
    rewriteContext:
      "Jordan has asked you to draft the meeting summary email confirming the budget changes, revised project priorities, and next steps for each team.",
    characterId: "jordan-cole",
    dialogue:
      "I am not going to dress this up. We have a 15% budget reduction for Q3, and it hits three of our active projects. I have already made the allocation decisions based on business impact, and I am here to walk you through them so we can move forward. This is not a negotiation - it is a briefing with a clear ask at the end.",
    chooseDialogue:
      "I understand this affects your launch timeline, and that matters. But the decision has been made based on overall business priorities. What I need from you now is a revised plan that works within the new budget, delivered to me by Friday.",
    rewriteDialogue:
      "Send the summary before end of day. I want each team to know exactly what has changed, what their revised budget is, and what I need from them by when. No ambiguity - if someone reads this and is confused about what to do next, we have failed.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "meeting",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Jordan has opened a budget meeting by stating the reduction figure, confirming the decisions have already been made, and framing the session as a briefing rather than a discussion. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan leads with the fact, confirms the decisions are final, and sets the expectation that the meeting is about next steps, not debate. This is classic direct communication in a group setting.",
          observation:
            "Notice Jordan says 'This is not a negotiation - it is a briefing with a clear ask at the end.' Direct communicators set the frame of the conversation early so everyone knows what is expected.",
          coachingTip:
            "When someone opens a meeting by clarifying what the meeting is and is not about, they are signalling a direct style. They want alignment on action, not extended discussion.",
          styleContext:
            "Direct communicators believe that allowing ambiguity about whether a decision is open to debate wastes everyone's time and creates false hope.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Jordan uses data (15% reduction) and structure, which can look analytical. But the emphasis is on the decision being final and the expectation being clear, not on walking through the reasoning in depth.",
          observation:
            "An analytical communicator would spend most of the meeting explaining the methodology behind the allocation decisions. Jordan mentions the basis briefly and moves straight to the ask.",
          coachingTip:
            "Ask whether the speaker prioritises explaining the reasoning or driving to the action. Jordan is firmly action-first.",
          styleContext:
            "Direct communicators share enough context to justify their position but resist the urge to over-explain. Efficiency is a value, not a shortcut.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has not checked in on how people feel, invited open discussion, or softened the message with reassurance. The meeting is structured around decisions and actions, not feelings.",
          observation:
            "There is no language like 'I know this is difficult' or 'How does everyone feel about this?' Jordan treats the team as professionals who want clarity over comfort.",
          coachingTip:
            "Look at what the speaker does in the first 30 seconds. Jordan states the problem, the decision, and the format. That sequence is a direct style signature.",
          styleContext:
            "Direct communicators respect their audience by not over-managing their emotions. They assume professionals can handle hard facts delivered clearly.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A project lead has challenged the budget cut, arguing it will delay a client launch. Jordan has acknowledged the concern but held the decision firm and asked for a revised plan by Friday. How do you respond?",
      options: [
        {
          id: "s253-opt-a",
          text: "That is fair. I will have a revised plan on your desk by Thursday. Can I confirm - is the new budget figure fixed, or is there any flexibility if I can show a strong business case for a smaller reduction?",
          score: 10,
          result: "strong",
          explanation:
            "You accept the decision, commit to a deliverable ahead of deadline, and ask one focused clarifying question. This matches Jordan's direct approach without wasting time on emotions.",
        },
        {
          id: "s253-opt-b",
          text: "I will put together the revised plan, but I think we should also schedule a follow-up to discuss the potential client impact in more detail so we can mitigate risks together.",
          score: 5,
          result: "partial",
          explanation:
            "You commit to the plan, which is good, but proposing another meeting to discuss impact signals hesitation. Jordan has made the decision and wants execution, not further analysis.",
        },
        {
          id: "s253-opt-c",
          text: "I appreciate you being upfront, but I think the team needs time to process this before we can commit to revised plans. Can we push the deadline to give people space to adjust?",
          score: 0,
          result: "weak",
          explanation:
            "Asking for processing time directly contradicts Jordan's urgency. Jordan has set a clear deadline because they believe clarity and speed reduce uncertainty, not extend it.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan has asked you to write a meeting summary email covering the budget changes, revised priorities, and next steps for each team. Write it in a direct style that leaves no room for confusion.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Q3 Budget Reallocation - Confirmed Changes and Next Steps\n\nFollowing today's meeting, here is a summary of what has been decided and what each team needs to do next.\n\nBudget changes:\n- Project Alpha: reduced from 120k to 95k. Scope revision required.\n- Project Beta: reduced from 80k to 70k. Timeline extension approved to Q4.\n- Project Gamma: unchanged. Delivery target remains 31 August.\n\nNext steps:\n1. Project Alpha lead: submit revised scope and timeline to Jordan by Friday 21 March.\n2. Project Beta lead: submit updated resourcing plan by Monday 24 March.\n3. Project Gamma lead: no action required. Continue to current plan.\n\nIf your revised plan requires trade-offs that affect client deliverables, flag them explicitly in your submission. Jordan will review all plans by Wednesday 26 March and confirm final sign-off.\n\nNo further meetings are needed unless flagged. If anything above is unclear, contact Jordan directly today.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email names specific budget figures, assigns clear actions with deadlines, and removes any need for follow-up questions. Jordan would send this immediately.",
          observation:
            "You treated each team separately with tailored actions, which shows you understand that direct communication is about precision, not blanket instructions.",
          coachingTip:
            "When summarising decisions for a direct communicator, make every action item answerable with a yes or no. 'Did you submit by Friday?' is verifiable. 'Did you think about the impact?' is not.",
          styleContext:
            "Direct communicators use meeting summaries as accountability tools. Every sentence should either confirm a decision or assign an action.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every team has a specific deliverable with a deadline. If any section uses phrases like 'consider how to adjust' without a concrete ask, it needs tightening.",
          observation:
            "Jordan wants each recipient to read this and know exactly what to do and by when. If they need to infer their action, the email is not direct enough.",
          coachingTip:
            "Replace any instruction that starts with 'think about' or 'consider' with one that starts with 'submit', 'confirm', or 'deliver.'",
          styleContext:
            "Direct communicators see vague instructions as a failure of leadership. The leader's job is to make the next step obvious.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too general, too apologetic, or focused on softening the impact rather than confirming actions. Jordan needs a tool for accountability, not a morale-boosting message.",
          observation:
            "If your email includes phrases like 'I appreciate everyone's patience' or 'We will get through this together', it is prioritising tone over substance.",
          coachingTip:
            "Remove every sentence that does not confirm a decision, assign an action, or set a deadline. What remains is what Jordan needs.",
          styleContext:
            "Direct communicators believe that the best way to support a team through change is to remove ambiguity, not to offer encouragement without action.",
        },
      },
    },
  },

  // Scenario 254 - Sam Hartley, meeting, intermediate
  {
    id: "scenario-254",
    title: "The Process Overhaul Kickoff",
    context:
      "Sam has been asked to lead a meeting to introduce a new approval process for client proposals. The old process had too many sign-off stages and was causing delays. Sam needs the team to adopt the new streamlined process starting next week.",
    chooseContext:
      "A senior colleague has questioned whether removing sign-off stages creates risk. Sam needs to address the concern while keeping the meeting focused on adoption, not redesign.",
    rewriteContext:
      "Sam has asked you to write a brief process change announcement for the wider team, covering what has changed, why, and what everyone needs to do differently starting Monday.",
    characterId: "sam-hartley",
    dialogue:
      "The old proposal process had five approval stages. It took an average of 11 days to get a client proposal out the door. The new process has two stages, and I expect that to drop to three days. I am walking you through the changes now so you can start using the new process on Monday. Questions about how it works are welcome. Questions about whether we should do it are not - that decision is made.",
    chooseDialogue:
      "I hear the concern about risk, and I do not dismiss it. We built in a quality gate at stage two specifically to catch errors that would have been caught at stage four in the old system. The difference is that one person reviews it thoroughly instead of four people glancing at it. If you spot a gap in that gate after the first two weeks, bring it to me with data and I will adjust.",
    rewriteDialogue:
      "Write it for people who skim. I want them to read it in under two minutes and know exactly what has changed and what they need to do. No background essay - just the facts and the actions.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "meeting",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Sam has introduced a new process by comparing it to the old one using specific metrics, stated the start date, and explicitly closed the door on debating the decision. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam uses data to support the case but the core message is about adoption and action. The explicit boundary - 'questions about how, not whether' - is a hallmark of direct communication in meetings.",
          observation:
            "Sam provides just enough data to justify the change (11 days to 3 days) without turning the meeting into a data review. The numbers serve the decision, not the other way around.",
          coachingTip:
            "Direct communicators use data as evidence for a conclusion they have already reached. Analytical communicators use data as the starting point for reaching a conclusion. Sam has already concluded.",
          styleContext:
            "Direct communicators in change situations believe that reopening decided questions in public forums undermines momentum and creates confusion.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. The use of metrics and process comparison can look analytical, but Sam is not inviting analysis. The data exists to shut down debate, not to open it.",
          observation:
            "An analytical communicator would present the data and ask 'What do you think?' Sam presents the data and says 'Start Monday.' That distinction matters.",
          coachingTip:
            "Look at what follows the data. If it is a question, the style leans analytical. If it is a directive, the style is direct.",
          styleContext:
            "Direct communicators often borrow analytical tools - numbers, comparisons, timelines - but deploy them in service of action rather than exploration.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not prioritised team feelings, consensus, or comfort. The meeting is structured around efficiency and adoption, with a clear start date and no room for extended discussion.",
          observation:
            "There is no language about how people feel about the change, no invitation to share concerns broadly, and no suggestion that the timeline is flexible.",
          coachingTip:
            "Count the action-oriented statements versus the empathy-oriented statements. Sam's ratio is heavily weighted toward action.",
          styleContext:
            "Direct communicators assume that a well-explained change does not need emotional processing time. Clarity is the kindness.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A senior colleague has raised concerns about risk from removing sign-off stages. Sam has explained the quality gate built into the new process and offered to adjust if data supports it after two weeks. How do you respond?",
      options: [
        {
          id: "s254-opt-a",
          text: "That makes sense. I will run the new process from Monday and track any issues that come through the stage-two gate. If anything slips through, I will bring you the specifics within the first two weeks as you suggested.",
          score: 10,
          result: "strong",
          explanation:
            "You accept the process, commit to using it, and align with Sam's evidence-based review approach. This matches Sam's direct style of acting first and adjusting based on results.",
        },
        {
          id: "s254-opt-b",
          text: "I appreciate the explanation. Could we run the old and new processes in parallel for a month to compare outcomes before fully committing?",
          score: 5,
          result: "partial",
          explanation:
            "Reasonable in some contexts, but Sam has already decided on the start date. Proposing a parallel run is effectively asking to delay the decision, which contradicts Sam's stated position.",
        },
        {
          id: "s254-opt-c",
          text: "I think we need to consult with the wider team before rolling this out. Not everyone is in this room, and they might have concerns we have not considered.",
          score: 0,
          result: "weak",
          explanation:
            "Sam has made the decision and set the start date. Proposing wider consultation reopens the question Sam explicitly closed. This would frustrate a direct communicator who values decisiveness.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam wants a brief announcement for the wider team about the process change. It needs to be readable in under two minutes, covering what changed, why, and what to do differently from Monday. Write it in a direct style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: New Proposal Approval Process - Starts Monday 17 March\n\nWe are replacing the 5-stage proposal approval process with a 2-stage process. This cuts average approval time from 11 days to 3.\n\nWhat has changed:\n- Stage 1: You draft the proposal and submit it via the new form (link below).\n- Stage 2: Your line manager reviews and approves or returns with comments within 24 hours.\n- All other sign-off stages are removed.\n\nWhat you need to do:\n1. Use the new submission form for all proposals from Monday 17 March.\n2. Do not use the old approval chain - it will be deactivated on Friday.\n3. If your proposal is returned at stage 2, revise and resubmit the same day.\n\nIf you have questions about how the new process works, contact Sam Hartley. The first two weeks are a monitored pilot, and adjustments will be made based on what we learn.\n\nNo action needed before Monday. Just use the new form when you next submit a proposal.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your announcement is scannable, specific, and action-oriented. Someone skimming it knows exactly what changed and what to do. Sam would approve this without changes.",
          observation:
            "You separated 'what has changed' from 'what you need to do', making it easy for people to find the information relevant to them. That structural clarity is what direct communicators value.",
          coachingTip:
            "For process change announcements aimed at direct communicators, use numbered steps for actions and bullet points for changes. Avoid paragraphs where lists will do.",
          styleContext:
            "Direct communicators measure the quality of an announcement by how few follow-up questions it generates. If people have to ask what to do, the announcement failed.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good start, but check whether your announcement clearly separates what has changed from what people need to do. If the actions are buried in explanatory paragraphs, they will be missed.",
          observation:
            "Sam said 'write it for people who skim.' If your key actions require reading full sentences in context to understand, they are not scannable enough.",
          coachingTip:
            "Read your announcement and highlight only the verbs. If the verbs are 'understand', 'consider', 'be aware of', replace them with 'use', 'submit', 'contact.'",
          styleContext:
            "Direct communicators value announcements that can be turned into a checklist. If yours cannot, it needs restructuring.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your announcement is either too long, too explanatory, or focuses on justifying the change rather than instructing people on what to do. Sam asked for facts and actions, not a persuasive essay.",
          observation:
            "If your announcement spends more words on why the change is happening than on what people need to do differently, it has the wrong balance for a direct communicator.",
          coachingTip:
            "Cut your announcement in half. Then cut it again. What survives is probably what Sam actually needs.",
          styleContext:
            "Direct communicators believe that over-explaining a decision signals uncertainty about it. State the change, state the action, and move on.",
        },
      },
    },
  },

  // Scenario 255 - Alex Tran, meeting, advanced
  {
    id: "scenario-255",
    title: "The Resource Conflict Resolution",
    context:
      "Alex has called an urgent meeting between two project leads who are both requesting the same specialist resource for the next four weeks. Alex needs to resolve the conflict in this meeting, not defer it to another conversation.",
    chooseContext:
      "Both project leads have presented strong cases. Alex needs to make a decision in the room and get both parties to commit, including the one who does not get the resource.",
    rewriteContext:
      "Alex has asked you to write a short message to the specialist resource confirming their assignment, the timeline, and what is expected of them for the next four weeks.",
    characterId: "alex-tran",
    dialogue:
      "I have read both business cases. Both are strong. But we have one specialist and four weeks, so I am making the call today. I am not looking for a compromise that weakens both projects. One of you gets the resource, the other gets a plan B that I will help you build before we leave this room.",
    chooseDialogue:
      "Project Horizon gets the specialist for the full four weeks. The client deadline is immovable, and the revenue at risk is higher. Dana, for your project, I am pulling in a senior contractor who starts Wednesday. I will brief them personally. I need both of you to confirm you can work with this by the end of this meeting.",
    rewriteDialogue:
      "Tell the specialist exactly where they are going, what they are doing, who they report to, and when it ends. I do not want them turning up on Monday morning wondering what the plan is.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "meeting",
    skillFocus: "brevity",

    spotQuestion: {
      prompt:
        "Alex has acknowledged both business cases, stated the decision will be made in this meeting, rejected compromise, and committed to building an alternative for the losing party before the meeting ends. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex demonstrates advanced direct communication by making a high-stakes decision in real time, rejecting a diluted compromise, and ensuring both parties leave with a clear plan. The urgency and decisiveness are unmistakable.",
          observation:
            "Notice Alex says 'I am not looking for a compromise that weakens both projects.' Direct communicators at an advanced level understand that some situations require a clean decision, not a split-the-difference outcome.",
          coachingTip:
            "Advanced direct communication is not just about speed - it is about the willingness to make an unpopular call and immediately provide a workable alternative for the affected party.",
          styleContext:
            "Direct communicators believe that a delayed decision in a resource conflict costs both projects. Making the call quickly, even imperfectly, is better than extended deliberation.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Alex is structured and references business cases, which can appear analytical. But Alex is not analysing the cases in the meeting - the analysis happened beforehand. The meeting is about the decision.",
          observation:
            "An analytical communicator would walk through the scoring criteria and invite discussion about the weighting. Alex has already done that work privately and is delivering the outcome.",
          coachingTip:
            "When the analysis has already been done and the speaker is focused on delivering the result, the style is direct, even if analytical thinking informed it.",
          styleContext:
            "Direct communicators often do thorough analysis behind the scenes but present only the conclusion. The rigour is invisible; the decision is visible.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex has not sought consensus, checked feelings, or offered extended time to consider. The meeting is designed to end with a decision, not with a request for further input.",
          observation:
            "Alex does not ask 'How do you feel about this?' or 'What would work for both of you?' The structure is: here is the decision, here is why, here is the plan for both sides.",
          coachingTip:
            "In resource conflicts, direct communicators prioritise resolution speed over emotional comfort. They believe clarity about the outcome is more respectful than prolonged uncertainty.",
          styleContext:
            "Direct communicators see unresolved resource conflicts as a leadership failure. The leader's job is to decide, communicate, and support - in that order.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex has assigned the specialist to Project Horizon and arranged a senior contractor for the other project. Both leads have been asked to confirm they can work with this. You are the project lead who did not get the specialist. How do you respond?",
      options: [
        {
          id: "s255-opt-a",
          text: "Understood. I can work with the contractor if they are briefed on the technical requirements before Wednesday. Can you share the brief with me today so I can review it before they start?",
          score: 10,
          result: "strong",
          explanation:
            "You accept the decision cleanly and immediately move to making the alternative work. Requesting the brief today shows you are solution-focused, which matches Alex's direct approach.",
        },
        {
          id: "s255-opt-b",
          text: "I accept the decision, but I want it noted that if the contractor does not perform at the same level as our specialist, the project timeline may slip and that is a risk I am flagging now.",
          score: 5,
          result: "partial",
          explanation:
            "Accepting the decision is correct, but leading with a risk caveat before the contractor has even started signals resistance. Alex would prefer you try the solution and report on actual issues.",
        },
        {
          id: "s255-opt-c",
          text: "I think we should revisit this. Could we split the specialist's time - two weeks on each project? That way neither project is completely without their expertise.",
          score: 0,
          result: "weak",
          explanation:
            "Alex explicitly rejected compromise that weakens both projects. Proposing a time-split directly contradicts the decision Alex just made and the reasoning behind it.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex wants a message to the specialist confirming their assignment to Project Horizon, the timeline, reporting line, and expectations for the next four weeks. Write it in a direct, brief style.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Your Assignment - Project Horizon, 17 March to 11 April\n\nYou have been assigned to Project Horizon full-time for the next four weeks, starting Monday 17 March.\n\nReporting to: James Okoro, Project Horizon Lead\nLocation: Building 3, 4th floor, desk cluster 4B\nHours: Standard hours. Any overtime must be approved by James in advance.\n\nYour focus:\n- Complete the integration testing for the payment gateway by 28 March\n- Support the UAT phase from 31 March to 11 April\n- Attend the daily 9:15am stand-up with the Horizon team\n\nJames will brief you in full on Monday morning at 9:00am. If you have questions before then, contact him directly.\n\nYour regular team has been informed, and your BAU responsibilities are covered until 11 April.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message covers assignment, timeline, reporting line, location, and specific deliverables. The specialist can read this on Friday and turn up Monday ready to work. Alex would approve immediately.",
          observation:
            "You included practical details like location and the Monday morning briefing time, which shows you understand that direct communication is about removing all friction, not just stating the headline.",
          coachingTip:
            "When writing assignment confirmations for direct communicators, think about what the recipient needs to know to start work without asking a single question. Cover logistics as well as deliverables.",
          styleContext:
            "Direct communicators measure the effectiveness of an assignment message by how self-sufficient the recipient is on day one. Every unanswered question is a failure of communication.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your message covers the practical details: reporting line, location, start time, and specific deliverables. If the specialist needs to ask 'Where do I sit?' or 'What do I work on first?', it is incomplete.",
          observation:
            "Alex said 'I do not want them turning up on Monday wondering what the plan is.' Every gap in your message creates exactly that uncertainty.",
          coachingTip:
            "After drafting, read your message as if you are the specialist who knows nothing about Project Horizon. List every question you would still have. Then answer them in the message.",
          styleContext:
            "Direct communicators value completeness in operational messages. Being brief does not mean being incomplete - it means including everything necessary and nothing unnecessary.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too vague, too warm in tone, or missing critical operational details. A message that says 'You will be supporting Project Horizon - James will fill you in' is not a briefing, it is a placeholder.",
          observation:
            "If your message requires a follow-up conversation to be useful, it has not done its job. Alex wants the message to be the briefing, not a teaser for one.",
          coachingTip:
            "Include who, what, where, when, and who to contact. If any of those five are missing, add them before sending.",
          styleContext:
            "Direct communicators believe that incomplete instructions create unnecessary back-and-forth. Every message should be a complete unit of communication.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (256-258)
  // ============================================

  // Scenario 256 - Priya Sharma, feedback, foundation
  {
    id: "scenario-256",
    title: "The Creative Pitch Feedback",
    context:
      "Priya has just watched a junior team member deliver their first client pitch. The pitch had strong energy but lacked structure, and the client looked confused by the end. Priya wants to give feedback that preserves the team member's confidence while addressing the structural issues.",
    chooseContext:
      "The team member has asked Priya directly: 'How did I do?' Priya needs to be honest but in a way that keeps the team member motivated to improve rather than deflated.",
    rewriteContext:
      "Priya has asked you to write a short feedback note the team member can reference before their next pitch, highlighting what worked and what to adjust.",
    characterId: "priya-sharma",
    dialogue:
      "First of all, I loved your energy in there. The client was engaged for the first five minutes because you clearly care about this project and it shows. That is a genuine strength and not something you can teach. Now, I want to help you build on that by adding some structure so the client can follow your thinking as easily as they felt your enthusiasm.",
    chooseDialogue:
      "Honestly? You have something most people have to fake - you are naturally compelling when you speak. The gap is not in your delivery, it is in the architecture of the pitch. Think of it like a great song with the verses in the wrong order. The notes are all there - we just need to arrange them. I am going to sit with you before the next one and we will map it out together.",
    rewriteDialogue:
      "Write it like you are talking to someone who just ran their first race and came in third. They should feel proud of what they did and excited about what they can do next. I want them to read it and think 'I cannot wait to try again' - not 'I really messed that up.'",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "feedback",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya has opened a feedback conversation by celebrating the team member's energy, framing it as an unteachable strength, and then positioning structural improvement as building on that strength. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya leads with genuine enthusiasm about what went well, uses vivid language ('not something you can teach'), and frames the development area as an exciting next step rather than a correction. This is classic expressive feedback.",
          observation:
            "Notice Priya says 'I loved your energy' rather than 'Your energy was effective.' Expressive communicators share their personal emotional response, not just their professional assessment.",
          coachingTip:
            "When someone leads feedback with their own emotional reaction to what they saw, and frames improvement as an opportunity rather than a fix, they are using an expressive style.",
          styleContext:
            "Expressive communicators believe that how feedback feels determines whether it gets acted on. They invest in making the recipient want to improve rather than just understanding what to improve.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya is caring and encouraging, which can look supportive. But the energy and enthusiasm in the language - 'I loved', 'genuine strength', 'not something you can teach' - goes beyond reassurance into active celebration.",
          observation:
            "A supportive communicator would say 'You did well and I am here to help you improve.' Priya says 'You have something special and I want to help you make it even better.' The distinction is in the intensity of the positive framing.",
          coachingTip:
            "Supportive communicators reassure. Expressive communicators energise. Both are positive, but expressive feedback has more spark and forward momentum.",
          styleContext:
            "Expressive communicators use feedback as fuel. They want the recipient to leave the conversation with more energy than they arrived with.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya has not led with data, structure, or a systematic assessment. The feedback is personal, emotional, and designed to inspire, not to analyse.",
          observation:
            "There are no percentages, no frameworks, and no step-by-step breakdowns. Priya talks about feelings and impressions, then offers to work together on structure later.",
          coachingTip:
            "If the feedback makes you feel something before it teaches you something, the communicator is likely expressive. Priya's feedback is designed to be felt first and understood second.",
          styleContext:
            "Expressive communicators believe that technical feedback without emotional context is incomplete. People need to feel valued before they can hear what to change.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The team member has asked 'How did I do?' Priya has compared their pitch to a great song with the verses in the wrong order and offered to help map out the next one together. How do you build on this?",
      options: [
        {
          id: "s256-opt-a",
          text: "That is a brilliant way to think about it. I already know the opening and closing are strong - maybe we can work on the middle section where the client needs to see the data before the recommendation. I would love to map that out with you.",
          score: 10,
          result: "strong",
          explanation:
            "You match Priya's energy, build on the metaphor, and show enthusiasm for the collaborative improvement. This aligns perfectly with how expressive communicators give and receive feedback.",
        },
        {
          id: "s256-opt-b",
          text: "Thanks, Priya. Could you give me a checklist of what a well-structured pitch looks like so I can compare mine against it?",
          score: 5,
          result: "partial",
          explanation:
            "Practical and useful, but it shifts the conversation from collaborative and creative to procedural. Priya offered to map it out together - a checklist skips the relationship-building part of her approach.",
        },
        {
          id: "s256-opt-c",
          text: "I understand. I will go away and restructure the pitch on my own and send it to you for review before the next client meeting.",
          score: 0,
          result: "weak",
          explanation:
            "Priya explicitly offered to work on it together. Going away to do it alone rejects the collaborative element that is central to how expressive communicators develop people.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya wants a feedback note that highlights what worked and what to adjust, written so the team member feels proud and excited to try again. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Great first pitch - and I mean that. Here is what stood out and where we can take it next.\n\nWhat worked brilliantly:\n- Your energy was infectious. The client was leaning in during the opening because your passion for the project was obvious and genuine.\n- The way you connected our solution to their specific pain points showed real empathy for their situation.\n- You handled the Q&A naturally and did not get flustered, even when they pushed back on timeline.\n\nWhere we can level up:\n- The pitch needs a clearer arc. Right now, the great points are spread across the middle without a logical flow. Let us build a structure: problem, impact, solution, proof, next steps.\n- Lead with the client's challenge, not our capabilities. Make them feel heard before you make them feel impressed.\n- End with one clear call to action rather than three options. Give them a reason to say yes, not a reason to deliberate.\n\nI am genuinely excited to work on the next one with you. You have the hardest skill already - the ability to make people care. The structure piece is straightforward once we map it out together.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your note celebrates specific strengths with genuine warmth and frames improvements as exciting next steps. The team member would read this and feel both valued and motivated.",
          observation:
            "You balanced praise and development in a way that makes the improvements feel like natural next steps rather than corrections. That is exactly how expressive communicators want feedback delivered.",
          coachingTip:
            "When writing feedback for expressive communicators, make the development points feel like unlocking potential rather than fixing problems. Language matters.",
          styleContext:
            "Expressive communicators see feedback as a creative collaboration. The note should feel like an invitation to grow, not a list of corrections.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good content, but check whether the tone feels energising or clinical. If your development points read like a performance review, they need warming up with forward-looking language.",
          observation:
            "Priya wants the team member to think 'I cannot wait to try again.' If your note is accurate but flat, it will not create that feeling.",
          coachingTip:
            "Add one sentence to each development point that looks forward. Instead of 'Your structure was weak', try 'Once we nail the structure, your pitches will be outstanding.'",
          styleContext:
            "Expressive communicators believe that the emotional tone of feedback is as important as its accuracy. Both must be right for the feedback to land.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your note is either too clinical, too focused on what went wrong, or lacks the warmth and energy Priya specifically asked for. Feedback that is accurate but deflating misses the point for an expressive communicator.",
          observation:
            "If your note could have been generated by a performance management system, it does not match Priya's style. She wants it to feel personal and motivating.",
          coachingTip:
            "Rewrite your opening line so it sounds like something a mentor would say to someone they believe in, not something an assessor would write on a scorecard.",
          styleContext:
            "Expressive communicators will reject technically correct feedback if it is delivered without warmth. The relationship carries the message.",
        },
      },
    },
  },

  // Scenario 257 - Marcus Webb, feedback, intermediate
  {
    id: "scenario-257",
    title: "The Cross-Team Collaboration Feedback",
    context:
      "Marcus has noticed that a colleague from another department has been dismissive of his team's contributions during a joint project. He wants to give feedback directly to this colleague in a way that repairs the relationship rather than escalating the tension.",
    chooseContext:
      "The colleague has responded defensively, saying they did not mean to be dismissive and that Marcus's team is 'too sensitive.' Marcus needs to hold the feedback while de-escalating the defensiveness.",
    rewriteContext:
      "Marcus has asked you to draft a follow-up message to the colleague after their conversation, reinforcing the key points and proposing a way to work better together going forward.",
    characterId: "marcus-webb",
    dialogue:
      "I wanted to have this conversation with you directly because I respect what you bring to this project. Your technical knowledge is outstanding, and the project is better for it. What I have noticed, though, is that when my team shares ideas in the joint sessions, the response tends to be dismissive - and I think that is costing us the best of what both teams can offer. I am not saying it is intentional, but the impact is real.",
    chooseDialogue:
      "I hear you, and I am not saying you meant any harm. But here is the thing - intent and impact are different. When someone shares an idea and the response is 'that will not work' with no follow-up, the impact is that they stop sharing. And when people stop sharing, we all lose. I am not asking you to agree with every idea. I am asking you to engage with them before you dismiss them.",
    rewriteDialogue:
      "I want the message to feel like an outstretched hand, not a pointed finger. Remind them of what we discussed, acknowledge their strengths, and propose something concrete we can try to make the collaboration work better. I want them to want to work with us, not feel like they have been told off.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "feedback",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Marcus has opened a difficult feedback conversation by leading with respect for the colleague's expertise, naming the problematic behaviour and its impact, and framing the conversation as an opportunity for both teams. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus combines warmth with directness, leads with genuine praise, and frames the feedback as being about unlocking better outcomes for everyone. The focus on relationship and shared potential is distinctly expressive.",
          observation:
            "Notice Marcus says 'I think that is costing us the best of what both teams can offer.' He frames the problem not as 'you are being rude' but as 'we are missing out on something great.' That reframing is an expressive signature.",
          coachingTip:
            "Expressive communicators give hard feedback by connecting it to a bigger, positive vision. They make the recipient want to change because they can see what is possible, not because they fear consequences.",
          styleContext:
            "Expressive communicators believe that people are more likely to change behaviour when they are inspired by what could be than when they are criticised for what is.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus is empathetic and relationship-focused, which can look supportive. But the energy, the vision-casting ('the best of what both teams can offer'), and the confidence in naming the issue directly distinguish this as expressive.",
          observation:
            "A supportive communicator would focus more on making the colleague feel safe and reassured. Marcus focuses on making them feel inspired to collaborate differently.",
          coachingTip:
            "Both expressive and supportive styles care about relationships, but expressive communicators are more forward-looking. They paint a picture of what the relationship could become.",
          styleContext:
            "Expressive communicators in conflict situations are idealists. They believe every difficult conversation is an opportunity to build something better.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus has not led with data, process, or a formal complaint. The conversation is personal, relational, and focused on impact and potential, not on procedure or evidence.",
          observation:
            "There is no mention of policy, no escalation threat, and no systematic evidence gathering. Marcus is having a human conversation about how people treat each other.",
          coachingTip:
            "If the feedback feels like it is coming from someone who cares about the relationship as much as the outcome, and uses vivid language to describe both, the style is likely expressive.",
          styleContext:
            "Expressive communicators use feedback conversations to strengthen relationships, not just to correct behaviour. The conversation is the tool, not just the vehicle.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The colleague has responded defensively, calling Marcus's team 'too sensitive.' Marcus has distinguished intent from impact and asked the colleague to engage with ideas before dismissing them. How do you support Marcus?",
      options: [
        {
          id: "s257-opt-a",
          text: "I think what Marcus is describing is something we can fix easily, and it would make the joint sessions much more productive. What if we tried a simple rule: before anyone says 'that will not work', they have to say 'what I like about that idea is...' first? It slows the reflex and opens space for dialogue.",
          score: 10,
          result: "strong",
          explanation:
            "You validate Marcus's point, de-escalate by making the solution feel simple, and propose a concrete, positive mechanism. This matches the expressive approach of turning conflict into collaborative improvement.",
        },
        {
          id: "s257-opt-b",
          text: "Marcus has a fair point. Perhaps we should document specific instances and review them together so we can see the pattern objectively.",
          score: 5,
          result: "partial",
          explanation:
            "Fair, but shifting to documentation and evidence makes the conversation feel like a formal process rather than a relationship repair. Marcus wants collaboration, not a case file.",
        },
        {
          id: "s257-opt-c",
          text: "I think both sides need to toughen up a bit. In fast-paced projects, people are going to be blunt. It is not personal, it is just how things move quickly.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses Marcus's feedback entirely and reinforces the behaviour he is trying to address. It also mischaracterises bluntness as efficiency, which ignores the impact Marcus has clearly described.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus wants a follow-up message that feels like an outstretched hand - acknowledging the colleague's strengths, reinforcing the feedback, and proposing a concrete way to collaborate better. Write it in an expressive style.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Thanks for the honest conversation earlier - I appreciate you hearing me out, and I know it was not easy to hear.\n\nI want to say again: your technical expertise is one of the biggest strengths this project has. The work you did on the integration architecture was exceptional, and the client noticed. That is not flattery - it is fact.\n\nWhat I am asking for is something I think will benefit both our teams. When ideas come up in joint sessions, I would love for us to try this: before evaluating whether an idea works, let us spend 30 seconds exploring what is interesting about it. Not every idea will survive that, and that is fine. But the ones that do will be stronger because they had room to breathe.\n\nI think we could be the best cross-functional partnership in this organisation if we get the communication piece right. And I genuinely believe we can. Let us grab a coffee next week and talk about how we want the next joint session to run.\n\nLooking forward to it.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message balances warmth with substance, reinforces the feedback without repeating the criticism, and proposes a specific mechanism wrapped in a vision of what the partnership could become. Marcus would send this with confidence.",
          observation:
            "You ended with a social invitation - coffee - which signals that this is about building a relationship, not just resolving a complaint. That detail matters to expressive communicators.",
          coachingTip:
            "When following up difficult feedback for expressive communicators, always end with a forward-looking social or collaborative step. It signals that the relationship is the priority.",
          styleContext:
            "Expressive communicators use follow-up messages to set the emotional tone for the next interaction. The message is not just about what was said - it is about how the next meeting will feel.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether your message strikes the right balance between reinforcing the feedback and extending the olive branch. If it reads too much like a summary of the complaint, it will not feel like an outstretched hand.",
          observation:
            "Marcus said he wants them to want to work with his team. If your message would make the colleague feel lectured at, it needs more warmth and more vision.",
          coachingTip:
            "For every sentence that references the problem, include one that references the potential. Balance retrospective feedback with forward-looking possibility.",
          styleContext:
            "Expressive communicators believe that follow-up messages set the stage for the next chapter. The tone should make the reader look forward, not look back.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too formal, too critical, or lacks the personal warmth Marcus specifically asked for. A message that reads like a professional reprimand will undo the goodwill from the conversation.",
          observation:
            "If your message could be mistaken for an HR document or a formal complaint, it does not match Marcus's expressive style at all.",
          coachingTip:
            "Rewrite your opening as if you are writing to someone you genuinely like and want to work with. Because that is exactly what Marcus is doing.",
          styleContext:
            "Expressive communicators believe that the tone of a follow-up message either heals or harms the relationship. There is no neutral ground.",
        },
      },
    },
  },

  // Scenario 258 - Nina Okafor, feedback, advanced
  {
    id: "scenario-258",
    title: "The Senior Leader Feedback Challenge",
    context:
      "Nina has been asked to provide upward feedback to a senior leader whose communication in town halls has been uninspiring. The leader is technically competent but their presentations lack energy, storytelling, and connection. Nina needs to deliver this feedback in a way that a senior leader will actually hear and act on.",
    chooseContext:
      "The senior leader has asked Nina to be specific about what 'lacks energy' means. Nina needs to give concrete examples without making the leader feel attacked or inadequate.",
    rewriteContext:
      "Nina has asked you to prepare three bullet points the senior leader can use as reminders before their next town hall to improve engagement.",
    characterId: "nina-okafor",
    dialogue:
      "I want to start by saying something genuinely: when you talk about the technical roadmap, your depth of knowledge is extraordinary. People trust your expertise completely. What I think is happening, though, is that the town halls need to do more than inform - they need to inspire. And right now, the audience leaves knowing what you said but not feeling why it matters. That is the gap, and I think it is a really fixable one.",
    chooseDialogue:
      "Sure, let me give you a real example. Last month, you presented the Q2 results. The data was thorough and accurate, and you walked through every metric. But you never told the audience what those numbers meant for them - their jobs, their teams, their futures. Compare that to when you spoke at the leadership offsite about why you joined this company. People were leaning in, nodding, connecting. The difference was not competence. It was story. You already have both skills - you just deploy them in different contexts.",
    rewriteDialogue:
      "Make the bullets practical but not patronising. This person is a senior leader who has been presenting for 20 years. They do not need 'Presentation 101.' They need three nudges that will shift their town halls from informative to memorable.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "feedback",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Nina has given upward feedback to a senior leader by praising their expertise, identifying the gap between informing and inspiring, and framing the development as 'really fixable.' Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina demonstrates advanced expressive communication by adapting her natural warmth and vision to suit a senior audience. She uses language the leader will respect ('extraordinary', 'really fixable') and frames the gap as a missing ingredient rather than a failing.",
          observation:
            "Notice Nina contrasts 'knowing what you said' with 'feeling why it matters.' This distinction between informing and inspiring is central to how expressive communicators think about communication.",
          coachingTip:
            "Advanced expressive communicators adapt their vocabulary and framing for their audience. Nina does not dumb down the feedback for a senior leader - she elevates it to match their level.",
          styleContext:
            "Expressive communicators giving upward feedback focus on unlocking potential rather than correcting behaviour. The message is 'you are already great - here is how to be extraordinary.'",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina is warm and caring, which can look supportive. But her focus is on inspiration, impact, and storytelling - distinctly expressive themes. A supportive communicator would focus on making the leader feel safe, not on making their presentations inspiring.",
          observation:
            "A supportive communicator would say 'You are doing fine, and people appreciate your knowledge.' Nina says 'You could be extraordinary if you add this one thing.' The ambition in the feedback is an expressive hallmark.",
          coachingTip:
            "Expressive feedback is characterised by forward momentum. It does not just reassure - it paints a picture of what could be better and makes the recipient excited to get there.",
          styleContext:
            "Expressive communicators see every person as having untapped potential. Their feedback is always about closing the gap between good and great, not between bad and acceptable.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has not presented a structured competency assessment or a data-driven evaluation. The feedback is personal, intuitive, and designed to create an emotional shift, not a systematic improvement plan.",
          observation:
            "There are no scoring rubrics, no before-and-after metrics, and no formal framework. Nina is speaking from experience and emotional intelligence, not from a presentation skills checklist.",
          coachingTip:
            "If the feedback focuses on how the audience feels rather than on what the presenter did technically, the communicator is likely expressive.",
          styleContext:
            "Expressive communicators evaluate communication by its emotional impact. A technically flawless presentation that leaves the audience flat is, in their view, not a success.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The senior leader has asked Nina to be specific. Nina has compared their Q2 data presentation to their inspiring leadership offsite speech, pointing out the difference was story, not competence. How do you respond as the senior leader?",
      options: [
        {
          id: "s258-opt-a",
          text: "That is a fair comparison, and I can see it. At the offsite I was speaking from experience, not slides. I think the town halls have become too data-heavy because I assumed that was what people wanted. How do I bring more of the offsite energy without losing the rigour?",
          score: 10,
          result: "strong",
          explanation:
            "You accept the feedback by connecting it to your own experience, identify the pattern yourself, and ask a forward-looking question. This engages with Nina's expressive approach and builds on her vision.",
        },
        {
          id: "s258-opt-b",
          text: "I appreciate the feedback. Could you put together a structure or template for how I should approach the next town hall differently?",
          score: 5,
          result: "partial",
          explanation:
            "You accept the feedback, which is good, but asking for a template shifts from a collaborative conversation to a transactional request. Nina is offering a coaching relationship, not a deliverable.",
        },
        {
          id: "s258-opt-c",
          text: "The town halls serve a different purpose to the offsite. The audience expects data and updates, not stories. I do not think the comparison is entirely fair.",
          score: 0,
          result: "weak",
          explanation:
            "Rejecting the comparison dismisses Nina's feedback entirely. She specifically chose an example where the leader demonstrated the exact skill they need to apply - rejecting it closes the door on growth.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina wants three practical but non-patronising bullet points a senior leader can use as reminders before their next town hall. Write them in an expressive style that respects the leader's experience.",
      targetTraits: ["warm-opener", "acknowledges-ideas", "forward-looking", "inclusive-language"],
      exampleStrongResponse:
        "Before your next town hall, keep these three things in mind:\n\n1. Lead with the 'so what.' Before presenting any data, ask yourself: 'What does this mean for the person sitting in row five?' Open with that answer, then show the data that supports it. The audience will lean in because they know why it matters to them.\n\n2. Tell one story. Pick one real moment from the last quarter - a team that solved a hard problem, a client who changed their mind, a decision that was difficult but right. Stories make data human, and your audience will remember the story long after they forget the chart.\n\n3. End with a feeling, not a slide. Your final words should not be 'Any questions?' They should be a sentence that makes people leave the room thinking 'I am proud to work here' or 'I know what I need to do next.' You have this skill already - use it.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your bullets are practical, respectful, and written for someone with 20 years of experience. They nudge rather than instruct, and each one connects the technique to the emotional outcome. Nina would present these with confidence.",
          observation:
            "You ended with 'You have this skill already - use it,' which reinforces Nina's core message: this is not about learning something new, it is about deploying something they already have. That framing is essential for senior audiences.",
          coachingTip:
            "When writing development reminders for senior leaders, frame each point as a choice to make, not a skill to learn. They have the skills. They need to be reminded to use them.",
          styleContext:
            "Expressive communicators coaching senior leaders focus on unlocking what is already there. The role is to remind, not to teach.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good ideas, but check whether the tone is right for a senior audience. If your bullets read like presentation skills training tips, they may feel patronising. Frame each one as a strategic choice, not a beginner's technique.",
          observation:
            "Nina specifically said 'not Presentation 101.' If any of your bullets could appear in a graduate training pack, elevate the language and the framing.",
          coachingTip:
            "Replace any phrase like 'try to' or 'make sure to' with language that assumes competence: 'choose to', 'shift from X to Y', 'deploy your natural ability to.'",
          styleContext:
            "Expressive communicators adjust their coaching register for the audience. Senior leaders need peers, not instructors.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your bullets are either too basic, too generic, or too instructional for a senior leader. Tips like 'Make eye contact' or 'Practise your delivery' would not survive Nina's quality filter.",
          observation:
            "If your bullets could apply to any presenter at any level, they are not specific enough for this context. Nina needs bullets that acknowledge this leader's expertise while nudging their approach.",
          coachingTip:
            "Write each bullet as if the leader is already good and you are helping them become great. That shift in premise changes everything about the language.",
          styleContext:
            "Expressive communicators believe that generic advice is a waste of a senior leader's time. Specificity and respect must coexist.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (259-261)
  // ============================================

  // Scenario 259 - Tom Brennan, sales, foundation
  {
    id: "scenario-259",
    title: "The Nervous First-Time Buyer",
    context:
      "Tom is working with a first-time buyer who is visibly anxious about making a large purchase decision. The buyer has done extensive research but keeps asking for reassurance that they are making the right choice. Tom needs to build confidence without applying pressure.",
    chooseContext:
      "The buyer has said 'I just want to make sure I am not making a mistake.' Tom needs to address the underlying fear while gently moving the conversation toward a decision.",
    rewriteContext:
      "Tom has asked you to write a follow-up email to the buyer after their meeting, reassuring them about their choice and outlining the next steps at a comfortable pace.",
    characterId: "tom-brennan",
    dialogue:
      "I can see you have done your homework, and that tells me something important about you - you take decisions seriously. There is no rush here. I would rather you take an extra day and feel confident than sign today and feel anxious tomorrow. Let me walk you through what other customers in your situation have found helpful, and then you can decide what feels right for you.",
    chooseDialogue:
      "That feeling is completely normal, and honestly, it is a good sign. People who rush into big decisions without that feeling are the ones who tend to regret them. What I can tell you is this: based on everything you have told me about what you need, this is a strong fit. But I am not going to push you. What would help you feel more confident? Is it more information, more time, or talking it through with someone you trust?",
    rewriteDialogue:
      "Keep it warm and low-pressure. Summarise what we discussed, confirm there is no deadline, and give them a clear next step they can take when they are ready. I do not want them feeling like this email is a countdown clock.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "sales",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Tom has validated the buyer's thorough research, explicitly removed time pressure, offered to share other customers' experiences, and invited the buyer to decide what feels right. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom prioritises the buyer's emotional comfort, validates their anxiety, removes pressure, and lets the buyer set the pace. This is textbook supportive communication in a sales context.",
          observation:
            "Notice Tom says 'I would rather you take an extra day and feel confident.' A supportive communicator genuinely means this - they see the relationship as more valuable than the transaction.",
          coachingTip:
            "When a salesperson actively removes urgency and invites the buyer to define their own timeline, they are using a supportive style. The sale matters less than the person's comfort.",
          styleContext:
            "Supportive communicators in sales believe that a pressured decision is a bad decision. Trust built slowly converts more reliably than urgency applied quickly.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom is warm and personable, which can look expressive. But the emphasis is on comfort, validation, and pace-setting rather than on energy, vision, or enthusiasm. Tom is calming, not energising.",
          observation:
            "An expressive communicator would say 'You are going to love this - let me show you why.' Tom says 'Take your time - let me help you feel confident.' The emotional direction is different.",
          coachingTip:
            "Supportive communicators create safety. Expressive communicators create excitement. Both are warm, but they serve different emotional needs.",
          styleContext:
            "Supportive communicators in sales are anchors, not engines. They provide stability and reassurance rather than momentum and enthusiasm.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom has not led with features, data, or a structured comparison. The conversation is entirely about the buyer's emotional state and confidence level, not about the product's specifications.",
          observation:
            "There is no pricing breakdown, no feature comparison, and no technical argument. Tom is managing a feeling, not presenting a case.",
          coachingTip:
            "If the salesperson spends more time on how the buyer feels than on what the product does, they are using a supportive style.",
          styleContext:
            "Supportive communicators believe that the buyer's emotional readiness is the single most important factor in a purchase decision. Everything else is secondary.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The buyer has said 'I just want to make sure I am not making a mistake.' Tom has normalised their anxiety, confirmed the product is a strong fit, and asked what would help them feel more confident. How do you respond as the buyer?",
      options: [
        {
          id: "s259-opt-a",
          text: "I think talking it through with my partner would help. Could you send me a summary of what we discussed today so I can share it with them? No rush - I just want to feel like we have thought it through together.",
          score: 10,
          result: "strong",
          explanation:
            "You engage with Tom's question honestly, involve a trusted person (which Tom suggested), and ask for a summary without creating urgency. This aligns perfectly with the supportive approach.",
        },
        {
          id: "s259-opt-b",
          text: "Actually, I think I am ready. Let us go ahead and do it now before I overthink it.",
          score: 5,
          result: "partial",
          explanation:
            "The enthusiasm is good, but deciding out of impulse to avoid overthinking is the opposite of what Tom is encouraging. Tom wants the buyer to feel genuinely confident, not to force themselves past their anxiety.",
        },
        {
          id: "s259-opt-c",
          text: "Can you show me a comparison with the three competitor products and give me the data so I can make an objective decision?",
          score: 0,
          result: "weak",
          explanation:
            "This shifts the conversation from emotional readiness to analytical comparison, which Tom has not signalled as the issue. The buyer's anxiety is not about lacking data - they have done extensive research. More data will not resolve a confidence gap.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom wants a follow-up email that is warm, low-pressure, summarises the discussion, confirms no deadline, and gives a clear next step the buyer can take when ready. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Subject: Great to meet you today - no rush on next steps\n\nThank you for taking the time to come in today. I really enjoyed our conversation, and I could see how much thought you have put into this decision. That is something to feel good about.\n\nHere is a quick summary of what we covered:\n- The model you looked at fits your requirements on all three of your key criteria: reliability, running costs, and space.\n- The warranty covers you for three years, and the service plan is optional - no pressure to decide on that now.\n- The price I quoted today is valid for 30 days, so there is plenty of time.\n\nThere is genuinely no deadline here. If you want to talk it through with someone, sleep on it, or come back with more questions, all of those are completely fine. I am here whenever you are ready.\n\nWhen you feel confident about your decision, just drop me a message or give me a call, and I will take care of everything from there. No need to schedule anything formal.\n\nWishing you a good evening.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is warm without being overbearing, provides a clear summary without being salesy, and explicitly removes pressure at every turn. The buyer would read this and feel respected and supported.",
          observation:
            "You included 'no need to schedule anything formal', which removes even the minor friction of booking a follow-up. That level of thoughtfulness about the buyer's comfort is what supportive communication looks like.",
          coachingTip:
            "When writing for supportive communicators in sales, every sentence should reduce anxiety, not create it. If a sentence could be read as a nudge, soften it or remove it.",
          styleContext:
            "Supportive communicators in sales see the follow-up email as an extension of the relationship, not a sales tool. It should feel like a note from a friend, not a reminder from a business.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good tone, but check whether any part of your email could be read as applying subtle pressure. Phrases like 'I hope to hear from you soon' or 'This offer ends on...' undermine the supportive approach.",
          observation:
            "Tom specifically said 'I do not want them feeling like this email is a countdown clock.' Check that nothing in your email creates a sense of urgency.",
          coachingTip:
            "Read your email as if you are the anxious buyer. Does any sentence make you feel like you need to act quickly? If so, rewrite it.",
          styleContext:
            "Supportive communicators believe that removing all pressure is itself a powerful sales technique. Trust replaces urgency as the motivator.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too transactional, too pushy, or lacks the genuine warmth Tom asked for. If it reads like an automated follow-up from a CRM system, it has missed the mark entirely.",
          observation:
            "If your email focuses more on the product than on the person, it does not match Tom's supportive approach. The buyer should feel cared about, not sold to.",
          coachingTip:
            "Remove all marketing language. Replace it with human language. 'We would love your business' becomes 'I am here whenever you are ready.' That shift is everything.",
          styleContext:
            "Supportive communicators believe the worst thing you can do to an anxious buyer is make them feel like a transaction. Every interaction should feel personal.",
        },
      },
    },
  },

  // Scenario 260 - Leah Morgan, sales, intermediate
  {
    id: "scenario-260",
    title: "The Hesitant Renewal Conversation",
    context:
      "Leah is meeting with a long-standing client whose contract is up for renewal. The client has mentioned they have received a competing offer at a lower price. Leah values the relationship deeply and wants to retain the client without undermining her company's pricing integrity.",
    chooseContext:
      "The client has said 'I do not want to leave, but I cannot justify paying more when the other offer is 20% cheaper.' Leah needs to address the price concern while reinforcing the value of the relationship and the service.",
    rewriteContext:
      "Leah has asked you to draft a renewal proposal email that acknowledges the client's situation, reinforces the partnership value, and presents a tailored retention offer.",
    characterId: "leah-morgan",
    dialogue:
      "Before we talk numbers, I want you to know something. Working with your team over the past three years has been one of the highlights of my career here. I know your business inside out, and I think that matters. I also know you are weighing up options, and I completely respect that - it is the right thing to do. What I would love is the chance to show you what the next three years could look like with us, and then you can make the decision that feels right for you and your team.",
    chooseDialogue:
      "I hear you, and I would never dismiss a 20% saving - that is significant. What I would ask is that we look at value, not just price. Over the past three years, we have saved your team an estimated 400 hours a year through our dedicated account management. We have never missed a deadline. And when your systems went down in September, we had someone on-site within two hours because we know your setup. A new provider would need six months just to understand your business the way we already do. I am not asking you to ignore the price difference. I am asking you to weigh the full picture.",
    rewriteDialogue:
      "The email needs to feel personal, not corporate. This client has been with us for three years - they are not a prospect, they are a partner. Acknowledge the competing offer without being defensive, remind them of what we have built together, and offer something that shows we value the relationship. No hard sell.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "sales",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Leah has opened a renewal conversation by expressing personal value for the relationship, respecting the client's right to explore options, and framing her pitch as an invitation rather than a push. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah leads with relationship, validates the client's position, and uses collaborative language ('I would love the chance to show you'). The approach is persuasive through trust and partnership, not through energy or urgency.",
          observation:
            "Notice Leah says 'you can make the decision that feels right for you and your team.' She genuinely hands the power to the client. Supportive communicators in sales trust that genuine care creates loyalty.",
          coachingTip:
            "When a salesperson leads with the relationship history and explicitly validates the client's right to leave, they are using a supportive style. The persuasion comes from trust, not tactics.",
          styleContext:
            "Supportive communicators believe that the strongest retention tool is a genuine relationship. If the relationship is real, it will speak louder than a price difference.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah is warm and personal, which can look expressive. But notice the absence of high energy, bold vision-casting, or dramatic language. Leah is steady and reassuring, not excited and inspiring.",
          observation:
            "An expressive communicator would say 'Imagine what we could achieve together in the next three years.' Leah says 'Let me show you what the next three years could look like.' The distinction is quiet confidence versus visible enthusiasm.",
          coachingTip:
            "Supportive persuasion is gentle and steady. Expressive persuasion is energetic and visionary. Both are warm, but they feel different to the recipient.",
          styleContext:
            "Supportive communicators in renewal situations are patient. They do not need to win the conversation today - they trust the relationship to carry the weight.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah has not presented a structured cost-benefit analysis, a competitive comparison matrix, or a data-driven retention case. The conversation is built on relationship and trust, not evidence and logic.",
          observation:
            "While Leah later references specific value (400 hours, the September incident), she leads with feeling, not data. The data supports the emotion rather than the other way around.",
          coachingTip:
            "If the opening of a sales conversation focuses on how the salesperson feels about the relationship rather than on what the data shows, the style is likely supportive.",
          styleContext:
            "Supportive communicators use data to validate a feeling, not to replace it. The relationship is the argument; the data is the evidence.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The client says they cannot justify paying 20% more. Leah has responded by highlighting 400 hours saved annually, a perfect delivery record, and the September emergency response, asking the client to weigh the full picture. How do you respond as the client?",
      options: [
        {
          id: "s260-opt-a",
          text: "You make a fair point about the value, and I had not thought about the transition cost of moving to a new provider. Let me take your full picture back to my team and compare it properly with the other offer. Can you send me something I can share with them?",
          score: 10,
          result: "strong",
          explanation:
            "You acknowledge the value Leah has presented, show you are taking it seriously, and ask for something to share with your team. This respects the supportive approach and keeps the door open.",
        },
        {
          id: "s260-opt-b",
          text: "I appreciate all of that, and I do value the relationship. But at the end of the day, 20% is 20%. Can you match the price?",
          score: 5,
          result: "partial",
          explanation:
            "You acknowledge the relationship, which is good, but immediately reverting to price undermines Leah's effort to reframe the conversation around value. It reduces a partnership discussion to a negotiation.",
        },
        {
          id: "s260-opt-c",
          text: "Look, I have already made up my mind. The other offer is too good to turn down. I just wanted to tell you in person out of respect.",
          score: 0,
          result: "weak",
          explanation:
            "If the decision is already made, the entire conversation has been a formality. Leah has invested genuine emotional labour in this renewal, and presenting it as a courtesy call would feel deeply disrespectful to a supportive communicator.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah wants a personal, non-corporate renewal proposal email that acknowledges the competing offer, reinforces the partnership value, and presents a retention offer. Write it in a supportive style.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Subject: Your renewal - and what the next chapter could look like\n\nThank you for being so open with me about the other offer. I respect that you are doing your due diligence, and I would expect nothing less from someone who cares about their team the way you do.\n\nI have been thinking about our conversation, and I wanted to share how I see the partnership - not just the contract.\n\nOver the past three years, we have built something that goes beyond a service agreement. Your team knows our team by name. When something goes wrong, you do not call a helpdesk - you call Sarah, and she already knows your system. That kind of trust takes years to build and months to lose in a transition.\n\nI do not want to compete on price alone, because I do not think that serves you well. But I do want to show you that we value this partnership. Here is what I am proposing:\n- A 10% loyalty discount on your renewal, bringing the gap with the other offer to single digits\n- A dedicated quarterly review with me and your account team to ensure we are always aligned with your priorities\n- Priority access to our new reporting dashboard, launching in Q3, at no additional cost\n\nThis is not a take-it-or-leave-it offer. If there is something else that would make the renewal feel right for you and your team, tell me, and I will see what I can do.\n\nI genuinely hope we get to keep working together. But whatever you decide, I want you to know how much this partnership has meant to us.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is personal, warm, and genuinely acknowledges the client's situation without defensiveness. The retention offer is presented as a reflection of the relationship's value, not as a panic discount. Leah would send this as-is.",
          observation:
            "You ended with 'whatever you decide, I want you to know how much this partnership has meant to us.' That line gives the client permission to leave while making them not want to. That is masterful supportive persuasion.",
          coachingTip:
            "In retention emails for supportive communicators, the most powerful sentence is the one that genuinely gives the client permission to leave. Paradoxically, it makes them more likely to stay.",
          styleContext:
            "Supportive communicators believe that holding on too tightly pushes people away. Genuine care, expressed without conditions, is the strongest retention tool.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether your email feels personal or templated. If the client could imagine the same email being sent to 50 other clients, it needs more specific, personal touches.",
          observation:
            "Leah said 'this client is not a prospect, they are a partner.' Your email should make that distinction obvious through specific references to shared history.",
          coachingTip:
            "Include at least one detail that could only apply to this specific client. It signals that the relationship is real, not performed.",
          styleContext:
            "Supportive communicators personalise everything. A generic retention email, no matter how well-written, feels insincere to them.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too corporate, too defensive about the competing offer, or focused on the deal rather than the relationship. Leah specifically asked for personal, not corporate.",
          observation:
            "If your email reads like it came from a sales operations team rather than from a person who has spent three years building a partnership, it has missed Leah's brief entirely.",
          coachingTip:
            "Rewrite your email as if you are writing to a friend who is considering leaving. The tone should be honest, caring, and without pressure.",
          styleContext:
            "Supportive communicators in retention situations lead with the relationship because they genuinely believe it is the most valuable thing on the table. If your email leads with the deal, it contradicts their values.",
        },
      },
    },
  },

  // Scenario 261 - David Chen, sales, advanced
  {
    id: "scenario-261",
    title: "The Frustrated Client Escalation",
    context:
      "David has been called into a meeting with a client who is furious about a service failure. The client's order was delivered late, damaged, and to the wrong address. The client is threatening to terminate the contract. David's priority is to de-escalate the situation and preserve the relationship.",
    chooseContext:
      "The client has said 'I have been a loyal customer for five years and this is how you treat me? I want to speak to someone who actually cares.' David needs to acknowledge the depth of the client's frustration and rebuild trust in real time.",
    rewriteContext:
      "David has asked you to write a formal apology letter to the client after the meeting, acknowledging every failure, outlining the remediation steps, and expressing genuine commitment to the relationship.",
    characterId: "david-chen",
    dialogue:
      "I am not going to start by making excuses, because you deserve better than that. What happened with your order was unacceptable - the late delivery, the damage, the wrong address. All three. I understand why you are angry, and if I were in your position, I would be too. I am here because this relationship matters to me personally, and I want to make this right. Will you give me the chance to do that?",
    chooseDialogue:
      "You are right - five years of loyalty should count for something, and right now it does not feel like it does. I hear that. I want you to know that I have personally reviewed what went wrong, and I am going to walk you through exactly what happened, why it happened, and what I am putting in place to make sure it never happens again. But before I do that, I want to make sure you feel heard. Tell me everything you need me to understand.",
    rewriteDialogue:
      "This letter needs to feel like it was written by someone who lost sleep over this. Not performative - genuinely apologetic. Acknowledge every failure specifically, explain what we are doing about each one, and close with something that shows this client is not a number to us. I want them to read it and think 'They actually care.'",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "sales",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "David has opened a de-escalation conversation by refusing to make excuses, naming all three failures, validating the client's anger, and asking for the chance to make it right. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David demonstrates advanced supportive communication under pressure. He prioritises the client's emotional experience, validates their anger without defensiveness, and asks for permission to repair - not demanding the chance but requesting it.",
          observation:
            "Notice David says 'Will you give me the chance to do that?' rather than 'Let me explain what we are doing.' Asking for permission is a hallmark of supportive communication in crisis situations. It returns control to the person who has lost it.",
          coachingTip:
            "Advanced supportive communicators in escalations understand that the client needs to feel heard before they can hear solutions. David's entire opening is designed to earn the right to propose a fix.",
          styleContext:
            "Supportive communicators believe that in moments of crisis, the relationship is more important than the resolution. Fix the feeling first; the logistics follow.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David is empathetic and personal, which can look expressive. But notice the restraint - there is no high energy, no bold promises, no visionary language. David is measured, grounding, and focused entirely on the client's emotional needs.",
          observation:
            "An expressive communicator might say 'We are going to turn this into the best recovery story you have ever seen.' David says 'Will you give me the chance to make this right?' The distinction is between optimistic energy and quiet commitment.",
          coachingTip:
            "In de-escalation, supportive communicators lower the temperature. Expressive communicators raise the energy. David is deliberately calm and steady, which points to supportive.",
          styleContext:
            "Supportive communicators in crisis situations act as anchors. They provide stability when the other person is in emotional turbulence.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David has not opened with a process explanation, a root cause analysis, or a structured remediation plan. The entire opening is about the client's emotions, not the operational failure.",
          observation:
            "David has the information about what went wrong but chooses not to lead with it. He leads with empathy and validation, saving the operational detail for after the client feels heard.",
          coachingTip:
            "If someone in a crisis conversation prioritises emotional validation over operational explanation, they are using a supportive style. The information comes second to the connection.",
          styleContext:
            "Supportive communicators believe that presenting solutions before acknowledging feelings is like prescribing medicine before diagnosing the patient. The order matters.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The client has said 'I want to speak to someone who actually cares.' David has validated their frustration, committed to walking through what happened, and asked the client to share everything they need David to understand. How do you respond as the client?",
      options: [
        {
          id: "s261-opt-a",
          text: "Fine. I will give you the chance. But I need you to understand that this is not just about one delivery. It is about what this says about how we are valued as a customer. I need to see that things will be different going forward, not just that you can fix this one incident.",
          score: 10,
          result: "strong",
          explanation:
            "You accept David's invitation while raising the stakes to the relationship level. This gives David exactly what he needs: permission to act and clarity about what the client actually needs to feel valued.",
        },
        {
          id: "s261-opt-b",
          text: "I want a full written report on what went wrong, a credit for the failed delivery, and a guarantee that this will not happen again. Can you commit to all three?",
          score: 5,
          result: "partial",
          explanation:
            "These are reasonable demands, but jumping straight to transactional requirements skips the emotional repair David is trying to facilitate. He can deliver all three, but he needs the relationship piece first.",
        },
        {
          id: "s261-opt-c",
          text: "I appreciate you coming in, but I have already started talking to alternative providers. I think we are past the point of fixing this.",
          score: 0,
          result: "weak",
          explanation:
            "If the client has already decided to leave, David's de-escalation has no space to work. This response shuts down the conversation before David can demonstrate the care the client just said they wanted.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David wants a formal apology letter that acknowledges every failure specifically, outlines remediation steps, and closes with genuine commitment to the relationship. Write it in a supportive style that feels sincerely apologetic.",
      targetTraits: ["acknowledges-feelings", "collaborative-framing", "reassuring", "not-rushed"],
      exampleStrongResponse:
        "Dear [Client Name],\n\nThank you for meeting with me today. I want to begin by saying, without reservation, that we let you down. After five years of partnership, you deserved better than what happened with your recent order, and I take personal responsibility for ensuring this is addressed fully.\n\nHere is what went wrong and what we are doing about each issue:\n\n1. Late delivery: Your order was delayed by four days due to a warehouse routing error. We have implemented a new tracking protocol that flags any order not dispatched within 24 hours of confirmation. I will be personally notified if your orders are ever delayed.\n\n2. Damaged goods: The packaging used was not adequate for the product type. We have upgraded all packaging for your product category to reinforced materials, effective immediately.\n\n3. Wrong delivery address: An outdated address was stored in our system from a previous contact. I have personally verified and updated your delivery details, and your account is now flagged for address confirmation on every order.\n\nAs an immediate step, we are issuing a full credit for the failed order and a 15% discount on your next three orders as a gesture of goodwill.\n\nBut more than the practical steps, I want you to know this: your business is not a line on a spreadsheet to me. Over five years, I have seen what your team does, and I admire the standards you hold. The fact that we fell short of those standards is something I take seriously.\n\nI would welcome the chance to check in with you personally in two weeks to confirm that everything is running smoothly. No agenda, no sales pitch - just a conversation to make sure you feel confident in us again.\n\nWith sincere apologies and commitment,\nDavid Chen",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your letter acknowledges each failure specifically, provides concrete remediation for each, and closes with genuine personal commitment. The client would read this and believe that David - and the company - genuinely care.",
          observation:
            "You offered a personal check-in with 'no agenda, no sales pitch', which signals that the relationship matters beyond the transaction. That detail is what separates a supportive apology from a corporate one.",
          coachingTip:
            "In apology letters for supportive communicators, the closing matters as much as the content. End with a personal, human commitment, not a corporate sign-off.",
          styleContext:
            "Supportive communicators believe that a genuine apology must address three things: what happened, what will change, and how you feel about it. Miss any one of those and the apology is incomplete.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your letter feels genuinely personal or procedurally correct. David said he wants the client to think 'They actually care.' If your letter reads like a well-crafted complaint response, it needs more personal warmth.",
          observation:
            "David said the letter should feel like it was written by someone who lost sleep over this. If your language is professional but emotionally neutral, it has not reached that level.",
          coachingTip:
            "Add one sentence that reveals something personal about how this situation made David feel. Vulnerability in an apology signals sincerity.",
          styleContext:
            "Supportive communicators in crisis recovery believe that emotional honesty from the company is more powerful than operational efficiency. Both matter, but honesty builds trust.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your letter is either too corporate, too defensive, or does not acknowledge each failure specifically. A generic apology that says 'We are sorry for the inconvenience' would infuriate this client further.",
          observation:
            "David named all three failures in the meeting. If your letter does not address each one individually with a specific remediation step, it signals that the company has not truly listened.",
          coachingTip:
            "List every failure the client experienced and write a separate response to each one. Then add a personal, human closing that goes beyond professional courtesy.",
          styleContext:
            "Supportive communicators believe that a vague apology is worse than no apology. Specificity proves you listened. Generality proves you did not.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (262-264)
  // ============================================

  // Scenario 262 - Rachel Finch, team, foundation
  {
    id: "scenario-262",
    title: "The Sprint Planning Session",
    context:
      "Rachel is leading a sprint planning session for her development team. The previous sprint had a 60% completion rate, and Rachel wants to understand why before committing to new work. She has prepared data on each team member's velocity and blockers from the last two sprints.",
    chooseContext:
      "A team member has suggested simply taking on fewer tasks next sprint. Rachel wants to address the root cause rather than just reducing scope.",
    rewriteContext:
      "Rachel has asked you to write a sprint planning summary that documents the analysis of last sprint's completion rate, the identified root causes, and the adjusted approach for the upcoming sprint.",
    characterId: "rachel-finch",
    dialogue:
      "Before we plan the next sprint, I want us to look at the data from the last two. We had a 60% completion rate in Sprint 14 and 72% in Sprint 13. I have broken down the incomplete items by category: three were blocked by dependencies on the platform team, two were under-estimated at planning, and one was pulled mid-sprint for an urgent client fix. I want to understand the pattern before we commit to anything new.",
    chooseDialogue:
      "Taking on fewer tasks would improve our completion percentage, but it would not fix the underlying issue. If three of our six incomplete items were blocked by dependencies, the solution is not fewer tasks - it is better dependency management. I would like us to look at what those three dependencies were, when we knew about them, and what we could have done differently to unblock them earlier.",
    rewriteDialogue:
      "The summary needs to show our thinking, not just our conclusion. I want anyone reading it to see the data, understand the analysis, and follow the logic to our decisions. If someone asks 'Why are you doing it this way?', the document should answer that question on its own.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "team",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel has opened a sprint planning session by presenting specific completion data from two sprints, categorising incomplete items by root cause, and stating she wants to understand the pattern before planning new work. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel leads with data, categorises issues systematically, and insists on understanding the pattern before taking action. This is textbook analytical communication applied to team planning.",
          observation:
            "Notice Rachel says 'I want to understand the pattern before we commit to anything new.' Analytical communicators resist moving to action until they have a clear, evidence-based understanding of the situation.",
          coachingTip:
            "When someone opens a planning conversation with historical data and root cause analysis before discussing future plans, they are using an analytical style.",
          styleContext:
            "Analytical communicators believe that planning without understanding past performance is planning blind. Data from previous cycles is the foundation for future commitments.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is structured and decisive, which can look direct. But notice that Rachel is not pushing toward a decision - she is insisting on analysis first. A direct communicator would say 'Here is what we are doing next sprint.' Rachel says 'Let us understand what happened first.'",
          observation:
            "A direct communicator would use the data to justify a decision already made. Rachel uses the data as the starting point for a conversation about what the right decision should be.",
          coachingTip:
            "Direct communicators use data to close a conversation. Analytical communicators use data to open one. Rachel is opening.",
          styleContext:
            "Analytical communicators see data as a shared language for decision-making. They present it not to persuade but to enable informed discussion.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel has not focused on how the team feels about the sprint, whether morale is affected, or whether people need encouragement. The conversation is entirely data-driven and process-focused.",
          observation:
            "There is no check-in on team wellbeing, no acknowledgement of effort, and no emotional framing. Rachel treats the low completion rate as a diagnostic problem, not a morale issue.",
          coachingTip:
            "If the first three sentences contain numbers and categories rather than feelings and acknowledgements, the communicator is likely analytical.",
          styleContext:
            "Analytical communicators separate emotional responses from operational analysis. They believe both matter, but they address them separately and lead with the data.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A team member suggests taking on fewer tasks next sprint. Rachel has pointed out that fewer tasks would not fix the dependency issue causing most incompletions, and wants to analyse the three blocked items in detail. How do you respond?",
      options: [
        {
          id: "s262-opt-a",
          text: "That is a good point. The first dependency was the API endpoint from the platform team - we knew about it on day two but did not escalate until day seven. If we had flagged it on day three, we could have unblocked it by day five. Let me pull up the timeline for the other two.",
          score: 10,
          result: "strong",
          explanation:
            "You engage directly with Rachel's analytical approach by providing specific timeline data and identifying the exact point where the process broke down. This is the level of detail Rachel is looking for.",
        },
        {
          id: "s262-opt-b",
          text: "Agreed, dependency management is the issue. Why do we not set up a standing sync with the platform team so we catch blockers earlier?",
          score: 5,
          result: "partial",
          explanation:
            "The proposed solution is sensible, but Rachel wants to complete the analysis before jumping to solutions. Proposing a fix before examining all three dependencies skips the diagnostic step she values.",
        },
        {
          id: "s262-opt-c",
          text: "I think the team is just burned out. We have been pushing hard for three sprints, and maybe we just need a lighter sprint to recover.",
          score: 0,
          result: "weak",
          explanation:
            "This shifts from data-driven analysis to an emotional interpretation without evidence. Rachel has categorised the issues and none of them point to burnout. Introducing it now derails the structured discussion she has set up.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel wants a sprint planning summary that shows the data, the analysis, and the logic behind the decisions for the next sprint. Write it in an analytical style that could answer 'Why are you doing it this way?' on its own.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Sprint 15 Planning Summary\n\nBackground:\nSprint 14 completed 6 of 10 planned items (60%). Sprint 13 completed 8 of 11 (72%). The declining trend prompted a root cause analysis before Sprint 15 planning.\n\nRoot cause analysis of Sprint 14 incomplete items:\n- 3 items blocked by platform team dependencies (API endpoint, authentication module, data migration script). Average time to escalate: 5.3 days. Average resolution time after escalation: 2 days.\n- 2 items under-estimated at planning. Original estimates: 3 points each. Actual effort: 8 and 5 points respectively.\n- 1 item pulled mid-sprint for urgent client fix (unplanned).\n\nKey finding: 50% of incompletions were caused by late dependency escalation, not by team capacity. Reducing scope without addressing escalation speed would repeat the pattern.\n\nSprint 15 adjustments:\n1. Dependency protocol: any blocked item must be escalated within 24 hours, not at the next stand-up. Rachel will own escalation to the platform team directly.\n2. Estimation calibration: items involving integration work will be estimated using the revised complexity scale (see appendix). Planning poker will reference actual vs. estimated data from Sprints 13 and 14.\n3. Unplanned work buffer: 10% of sprint capacity (2 points) reserved for urgent client work to prevent mid-sprint disruption.\n\nPlanned capacity: 9 items, 34 story points (vs. Sprint 14: 10 items, 38 points).\nTarget completion rate: 85% or higher.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary walks through the data, the analysis, and the logic in a way that makes the Sprint 15 decisions feel inevitable given the evidence. Rachel would use this as both a planning tool and a reference document.",
          observation:
            "You included specific metrics like 'average time to escalate: 5.3 days', which shows the level of precision analytical communicators value. The decisions flow logically from the data.",
          coachingTip:
            "When writing analytical documents, ensure every decision can be traced back to a specific data point. If a decision appears without supporting evidence, it undermines the document's credibility.",
          styleContext:
            "Analytical communicators use planning documents as evidence of thinking. The document should not just state what will happen - it should prove why it is the right thing to do.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your decisions are clearly linked to specific data points. If the adjustments section reads like a list of good ideas rather than evidence-based responses to identified problems, it needs tightening.",
          observation:
            "Rachel said 'show our thinking, not just our conclusion.' If someone could remove your analysis section and the decisions would still make sense, the analysis is decorative rather than foundational.",
          coachingTip:
            "For each Sprint 15 adjustment, ask 'Which specific data point from the analysis justifies this?' If you cannot answer, the link is missing.",
          styleContext:
            "Analytical communicators evaluate planning documents by their logical integrity. Every decision must be traceable to evidence, or it is just an opinion.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary is either too vague, too narrative, or lacks the specific data Rachel requires. A summary that says 'We will do better next sprint by working smarter' would not survive Rachel's review.",
          observation:
            "If your document uses words like 'roughly', 'approximately', or 'a few' where specific numbers should be, it does not meet the analytical standard.",
          coachingTip:
            "Replace every vague quantity with a specific number. Replace every general statement with a specific example. What remains is what Rachel needs.",
          styleContext:
            "Analytical communicators see vague planning documents as a sign of unclear thinking. Precision in documentation reflects precision in thought.",
        },
      },
    },
  },

  // Scenario 263 - Owen Grant, team, intermediate
  {
    id: "scenario-263",
    title: "The Process Improvement Proposal",
    context:
      "Owen has identified that the team's quality assurance process is causing a 3-day bottleneck at the end of every release cycle. He has spent two weeks gathering data and now wants to present a structured proposal to restructure QA testing across the full development cycle rather than concentrating it at the end.",
    chooseContext:
      "A team member has asked 'Why can we not just hire another QA tester to speed things up?' Owen needs to explain why adding headcount does not solve a structural problem.",
    rewriteContext:
      "Owen has asked you to write a one-page proposal document that presents the problem, the evidence, the proposed solution, and the expected impact in a format the leadership team can evaluate.",
    characterId: "owen-grant",
    dialogue:
      "I have been tracking our release cycle data for the past six releases. On average, development completes on day 12 of a 15-day cycle, which gives QA three days to test everything. In five of the last six releases, QA found issues that required rework, pushing the release back by an average of 1.8 days. The problem is structural - we have concentrated all testing at the end of the pipeline. I am proposing we distribute QA touchpoints across the cycle, and I have modelled what that would look like.",
    chooseDialogue:
      "I understand the instinct, but the data does not support it. If we add another tester and keep the same structure, we still have all testing concentrated in the last three days. Two people testing 15 features in three days is better than one person doing it, but it does not solve the rework problem. Rework happens because issues are found late. The fix is finding them earlier, not finding them faster. Let me show you the data: when we catch a defect on day 3 versus day 13, the average rework time drops from 1.5 days to 2 hours.",
    rewriteDialogue:
      "The leadership team will have five minutes to read this and ten minutes to discuss it. Every claim needs to be supported by data. Every recommendation needs to be specific enough to implement. If it reads like an essay, it will not get read. If it reads like a wish list, it will not get funded.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "team",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen has presented release cycle data from six sprints, identified a structural bottleneck with specific timing metrics, and proposed a modelled solution for distributing QA across the cycle. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen leads with longitudinal data, identifies a structural pattern, and proposes a solution backed by modelling. The emphasis on evidence over opinion, and structure over speed, is distinctly analytical.",
          observation:
            "Notice Owen says 'I have modelled what that would look like.' Analytical communicators do not just propose solutions - they test them against data before presenting them. The modelling step is what separates analysis from opinion.",
          coachingTip:
            "When someone presents a proposal with historical data, pattern identification, and pre-tested modelling, they are using an analytical style. The work happened before the meeting.",
          styleContext:
            "Analytical communicators believe that a proposal without supporting data is just a suggestion. They invest time in evidence-gathering to ensure their recommendations are credible.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen is structured and decisive, which can look direct. But the depth of data, the modelling, and the insistence on understanding the structural root cause distinguish this as analytical rather than direct.",
          observation:
            "A direct communicator would say 'We are changing the QA process. Here is the new approach.' Owen says 'Here is the data that shows why the current approach fails, and here is a modelled alternative.' The journey matters to Owen, not just the destination.",
          coachingTip:
            "Direct communicators announce decisions. Analytical communicators present cases. Owen is presenting a case, supported by evidence, for a decision he wants the team to make together.",
          styleContext:
            "Analytical communicators value buy-in through understanding. They believe that if people see the evidence, the right conclusion will be obvious.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not focused on team morale, interpersonal dynamics, or how the QA bottleneck makes people feel. The conversation is entirely about process, data, and structural improvement.",
          observation:
            "There is no mention of the QA team being stressed, overworked, or undervalued. Owen treats the problem as a system design issue, not a people issue.",
          coachingTip:
            "If someone discusses a team problem using system-level language (bottleneck, pipeline, cycle, structure) rather than people-level language (stressed, frustrated, overloaded), they are using an analytical lens.",
          styleContext:
            "Analytical communicators separate process problems from people problems. Both are real, but they require different diagnostic approaches.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A team member has suggested hiring another QA tester. Owen has explained that adding headcount does not solve a structural problem and shown that defects caught early take 2 hours to fix versus 1.5 days when caught late. How do you respond?",
      options: [
        {
          id: "s263-opt-a",
          text: "The early-detection data is compelling. If we move the first QA touchpoint to day 3, what does your model show for the overall rework reduction across a typical release? I want to see the projected impact before we commit.",
          score: 10,
          result: "strong",
          explanation:
            "You engage with Owen's data, ask for the modelled projection, and frame your question in terms of evidence-based decision making. This is exactly how analytical communicators want their proposals engaged with.",
        },
        {
          id: "s263-opt-b",
          text: "That makes sense. Let us just implement the distributed QA approach starting next sprint and see how it goes.",
          score: 5,
          result: "partial",
          explanation:
            "You accept the logic, which is good, but jumping to implementation without reviewing the model skips the analytical step Owen has prepared. He has done the modelling work and wants it reviewed before implementation.",
        },
        {
          id: "s263-opt-c",
          text: "I still think more testing capacity is the answer. Even if we spread the testing out, one person cannot cover everything. We need both - structural change and more people.",
          score: 0,
          result: "weak",
          explanation:
            "Owen has provided specific data showing that the problem is timing, not capacity. Insisting on headcount without engaging with the evidence dismisses the analysis Owen has invested weeks in building.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen wants a one-page proposal for leadership covering the problem, evidence, proposed solution, and expected impact. It must be data-supported and specific enough to implement. Write it in an analytical style.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "QA Process Restructure Proposal\n\nProblem:\nOur current QA process concentrates all testing in the final 3 days of a 15-day release cycle. Over the past 6 releases, this has caused an average delay of 1.8 days per release due to late-stage defect rework. Total cost of delays over 6 releases: approximately 10.8 working days of unplanned rework.\n\nEvidence:\n- Development completes on average on day 12, leaving QA 3 days (20% of the cycle) to test 100% of features.\n- 5 of 6 releases required rework after QA review.\n- Defects found on day 13 or later: average rework time of 1.5 days.\n- Defects found on day 3 or earlier: average rework time of 2 hours.\n- Root cause: defects compound when found late because dependent code has already been built on top of flawed components.\n\nProposed solution:\nDistribute QA across three touchpoints in the release cycle:\n1. Day 3-4: Component-level testing of core modules before integration begins.\n2. Day 8-9: Integration testing of completed feature sets before final development phase.\n3. Day 13-15: Final regression and release validation (reduced scope due to earlier testing).\n\nExpected impact:\n- Reduction in late-stage rework from 1.8 days to an estimated 0.3 days per release (based on modelled early-detection rates).\n- No additional headcount required - existing QA resource redistributed across the cycle.\n- Net gain: approximately 9 working days recovered over the next 6 releases.\n\nImplementation: Can begin in the next release cycle with no tooling changes. First-cycle results will be measured and reported to validate the model.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your proposal follows a clear logical chain: problem, evidence, solution, impact. Every claim is supported by data, and the recommendation is specific enough to implement immediately. Owen would present this with confidence.",
          observation:
            "You included the implementation note confirming no tooling changes are needed, which pre-empts a common leadership objection. Analytical communicators anticipate questions and answer them in the document.",
          coachingTip:
            "When writing proposals for analytical communicators, think about the three questions leadership will ask and answer them before they are raised. This builds credibility and saves meeting time.",
          styleContext:
            "Analytical communicators see proposals as arguments. Every section should logically necessitate the next, so the conclusion feels inevitable rather than suggested.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your evidence section directly supports your proposed solution. If the solution introduces elements not addressed in the evidence, the logical chain is broken.",
          observation:
            "Owen said every claim needs to be supported by data. If any sentence in your proposal contains an unsupported assertion, it weakens the entire document.",
          coachingTip:
            "Read each recommendation and trace it back to a specific data point in your evidence section. If you cannot find the link, either add the evidence or remove the recommendation.",
          styleContext:
            "Analytical communicators evaluate proposals by their internal consistency. A proposal that contradicts its own data, even subtly, will not be trusted.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your proposal is either too narrative, too vague, or lacks the specific data and structure Owen requires. A proposal that says 'We should test more frequently' without specifying when, how, and what the expected impact is will not pass Owen's quality filter.",
          observation:
            "If your proposal could be summarised as 'Let us do QA differently', it has not provided enough detail. Owen needs specifics: which days, which testing types, what metrics to track.",
          coachingTip:
            "For every recommendation, provide three things: what exactly will change, when it will happen, and how you will measure whether it worked.",
          styleContext:
            "Analytical communicators reject proposals that are strong on vision but weak on detail. The detail is the proposal. Without it, there is nothing to evaluate.",
        },
      },
    },
  },

  // Scenario 264 - Fiona Banks, team, advanced
  {
    id: "scenario-264",
    title: "The Cross-Functional Data Dispute",
    context:
      "Fiona has been asked to mediate a disagreement between the marketing and finance teams about customer acquisition cost (CAC) figures. Marketing reports a CAC of 42 pounds, while finance reports 67 pounds. Both teams are using the same raw data but different calculation methodologies. Fiona needs to resolve the discrepancy and align both teams on a single, defensible number.",
    chooseContext:
      "The marketing lead has said 'Our number is right - finance is inflating the CAC by including costs that are not directly attributable to acquisition.' Fiona needs to address the methodological disagreement without taking sides.",
    rewriteContext:
      "Fiona has asked you to write a one-page methodology alignment document that both teams can sign off on, defining exactly what costs are included in CAC, why, and what the resulting figure is.",
    characterId: "fiona-banks",
    dialogue:
      "I have reviewed both calculations. Marketing's 42-pound figure includes direct advertising spend and agency fees only. Finance's 67-pound figure adds content production costs, marketing team salaries pro-rated by time spent on acquisition activities, and platform subscription costs. Neither number is wrong - they are answering different questions. The question we need to agree on is: what definition of CAC does this organisation need for strategic decision-making? Once we align on that, the number will follow.",
    chooseDialogue:
      "I understand why you see it that way, and if we are only measuring the efficiency of our ad spend, your number is the right one. But the board is using CAC to evaluate the overall cost-effectiveness of our growth strategy, and for that purpose, excluding salaries and platform costs understates the true investment. I am not saying your methodology is wrong. I am saying it answers a different question than the one the board is asking. Let us define the question first, and then the methodology becomes obvious.",
    rewriteDialogue:
      "This document needs to do three things: define exactly what costs are included in our CAC calculation, explain the rationale for each inclusion or exclusion, and state the resulting figure. Both teams need to be able to look at this and say 'I understand and agree with this methodology, even if it is different from what I was using before.' Precision matters here - if there is any ambiguity, we will be back in this room in three months having the same argument.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "team",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Fiona has reviewed both CAC calculations, identified the methodological differences without declaring either wrong, and reframed the disagreement as a question of definition rather than accuracy. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona demonstrates advanced analytical communication by dissecting both methodologies objectively, refusing to take sides based on politics, and reframing the conflict as a definitional problem. The emphasis on aligning the question before debating the answer is a sophisticated analytical move.",
          observation:
            "Notice Fiona says 'Neither number is wrong - they are answering different questions.' This reframing defuses the conflict by removing the right/wrong dynamic and replacing it with a precision-of-definition dynamic. It is elegant analytical mediation.",
          coachingTip:
            "Advanced analytical communicators often resolve disputes by going up a level of abstraction. Instead of arguing about which number is correct, Fiona argues about which question is correct. The number then becomes a function of the definition.",
          styleContext:
            "Analytical communicators believe that most data disagreements are actually definitional disagreements. Align the definitions and the data conflict resolves itself.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is structured and decisive in her approach, which can look direct. But she is not making a decision about which number to use - she is facilitating a structured process for arriving at the right definition. A direct communicator would pick a number and move on.",
          observation:
            "A direct communicator would say 'We are using finance's number because the board needs the full picture. Marketing, adjust your reporting.' Fiona says 'Let us agree on the question before we argue about the answer.' The process matters to Fiona.",
          coachingTip:
            "Direct communicators resolve disputes by deciding. Analytical communicators resolve disputes by defining. Fiona is defining, not deciding.",
          styleContext:
            "Analytical communicators in mediation roles prioritise methodological agreement over speed. They believe a well-defined process produces better outcomes than a fast decision.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona has not focused on how either team feels, whether the disagreement has damaged the working relationship, or whether people need reassurance. The conversation is entirely about methodology, definitions, and logic.",
          observation:
            "There is no language about feelings, no empathy for the frustration of the disagreement, and no attempt to make either side feel better. Fiona treats the dispute as an intellectual problem, not an interpersonal one.",
          coachingTip:
            "If someone approaches a team conflict by analysing the logic of both positions rather than addressing the emotions involved, they are using an analytical style.",
          styleContext:
            "Analytical communicators believe that resolving the logical disagreement will resolve the emotional one. Fix the data, and the relationship will follow.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The marketing lead argues their number is correct and finance is inflating CAC. Fiona has reframed this as a question of purpose - what definition of CAC does the board need? - rather than a question of accuracy. How do you respond as the marketing lead?",
      options: [
        {
          id: "s264-opt-a",
          text: "That is a useful reframe. If the board needs a fully loaded CAC for strategic planning, then the finance methodology is closer to what they need. But I would still want us to track the direct acquisition cost separately so we can measure channel efficiency. Can we define both metrics with clear purposes?",
          score: 10,
          result: "strong",
          explanation:
            "You accept Fiona's reframe, acknowledge the board's need, and propose a practical solution that preserves both metrics with clear purposes. This engages with the analytical approach and moves the conversation forward constructively.",
        },
        {
          id: "s264-opt-b",
          text: "I can see the board perspective, but I worry that including salaries in the CAC will make our acquisition performance look worse than it actually is. Can we present both numbers with context?",
          score: 5,
          result: "partial",
          explanation:
            "You engage with the reframe partially, but the concern about 'looking worse' introduces a perception-based argument into a methodology discussion. Fiona would want to separate how the number looks from what the number means.",
        },
        {
          id: "s264-opt-c",
          text: "With respect, I think we are overcomplicating this. Our number is based on industry-standard methodology. Finance should align with that rather than inventing their own calculation.",
          score: 0,
          result: "weak",
          explanation:
            "Appealing to industry standard without engaging with Fiona's point about purpose dismisses the analytical reframe entirely. Fiona has explained that the right methodology depends on the question being asked, not on what the industry defaults to.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona wants a methodology alignment document defining exactly what costs are included in CAC, the rationale for each, and the resulting figure. Both teams must be able to sign off on it. Write it in an analytical style with no ambiguity.",
      targetTraits: ["specific-detail", "structured", "evidence-based", "avoids-vague"],
      exampleStrongResponse:
        "Customer Acquisition Cost (CAC) - Methodology Alignment Document\n\nPurpose:\nTo establish a single, agreed CAC calculation methodology for use in board reporting and strategic planning. This document supersedes any previous departmental calculations.\n\nDefinition:\nCAC represents the total cost incurred to acquire one new customer, calculated as total acquisition costs divided by the number of new customers acquired in the same period.\n\nIncluded costs (with rationale):\n1. Direct advertising spend (paid search, social, display) - directly attributable to customer acquisition campaigns. No dispute between teams.\n2. Agency fees - directly tied to campaign execution. No dispute between teams.\n3. Content production costs for acquisition-specific content - included because content created for acquisition purposes is a direct input to the acquisition process. Excluded: brand content not linked to acquisition campaigns.\n4. Marketing team salaries, pro-rated by % of time spent on acquisition activities - included because staff time is a real cost of acquiring customers. Pro-rating methodology: each team member logs time allocation quarterly. Current average: 60% acquisition, 40% retention.\n5. Platform and tooling subscriptions used in acquisition (ad platforms, analytics tools) - included because these are necessary inputs to the acquisition process. Excluded: tools used exclusively for retention or general operations.\n\nExcluded costs (with rationale):\n- Sales team costs (tracked separately under cost of sale)\n- Office overheads (not directly attributable to acquisition)\n- Retention marketing costs (separate metric)\n\nResulting figure:\nQ4 CAC: 61 pounds per new customer (based on 420,000 pounds total included costs / 6,892 new customers).\n\nNote: This differs from the previous marketing figure (42 pounds) which excluded items 3-5, and the previous finance figure (67 pounds) which included sales team costs now excluded.\n\nReview: This methodology will be reviewed quarterly. Any proposed changes must be submitted with supporting rationale and approved by both marketing and finance leads before implementation.\n\nAgreed by: [Marketing Lead] __________ [Finance Lead] __________ Date: __________",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your document defines every inclusion and exclusion with a specific rationale, arrives at a precise figure, and explains how it relates to both previous numbers. Both teams could sign this because they can see exactly where their original number fits and why the aligned number differs.",
          observation:
            "You included the note explaining how the new figure relates to both previous figures, which pre-empts the obvious question both teams will ask. Analytical communicators anticipate and address questions within the document.",
          coachingTip:
            "When writing methodology alignment documents, always explain the delta from previous figures. If people cannot trace how the old number became the new number, they will not trust the new number.",
          styleContext:
            "Analytical communicators see methodology documents as contracts of understanding. Every definition must be precise enough that two reasonable people would interpret it identically.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether every included and excluded cost has a specific rationale. If any item is included with just a label and no explanation, it leaves room for future disagreement.",
          observation:
            "Fiona said if there is any ambiguity, the teams will be back in three months having the same argument. Every line in your document must close a potential loophole.",
          coachingTip:
            "For each cost item, state three things: what it is, whether it is included or excluded, and why. If the 'why' is missing, the methodology is incomplete.",
          styleContext:
            "Analytical communicators build documents that prevent future disputes, not just resolve current ones. Every ambiguity left in the document is a future disagreement waiting to happen.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your document is either too vague, too brief, or lacks the precision Fiona requires. A document that says 'CAC includes all relevant marketing costs' is not a methodology - it is a summary that invites ten different interpretations.",
          observation:
            "If your document uses phrases like 'relevant costs', 'reasonable allocation', or 'typically included', it is not specific enough. Fiona needs binary definitions: included or excluded, with reasons.",
          coachingTip:
            "Replace every subjective term with an objective one. 'Relevant' becomes a specific list. 'Reasonable' becomes a defined percentage. 'Typically' becomes 'always' or 'never.'",
          styleContext:
            "Analytical communicators reject documents that rely on interpretation. If two readers could reach different conclusions from the same document, it has failed its purpose.",
        },
      },
    },
  },
];
