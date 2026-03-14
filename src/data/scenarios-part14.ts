import { Scenario } from "@/types";

export const SCENARIOS_PART14: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (157-159)
  // ============================================

  // Scenario 157 - Jordan Cole, meeting, foundation
  {
    id: "scenario-157",
    title: "The Vendor Selection Committee",
    context:
      "You are in a vendor selection committee meeting to choose a new logistics partner. Jordan has reviewed all three proposals and is presenting her recommendation to the group.",
    chooseContext:
      "Jordan has recommended Vendor B and wants the committee to vote immediately. A colleague suggests extending the evaluation period by two weeks to gather more references.",
    rewriteContext:
      "Jordan has asked you to draft the meeting summary confirming the vendor decision, next steps, and who owns each action item.",
    characterId: "jordan-cole",
    dialogue:
      "I have read all three proposals. Vendor B is the strongest on price, delivery timelines, and contract flexibility. I recommend we go with them. Can we get a vote now so we can start onboarding this week?",
    chooseDialogue:
      "Two more weeks for what? We have the data, we have the pricing, and we have their track record. Delaying costs us money. Let us decide today.",
    rewriteDialogue:
      "Send the summary out within the hour. Decision, owners, deadlines. If people missed the meeting, they can read the email instead of asking me to repeat it.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "meeting",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Jordan has reviewed all three vendor proposals and is pushing for an immediate vote in the committee meeting. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Jordan has done her homework and wants to move straight to a decision. The focus is on speed, efficiency, and action, not further deliberation.",
          observation:
            "Notice how Jordan frames the meeting as a decision point, not a discussion forum. She has already formed her view and wants commitment from the group.",
          coachingTip:
            "When someone arrives at a meeting with a clear recommendation and pushes for a quick vote, that is a strong signal of a direct communication style.",
          styleContext:
            "Direct communicators see meetings as places to make decisions, not to explore options. They prepare in advance so the meeting itself can be short.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Jordan has clearly analysed the proposals, which may seem analytical. However, she is not inviting scrutiny of her methodology; she is driving towards a fast decision.",
          observation:
            "An analytical communicator would present a comparison matrix and invite the group to verify the scoring. Jordan presents a conclusion and asks for a vote.",
          coachingTip:
            "The key difference is intent: analytical communicators want the group to validate the process. Direct communicators want the group to endorse the outcome.",
          styleContext:
            "Direct communicators use data as ammunition for decisions, not as a basis for extended discussion.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Jordan has not asked for anyone's feelings about the vendors, nor has she tried to build enthusiasm for the choice. This is a task-driven, results-oriented approach.",
          observation:
            "There is no attempt to create consensus or check that everyone is comfortable. Jordan wants a decision, not agreement.",
          coachingTip:
            "Look at what Jordan is asking for: a vote, not a conversation. That urgency and focus on outcomes is a hallmark of the direct style.",
          styleContext:
            "Direct communicators believe that good decisions come from clear thinking and fast action, not from lengthy group deliberation.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan wants to decide today but a colleague wants two more weeks. How do you respond in a way that works with Jordan's direct style?",
      options: [
        {
          id: "s157-opt-a",
          text: "I agree we have enough information. Let us vote now. If we need additional references, we can build that into the onboarding due diligence rather than delaying the decision.",
          score: 10,
          result: "strong",
          explanation:
            "This supports Jordan's push for speed while addressing the colleague's concern with a practical compromise. It keeps momentum without dismissing valid points.",
        },
        {
          id: "s157-opt-b",
          text: "Perhaps we could take a quick straw poll to see where the group stands, and if there is broad agreement, we move forward today?",
          score: 5,
          result: "partial",
          explanation:
            "This moves things along but introduces an extra step. Jordan wants a decision, not a temperature check. It is close but slightly too cautious.",
        },
        {
          id: "s157-opt-c",
          text: "I think we should respect the request for more time. Rushing a decision this important could backfire, and it is worth making sure everyone feels confident in the choice.",
          score: 0,
          result: "weak",
          explanation:
            "This directly opposes Jordan's approach and prioritises comfort over action. A direct communicator will see this as unnecessary delay.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan wants a meeting summary sent within the hour, covering the decision, owners, and deadlines. Write it in a direct style.",
      targetTraits: ["concise", "action-focused", "named-owners", "specific-deadlines"],
      exampleStrongResponse:
        "Subject: Vendor Selection Decision, Actions, and Deadlines\n\nVendor B has been selected as our new logistics partner. The committee voted unanimously today.\n\nActions:\n1. Contract review: Jordan Cole, due Friday 20 March.\n2. Legal sign-off: Mark Stevens, due Wednesday 25 March.\n3. Onboarding kick-off: Jordan Cole and Sarah Lin, scheduled for Monday 30 March.\n\nIf you have questions, contact Jordan directly.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is tight, clear, and actionable. Every sentence either confirms a decision or assigns an action with a deadline.",
          observation:
            "You have avoided unnecessary context about the evaluation process and focused on what happens next. This is exactly what Jordan wants.",
          coachingTip:
            "For direct communicators, the best meeting summary is the one that makes the next meeting unnecessary. Focus on decisions and actions.",
          styleContext:
            "Direct communicators value meeting summaries that function as contracts: who does what, by when.",
        },
        partial: {
          result: "partial",
          explanation:
            "Decent structure, but check whether you have included specific names and dates for every action item. Vague ownership like 'the team' will not satisfy Jordan.",
          observation:
            "If your summary explains why Vendor B was chosen, you have included background Jordan did not ask for. She wants actions, not rationale.",
          coachingTip:
            "Cut any sentence that starts with 'As discussed' or 'After careful consideration'. Jump straight to decisions and next steps.",
          styleContext:
            "Direct communicators assume context is shared. They do not need the summary to retell the story of the meeting.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary is either too long, too narrative, or missing the key elements Jordan requested: decision, owners, and deadlines.",
          observation:
            "If your summary reads like meeting minutes rather than an action plan, it misses the point for a direct communicator.",
          coachingTip:
            "Try writing the summary as a bulleted list of 'Who does what by when' statements. If it takes more than 30 seconds to read, it is too long.",
          styleContext:
            "Direct communicators judge a summary by whether they can scan it in under a minute and know exactly what to do next.",
        },
      },
    },
  },

  // Scenario 158 - Sam Hartley, feedback, intermediate
  {
    id: "scenario-158",
    title: "The Peer Feedback After a Joint Presentation",
    context:
      "You and Sam co-presented a quarterly business review to senior leadership. Sam is now giving you direct feedback on your section of the presentation in a private debrief.",
    chooseContext:
      "Sam has told you that your slides had too much text and your delivery was too slow. He wants you to commit to a specific change for the next QBR.",
    rewriteContext:
      "Sam has asked you to rewrite the opening slide of your section so it leads with the headline number rather than a paragraph of background context.",
    characterId: "sam-hartley",
    dialogue:
      "Your content was solid but your delivery let it down. Too many words on each slide, and you spent three minutes on context before getting to the numbers. The board wanted the headline, not the backstory. Fix that for next quarter.",
    chooseDialogue:
      "I do not need you to agree with me. I need you to tell me what you will do differently next time. One specific change. Go.",
    rewriteDialogue:
      "Rewrite your opening slide. Lead with the number. One sentence of context underneath. If the board wants more detail, they will ask for it.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "feedback",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Sam is giving you post-presentation feedback, criticising your slide density and delivery pace, and telling you to fix it. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Sam's feedback is blunt, specific, and action-oriented. He is not softening the message or asking how you feel about it; he is telling you what went wrong and what to change.",
          observation:
            "Notice that Sam does not frame this as a suggestion or a discussion. It is an instruction: 'Fix that for next quarter.' There is no ambiguity.",
          coachingTip:
            "Direct communicators give feedback as clear instructions, not as invitations to reflect. They expect you to act on it, not process it.",
          styleContext:
            "For direct communicators, honest feedback is a sign of respect. They believe sugarcoating wastes time and delays improvement.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Sam does reference specific issues with slide design and timing, which may seem analytical. But the intent is not to help you understand the principles of good slide design; it is to get you to change your behaviour immediately.",
          observation:
            "An analytical communicator would explain why too much text reduces comprehension, citing research or best practice. Sam simply tells you what was wrong and expects you to fix it.",
          coachingTip:
            "Ask whether the feedback is designed to educate you (analytical) or to change your behaviour (direct). Sam is firmly focused on the latter.",
          styleContext:
            "Direct communicators give feedback to drive improvement, not to teach theory. The 'why' is less important than the 'what next'.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Sam has not asked how you felt about the presentation, nor has he started with what went well. This is unvarnished, task-focused feedback.",
          observation:
            "There is no praise sandwich, no empathetic check-in, and no collaborative exploration of what happened. Sam goes straight to the problem.",
          coachingTip:
            "If feedback leads with the issue and ends with an instruction, the communicator is almost certainly direct. Supportive and expressive communicators would approach this very differently.",
          styleContext:
            "Direct communicators see blunt feedback as efficient and honest. They do not intend to be unkind; they simply prioritise clarity over comfort.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam wants one specific change you will make for the next QBR. How do you respond?",
      options: [
        {
          id: "s158-opt-a",
          text: "I will lead every slide with the headline metric and cap supporting text at two bullet points. I will do a dry run with you the week before to make sure the pacing is right.",
          score: 10,
          result: "strong",
          explanation:
            "Specific, measurable, and includes a built-in accountability mechanism. This is exactly the kind of commitment Sam is looking for.",
        },
        {
          id: "s158-opt-b",
          text: "That is fair feedback. I will work on reducing the text and tightening the delivery. I will aim to be more concise next time.",
          score: 5,
          result: "partial",
          explanation:
            "Directionally correct but too vague. 'Work on' and 'aim to' are intentions, not commitments. Sam wants a concrete action, not a general aspiration.",
        },
        {
          id: "s158-opt-c",
          text: "I appreciate the feedback, but I think the context was important for the audience. Not everyone in the room had the same background knowledge, so I wanted to make sure we brought everyone along.",
          score: 0,
          result: "weak",
          explanation:
            "This explains and defends rather than acting. Sam explicitly said he does not need agreement; he needs a commitment to change. Justifying the old approach will frustrate a direct communicator.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam wants you to rewrite your opening slide so it leads with the headline number instead of background context. Write the slide content in a direct style.",
      targetTraits: ["leads-with-data", "concise", "action-oriented", "minimal-text"],
      exampleStrongResponse:
        "Revenue: up 12% to 4.2M (Q3 target exceeded by 340K)\n\nDriven by enterprise upsell and reduced churn. Full breakdown on the next slide.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. You have led with the number, kept the context to a single line, and directed the audience to the detail only if they want it. Sam would approve.",
          observation:
            "The headline does the heavy lifting. Anyone glancing at this slide knows the result instantly, which is exactly what the board wants.",
          coachingTip:
            "Think of slide content for direct communicators as newspaper headlines: the most important fact first, then supporting detail in descending order of importance.",
          styleContext:
            "Direct communicators design slides to deliver a verdict, not to build an argument. The data speaks first; the story follows only if asked.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good instinct, but check whether your slide still leads with context rather than the key number. If the audience has to read more than one line before seeing the result, it needs restructuring.",
          observation:
            "If your slide starts with 'In Q3, we focused on...' before reaching the number, the structure is still narrative rather than direct.",
          coachingTip:
            "Try writing the number first, then ask yourself whether any of the remaining text is essential. If not, cut it.",
          styleContext:
            "Direct communicators scan slides from top left. If the most important piece of information is not there, they lose patience.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your slide still reads as a paragraph of context with the data buried inside it. Sam specifically asked for the headline number to come first.",
          observation:
            "If your slide has more than three lines of text, it is too dense for a direct communicator's board presentation.",
          coachingTip:
            "Strip the slide down to: one number, one sentence of context, one pointer to further detail. That is all Sam wants.",
          styleContext:
            "Direct communicators measure slide quality by how fast the audience grasps the key message. More text means slower comprehension.",
        },
      },
    },
  },

  // Scenario 159 - Alex Tran, conflict, advanced
  {
    id: "scenario-159",
    title: "The Credit-Stealing Dispute",
    context:
      "A major project has just been praised by the CEO. Alex led the technical build, but a colleague from another department presented the results and took most of the credit in the all-hands meeting. Alex has pulled you aside to address it.",
    chooseContext:
      "Alex wants to confront the colleague directly and is asking you whether to raise it in the next leadership meeting or handle it one-to-one. He expects a clear recommendation.",
    rewriteContext:
      "Alex has asked you to help him draft a message to the colleague requesting a conversation about the credit attribution. He wants it firm but professional.",
    characterId: "alex-tran",
    dialogue:
      "I built that system from scratch. I led the team, solved the architecture problems, and delivered two weeks early. And then she walks into the all-hands and presents it as her initiative. I am not letting that stand.",
    chooseDialogue:
      "Do I raise this in the leadership meeting so it is on the record, or do I go to her directly first? I want your honest recommendation, not diplomacy.",
    rewriteDialogue:
      "Help me write something to her. Professional but clear. I want a meeting to discuss how this project is being represented. No passive-aggressive hints, just a straight request.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "conflict",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Alex is furious that a colleague presented his project work as her own initiative and is determined to address it head-on. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex is focused on facts (who did the work), outcomes (credit attribution), and action (confronting the colleague). His anger is channelled into a plan, not an emotional outburst.",
          observation:
            "Notice that Alex is not looking for sympathy or reassurance. He is looking for a strategy to correct the record. The emotion is secondary to the objective.",
          coachingTip:
            "When someone is angry but immediately moves to planning a response rather than venting, they are likely a direct communicator. The focus is on fixing the problem, not processing the feeling.",
          styleContext:
            "Direct communicators handle conflict by confronting it head-on. They see avoidance as weakness and indirectness as dishonesty.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Alex is clearly emotional, which may seem expressive. But notice that his anger is structured around a specific grievance and a desired outcome, not a general expression of frustration.",
          observation:
            "An expressive communicator might share how betrayed they feel and seek validation from colleagues. Alex is already past the emotional response and into action planning.",
          coachingTip:
            "The distinction is in what follows the anger. If the person moves to 'here is what I am going to do about it', that is direct. If they stay in 'can you believe this happened to me', that is more expressive.",
          styleContext:
            "Direct communicators experience emotions but process them quickly and convert them into action. The feeling is the fuel; the plan is the output.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Alex is not gathering data to build a case (analytical) or seeking advice on how to handle the relationship (supportive). He has already decided to act and is choosing the method.",
          observation:
            "There is no hesitation, no request for consensus, and no desire to understand the colleague's perspective first. Alex wants to resolve this on his terms.",
          coachingTip:
            "Ask yourself: is this person trying to understand the situation, or to change it? Alex is firmly in the 'change it' camp.",
          styleContext:
            "Direct communicators in conflict are characterised by certainty about what happened, clarity about what they want, and urgency about making it right.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex wants your honest recommendation: raise the credit issue in a leadership meeting or address it one-to-one with the colleague first?",
      options: [
        {
          id: "s159-opt-a",
          text: "Go to her directly first. Tell her what you observed, what you want corrected, and give her one chance to fix it. If she does not, then you take it to leadership with a clear record that you tried to resolve it privately.",
          score: 10,
          result: "strong",
          explanation:
            "This gives Alex a structured escalation path that respects his need for directness while being strategically smart. It shows backbone without burning bridges unnecessarily.",
        },
        {
          id: "s159-opt-b",
          text: "Maybe mention it casually to your manager first and see if they noticed the same thing. That way you have some backup before you approach her or raise it formally.",
          score: 5,
          result: "partial",
          explanation:
            "This is cautious and indirect, which does not match Alex's style. He wants a clear plan, not a tentative sounding-out exercise. It is sensible but will feel too slow for him.",
        },
        {
          id: "s159-opt-c",
          text: "Honestly, I would let it go. People who were in the project know who did the work. The truth will come out over time, and making a big deal of it could make you look petty.",
          score: 0,
          result: "weak",
          explanation:
            "Telling a direct communicator to let a perceived injustice slide will be received as cowardice. Alex has already said he is not letting it stand; advising him to do so will damage your credibility with him.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex wants you to help him draft a message to the colleague requesting a meeting about how the project was represented. Write it in a direct but professional tone.",
      targetTraits: ["specific", "professional", "firm", "requests-meeting", "no-passive-aggression"],
      exampleStrongResponse:
        "Hi Laura,\n\nI want to discuss how the warehouse automation project was presented at the all-hands meeting on Tuesday. I led the technical build and delivery, and I would like to make sure that is accurately reflected going forward.\n\nCan we meet this week to align on how we represent the project to leadership? I am available Wednesday or Thursday afternoon.\n\nThanks,\nAlex",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Well done. Your message is direct without being aggressive. It states the issue clearly, makes a specific request, and offers concrete times to meet. Alex would be happy to send this.",
          observation:
            "You have avoided both passive-aggression and accusation while still being unmistakably clear about the problem. That is a difficult balance and you have struck it well.",
          coachingTip:
            "When helping a direct communicator draft a conflict message, focus on stating facts rather than attributing motives. 'I led the build' is stronger than 'you took credit'.",
          styleContext:
            "Direct communicators want messages that are impossible to misinterpret. Ambiguity in conflict communication creates more conflict, which is the opposite of what they want.",
        },
        partial: {
          result: "partial",
          explanation:
            "The intent is right, but check whether your message is too vague about the actual issue or too soft in its request. Alex wants the colleague to understand exactly what the meeting is about before she arrives.",
          observation:
            "If your message says 'I would like to catch up about the project' without specifying the concern, it lacks the directness Alex asked for.",
          coachingTip:
            "Be specific about the issue without being confrontational. Name the meeting, name the concern, and name the desired outcome.",
          styleContext:
            "Direct communicators set the agenda before the meeting. They do not want to surprise someone in person; they want the other party to arrive prepared.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too aggressive (which will put the colleague on the defensive) or too vague (which will not achieve the clarity Alex needs). It may also include passive-aggressive hints, which Alex explicitly said he wanted to avoid.",
          observation:
            "If your message includes phrases like 'I am sure it was not intentional' or 'I just wanted to flag', it undermines the directness Alex is looking for.",
          coachingTip:
            "Remove any qualifiers that soften the message to the point of ambiguity. Also remove any sarcasm or implication. State the facts and make the request.",
          styleContext:
            "Direct communicators see passive-aggression as worse than direct confrontation. They would rather be blunt and honest than hint and hope.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (160-162)
  // ============================================

  // Scenario 160 - Priya Sharma, feedback, foundation
  {
    id: "scenario-160",
    title: "The 360-Degree Review Discussion",
    context:
      "You are in a 360-degree feedback session with Priya, who has just received her review results. She is processing the feedback out loud and sharing her emotional reactions with you as her manager.",
    chooseContext:
      "Priya has received mixed feedback: strong on creativity and enthusiasm, but some peers noted she can dominate group discussions. She is reacting to this and wants your perspective.",
    rewriteContext:
      "Priya has asked you to help her write a personal development goal based on the 360 feedback, but she wants it to feel motivating rather than punitive.",
    characterId: "priya-sharma",
    dialogue:
      "I mean, some of this is really lovely to read. People appreciate my energy and my ideas, which is great. But then someone says I dominate meetings? That stings a bit, if I am honest. I just get excited. I do not mean to shut anyone out.",
    chooseDialogue:
      "I know I talk a lot in meetings. I just have so many ideas and I worry that if I do not share them in the moment, they will disappear. How do I dial it back without losing what makes me, me?",
    rewriteDialogue:
      "Can we write this goal in a way that does not make me feel like I am being told to sit down and be quiet? I want to grow, but I want it to feel like an opportunity, not a punishment.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "feedback",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya is processing her 360-degree feedback out loud, reacting emotionally to both the positive and negative comments. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Priya is processing feedback through emotion and self-expression. She shares how the comments make her feel, connects the feedback to her identity, and thinks out loud.",
          observation:
            "Notice that Priya immediately personalises the feedback: 'that stings a bit' and 'I just get excited'. She is not analysing the data; she is experiencing it.",
          coachingTip:
            "Expressive communicators process feedback verbally and emotionally. They need space to react before they can move to action planning.",
          styleContext:
            "Expressive communicators see feedback as a reflection of who they are, not just what they do. That is why negative feedback can feel deeply personal.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Priya is empathetic and open, which can seem supportive. But supportive communicators typically focus on how the feedback affects others, not on their own emotional reaction to it.",
          observation:
            "A supportive communicator might say 'I hope I have not made anyone feel unheard'. Priya says 'that stings', which is self-referencing rather than other-referencing.",
          coachingTip:
            "The key distinction is direction of emotional focus. Expressive communicators process their own feelings first. Supportive communicators focus on the feelings of others first.",
          styleContext:
            "Expressive communicators are open about their emotions because they value authenticity. Supportive communicators manage their emotions to maintain harmony.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Priya is not asking for the data behind the feedback (analytical) or demanding a plan to fix it (direct). She is sitting with the emotional weight of the comments and sharing her reactions.",
          observation:
            "There is no request for metrics, no challenge to the process, and no immediate pivot to solutions. Priya is in the feeling phase.",
          coachingTip:
            "If someone's first response to feedback is emotional rather than analytical or action-oriented, they are most likely expressive or supportive. Priya's self-focus points to expressive.",
          styleContext:
            "Expressive communicators need to process emotions before engaging with solutions. Rushing them past the emotional stage creates resistance.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya worries that dialling back her contributions will mean losing what makes her effective. How do you respond in a way that works with her expressive style?",
      options: [
        {
          id: "s160-opt-a",
          text: "Your energy is one of your biggest strengths, and nobody is asking you to lose that. Think of it as making space for other people to match your enthusiasm. You could try sharing your top two ideas and then actively inviting others to build on them.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Priya's identity, reframes the development area as an enhancement rather than a reduction, and gives her a concrete technique that feels collaborative rather than restrictive.",
        },
        {
          id: "s160-opt-b",
          text: "The feedback is clear: you need to talk less in meetings. Try setting a personal limit of three contributions per meeting and see if that changes the dynamic.",
          score: 0,
          result: "weak",
          explanation:
            "This is blunt and prescriptive, which will feel like the punishment Priya is worried about. It does not acknowledge her feelings or validate her strengths.",
        },
        {
          id: "s160-opt-c",
          text: "It is natural to feel a bit stung by that kind of comment. Why not take a few days to sit with the feedback and then we can talk about what feels right as a next step?",
          score: 5,
          result: "partial",
          explanation:
            "Empathetic and gentle, but Priya is already processing and looking for a forward path. Asking her to pause may feel dismissive of her readiness to act.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya wants a personal development goal that feels motivating, not punitive. Write one based on the 360 feedback about dominating discussions, using an expressive-friendly tone.",
      targetTraits: ["positive-framing", "identity-affirming", "specific-action", "enthusiastic"],
      exampleStrongResponse:
        "Goal: Amplify the voices around me by channelling my creative energy into facilitation. In team meetings, I will share my strongest idea first, then actively invite at least two colleagues to contribute before I add more. This way my enthusiasm becomes a catalyst for the whole group, not just my own ideas.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Brilliant. Your goal reframes the development area as a new skill to learn rather than a behaviour to suppress. It keeps Priya's identity intact while introducing a concrete change.",
          observation:
            "You have used language that feels aspirational and empowering, which is exactly what an expressive communicator needs to stay motivated.",
          coachingTip:
            "For expressive communicators, development goals work best when they are framed as expanding capabilities rather than fixing weaknesses.",
          styleContext:
            "Expressive communicators are motivated by possibility and growth. If a goal feels restrictive, they will resist it even if they intellectually agree.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether your goal feels more like a correction than an opportunity. If it reads as 'talk less', it needs reframing as 'listen more to amplify others'.",
          observation:
            "If your goal uses words like 'reduce', 'limit', or 'stop', it may trigger the punitive feeling Priya wants to avoid.",
          coachingTip:
            "Replace restrictive language with expansive language. Instead of 'talk less', try 'create space for others to shine'.",
          styleContext:
            "Expressive communicators respond better to 'add this' than 'stop that'. Frame growth as addition, not subtraction.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your goal reads as a mandate to change rather than an invitation to grow. Priya specifically asked for something that does not feel like punishment, and this misses that request.",
          observation:
            "If your goal is purely behavioural ('speak no more than twice per meeting'), it strips out the emotional motivation Priya needs.",
          coachingTip:
            "Start with what Priya is great at, then show how the development area connects to making that strength even more effective.",
          styleContext:
            "Expressive communicators need to see themselves in their goals. If the goal could apply to anyone, it will not resonate.",
        },
      },
    },
  },

  // Scenario 161 - Marcus Webb, conflict, intermediate
  {
    id: "scenario-161",
    title: "The Remote Work Policy Clash",
    context:
      "A new company policy requires three days in the office per week. Marcus, who thrives on flexible working, is vocal about his disagreement and has brought it up passionately in a team meeting.",
    chooseContext:
      "Marcus is campaigning for the policy to be reversed and wants you to support him in raising it with senior leadership. He is drawing on team morale, creativity, and trust as his arguments.",
    rewriteContext:
      "Marcus has asked you to help him draft an email to the leadership team making the case for maintaining flexible working. He wants it to be persuasive and heartfelt.",
    characterId: "marcus-webb",
    dialogue:
      "This policy is a massive step backwards. We have proved over the last two years that we can deliver brilliant work from anywhere. Forcing people back into the office three days a week says 'we do not trust you'. It is going to crush morale and drive away our best people.",
    chooseDialogue:
      "I need people who care about this to speak up. If we just accept it quietly, nothing changes. Will you back me in raising this with the leadership team? I think we can turn this around if we make enough noise.",
    rewriteDialogue:
      "Help me write something that shows leadership what they are risking. Not just the logistics, but the human cost. People feel let down, and I want that message to land.",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "conflict",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Marcus is passionately arguing against a new office attendance policy in a team meeting, framing it as a trust issue that will damage morale and drive talent away. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus leads with passion and big-picture impact. He frames the policy as a cultural and trust issue, uses emotive language ('massive step backwards', 'crush morale'), and rallies others to his cause.",
          observation:
            "Notice that Marcus is not presenting data on productivity or cost savings. He is making an emotional and values-based argument, which is characteristic of expressive communicators.",
          coachingTip:
            "Expressive communicators in conflict tend to frame issues in terms of values and impact on people, using vivid language to build momentum for change.",
          styleContext:
            "Expressive communicators see policy changes through a cultural lens. They ask 'what does this say about who we are?' rather than 'what does this cost?'.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus does care about people, which can seem supportive. But his approach is public, passionate, and campaign-oriented rather than quietly empathetic.",
          observation:
            "A supportive communicator would raise concerns privately and focus on individual wellbeing. Marcus is broadcasting his views and recruiting allies.",
          coachingTip:
            "The distinction is in the energy and audience. Supportive communicators nurture individuals quietly. Expressive communicators rally groups loudly.",
          styleContext:
            "Expressive communicators handle conflict by making it visible and building coalitions. Supportive communicators handle it by having private conversations.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Marcus is not citing productivity statistics (analytical) or demanding a reversal with a deadline (direct). He is building an emotional case designed to inspire others to join his cause.",
          observation:
            "There are no metrics, no timelines, and no structured proposal. This is a passionate appeal to shared values.",
          coachingTip:
            "When someone frames a workplace issue as a moral or cultural question rather than a practical one, they are likely communicating in an expressive style.",
          styleContext:
            "Expressive communicators believe that change happens through shared conviction, not through data alone. They lead with hearts, not spreadsheets.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus wants you to join him in raising the remote work issue with leadership. How do you respond in a way that works with his expressive style?",
      options: [
        {
          id: "s161-opt-a",
          text: "I share your concern, and I think the message is stronger if we combine the human story with some hard evidence. Let me pull together the productivity and retention data, and you bring the team perspective. Together, that is a compelling case.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Marcus's passion, joins his cause, and adds strategic value by pairing his emotional argument with evidence. It respects his style while strengthening the overall case.",
        },
        {
          id: "s161-opt-b",
          text: "I understand how you feel, but I think raising it publicly might backfire. Maybe we should accept the policy for now and see how it goes before escalating.",
          score: 0,
          result: "weak",
          explanation:
            "This asks Marcus to suppress his views and wait, which is the opposite of how an expressive communicator operates. He will see this as giving up.",
        },
        {
          id: "s161-opt-c",
          text: "I am happy to support you, but I think we need to be careful about how we frame it. Let us make sure we have a clear proposal, not just a complaint, before we take it upstairs.",
          score: 5,
          result: "partial",
          explanation:
            "Supportive in intent but slightly patronising in tone. Marcus may hear 'your passion is not enough' rather than 'let us make this even stronger'.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus wants an email to leadership that conveys the human cost of the new office policy. Write it in an expressive style that is persuasive and heartfelt.",
      targetTraits: ["emotive-language", "values-based", "storytelling", "call-to-action"],
      exampleStrongResponse:
        "Subject: What We Risk Losing With the New Attendance Policy\n\nOver the past two years, this team has delivered some of its best work with the freedom to choose where and how we work. Flexibility is not a perk; it is part of our culture and a reason many of us chose to be here.\n\nThe new three-day policy sends a message that contradicts everything we have built: that output matters less than presence. We have already heard from colleagues who are questioning their future here.\n\nWe would welcome the chance to discuss alternatives that protect both collaboration and the trust we have earned. Could we schedule 30 minutes to explore this together?",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your email leads with values, tells a human story, and ends with a constructive invitation. It is passionate without being confrontational, which is exactly what Marcus wants.",
          observation:
            "You have captured the emotional weight of the issue while still being respectful and solution-oriented. This is persuasive writing at its best.",
          coachingTip:
            "For expressive communicators, the best persuasive writing connects a specific policy to broader values and personal stories. Make the reader feel the impact.",
          styleContext:
            "Expressive communicators believe that people make decisions based on how they feel, not just what they know. Emotional resonance is a deliberate strategy.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good start, but check whether your email has enough emotional weight. If it reads more like a policy critique than a heartfelt appeal, it needs more of Marcus's voice.",
          observation:
            "If your email focuses on logistics (commute times, desk availability) rather than values (trust, culture, belonging), it is missing the expressive angle.",
          coachingTip:
            "Add a human element: how do people feel about this change? What stories illustrate the impact? Expressive writing needs a heartbeat.",
          styleContext:
            "Expressive communicators do not separate the personal from the professional. To them, a policy that affects how people feel is inherently a personal matter.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too data-heavy, too confrontational, or too detached from the human impact Marcus wants to convey. It does not sound like something he would send.",
          observation:
            "If your email reads like a formal grievance or a spreadsheet of arguments, it has lost the emotional core that makes expressive communication effective.",
          coachingTip:
            "Read your email aloud. If it sounds like a report, rewrite it. If it sounds like something a passionate colleague would say in person, you are on the right track.",
          styleContext:
            "Expressive communicators want their written communication to carry the same warmth and conviction as their spoken words.",
        },
      },
    },
  },

  // Scenario 162 - Nina Okafor, meeting, advanced
  {
    id: "scenario-162",
    title: "The Quarterly Business Review Reinvention",
    context:
      "The team's quarterly business review has become a dry, slide-heavy ritual that nobody looks forward to. Nina has been asked to redesign the format and is presenting her vision to the leadership team.",
    chooseContext:
      "Nina has proposed replacing the traditional QBR with an interactive workshop format featuring live demos, team storytelling, and audience Q&A. A senior leader has questioned whether this is appropriate for a governance meeting.",
    rewriteContext:
      "Nina has asked you to help her write the introduction for the new QBR format, setting the tone for the session and getting buy-in from attendees who are used to the old approach.",
    characterId: "nina-okafor",
    dialogue:
      "The current QBR is forty slides of numbers that nobody remembers five minutes after the meeting ends. What if we flipped it? Instead of presenting at people, we involve them. Live demos, team stories about what we learned this quarter, and real-time Q&A. Make it something people actually want to attend.",
    chooseDialogue:
      "I hear the concern about governance, but governance does not have to mean boring. We can cover every metric and still make it engaging. The question is whether we want people informed or inspired, because right now we are achieving neither.",
    rewriteDialogue:
      "Write an opening that gets people excited about the new format. I want them to walk in curious, not dreading another hour of slides. Set the tone from the first sentence.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "meeting",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Nina is proposing to replace the traditional slide-heavy QBR with an interactive format featuring storytelling, live demos, and Q&A. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina is reimagining a routine meeting through the lens of engagement, energy, and experience. She focuses on how people feel during the QBR and wants to make it memorable and inspiring.",
          observation:
            "Notice that Nina frames the problem as emotional ('nobody remembers', 'something people actually want to attend') rather than structural or analytical.",
          coachingTip:
            "Expressive communicators redesign processes by asking 'how does this feel?' rather than 'how does this perform?'. They prioritise engagement and experience.",
          styleContext:
            "Expressive communicators believe that the format of communication matters as much as the content. A great message delivered badly is still a failure.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Nina is decisive and challenging, which may seem direct. But her focus is on transforming the experience, not on efficiency or speed. She wants inspiration, not just information.",
          observation:
            "A direct communicator would say 'cut the slides to ten and finish in thirty minutes'. Nina wants to change the entire format to create energy and connection.",
          coachingTip:
            "The difference is in the goal: direct communicators optimise for speed and clarity. Expressive communicators optimise for engagement and impact.",
          styleContext:
            "Expressive communicators see meetings as opportunities to build culture and connection, not just to transfer information.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Nina is not proposing more rigorous analysis of the data (analytical) or checking whether people feel comfortable with the change (supportive). She is pitching a creative reinvention.",
          observation:
            "There is no mention of methodology, no concern for individual comfort, and no request for consensus. Nina is selling a vision.",
          coachingTip:
            "When someone proposes creative, experience-focused changes and uses vivid, persuasive language, they are most likely an expressive communicator.",
          styleContext:
            "Expressive communicators challenge the status quo by offering a more exciting alternative, not by critiquing the current approach with data.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "A senior leader questions whether Nina's interactive QBR format is appropriate for a governance meeting. How do you respond in a way that supports Nina's expressive approach?",
      options: [
        {
          id: "s162-opt-a",
          text: "Nina's point is that governance and engagement are not mutually exclusive. We can cover every required metric while making the format more interactive. What if we pilot it this quarter and measure whether retention of key figures actually improves?",
          score: 10,
          result: "strong",
          explanation:
            "This bridges Nina's creative vision with the leader's governance concerns by proposing a pilot. It validates both perspectives and offers a practical test.",
        },
        {
          id: "s162-opt-b",
          text: "I think the current format works fine for governance purposes. Maybe we could add an informal session alongside the QBR for the more creative elements Nina is suggesting.",
          score: 0,
          result: "weak",
          explanation:
            "This sidelines Nina's vision by keeping the old format and adding her ideas as an optional extra. An expressive communicator will feel their contribution has been diluted.",
        },
        {
          id: "s162-opt-c",
          text: "It is a bold idea and worth considering. Perhaps we should survey the team first to see if there is appetite for a format change before we commit to anything.",
          score: 5,
          result: "partial",
          explanation:
            "Well-intentioned but slows the momentum. Nina wants to act on her vision, not wait for survey results. The hesitation may feel like a lack of confidence in the idea.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina wants an opening for the new QBR format that gets people excited and curious. Write an introduction that sets an engaging, expressive tone.",
      targetTraits: ["energising", "vision-setting", "conversational", "challenges-status-quo"],
      exampleStrongResponse:
        "Welcome to a QBR that is actually worth your time. Today, we are ditching the forty-slide marathon. Instead, you will hear directly from the teams who delivered this quarter's results, see live demos of what we have built, and have the chance to ask anything. Every metric you need is here, but we are going to bring it to life rather than read it off a slide. Let us get started.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Brilliant. Your opening creates energy and anticipation while reassuring attendees that the substance is still there. It sounds like Nina speaking, which is exactly the tone she wants.",
          observation:
            "You have managed to challenge the old format without insulting anyone who created it, and you have set clear expectations for what the session will deliver.",
          coachingTip:
            "Expressive communicators open meetings by creating a shift in energy. The first thirty seconds should make people sit up and pay attention.",
          styleContext:
            "Expressive communicators use openings to set emotional tone, not just agenda. They want the audience to feel something different from the start.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good direction, but check whether your opening has enough energy and personality. If it reads like a standard meeting introduction with minor tweaks, it needs more of Nina's spark.",
          observation:
            "If your opening starts with 'Thank you for joining today's QBR', it is already too conventional for what Nina is trying to achieve.",
          coachingTip:
            "Start with a statement that breaks the pattern. Something unexpected that signals 'this is not going to be the meeting you are used to'.",
          styleContext:
            "Expressive communicators believe that the first words of a meeting determine whether people engage or switch off. Make those words count.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your opening is too formal, too safe, or too similar to the old format. Nina wants a clear break from the past, and your introduction does not deliver that shift.",
          observation:
            "If your opening could work as the introduction to any standard meeting, it has not captured the creative reinvention Nina is proposing.",
          coachingTip:
            "Imagine Nina is standing at the front of the room, full of energy. Write what she would actually say, not what a generic meeting facilitator would read from a script.",
          styleContext:
            "Expressive communicators want their personality and passion to come through in every communication, especially when they are trying to change something.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (163-165)
  // ============================================

  // Scenario 163 - Tom Brennan, conflict, foundation
  {
    id: "scenario-163",
    title: "The Shared Resources Clash",
    context:
      "Two departments are clashing over a shared design resource. Tom, who manages the designer, is caught in the middle and is trying to find a resolution that keeps both sides feeling heard.",
    chooseContext:
      "Both department heads have come to Tom demanding priority access to the designer this sprint. Tom is looking for a fair solution and wants your advice on how to handle it without damaging either relationship.",
    rewriteContext:
      "Tom has asked you to help him write a message to both department heads proposing a shared scheduling arrangement for the designer's time.",
    characterId: "tom-brennan",
    dialogue:
      "I completely understand why both teams feel strongly about this. They are both under pressure and the work is genuinely important on both sides. I do not want either team to feel like they have been deprioritised. Can we find a way to split the time that feels fair to everyone?",
    chooseDialogue:
      "I have spoken to both department heads and they both feel their work should come first. I do not want to just impose a decision. How do we get them to a place where they both feel respected?",
    rewriteDialogue:
      "I need to send something to both teams that acknowledges their needs and proposes a fair split. I do not want it to feel like a corporate memo. It should feel like it comes from someone who genuinely cares about both sides.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "conflict",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Tom is caught between two departments arguing over a shared resource and is focused on finding a solution that keeps both sides feeling heard and respected. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Tom's priority is the relationships, not just the resource allocation. He wants everyone to feel valued and is seeking a fair compromise rather than imposing a decision.",
          observation:
            "Notice Tom's language: 'feels fair', 'both feel respected', 'I do not want either team to feel deprioritised'. Every concern is framed through the lens of how people will feel.",
          coachingTip:
            "Supportive communicators in conflict focus on preserving relationships and ensuring all parties feel heard. They prioritise fairness and emotional safety.",
          styleContext:
            "Supportive communicators believe that the best solutions are ones that everyone can live with. They invest time in consensus because they value harmony.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Tom is empathetic and warm, which can seem expressive. But he is not rallying anyone or expressing his own feelings passionately; he is quietly trying to find balance.",
          observation:
            "An expressive communicator might say 'this conflict is ridiculous and we need to fix it right now'. Tom says 'can we find a way that feels fair?' which is calmer and more mediating.",
          coachingTip:
            "The difference is in energy and focus. Expressive communicators express their own feelings. Supportive communicators tune into the feelings of others.",
          styleContext:
            "Supportive communicators are natural mediators. They do not take sides; they try to understand all sides.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Tom is not analysing utilisation rates (analytical) or making a unilateral decision (direct). He is seeking a solution that works emotionally for all parties.",
          observation:
            "There is no data, no authority-based decision-making, and no urgency to resolve this immediately. Tom is patient and relationship-focused.",
          coachingTip:
            "When someone in a conflict situation focuses first on how people feel rather than on who is right, they are most likely a supportive communicator.",
          styleContext:
            "Supportive communicators believe that people who feel heard are more willing to compromise. They invest in emotional groundwork before proposing solutions.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Both department heads want priority access to the designer. Tom wants your advice on reaching a fair resolution. How do you respond?",
      options: [
        {
          id: "s163-opt-a",
          text: "What if you brought both department heads together for a short conversation? Let each explain their priorities, and then jointly agree on a schedule for this sprint. If they feel involved in the decision, they are much more likely to accept it.",
          score: 10,
          result: "strong",
          explanation:
            "This respects Tom's desire for fairness and relationship preservation while giving him a practical facilitation approach. It aligns with his belief that inclusive decisions are more sustainable.",
        },
        {
          id: "s163-opt-b",
          text: "Just allocate 50/50 and tell both teams that is the arrangement. If they do not like it, they can escalate, but at least the designer knows what they are doing.",
          score: 0,
          result: "weak",
          explanation:
            "This imposes a decision without consultation, which is exactly what Tom wants to avoid. A supportive communicator needs the process to feel collaborative, not dictated.",
        },
        {
          id: "s163-opt-c",
          text: "Could you ask the designer which project they feel more aligned with? Their preference might help guide the decision and make the arrangement feel more natural.",
          score: 5,
          result: "partial",
          explanation:
            "Thoughtful and people-centred, but it puts the designer in an awkward position of choosing between two managers. Tom would worry about the stress this creates for them.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom needs a message to both department heads proposing a shared scheduling arrangement. Write it in a supportive style that feels warm and fair.",
      targetTraits: ["empathetic", "inclusive", "fair", "warm-tone"],
      exampleStrongResponse:
        "Hi both,\n\nI know how important your upcoming projects are, and I appreciate the pressure you are both working under. I have been thinking about how we can make sure neither team feels short-changed on design support.\n\nHere is what I would like to propose: we split the designer's time this sprint, with mornings dedicated to Project A and afternoons to Project B. I have checked with the designer and they are comfortable with this arrangement.\n\nIf either of you has concerns or would like to suggest a different split, I am happy to set up a quick call so we can work it out together. The goal is to find something that works for everyone.\n\nThanks for your patience with this.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Well done. Your message acknowledges both teams' needs, proposes a fair solution, and invites further conversation. It feels personal and caring rather than bureaucratic.",
          observation:
            "You have included the designer's perspective, which shows the inclusive thinking that defines supportive communication.",
          coachingTip:
            "Supportive communicators want their messages to feel like they come from a person, not a process. Include warmth and an open door for further discussion.",
          styleContext:
            "Supportive communicators write messages that prioritise the reader's emotional experience. They want the recipient to feel valued, not managed.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your message feels warm enough. If it reads like a scheduling notification rather than a thoughtful proposal, it needs more of Tom's caring tone.",
          observation:
            "If your message jumps straight to the schedule without acknowledging the pressure both teams are under, it misses the supportive element.",
          coachingTip:
            "Start with empathy before logistics. Acknowledge the difficulty of the situation before proposing the solution.",
          styleContext:
            "Supportive communicators believe that how you deliver a message matters as much as what you deliver. Lead with understanding.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is either too directive (imposing a decision) or too impersonal (lacking warmth). Tom specifically wanted it to feel like it comes from someone who cares.",
          observation:
            "If your message uses phrases like 'the decision has been made' or 'please adhere to the following schedule', it does not reflect Tom's style.",
          coachingTip:
            "Rewrite it as if you are speaking to two colleagues you respect, not issuing an instruction. Use 'we' and 'together' rather than 'you must'.",
          styleContext:
            "Supportive communicators never want to sound authoritarian. They prefer to guide and invite rather than instruct and mandate.",
        },
      },
    },
  },

  // Scenario 164 - Leah Morgan, meeting, intermediate
  {
    id: "scenario-164",
    title: "The Risk Assessment Workshop",
    context:
      "You are in a risk assessment workshop for a major product launch. Leah is facilitating the session and wants to make sure every team member, especially the quieter ones, has a chance to raise concerns.",
    chooseContext:
      "A senior engineer has dominated the risk discussion for the last fifteen minutes. Two junior team members have not spoken at all. Leah pauses the conversation and turns to you for support.",
    rewriteContext:
      "Leah has asked you to write the workshop follow-up email summarising the identified risks, assigned owners, and next steps, but in a way that thanks contributors and encourages ongoing input.",
    characterId: "leah-morgan",
    dialogue:
      "I want to make sure we hear from everyone in this room, not just the loudest voices. Some of the most important risks might come from people who are hesitant to speak up. Can we go round the table so everyone gets a turn? No pressure, but I want everyone to know their input matters.",
    chooseDialogue:
      "I have noticed a couple of people have not had a chance to share yet. I do not want to put anyone on the spot, but I also do not want us to leave this room having missed something important because someone did not feel comfortable raising it. Any ideas?",
    rewriteDialogue:
      "When you write the follow-up, make sure it thanks everyone who contributed and makes it clear that people can still add risks after the session. I do not want anyone to feel the window has closed.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "meeting",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Leah is facilitating a risk assessment workshop and is focused on making sure quieter team members feel safe to contribute. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah's priority is psychological safety. She is focused on creating conditions where everyone feels comfortable contributing, especially those who might be hesitant.",
          observation:
            "Notice Leah's careful language: 'no pressure' and 'their input matters'. She is balancing the need for participation with respect for individual comfort.",
          coachingTip:
            "Supportive communicators facilitate by creating safety, not by demanding participation. They remove barriers rather than forcing contributions.",
          styleContext:
            "Supportive communicators believe that the best ideas come from environments where people feel safe to speak honestly without judgement.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah is inclusive and energetic about participation, which may seem expressive. But her focus is on comfort and safety rather than excitement and enthusiasm.",
          observation:
            "An expressive communicator would say 'I love hearing different perspectives, let us get everyone involved'. Leah says 'I want everyone to know their input matters', which is gentler and more protective.",
          coachingTip:
            "The key difference is motivation: expressive communicators seek diverse input because it is energising. Supportive communicators seek it because they worry about exclusion.",
          styleContext:
            "Supportive communicators are driven by care for individuals. Expressive communicators are driven by passion for the collective experience.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah is not structuring the risk assessment with a formal methodology (analytical) or pushing for a quick completion (direct). She is investing time in making sure people feel included.",
          observation:
            "There is no urgency, no framework, and no impatience with the pace. Leah is willing to slow down to ensure everyone is heard.",
          coachingTip:
            "When a facilitator prioritises emotional safety over meeting efficiency, they are likely a supportive communicator. The pace of the meeting adapts to the comfort of the participants.",
          styleContext:
            "Supportive communicators measure a meeting's success by whether everyone felt heard, not just by whether the agenda was completed.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Two junior team members have not spoken, and Leah does not want to put them on the spot. How do you help?",
      options: [
        {
          id: "s164-opt-a",
          text: "What if we give everyone two minutes to write down their top risk on a sticky note, and then we collect them all at once? That way people can contribute without having to speak in front of the whole group.",
          score: 10,
          result: "strong",
          explanation:
            "This creates a low-pressure way for quieter participants to contribute, which perfectly aligns with Leah's concern about psychological safety. It respects different comfort levels.",
        },
        {
          id: "s164-opt-b",
          text: "We could just ask them directly. Sometimes people need a gentle prompt, and they might actually appreciate being asked rather than overlooked.",
          score: 5,
          result: "partial",
          explanation:
            "Well-intentioned but risky. Leah specifically said she does not want to put anyone on the spot. Calling on people directly might create the pressure she wants to avoid.",
        },
        {
          id: "s164-opt-c",
          text: "If they have not spoken up, they probably do not have concerns to add. We have had a thorough discussion already, so let us move on to prioritisation.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the value of quieter voices and contradicts Leah's core belief that important risks might be missed if not everyone contributes. It will concern her deeply.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah wants a follow-up email that thanks contributors and keeps the door open for additional input. Write it in a supportive style.",
      targetTraits: ["grateful", "inclusive", "encouraging", "open-door"],
      exampleStrongResponse:
        "Hi everyone,\n\nThank you for such a thoughtful session today. The risks you identified are already shaping how we approach the launch, and every contribution made a difference.\n\nHere is a summary of what we captured:\n- Supply chain delay: owned by James, review by 28 March\n- Data migration risk: owned by Priya, mitigation plan by 1 April\n- Customer communication gap: owned by Leah, draft messaging by 25 March\n\nIf anything else comes to mind after the session, please do not hesitate to add it. You can reply to this email or drop me a message directly. There is no deadline on good ideas.\n\nThanks again for making time for this. Your input makes us better prepared.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Lovely. Your email is warm, appreciative, and genuinely inviting of further input. It makes people feel that their contribution was valued and that the door remains open.",
          observation:
            "The phrase 'there is no deadline on good ideas' is exactly the kind of reassurance a supportive communicator would include. It removes time pressure from participation.",
          coachingTip:
            "Supportive communicators close loops gently. Rather than 'the session is over', they say 'the conversation continues'. This builds ongoing trust.",
          styleContext:
            "Supportive communicators use follow-up communications to reinforce belonging and value. The email is not just a summary; it is a thank-you.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your email feels warm enough and genuinely invites further input. If the 'open door' feels like a formality rather than a sincere offer, it needs more warmth.",
          observation:
            "If your email ends with 'please submit any additional risks by Friday', it creates a deadline that contradicts the open-door spirit Leah wants.",
          coachingTip:
            "Replace deadlines with invitations. 'Submit by Friday' becomes 'please share whenever something comes to mind'. The tone matters as much as the content.",
          styleContext:
            "Supportive communicators want follow-up emails to feel like a conversation continuing, not a process concluding.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is either too transactional or too formal. It reads as a task list rather than a warm follow-up that values people's contributions.",
          observation:
            "If your email does not include thanks, encouragement, or an open invitation for further input, it misses the supportive elements Leah specifically requested.",
          coachingTip:
            "Add a sentence of genuine appreciation at the start and a warm invitation at the end. Those two elements transform a transactional email into a supportive one.",
          styleContext:
            "Supportive communicators believe that how you close a meeting matters as much as how you run it. The follow-up email is the last impression.",
        },
      },
    },
  },

  // Scenario 165 - David Chen, feedback, advanced
  {
    id: "scenario-165",
    title: "The Coaching Conversation After a Client Complaint",
    context:
      "A client has complained about a team member's abrupt email communication. David, as the team lead, is having a coaching conversation with the team member. He wants to address the issue without undermining their confidence.",
    chooseContext:
      "The team member has become defensive, saying the client is oversensitive and that the emails were perfectly clear. David needs to redirect the conversation towards growth without escalating the tension.",
    rewriteContext:
      "David has asked you to help him draft talking points for the coaching conversation that acknowledge the team member's strengths while addressing the client's specific concerns.",
    characterId: "david-chen",
    dialogue:
      "I wanted to talk to you about some feedback from the Anderson account. Before I share it, I want you to know that your technical work on this project has been excellent, and the client has said as much. There is one area where I think we can improve the experience for them, and I would like to explore it together.",
    chooseDialogue:
      "I hear you that the emails were factually correct, and I agree they were. The issue is not accuracy; it is tone. The client felt the communication was a bit cold. I do not think you intended that, and I would like to help you find a way to keep your clarity while adding a bit more warmth.",
    rewriteDialogue:
      "I need some talking points that lead with what this person does well, then gently introduce the feedback. I do not want them walking out of this conversation feeling criticised. I want them feeling supported and clear on what to adjust.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "feedback",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "David is coaching a team member about a client complaint, leading with praise and framing the feedback as a collaborative exploration rather than a correction. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David carefully prepares the emotional ground before delivering feedback. He leads with genuine praise, frames the issue as a shared challenge, and prioritises the team member's confidence.",
          observation:
            "Notice David's phrase 'I would like to explore it together'. He is positioning himself as a partner in improvement, not a critic delivering a verdict.",
          coachingTip:
            "Supportive communicators deliver feedback as a collaborative journey. They invest in emotional safety before introducing the area for development.",
          styleContext:
            "Supportive communicators believe that people are more receptive to feedback when they feel valued. The praise is not a trick; it is genuine preparation for an honest conversation.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David is warm and positive, which can seem expressive. But he is not expressing his own feelings about the situation; he is carefully managing the team member's emotional experience.",
          observation:
            "An expressive communicator might say 'I was really disappointed when the client called because your work is brilliant'. David is less about his feelings and more about the team member's feelings.",
          coachingTip:
            "The distinction is focus: expressive communicators share their own emotional reactions. Supportive communicators manage the emotional reactions of others.",
          styleContext:
            "Supportive communicators are emotional architects. They design conversations to create safety, not to express their own perspective.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. David is not presenting a data-driven case (analytical) or giving a blunt instruction to change (direct). He is carefully building a safe space for a sensitive conversation.",
          observation:
            "There is no urgency, no impatience, and no demand for immediate change. David is willing to invest time in making sure the team member feels supported.",
          coachingTip:
            "When someone spends as much time on the emotional context as on the feedback itself, they are most likely a supportive communicator.",
          styleContext:
            "Supportive communicators see feedback conversations as relationship moments, not just performance management tools.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The team member is defensive, saying the client is oversensitive and the emails were clear. How do you help David redirect the conversation?",
      options: [
        {
          id: "s165-opt-a",
          text: "You could say: 'I agree the content was spot on. What I am suggesting is a small adjustment to the tone, not the substance. Think of it like adding a greeting and a closing line to your emails. The facts stay the same; the experience just gets warmer. Would you be open to trying that on the next two emails and seeing how it lands?'",
          score: 10,
          result: "strong",
          explanation:
            "This validates the team member's work, separates content from tone, offers a concrete and small change, and frames it as an experiment rather than a mandate. It is supportive coaching at its best.",
        },
        {
          id: "s165-opt-b",
          text: "You need to be honest with them: the client is unhappy and they need to change their approach. Sometimes direct feedback is the kindest approach.",
          score: 0,
          result: "weak",
          explanation:
            "This abandons the supportive approach entirely. David specifically wants to address the issue without undermining confidence; blunt feedback will do exactly what he is trying to avoid.",
        },
        {
          id: "s165-opt-c",
          text: "Maybe share an example of an email that got positive client feedback and ask them to spot the difference in tone. Sometimes seeing the contrast helps more than being told what to change.",
          score: 5,
          result: "partial",
          explanation:
            "Good instinct to use examples rather than instructions. However, asking the team member to self-diagnose while they are defensive may not land well. A more guided approach would work better.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David needs talking points that lead with strengths and gently introduce the feedback about email tone. Write them in a supportive style.",
      targetTraits: ["strengths-first", "gentle-framing", "collaborative", "specific-suggestion"],
      exampleStrongResponse:
        "Talking points:\n\n1. Open with recognition: 'Your technical delivery on the Anderson project has been outstanding. The client specifically praised your problem-solving on the data integration issue.'\n\n2. Bridge to feedback: 'There is one area where we can make the client experience even better, and it is a quick adjustment.'\n\n3. Present the issue gently: 'Some of the email communication came across as a bit abrupt. I know that was not your intention, and the content was always accurate.'\n\n4. Offer a specific, small change: 'What if we added a brief opening line and a warm sign-off to client emails? Something like starting with their name and ending with an offer to discuss further.'\n\n5. Close with confidence: 'This is a small tweak to something you are already doing well. I have no doubt you will nail it.'",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your talking points follow the supportive feedback structure perfectly: recognise, bridge, present gently, suggest specifically, and close with confidence. David would feel well-prepared with these.",
          observation:
            "You have made the feedback feel like a refinement rather than a correction, which is exactly the emotional framing David wants.",
          coachingTip:
            "For supportive communicators, talking points should read like a conversation plan, not a script. The goal is to guide the emotional journey, not to dictate the words.",
          styleContext:
            "Supportive communicators prepare for difficult conversations by planning the emotional arc, not just the content. How the person feels at each stage matters as much as what they hear.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your talking points spend enough time on strengths before moving to the feedback. If the praise feels like a single sentence before the criticism, it needs more weight.",
          observation:
            "If your talking points move to the issue within the first two lines, the strengths section is too thin to provide the emotional foundation David needs.",
          coachingTip:
            "Spend at least a third of your talking points on genuine recognition. The praise is not a formality; it is the foundation that makes the feedback receivable.",
          styleContext:
            "Supportive communicators believe that the ratio of recognition to critique determines how the feedback is received. More recognition creates more openness.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your talking points either lead with the problem, lack warmth, or do not include a specific and gentle suggestion for change. David would not feel confident using these.",
          observation:
            "If your talking points read as a list of what went wrong rather than a guided conversation, they miss the supportive coaching approach entirely.",
          coachingTip:
            "Rewrite them as if you are coaching a friend: start with what they are great at, share the concern with care, and offer a small, achievable next step.",
          styleContext:
            "Supportive communicators never want a coaching conversation to feel like a performance review. They want it to feel like a supportive chat between trusted colleagues.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (166-168)
  // ============================================

  // Scenario 166 - Rachel Finch, meeting, foundation
  {
    id: "scenario-166",
    title: "The Sprint Planning Deep Dive",
    context:
      "You are in a sprint planning meeting for a software development team. Rachel is reviewing the proposed user stories and questioning the estimation methodology before she will commit to the sprint scope.",
    chooseContext:
      "The product manager wants to add a last-minute user story to the sprint, arguing it is small and can fit easily. Rachel is pushing back, asking for the acceptance criteria and effort estimate before she will agree.",
    rewriteContext:
      "Rachel has asked you to write a sprint planning summary that documents the agreed scope, estimation rationale, and any risks flagged during the session.",
    characterId: "rachel-finch",
    dialogue:
      "Before we commit to this sprint, I want to understand the estimation methodology. Are we using story points or time-based estimates? What is the team's velocity over the last three sprints? And have we factored in the two days we lose to the bank holiday? I do not want to overcommit and then miss the sprint goal.",
    chooseDialogue:
      "I understand it looks small, but 'small' is subjective. What are the acceptance criteria? Has it been refined? What is the definition of done? I am not blocking it; I just need the same rigour we apply to every other story.",
    rewriteDialogue:
      "The summary needs to be precise. Sprint goal, committed stories with their estimates, total capacity, known risks, and any assumptions we are making. I want anyone who reads it to understand exactly what we agreed and why.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "meeting",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel is questioning the sprint estimation methodology, asking about velocity data and capacity adjustments before committing to the scope. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel is focused on data, methodology, and rigour. She wants to understand the reasoning behind the estimates and ensure the sprint is planned on solid evidence rather than optimism.",
          observation:
            "Notice Rachel's specific questions about story points versus time estimates, velocity data, and capacity adjustments. She is building a complete picture before making a commitment.",
          coachingTip:
            "Analytical communicators prepare for commitments by gathering data and verifying assumptions. They see thoroughness as responsible, not obstructive.",
          styleContext:
            "Analytical communicators believe that good planning requires good data. They question methodology not to delay, but to ensure the plan is realistic.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is decisive about wanting answers, which can seem direct. But she is not pushing for speed; she is pushing for accuracy. The goal is thorough planning, not fast decisions.",
          observation:
            "A direct communicator would say 'just tell me what we can deliver and let us commit'. Rachel wants to understand how the estimate was derived before she will commit to it.",
          coachingTip:
            "Direct communicators want fast commitments. Analytical communicators want accurate commitments. The pace of their questioning reveals the difference.",
          styleContext:
            "Analytical communicators and direct communicators both value clarity, but they define it differently. For analytical communicators, clarity means 'well-reasoned'. For direct communicators, it means 'unambiguous'.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Rachel is not concerned about team morale (supportive) or excited about the sprint vision (expressive). She is focused entirely on whether the plan is based on sound data.",
          observation:
            "There is no mention of how the team feels, no creative enthusiasm, and no relationship focus. This is a methodical interrogation of the planning process.",
          coachingTip:
            "When someone asks 'how did you calculate this?' rather than 'how does everyone feel about this?', they are operating in an analytical style.",
          styleContext:
            "Analytical communicators trust processes and data more than intuition or consensus. Their questions are designed to stress-test assumptions.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The product manager wants to add a last-minute story that 'looks small'. Rachel wants acceptance criteria and an estimate first. How do you respond?",
      options: [
        {
          id: "s166-opt-a",
          text: "Rachel is right. Let us take five minutes to write the acceptance criteria now, estimate it together, and then decide whether it fits within our remaining capacity. If it does, it goes in. If not, it goes to the next sprint.",
          score: 10,
          result: "strong",
          explanation:
            "This supports Rachel's need for rigour while keeping the meeting moving. It treats her request as reasonable and applies the same process to the new story as to every other one.",
        },
        {
          id: "s166-opt-b",
          text: "It probably is small, and the product manager knows the scope better than anyone. Let us just add it and adjust if it turns out to be bigger than expected.",
          score: 0,
          result: "weak",
          explanation:
            "This bypasses the estimation process entirely, which will frustrate Rachel deeply. She sees unestimated work as a planning risk, and 'just add it' validates none of her concerns.",
        },
        {
          id: "s166-opt-c",
          text: "We could add it as a stretch goal. That way it is visible but not committed, and Rachel can estimate it properly before we decide whether to pull it into the sprint.",
          score: 5,
          result: "partial",
          explanation:
            "A reasonable compromise, but Rachel may feel the story is being snuck in without proper scrutiny. She would prefer a clear estimate before any commitment, even a stretch one.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel wants a sprint planning summary that documents scope, estimation rationale, and risks. Write it in an analytical style.",
      targetTraits: ["structured", "data-driven", "precise", "assumption-documenting"],
      exampleStrongResponse:
        "Sprint 14 Planning Summary\n\nSprint Goal: Complete user authentication module and begin API integration layer.\n\nCommitted Stories:\n- AUTH-201: User login flow (8 points, refined)\n- AUTH-202: Password reset (5 points, refined)\n- API-101: Endpoint scaffolding (3 points, refined)\n\nTotal committed: 16 points\nTeam velocity (3-sprint average): 18 points\nCapacity adjustment: minus 2 points for bank holiday (Monday 31 March)\nEffective capacity: 16 points\n\nRisks:\n- API-101 depends on third-party documentation, which is currently incomplete. Mitigation: Rachel to contact vendor by Wednesday.\n\nAssumptions:\n- No unplanned support tickets exceeding 4 hours total.\n- Design assets for AUTH-201 delivered by Tuesday.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is structured, precise, and documents the reasoning behind every commitment. Rachel would see this as a reliable sprint record.",
          observation:
            "You have included velocity data, capacity adjustments, and explicit assumptions, which are exactly the elements an analytical communicator considers essential.",
          coachingTip:
            "For analytical communicators, a good summary is one that answers every possible question before it is asked. If someone can challenge the plan, the summary should already contain the defence.",
          styleContext:
            "Analytical communicators use documentation as a tool for accountability and transparency. A well-documented plan prevents misunderstandings later.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether you have documented the estimation rationale and assumptions. A list of stories without velocity context or capacity maths will feel incomplete to Rachel.",
          observation:
            "If your summary lists what was agreed but not why, it is missing the analytical depth Rachel specifically requested.",
          coachingTip:
            "Add a 'how we got here' section: velocity data, capacity adjustments, and key assumptions. That transforms a summary into a planning rationale.",
          styleContext:
            "Analytical communicators want summaries that explain the logic, not just the outcome. The reasoning is as important as the result.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary is either too brief, too vague, or missing the data Rachel considers essential. Without estimation rationale, risks, and assumptions, it is just a task list.",
          observation:
            "If your summary could apply to any sprint without knowing the team's capacity or velocity, it lacks the analytical rigour Rachel expects.",
          coachingTip:
            "Think of the summary as a decision log. Every commitment should be traceable to a data point. Every risk should have an owner.",
          styleContext:
            "Analytical communicators distinguish between a plan and a wish list by the quality of the data behind it. Your summary should demonstrate the former.",
        },
      },
    },
  },

  // Scenario 167 - Owen Grant, feedback, intermediate
  {
    id: "scenario-167",
    title: "The Written Proposal Feedback",
    context:
      "Owen has been asked to review a colleague's business proposal before it goes to the board. He has prepared detailed, structured feedback and is presenting it in a one-to-one meeting.",
    chooseContext:
      "Owen has given thorough feedback covering structure, data quality, and argumentation. The colleague thanks him but says they just wanted a quick sense-check, not a full critique. Owen is surprised.",
    rewriteContext:
      "Owen has asked you to help him write a summary of his feedback so the colleague has a written reference. He wants it to be clear, structured, and evidence-based.",
    characterId: "owen-grant",
    dialogue:
      "I have gone through the proposal section by section. Your executive summary is strong, but it makes three claims that are not supported by the data in the appendix. The financial projections on page seven use last year's exchange rates, which skews the margin forecast by roughly two percent. And the risk section covers operational risks but omits regulatory compliance entirely. Here are my notes.",
    chooseDialogue:
      "I understand you wanted a quick sense-check, but I do not think a surface-level review serves the document well. These are not minor issues. If the board spots the exchange rate error, it undermines the credibility of the entire proposal. I would rather you had too much feedback than too little.",
    rewriteDialogue:
      "I want the feedback summary to be structured by section, with each point linked to a specific page and paragraph. Include the severity of each issue: critical, important, or minor. I want the colleague to be able to work through it systematically.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "feedback",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen has reviewed a colleague's proposal section by section, identifying unsupported claims, outdated data, and missing risk categories. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen's feedback is systematic, evidence-based, and thorough. He has reviewed each section against standards of accuracy and completeness, and his comments are specific and verifiable.",
          observation:
            "Notice that Owen quantifies the impact: 'skews the margin forecast by roughly two percent'. He does not just say something is wrong; he measures how wrong it is.",
          coachingTip:
            "Analytical communicators give feedback with precision and evidence. Every observation is tied to a specific location in the document and a measurable impact.",
          styleContext:
            "Analytical communicators see feedback as quality assurance. Their goal is to make the work as accurate and complete as possible, not to critique the person.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen is blunt about the issues, which can seem direct. But his feedback is structured by section with quantified impacts, which is more methodical than a direct communicator would typically be.",
          observation:
            "A direct communicator would say 'the financials are wrong, fix them'. Owen says 'the exchange rates on page seven are from last year, which creates a two percent margin error'. The specificity is the giveaway.",
          coachingTip:
            "Direct communicators give feedback in broad strokes: 'this works, this does not'. Analytical communicators give feedback in forensic detail: 'this cell references the wrong year'.",
          styleContext:
            "Analytical communicators believe that vague feedback is unhelpful feedback. If you cannot point to the exact problem, you have not done a proper review.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Owen has not considered how the colleague feels about receiving this level of critique (supportive) or framed the issues with enthusiasm for improving the document (expressive).",
          observation:
            "There is no emotional softening, no acknowledgement of effort, and no attempt to make the feedback feel good. It is purely technical and objective.",
          coachingTip:
            "When feedback reads like an audit report rather than a conversation, the communicator is almost certainly analytical. The focus is on the work, not the person.",
          styleContext:
            "Analytical communicators separate the work from the person. They do not mean to be cold; they simply believe that objective feedback is the most useful kind.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen's colleague says they only wanted a quick sense-check, not a full critique. Owen believes the issues are too important to gloss over. How do you respond?",
      options: [
        {
          id: "s167-opt-a",
          text: "Owen has a point. The exchange rate error alone could undermine the proposal's credibility with the board. Perhaps the colleague could address the critical issues Owen flagged and treat the minor ones as optional improvements. That way the depth of review is honoured without overwhelming the author.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Owen's thoroughness, prioritises the most important issues, and gives the colleague a manageable action plan. It bridges both perspectives effectively.",
        },
        {
          id: "s167-opt-b",
          text: "Owen should respect the colleague's request. If they asked for a quick sense-check, delivering a full audit can feel overwhelming and somewhat presumptuous.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses Owen's professional standards. An analytical communicator sees thorough feedback as a duty, not an overreach. Telling him to do less will feel like asking him to compromise on quality.",
        },
        {
          id: "s167-opt-c",
          text: "Maybe Owen could categorise his feedback into 'must fix before the board' and 'nice to have'. That way the colleague gets the quick version they wanted, with the option to go deeper.",
          score: 5,
          result: "partial",
          explanation:
            "Good compromise, though Owen may feel that labelling any of his findings as 'nice to have' understates their importance. The prioritisation idea is sound, but the framing needs care.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen wants a structured feedback summary with each point linked to a specific page and severity level. Write it in an analytical style.",
      targetTraits: ["section-structured", "page-referenced", "severity-coded", "evidence-based"],
      exampleStrongResponse:
        "Proposal Feedback Summary: Project Atlas Board Submission\n\nReviewer: Owen Grant\nDate: 13 March 2026\n\nSection 1: Executive Summary (pp. 1 to 2)\n- CRITICAL: Three claims in the summary are not supported by corresponding data in the appendix. Specifically: market share growth (p.1, para 3), customer retention rate (p.2, para 1), and cost reduction target (p.2, para 4). Recommendation: add source references or revise claims.\n\nSection 3: Financial Projections (p. 7)\n- CRITICAL: Exchange rates used are from FY24/25, not current year. This understates costs by approximately two percent, affecting the margin forecast. Recommendation: update to current rates and recalculate.\n\nSection 5: Risk Assessment (pp. 12 to 14)\n- IMPORTANT: Regulatory compliance risks are not addressed. Given pending changes to data protection requirements, this is a significant omission. Recommendation: add a regulatory risk subsection.\n\nSection 2: Market Analysis (pp. 3 to 6)\n- MINOR: Two competitor references cite 2024 reports. More recent data may be available. Recommendation: verify currency of sources.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your summary is structured by section, references specific pages and paragraphs, includes severity ratings, and provides clear recommendations. Owen would consider this a proper review document.",
          observation:
            "You have separated critical issues from minor ones, which helps the colleague prioritise their revisions efficiently.",
          coachingTip:
            "For analytical communicators, feedback documentation should be as rigorous as the work being reviewed. Precision in feedback demonstrates respect for the work.",
          styleContext:
            "Analytical communicators treat feedback as a deliverable in its own right. It should be structured, traceable, and actionable.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether each point references a specific location and includes a severity level. If your feedback says 'the financials need updating' without citing the page and the specific error, it lacks the precision Owen wants.",
          observation:
            "If your summary groups issues thematically rather than by document section, it may be harder for the colleague to work through the revisions systematically.",
          coachingTip:
            "Mirror the document's structure in your feedback. If the proposal has six sections, your feedback should have six corresponding sections.",
          styleContext:
            "Analytical communicators structure feedback to match the structure of the work. This makes it easy to address each point in context.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary is either too general, lacks page references, or does not include severity ratings. Without these elements, it is informal notes rather than structured feedback.",
          observation:
            "If your summary could apply to any proposal without modification, it is not specific enough for Owen's standards.",
          coachingTip:
            "Add three things to every feedback point: where (page and paragraph), what (the specific issue), and how serious (critical, important, or minor).",
          styleContext:
            "Analytical communicators measure feedback quality by its actionability. If the recipient cannot immediately find and fix each issue, the feedback is not detailed enough.",
        },
      },
    },
  },

  // Scenario 168 - Fiona Banks, conflict, advanced
  {
    id: "scenario-168",
    title: "The Ethical Disagreement",
    context:
      "The company is considering a cost-cutting measure that would reduce the testing phase for a new product from three weeks to one. Fiona has raised serious concerns in a cross-functional meeting, arguing that the reduced testing period creates unacceptable risk.",
    chooseContext:
      "The commercial director has pushed back, saying the cost savings are significant and the product is low-risk. Fiona disagrees and is building her case methodically, citing failure rates and regulatory requirements.",
    rewriteContext:
      "Fiona has asked you to help her draft a risk memo to the senior leadership team documenting why the testing reduction is inadvisable. She wants it to be factual, structured, and impossible to dismiss.",
    characterId: "fiona-banks",
    dialogue:
      "I have reviewed the testing data from the last twelve product launches. Every product that had fewer than two weeks of testing had a defect rate of fourteen percent or higher in the first quarter post-launch. The industry average for our category is six percent. Cutting testing to one week is not a cost saving; it is a cost deferral. The warranty claims alone will exceed the savings within six months.",
    chooseDialogue:
      "I respect the commercial perspective, but the argument that this is a low-risk product is not supported by the data. Our defect classifications show that three of the five most common failure modes in this category are only detectable in week two of testing. Removing that window does not reduce risk; it hides it.",
    rewriteDialogue:
      "The memo needs to be bulletproof. I want historical defect data, regulatory references, and a cost comparison showing the total cost of reduced testing versus the savings. If they want to override this, they should have to do it with full knowledge of the consequences.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "conflict",
    skillFocus: "persuasion",

    spotQuestion: {
      prompt:
        "Fiona is opposing a cost-cutting measure with detailed defect rate data, historical comparisons, and a financial argument that the savings will be offset by warranty claims. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona builds her case entirely on data and evidence. She cites specific defect rates, compares them to industry benchmarks, and projects the financial consequences of the decision. This is a methodical, evidence-based argument.",
          observation:
            "Notice that Fiona does not appeal to ethics or emotion. She frames the disagreement as a data problem: the numbers do not support the proposed change.",
          coachingTip:
            "Analytical communicators in conflict rely on evidence rather than authority, emotion, or values. Their power comes from the strength of their data, not the volume of their voice.",
          styleContext:
            "Analytical communicators believe that the best way to win an argument is to make the data irrefutable. If the evidence is strong enough, the conclusion should be self-evident.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is assertive and confident, which can seem direct. But her assertion is built on detailed evidence and methodical reasoning, not on positional authority or impatience.",
          observation:
            "A direct communicator would say 'cutting testing is a bad idea and I am not supporting it'. Fiona says 'here are fourteen data points that show why cutting testing increases total cost'. The foundation is different.",
          coachingTip:
            "Direct communicators state conclusions with confidence. Analytical communicators arrive at conclusions through evidence. The difference is in how they build their case.",
          styleContext:
            "Analytical communicators in high-stakes conflicts become more detailed, not more forceful. Their response to pressure is to add more evidence, not more volume.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Fiona is not expressing moral outrage (expressive) or worrying about the team's comfort with the decision (supportive). She is constructing a logical, data-driven argument against a specific proposal.",
          observation:
            "There is no mention of how people feel, no appeal to shared values, and no concern about relationships. This is a purely evidence-based challenge.",
          coachingTip:
            "When someone disagrees by presenting data rather than opinions, calculations rather than principles, and projections rather than concerns, they are operating in an analytical style.",
          styleContext:
            "Analytical communicators see ethical disagreements as data problems. If the numbers show harm, the ethical conclusion follows from the evidence.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "The commercial director says the product is low-risk and the savings justify the testing cut. Fiona disagrees and is building her counter-argument. How do you support her analytical approach?",
      options: [
        {
          id: "s168-opt-a",
          text: "Fiona, could you share the defect classification data you mentioned? If three of the five most common failure modes are only caught in week two, that directly contradicts the low-risk classification. Let us put that data side by side with the cost savings and let the numbers speak for themselves.",
          score: 10,
          result: "strong",
          explanation:
            "This reinforces Fiona's evidence-based approach by asking for the specific data that challenges the counterargument. It keeps the discussion factual and positions the data as the arbiter.",
        },
        {
          id: "s168-opt-b",
          text: "I think Fiona is right that we should be cautious. Rushing a product to market never ends well, and our reputation is worth more than a short-term cost saving.",
          score: 5,
          result: "partial",
          explanation:
            "Directionally supportive but uses generalisations and appeals to reputation rather than data. Fiona would appreciate the support but would want it grounded in evidence rather than intuition.",
        },
        {
          id: "s168-opt-c",
          text: "Both perspectives are valid. Perhaps we could find a middle ground, maybe two weeks instead of three? That way we save some cost while keeping most of the testing coverage.",
          score: 0,
          result: "weak",
          explanation:
            "This splits the difference without engaging with Fiona's data. An analytical communicator sees arbitrary compromise as intellectually dishonest. The right answer should come from the evidence, not from averaging two positions.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona wants a risk memo documenting why the testing reduction is inadvisable. Write it in an analytical style with historical data, regulatory references, and cost comparisons.",
      targetTraits: ["data-driven", "structured", "regulatory-referenced", "cost-comparison"],
      exampleStrongResponse:
        "RISK MEMO: Proposed Reduction of Product Testing Phase\n\nTo: Senior Leadership Team\nFrom: Fiona Banks, Quality Assurance Lead\nDate: 13 March 2026\n\n1. Summary\nThis memo recommends against reducing the product testing phase from three weeks to one. Historical data and regulatory requirements indicate that the proposed change would increase defect rates, generate warranty costs exceeding the projected savings, and create compliance risk.\n\n2. Historical Defect Data\nAnalysis of the last twelve product launches shows:\n- Products with fewer than two weeks of testing: average defect rate of 14.2%\n- Products with three weeks of testing: average defect rate of 5.8%\n- Industry benchmark for this category: 6.0%\n\n3. Failure Mode Analysis\nThree of the five most common failure modes (thermal cycling degradation, connector fatigue, and firmware edge cases) are only reliably detectable during the second week of testing.\n\n4. Cost Comparison\nProjected testing reduction saving: 85,000 per product line\nEstimated warranty and recall costs at 14% defect rate: 210,000 per product line (based on FY24/25 actuals)\nNet cost of reduced testing: 125,000 additional cost per product line\n\n5. Regulatory Considerations\nBS EN 61010 requires documented evidence of adequate testing for products in this category. A one-week testing phase may not generate sufficient data to satisfy audit requirements.\n\n6. Recommendation\nRetain the three-week testing phase. If cost reduction is a priority, consider optimising the test sequence to reduce resource hours without shortening the elapsed testing period.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Outstanding. Your memo is structured, evidence-based, and impossible to dismiss without engaging with the data. Fiona would be confident presenting this to the leadership team.",
          observation:
            "You have included every element Fiona requested: historical data, regulatory references, and a clear cost comparison. The recommendation follows logically from the evidence.",
          coachingTip:
            "For analytical communicators, the strongest memos are ones where the recommendation is the only logical conclusion of the data presented. If someone disagrees, they have to challenge the evidence, not the opinion.",
          styleContext:
            "Analytical communicators use memos as decision-support tools. The document should contain everything a rational decision-maker needs to reach the right conclusion.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good structure, but check whether your memo includes all three elements Fiona requested: historical defect data, regulatory references, and a cost comparison. If any is missing, the case is incomplete.",
          observation:
            "If your memo argues against the change but does not quantify the financial impact, it leaves the commercial director's cost argument unanswered.",
          coachingTip:
            "An analytical risk memo must meet the counterargument on its own terms. If the proposal is justified by cost savings, your memo must show that the savings are illusory.",
          styleContext:
            "Analytical communicators believe that an argument with missing evidence is weaker than no argument at all. Every claim must be substantiated.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your memo is either too general, too opinion-based, or missing the quantitative evidence Fiona considers essential. Without hard data, it reads as a position statement rather than a risk assessment.",
          observation:
            "If your memo uses phrases like 'we believe' or 'it is generally accepted', it lacks the specificity Fiona demands. She wants numbers, not sentiments.",
          coachingTip:
            "Replace every opinion with a data point. 'Testing cuts are risky' becomes 'products with reduced testing had 14.2% defect rates versus 5.8% for fully tested products'.",
          styleContext:
            "Analytical communicators see data as the foundation of credibility. A memo without data is just an email with a formal header.",
        },
      },
    },
  },
];
