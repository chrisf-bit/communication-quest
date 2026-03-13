import { Scenario } from "@/types";

export const SCENARIOS_PART10: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (109-111)
  // ============================================

  // Scenario 109 - Sam Hartley, client, foundation
  {
    id: "scenario-109",
    title: "The New Client Onboarding",
    context:
      "You are in a kick-off call with a new client. Sam is leading the onboarding process and has joined to set expectations for the first 90 days of the partnership.",
    chooseContext:
      "Sam has outlined the deliverables and is now asking you to confirm who from your side will own each workstream. He wants named individuals, not team titles.",
    rewriteContext:
      "Sam has asked you to send a follow-up email to the client confirming the onboarding timeline, key contacts, and first deliverable date.",
    characterId: "sam-hartley",
    dialogue:
      "Welcome aboard. I will keep this short. Here is what we deliver in the first 90 days, here is who owns what on our side, and here is the date of the first milestone. I need the same from you by Friday.",
    chooseDialogue:
      "I need names, not departments. Who specifically is responsible for the data migration, who is handling testing, and who do I call if something slips?",
    rewriteDialogue:
      "Send the client a confirmation email today. Timeline, contacts, first deliverable. Keep it to one page. They do not need a welcome pack; they need clarity.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "client",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Sam has opened a client onboarding call by immediately listing deliverables, ownership, and deadlines, and asking the client to reciprocate by Friday. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam wastes no time on pleasantries and jumps straight to structure, ownership, and dates. This is a textbook direct opening, setting clear expectations from the start.",
          observation:
            "Notice how Sam frames the onboarding as a transaction of accountability: 'here is ours, now give me yours'. There is no relationship-building preamble.",
          coachingTip:
            "When someone opens a first meeting by listing deliverables rather than building rapport, they are signalling a direct style. Respond with equal clarity.",
          styleContext:
            "Direct communicators view onboarding as setting the rules of engagement. They believe clarity upfront prevents conflict later.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Sam does use structure, which can seem analytical. But notice that Sam is not asking for analysis or methodology. The focus is on speed, ownership, and commitment.",
          observation:
            "An analytical communicator would spend time explaining the rationale behind each milestone. Sam states them as facts and moves on.",
          coachingTip:
            "If someone lists things to get agreement quickly, it is direct. If they list things to ensure everyone understands the logic, it is analytical.",
          styleContext:
            "Direct communicators organise information to accelerate decisions. Analytical communicators organise information to ensure accuracy.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not asked how the client feels about the partnership, nor has he tried to build excitement about working together. The entire opening is task-focused.",
          observation:
            "There is no warmth, no invitation to share concerns, and no creative visioning. This is a purely transactional exchange.",
          coachingTip:
            "Ask yourself: is this person focused on getting things done quickly or on building a connection? Sam is firmly in the 'getting things done' camp.",
          styleContext:
            "Direct communicators believe the best way to start a client relationship is by demonstrating competence and clarity, not by socialising.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam wants named individuals for each workstream, not team titles. How do you respond?",
      options: [
        {
          id: "s109-opt-a",
          text: "Data migration: Sarah Patel, starts Monday. Testing: James Liu, first test cycle completes 28 March. Escalation contact: me, direct line. I will send you their details within the hour.",
          score: 10,
          result: "strong",
          explanation:
            "Specific names, specific dates, a clear escalation path, and a time-bound follow-up. This matches Sam's demand for precision perfectly.",
        },
        {
          id: "s109-opt-b",
          text: "I will check with the team and get back to you with the names once I have confirmed availability. We should have clarity by early next week.",
          score: 5,
          result: "partial",
          explanation:
            "Directionally right, but 'early next week' is too vague for Sam, who asked for names now, not a promise of names later.",
        },
        {
          id: "s109-opt-c",
          text: "We tend to work quite collaboratively, so it is more of a shared responsibility model. Everyone chips in where needed, so the client will always have someone available.",
          score: 0,
          result: "weak",
          explanation:
            "This avoids answering the question entirely. Sam asked for named owners and you have offered a philosophy of teamwork. A direct communicator will see this as evasion.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam has asked you to send a one-page confirmation email to the client covering timeline, contacts, and first deliverable. Write it in a direct style, keeping it tight and action-focused.",
      targetTraits: ["concise", "structured", "named-contacts", "specific-dates"],
      exampleStrongResponse:
        "Subject: Onboarding Confirmation and Key Dates\n\nThank you for the kick-off call today. Below is a summary of the agreed onboarding plan.\n\nTimeline: 90-day onboarding period, starting 17 March.\nKey contacts: Sarah Patel (data migration), James Liu (testing), Chris Hartley (escalations).\nFirst deliverable: Data migration scoping document, due 28 March.\n\nPlease confirm your named contacts by Friday. I will schedule the first progress check for 31 March.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is structured, specific, and wastes no words. A direct communicator would be happy to send this straight to the client.",
          observation:
            "You included named contacts, dates, and a clear next action. This is the kind of follow-up that builds trust through clarity.",
          coachingTip:
            "When writing emails for direct communicators, treat every sentence as a headline. If it does not contain a fact or an action, cut it.",
          styleContext:
            "Direct communicators judge email quality by how quickly the reader can extract the key information. Structure and brevity are everything.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good start, but your email may be missing specific dates, names, or a clear call to action. Check that every key detail Sam requested is included.",
          observation:
            "If your email uses phrases like 'in the coming weeks' or 'the relevant team members', it lacks the specificity Sam expects.",
          coachingTip:
            "Replace every vague reference with a concrete one. 'The team' becomes 'Sarah Patel'. 'Soon' becomes '28 March'. Direct communicators want precision.",
          styleContext:
            "Direct communicators read emails for actionable detail. Vague language creates follow-up questions, which wastes everyone's time.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too long, too vague, or too focused on relationship-building rather than the practical details Sam requested.",
          observation:
            "If your email opens with several sentences about how excited you are to work together, you have misjudged the audience.",
          coachingTip:
            "Write the email, then delete any sentence that does not answer the questions: who, what, and when. What remains is what Sam wants.",
          styleContext:
            "Direct communicators see overly warm onboarding emails as padding. They build trust through delivery, not through pleasantries.",
        },
      },
    },
  },

  // Scenario 110 - Jordan Cole, team, intermediate
  {
    id: "scenario-110",
    title: "The New Team Formation",
    context:
      "A new cross-functional team is being assembled for a high-priority project. Jordan has called the first team meeting to set direction and assign roles.",
    chooseContext:
      "Jordan has outlined the project scope and is now assigning roles. One team member has suggested a more collaborative approach to deciding responsibilities. Jordan is responding.",
    rewriteContext:
      "Jordan has asked you to draft a short team charter that captures roles, decision-making authority, and the first three milestones.",
    characterId: "jordan-cole",
    dialogue:
      "Right, here is how this works. I have already spoken to each of your managers. You are on this team for 12 weeks. I am the decision-maker. Each of you owns a workstream. If there is a blocker, come to me. Do not wait for a meeting. Let us get the roles sorted now so we can start delivering this week.",
    chooseDialogue:
      "I appreciate the suggestion, but we do not have time to workshop this. I have matched skills to workstreams based on what I know. If someone genuinely cannot deliver their area, tell me now and we will swap. Otherwise, let us move.",
    rewriteDialogue:
      "Draft a one-page team charter. Roles, decision rights, and the first three milestones with dates. No mission statement, no values paragraph. Just who does what and by when.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "team",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Jordan has opened the first team meeting by stating the timeline, declaring decision-making authority, and assigning workstreams without group discussion. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan takes charge immediately, pre-assigns roles, and sets the pace. There is no invitation to discuss the structure; it is presented as decided. This is a direct leader forming a team for speed.",
          observation:
            "The phrase 'do not wait for a meeting' is telling. Direct communicators see meetings as bottlenecks. They want issues raised and resolved in real time.",
          coachingTip:
            "When a leader forms a team by assigning rather than consulting, they are operating in a direct style. Respond with clarity about your capacity and any genuine blockers.",
          styleContext:
            "Direct communicators believe teams are most effective when everyone knows their role from day one. They prioritise speed of formation over consensus.",
        },
        partial: {
          result: "partial",
          explanation:
            "Reasonable thought. Jordan is structured and methodical, which can look analytical. But notice that Jordan is not explaining the rationale behind the assignments or inviting questions about methodology.",
          observation:
            "An analytical communicator would explain why each person was matched to each workstream. Jordan simply states the assignments as facts.",
          coachingTip:
            "The tell is what follows the structure. Analytical says 'here is why'. Direct says 'here is what; let us go'.",
          styleContext:
            "Direct communicators use structure to accelerate action. Analytical communicators use structure to ensure rigour. The purpose behind the organisation differs.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan is not checking how the team feels about being assigned or whether the group dynamic works. There is no attempt to build team spirit or explore individual preferences.",
          observation:
            "A supportive or expressive leader would start by getting to know the team, understanding preferences, or building a shared vision. Jordan starts by directing.",
          coachingTip:
            "Notice what is absent: there is no icebreaker, no 'tell me what you are excited about', and no space for team bonding. The focus is purely operational.",
          styleContext:
            "Direct leaders build team cohesion through shared delivery, not through shared discussion. They believe results create bonds faster than conversations.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A team member has suggested a more collaborative approach to role assignment. Jordan has overruled it and asked if anyone genuinely cannot deliver their assigned area. How do you respond?",
      options: [
        {
          id: "s110-opt-a",
          text: "My workstream is the data integration. I can deliver it. One flag: I will need access to the staging environment by Wednesday, or the first milestone slips. Can you unlock that?",
          score: 10,
          result: "strong",
          explanation:
            "You have accepted the role, confirmed capability, and raised a specific blocker with a date. This is exactly how to work with a direct leader: say yes, flag risks early, and be precise.",
        },
        {
          id: "s110-opt-b",
          text: "I think the workstream makes sense for me, though I would like to understand a bit more about how it fits with the other streams before I fully commit.",
          score: 5,
          result: "partial",
          explanation:
            "Reasonable, but 'before I fully commit' signals hesitation. Jordan has already decided. Ask your clarifying questions, but frame them as operational, not conditional.",
        },
        {
          id: "s110-opt-c",
          text: "I think it would be really valuable if we all spent some time getting to know each other's strengths first. That way we can organically find the best fit for each workstream.",
          score: 0,
          result: "weak",
          explanation:
            "Jordan has explicitly rejected this approach. Raising it again will be seen as not listening. The time for this conversation was before the meeting, not during it.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan has asked you to draft a one-page team charter covering roles, decision rights, and the first three milestones with dates. Write it in Jordan's direct style: no mission statement, just operational clarity.",
      targetTraits: ["structured", "specific-roles", "decision-rights", "milestone-dates"],
      exampleStrongResponse:
        "Project Charter: Q2 Platform Migration\n\nDecision-maker: Jordan Cole. Escalation route: direct to Jordan, no waiting for meetings.\n\nRoles:\n- Data integration: Alex Reeves. Owns schema mapping and staging environment.\n- Front-end build: Priya Kaur. Owns UI components and accessibility compliance.\n- Testing: Liam Osei. Owns test plans, defect triage, and go/no-go recommendation.\n\nMilestones:\n1. Scoping complete: 28 March\n2. Build phase sign-off: 18 April\n3. User acceptance testing starts: 2 May\n\nBlockers to be raised immediately via direct message to Jordan.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your charter is clean, specific, and operational. It gives every team member exactly what they need: who does what, who decides, and when things are due.",
          observation:
            "You avoided the temptation to add a vision statement or team values section. Jordan specifically said not to, and you respected that.",
          coachingTip:
            "When a direct leader says 'no mission statement', they mean it. Adding one would signal that you are not listening to their preferences.",
          styleContext:
            "Direct communicators believe charters should be reference documents, not inspirational posters. If someone needs to look something up, it should take five seconds.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your charter covers the right areas but may lack specificity in roles or dates. Check that each role has a clear owner and each milestone has a date.",
          observation:
            "If your charter says 'the team will collaborate on testing', it is too vague. Jordan wants one named person per workstream.",
          coachingTip:
            "Apply Jordan's test: can someone pick this up in week six and immediately know who to call about a specific issue? If not, add more detail.",
          styleContext:
            "Direct communicators want documents that eliminate ambiguity. Every role should have one owner, and every milestone should have one date.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your charter either includes unnecessary sections like values or purpose statements, or lacks the concrete detail Jordan requested.",
          observation:
            "If you opened with 'our team is committed to collaboration and excellence', you have written the kind of document Jordan explicitly asked you not to write.",
          coachingTip:
            "Delete every sentence that does not answer: who, what, or when. A direct leader's charter is a contract, not a manifesto.",
          styleContext:
            "Direct communicators measure documents by their utility, not their polish. A charter that looks beautiful but lacks specifics is worthless to them.",
        },
      },
    },
  },

  // Scenario 111 - Alex Tran, one-to-one, advanced
  {
    id: "scenario-111",
    title: "The Delegation Challenge",
    context:
      "You are in a one-to-one with Alex. She wants to discuss delegating a critical project to you, but she is clear that delegation means full ownership, not hand-holding.",
    chooseContext:
      "Alex has outlined the scope and is now testing whether you can handle the pressure. She is asking pointed questions about how you would manage a specific risk scenario.",
    rewriteContext:
      "Alex has asked you to write a brief ownership statement for the project, confirming what you are accountable for, your first three actions, and when you will report back.",
    characterId: "alex-tran",
    dialogue:
      "I am going to hand you the Meridian account restructure. Full ownership. That means you make the calls, you deal with the client, and you carry the result. I will not be checking in weekly. If you need me, come to me. But if you are waiting for me to ask how it is going, you will be waiting a long time. Are you ready for that?",
    chooseDialogue:
      "Here is a scenario. The client pushes back on the proposed timeline and threatens to go above you to me. What do you do? And do not say 'I would consult with you first'.",
    rewriteDialogue:
      "Write me a short ownership statement. What you own, your first three actions, and when I will hear from you. Keep it to a single paragraph. I will hold you to whatever you write.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "one-to-one",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Alex is delegating a project with full ownership, explicitly stating she will not check in and expecting you to come to her only if needed. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex's delegation style is unambiguous: take it, own it, do not wait for hand-holding. This is a direct communicator trusting through autonomy, not through supervision.",
          observation:
            "The phrase 'I will not be checking in weekly' is revealing. Direct communicators delegate by stepping back completely, not by monitoring closely. They expect you to manage up proactively.",
          coachingTip:
            "When a direct communicator delegates, they are testing your independence. Asking too many questions early on will be interpreted as a lack of readiness.",
          styleContext:
            "Direct communicators view delegation as a binary act: either you have ownership or you do not. There is no halfway. They respect people who take the reins without hesitation.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Alex is methodical about defining scope, which can seem analytical. But notice she is not asking you to create a detailed plan or risk register. She is testing your nerve, not your process.",
          observation:
            "An analytical delegator would walk through each risk, ask for contingency plans, and set up regular review points. Alex is doing the opposite: handing it over and stepping away.",
          coachingTip:
            "Analytical delegation comes with structure and review. Direct delegation comes with freedom and accountability. Alex is offering the latter.",
          styleContext:
            "Direct communicators delegate to test leadership capacity. They want to see how you operate without a safety net, because that reveals your true capability.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex is not offering support, encouragement, or a collaborative approach. The message is clear: this is yours, prove you can handle it.",
          observation:
            "There is no 'let me know how I can help' or 'we are in this together'. Alex is deliberately creating distance to see how you perform independently.",
          coachingTip:
            "Notice the emotional temperature: there is no warmth, but there is respect. Alex is giving you a significant opportunity. In direct communication, that is how trust is shown.",
          styleContext:
            "Direct communicators show trust by giving you space, not by checking in. If they delegate and disappear, it means they believe you can deliver.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex has presented a scenario where the client threatens to escalate above you. She has told you not to say you would consult her first. How do you respond?",
      options: [
        {
          id: "s111-opt-a",
          text: "I would tell the client that I am the decision-maker on this project and that escalating will not change the timeline, because the timeline is based on delivery capacity, not authority. Then I would offer them two alternative phasing options that protect the critical path. If the client still escalates, I will brief you in advance so you are not blindsided, but I will handle it.",
          score: 10,
          result: "strong",
          explanation:
            "This demonstrates ownership, decisiveness, and strategic thinking. You have shown Alex you can hold your ground with a client and manage the escalation risk without leaning on her.",
        },
        {
          id: "s111-opt-b",
          text: "I would try to understand why the client wants to escalate and explore whether there is a compromise on the timeline that works for both sides. I would keep you informed of any developments.",
          score: 5,
          result: "partial",
          explanation:
            "This is too passive. Exploring compromise is fine, but 'try to understand' and 'keep you informed' signal that you are managing the situation rather than leading it. Alex wants to see command.",
        },
        {
          id: "s111-opt-c",
          text: "Honestly, I think in that situation I would want to make sure the client feels heard and work together to find a solution that keeps the relationship strong. I would probably loop you in early just to be safe.",
          score: 0,
          result: "weak",
          explanation:
            "Alex explicitly told you not to default to consulting her. 'Loop you in early just to be safe' is the exact response she was testing against. This signals you are not ready for full ownership.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex has asked you to write a single-paragraph ownership statement covering what you own, your first three actions, and when she will hear from you. Write it in a direct, committed tone. She will hold you to it.",
      targetTraits: ["ownership-language", "specific-actions", "committed-tone", "self-sufficient"],
      exampleStrongResponse:
        "I own the Meridian account restructure end to end, including client relationship, deliverables, and commercial outcome. First three actions: one, I am meeting the client's head of operations on Monday to reset expectations on timeline. Two, I am reviewing the current service model by Wednesday and identifying the three changes that will have the most impact. Three, I am presenting the restructured proposal to the client by 4 April. You will hear from me on 11 April with a progress update, or sooner if there is a material risk.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your statement is confident, specific, and shows genuine ownership. Alex would read this and feel comfortable stepping away, which is exactly the point.",
          observation:
            "You committed to a reporting date on your terms, not hers. That shows you are managing up, not waiting to be managed. Direct communicators respect this.",
          coachingTip:
            "When writing ownership statements for direct leaders, use 'I own' and 'I will', never 'I hope to' or 'I will try'. The language must match the level of accountability.",
          styleContext:
            "Direct communicators treat ownership statements as commitments. Once written, they expect delivery. Choose your words carefully, because they will be quoted back to you.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your statement covers the right ground but may lack conviction or specificity. Check whether your actions have dates and whether your language signals ownership rather than intention.",
          observation:
            "If you wrote 'I plan to' instead of 'I will', or 'around mid-April' instead of a specific date, it weakens the commitment.",
          coachingTip:
            "Read your statement back and ask: would I be comfortable being held to this in a performance review? If not, make it more specific.",
          styleContext:
            "Direct communicators interpret soft language as uncertainty. 'I will aim to meet the client next week' reads as 'I might not meet the client next week'.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your statement either lacks specific actions, defers to Alex for decisions, or reads more like a request for support than a declaration of ownership.",
          observation:
            "If your statement includes 'with your guidance' or 'subject to your approval', it undermines the entire purpose of the delegation.",
          coachingTip:
            "Alex gave you full ownership. Your statement should read as if you are the project lead, not as if you are asking permission to be one.",
          styleContext:
            "Direct communicators delegate to reduce their own involvement, not to create a co-management arrangement. Your statement should confirm that you understand this.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (112-114)
  // ============================================

  // Scenario 112 - Nina Okafor, team, foundation
  {
    id: "scenario-112",
    title: "The Knowledge Sharing Session",
    context:
      "Nina has organised an informal knowledge-sharing session for the team. She wants everyone to bring one lesson learned from a recent project and share it in a way that inspires others.",
    chooseContext:
      "Nina has kicked things off with her own story and the energy in the room is high. She is now calling on you to share your lesson learned in a way that 'makes people remember it'.",
    rewriteContext:
      "Nina has asked you to write up your lesson learned as a short post for the team's internal blog, capturing the story and the insight in a way that others will want to read.",
    characterId: "nina-okafor",
    dialogue:
      "OK everyone, forget bullet points for the next hour. I want real stories. What went wrong, what surprised you, what made you think differently. The best lessons come from the messiest moments, right? I will go first because mine involves a spectacular misread of a client's mood. You will love it.",
    chooseDialogue:
      "Your turn! And do not just give us the lesson, give us the story. What happened? How did it feel? Make us feel like we were there.",
    rewriteDialogue:
      "That was great! Now write it up for the team blog. I want people who were not in the room to get the same energy. Tell the story first, then land the insight. Make it personal.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "team",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Nina has organised a knowledge-sharing session asking for 'real stories', rejecting bullet points, and volunteering to go first with a personal anecdote. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Spot on. Nina is creating a space for storytelling, leading with personal vulnerability, and rejecting structured formats. This is expressive communication at its most natural.",
          observation:
            "Notice that Nina goes first to set the tone. Expressive communicators often lead by example, showing the level of openness and energy they want from others.",
          coachingTip:
            "When someone rejects formal formats in favour of personal stories and shared energy, they are operating in an expressive style. Match the storytelling tone.",
          styleContext:
            "Expressive communicators believe the best learning happens through shared experience, not through structured reports. They value the human story behind every lesson.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both expressive and supportive styles value personal sharing, but Nina is not focused on making people feel safe; she is focused on making people feel energised. The vibe is 'let us be bold', not 'let us be careful'.",
          observation:
            "A supportive communicator would check that everyone is comfortable sharing. Nina assumes everyone is ready and leads with enthusiasm.",
          coachingTip:
            "If the invitation is 'share when you feel ready', it is supportive. If the invitation is 'share something brilliant', it is expressive.",
          styleContext:
            "Expressive communicators create energy through enthusiasm. Supportive communicators create safety through reassurance. Both are people-focused, but the energy is different.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina has explicitly rejected structured formats and data-driven approaches. The session is designed around stories and feelings, not analysis and process.",
          observation:
            "There are no requests for data, no agendas, and no methodical frameworks. This is a purely people-oriented, energy-driven session.",
          coachingTip:
            "Look at what Nina values: stories, energy, personal moments, messiness. These are hallmarks of expressive communication, not task-focused styles.",
          styleContext:
            "Expressive communicators see knowledge sharing as a creative act, not a reporting exercise. They believe insight comes from narrative, not from spreadsheets.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina has asked you to share your lesson learned as a story, not a summary. She wants the team to feel like they were there. How do you respond?",
      options: [
        {
          id: "s112-opt-a",
          text: "So picture this: it is 4pm on a Friday, the client presentation is in two hours, and I have just realised the data in slide seven is completely wrong. My stomach dropped. I had two choices, bluff through it or call the client and be honest. I called them. And the thing is, being upfront about the mistake actually built more trust than a perfect presentation ever would have. The lesson? Honesty under pressure is a superpower.",
          score: 10,
          result: "strong",
          explanation:
            "This is a vivid, personal story with emotional detail and a clear takeaway. It matches Nina's request perfectly: the audience feels like they were there.",
        },
        {
          id: "s112-opt-b",
          text: "One lesson I learned recently is the importance of data validation before client presentations. We had an error in a key slide and had to flag it to the client. It worked out fine, but it reinforced the value of checking early.",
          score: 5,
          result: "partial",
          explanation:
            "The content is relevant but the delivery is flat. Nina asked for a story, not a summary. The lesson is clear but the human experience is missing.",
        },
        {
          id: "s112-opt-c",
          text: "I have put together a three-point framework for quality assurance in client presentations. Point one: data validation checks. Point two: peer review at least 24 hours before. Point three: a rollback plan if errors are found on the day.",
          score: 0,
          result: "weak",
          explanation:
            "Nina specifically said 'forget bullet points'. Presenting a three-point framework in a storytelling session completely misreads the room and the style.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina has asked you to write your lesson learned as a team blog post. She wants a story first, then the insight, and she wants it to be personal. Write it in an expressive style that captures energy and humanity.",
      targetTraits: ["storytelling", "personal-voice", "emotional-detail", "inspiring-conclusion"],
      exampleStrongResponse:
        "It was 4pm on a Friday and I had just spotted a number in slide seven that was completely wrong. Two hours until the client presentation. My first instinct was to hope nobody would notice. My second instinct was better: I picked up the phone and told the client.\n\nHere is the thing I did not expect. Instead of losing trust, we gained it. The client said, 'I would rather work with someone who tells me the truth than someone who hides behind perfect slides.' That one phone call taught me more about client relationships than a year of flawless presentations ever did. Honesty under pressure is not a risk; it is a strategy.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Brilliant. Your post reads like a real story, not a report. The personal voice, emotional detail, and punchy conclusion are exactly what Nina was looking for.",
          observation:
            "You let the reader experience the moment before delivering the lesson. That sequence, story then insight, is how expressive communicators learn and teach.",
          coachingTip:
            "When writing for an expressive audience, always lead with the human moment. The insight lands harder when the reader has already felt the tension.",
          styleContext:
            "Expressive communicators consume content the way they create it: through story and emotion. A blog post that reads like a memo will be ignored.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your post has the right message but may lack the personal voice or emotional texture Nina wanted. Check whether a reader would feel the moment or just understand the lesson.",
          observation:
            "If your post could be attributed to anyone on the team, it is not personal enough. Nina asked you to make it yours.",
          coachingTip:
            "Add one specific detail that only you would know: what you felt, what you saw, what you almost did instead. That is what turns a summary into a story.",
          styleContext:
            "Expressive communicators value authenticity over polish. A rough, honest story will always outperform a smooth, generic one in this context.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your post reads more like a process document than a personal story. Nina asked for energy, humanity, and narrative. Check whether you have delivered any of those.",
          observation:
            "If your post could work as a slide in a training deck, it is too impersonal. Nina wanted a blog post that people choose to read, not one they are assigned.",
          coachingTip:
            "Start over and write as if you are telling a friend over coffee. What happened? How did it feel? What did you learn? That is the structure Nina wants.",
          styleContext:
            "Expressive communicators disengage from content that feels corporate or detached. To reach them, write like a person, not like a department.",
        },
      },
    },
  },

  // Scenario 113 - Priya Sharma, client, intermediate
  {
    id: "scenario-113",
    title: "The Upsell Conversation",
    context:
      "You are on a video call with Priya, who is pitching an expanded service package to an existing client. The client is happy with the current arrangement and has not asked for more. Priya sees an opportunity to show them what they are missing.",
    chooseContext:
      "The client has expressed interest but is cautious about budget. Priya is shifting the conversation from cost to value, and she wants you to contribute by painting a picture of the impact.",
    rewriteContext:
      "Priya has asked you to draft a short follow-up message to the client that captures the excitement of the call and leaves them wanting to know more about the expanded service.",
    characterId: "priya-sharma",
    dialogue:
      "I know you are happy with what we are doing, and that is brilliant. But honestly, I keep thinking about what we could do if we went further. Imagine if your customers had the same experience your team just described, but across every touchpoint. That is not a dream; we can build it. Let me show you what that looks like.",
    chooseDialogue:
      "I hear you on the budget. But think about it this way: what if this investment does not cost you money, it saves you money, by reducing churn and increasing lifetime value? The numbers are exciting. Help me show them the bigger picture here.",
    rewriteDialogue:
      "Send them a follow-up that keeps the momentum alive. Do not send a proposal yet; send a message that makes them excited to see the proposal. Make them feel what this could mean for their business.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "client",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Priya is pitching an expanded service by asking the client to 'imagine' a bigger vision and saying 'that is not a dream, we can build it'. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya leads with vision, uses emotive language, and paints a picture of possibility. She is selling the feeling of what could be, not the specification of what will be delivered.",
          observation:
            "Notice the use of 'imagine' and the framing of the upsell as a journey rather than a transaction. Expressive communicators sell through inspiration.",
          coachingTip:
            "When someone pitches by asking you to imagine a future state rather than listing features, they are operating in an expressive style. Engage with their vision.",
          styleContext:
            "Expressive communicators believe the best sales conversations start with excitement, not spreadsheets. They want the client to feel the value before seeing the numbers.",
        },
        partial: {
          result: "partial",
          explanation:
            "Interesting. Priya is confident and forward-moving, which can seem direct. But a direct communicator would lead with ROI and specific deliverables, not with 'imagine' and emotional engagement.",
          observation:
            "Direct upselling sounds like 'here is what you get and here is what it costs'. Priya's approach sounds like 'picture what your business could become'. The emphasis is on vision, not transaction.",
          coachingTip:
            "If the pitch focuses on what the product does, it is likely direct. If it focuses on how the product makes the client feel, it is likely expressive.",
          styleContext:
            "Expressive and direct communicators can both be persuasive, but their methods differ. Direct persuades through logic and urgency. Expressive persuades through vision and emotion.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya is not cautiously checking whether the client is comfortable, nor is she methodically walking through data. She is generating excitement and painting a bold vision.",
          observation:
            "The language is aspirational and energetic, not careful or detail-oriented. This is an expressive communicator in full sales mode.",
          coachingTip:
            "Look at the emotional energy of the pitch. High enthusiasm, future-focused language, and vivid imagery all point to an expressive style.",
          styleContext:
            "Expressive communicators in sales mode are at their most dynamic. They create a sense of possibility that makes the client want to be part of the story.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The client is cautious about budget. Priya wants you to help paint a picture of the impact. How do you contribute to the conversation?",
      options: [
        {
          id: "s113-opt-a",
          text: "Think about your best customer right now, the one who keeps coming back. Now imagine every customer having that experience. That is what we are talking about here. The investment is not a cost; it is the difference between keeping customers and losing them to someone who gives them that feeling.",
          score: 10,
          result: "strong",
          explanation:
            "This mirrors Priya's style perfectly: vivid, customer-centric, and emotionally engaging. You have reframed the budget concern as an opportunity, which is what Priya was looking for.",
        },
        {
          id: "s113-opt-b",
          text: "We have seen a 20% improvement in customer retention for clients who adopt the expanded package. I can share the case study data if that would be helpful.",
          score: 5,
          result: "partial",
          explanation:
            "Useful data, but Priya asked you to 'paint a picture', not present statistics. This answer supports the case but does not match the emotional energy of the conversation.",
        },
        {
          id: "s113-opt-c",
          text: "I think we should respect the client's budget constraints and perhaps revisit this conversation in six months when they have had more time to see the value of the current arrangement.",
          score: 0,
          result: "weak",
          explanation:
            "This kills the momentum entirely. Priya has created energy and you have applied the brakes. Suggesting a six-month delay undermines the pitch at the moment it needs support.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya has asked you to send a follow-up message that keeps the client excited, without sending a formal proposal yet. Write a message in Priya's expressive style that makes the client want to see the proposal.",
      targetTraits: ["vision-focused", "emotionally-engaging", "momentum-building", "curiosity-creating"],
      exampleStrongResponse:
        "It was brilliant talking today, and I have not stopped thinking about the possibilities since we hung up. The way your team described your customer experience tells me you already understand what great looks like. Now imagine scaling that across every touchpoint.\n\nI am putting together something that will show you exactly what that looks like in practice. I think you are going to be excited when you see it. I will have it with you by Friday, but in the meantime, keep thinking about that vision we discussed. It is closer than you think.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message builds anticipation without giving everything away. It is warm, vision-focused, and makes the client feel valued. Priya would be proud to send this.",
          observation:
            "You created a sense of momentum and exclusivity. The client feels like they are part of something exciting, not just receiving a sales pitch.",
          coachingTip:
            "With expressive communicators, follow-up messages should feel like the conversation is continuing, not like a transaction has ended. Keep the energy alive.",
          styleContext:
            "Expressive communicators use follow-up messages to maintain emotional momentum. The worst thing you can do is send a flat, formal response after an energetic call.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message covers the right themes but may lack the warmth or energy Priya wanted. Check whether your message makes the client feel excited or just informed.",
          observation:
            "If your follow-up reads like a project update, it has lost the spark of the conversation. Priya wants the client to feel the same excitement they felt on the call.",
          coachingTip:
            "Add one line that references something specific from the call, a moment, a comment, a shared laugh. That personal touch keeps the connection alive.",
          styleContext:
            "Expressive communicators remember conversations by how they felt, not by what was decided. Your follow-up should trigger the same feeling.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too formal, too focused on process, or jumps straight to commercial detail. Priya explicitly said not to send a proposal yet.",
          observation:
            "If your follow-up includes pricing, deliverables, or terms, you have moved too fast. The goal is to build desire, not to close the deal.",
          coachingTip:
            "Think of this message as a film trailer, not the film itself. You want the client saying 'I want to see more', not 'I have all the information I need'.",
          styleContext:
            "Expressive communicators understand that buying is emotional. People decide to buy because they want something, not because a spreadsheet told them to.",
        },
      },
    },
  },

  // Scenario 114 - Marcus Webb, one-to-one, advanced
  {
    id: "scenario-114",
    title: "The Attitude Conversation",
    context:
      "You are in a one-to-one with Marcus to address concerns about his recent attitude in team meetings. His enthusiasm has tipped into dominating conversations and dismissing quieter colleagues' contributions.",
    chooseContext:
      "Marcus has responded defensively, saying he is just passionate and that the team needs more energy, not less. He feels people are being too sensitive. You need to redirect without crushing his spirit.",
    rewriteContext:
      "Marcus has calmed down and asked you to help him understand what he should do differently. He wants a specific example of how he could have handled a recent meeting moment better.",
    characterId: "marcus-webb",
    dialogue:
      "Look, I know I come on strong sometimes, but that is who I am. When I am excited about something, I cannot help it, I want everyone to feel it too. If people find that intimidating, maybe they need to toughen up a bit. I am not going to apologise for having energy.",
    chooseDialogue:
      "Fine, maybe I do talk over people sometimes. But it is because I can see the answer and I just want us to get there faster. If I hold back, the meetings drag on. How is that better?",
    rewriteDialogue:
      "OK, give me a real example. Last Tuesday's meeting, when I jumped in on Leah's point about the customer feedback. What should I have done instead? Walk me through it.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "one-to-one",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Marcus is defending his behaviour by saying he is passionate, wants everyone to feel his energy, and should not have to apologise for it. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus is displaying the shadow side of expressive communication: overwhelming energy, difficulty moderating, and framing dominance as passion. He genuinely believes his enthusiasm is a gift to the team.",
          observation:
            "Notice that Marcus frames the issue in emotional terms, 'I cannot help it', 'feel it too', 'having energy'. Even his defence of his behaviour is expressive in nature.",
          coachingTip:
            "When giving feedback to expressive communicators, validate their energy first. If you start with criticism, they will hear it as an attack on who they are, not what they did.",
          styleContext:
            "Expressive communicators often struggle to see how their enthusiasm can overwhelm others. They genuinely believe they are creating positive energy, even when the impact is the opposite.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Marcus's 'toughen up' comment has a direct edge to it, and his confidence can look like directness. But the root of his behaviour is emotional energy, not task focus.",
          observation:
            "A direct communicator would say 'I talk over people because we need to make decisions faster'. Marcus says 'I talk over people because I am excited'. The motivation is emotional, not operational.",
          coachingTip:
            "Listen for what drives the behaviour. If it is results and efficiency, it is direct. If it is passion and energy, it is expressive.",
          styleContext:
            "Under pressure, expressive communicators can adopt direct language, but the underlying driver remains emotional. They want connection, not just outcomes.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus is not being methodical or cautious. His response is emotionally charged, personally framed, and focused on his own passion. This is expressive behaviour, even when it is causing problems.",
          observation:
            "The entire defence is built on identity and feeling: 'that is who I am', 'I cannot help it'. Analytical or supportive communicators would frame their defence differently.",
          coachingTip:
            "When someone defends their behaviour by referencing their identity and emotions rather than logic or process, you are dealing with an expressive communicator.",
          styleContext:
            "Expressive communicators take feedback personally because their communication style is deeply tied to their sense of self. Feedback on style feels like feedback on character.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus admits he talks over people but justifies it by saying he can see the answer and wants to get there faster. How do you respond without crushing his energy?",
      options: [
        {
          id: "s114-opt-a",
          text: "I value your energy, Marcus, and your instinct for the answer is often right. But here is the thing: when you jump in, the rest of the team stops trying. And then you lose access to ideas you would never have thought of yourself. Your energy is an asset, but only when it amplifies others, not when it replaces them.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Marcus's strengths while reframing the cost of his behaviour. It speaks to his values, helping the team be brilliant, and shows how his current approach undermines that goal.",
        },
        {
          id: "s114-opt-b",
          text: "I understand, but you need to let other people speak. It is a professional expectation and it is affecting how people perceive you in meetings.",
          score: 5,
          result: "partial",
          explanation:
            "This is direct and clear, which is valid feedback, but it does not engage with Marcus's emotional world. He will hear this as a reprimand, not as coaching, and it may trigger more defensiveness.",
        },
        {
          id: "s114-opt-c",
          text: "Perhaps we could implement a structured meeting format where everyone gets equal speaking time. That way no one person dominates and we ensure fair participation.",
          score: 0,
          result: "weak",
          explanation:
            "This avoids the personal conversation entirely and proposes a systemic solution to an individual issue. Marcus will see this as bureaucratic and impersonal, and it does not address his specific behaviour.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus has asked for a specific example: in last Tuesday's meeting, he jumped in on Leah's point about customer feedback. Write out what he should have done instead, in a way that an expressive communicator would find motivating rather than deflating.",
      targetTraits: ["specific-example", "validates-energy", "shows-alternative-behaviour", "inspiring-reframe"],
      exampleStrongResponse:
        "When Leah started sharing the customer feedback data, you jumped in with your interpretation before she finished. Here is what that moment could have looked like instead: Leah shares her point, you listen fully, and then you say, 'Leah, that is a really interesting angle. Can I build on that?' Now you are doing two things: you are validating her contribution and you are adding your energy on top of it. The room sees you as someone who elevates ideas, not someone who replaces them. That is the version of your energy that makes the team better.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. You gave Marcus a concrete alternative behaviour and framed it as an upgrade to his impact, not a restriction. Expressive communicators respond to coaching that makes them better, not coaching that makes them smaller.",
          observation:
            "By showing Marcus how the alternative makes him look like a leader who elevates others, you have appealed to his desire for positive impact.",
          coachingTip:
            "When coaching expressive communicators, show them how the new behaviour increases their influence. They will change if they see it as growth, not restriction.",
          styleContext:
            "Expressive communicators are motivated by the idea of having a positive impact on others. Frame behavioural change as a way to increase that impact, and they will embrace it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your example is helpful but may focus too much on what Marcus did wrong rather than what the better version looks like. Check whether your response inspires change or just delivers criticism.",
          observation:
            "If your response dwells on the negative impact without painting a clear picture of the alternative, Marcus will feel deflated rather than motivated.",
          coachingTip:
            "Spend at least as much time describing the better behaviour as you do describing the problem. Expressive communicators need to see the positive vision to commit to change.",
          styleContext:
            "Expressive communicators respond poorly to pure criticism. They need a vision of something better to aim for. Without it, feedback feels like a dead end.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response either lacks a specific alternative behaviour or is too critical without offering a way forward. Marcus asked for practical help, not a list of things he did wrong.",
          observation:
            "If your response reads like a disciplinary notice, it will shut Marcus down. He came to this conversation willing to learn. Meet him where he is.",
          coachingTip:
            "Start with what Marcus did well (his instinct was right), then show how a small change in delivery would transform the outcome. Make the alternative feel exciting, not limiting.",
          styleContext:
            "Expressive communicators need feedback that feels like coaching, not correction. If they leave the conversation feeling smaller, you have lost them.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (115-117)
  // ============================================

  // Scenario 115 - Leah Morgan, one-to-one, foundation
  {
    id: "scenario-115",
    title: "The Change Support Conversation",
    context:
      "You are in a one-to-one with Leah, who has just learned that her team is being restructured. She is not directly affected, but she is worried about her colleagues and wants to talk through how to support them.",
    chooseContext:
      "Leah has shared her concerns and is now asking you for advice on how to check in with her colleagues without overstepping. She wants to help but does not want to make things worse.",
    rewriteContext:
      "Leah has asked you to help her draft a short message to her affected colleagues, offering support without making assumptions about how they feel.",
    characterId: "leah-morgan",
    dialogue:
      "I know I am not the one being moved, but I cannot stop thinking about how the others must be feeling. Some of them have been in that team for years. I just want to make sure they know someone cares. Is it OK to reach out, or should I wait for them to come to me?",
    chooseDialogue:
      "I do not want to be intrusive, you know? Some people want to talk and some people want space. How do I check in without it feeling like I am making a big deal of it?",
    rewriteDialogue:
      "Could you help me write something I could send to each of them? Something that says 'I am here if you need me' without it sounding like I think they are falling apart.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "one-to-one",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Leah is worried about her colleagues during a restructure, asking whether it is OK to reach out and expressing a desire to make sure 'someone cares'. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah's focus is entirely on other people's wellbeing. She is not worried about her own position; she is worried about how her colleagues feel. This is the hallmark of a supportive communicator.",
          observation:
            "Notice the sensitivity in Leah's approach: she is even worried about reaching out in the wrong way. Supportive communicators think carefully about the emotional impact of their actions on others.",
          coachingTip:
            "When someone's first instinct during change is to think about how others are feeling, they are displaying a supportive communication style.",
          styleContext:
            "Supportive communicators are the emotional barometer of a team. They notice when someone is struggling before anyone else does, and they want to help without creating drama.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both supportive and expressive communicators care about people, but Leah is not generating energy or excitement. She is offering quiet, thoughtful support. The tone is gentle, not dynamic.",
          observation:
            "An expressive communicator might rally the team with encouragement. Leah is doing the opposite: quietly checking in, one person at a time, on their terms.",
          coachingTip:
            "If the concern is 'how can I lift everyone's spirits?', it is likely expressive. If the concern is 'how can I support them without overwhelming them?', it is supportive.",
          styleContext:
            "Supportive communicators operate with subtlety. They do not want to be the centre of attention; they want to create safety for others.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah is not focused on tasks, outcomes, or efficiency. She is entirely focused on people's emotional experience during a difficult time.",
          observation:
            "There are no action plans, no deadlines, and no data requests. Leah's entire world in this moment is about how her colleagues are feeling.",
          coachingTip:
            "When someone prioritises emotional wellbeing over operational concerns during change, they are communicating in a supportive style.",
          styleContext:
            "Supportive communicators process change through the lens of relationships. Their first question is always 'how are people?', not 'what is the plan?'.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah wants to check in with her affected colleagues without being intrusive. She knows some people want to talk and others want space. How do you advise her?",
      options: [
        {
          id: "s115-opt-a",
          text: "Keep it simple and low-pressure. Send a short message that says you are thinking of them and that you are around if they want to chat, no pressure. Then let them decide. Some will reach out straight away, and some might take a few days. Either way, they will know someone noticed and cared.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Leah's supportive instinct perfectly. It validates her desire to help while giving her a method that respects individual boundaries. Low-pressure, people-first advice.",
        },
        {
          id: "s115-opt-b",
          text: "I would not overthink it. Just walk up and ask them directly how they are feeling about the changes. People appreciate honesty.",
          score: 5,
          result: "partial",
          explanation:
            "Well-intentioned, but too direct for Leah's style. She is specifically worried about being intrusive, so telling her to 'just ask directly' does not address her concern.",
        },
        {
          id: "s115-opt-c",
          text: "To be honest, it is probably best to let HR handle the communication. Getting involved informally could cause confusion about what is actually happening.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses Leah's instinct to support her colleagues, which is core to her identity as a supportive communicator. She is not trying to manage the restructure; she is trying to care for people.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah has asked you to help her write a short message to her affected colleagues that offers support without making assumptions. Write it in a supportive style, keeping it warm, gentle, and low-pressure.",
      targetTraits: ["warm-tone", "no-assumptions", "low-pressure", "genuine-care"],
      exampleStrongResponse:
        "Hi, I just wanted to drop you a quick message. I know there is a lot going on at the moment, and I am not going to pretend I know how you are feeling about it. But I wanted you to know that I am here if you ever want to grab a coffee and chat, or even just sit quietly and not talk about work at all. No pressure either way. Just know that I am thinking of you.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Perfect. Your message is warm without being patronising, supportive without making assumptions, and offers a clear but low-pressure invitation. Leah would feel comfortable sending this.",
          observation:
            "You gave the recipient permission to engage on their own terms. That is the essence of supportive communication: creating space, not filling it.",
          coachingTip:
            "Supportive messages work best when they open a door without pushing anyone through it. 'I am here if you need me' is more powerful than 'let us talk about this'.",
          styleContext:
            "Supportive communicators understand that sometimes the most helpful thing is simply letting someone know they are not alone. The offer matters more than the conversation.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message has the right intent but may be too vague or too formal. Check whether it sounds like something a friend would say or something HR would send.",
          observation:
            "If your message uses phrases like 'please do not hesitate to reach out', it is too corporate for this context. Leah wants warmth, not professionalism.",
          coachingTip:
            "Read your message aloud. If it sounds like a formal letter, soften it. If it sounds like something you would genuinely say to a friend, it is right.",
          styleContext:
            "Supportive communicators use informal, personal language. Their messages should feel like a hand on the shoulder, not a memo from management.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too formal, too directive, or makes assumptions about how the person is feeling. Leah specifically wanted to avoid all three of those things.",
          observation:
            "If your message says 'I know this must be really hard for you', it is making an assumption. If it says 'here is what you should do', it is being directive.",
          coachingTip:
            "Remove any sentence that tells the person how they should feel or what they should do. Replace it with an open offer of presence.",
          styleContext:
            "Supportive communicators never presume to know someone else's emotional state. They offer support unconditionally and let the other person define what they need.",
        },
      },
    },
  },

  // Scenario 116 - Tom Brennan, team, intermediate
  {
    id: "scenario-116",
    title: "The Team Restructuring",
    context:
      "The team is being reorganised and some members are moving to new reporting lines. Tom has called a team meeting to discuss the transition and wants to make sure everyone feels heard before the changes take effect.",
    chooseContext:
      "During the meeting, one team member has expressed frustration about not being consulted before the decision was made. Tom is responding to the concern while keeping the group together.",
    rewriteContext:
      "Tom has asked you to draft a follow-up message to the team after the meeting, summarising what was discussed and reaffirming that support is available during the transition.",
    characterId: "tom-brennan",
    dialogue:
      "I know none of us chose this, and I am not going to stand here and pretend it is easy. What I can do is make sure that every one of you has a voice in how we handle the transition. I want to hear from each of you: what are you worried about, what do you need from me, and what would make this feel more manageable?",
    chooseDialogue:
      "I completely understand that frustration, and you are right, you deserved to be consulted. I cannot change the decision, but I can make sure that from this point forward, your voice is part of the process. What would help you feel more included going forward?",
    rewriteDialogue:
      "Send a message to the whole team after this meeting. Acknowledge what we discussed, remind them that their concerns were heard, and let them know my door is open. Keep it human.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "team",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Tom has opened a meeting about team restructuring by acknowledging difficulty, asking what people are worried about, and offering to listen to each person. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom leads with empathy, acknowledges the difficulty, and creates space for people to share their concerns. He is not selling the change or directing the team through it; he is supporting them through it.",
          observation:
            "Notice the phrase 'what would make this feel more manageable'. Tom is not asking what needs to be done; he is asking what would help people feel better. That is pure supportive communication.",
          coachingTip:
            "When a leader responds to change by asking 'what do you need from me?' rather than 'here is what we are going to do', they are operating in a supportive style.",
          styleContext:
            "Supportive leaders manage transitions by prioritising emotional safety. They believe people perform better when they feel heard, even if the outcome cannot change.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom is warm and people-focused, which can look expressive. But notice the energy is calm and grounded, not enthusiastic. Tom is holding space, not generating excitement.",
          observation:
            "An expressive leader would try to rally the team and generate positive energy about the change. Tom is simply making sure people feel safe and heard.",
          coachingTip:
            "If the leader's focus is on excitement and possibility, it is expressive. If the focus is on safety and belonging, it is supportive.",
          styleContext:
            "Supportive and expressive leaders are both people-oriented, but they create different kinds of energy. Supportive creates calm. Expressive creates enthusiasm.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom is not focused on the operational details of the restructure or on pushing the team to accept the change quickly. His entire focus is on how people are feeling.",
          observation:
            "There is no timeline, no action plan, and no discussion of deliverables. Tom has chosen to use this meeting for emotional processing, not operational planning.",
          coachingTip:
            "When a leader uses meeting time for listening rather than directing, they are prioritising relationships over tasks. That is a supportive style choice.",
          styleContext:
            "Supportive communicators believe that addressing emotional concerns first makes operational progress easier later. They invest time in people to save time on problems.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A team member is frustrated about not being consulted before the restructure decision. Tom has validated the concern and is asking what would help going forward. How do you support the conversation?",
      options: [
        {
          id: "s116-opt-a",
          text: "I think what would help is if we set up a short check-in each week during the transition, just 15 minutes, where anyone can raise concerns or flag things that are not working. Not a status update, but a space to talk honestly about how things are going.",
          score: 10,
          result: "strong",
          explanation:
            "This mirrors Tom's approach: creating a structured space for emotional processing. The emphasis on honesty over status updates shows you understand the supportive intent.",
        },
        {
          id: "s116-opt-b",
          text: "I think we just need to accept the decision and focus on making the new structure work. The sooner we move forward, the better.",
          score: 5,
          result: "partial",
          explanation:
            "Pragmatic, but it dismisses the emotional processing Tom is trying to facilitate. Moving forward is important, but Tom has deliberately created space for concerns first.",
        },
        {
          id: "s116-opt-c",
          text: "Has anyone done a proper analysis of whether the new structure is actually better? I would want to see the data before I commit to supporting it.",
          score: 0,
          result: "weak",
          explanation:
            "This shifts the conversation from people to process, which is the opposite of what Tom intended. The meeting is about emotional support, not structural analysis.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom has asked you to draft a follow-up message to the team after the restructure meeting. Acknowledge what was discussed, confirm concerns were heard, and remind them that support is available. Keep it human.",
      targetTraits: ["acknowledges-concerns", "warm-tone", "open-door", "reassuring"],
      exampleStrongResponse:
        "Hi everyone. Thank you for being so open in today's meeting. I know the restructure brings uncertainty, and I appreciate that several of you shared concerns honestly. That takes courage.\n\nI want you to know that everything raised today has been noted and will shape how we manage the transition. My door is genuinely open, whether you want to talk through a specific concern, ask a question, or simply check in. You do not need a reason or an agenda. We are going through this together, and I want every one of you to feel supported along the way.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your message is warm, genuine, and reinforces the emotional safety Tom created in the meeting. It makes the team feel that speaking up was valued, not just tolerated.",
          observation:
            "The phrase 'you do not need a reason or an agenda' removes barriers to reaching out. Supportive communicators make support as accessible as possible.",
          coachingTip:
            "Follow-up messages after difficult meetings should validate the courage it took to share concerns. That reinforcement encourages openness next time.",
          styleContext:
            "Supportive communicators use written follow-ups to extend the emotional safety of a meeting beyond its time boundary. The message says: what happened in that room still matters.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message is appropriate but may be too formal or too brief. Check whether it acknowledges the emotional courage shown in the meeting and offers a genuinely open invitation.",
          observation:
            "If your message reads like a meeting summary rather than a personal note, it needs more warmth. Tom asked you to keep it human.",
          coachingTip:
            "Add a sentence that acknowledges the difficulty directly. 'I know this is not easy' is more powerful than 'the transition is underway'.",
          styleContext:
            "Supportive communicators write the way they speak: with warmth, directness about emotions, and genuine care for the reader.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too corporate, too focused on the operational plan, or does not address the emotional concerns that were raised in the meeting.",
          observation:
            "If your message lists action items and timelines but does not mention feelings, concerns, or support, it misses the entire purpose of Tom's meeting.",
          coachingTip:
            "Before sending, ask: would someone who shared a difficult concern in that meeting feel reassured by this message? If not, rewrite with more empathy.",
          styleContext:
            "Supportive communicators judge follow-up messages by one question: does this make people feel safe to be honest again next time?",
        },
      },
    },
  },

  // Scenario 117 - David Chen, client, advanced
  {
    id: "scenario-117",
    title: "The Bad News Delivery",
    context:
      "You are preparing for a call with a long-standing client to deliver bad news: a key deliverable will be delayed by three weeks. David is leading the conversation and wants to handle it in a way that preserves the relationship.",
    chooseContext:
      "The client has reacted with disappointment. David is now managing the emotional fallout, acknowledging the impact on the client's business, and reinforcing the commitment to the partnership.",
    rewriteContext:
      "David has asked you to draft a follow-up email to the client that balances honesty about the delay with reassurance about the ongoing commitment to the relationship.",
    characterId: "david-chen",
    dialogue:
      "I want to be upfront with you because I think you deserve that. We are going to miss the deadline by about three weeks. I know how much you have riding on this, and I am not going to minimise that. What I want you to know is that we have not taken our eye off this, and we are going to work with you to make sure the delay causes as little disruption as possible.",
    chooseDialogue:
      "I completely understand your frustration, and I would feel the same way. This is not the service you expect from us, and it is not the standard we hold ourselves to. I want us to sit down together and work out how we can reduce the impact on your end. What matters most to you in the next three weeks?",
    rewriteDialogue:
      "Send them a follow-up email. Be honest about the delay, but make sure they know we care about them, not just the project. I want them to read it and feel that we are still in this together.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "client",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "David is delivering bad news to a client by being honest about the delay while focusing on preserving the relationship, asking what matters most to the client, and acknowledging their frustration. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David leads with honesty but wraps it in empathy and relationship focus. He does not minimise the problem, but he makes sure the client feels cared for, not just informed. This is a supportive communicator delivering difficult news.",
          observation:
            "Notice how David says 'I know how much you have riding on this'. He is acknowledging the human impact, not just the operational consequence. That empathetic framing is distinctly supportive.",
          coachingTip:
            "When someone delivers bad news by leading with empathy and focusing on the relationship impact, they are communicating in a supportive style, even if the content is tough.",
          styleContext:
            "Supportive communicators believe that how you deliver bad news matters as much as the news itself. They protect the relationship even when the message is difficult.",
        },
        partial: {
          result: "partial",
          explanation:
            "Interesting. David is honest and clear, which has a direct quality. But notice that the emphasis is on feelings, relationships, and collaborative problem-solving, not on efficiency or speed.",
          observation:
            "A direct communicator would say 'here is the delay, here is the new date'. David says 'here is the delay, and I want to understand how it affects you'. The focus shifts from information to empathy.",
          coachingTip:
            "If bad news is delivered with a focus on 'what we are going to do', it is direct. If it is delivered with a focus on 'how this makes you feel', it is supportive.",
          styleContext:
            "Supportive and direct communicators can both deliver bad news effectively, but they prioritise different things. Supportive protects the relationship. Direct protects the timeline.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David is not hiding behind data or avoiding the emotional dimension of the conversation. His approach is deeply people-centred, even though the topic is operational.",
          observation:
            "The conversation is structured around the client's feelings and needs, not around project milestones or risk analysis. That is a supportive approach.",
          coachingTip:
            "When delivering bad news, notice where the communicator puts their energy. If it goes into protecting the person, it is supportive. If it goes into explaining the problem, it is analytical.",
          styleContext:
            "Supportive communicators see every business interaction as a relationship interaction. Delivering bad news is an opportunity to deepen trust, not just to transfer information.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The client is disappointed about the delay. David is focused on understanding the impact on their business and preserving the relationship. How do you support the conversation?",
      options: [
        {
          id: "s117-opt-a",
          text: "I want to add that we have already started mapping out which parts of the deliverable matter most to your team, so we can prioritise those during the delay. If there are critical elements you need earlier, we will find a way to accelerate them. We are not stepping back from this; we are stepping closer.",
          score: 10,
          result: "strong",
          explanation:
            "This builds on David's supportive approach by combining empathy with practical responsiveness. The closing line, 'stepping closer', reinforces the relationship commitment.",
        },
        {
          id: "s117-opt-b",
          text: "The delay is due to a resource constraint that we did not anticipate. We have restructured the team and the new timeline is realistic. I am confident we will meet the revised date.",
          score: 5,
          result: "partial",
          explanation:
            "Factual and reassuring, but it does not match the emotional tone David has set. The client needs to feel cared for, not just briefed. This answer treats the symptom, not the relationship.",
        },
        {
          id: "s117-opt-c",
          text: "I think we should move the conversation to contract terms. If we are going to miss the deadline, we should discuss any implications for the SLA and whether penalties apply.",
          score: 0,
          result: "weak",
          explanation:
            "This turns an emotional conversation into a legal one. David is trying to preserve trust, and introducing contract penalties at this point would shatter the tone he has carefully built.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David has asked you to draft a follow-up email to the client that is honest about the delay but makes them feel that you care about them, not just the project. Write it in a supportive style that balances transparency with relationship warmth.",
      targetTraits: ["honest-about-delay", "relationship-focused", "collaborative-tone", "reassuring"],
      exampleStrongResponse:
        "Thank you for your honesty during today's call, and for giving us the chance to explain. I know a three-week delay is not what you planned for, and I do not take lightly the impact it has on your team's work.\n\nWhat I want you to take away from our conversation is this: we are committed to you, not just to the deliverable. We are already looking at which elements we can bring forward to reduce the disruption on your end, and I would like to schedule a short call this week to walk through those options together. This partnership matters to us, and we will make sure this moment strengthens it rather than weakens it.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email balances honesty with warmth, and the closing commitment to strengthening the partnership turns a negative moment into a trust-building opportunity. David would be proud to send this.",
          observation:
            "You acknowledged the impact without over-apologising, and you offered a concrete next step that puts the client in control. That is supportive communication at its best.",
          coachingTip:
            "When writing difficult emails in a supportive style, end with a statement about the future of the relationship, not just the resolution of the issue. That is what clients remember.",
          styleContext:
            "Supportive communicators turn setbacks into relationship milestones. The email after bad news is often more important than the email before it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email addresses the delay but may lack the personal warmth or relationship focus David wanted. Check whether the client would feel cared for or just informed.",
          observation:
            "If your email could have been sent by anyone on the team, it needs more personal voice. David wanted the client to feel the human behind the message.",
          coachingTip:
            "Add a line that acknowledges the trust the client has placed in you. That is not corporate language; it is relationship language, and it matters.",
          styleContext:
            "Supportive communicators write emails as if they are writing to a person, not to a company. The tone should feel personal, even in a business context.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too formal, too focused on the operational detail, or lacks the emotional intelligence David asked for. He wanted the client to feel that you care about them.",
          observation:
            "If your email reads like a project status update, it has missed the point. The delay is not the main subject; the relationship is.",
          coachingTip:
            "Before sending, read the email and ask: if I received this from a supplier who had let me down, would I feel valued? If not, rewrite with more empathy.",
          styleContext:
            "Supportive communicators know that clients do not leave because of one mistake. They leave because of how the mistake was handled. Your email is the handling.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (118-120)
  // ============================================

  // Scenario 118 - Owen Grant, one-to-one, foundation
  {
    id: "scenario-118",
    title: "The Coaching Conversation",
    context:
      "You are in a one-to-one with Owen, who is a high performer on your team. He has asked for the meeting to discuss his development and wants structured feedback on where he can improve.",
    chooseContext:
      "Owen has listened to your initial feedback and is now asking you to be more specific. He wants to understand the gap between his current performance and the next level, with examples.",
    rewriteContext:
      "Owen has asked you to write a development summary that he can refer back to, with clear criteria for what 'next level' looks like in measurable terms.",
    characterId: "owen-grant",
    dialogue:
      "I appreciate the positive feedback, but I would like to focus on the gaps. Can you walk me through the specific areas where I am not yet meeting the standard for the next grade? If possible, I would like to see the criteria mapped against my recent work so I can identify exactly where to focus.",
    chooseDialogue:
      "That is helpful context. Could you give me a concrete example from the last quarter where I fell short of that standard? I find it easier to improve when I can see precisely what 'better' looks like in a real scenario.",
    rewriteDialogue:
      "Could you write me a short development summary with three or four criteria for the next grade, how I currently measure against each one, and what evidence I would need to demonstrate? I want something I can track quarterly.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "one-to-one",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Owen has asked for specific criteria mapped against his recent work, concrete examples of gaps, and measurable development goals. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen is asking for data, specificity, and measurability. He does not want encouragement or broad feedback; he wants a precise diagnostic of where he stands against defined criteria.",
          observation:
            "The request to 'map criteria against recent work' is distinctly analytical. Owen wants to see the evidence, not hear an opinion.",
          coachingTip:
            "When someone asks for criteria, examples, and measurable gaps, they are signalling an analytical style. Respond with specifics, not generalities.",
          styleContext:
            "Analytical communicators approach their own development like a research project. They want data, baselines, and evidence-based improvement plans.",
        },
        partial: {
          result: "partial",
          explanation:
            "Reasonable. Owen is focused and results-oriented, which can seem direct. But notice that he is not asking for a quick answer or a decision. He wants a thorough, evidence-based analysis.",
          observation:
            "A direct communicator would say 'just tell me what I need to do'. Owen is saying 'show me the data that explains why'. The request is for depth, not speed.",
          coachingTip:
            "Direct development conversations focus on actions. Analytical development conversations focus on understanding the gap first, then planning the actions.",
          styleContext:
            "Analytical communicators will not commit to a development plan until they fully understand the diagnostic. They need to see the logic before they act on it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen is not asking for emotional support or creative brainstorming about his career. He wants structured, evidence-based feedback with clear metrics.",
          observation:
            "There is no discussion of how he feels about his performance, no interest in team dynamics, and no big-picture visioning. This is a data-driven conversation.",
          coachingTip:
            "When someone asks for criteria, evidence, and tracking frameworks in a development conversation, they are clearly analytical. Match their precision.",
          styleContext:
            "Analytical communicators want development feedback that could pass peer review. Vague comments like 'you need to be more strategic' are meaningless to them without supporting evidence.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen wants a concrete example from the last quarter where he fell short of the next-grade standard. He wants to see precisely what 'better' looks like. How do you respond?",
      options: [
        {
          id: "s118-opt-a",
          text: "In the Henderson project review, your analysis was thorough but you presented the findings without a recommendation. At the next grade, the expectation is that you interpret the data and propose a course of action, not just present it. A stronger version of that presentation would have included your recommended approach, supported by the three strongest data points, with a clear rationale for why you chose that direction over the alternatives.",
          score: 10,
          result: "strong",
          explanation:
            "This gives Owen exactly what he asked for: a specific example, the standard he missed, and a detailed picture of what a stronger version would look like. Precise, evidence-based, and actionable.",
        },
        {
          id: "s118-opt-b",
          text: "You are doing really well overall and I think you are very close to the next level. Keep doing what you are doing and look for opportunities to take on more responsibility.",
          score: 5,
          result: "partial",
          explanation:
            "Encouraging but not helpful for Owen. He asked for specific gaps and measurable criteria. Telling him to 'keep doing what you are doing' is the opposite of what an analytical communicator needs.",
        },
        {
          id: "s118-opt-c",
          text: "I think the main thing is that people at the next grade have a certain presence and gravitas. It is hard to define exactly, but you will know it when you feel it. Trust the process.",
          score: 0,
          result: "weak",
          explanation:
            "This is the worst possible response for an analytical communicator. Vague concepts like 'presence' and 'gravitas' without definition or evidence will frustrate Owen deeply.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen has asked for a development summary with criteria for the next grade, his current standing against each, and the evidence he would need. Write it in an analytical style with clear structure and measurability.",
      targetTraits: ["criteria-based", "measurable", "evidence-referenced", "structured"],
      exampleStrongResponse:
        "Development Summary: Owen Grant\n\n1. Strategic Recommendation: Current: presents analysis without recommendation. Target: delivers data-supported recommendations with rationale. Evidence needed: lead two project reviews where recommendations are adopted.\n\n2. Stakeholder Influence: Current: communicates findings to peers. Target: presents to senior leadership and shapes decisions. Evidence needed: present at one leadership review and receive positive feedback on clarity and impact.\n\n3. Cross-Functional Impact: Current: delivers within own workstream. Target: contributes to outcomes outside direct remit. Evidence needed: documented contribution to one cross-team initiative with measurable results.\n\nReview point: end of Q2, with progress check at mid-quarter.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is structured, measurable, and gives Owen a clear framework to track his progress. Each criterion has a current state, a target state, and specific evidence requirements.",
          observation:
            "You treated Owen's development like a scoring rubric. That is exactly how analytical communicators want to approach self-improvement: with clear benchmarks and trackable milestones.",
          coachingTip:
            "When writing development plans for analytical communicators, always include 'evidence needed'. They want to know how they will prove they have met the standard.",
          styleContext:
            "Analytical communicators do not trust subjective assessments. If a development goal cannot be measured, it does not feel real to them.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your summary covers the right areas but may lack specificity in evidence requirements or measurability. Check whether each criterion has a clear, observable benchmark.",
          observation:
            "If your criteria include phrases like 'demonstrate improved leadership' without defining what that looks like, Owen will ask for clarification immediately.",
          coachingTip:
            "For each criterion, apply the test: could two independent reviewers agree on whether Owen has met this standard? If not, make it more specific.",
          styleContext:
            "Analytical communicators want development criteria that are as objective as possible. Subjectivity creates anxiety for them, because they cannot prepare for it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary is either too vague, too motivational, or lacks the structure Owen requested. He asked for criteria, current standing, and evidence. Check that all three are present for each item.",
          observation:
            "If your summary includes sentences like 'continue to develop your leadership skills', Owen will not know what to do with it. He needs observable, trackable criteria.",
          coachingTip:
            "Replace every abstract quality with a concrete behaviour. 'Be more strategic' becomes 'present data-supported recommendations in two of the next four project reviews'.",
          styleContext:
            "Analytical communicators are self-motivated once they have clear targets. The development plan is not there to inspire them; it is there to define the standard they are working towards.",
        },
      },
    },
  },

  // Scenario 119 - Rachel Finch, client, intermediate
  {
    id: "scenario-119",
    title: "The Scope Creep Challenge",
    context:
      "You are on a call with a client who has been gradually adding requirements outside the original scope. Rachel has joined the call to address the issue methodically and protect the project timeline.",
    chooseContext:
      "The client has pushed back, saying the additional requirements were implied in the original brief. Rachel is now walking through the documented scope to clarify what was and was not included.",
    rewriteContext:
      "Rachel has asked you to draft a scope clarification email to the client that references the original agreement, itemises the additional requests, and proposes a formal change process.",
    characterId: "rachel-finch",
    dialogue:
      "I would like to take a step back and look at this against the original scope document. We have received 14 additional requests over the last six weeks that were not part of the agreed deliverables. I have mapped each one to the original brief, and seven of them fall outside the contracted scope. I want to walk through them with you so we are both clear on what was agreed and what constitutes new work.",
    chooseDialogue:
      "I understand that your team may have interpreted the brief differently, and I respect that. But section 3.2 of the scope document defines the deliverables precisely, and three of these seven items are clearly outside that definition. Let me show you the comparison.",
    rewriteDialogue:
      "Draft an email to the client. Reference the scope document, list the seven out-of-scope items with their section references, and propose a change request process for any additions going forward. Be thorough but professional.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "client",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Rachel has mapped 14 additional client requests against the original scope document, identified seven that fall outside the contract, and wants to walk through the comparison. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel has done the research, mapped each request to the original document, and is presenting evidence-based findings. This is analytical communication at its most effective: structured, referenced, and methodical.",
          observation:
            "Notice that Rachel does not simply say 'this is out of scope'. She says 'I have mapped each request to the brief'. Analytical communicators back up every assertion with evidence.",
          coachingTip:
            "When someone addresses a problem by referencing documentation and walking through a systematic comparison, they are operating in a clear analytical style.",
          styleContext:
            "Analytical communicators handle scope disputes with evidence, not emotion. They let the documentation speak for itself and invite the other party to review the data.",
        },
        partial: {
          result: "partial",
          explanation:
            "Reasonable. Rachel is firm and clear, which can seem direct. But a direct communicator would say 'these are out of scope, we are not doing them'. Rachel is saying 'let me show you the evidence and walk through it together'.",
          observation:
            "The key difference is the method. Direct settles the matter with a decision. Analytical settles the matter with evidence. Rachel chooses evidence.",
          coachingTip:
            "If someone resolves a dispute by making a decision, it is direct. If they resolve it by presenting data and documentation, it is analytical.",
          styleContext:
            "Analytical communicators believe that shared understanding of the evidence leads to agreement. They would rather spend time showing you why than telling you what.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel is not focused on the client's feelings or on generating creative solutions. She is focused on factual accuracy, documentation, and systematic review.",
          observation:
            "There is no emotional language, no relationship management, and no brainstorming. This is a structured, evidence-led conversation about contractual scope.",
          coachingTip:
            "When someone responds to a business challenge by reaching for documents and data rather than empathy or ideas, they are communicating analytically.",
          styleContext:
            "Analytical communicators treat scope discussions as objective exercises. The answer is in the documentation, and their job is to make sure everyone sees it clearly.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The client says the additional requirements were implied in the original brief. Rachel is referencing section 3.2 of the scope document. How do you support Rachel's position?",
      options: [
        {
          id: "s119-opt-a",
          text: "If it helps, I have pulled together a comparison table showing each of the seven items alongside the relevant section of the scope document. In five cases, the scope document explicitly excludes the requested functionality. For the remaining two, the wording is ambiguous, so I would suggest we review those together and agree on whether they fall in or out of scope.",
          score: 10,
          result: "strong",
          explanation:
            "This mirrors Rachel's approach perfectly: structured, evidence-based, and fair. Acknowledging the two ambiguous items shows intellectual honesty, which an analytical communicator deeply respects.",
        },
        {
          id: "s119-opt-b",
          text: "I think Rachel has made a fair point. We should stick to what was agreed and process any new requests through a formal change order.",
          score: 5,
          result: "partial",
          explanation:
            "This supports the conclusion but does not add evidence. Rachel's approach is about showing the data, not just asserting the outcome. You have agreed with her but not strengthened her case.",
        },
        {
          id: "s119-opt-c",
          text: "I think we should be flexible here. The client relationship is more important than a strict reading of the contract. Can we find a way to absorb some of these requests as a gesture of goodwill?",
          score: 0,
          result: "weak",
          explanation:
            "This undermines Rachel's methodical approach in front of the client. She has built a careful, evidence-based case, and suggesting flexibility based on goodwill rather than data contradicts her entire strategy.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel has asked you to draft a scope clarification email referencing the original agreement, itemising the out-of-scope requests, and proposing a change process. Write it in Rachel's analytical style: thorough, referenced, and professional.",
      targetTraits: ["document-referenced", "itemised", "process-oriented", "professional-tone"],
      exampleStrongResponse:
        "Subject: Scope Clarification and Change Request Process\n\nDear [Client],\n\nFollowing our call today, I am writing to clarify the scope position for the current project phase.\n\nThe original scope, as defined in Section 3.2 of the Statement of Work (dated 14 January), includes the deliverables listed under items 3.2.1 to 3.2.9. Over the past six weeks, we have received 14 additional requests, of which seven fall outside the documented scope.\n\nOut-of-scope items:\n1. Custom reporting dashboard (not included in 3.2.4)\n2. Third-party API integration (excluded per 3.2.6)\n3. Multi-language support (not referenced in original brief)\n4. Automated notification system (excluded per 3.2.7)\n5. Extended user role permissions (outside 3.2.3)\n6. Historical data migration (not included in 3.2.8)\n7. Client-facing analytics portal (excluded per 3.2.9)\n\nFor any additions going forward, we propose the following change request process: submit a written request, receive a scoping and cost estimate within five working days, and proceed only with signed approval.\n\nPlease let me know if you would like to schedule a call to review any of these items in detail.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email is methodical, referenced, and professional. Every out-of-scope item is tied to a specific section of the original document, which gives the client no room for ambiguity.",
          observation:
            "You proposed a clear change request process, which prevents future scope creep. Analytical communicators always think about systemic solutions, not just immediate fixes.",
          coachingTip:
            "When writing scope clarification emails, always reference the specific document section. It transforms the conversation from opinion to fact.",
          styleContext:
            "Analytical communicators resolve disputes by making the evidence so clear that agreement becomes inevitable. Their emails are designed to eliminate ambiguity.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email covers the right territory but may lack specific document references or a structured change process. Check that each out-of-scope item is tied to the original agreement.",
          observation:
            "If your email says 'several items are out of scope' without listing them individually, it is not precise enough for Rachel's standards.",
          coachingTip:
            "Analytical communicators want every claim to be traceable. If you say something is out of scope, show exactly where the scope document supports that assertion.",
          styleContext:
            "Analytical communicators write emails that could serve as evidence. Every statement should be verifiable against a source document.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too vague, too accommodating, or lacks the structured referencing Rachel requested. She wanted a thorough, document-backed clarification, not a general summary.",
          observation:
            "If your email suggests absorbing the extra work or does not reference the scope document, it undermines the analytical approach Rachel has carefully built.",
          coachingTip:
            "Start with the scope document and work outward. Every statement in your email should be traceable to a specific clause or section.",
          styleContext:
            "Analytical communicators use documentation as the foundation of professional communication. An email without references is an opinion, not a fact.",
        },
      },
    },
  },

  // Scenario 120 - Fiona Banks, team, advanced
  {
    id: "scenario-120",
    title: "The Cross-Functional Handoff",
    context:
      "Your team is handing off a completed workstream to another department. Fiona is leading the handoff meeting and wants to ensure that every detail is documented, every risk is flagged, and the receiving team has everything they need to succeed.",
    chooseContext:
      "The receiving team has asked whether they can simplify the handoff documentation. Fiona is pushing back, explaining why the level of detail matters for a clean transition.",
    rewriteContext:
      "Fiona has asked you to draft the handoff summary document, covering completed work, known risks, open items, and recommended next steps, all with supporting evidence.",
    characterId: "fiona-banks",
    dialogue:
      "Before we hand anything over, I want to make sure the documentation is complete. I have prepared a checklist of 23 items that need to be signed off. Each one has a status, an owner, and supporting evidence. If anything is incomplete or ambiguous, we flag it now. I do not want the receiving team to discover gaps after we have moved on.",
    chooseDialogue:
      "I understand the desire to simplify, and I am not trying to create paperwork for its own sake. But three of the last four handoffs in this organisation resulted in rework because the documentation was insufficient. I have the data on that. The detail is there to protect your team, not to slow you down.",
    rewriteDialogue:
      "Draft the handoff summary. Four sections: completed work with evidence, known risks with probability and impact ratings, open items with owners and deadlines, and recommended next steps with rationale. I want the receiving team to have no questions left unanswered.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "team",
    skillFocus: "brevity",

    spotQuestion: {
      prompt:
        "Fiona has prepared a 23-item checklist with status, ownership, and evidence for each item, and wants every gap flagged before the handoff completes. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona's approach is systematic, evidence-based, and risk-aware. A 23-item checklist with status and evidence for each item is classic analytical communication: thorough, structured, and designed to eliminate uncertainty.",
          observation:
            "Notice that Fiona is not just checking things off a list; she requires supporting evidence for each item. Analytical communicators do not accept 'done' without proof.",
          coachingTip:
            "When someone prepares detailed checklists with evidence requirements, they are operating in an analytical style. Match their thoroughness when responding.",
          styleContext:
            "Analytical communicators treat handoffs as quality gates. They believe that rigour at the transition point prevents errors downstream.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Fiona is decisive and structured, which has a direct quality. But a direct communicator would focus on speed: 'hand it over and let them figure it out'. Fiona is focused on completeness: 'hand it over with zero gaps'.",
          observation:
            "The difference is in the priority. Direct values speed. Analytical values accuracy. Fiona would rather delay the handoff than rush it with incomplete documentation.",
          coachingTip:
            "If someone prioritises getting it done, it is direct. If they prioritise getting it right, it is analytical. Fiona clearly prioritises correctness.",
          styleContext:
            "Analytical communicators accept delays in the name of quality. Direct communicators accept imperfection in the name of speed. These are fundamentally different trade-offs.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona is not focused on people's feelings about the handoff or on generating excitement about the next phase. Her entire attention is on documentation, evidence, and risk mitigation.",
          observation:
            "The 23-item checklist, the evidence requirements, and the insistence on flagging ambiguity are all hallmarks of analytical communication. There is no emotional or relational focus here.",
          coachingTip:
            "When someone's preparation for a meeting includes numbered checklists with evidence columns, you are dealing with an analytical communicator. Bring your data.",
          styleContext:
            "Analytical communicators prepare for meetings the way auditors prepare for reviews. Every claim needs evidence, every risk needs documentation, and every gap needs a flag.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The receiving team has asked to simplify the handoff documentation. Fiona has cited data showing that three of the last four handoffs resulted in rework due to insufficient documentation. How do you support Fiona's position?",
      options: [
        {
          id: "s120-opt-a",
          text: "Fiona is right, and I can add to the evidence. The rework from the Q3 handoff cost 120 hours and pushed the delivery back by two weeks. If we compare that to the 15 hours it takes to complete the full documentation, the return on investment is clear. I would rather we invest the time now than repeat the same mistake.",
          score: 10,
          result: "strong",
          explanation:
            "This adds quantified evidence to Fiona's argument and frames the documentation as a cost-saving investment, not a burden. Analytical communicators are persuaded by data, and you have provided it.",
        },
        {
          id: "s120-opt-b",
          text: "I agree with Fiona. The documentation is important and we should complete it fully before handing over.",
          score: 5,
          result: "partial",
          explanation:
            "Supportive of Fiona's position but adds no evidence. In an analytical discussion, agreement without data is weak. Fiona would want you to strengthen the case, not just echo it.",
        },
        {
          id: "s120-opt-c",
          text: "I think we should find a middle ground. Maybe we can reduce the checklist to the 10 most critical items and hand over the rest as a reference document. That way both teams are happy.",
          score: 0,
          result: "weak",
          explanation:
            "This undermines Fiona's evidence-based position by proposing a compromise without analytical justification. Reducing the checklist arbitrarily contradicts the data she has presented about the cost of insufficient documentation.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona has asked you to draft a handoff summary with four sections: completed work with evidence, known risks with probability and impact, open items with owners and deadlines, and recommended next steps with rationale. Write it in Fiona's analytical style: thorough, evidence-based, and structured.",
      targetTraits: ["four-section-structure", "evidence-backed", "risk-rated", "rationale-included"],
      exampleStrongResponse:
        "Handoff Summary: Platform Migration Workstream\n\n1. Completed Work\n- Data schema migration: complete. Evidence: migration log signed off by QA on 8 March. 100% of 14,200 records verified.\n- API endpoints: 12 of 12 built, tested, and deployed to staging. Evidence: test results documented in Confluence (ref: PM-2024-API-12).\n- User acceptance testing: complete. Evidence: 98% pass rate across 47 test cases. Two minor defects resolved (ref: JIRA tickets PM-301, PM-302).\n\n2. Known Risks\n- Performance under peak load: probability medium, impact high. Staging tests used 60% of projected peak volume. Recommend a load test at full volume before go-live.\n- Third-party dependency on payment gateway API: probability low, impact high. Current SLA with provider expires 30 April. Recommend renewal before handoff completes.\n\n3. Open Items\n- Security penetration test: owner, InfoSec team. Deadline: 22 March. Status: scheduled.\n- Final data reconciliation: owner, data engineering. Deadline: 18 March. Status: in progress.\n\n4. Recommended Next Steps\n- Complete penetration test before any production deployment (rationale: regulatory requirement under ISO 27001).\n- Schedule full-volume load test within two weeks of handoff (rationale: staging tests did not replicate production conditions).\n- Renew payment gateway SLA before 30 April (rationale: service interruption risk to live transactions).",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your document is structured exactly as Fiona requested, with evidence references, risk ratings, and rationale for every recommendation. The receiving team has everything they need.",
          observation:
            "You included specific references (JIRA tickets, Confluence pages, dates) which make every claim verifiable. Analytical communicators consider unverifiable claims to be assumptions, not facts.",
          coachingTip:
            "When creating handoff documents for analytical stakeholders, always include reference links or document IDs. It transforms your summary from a narrative into an evidence trail.",
          styleContext:
            "Analytical communicators create documentation that could withstand an audit. If a statement cannot be traced to a source, it does not belong in the document.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your document has the right structure but may lack specific evidence references, risk ratings, or rationale. Check that each section meets the depth Fiona specified.",
          observation:
            "If your risks section says 'there is some risk around performance' without a probability and impact rating, it does not meet Fiona's standard.",
          coachingTip:
            "For each section, check: have I included the evidence (section 1), the ratings (section 2), the owners and dates (section 3), and the rationale (section 4)? All four must be present.",
          styleContext:
            "Analytical communicators evaluate documents against the brief. If the brief said four sections with specific requirements, missing any one of them is a gap.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your document either lacks the four-section structure, omits evidence and rationale, or reads more like a narrative summary than a structured handoff reference.",
          observation:
            "If your document could be described as 'a good overview', it is not detailed enough. Fiona wants a reference document, not a summary.",
          coachingTip:
            "Go back to Fiona's brief and treat each requirement as a checklist item. Evidence? Ratings? Owners? Dates? Rationale? If any are missing, add them.",
          styleContext:
            "Analytical communicators do not accept 'close enough' in documentation. Every requirement in the brief must be met precisely, because the document serves as a contractual reference for the receiving team.",
        },
      },
    },
  },
];
