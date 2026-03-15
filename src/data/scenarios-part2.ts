import { Scenario } from "@/types";

export const SCENARIOS_PART2: Scenario[] = [
  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (13-18)
  // ============================================

  // --- Tom Brennan (supportive) x2 ---
  {
    id: "scenario-13",
    title: "Restructure Concerns",
    context:
      "You are meeting with Tom to discuss the upcoming team restructure. He has been with the company for eight years and is visibly worried about his role changing.",
    chooseContext:
      "Tom has shared his concerns and is grateful you listened. He now wants to know whether there is a genuine plan to support people through the transition or whether it will be handled impersonally.",
    rewriteContext:
      "The conversation has deepened and Tom reveals that his team members are already anxious. Some have approached him directly asking whether their jobs are safe, and he did not know what to say.",
    characterId: "tom-brennan",
    dialogue:
      "I keep hearing bits and pieces about the restructure, and honestly, I just want to know that my team will be looked after. We have built something good here and I do not want it thrown away overnight.",
    chooseDialogue:
      "Thanks for hearing me out. I suppose what I really need to know is whether there is a plan to look after people through this, or whether it is just going to be announced and left to sort itself out.",
    rewriteDialogue:
      "The thing is, half my team have already started worrying. A couple of them came to me yesterday asking if their jobs are safe. I did not know what to tell them.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "one-to-one",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "What communication style is Tom displaying in this conversation?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Spot on. Tom is showing classic supportive traits: concern for his team, loyalty to what has been built, and a need for reassurance before accepting change.",
          observation:
            "Notice how Tom frames everything around his people rather than himself. His language centres on 'my team' and 'what we have built'.",
          coachingTip:
            "When someone leads with concern for others, they almost always lean supportive. Acknowledge that loyalty before moving to any facts or plans.",
          styleContext:
            "Supportive communicators prioritise relationships and stability. They need to feel that change will be handled with care and that people will not be left behind.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close, but not quite. Tom does show some warmth that could look expressive, but his core concern is stability and looking after people rather than energy or ideas.",
          observation:
            "Expressive communicators tend to focus on possibility and excitement. Tom is focused on preserving trust and protecting his team.",
          coachingTip:
            "If the concern is about people and continuity rather than vision and momentum, the style is more likely supportive than expressive.",
          styleContext:
            "Supportive and expressive styles are both people-oriented, which can make them easy to confuse. The key difference is that supportive seeks safety while expressive seeks stimulation.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not this time. Tom is not focused on data or speed. His overriding concern is for his people and the trust they have built together.",
          observation:
            "Direct or analytical communicators would focus on outcomes, timelines, or evidence. Tom is asking for reassurance and care.",
          coachingTip:
            "Listen for emotional language about people, loyalty, and stability. These are strong signals of a supportive communication style.",
          styleContext:
            "Supportive communicators value trust, consistency, and the human side of every decision. They are uncomfortable when change feels abrupt or impersonal.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom is clearly worried about the restructure. Which response best matches his supportive communication style?",
      options: [
        {
          id: "scenario-13-a",
          text: "I hear you, Tom. What your team has built is not going to be ignored. Let us work through this together to make sure everyone is supported.",
          score: 10,
          result: "strong",
          explanation:
            "This response acknowledges Tom's feelings, validates what his team has built, and offers collaborative reassurance. That is exactly what a supportive communicator needs to hear.",
        },
        {
          id: "scenario-13-b",
          text: "I hear you, Tom. The restructure is still being finalised, but I will keep you in the loop as things develop. Try not to worry too much in the meantime.",
          score: 5,
          result: "partial",
          explanation:
            "This is reasonable but a little dismissive. Telling someone not to worry rarely helps a supportive communicator. They need concrete reassurance, not vague comfort.",
        },
        {
          id: "scenario-13-c",
          text: "The restructure is a business decision, Tom. We need to stay focused on what is best for the organisation. I will share the details once everything is confirmed.",
          score: 0,
          result: "weak",
          explanation:
            "This is too transactional for a supportive communicator. It ignores Tom's feelings entirely and frames the situation in cold, business-only terms, which will increase his anxiety rather than ease it.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom has just told you he is anxious about the restructure and worried his team will be broken up. Write a response that would land well with his supportive communication style.",
      targetTraits: [
        "acknowledges-feelings",
        "collaborative-framing",
        "reassuring",
        "not-rushed",
      ],
      exampleStrongResponse:
        "I understand why this feels unsettling, Tom, and I appreciate you being honest about it. What you and your team have built together matters, and we are not going to rush into anything without thinking about the people involved. Let us sit down together this week and go through what we know so far, so you can ask any questions and we can plan next steps at a pace that works for everyone.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. You acknowledged Tom's feelings, validated his team's work, and offered a collaborative next step without rushing him. That is a textbook supportive response.",
          observation:
            "Your language showed genuine empathy and a willingness to work through the situation together rather than dictating from above.",
          coachingTip:
            "With supportive communicators, always lead with empathy and follow with a clear but unhurried plan. They need to feel heard before they can engage with the detail.",
          styleContext:
            "Supportive communicators are most receptive when they feel that their concerns are taken seriously and that change will be handled with care.",
        },
        partial: {
          result: "partial",
          explanation:
            "You made some good moves, but your response could go further in acknowledging Tom's emotions or offering reassurance. Supportive communicators need to feel genuinely heard.",
          observation:
            "Consider whether your response addressed how Tom is feeling or jumped straight to information and next steps.",
          coachingTip:
            "Try opening with a phrase like 'I understand why this feels...' or 'That makes complete sense' before moving to any practical detail.",
          styleContext:
            "Supportive communicators process change emotionally first. If you skip the empathy step, they may disengage even if your practical advice is sound.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response did not connect with Tom's emotional needs. A supportive communicator will feel dismissed or anxious if their concerns are not acknowledged directly.",
          observation:
            "Look at whether your response focused on facts, outcomes, or efficiency. Those are valuable with other styles, but supportive communicators need warmth and reassurance first.",
          coachingTip:
            "Start with empathy: acknowledge the feeling, then reassure, then offer to work through it together. That sequence is powerful with supportive communicators.",
          styleContext:
            "When supportive communicators feel unheard, they tend to withdraw rather than push back. The silence does not mean agreement; it means disconnection.",
        },
      },
    },
  },

  {
    id: "scenario-14",
    title: "New System Rollout",
    context:
      "Tom's team is about to adopt a new CRM system. He has pulled you aside after the announcement meeting to share his reservations.",
    chooseContext:
      "Tom has been thinking it over and his main worry is the training. He is concerned that if people feel thrown in at the deep end, it will damage their confidence and take a long time to recover.",
    rewriteContext:
      "Tom shares that a team member approached him this morning asking whether they would just be expected to figure the new system out on their own. Tom needs a better answer to give them.",
    characterId: "tom-brennan",
    dialogue:
      "I am not against the new system, but my team are already stretched. I just want to make sure we are not expected to learn everything overnight while still hitting our numbers.",
    chooseDialogue:
      "I have been thinking about it more, and I think my biggest worry is the training. If people feel thrown in at the deep end, they will lose confidence and that takes a long time to rebuild.",
    rewriteDialogue:
      "One of my team actually said to me this morning, 'Are they just going to switch it on and expect us to figure it out?' I need to be able to give them a better answer than that.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "meeting",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Based on how Tom is raising his concerns, which communication style is he demonstrating?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Exactly right. Tom is not rejecting the change; he is asking for reassurance that his team will be supported through it. That is a hallmark of the supportive style.",
          observation:
            "Notice how Tom qualifies his concern with 'I am not against the new system'. Supportive communicators often soften their objections to avoid seeming difficult.",
          coachingTip:
            "When someone raises a concern gently and frames it around their team, treat it as a genuine worry that needs addressing, not a minor grumble.",
          styleContext:
            "Supportive communicators will rarely push back aggressively. Their concerns are usually understated, which means you need to listen carefully and respond with care.",
        },
        partial: {
          result: "partial",
          explanation:
            "Not quite. Tom is people-focused, but his concern is about pace and support rather than energy or excitement. That points to supportive rather than expressive.",
          observation:
            "An expressive communicator might say 'This could be amazing if we get it right!' Tom is instead asking for breathing room and reassurance.",
          coachingTip:
            "If the concern is about pace, support, and team welfare, you are most likely dealing with a supportive communicator.",
          styleContext:
            "Both supportive and expressive styles are people-oriented, but supportive communicators lean towards caution and care while expressive communicators lean towards possibility.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not this time. Tom is not asking for data or demanding a faster decision. His language is centred on his people and making sure the transition is manageable.",
          observation:
            "Direct or analytical communicators would focus on timelines, metrics, or efficiency. Tom is focused on wellbeing and workload.",
          coachingTip:
            "Look for language about team welfare, manageable pace, and being supported. These are reliable indicators of the supportive style.",
          styleContext:
            "Supportive communicators need to feel that change will be introduced thoughtfully. Rushing them creates resistance, even if they do not express it openly.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom is worried about the pace of the new CRM rollout and the impact on his team. How do you respond?",
      options: [
        {
          id: "scenario-14-a",
          text: "That is a fair point, Tom. We will phase the rollout so your team is not overwhelmed, and proper training will be in place first. Let us plan it together.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Tom's concern, offers reassurance about the pace, and invites collaboration. It hits all the right notes for a supportive communicator.",
        },
        {
          id: "scenario-14-b",
          text: "I understand the concern. We will provide training materials and a helpdesk. The timeline is fixed, but there will be support available during the transition.",
          score: 5,
          result: "partial",
          explanation:
            "This acknowledges the concern and offers some support, but the fixed timeline feels rigid. Tom needs to feel that the pace is manageable, not just that help exists.",
        },
        {
          id: "scenario-14-c",
          text: "Everyone is in the same boat, Tom. The rollout date is set and we all need to get up to speed. The sooner we start, the sooner it becomes second nature.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses Tom's concern and pressures him to move faster. For a supportive communicator, this approach will increase anxiety and reduce engagement.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom has expressed concern that his team will be overwhelmed by the new CRM rollout. Write a response that addresses his supportive communication needs.",
      targetTraits: [
        "acknowledges-feelings",
        "collaborative-framing",
        "reassuring",
        "not-rushed",
      ],
      exampleStrongResponse:
        "I completely understand the worry, Tom, and the last thing we want is for your team to feel overwhelmed. We can phase this in gradually so people have time to get comfortable before we expect full adoption. Let us map out a timeline together that feels realistic for your team, and I will make sure there is hands-on support throughout.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Well done. You showed empathy, offered a phased approach, and included Tom in the planning. That is exactly the kind of response that builds trust with a supportive communicator.",
          observation:
            "Your language was collaborative and reassuring, which is precisely what Tom needs to feel comfortable with the change.",
          coachingTip:
            "With supportive communicators, always pair the plan with the reassurance. They need to know that someone has thought about the human side, not just the logistics.",
          styleContext:
            "Supportive communicators adopt change more willingly when they feel it has been introduced with care and when they have had a voice in the process.",
        },
        partial: {
          result: "partial",
          explanation:
            "You addressed some of Tom's needs, but there may be room to strengthen the emotional acknowledgement or the collaborative element. Supportive communicators need both.",
          observation:
            "Check whether your response gave Tom a sense of control over the pace, or whether it still felt like a top-down decision.",
          coachingTip:
            "Try using phrases like 'together', 'at a pace that works', or 'we will make sure you are supported' to strengthen the supportive tone.",
          styleContext:
            "Supportive communicators want to feel included in decisions that affect their team. Even small gestures of collaboration make a significant difference.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response may have focused too heavily on the practical plan without addressing how Tom is feeling. Supportive communicators need emotional validation before they can engage with logistics.",
          observation:
            "Consider whether your response acknowledged Tom's concern or moved straight to problem-solving mode.",
          coachingTip:
            "Lead with empathy. A simple 'I understand why that feels daunting' before any practical information will completely change how a supportive communicator receives your message.",
          styleContext:
            "Supportive communicators are not opposed to change, but they need to feel that the transition will be handled with care and that their people will not be left to struggle alone.",
        },
      },
    },
  },

  // --- Leah Morgan (supportive) x2 ---
  {
    id: "scenario-15",
    title: "Redundancy Consultation",
    context:
      "Leah has been asked to support the HR side of a redundancy consultation. She has come to you to talk through her concerns about how the process will affect the people involved.",
    chooseContext:
      "Leah has shared her initial concerns and is now focused on the consultation conversations themselves. She is worried they will feel rushed or impersonal and wants assurance that real care will be taken.",
    rewriteContext:
      "Leah is visibly emotional. She has been losing sleep thinking about specific individuals who have given years to the company. She wants you to understand that how this is handled will affect everyone who remains, not just those who leave.",
    characterId: "leah-morgan",
    dialogue:
      "I know this has to happen from a business perspective, but I need to know that we are going to handle this properly. These are real people with families, and I want to make sure we treat them with dignity.",
    chooseDialogue:
      "I appreciate you listening. What worries me most is the conversations themselves. If we rush through them or treat them like a tick-box exercise, people will feel discarded. I need to know we will do this with real care.",
    rewriteDialogue:
      "I have been lying awake thinking about some of these people. They have given years to this company. If we get this wrong, the damage is not just to them, it is to every person still here watching how we treat their colleagues.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "conflict",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "What communication style is Leah displaying in this conversation?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Exactly. Leah accepts the business reality but is focused on the human impact. Her concern for dignity and proper treatment is a clear supportive trait.",
          observation:
            "Leah does not challenge the decision itself. Instead, she focuses on how the process will be handled, which is a classic supportive priority.",
          coachingTip:
            "Supportive communicators often accept difficult decisions more readily when they trust that the process will be humane. Focus your reassurance there.",
          styleContext:
            "Supportive communicators in HR roles often carry the emotional weight of organisational decisions. They need to feel that leadership shares their concern for people.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah is warm and people-focused, which can overlap with expressive, but her emphasis is on care and dignity rather than energy or ideas.",
          observation:
            "An expressive communicator might focus on how to communicate the message positively. Leah is focused on ensuring people are treated well through the process.",
          coachingTip:
            "The difference between supportive and expressive often comes down to whether the focus is on protecting people (supportive) or energising them (expressive).",
          styleContext:
            "Supportive communicators in difficult situations are driven by a deep sense of responsibility towards the individuals affected.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not this time. Leah is not focused on data, speed, or outcomes. Her overriding concern is for the people who will be affected by this decision.",
          observation:
            "A direct or analytical communicator would focus on the process, the numbers, or the timeline. Leah is focused on the human experience.",
          coachingTip:
            "When someone talks about dignity, families, and treating people properly, you are almost certainly dealing with a supportive communicator.",
          styleContext:
            "Supportive communicators are often the moral compass in difficult situations. They ensure that business efficiency does not come at the cost of basic human decency.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah is worried about how the redundancy consultation will affect people. Which response best suits her supportive style?",
      options: [
        {
          id: "scenario-15-a",
          text: "I share that concern, Leah. Treating people with dignity is non-negotiable. Let us build a process together that gives everyone proper support and time to plan their next steps.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Leah's values, commits to a humane process, and invites her to co-create the approach. It speaks directly to her supportive priorities.",
        },
        {
          id: "scenario-15-b",
          text: "We will follow all the proper legal processes, Leah, and HR will be involved at every stage. Everyone will be treated fairly and given the standard notice period and support package.",
          score: 5,
          result: "partial",
          explanation:
            "This is procedurally correct but emotionally flat. Leah does not just want compliance; she wants genuine compassion and involvement in shaping the approach.",
        },
        {
          id: "scenario-15-c",
          text: "I understand it is tough, but this is a business decision and we need to move through it efficiently. The best thing we can do is get it done quickly so everyone can move on.",
          score: 0,
          result: "weak",
          explanation:
            "This prioritises speed over care, which is the opposite of what Leah needs to hear. It will feel dismissive and callous to a supportive communicator who values the human side of every decision.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah has told you she is worried the redundancy consultation will not be handled with enough care. Write a response that resonates with her supportive communication style.",
      targetTraits: [
        "acknowledges-feelings",
        "collaborative-framing",
        "reassuring",
        "not-rushed",
      ],
      exampleStrongResponse:
        "I hear you, Leah, and I feel the weight of this too. We owe it to everyone involved to handle this with real compassion. I would like us to design the process together, making sure each person has time to ask questions, access support, and feel respected throughout. There is no rush to cut corners here. We will take the time to get this right.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Beautifully handled. You validated Leah's feelings, shared the emotional weight, and committed to a collaborative, unhurried process. That is exactly what she needs.",
          observation:
            "Your response showed that you see the situation through a human lens, not just a business one. That builds deep trust with supportive communicators.",
          coachingTip:
            "In emotionally charged situations, supportive communicators need to know that leadership genuinely cares, not just that the process is compliant.",
          styleContext:
            "Supportive communicators are often the ones who hold the emotional space for others. When you show that you share their concern, it relieves an enormous burden.",
        },
        partial: {
          result: "partial",
          explanation:
            "You made some positive moves, but your response could do more to show genuine emotional engagement. Leah needs to feel that you truly share her concern, not just that you have a plan.",
          observation:
            "Consider whether your response sounded procedural or heartfelt. Supportive communicators can tell the difference.",
          coachingTip:
            "Try sharing your own feelings about the situation. Phrases like 'I feel the weight of this too' or 'This matters to me as well' can make a significant difference.",
          styleContext:
            "Supportive communicators in difficult situations need emotional partnership, not just practical solutions.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response may have been too focused on process or outcomes. Leah is asking for emotional alignment, not a project plan.",
          observation:
            "If your response focused on timelines, legalities, or efficiency, it will have missed the mark with Leah entirely.",
          coachingTip:
            "Start by acknowledging the emotional reality. Then reassure her that the process will be humane. Only then move to any practical steps.",
          styleContext:
            "Supportive communicators will disengage from a process they feel is being handled without genuine care, regardless of how well-organised it is.",
        },
      },
    },
  },

  {
    id: "scenario-16",
    title: "Flexible Working Request",
    context:
      "Leah has received a flexible working request from a team member who is struggling with childcare. She has come to discuss how to handle it sensitively.",
    chooseContext:
      "Leah has spoken privately with the team member and can see how stressed she is. The team member does not want to let anyone down but the childcare situation is beyond her control. Leah is looking for guidance on handling it the right way.",
    rewriteContext:
      "Leah reveals that the team member became tearful during their conversation. She feels guilty for even asking for help because she knows everyone else is stretched too. Leah wants to make sure she knows that asking is not a weakness.",
    characterId: "leah-morgan",
    dialogue:
      "She is a brilliant team member and I really do not want her to feel like she has to choose between work and her family. I just want to find something that works for everyone.",
    chooseDialogue:
      "I have had a quiet word with her and she is really stressed about it. She does not want to let the team down, but the childcare situation is out of her hands right now. I just need some guidance on how to handle this the right way.",
    rewriteDialogue:
      "She actually got tearful when we spoke. She said she feels guilty asking for help because she knows everyone else is busy too. I want to make sure she knows asking is not a weakness.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "team",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Which communication style is Leah showing in the way she discusses this request?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah's focus on finding a solution that works for everyone, her concern for the team member's wellbeing, and her desire to avoid anyone feeling pressured are all classic supportive traits.",
          observation:
            "Notice how Leah frames this as a 'both/and' rather than an 'either/or'. She wants to protect both the person and the team.",
          coachingTip:
            "Supportive communicators naturally seek harmony. When they bring you a problem, they are often already looking for the compassionate middle ground.",
          styleContext:
            "Supportive communicators are driven by a desire to make sure nobody is left feeling unsupported or forced into an uncomfortable position.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Leah's warmth might look expressive, but her focus is on care and finding a fair solution rather than generating excitement or ideas.",
          observation:
            "Expressive communicators would likely frame this more positively, focusing on opportunity. Leah is focused on protection and fairness.",
          coachingTip:
            "If the primary concern is making sure everyone feels supported and no one is put under unfair pressure, the style is supportive.",
          styleContext:
            "Supportive and expressive styles both care about people, but supportive leans towards care and protection while expressive leans towards enthusiasm and possibility.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not quite. Leah is not focused on data, efficiency, or outcomes. Her priority is the person behind the request and finding a humane solution.",
          observation:
            "An analytical or direct communicator would focus on policy, precedent, or operational impact. Leah is focused on the individual's wellbeing.",
          coachingTip:
            "When the conversation centres on what is fair, compassionate, and good for the individual, you are seeing the supportive style in action.",
          styleContext:
            "Supportive communicators bring a people-first lens to every decision, which is invaluable for maintaining trust and loyalty within teams.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah wants to handle a flexible working request sensitively. Which response aligns with her supportive communication style?",
      options: [
        {
          id: "scenario-16-a",
          text: "That is a really thoughtful approach, Leah. Let us look at the options together and find an arrangement that supports her without pressuring the rest of the team.",
          score: 10,
          result: "strong",
          explanation:
            "This validates Leah's caring approach, offers to collaborate on the solution, and reassures her there is no rush. It meets all of her supportive needs.",
        },
        {
          id: "scenario-16-b",
          text: "We should review the flexible working policy and see what options are available. I can send you the framework so we can assess the request against the criteria.",
          score: 5,
          result: "partial",
          explanation:
            "This is practical and helpful, but it is too procedural. Leah needs emotional acknowledgement before process. Starting with the policy framework feels cold.",
        },
        {
          id: "scenario-16-c",
          text: "We need to be careful about setting a precedent here. If we accommodate one request, we will have to do it for everyone. Let us stick to the standard process.",
          score: 0,
          result: "weak",
          explanation:
            "This is dismissive of Leah's empathetic approach and frames the situation as a risk rather than an opportunity to support someone. It will feel uncaring to a supportive communicator.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah wants to find a compassionate solution for a team member's flexible working request. Write a response that aligns with her supportive communication style.",
      targetTraits: [
        "acknowledges-feelings",
        "collaborative-framing",
        "reassuring",
        "not-rushed",
      ],
      exampleStrongResponse:
        "I can see how much you care about getting this right, Leah, and that is exactly the approach we need. Let us sit down together, look at what would work for her, and make sure we find something that feels fair for the whole team too. There is no pressure to rush this. We can take the time to find the right balance.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent work. You acknowledged Leah's caring approach, offered collaboration, and removed any sense of pressure. That is a perfectly pitched supportive response.",
          observation:
            "Your language showed genuine appreciation for Leah's empathy and a willingness to invest time in finding the right solution.",
          coachingTip:
            "When a supportive communicator brings you a people problem, always start by validating their instinct to care. Then work together on the solution.",
          styleContext:
            "Supportive communicators are motivated by the belief that every person deserves to be treated with consideration. Validate that belief and you build lasting trust.",
        },
        partial: {
          result: "partial",
          explanation:
            "Some good elements, but consider whether you fully acknowledged Leah's emotional investment in this situation. She needs to feel that her caring approach is valued, not just tolerated.",
          observation:
            "Check whether your response jumped to solutions before validating Leah's feelings about the situation.",
          coachingTip:
            "Before offering any practical advice, try saying something like 'I can see how much thought you have put into this' to show you value her approach.",
          styleContext:
            "Supportive communicators often worry that they are being 'too soft'. Affirming their empathetic approach gives them confidence to keep advocating for people.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response may have focused too heavily on process or risk. Leah needs emotional validation and a sense that you share her people-first values.",
          observation:
            "If your response centred on policy, precedent, or business impact, it will have missed Leah's core need for empathetic alignment.",
          coachingTip:
            "With supportive communicators, always lead with the human element. Acknowledge feelings and values before introducing any procedural considerations.",
          styleContext:
            "Supportive communicators disengage when they feel their concern for people is being overridden by cold pragmatism. Meet them on the human level first.",
        },
      },
    },
  },

  // --- David Chen (supportive) x2 ---
  {
    id: "scenario-17",
    title: "Supplier Relationship",
    context:
      "David has been managing a key supplier relationship for three years. You have suggested switching to a cheaper alternative, and he wants to discuss it.",
    chooseContext:
      "David has shared a specific example of the supplier going above and beyond during an urgent order. He feels the relationship has real value that a spreadsheet cannot capture and wants a fair conversation before any decision is made.",
    rewriteContext:
      "David has spoken to the supplier's account manager, who sensed something was wrong. David wants to handle the situation in a way that respects what the supplier has done, even if the decision ultimately goes against them.",
    characterId: "david-chen",
    dialogue:
      "I understand the cost pressure, but we have built a really strong relationship with this supplier. They go above and beyond for us because of the trust we have developed. I would hate to throw that away for a small saving.",
    chooseDialogue:
      "Last month when we had that urgent order, they stayed late to make sure it was dispatched on time. You do not get that from a supplier who is just a line item on a spreadsheet. I think we owe them a proper conversation before we make any decision.",
    rewriteDialogue:
      "I spoke to their account manager yesterday and she asked if everything was alright. She could tell something was off. If we are going to switch, I at least want to handle it in a way that respects what they have done for us.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "client",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "What communication style is David demonstrating in this conversation?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David values the relationship he has built and is focused on trust and loyalty. His resistance to change is rooted in concern for the partnership, not stubbornness.",
          observation:
            "David talks about trust, going above and beyond, and what has been built over time. These are deeply supportive priorities.",
          coachingTip:
            "When someone frames a business decision in terms of relationships and trust, they are showing supportive traits. Address the relationship concern before the numbers.",
          styleContext:
            "Supportive communicators invest heavily in long-term relationships and see them as a strategic asset, not just a nice-to-have.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David's warmth about the supplier could look expressive, but his emphasis is on trust and loyalty rather than excitement or innovation.",
          observation:
            "An expressive communicator might talk about the supplier's creativity or energy. David is focused on reliability and trust built over time.",
          coachingTip:
            "If the attachment is based on trust, loyalty, and consistency rather than excitement and possibility, the style is supportive.",
          styleContext:
            "Supportive communicators value long-standing relationships deeply. They see switching suppliers as breaking a promise, not just making a business decision.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not this time. David is not making a data-driven argument or pushing for a fast decision. His concern is fundamentally about the relationship and the trust he has built.",
          observation:
            "A direct or analytical communicator would compare costs, quality metrics, or contractual terms. David is focused on the human partnership.",
          coachingTip:
            "When the argument is built around loyalty, trust, and what has been developed over time, you are looking at a supportive communicator.",
          styleContext:
            "Supportive communicators often see business relationships as personal commitments. Treating them as purely transactional will feel disloyal to them.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "David is resistant to switching suppliers because of the relationship he has built. Which response best suits his supportive communication style?",
      options: [
        {
          id: "scenario-17-a",
          text: "I can see how much that relationship means to you, David. Let us weigh up the full picture together, not just the cost. Trust like that has real value.",
          score: 10,
          result: "strong",
          explanation:
            "This validates David's relationship investment, acknowledges the intangible value of trust, and invites a collaborative evaluation. It respects his supportive priorities completely.",
        },
        {
          id: "scenario-17-b",
          text: "I appreciate the relationship, David, but we do need to consider the cost saving. Perhaps we could talk to the new supplier and see if they can match the service level before we make a final decision.",
          score: 5,
          result: "partial",
          explanation:
            "This acknowledges the relationship but pivots quickly to the cost argument. David needs more reassurance that the relationship factor will be genuinely weighed, not just noted.",
        },
        {
          id: "scenario-17-c",
          text: "We cannot let personal relationships drive procurement decisions, David. The new supplier is 15% cheaper with comparable quality. We need to go with the best value option.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses David's relationship-building as 'personal' and treats the decision as purely transactional. It will feel deeply invalidating to a supportive communicator.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David is concerned about losing a valued supplier relationship for a marginal cost saving. Write a response that aligns with his supportive communication style.",
      targetTraits: [
        "acknowledges-feelings",
        "collaborative-framing",
        "reassuring",
        "not-rushed",
      ],
      exampleStrongResponse:
        "I understand why this matters so much to you, David, and the relationship you have built is clearly a real asset. We are not going to rush into anything. Let us sit down together and look at the full picture, including the trust, reliability, and service quality that your partnership delivers. If the value is there, we will find a way to make it work.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Well done. You validated the emotional investment, acknowledged the intangible value of the relationship, and committed to a careful, collaborative decision. That is exactly right for a supportive communicator.",
          observation:
            "Your response showed that you see David's relationship-building as a strength, not a weakness. That kind of recognition is deeply motivating for supportive communicators.",
          coachingTip:
            "With supportive communicators, always acknowledge the value of what they have built before introducing any change. They need to know their work is respected.",
          styleContext:
            "Supportive communicators invest their energy in building trust and loyalty. When that investment is dismissed, they feel personally devalued.",
        },
        partial: {
          result: "partial",
          explanation:
            "Some positive elements, but your response could go further in validating David's emotional connection to the supplier. He needs to feel that the relationship genuinely matters in the decision.",
          observation:
            "Consider whether you balanced the emotional and practical elements, or leaned too heavily towards one side.",
          coachingTip:
            "Try phrases like 'the trust you have built is genuinely valuable' or 'we need to weigh what this relationship brings beyond cost' to strengthen the supportive tone.",
          styleContext:
            "Supportive communicators are not being sentimental when they advocate for relationships. They understand that trust has tangible business value.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response may have been too focused on cost or efficiency. David needs to hear that the relationship he has built will be genuinely considered, not just overridden by numbers.",
          observation:
            "If your response treated the supplier switch as a purely rational decision, it will have missed David's core concern entirely.",
          coachingTip:
            "Start by acknowledging what David has built. Then reassure him that the decision will consider relationship value alongside cost. That sequence matters.",
          styleContext:
            "Supportive communicators will reluctantly accept difficult decisions, but only if they believe the process was fair and the human element was genuinely weighed.",
        },
      },
    },
  },

  {
    id: "scenario-18",
    title: "Performance Feedback",
    context:
      "You need to give David feedback about a team member who has been underperforming. David tends to avoid difficult conversations and you want to help him address the issue.",
    chooseContext:
      "David has noticed the underperformance himself and is concerned that the team member is also withdrawing socially. He wants to help but is afraid of making things worse by raising it.",
    rewriteContext:
      "David has been trying to draft what he wants to say but keeps deleting it. Every version feels either too soft or too harsh. He is asking you to help him find the right tone for the conversation.",
    characterId: "david-chen",
    dialogue:
      "I know her numbers have dipped, but she has been going through a tough time personally. I have been giving her a bit of space, hoping things will improve naturally. I just do not want to make things worse for her.",
    chooseDialogue:
      "The thing is, I have noticed she is withdrawing from the team a bit too. She used to be the first to volunteer for things, and now she barely speaks up in meetings. I want to help, I just do not know how to raise it without her feeling like I am piling on.",
    rewriteDialogue:
      "I keep drafting what I want to say to her and then deleting it. Every version sounds either too soft, like I am ignoring the problem, or too harsh, like I do not care about what she is going through. I need help getting the tone right.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "feedback",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "What communication style is David showing in the way he approaches this performance issue?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Spot on. David's instinct to protect, give space, and avoid causing further distress is deeply supportive. He prioritises the person's wellbeing over the performance data.",
          observation:
            "Notice how David frames the underperformance in the context of personal circumstances. He sees the whole person, not just the metrics.",
          coachingTip:
            "Supportive communicators often delay difficult conversations because they fear causing harm. Help them see that a compassionate conversation can be supportive too.",
          styleContext:
            "Supportive communicators can sometimes over-protect, avoiding necessary conversations to keep the peace. They need help framing tough feedback as an act of care.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. David's warmth could overlap with expressive, but his avoidance of the difficult conversation and focus on not making things worse is distinctly supportive.",
          observation:
            "An expressive communicator might try to motivate or inspire the team member. David is focused on protecting her from additional pressure.",
          coachingTip:
            "When someone avoids a difficult conversation because they are worried about the other person's feelings, that is a classic supportive pattern.",
          styleContext:
            "Supportive communicators sometimes need permission to have hard conversations. Frame the feedback as helping the person, not hurting them.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not this time. David is not avoiding the conversation because of data gaps or time pressure. His hesitation is entirely about not wanting to cause emotional harm.",
          observation:
            "A direct communicator would have addressed this immediately. An analytical communicator would want to review the data. David is held back by empathy.",
          coachingTip:
            "When hesitation stems from concern for someone's feelings rather than from a need for more information or a desire for efficiency, the style is supportive.",
          styleContext:
            "Supportive communicators sometimes need coaching to see that a thoughtful, compassionate conversation about performance is itself a supportive act.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "David has been avoiding giving feedback to an underperforming team member because he does not want to add to her stress. How do you respond?",
      options: [
        {
          id: "scenario-18-a",
          text: "That care is a real strength, David. Sometimes the most supportive thing is an honest, caring conversation. We can plan it together so it feels constructive.",
          score: 10,
          result: "strong",
          explanation:
            "This validates David's empathy, reframes the feedback conversation as an act of care, and offers support. It helps him see that avoiding the issue is not the most supportive path.",
        },
        {
          id: "scenario-18-b",
          text: "I understand the sensitivity, David, but the numbers are the numbers. You need to have the conversation sooner rather than later. I can give you a framework to follow if that helps.",
          score: 5,
          result: "partial",
          explanation:
            "This acknowledges the sensitivity but pressures David with urgency and frames the issue around data. The framework offer is helpful, but the tone is too direct for a supportive communicator.",
        },
        {
          id: "scenario-18-c",
          text: "You have left this too long, David. Performance issues do not fix themselves. You need to sit down with her this week and set clear expectations.",
          score: 0,
          result: "weak",
          explanation:
            "This is blunt and critical, which will make David feel attacked rather than supported. He will become defensive and less likely to act, not more.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David is avoiding a performance conversation because he does not want to upset his team member. Write a response that helps him see the value of the conversation while respecting his supportive communication style.",
      targetTraits: [
        "acknowledges-feelings",
        "collaborative-framing",
        "reassuring",
        "not-rushed",
      ],
      exampleStrongResponse:
        "I can see you are trying to protect her, David, and that shows real care. But sometimes the kindest thing we can do is have an honest conversation, so she knows we are aware of what she is going through and we want to help. We can work together on how to approach it, and I will be there to support you. There is no need to rush, but the sooner she knows you are in her corner, the better it will be for both of you.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Brilliantly done. You validated David's empathy, reframed the conversation as an act of care, and offered to work through it together. That is the perfect way to motivate a supportive communicator.",
          observation:
            "Your response helped David see that having the conversation is itself a supportive act. That reframe is powerful for people who avoid conflict out of care.",
          coachingTip:
            "When supportive communicators avoid difficult conversations, help them see that honest, caring feedback is one of the most supportive things they can offer.",
          styleContext:
            "Supportive communicators respond well when you show them that the compassionate path is not avoidance but rather a thoughtful, caring conversation.",
        },
        partial: {
          result: "partial",
          explanation:
            "You made some good moves, but consider whether you fully helped David reframe the conversation as an act of support rather than a source of conflict.",
          observation:
            "Check whether your response might have come across as pushing David to act rather than helping him see the conversation differently.",
          coachingTip:
            "Instead of urging David to 'just do it', try framing the conversation as a way to show the team member she is not alone. That aligns with his values.",
          styleContext:
            "Supportive communicators move towards action when they feel the action itself is supportive, not when they are pressured into it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response may have been too direct or critical. David needs to be guided gently, not pushed. If he feels judged for his approach, he will retreat further.",
          observation:
            "If your response focused on the urgency of the performance issue rather than the caring nature of the conversation, it will have missed the mark with David.",
          coachingTip:
            "Avoid language like 'you need to' or 'this has gone on too long'. Instead, try 'the most caring thing you can do is...' to speak David's language.",
          styleContext:
            "Supportive communicators shut down when they feel criticised for caring too much. Validate their instinct, then redirect it towards constructive action.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (19-24)
  // ============================================

  // --- Rachel Finch (analytical) x2 ---
  {
    id: "scenario-19",
    title: "Marketing Spend Review",
    context:
      "You are presenting a proposal to increase the marketing budget by 20%. Rachel has been reviewing the numbers and wants to challenge your assumptions.",
    chooseContext:
      "Rachel has questioned the ROI projection and is now challenging your conversion rate assumption. She has noticed it is based on last year's data and wants to know whether it still holds given recent market shifts.",
    rewriteContext:
      "Rachel has made it clear she is not trying to block the proposal. If the evidence is solid she will support it, but she needs the gaps in the data addressed before she can put her name to it.",
    characterId: "rachel-finch",
    dialogue:
      "I have looked at the proposal and I have a few questions. What is the projected ROI based on? The figures reference 'industry benchmarks' but I cannot find the source data. I need to see the methodology before I can support this.",
    chooseDialogue:
      "I also noticed the conversion rate assumption is based on last year's campaign, but market conditions have shifted since then. Are we confident that figure still holds, or should we be stress-testing it against more recent data?",
    rewriteDialogue:
      "Look, I am not trying to block this. If the evidence is solid, I will back it. But right now there are gaps in the data and I cannot put my name to something I have not been able to verify. Walk me through the assumptions.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "meeting",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "What communication style is Rachel displaying in this exchange?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel is asking for source data, methodology, and evidence. Her challenge is not personal; it is about the quality and rigour of the analysis.",
          observation:
            "Rachel does not dismiss the proposal outright. She wants to support it but needs proper evidence first. That is a textbook analytical response.",
          coachingTip:
            "Analytical communicators are not being difficult when they ask probing questions. They are applying the same rigour they would expect of their own work.",
          styleContext:
            "Analytical communicators will not commit to a position without evidence. Providing source data and methodology is essential to gaining their support.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is direct in her challenge, but her focus is on evidence and methodology rather than speed or outcomes. That makes this analytical rather than direct.",
          observation:
            "A direct communicator would ask 'What is the bottom line?' or 'What do you recommend?' Rachel is asking 'Where is the evidence?'",
          coachingTip:
            "If the challenge is about rigour, evidence, and methodology, the style is analytical. If it is about speed, outcomes, and decision-making, it is direct.",
          styleContext:
            "Analytical and direct styles can both be assertive, but they challenge in different ways. Analytical challenges are about quality of evidence; direct challenges are about speed of action.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not this time. Rachel's focus is entirely on data quality and methodology. She is not concerned with relationships or team harmony here.",
          observation:
            "A supportive or expressive communicator would focus on the people impact or the excitement of the opportunity. Rachel is focused on the numbers.",
          coachingTip:
            "When someone asks for source data, methodology, and evidence before committing, you are dealing with an analytical communicator.",
          styleContext:
            "Analytical communicators approach every proposal as a hypothesis that needs to be tested against evidence. Meet them with data and you will earn their respect.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel wants to see the evidence behind your marketing budget proposal. Which response best suits her analytical communication style?",
      options: [
        {
          id: "scenario-19-a",
          text: "Fair challenge, Rachel. The ROI is based on our two-year campaign data, IPA sector benchmarks, and a regression analysis of spend versus lead volume. I can share the methodology document this afternoon.",
          score: 10,
          result: "strong",
          explanation:
            "This provides specific sources, names the methodology, and offers to share the detailed documentation. It is precisely what an analytical communicator needs to move forward.",
        },
        {
          id: "scenario-19-b",
          text: "The benchmarks come from industry reports. I can dig out the specific sources and send them over. The core point is that we are confident the investment will pay off based on past performance.",
          score: 5,
          result: "partial",
          explanation:
            "This promises to provide sources but relies on confidence rather than evidence. Rachel does not want to hear 'we are confident'; she wants to see the data that justifies the confidence.",
        },
        {
          id: "scenario-19-c",
          text: "The marketing team has a strong track record and we are confident this will deliver. Sometimes you just have to trust the team's expertise and move forward.",
          score: 0,
          result: "weak",
          explanation:
            "Asking an analytical communicator to 'just trust' is one of the worst approaches possible. Rachel needs evidence, not appeals to faith or expertise.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel has asked for the evidence and methodology behind your marketing budget proposal. Write a response that satisfies her analytical communication style.",
      targetTraits: [
        "specific-detail",
        "structured",
        "evidence-based",
        "avoids-vague",
      ],
      exampleStrongResponse:
        "Good question, Rachel. The projection is built on three pillars: first, our own conversion data from the past 24 months, which shows an average cost per lead of 42 pounds; second, IPA sector benchmarks indicating that brands in our category see a 3.2x return on incremental marketing spend; and third, a regression model we ran against historical data. I will send you the full methodology document and source references by end of day so you can review it at your own pace.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. You provided specific data points, structured your response clearly, and offered to share the full documentation. That is exactly how to build credibility with an analytical communicator.",
          observation:
            "Your response treated Rachel's challenge as a legitimate quality check rather than an obstacle. That approach builds trust and respect with analytical communicators.",
          coachingTip:
            "With analytical communicators, specificity is everything. Concrete numbers, named sources, and structured reasoning are far more persuasive than enthusiasm or confidence.",
          styleContext:
            "Analytical communicators evaluate proposals on the strength of the evidence, not the conviction of the presenter. Lead with data and they will engage constructively.",
        },
        partial: {
          result: "partial",
          explanation:
            "You included some useful elements, but your response could benefit from more specific data points or a clearer structure. Analytical communicators want precision, not summaries.",
          observation:
            "Check whether your response included concrete numbers, named sources, or a structured format. Generic references to 'data' or 'evidence' are not enough.",
          coachingTip:
            "Try structuring your response with numbered points and including at least one specific data point. That signals rigour to an analytical communicator.",
          styleContext:
            "Analytical communicators can tell the difference between genuine evidence and hand-waving. Be specific, or be transparent about what you still need to verify.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response may have relied on confidence, trust, or generalisation rather than evidence. Analytical communicators will not accept 'trust me' as a substitute for data.",
          observation:
            "If your response lacked specific numbers, named sources, or a clear structure, it will have undermined your credibility with Rachel.",
          coachingTip:
            "Never ask an analytical communicator to take something on faith. If you do not have the data to hand, say so honestly and commit to providing it by a specific time.",
          styleContext:
            "Analytical communicators respect honesty about gaps in evidence far more than they respect confident bluster. If the data is incomplete, say so and commit to filling the gaps.",
        },
      },
    },
  },

  {
    id: "scenario-20",
    title: "Process Improvement Proposal",
    context:
      "You have suggested a new workflow to streamline the quarterly reporting process. Rachel has reviewed your proposal and has questions.",
    chooseContext:
      "Rachel has mapped out three specific failure scenarios for your proposal: late data submissions, format mismatches, and missing sign-offs. She wants to know whether you have built contingencies for each one.",
    rewriteContext:
      "Rachel is supportive of the idea but needs the exception-handling documented before she can endorse it. She wants to see how the workflow responds when things do not go to plan.",
    characterId: "rachel-finch",
    dialogue:
      "The concept makes sense, but I need to understand the detail. How does this handle exceptions? What happens when a data source is late? I cannot sign off on something that does not account for edge cases.",
    chooseDialogue:
      "I have mapped out three scenarios where the current proposal would fail: late data from regional offices, format mismatches from the new ERP system, and missing sign-offs when approvers are on leave. Have you built contingencies for those?",
    rewriteDialogue:
      "I want to support this, but I need to see the exception-handling documented before I can. If you can show me how the workflow responds when things do not go to plan, I will be able to give you a proper recommendation.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "email",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Which communication style is Rachel demonstrating with her response to the proposal?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Exactly right. Rachel is drilling into edge cases and exception handling. Her need to understand every scenario before committing is a hallmark of the analytical style.",
          observation:
            "Rachel is not rejecting the idea. She is stress-testing it, which is how analytical communicators show engagement. They probe because they care about getting it right.",
          coachingTip:
            "When an analytical communicator asks about edge cases, they are actually signalling interest. They would not invest the effort if they did not see potential in the idea.",
          styleContext:
            "Analytical communicators see comprehensive planning as a sign of quality. If your proposal does not address edge cases, they will assume it has not been thought through properly.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Rachel is assertive, which might look direct, but her questions are about thoroughness and detail rather than speed or outcomes.",
          observation:
            "A direct communicator would say 'Does this save time? Let us do it.' Rachel wants to understand every possible scenario first.",
          coachingTip:
            "If the pushback is about edge cases, exceptions, and thoroughness, the style is analytical. Direct communicators care more about results than process detail.",
          styleContext:
            "Analytical communicators need to feel confident that a process has been thoroughly tested before they will endorse it. Gaps in planning are deal-breakers.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not this time. Rachel is not concerned about relationships or team morale. Her focus is entirely on the rigour and completeness of the proposed process.",
          observation:
            "A supportive communicator would ask 'How will this affect the team?' Rachel is asking 'How does this handle exceptions?'",
          coachingTip:
            "When the conversation centres on edge cases, exceptions, and process detail, you are engaging with an analytical communicator.",
          styleContext:
            "Analytical communicators evaluate proposals by looking for gaps and weaknesses. It is not criticism; it is quality assurance.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel wants to understand how your new workflow handles edge cases and exceptions. Which response is most appropriate for her analytical style?",
      options: [
        {
          id: "scenario-20-a",
          text: "Good questions, Rachel. I have mapped three exception scenarios: late submissions, format inconsistencies, and missing approvals, each with a defined escalation path. I will send you the full matrix to review.",
          score: 10,
          result: "strong",
          explanation:
            "This directly addresses Rachel's concerns with specific categories, a structured approach, and an invitation to review. It demonstrates the thoroughness she is looking for.",
        },
        {
          id: "scenario-20-b",
          text: "I have thought about exceptions but have not documented them all yet. The general approach would be to escalate to the team lead. I can flesh out the detail and send it over.",
          score: 5,
          result: "partial",
          explanation:
            "This is honest about the gap, which Rachel will appreciate, but the vague 'general approach' and lack of structure will not satisfy her need for rigour. She needs specifics.",
        },
        {
          id: "scenario-20-c",
          text: "We can work through the edge cases as they come up. The core process is solid and I think we should get started and refine as we go.",
          score: 0,
          result: "weak",
          explanation:
            "Suggesting 'we will figure it out as we go' is deeply unsatisfying for an analytical communicator. Rachel will see this as a lack of planning and will not support the proposal.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel has asked how your proposed workflow handles exceptions and edge cases. Write a response that demonstrates the rigour and detail she expects.",
      targetTraits: [
        "specific-detail",
        "structured",
        "evidence-based",
        "avoids-vague",
      ],
      exampleStrongResponse:
        "I have built exception handling into the workflow at three key points. First, late data submissions trigger an automated reminder at 48 hours before deadline, with escalation to the team lead at 24 hours. Second, format inconsistencies are caught by a validation check before the data enters the consolidation template. Third, missing approvals generate an audit flag and pause that section of the report until resolved. I will share the full exception matrix with you so you can review it and identify any scenarios I may have missed.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Outstanding. You provided a structured, detailed response that addressed specific exception categories with defined processes. That is exactly the level of rigour Rachel expects.",
          observation:
            "Your response showed that you have thought through the edge cases systematically rather than hoping to deal with them reactively.",
          coachingTip:
            "Analytical communicators are reassured by evidence of thorough planning. Structured responses with specific scenarios demonstrate exactly that.",
          styleContext:
            "When an analytical communicator sees that you have anticipated their questions, it builds significant credibility. They trust people who think as thoroughly as they do.",
        },
        partial: {
          result: "partial",
          explanation:
            "You addressed some of Rachel's concerns, but your response could benefit from more structure or more specific detail. Analytical communicators want to see the full picture.",
          observation:
            "Check whether your response included specific scenarios with defined processes, or whether it stayed at a high level.",
          coachingTip:
            "Try breaking your response into numbered points with specific scenarios and defined actions. That structure signals thoroughness to an analytical communicator.",
          styleContext:
            "Analytical communicators do not just want to know that you have thought about exceptions; they want to see exactly how each exception is handled.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response may have been too vague or too reliant on reactive problem-solving. Rachel needs to see a proactive, structured plan for handling exceptions.",
          observation:
            "If your response included phrases like 'we can deal with those as they come up' or 'it should be fine', it will have completely missed Rachel's expectations.",
          coachingTip:
            "Never suggest winging it to an analytical communicator. If you have not planned for exceptions, be honest about the gap and commit to documenting them before launch.",
          styleContext:
            "Analytical communicators see unplanned exceptions as a sign of poor quality. Address them proactively to maintain their confidence in your proposal.",
        },
      },
    },
  },

  // --- Owen Grant (analytical) x2 ---
  {
    id: "scenario-21",
    title: "Software Testing Shortcut",
    context:
      "Your team is under pressure to release a software update ahead of schedule. You have suggested reducing the testing window. Owen has concerns.",
    chooseContext:
      "Owen has analysed the historical defect data and can show that cutting the testing window would likely result in six to eight critical bugs reaching production, at three times the cost to fix post-release.",
    rewriteContext:
      "Owen has prepared a side-by-side comparison of full versus compressed testing. The data clearly favours keeping the full window, and he is suggesting you look at reducing scope instead of cutting quality.",
    characterId: "owen-grant",
    dialogue:
      "I understand the deadline pressure, but cutting the testing window from five days to two is a significant risk. In the last three releases, we found 40% of critical bugs in days three to five. Reducing that window means we are knowingly shipping with a higher defect rate.",
    chooseDialogue:
      "I have run the numbers on this. If we ship with two days of testing, based on historical data, we are looking at roughly six to eight critical defects reaching production. The cost of fixing those post-release is typically three times higher than catching them in testing.",
    rewriteDialogue:
      "I have put together a comparison of the two options: full testing window versus compressed. The data is clear. I would rather find a way to meet the deadline without compromising quality. Can we look at the scope instead?",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "team",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "What communication style is Owen demonstrating in his response?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen supports his argument with specific data from past releases and quantifies the risk. His approach is evidence-based and methodical, which is classic analytical.",
          observation:
            "Owen does not just say 'this feels risky'. He provides a specific percentage from historical data to support his position. That is the analytical difference.",
          coachingTip:
            "Analytical communicators back their positions with evidence. When they cite specific data, they are telling you they have already done the analysis.",
          styleContext:
            "Analytical communicators are most persuasive when they can point to data. They are also most frustrated when data is ignored in favour of gut instinct or deadline pressure.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen is assertive, which can look direct, but his argument is built on data and risk analysis rather than a desire for speed or decisive action.",
          observation:
            "A direct communicator would say 'We should not cut testing. End of discussion.' Owen builds a data-backed case instead.",
          coachingTip:
            "If the pushback includes specific data points, percentages, or historical evidence, the style is analytical rather than direct.",
          styleContext:
            "Analytical and direct communicators can both be firm, but analytical communicators always show their working. Direct communicators state their position and move on.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not this time. Owen is not focused on team morale or relationships. His argument is built entirely on evidence and risk quantification.",
          observation:
            "A supportive communicator would worry about team stress. An expressive communicator would talk about ambition. Owen is talking about defect rates and data.",
          coachingTip:
            "When someone cites specific statistics to support their position, you are almost certainly dealing with an analytical communicator.",
          styleContext:
            "Analytical communicators use data as their primary tool of persuasion. Respond with data and logic, not with appeals to urgency or team spirit.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen has used historical data to argue against cutting the testing window. Which response best suits his analytical communication style?",
      options: [
        {
          id: "scenario-21-a",
          text: "That is a compelling data point, Owen. If 40% of critical bugs surface in days three to five, cutting them is a measurable risk. Could we automate the earlier test cycles to free up time for those later stages?",
          score: 10,
          result: "strong",
          explanation:
            "This acknowledges the data, references the specific finding, and proposes a structured alternative that addresses both the deadline and the quality concern. It speaks Owen's language perfectly.",
        },
        {
          id: "scenario-21-b",
          text: "I take your point, Owen. Testing is important. Let me speak to the project sponsor about extending the deadline by a day or two and see if that gives us enough buffer.",
          score: 5,
          result: "partial",
          explanation:
            "This acknowledges the concern but does not engage with Owen's data. He presented specific evidence and the response does not reference it. A vague 'day or two' also lacks the precision he values.",
        },
        {
          id: "scenario-21-c",
          text: "I appreciate the thoroughness, Owen, but we are under real pressure from the client. Sometimes we need to accept a reasonable level of risk and move forward. We can patch any issues after release.",
          score: 0,
          result: "weak",
          explanation:
            "Asking an analytical communicator to accept risk without addressing their data-backed concerns is deeply frustrating for them. 'Patch after release' suggests a cavalier attitude to quality.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen has presented data showing that cutting the testing window increases the defect rate. Write a response that engages with his analytical communication style.",
      targetTraits: [
        "specific-detail",
        "structured",
        "evidence-based",
        "avoids-vague",
      ],
      exampleStrongResponse:
        "You are right to flag that, Owen. The 40% figure from the last three releases is significant and we should not ignore it. I suggest we look at this from two angles: first, can we automate the regression tests in days one and two to reduce the manual workload and free up time for exploratory testing in days three to five? Second, can we run a risk assessment on the specific modules being updated to determine whether a targeted testing approach gives us adequate coverage within the compressed window? I would like your input on both before we make a final call.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Superb. You engaged directly with Owen's data, proposed a structured analysis, and invited his expert input. That is exactly how to build credibility and partnership with an analytical communicator.",
          observation:
            "Your response showed that you took the data seriously and are willing to apply the same level of rigour that Owen expects.",
          coachingTip:
            "With analytical communicators, always reference their data when responding. It shows that you have listened and that you value evidence-based decision-making.",
          styleContext:
            "Analytical communicators are most collaborative when they feel their evidence is taken seriously. Engaging with their data opens the door to productive problem-solving.",
        },
        partial: {
          result: "partial",
          explanation:
            "You made some positive moves, but your response could engage more directly with Owen's specific data point or offer a more structured alternative.",
          observation:
            "Check whether you referenced the 40% figure or the historical evidence. Analytical communicators need to see that their data has been received and considered.",
          coachingTip:
            "When responding to an analytical communicator, try to reference their specific data and then build your proposal on top of it. That creates a logical thread they can follow.",
          styleContext:
            "Analytical communicators are reassured when they see their data reflected back in the response. It confirms that the conversation is operating at the level of rigour they expect.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response may have dismissed or ignored Owen's evidence. Analytical communicators will lose confidence in you if their data is not addressed.",
          observation:
            "If your response focused on urgency, client pressure, or general reassurance without engaging with the specific numbers, it will have missed the mark entirely.",
          coachingTip:
            "Never dismiss an analytical communicator's data without presenting counter-evidence. If you disagree, bring your own numbers to the conversation.",
          styleContext:
            "Analytical communicators interpret the dismissal of evidence as either laziness or incompetence. Always engage with their data, even if you ultimately disagree with their conclusion.",
        },
      },
    },
  },

  {
    id: "scenario-22",
    title: "Vendor Evaluation",
    context:
      "You are evaluating two software vendors and need to present a recommendation to the leadership team. Owen has been reviewing both proposals.",
    chooseContext:
      "Owen has spotted that the cost comparison does not include implementation and migration expenses. He wants to know whether those figures are in your model or sitting separately, because they change the five-year total.",
    rewriteContext:
      "Owen wants to ensure the comparison is like for like. He is asking you to share the weighting rationale and full cost model so he can reconcile it with his own evaluation and reach a defensible joint recommendation.",
    characterId: "owen-grant",
    dialogue:
      "I have scored both vendors against our 14-point evaluation matrix. Vendor A scores higher on security and integration, but Vendor B has a lower total cost of ownership over five years. I need to understand how you weighted the criteria before I can align with a recommendation.",
    chooseDialogue:
      "I have also noticed that the cost comparison does not account for implementation and migration expenses. Once you factor those in, the five-year total shifts. Are those included in your figures or are they sitting separately?",
    rewriteDialogue:
      "I want to make sure we are comparing like for like. If you can share the weighting rationale and the full cost model, I can reconcile it with my evaluation and we should be able to reach a defensible recommendation together.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "sales",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Which communication style is Owen showing in his approach to the vendor evaluation?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Exactly. Owen has created a structured evaluation matrix, scored both vendors against it, and is now asking about the weighting methodology. This is analytical communication at its most characteristic.",
          observation:
            "Owen is not asking for a gut feeling or a quick recommendation. He wants to understand the decision-making framework so he can verify the logic.",
          coachingTip:
            "When someone brings a structured scoring system to a conversation and asks about methodology, they are deeply analytical. Match their rigour in your response.",
          styleContext:
            "Analytical communicators often create their own frameworks for evaluation. When they share those frameworks, they are inviting you to engage at their level of detail.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Owen is decisive in his request, which can look direct, but his focus is on the methodology and the structured evaluation rather than on making a fast decision.",
          observation:
            "A direct communicator would say 'Which one do you recommend and why?' Owen wants to understand the weighting criteria before he engages with the recommendation.",
          coachingTip:
            "If someone is focused on evaluation frameworks, scoring matrices, and methodological transparency, the style is analytical.",
          styleContext:
            "Analytical communicators want to understand the decision-making process, not just the outcome. They need to verify the logic before they can commit.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not this time. Owen's approach is entirely data-driven and structured. He is not concerned with relationships or team sentiment in this context.",
          observation:
            "A supportive communicator might ask about the vendor's customer service culture. Owen is asking about scoring matrices and weighting criteria.",
          coachingTip:
            "When the conversation includes scoring matrices, evaluation criteria, and questions about methodology, you are firmly in analytical territory.",
          styleContext:
            "Analytical communicators bring structure and rigour to evaluation processes. They see unstructured decision-making as a risk.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen wants to understand how you weighted the evaluation criteria before aligning with a recommendation. Which response suits his analytical style?",
      options: [
        {
          id: "scenario-22-a",
          text: "The weighting used paired comparison: security and compliance at 25% each, integration at 20%, total cost of ownership at 20%, and vendor stability at 10%. I can share the rationale document.",
          score: 10,
          result: "strong",
          explanation:
            "This provides the exact methodology, specific percentages, and offers the supporting documentation. It matches Owen's analytical needs perfectly.",
        },
        {
          id: "scenario-22-b",
          text: "We weighted them based on what the project board felt was most important. Security was the top priority, followed by cost. I can talk you through the rationale if you like.",
          score: 5,
          result: "partial",
          explanation:
            "This gives a general sense of the priorities but lacks specific percentages and methodology. Phrases like 'what the board felt' sound subjective rather than structured, which will concern Owen.",
        },
        {
          id: "scenario-22-c",
          text: "Honestly, Owen, both vendors are strong. The team has a good feeling about Vendor A based on the demo. I think we should go with our instinct on this one.",
          score: 0,
          result: "weak",
          explanation:
            "Recommending a vendor based on 'instinct' and 'a good feeling' is the worst possible approach for an analytical communicator. Owen has invested effort in structured analysis and this response dismisses it entirely.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen wants to understand the weighting methodology behind your vendor evaluation. Write a response that provides the structured, evidence-based detail he expects.",
      targetTraits: [
        "specific-detail",
        "structured",
        "evidence-based",
        "avoids-vague",
      ],
      exampleStrongResponse:
        "The weighting was developed using a paired comparison approach with the project board. The final breakdown is: security compliance 25%, data integration capability 20%, total cost of ownership over five years 20%, platform scalability 15%, vendor financial stability 10%, and implementation timeline 10%. I will send you the weighting rationale document and the raw scoring data so you can verify the results against your own 14-point matrix.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. You provided specific percentages, named the methodology, and offered to share the raw data. That level of transparency and rigour is exactly what Owen needs.",
          observation:
            "Your response demonstrated that the weighting was systematic rather than arbitrary, which gives Owen the confidence to engage with the recommendation.",
          coachingTip:
            "With analytical communicators, always show your working. They are far more likely to support a recommendation when they can verify the logic behind it.",
          styleContext:
            "Analytical communicators trust processes that are transparent and methodical. When you share the full methodology, you are inviting their collaboration rather than asking for blind faith.",
        },
        partial: {
          result: "partial",
          explanation:
            "You included some useful detail, but your response could be more specific about the weighting percentages or the methodology used to derive them.",
          observation:
            "Check whether your response included concrete numbers and a named methodology, or whether it stayed at a descriptive level.",
          coachingTip:
            "Try including specific percentages and explaining how they were derived. Analytical communicators want to see the numbers, not just a summary of the approach.",
          styleContext:
            "Analytical communicators distinguish between structured processes and opinions dressed up as processes. Be precise to demonstrate genuine rigour.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response may have been too vague or too reliant on subjective judgement. Owen needs specific data and a transparent methodology, not general descriptions.",
          observation:
            "If your response lacked specific numbers, a named methodology, or an offer to share the raw data, it will not have met Owen's expectations.",
          coachingTip:
            "Avoid phrases like 'we felt', 'the general view was', or 'broadly speaking'. Replace them with specific data points and named methods.",
          styleContext:
            "Analytical communicators interpret vagueness as a sign that the work has not been done properly. Specificity signals competence and builds trust.",
        },
      },
    },
  },

  // --- Fiona Banks (analytical) x2 ---
  {
    id: "scenario-23",
    title: "Budget Reforecast",
    context:
      "You are presenting a mid-year budget reforecast to the finance team. Fiona has spotted some inconsistencies in your revenue projections.",
    chooseContext:
      "Fiona has cross-referenced your projection against last quarter's actuals and found a pattern of overestimation. She is concerned that the assumptions need tightening before the numbers go to the board.",
    rewriteContext:
      "Fiona is not trying to undermine the forecast but she needs to be able to defend every number to the board. She is asking you to walk her through exactly where the additional five percent sits so she can build the right narrative.",
    characterId: "fiona-banks",
    dialogue:
      "The Q3 revenue projection shows a 12% increase, but the pipeline report from last week only supports 7% growth. Where is the additional 5% coming from? I need to see the assumptions before this goes to the board.",
    chooseDialogue:
      "I have also cross-referenced the projection against last quarter's actuals. We overestimated by 3% in Q2 as well, so there is a pattern here. If the assumptions are not tightened up, we risk presenting inflated numbers to the board again.",
    rewriteDialogue:
      "I am not trying to undermine the forecast. But if I am going to present this to the board, I need to be able to defend every number. Show me where the additional 5% sits and I will work with you to get the narrative right.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "feedback",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "What communication style is Fiona displaying in her challenge to the reforecast?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona has identified a specific numerical inconsistency and is demanding to see the underlying assumptions. Her approach is precise, evidence-based, and methodical.",
          observation:
            "Fiona does not just say 'this does not look right'. She pinpoints the exact discrepancy: 12% versus 7%, and asks where the missing 5% comes from. That is analytical precision.",
          coachingTip:
            "When someone identifies a specific numerical gap and asks for the assumptions behind it, they are operating in full analytical mode. Match their precision in your response.",
          styleContext:
            "Analytical communicators, particularly in finance, will always cross-reference numbers against supporting data. Inconsistencies are red flags that must be resolved before they will endorse anything.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is assertive and direct in her challenge, but the core of her concern is about data accuracy and assumptions, which is analytical rather than direct.",
          observation:
            "A direct communicator would ask 'Is this number right? Fix it.' Fiona wants to understand the underlying assumptions that produced the number.",
          coachingTip:
            "If the challenge is about tracing a number back to its source data and validating the assumptions, the style is analytical.",
          styleContext:
            "Analytical and direct styles can both be forceful, but analytical communicators focus on the integrity of the data while direct communicators focus on the speed of the decision.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not this time. Fiona is entirely focused on numerical accuracy and data integrity. Her concern is not about people or team impact.",
          observation:
            "A supportive communicator would ask about the impact on the team. An expressive communicator would talk about ambition. Fiona is cross-referencing data points.",
          coachingTip:
            "When someone cross-references your numbers against other data sources and asks for specific assumptions, they are analytical communicators. Respond with precision.",
          styleContext:
            "Analytical communicators in finance roles are gatekeepers of accuracy. Their challenges are not personal; they are protecting the integrity of the information that goes to the board.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Fiona has identified a 5% gap between your revenue projection and the pipeline data. Which response best suits her analytical communication style?",
      options: [
        {
          id: "scenario-23-a",
          text: "Good catch, Fiona. The 5% gap is two components: 3% from a verbally confirmed renewal not yet in the system, and 2% from a pricing adjustment effective August. I can provide the supporting documentation.",
          score: 10,
          result: "strong",
          explanation:
            "This breaks down the gap into specific, verifiable components and offers supporting documentation. It is precisely the level of detail and transparency Fiona requires.",
        },
        {
          id: "scenario-23-b",
          text: "The gap is largely due to some deals that are close to closing but not yet reflected in the pipeline. I am confident they will land. I can give you more detail once the contracts are signed.",
          score: 5,
          result: "partial",
          explanation:
            "This explains the general source of the gap but lacks specific detail. Fiona does not want to wait for contracts to be signed; she wants to verify the assumptions now, before the numbers go to the board.",
        },
        {
          id: "scenario-23-c",
          text: "The sales team is very confident about Q3. We have strong momentum and the pipeline is healthy. I think we will comfortably hit the 12% figure.",
          score: 0,
          result: "weak",
          explanation:
            "Responding to a specific data question with confidence and optimism is exactly the wrong approach for an analytical communicator. Fiona wants evidence, not enthusiasm.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona has identified a 5% gap in your revenue projection and wants to see the assumptions. Write a response that demonstrates the analytical rigour she expects.",
      targetTraits: [
        "specific-detail",
        "structured",
        "evidence-based",
        "avoids-vague",
      ],
      exampleStrongResponse:
        "Good catch, Fiona. The 5% gap breaks down as follows: 3% relates to a contract renewal with Apex Corp, which was verbally confirmed on the 4th and is expected to be signed by end of month. The remaining 2% comes from a pricing uplift across our existing enterprise accounts, effective from the 1st of August, based on the annual review completed in May. I will forward you the confirmation email from Apex and the pricing schedule so you can validate both against the pipeline report before this goes to the board.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Outstanding. You broke down the gap into specific, verifiable components with dates, names, and documentary evidence. That is exactly the level of rigour Fiona demands.",
          observation:
            "Your response showed that the gap is not a guess but is based on identifiable, traceable sources. That is how you build credibility with analytical communicators in finance.",
          coachingTip:
            "With analytical communicators, every number should be traceable to a source. If you can name the client, the date, and the document, you will earn their confidence.",
          styleContext:
            "Analytical communicators in finance will not present numbers to the board unless they can defend every assumption. Help them by providing the evidence trail.",
        },
        partial: {
          result: "partial",
          explanation:
            "You addressed the gap, but your response could include more specific detail: client names, dates, or documentary evidence that Fiona can verify independently.",
          observation:
            "Check whether your response included enough specificity for Fiona to cross-reference against her own data.",
          coachingTip:
            "Try naming specific sources, dates, or amounts. The more specific and verifiable your response, the more confidence an analytical communicator will have in it.",
          styleContext:
            "Analytical communicators do not just want to understand the gap. They want to be able to verify your explanation independently using their own data sources.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response may have relied on confidence or general assurance rather than specific, verifiable detail. Fiona needs evidence, not optimism.",
          observation:
            "If your response included phrases like 'we are confident', 'the pipeline is strong', or 'it should be fine', it will have failed to address Fiona's specific concern.",
          coachingTip:
            "Replace confidence with evidence. Instead of 'we are confident the deals will land', say 'the Apex renewal was verbally confirmed on [date] and is expected to sign by [date]'.",
          styleContext:
            "Analytical communicators interpret unsubstantiated confidence as a warning sign. If you cannot provide evidence, be transparent about the uncertainty instead.",
        },
      },
    },
  },

  {
    id: "scenario-24",
    title: "Risk Assessment Disagreement",
    context:
      "Your team has rated a project risk as 'low' in the quarterly risk register. Fiona disagrees with the rating and wants to discuss it in the one-to-one review.",
    chooseContext:
      "Fiona has modelled the downside scenario and calculated that a further two percent currency weakening with current hedging levels would leave roughly three million in unhedged exposure. She does not consider that a low risk.",
    rewriteContext:
      "Fiona has prepared a one-page summary showing current exposure, hedge coverage, and three currency scenarios. She believes once you see the data laid out, you will agree the risk rating needs to be upgraded.",
    characterId: "fiona-banks",
    dialogue:
      "I have reviewed the risk register and I do not agree with the 'low' rating on the currency exposure item. The pound has moved 4% against the euro in the last quarter, and our hedging only covers 60% of the exposure. That leaves a material unhedged position that should be rated 'medium' at minimum.",
    chooseDialogue:
      "I have modelled the downside scenario. If the pound weakens another 2% and our hedging stays at 60%, the unhedged exposure increases to roughly 3 million. That is not a 'low' risk by any definition in our framework.",
    rewriteDialogue:
      "I have put together a one-page summary showing the current exposure, the hedge coverage, and what the position looks like under three different currency scenarios. I think once you see it laid out, you will agree the rating needs to move.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "one-to-one",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Which communication style is Fiona demonstrating in her challenge to the risk rating?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona builds her case with specific data: the 4% currency movement, the 60% hedging coverage, and the resulting material exposure. Her challenge is entirely evidence-based.",
          observation:
            "Fiona does not just say 'I disagree'. She presents a structured argument with specific data points that support her alternative assessment.",
          coachingTip:
            "When an analytical communicator disagrees, they always bring evidence. Engage with their data directly rather than dismissing it or appealing to consensus.",
          styleContext:
            "Analytical communicators see risk assessment as a data exercise, not a judgement call. If the data supports a different rating, they will push for accuracy.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is assertive, which can look direct, but her argument is built on specific data and evidence rather than a desire for fast action.",
          observation:
            "A direct communicator would say 'Change the rating. It is wrong.' Fiona presents the evidence and explains why the rating should change.",
          coachingTip:
            "If the disagreement is supported by specific data and a logical argument, the style is analytical. Direct communicators state their position without detailed justification.",
          styleContext:
            "Analytical communicators invest time in building evidence-based arguments. When they challenge your assessment, they expect you to engage with the evidence, not just the conclusion.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not this time. Fiona's concern is purely about data accuracy and risk quantification. She is not focused on team dynamics or creative solutions.",
          observation:
            "A supportive communicator might worry about how the risk affects the team. Fiona is focused on whether the rating accurately reflects the data.",
          coachingTip:
            "When the disagreement centres on specific numbers, percentages, and quantified exposure, you are engaging with an analytical communicator.",
          styleContext:
            "Analytical communicators value accuracy above comfort. They will challenge a risk rating even if it means more work, because getting it wrong is a bigger concern than getting along.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Fiona has challenged your risk rating with specific data about currency exposure and hedging coverage. Which response best suits her analytical style?",
      options: [
        {
          id: "scenario-24-a",
          text: "Well-evidenced, Fiona. The 4% movement with only 60% hedging cover does leave a significant unhedged position. I agree we should reclassify to 'medium' and I will update the register. Would you review it for accuracy?",
          score: 10,
          result: "strong",
          explanation:
            "This acknowledges the data, agrees with the evidence-based conclusion, and invites Fiona to verify the updated assessment. It demonstrates respect for her analytical approach.",
        },
        {
          id: "scenario-24-b",
          text: "I see your point, Fiona. I will take another look at the rating and consider bumping it up. I will update you once I have had a chance to review it.",
          score: 5,
          result: "partial",
          explanation:
            "This acknowledges the concern but is too vague. Phrases like 'take another look' and 'consider bumping it up' lack the decisiveness and precision Fiona expects when she has presented clear evidence.",
        },
        {
          id: "scenario-24-c",
          text: "The risk committee reviewed it and were comfortable with 'low'. Currency fluctuations are normal and I do not think we need to overreact to a single quarter's movement.",
          score: 0,
          result: "weak",
          explanation:
            "Dismissing specific data by appealing to committee comfort and characterising the concern as an 'overreaction' is deeply frustrating for an analytical communicator. Fiona presented evidence; she expects a data-based response.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona has challenged your risk rating with specific evidence about currency exposure. Write a response that engages with her analytical communication style.",
      targetTraits: [
        "specific-detail",
        "structured",
        "evidence-based",
        "avoids-vague",
      ],
      exampleStrongResponse:
        "You make a strong case, Fiona. Looking at the data, the 4% movement against the euro with only 60% hedging coverage does leave a material unhedged position of approximately 2.4 million pounds based on our current euro-denominated commitments. I agree that warrants a 'medium' rating. I will update the risk register today with the revised rating, the supporting data, and a note to review our hedging strategy at the next treasury meeting. I would appreciate your input on whether we should extend the hedge to 80% for Q4.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Superb. You engaged directly with the data, quantified the exposure, agreed with the evidence-based conclusion, and proposed a structured next step. That is a masterclass in communicating with an analytical style.",
          observation:
            "Your response showed that you can operate at Fiona's level of detail and that you respect evidence-based decision-making. That builds significant trust.",
          coachingTip:
            "With analytical communicators, engaging with their data at the same level of detail signals competence and respect. It transforms a challenge into a collaboration.",
          styleContext:
            "Analytical communicators are most collaborative when they see that their evidence is taken seriously and acted upon. Engaging with the numbers opens the door to genuine partnership.",
        },
        partial: {
          result: "partial",
          explanation:
            "You engaged with Fiona's concern, but your response could include more specific detail or a clearer structure. Analytical communicators expect precision in response to precision.",
          observation:
            "Check whether your response included specific numbers, a clear conclusion, and a defined next step. All three are important for an analytical communicator.",
          coachingTip:
            "When responding to an analytical challenge, try to match the specificity of the challenge. If they cite percentages, respond with percentages.",
          styleContext:
            "Analytical communicators judge your response by whether it meets the same standard of rigour as their own analysis. Aim to match or exceed their level of detail.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your response may have been too vague, too dismissive, or too reliant on consensus rather than evidence. Fiona presented data and expects a data-driven response.",
          observation:
            "If your response appealed to committee decisions, general comfort, or characterised the concern as an overreaction, it will have damaged your credibility with Fiona.",
          coachingTip:
            "Never dismiss an analytical communicator's data-backed challenge without presenting counter-evidence of equal rigour. If you agree, say so clearly and act on it.",
          styleContext:
            "Analytical communicators respect intellectual honesty. If the data supports their position, acknowledge it directly rather than deflecting or hedging.",
        },
      },
    },
  },
];
