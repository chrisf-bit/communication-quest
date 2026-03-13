import { Scenario } from "@/types";

export const SCENARIOS_PART3: Scenario[] = [
  // ============================================
  // DIRECT STYLE SCENARIOS (25-27)
  // ============================================

  // Scenario 25 - Sam Hartley, presentation, foundation
  {
    id: "scenario-25",
    title: "Straight to the Slide",
    context:
      "You are attending a quarterly stakeholder presentation. The presenter has been walking through detailed background slides for ten minutes. Sam Hartley stands up and interrupts.",
    chooseContext:
      "Sam has taken control of the room and is now looking directly at you. The stakeholders are waiting for your department's update, and Sam wants you to deliver it on the spot.",
    rewriteContext:
      "Sam has asked you to send a follow-up email to the stakeholder group summarising your department's position. He has made it clear he wants brevity.",
    characterId: "sam-hartley",
    dialogue:
      "Stop. We're twenty slides in and I still don't know what we're asking for. Skip to the recommendation slide and tell me what you need from this group.",
    chooseDialogue:
      "Your turn. You've got two minutes to tell this room what your team needs and by when. Go.",
    rewriteDialogue:
      "Send the summary to the group by end of day. One page. No background. Just the ask, the number, and the deadline.",
    targetStyle: "direct",
    difficulty: "foundation",
    category: "meeting",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Sam has interrupted the presenter to demand they skip to the recommendation. Which communication style is Sam displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Exactly right. Sam's interruption, demand for brevity, and focus on the bottom line are hallmarks of a direct communicator.",
          observation:
            "Notice how Sam did not ask for more detail or data - he asked for the recommendation and the ask. That is pure outcome focus.",
          coachingTip:
            "When someone cuts through a presentation to demand the conclusion, you are almost certainly dealing with a direct communicator.",
          styleContext:
            "Direct communicators see lengthy presentations as wasted time. They want to know the decision point and move on.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close, but not quite. An analytical communicator might also be frustrated by a poorly structured presentation, but they would ask for more data or evidence, not skip straight to the recommendation.",
          observation:
            "Sam is not asking for better analysis - he is asking for less content and faster decisions.",
          coachingTip:
            "The key difference: direct communicators want speed and outcomes. Analytical communicators want depth and accuracy. Sam clearly wants speed.",
          styleContext:
            "Both direct and analytical styles are task-focused, but they differ in pace. Direct pushes for quick conclusions; analytical pushes for thorough evidence.",
        },
        weak: {
          result: "weak",
          explanation:
            "That is not a match. Sam showed no interest in relationships, feelings, or team harmony. His entire focus was on getting to the point faster.",
          observation:
            "There was no warmth, no concern for the presenter's feelings, and no attempt to build consensus. This is task-driven behaviour.",
          coachingTip:
            "Ask yourself: is this person focused on results, ideas, people, or accuracy? Sam is clearly focused on results.",
          styleContext:
            "Direct communicators prioritise efficiency above all else. They can seem abrupt, but their goal is momentum, not confrontation.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Sam has given you two minutes to present your department's needs to the room. How do you respond?",
      options: [
        {
          id: "s25-opt-a",
          text: "We need approval for a 15% budget increase to the platform migration. The cost is 240K. If approved today, we deliver by September. If delayed, we slip into next financial year.",
          score: 10,
          result: "strong",
          explanation:
            "Concise, specific, and structured around a clear ask with a deadline. This is exactly how a direct communicator wants to receive information.",
        },
        {
          id: "s25-opt-b",
          text: "Thanks, Sam. So we've been looking at a few different approaches to the platform work, and there are some interesting trade-offs to consider. I'll try to keep it brief.",
          score: 5,
          result: "partial",
          explanation:
            "This opens with preamble and hedging rather than the ask. Sam gave you two minutes and you are spending them on warm-up. Get to the number faster.",
        },
        {
          id: "s25-opt-c",
          text: "I'd actually prefer to take the group through the full context so everyone understands the reasoning behind our request. I think that's fairer to the team.",
          score: 0,
          result: "weak",
          explanation:
            "This directly contradicts Sam's instruction for brevity. It prioritises inclusiveness over efficiency, which will frustrate a direct communicator.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Sam has asked you to send a one-page summary email to stakeholders. Write the email body in a style that matches Sam's direct communication preferences. Lead with the ask, include the number, and state the deadline.",
      targetTraits: ["concise", "action-oriented", "outcome-led", "no-hedging"],
      exampleStrongResponse:
        "Subject: Platform Migration - Approval Required. We need approval for a 240K budget increase to complete the platform migration. Deadline for approval: Friday 14th. If approved, we deliver by September. If delayed, the project rolls into next FY. Please confirm your position by end of week.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Your email is sharp and action-oriented. The ask is clear, the number is visible, and the deadline is specific. Sam would approve.",
          observation:
            "You led with the request rather than the background, which is exactly what a direct communicator needs.",
          coachingTip:
            "For direct communicators, think of emails as decision documents. The first line should tell them what you need from them.",
          styleContext:
            "Direct communicators often scan emails rather than reading them in full. Front-loading the ask ensures it gets seen.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your email contains the right information but could be tighter. Look for unnecessary preamble or softening language you could cut.",
          observation:
            "The ask may be buried in the middle rather than leading the message. Restructure so the request comes first.",
          coachingTip:
            "Try the subject line test: could your first sentence work as a subject line? If not, sharpen it.",
          styleContext:
            "Direct communicators decide within seconds whether an email needs their attention. Make that decision easy for them.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your email is too long, too vague, or lacks a clear ask. Sam specifically requested one page with no background - honour that instruction.",
          observation:
            "Including extensive background or hedging language directly contradicts the brief you were given.",
          coachingTip:
            "Delete everything that is not the ask, the number, or the deadline. Then check if the message still makes sense. It almost always does.",
          styleContext:
            "Direct communicators respect people who can distil complexity into simplicity. Brevity signals competence to them.",
        },
      },
    },
  },

  // Scenario 26 - Alex Tran, negotiation, intermediate
  {
    id: "scenario-26",
    title: "Terms on the Table",
    context:
      "You are in a contract negotiation meeting with a key supplier. The supplier has proposed extended payment terms. Alex Tran, who is leading the negotiation for your side, responds immediately.",
    chooseContext:
      "Alex has rejected the supplier's proposal and is now looking at you to present your counter-offer. The supplier's team is across the table, waiting.",
    rewriteContext:
      "The negotiation has moved to a break. Alex has asked you to draft three bullet points for the counter-proposal to present after the break.",
    characterId: "alex-tran",
    dialogue:
      "Sixty-day payment terms are not going to work. We agreed on thirty days in the original scope. If you want to renegotiate payment, you need to show me what we get in return. What is the trade?",
    chooseDialogue:
      "Right, they've put their position out. Now I need yours. What are we offering as a counter, and what is our walk-away point?",
    rewriteDialogue:
      "We've got fifteen minutes. Draft the counter-proposal in three bullets. I want what we're offering, what we're asking, and the hard line we will not cross.",
    targetStyle: "direct",
    difficulty: "intermediate",
    category: "client",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Alex has immediately pushed back on the supplier's proposal and demanded to know the trade-off. Which communication style is Alex displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Alex's immediate pushback, firm boundary-setting, and demand for a clear trade-off are characteristic of a direct communicator in negotiation mode.",
          observation:
            "Alex did not soften the rejection or ask for time to consider. The response was instant, firm, and transactional.",
          coachingTip:
            "Direct communicators negotiate by stating positions clearly and expecting the same in return. They respect directness, not diplomacy.",
          styleContext:
            "In negotiations, direct communicators focus on leverage and outcomes. They see ambiguity as weakness.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable confusion. Both direct and analytical communicators are task-focused, but notice that Alex did not ask for data to support the supplier's request. Alex asked what the trade-off is - that is outcome thinking, not evidence thinking.",
          observation:
            "An analytical negotiator would likely ask for a breakdown or justification before responding. Alex responded with a position immediately.",
          coachingTip:
            "In negotiations, the difference is clearest: direct communicators state positions; analytical communicators request evidence.",
          styleContext:
            "Direct negotiators think in terms of deals and trades. Analytical negotiators think in terms of data and risk.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not a match. Alex showed no concern for the supplier relationship or team feelings. The focus was entirely on commercial terms and leverage.",
          observation:
            "There was no empathy, rapport-building, or consensus-seeking in Alex's response. This is a transactional exchange.",
          coachingTip:
            "Look at the language: 'What is the trade?' This framing treats the conversation as a transaction, which is a direct communicator's default lens.",
          styleContext:
            "Direct communicators in negotiations are comfortable with tension. They see it as part of the process, not something to smooth over.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Alex wants your counter-offer and walk-away point. How do you respond?",
      options: [
        {
          id: "s26-opt-a",
          text: "Counter: we hold at thirty days but offer a 3% volume discount on orders above 50K. Walk-away: anything beyond forty-five days is off the table entirely.",
          score: 10,
          result: "strong",
          explanation:
            "Clear, structured, and decisive. You presented a specific counter with a defined boundary, which mirrors Alex's direct style perfectly.",
        },
        {
          id: "s26-opt-b",
          text: "I think there might be some room to negotiate if we look at it from different angles. Maybe we could explore a middle ground on the payment terms.",
          score: 5,
          result: "partial",
          explanation:
            "Too vague for a direct communicator. Alex asked for specifics - a counter-offer and a hard line. 'Explore a middle ground' is not a position.",
        },
        {
          id: "s26-opt-c",
          text: "I'm a bit uncomfortable putting a hard line out there. I'd rather we keep things collaborative and see if we can find something that works for both sides without creating tension.",
          score: 0,
          result: "weak",
          explanation:
            "This avoids taking a position and prioritises comfort over clarity. Alex needs a firm stance, not conflict avoidance.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Alex has asked you to draft three bullet points for the counter-proposal. Write them in a style that matches Alex's direct communication preferences. Be specific, firm, and clear on boundaries.",
      targetTraits: ["concise", "specific", "firm", "boundary-setting"],
      exampleStrongResponse:
        "1. We hold payment terms at 30 days net as per original agreement. 2. In exchange, we offer a 3% discount on all orders exceeding 50K per quarter. 3. Hard line: payment terms beyond 45 days are not negotiable and will trigger a contract review.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Sharp and well-structured. Each bullet serves a purpose: position, trade, boundary. Alex could present this immediately without editing.",
          observation:
            "You included specific numbers and a clear hard line, which is exactly what direct communicators need in negotiations.",
          coachingTip:
            "In negotiations with direct communicators, always define three things: what you are offering, what you are asking, and where you will not bend.",
          styleContext:
            "Direct communicators respect preparation that leads to clear positions. Ambiguity in a counter-proposal signals weak preparation.",
        },
        partial: {
          result: "partial",
          explanation:
            "You have the right direction but your bullets may lack the specificity Alex needs. Check for vague language or missing numbers.",
          observation:
            "General statements like 'we could consider' or 'there may be room' weaken a counter-proposal for a direct audience.",
          coachingTip:
            "Replace every 'could' with a 'will' and every range with a specific number. Direct communicators negotiate with positions, not possibilities.",
          styleContext:
            "Direct communicators interpret vagueness in proposals as lack of preparation or lack of authority.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your bullets are too soft, too vague, or missing the hard line that Alex specifically requested. A counter-proposal needs teeth.",
          observation:
            "Without specific numbers and clear boundaries, this reads as a wish list rather than a negotiating position.",
          coachingTip:
            "Go back to the brief: what are we offering, what are we asking, what is the hard line. Answer all three with specific terms.",
          styleContext:
            "In a negotiation, a direct communicator without clear positions will feel exposed. Give them firm ground to stand on.",
        },
      },
    },
  },

  // Scenario 27 - Jordan Cole, remote/video call, advanced
  {
    id: "scenario-27",
    title: "Camera Off, Patience Off",
    context:
      "You are on a video call with multiple regional leads. The meeting has overrun by ten minutes because of a lengthy discussion about process changes. Jordan Cole, who has kept his camera off for most of the call, unmutes.",
    chooseContext:
      "Jordan has forced the meeting back on track and is now asking each regional lead for a one-sentence commitment. It is your turn next.",
    rewriteContext:
      "After the call, Jordan sends a message in the team channel: 'I need a written commitment from each region by 5pm today. One sentence. What you will deliver and by when.' You need to reply.",
    characterId: "jordan-cole",
    dialogue:
      "I've been listening for twenty minutes and we're going in circles. I need each of you to tell me in one sentence what your region will commit to this quarter. No caveats. No maybes. Start with the North.",
    chooseDialogue:
      "Next. What is your region committing to? One sentence.",
    rewriteDialogue:
      "I need a written commitment from each region by 5pm today. One sentence. What you will deliver and by when.",
    targetStyle: "direct",
    difficulty: "advanced",
    category: "meeting",
    skillFocus: "adaptation",

    spotQuestion: {
      prompt:
        "Jordan has been silently listening on a video call before unmuting to demand one-sentence commitments from each lead. Which communication style is Jordan displaying?",
      correctStyle: "direct",
      adjacentStyle: "analytical",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. The silent observation followed by a decisive intervention demanding brevity and commitment is advanced direct-style behaviour. Jordan waited, assessed, then took control.",
          observation:
            "The camera-off, silent-listening phase might seem passive, but it is actually a direct communicator conserving patience before cutting to the chase.",
          coachingTip:
            "Advanced direct communicators sometimes hold back before intervening sharply. Do not confuse silence with disengagement - they may be building towards a decisive move.",
          styleContext:
            "In remote settings, direct communicators often disengage visually when a meeting loses focus, then re-engage forcefully to redirect it.",
        },
        partial: {
          result: "partial",
          explanation:
            "Reasonable thought, but notice that Jordan is not asking for analysis or evidence. The demand is for commitments - that is action-oriented, not detail-oriented.",
          observation:
            "An analytical communicator in this situation would more likely ask for supporting data or risk assessments, not one-sentence pledges.",
          coachingTip:
            "The giveaway is 'No caveats. No maybes.' An analytical communicator values caveats because they represent precision. A direct communicator sees them as hesitation.",
          styleContext:
            "Direct communicators in remote meetings are especially impatient because they cannot control the room physically. Their interventions tend to be sharper.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not a match. Jordan showed no interest in team feelings, relationship dynamics, or creative brainstorming. The focus was entirely on extracting commitments efficiently.",
          observation:
            "Phrases like 'No caveats. No maybes.' actively discourage the nuance and empathy that supportive or expressive communicators value.",
          coachingTip:
            "When someone demands brevity and rejects qualifications, they are signalling a direct communication style. They want certainty, not comfort.",
          styleContext:
            "Direct communicators in virtual settings often feel a loss of control, which makes their communication even more clipped and commanding.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Jordan has asked for your one-sentence regional commitment. How do you respond?",
      options: [
        {
          id: "s27-opt-a",
          text: "South region will deliver a 12% reduction in processing time by end of Q3.",
          score: 10,
          result: "strong",
          explanation:
            "One sentence, specific metric, clear deadline. This is exactly what Jordan asked for - no padding, no hedging.",
        },
        {
          id: "s27-opt-b",
          text: "We're aiming for some solid improvements in processing time over the next quarter. I'll confirm the exact numbers once I've spoken to the team.",
          score: 5,
          result: "partial",
          explanation:
            "This acknowledges the request but lacks the specificity Jordan demanded. 'Aiming for' and 'some improvements' are exactly the kind of hedging Jordan rejected.",
        },
        {
          id: "s27-opt-c",
          text: "I'd like to give a proper answer but I'm concerned about committing without consulting my team first. Can I come back to you after the call?",
          score: 0,
          result: "weak",
          explanation:
            "Jordan explicitly said 'No caveats. No maybes.' This response is entirely caveats. It will be perceived as a lack of ownership.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Jordan has posted in the team channel asking for a one-sentence written commitment from your region by 5pm. Write your reply in a style that matches Jordan's direct communication preferences.",
      targetTraits: ["concise", "specific", "commitment-driven", "no-hedging"],
      exampleStrongResponse:
        "South region: 12% reduction in processing time, delivered by end of Q3. Owner: me.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Perfect. Short, specific, and accountable. You matched the format Jordan set and added ownership, which direct communicators respect.",
          observation:
            "You kept it to one sentence as requested and included a measurable outcome with a deadline.",
          coachingTip:
            "In async channels, direct communicators scan quickly. Short messages with numbers and names get noticed and respected.",
          styleContext:
            "Direct communicators in remote and async settings value brevity even more than in person, because they cannot interrupt to refocus a long message.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your reply has useful content but may be longer than necessary or include softening language. Jordan asked for one sentence - check if you delivered exactly that.",
          observation:
            "Any preamble like 'Thanks for the push' or 'Here's where we are' adds length without adding value for a direct reader.",
          coachingTip:
            "Match the format of the request. If someone asks for one sentence, give them one sentence. It shows you listened.",
          styleContext:
            "In async communication, direct communicators often measure respect by whether you followed their stated format.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your reply is too long, too vague, or avoids making a commitment. Jordan set a clear format - one sentence, what you will deliver, by when.",
          observation:
            "Responses that explain why you cannot commit or ask for more time will be read as resistance, not professionalism.",
          coachingTip:
            "If you genuinely cannot commit, a direct communicator still wants a direct response: 'I cannot commit to X because of Y. I can commit to Z instead.'",
          styleContext:
            "Direct communicators see delayed or hedged commitments in writing as worse than in person, because there is a permanent record of indecision.",
        },
      },
    },
  },

  // ============================================
  // EXPRESSIVE STYLE SCENARIOS (28-30)
  // ============================================

  // Scenario 28 - Priya Sharma, presentation, foundation
  {
    id: "scenario-28",
    title: "Pitching the Vision",
    context:
      "You are in a stakeholder presentation where Priya Sharma is presenting the marketing strategy for the next quarter. Rather than walking through the slides in order, she has gone off-script to paint a picture of the brand's future.",
    chooseContext:
      "Priya has finished her vision pitch and the room is energised. She turns to you and asks you to build on her idea in front of the stakeholders.",
    rewriteContext:
      "After the presentation, Priya messages you asking for help writing the opening paragraph of the strategy document. She wants it to capture the energy from the room.",
    characterId: "priya-sharma",
    dialogue:
      "Forget the slides for a second. Imagine it's twelve months from now and our brand is the one everyone is talking about. Not because of ad spend, but because we told a story that people actually cared about. That is what this strategy is really about.",
    chooseDialogue:
      "You were in the room - you felt the energy. What would you add to that vision? Don't hold back, I want the bold version.",
    rewriteDialogue:
      "Can you help me write the opening paragraph for the strategy doc? I want it to feel like that moment in the room - inspiring, ambitious, the kind of thing that makes people lean forward. Not a boring executive summary.",
    targetStyle: "expressive",
    difficulty: "foundation",
    category: "meeting",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Priya has abandoned her slides to paint an ambitious vision of the brand's future. Which communication style is Priya displaying?",
      correctStyle: "expressive",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Spot on. Priya's storytelling, future-focused language, and willingness to go off-script are classic expressive-style behaviour.",
          observation:
            "Notice how Priya prioritised emotional impact over structured delivery. She wanted the room to feel something, not just understand something.",
          coachingTip:
            "When someone abandons structure in favour of inspiration and storytelling, that is a strong signal of an expressive communicator.",
          styleContext:
            "Expressive communicators believe that people are motivated by vision and emotion, not by bullet points and data.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Both expressive and direct styles can be confident and commanding, but notice that Priya's goal was inspiration, not efficiency. She wanted the room to feel something.",
          observation:
            "A direct communicator would have skipped the slides to get to the recommendation faster. Priya skipped them to tell a story.",
          coachingTip:
            "The key difference: direct communicators skip to the conclusion. Expressive communicators skip to the vision.",
          styleContext:
            "Expressive and direct styles can both dominate a room, but for different reasons. Expressive seeks excitement; direct seeks efficiency.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not a match. Priya's approach was neither cautious nor data-driven. She was focused on energy, vision, and storytelling - not accuracy or team harmony.",
          observation:
            "There was no request for evidence, no concern about process, and no checking in on how others felt. This is about inspiring, not supporting.",
          coachingTip:
            "Ask yourself: is this person trying to excite, decide, support, or analyse? Priya is clearly trying to excite.",
          styleContext:
            "Expressive communicators thrive in presentation settings because they can use the room's energy to build momentum for their ideas.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Priya wants you to build on her vision in front of the stakeholders. She has asked for the bold version. How do you respond?",
      options: [
        {
          id: "s28-opt-a",
          text: "I love where you're going with this. What if we took it further - instead of just telling a story, we let our customers tell it for us? A user-generated campaign that turns our audience into brand ambassadors. Imagine the reach.",
          score: 10,
          result: "strong",
          explanation:
            "You matched Priya's energy, built on her idea with enthusiasm, and added a creative angle. This is how you connect with an expressive communicator.",
        },
        {
          id: "s28-opt-b",
          text: "That's a solid direction. I'd probably want to see some data on brand sentiment first before we commit to a specific approach, but the general concept has potential.",
          score: 5,
          result: "partial",
          explanation:
            "This is measured and reasonable but does not match the energy of the moment. Priya asked for bold - this feels cautious.",
        },
        {
          id: "s28-opt-c",
          text: "I think we should stick to the slides and the approved strategy. Going off-script in front of stakeholders is risky and we haven't validated any of this yet.",
          score: 0,
          result: "weak",
          explanation:
            "This shuts down the creative energy entirely. Priya will feel constrained and the room will lose its momentum.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Priya wants you to write the opening paragraph of the strategy document in a way that captures the energy from the presentation. Write it in a style that matches Priya's expressive communication preferences. Be inspiring, ambitious, and vivid.",
      targetTraits: ["inspiring", "vivid", "future-focused", "energising"],
      exampleStrongResponse:
        "Twelve months from now, our brand will not just be recognised - it will be remembered. This strategy is not about incremental gains or safe bets. It is about telling a story so compelling that our audience becomes our biggest advocate. We are not following the market. We are setting the pace.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Brilliant. Your writing captures the ambition and energy that Priya wanted. It reads like a rallying cry, not an executive summary.",
          observation:
            "You used vivid, forward-looking language and created a sense of momentum. This is how expressive communicators want to open a document.",
          coachingTip:
            "When writing for an expressive communicator, think about the feeling you want to create, not just the information you need to convey.",
          styleContext:
            "Expressive communicators judge written content by whether it makes them feel something. If the opening paragraph is flat, they will lose interest.",
        },
        partial: {
          result: "partial",
          explanation:
            "Good effort, but your writing may be too measured or factual for what Priya asked for. Look for opportunities to inject more ambition and energy.",
          observation:
            "Phrases like 'we aim to' or 'our objective is' are accurate but lack the spark that expressive communicators crave.",
          coachingTip:
            "Try replacing passive, objective language with active, emotive language. Instead of 'We aim to improve brand awareness', try 'We are going to make our brand impossible to ignore.'",
          styleContext:
            "Expressive communicators want documents that sound like they were written by someone who believes in the vision, not someone reporting on it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your writing is too dry, cautious, or corporate. Priya specifically asked for something that makes people lean forward - this does not achieve that.",
          observation:
            "A flat, bullet-pointed opening paragraph is the opposite of what Priya requested. She wanted energy, not structure.",
          coachingTip:
            "Read your paragraph aloud. Does it make you want to act? If not, it needs more ambition. Write as if you are trying to convince a room, not fill a template.",
          styleContext:
            "Expressive communicators experience boring writing as a lack of commitment to the idea. If you cannot write about it passionately, they wonder if you believe in it.",
        },
      },
    },
  },

  // Scenario 29 - Marcus Webb, conflict, intermediate
  {
    id: "scenario-29",
    title: "Creative Friction",
    context:
      "You are in a cross-functional meeting where a disagreement has broken out about the direction of a new product feature. The engineering lead wants to scale back scope, citing technical debt. Marcus Webb pushes back with characteristic energy.",
    chooseContext:
      "Marcus is visibly frustrated that the conversation has shifted to risk mitigation. He turns to you, looking for an ally who will champion the bigger vision.",
    rewriteContext:
      "After the heated meeting, Marcus sends you a direct message: 'I feel like that meeting just killed the best idea we've had all year. Can you help me write a message to the group that re-energises the conversation without making it personal?'",
    characterId: "marcus-webb",
    dialogue:
      "I hear the concerns about technical debt, I really do. But if we keep trimming this feature back to what's safe, we'll ship something nobody gets excited about. We're supposed to be innovating, not just maintaining. Where is the ambition?",
    chooseDialogue:
      "You get what I'm saying, right? This is bigger than one sprint. If we play it safe on this, we're telling the market we've run out of ideas. Help me make the case here.",
    rewriteDialogue:
      "I feel like that meeting just killed the best idea we've had all year. Can you help me write a message to the group that re-energises the conversation without making it personal?",
    targetStyle: "expressive",
    difficulty: "intermediate",
    category: "conflict",
    skillFocus: "de-escalation",

    spotQuestion: {
      prompt:
        "Marcus has pushed back against scope reduction by appealing to ambition and innovation. Which communication style is Marcus displaying?",
      correctStyle: "expressive",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Marcus is using emotional language, appealing to shared ambition, and framing the debate as a question of vision versus safety. This is classic expressive behaviour in a conflict setting.",
          observation:
            "Notice Marcus did not argue with data or logic. He argued with passion and identity - 'We're supposed to be innovating.' That is an emotional appeal.",
          coachingTip:
            "Expressive communicators in disagreements often frame the issue as a values question rather than a practical one. Listen for language about identity and ambition.",
          styleContext:
            "In conflicts, expressive communicators fight for the vision. They see scope reduction as a betrayal of the original idea, not a practical adjustment.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Marcus is certainly assertive, which can look direct. But notice his argument is about ambition and excitement, not about efficiency or outcomes. He is fighting for the vision, not the bottom line.",
          observation:
            "A direct communicator in this conflict would argue in terms of results: 'The full feature will generate more revenue.' Marcus argued in terms of meaning.",
          coachingTip:
            "In conflicts, direct communicators argue about outcomes. Expressive communicators argue about purpose. Listen for which one dominates.",
          styleContext:
            "Both direct and expressive styles can be forceful in disagreements, but their arguments come from different places: results versus vision.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not a match. Marcus showed no interest in careful analysis or in maintaining team harmony. His focus was on protecting the creative vision from being diluted.",
          observation:
            "There was no data, no process, and no concern for how the engineering lead felt. This is passion-driven, not people-driven or detail-driven.",
          coachingTip:
            "Ask what is driving the pushback: is it data, relationships, efficiency, or vision? Marcus is clearly driven by vision.",
          styleContext:
            "Expressive communicators in conflict can seem aggressive, but their motivation is usually passion for the idea rather than personal hostility.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Marcus wants you to back his vision in front of the group. How do you respond?",
      options: [
        {
          id: "s29-opt-a",
          text: "I think Marcus is onto something important here. What if instead of choosing between the full vision and the safe version, we find a way to ship a bold first phase that proves the concept? That way we keep the ambition alive and manage the technical risk in stages.",
          score: 10,
          result: "strong",
          explanation:
            "You validated Marcus's vision while offering a practical path forward. This shows you understand expressive communicators - champion the idea and find a creative solution.",
        },
        {
          id: "s29-opt-b",
          text: "I see both sides. The engineering concerns are valid, but so is the desire to innovate. Maybe we should take this offline and review the data before deciding.",
          score: 5,
          result: "partial",
          explanation:
            "Balanced but not what Marcus needs right now. He is looking for someone to champion the vision, not sit on the fence.",
        },
        {
          id: "s29-opt-c",
          text: "I actually agree with engineering. We should prioritise stability over ambition right now. There's too much risk in the full scope.",
          score: 0,
          result: "weak",
          explanation:
            "This directly opposes Marcus's position and uses the exact framing he objects to. He will feel unsupported and shut down.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Marcus has asked you to help write a message to the group that re-energises the conversation about the feature without making it personal. Write the message in a style that matches Marcus's expressive communication preferences while keeping it constructive.",
      targetTraits: ["inspiring", "collaborative", "future-focused", "positive-reframe"],
      exampleStrongResponse:
        "I know today's conversation got heated, and that shows how much we all care about getting this right. I still believe we have something special with this feature - something that could genuinely set us apart. I'd love to find a way forward that keeps the ambition alive while respecting the technical reality. Can we regroup this week with fresh eyes and explore a phased approach that lets us be bold and smart at the same time?",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. You re-energised the conversation without dismissing anyone's concerns. The tone is optimistic, collaborative, and forward-looking - exactly what Marcus wanted.",
          observation:
            "You reframed the conflict as shared commitment and proposed a creative path forward, which is the hallmark of effective expressive communication.",
          coachingTip:
            "When helping expressive communicators recover from conflict, focus on the shared passion and redirect it towards a constructive next step.",
          styleContext:
            "Expressive communicators process conflict emotionally. Helping them reframe the disagreement as evidence of collective passion is a powerful de-escalation tool.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message has some good elements but may lack the warmth or optimism Marcus was looking for. Check for overly formal or cautious language.",
          observation:
            "If your message reads like a corporate memo rather than a heartfelt appeal, it will not achieve the re-energising effect Marcus wanted.",
          coachingTip:
            "Try adding a line that acknowledges the passion in the room and reframes it positively. Expressive communicators want to feel that the energy was productive, not destructive.",
          styleContext:
            "Expressive communicators need conflict to end on a high note. A neutral resolution feels like a loss to them - they want to feel reinspired.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is too flat, too corporate, or too apologetic. Marcus wanted to re-energise, not apologise. The tone should be forward-looking and ambitious.",
          observation:
            "A message that focuses on what went wrong rather than what comes next will depress an expressive communicator rather than inspire them.",
          coachingTip:
            "Rewrite with the goal of making the reader feel excited about the next conversation, not guilty about the last one.",
          styleContext:
            "Expressive communicators are motivated by possibility. End on what could be, not what was.",
        },
      },
    },
  },

  // Scenario 30 - Nina Okafor, remote, advanced
  {
    id: "scenario-30",
    title: "Lost in Translation",
    context:
      "Your team has been working remotely for three months. During a video check-in, Nina Okafor raises a concern about team dynamics. Her tone is warm but there is an undercurrent of frustration.",
    chooseContext:
      "Nina has made her concern clear and the team is quiet on the call. She looks at you through the camera and asks for your honest take on how the remote setup is affecting collaboration.",
    rewriteContext:
      "After the call, Nina sends you a private message asking you to help her draft a proposal for a monthly in-person day. She wants it to land well with the leadership team.",
    characterId: "nina-okafor",
    dialogue:
      "I know the remote setup works logistically, but honestly, I feel like we're losing something. The quick chats, the energy after a good meeting, the way you can read someone's face when they're struggling. I miss that. And I think the work is starting to show it.",
    chooseDialogue:
      "I value your honesty. Do you think we're still really collaborating, or are we just co-existing on a shared calendar? Because I think there's a difference and I'm worried we've drifted into the second one.",
    rewriteDialogue:
      "I want to propose a monthly in-person day to leadership. But I know they'll push back on cost and logistics. Can you help me write something that makes the human case, not just the business case? I want them to feel why it matters.",
    targetStyle: "expressive",
    difficulty: "advanced",
    category: "team",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Nina has raised a concern about remote working by describing the loss of human connection and energy. Which communication style is Nina displaying?",
      correctStyle: "expressive",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Nina's focus on energy, connection, and the emotional quality of collaboration is characteristic of an expressive communicator. She is not just raising a problem - she is describing a feeling.",
          observation:
            "Notice Nina did not present data on productivity or process breakdowns. She talked about what the team has lost emotionally - the quick chats, the energy, the ability to read faces.",
          coachingTip:
            "Advanced expressive communicators can be harder to spot because their warmth can look supportive. The key difference is that Nina is not asking for reassurance - she is expressing a vision of what the team could be.",
          styleContext:
            "Expressive communicators in remote settings often struggle most because they draw energy from in-person interaction. Their frustration is about lost connection, not lost efficiency.",
        },
        partial: {
          result: "partial",
          explanation:
            "Very close. Nina's warmth and concern for the team can look supportive, and there is genuine overlap. But notice that Nina is not focused on individual wellbeing or conflict avoidance - she is focused on the team's creative energy and collaborative spark.",
          observation:
            "A supportive communicator would more likely say 'I'm worried about how people are coping.' Nina said 'I miss the energy.' That is about inspiration, not care.",
          coachingTip:
            "The difference between expressive and supportive is subtle: expressive communicators mourn lost energy and connection. Supportive communicators mourn lost trust and safety.",
          styleContext:
            "Both expressive and supportive styles are people-oriented, but they value different things. Expressive values energy and collaboration; supportive values trust and stability.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not a match. Nina showed no focus on data, efficiency, or structured process. Her entire concern was about the human and emotional dimension of remote work.",
          observation:
            "There were no metrics, no deadlines, and no calls for action. This is an emotional reflection, not a task-driven intervention.",
          coachingTip:
            "When someone describes a workplace issue in terms of feelings and energy rather than numbers and outcomes, you are likely dealing with an expressive or supportive communicator.",
          styleContext:
            "Direct and analytical communicators would frame remote work concerns around productivity or process gaps. Nina framed it around lost human connection.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Nina has asked whether the team is truly collaborating or just co-existing. How do you respond?",
      options: [
        {
          id: "s30-opt-a",
          text: "I think you've put your finger on something real. The work gets done, but the spark is missing. I've noticed it too - fewer spontaneous ideas, less of that buzz after a good session. What if we tried something different to bring that energy back, even remotely?",
          score: 10,
          result: "strong",
          explanation:
            "You validated Nina's feelings, matched her language about energy and spark, and offered to explore solutions collaboratively. This is exactly how to engage an expressive communicator.",
        },
        {
          id: "s30-opt-b",
          text: "Productivity metrics have been stable, so I think we're doing alright. But I understand the concern about team cohesion. Maybe we could schedule some more social calls.",
          score: 5,
          result: "partial",
          explanation:
            "Leading with metrics misses Nina's point. She is not questioning productivity - she is questioning connection. The suggestion is helpful but the framing is wrong.",
        },
        {
          id: "s30-opt-c",
          text: "Honestly, I think remote work is more efficient. We waste less time on chit-chat and the output speaks for itself. I'd rather focus on the deliverables.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses everything Nina values. Calling human connection 'wasted time' will feel deeply disrespectful to an expressive communicator.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Nina has asked you to help draft a proposal for a monthly in-person day. She wants it to make the human case to leadership. Write the key paragraph in a style that matches Nina's expressive communication preferences.",
      targetTraits: ["emotive", "vivid", "people-focused", "compelling"],
      exampleStrongResponse:
        "Remote working has given us flexibility, but it has also cost us something harder to measure: the creative friction that only happens face to face. The spontaneous conversations after a meeting. The moment you notice a colleague is struggling before they say a word. A monthly in-person day is not about reversing our remote policy - it is about protecting the human connections that make this team more than a group of individuals on a shared calendar.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Powerful and persuasive. You made the human case without dismissing the business reality, and the language is vivid enough to make leadership feel the argument, not just hear it.",
          observation:
            "You used specific, relatable examples of what is lost remotely, which is exactly how expressive communicators build emotional arguments.",
          coachingTip:
            "When writing for expressive communicators, ground abstract feelings in concrete, relatable moments. 'We're losing connection' is abstract. 'You can't read someone's face on a video call' is concrete.",
          styleContext:
            "Expressive communicators influence through storytelling and emotional resonance. The strongest proposals feel like they are written by someone who cares deeply.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your proposal has merit but may lean too heavily on business logic. Nina asked for the human case - check that feelings and connection are at the centre.",
          observation:
            "If your paragraph reads like a cost-benefit analysis, it will not achieve what Nina wanted. She needs leadership to feel the loss, not just understand it.",
          coachingTip:
            "Try adding a specific human moment - something leaders have experienced themselves - to make the argument personal and relatable.",
          styleContext:
            "Expressive communicators believe that the most important things cannot be captured in spreadsheets. Help them make that case with stories, not statistics.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your proposal is too dry, too data-driven, or too focused on logistics. Nina specifically asked for the human case, and this does not deliver it.",
          observation:
            "A paragraph full of efficiency metrics and cost calculations ignores the core of Nina's request.",
          coachingTip:
            "Start over with a different question: 'What would leadership miss if they read this?' If the answer is 'the feeling', then you need more emotion in the writing.",
          styleContext:
            "Expressive communicators experience purely rational proposals as incomplete. They believe that if you cannot articulate why something matters emotionally, you have not made the full case.",
        },
      },
    },
  },

  // ============================================
  // SUPPORTIVE STYLE SCENARIOS (31-33)
  // ============================================

  // Scenario 31 - Tom Brennan, conflict, foundation
  {
    id: "scenario-31",
    title: "The Uncomfortable Silence",
    context:
      "A team meeting has just ended awkwardly. Two colleagues had a visible disagreement about workload distribution, and neither resolved it before the call ended. Tom Brennan catches you afterwards in a private message.",
    chooseContext:
      "Tom has opened up about his concern and is now asking you how the team should handle the unresolved tension. He clearly wants a collaborative, gentle approach.",
    rewriteContext:
      "Tom asks you to help him draft a message to the two colleagues suggesting a follow-up conversation. He wants to make sure neither person feels singled out or blamed.",
    characterId: "tom-brennan",
    dialogue:
      "Did you pick up on that tension at the end? I'm worried about Jess and Amir. Neither of them said anything after the meeting and I don't want it to fester. I just want to make sure everyone's okay and we find a way through it together.",
    chooseDialogue:
      "I don't want to make it worse by forcing a conversation they're not ready for. But I also can't just ignore it. How do you think we should handle this? I want both of them to feel heard.",
    rewriteDialogue:
      "Could you help me write a message to both of them? I don't want it to feel like a telling-off or an investigation. Just something that opens the door for a chat, so they know there's space to talk if they need it.",
    targetStyle: "supportive",
    difficulty: "foundation",
    category: "conflict",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Tom has reached out privately to express concern about two colleagues after a tense meeting. Which communication style is Tom displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Exactly right. Tom's concern for others' feelings, desire to avoid making things worse, and focus on making sure everyone is okay are hallmarks of a supportive communicator.",
          observation:
            "Notice Tom's language: 'I don't want it to fester', 'make sure everyone's okay', 'find a way through it together.' Every phrase prioritises people and harmony.",
          coachingTip:
            "Supportive communicators are often the first to notice interpersonal tension and the last to confront it directly. They prefer to create safe spaces for resolution.",
          styleContext:
            "Supportive communicators experience unresolved conflict as genuinely distressing. Their instinct is to heal, not to judge.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both supportive and expressive styles are people-focused, but notice that Tom is not energised by this situation - he is worried. His goal is safety and resolution, not creative problem-solving or rallying the team.",
          observation:
            "An expressive communicator might say 'Let's get everyone together and clear the air!' Tom's approach is quieter and more cautious.",
          coachingTip:
            "The difference: expressive communicators address conflict with energy and openness. Supportive communicators address it with care and caution.",
          styleContext:
            "Both styles care about people, but supportive communicators prioritise safety and trust, while expressive communicators prioritise connection and openness.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not a match. Tom showed no interest in efficiency, data, or outcomes. His entire focus was on the emotional wellbeing of his colleagues.",
          observation:
            "There was no mention of productivity impact, process improvement, or deadlines. This is purely about how people feel.",
          coachingTip:
            "When someone's first response to conflict is 'Is everyone okay?' rather than 'What happened?' or 'How do we fix it?', they are likely a supportive communicator.",
          styleContext:
            "Supportive communicators see conflict resolution as relationship repair, not problem-solving. The feelings come before the facts.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Tom wants to know how to handle the unresolved tension without forcing a conversation. How do you respond?",
      options: [
        {
          id: "s31-opt-a",
          text: "I think a light-touch approach works best here. Maybe reach out to each of them individually first, just to check in. Let them know you noticed and that there's no pressure, but you're there if they want to talk. Then, if they're both open to it, suggest a casual three-way chat.",
          score: 10,
          result: "strong",
          explanation:
            "This matches Tom's supportive instincts perfectly. You suggested a gentle, non-confrontational approach that respects each person's readiness and creates a safe space.",
        },
        {
          id: "s31-opt-b",
          text: "I'd just send them both a message asking them to sort it out between themselves. They're adults - they'll figure it out.",
          score: 5,
          result: "partial",
          explanation:
            "This is too hands-off for Tom. He is not asking you to dismiss the issue - he is asking for a caring approach. Telling people to sort it out themselves feels dismissive to a supportive communicator.",
        },
        {
          id: "s31-opt-c",
          text: "Honestly, I'd call a team meeting, lay out the issue, and ask them to resolve it in front of everyone. Transparency is key.",
          score: 0,
          result: "weak",
          explanation:
            "This would horrify Tom. Public confrontation is the opposite of what a supportive communicator wants. It risks embarrassing both colleagues and escalating the tension.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Tom wants you to help draft a message to both colleagues that opens the door for a conversation without feeling like a summons or an investigation. Write the message in a style that matches Tom's supportive communication preferences.",
      targetTraits: ["warm", "non-judgemental", "inviting", "safe-space"],
      exampleStrongResponse:
        "Hi both. I just wanted to check in after today's meeting. I know the workload conversation got a bit intense, and I want you both to know that's completely understandable - it's a topic people feel strongly about. There's no agenda here, but if either of you would find it helpful to talk things through, I'm happy to set aside some time. No pressure at all - just wanted you to know the door is open.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Warm, safe, and genuinely inviting. You normalised the tension, removed any sense of blame, and offered support without pressure. Tom would be very comfortable sending this.",
          observation:
            "You used phrases like 'no pressure', 'completely understandable', and 'the door is open', which create exactly the safe space a supportive communicator wants.",
          coachingTip:
            "When writing on behalf of a supportive communicator, always normalise the situation and remove any sense of urgency or judgement.",
          styleContext:
            "Supportive communicators believe people open up when they feel safe, not when they feel obligated. Your message should feel like an invitation, never a requirement.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message has the right intent but may feel slightly too formal or too direct for Tom's style. Check for any language that could feel like a summons.",
          observation:
            "Phrases like 'We need to address this' or 'I'd like to discuss the situation' can feel pressured, even when well-intentioned.",
          coachingTip:
            "Soften your language. Replace 'We need to talk about' with 'If it would be helpful to chat about'. The shift from requirement to invitation is crucial.",
          styleContext:
            "Supportive communicators are acutely aware of how messages land. Even small word choices can make the difference between someone feeling supported and someone feeling summoned.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is too direct, too formal, or implies blame. Tom specifically wanted something that feels safe and non-judgemental.",
          observation:
            "If your message reads like a manager investigating an incident, it will achieve the opposite of what Tom intended.",
          coachingTip:
            "Remove any language that assigns blame, implies wrongdoing, or creates urgency. Start with care, end with choice.",
          styleContext:
            "Supportive communicators would rather send no message at all than send one that makes someone feel defensive. Safety is non-negotiable.",
        },
      },
    },
  },

  // Scenario 32 - Leah Morgan, negotiation, intermediate
  {
    id: "scenario-32",
    title: "Behind the Numbers",
    context:
      "You are in a meeting where the leadership team is discussing a restructuring proposal that would reduce headcount by 10%. The conversation has been focused on financial targets. Leah Morgan speaks up for the first time.",
    chooseContext:
      "Leah's intervention has shifted the tone of the room. The finance director looks slightly impatient. Leah turns to you and asks for your view on how to handle the human side of the restructure.",
    rewriteContext:
      "After the meeting, Leah asks you to help her draft talking points for the managers who will need to have difficult conversations with affected staff. She wants the guidance to be compassionate above all.",
    characterId: "leah-morgan",
    dialogue:
      "I understand the numbers. But behind every one of those roles is a person with a mortgage, a family, a career they've built here. Before we finalise anything, I need to know we've thought about how we're going to support the people affected. Not just the process - the people.",
    chooseDialogue:
      "I know the decision may already be made on the numbers. But how we handle this matters just as much. What do you think we owe the people who are going to be affected?",
    rewriteDialogue:
      "The managers delivering this news are going to need guidance. Can you help me write some talking points? I want them to feel equipped but also to approach every conversation with genuine care. These are not just headcount reductions - they're life-changing conversations.",
    targetStyle: "supportive",
    difficulty: "intermediate",
    category: "meeting",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "Leah has interrupted a numbers-focused restructuring discussion to advocate for the affected individuals. Which communication style is Leah displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Leah's focus on the human impact, her empathy for affected individuals, and her insistence on support over process are classic supportive-style behaviour.",
          observation:
            "Notice Leah did not challenge the business decision itself. She accepted the reality but insisted that the human dimension be given equal weight.",
          coachingTip:
            "Supportive communicators in difficult situations rarely argue against the decision. They argue for how the decision is handled.",
          styleContext:
            "Supportive communicators see every business decision through a people lens. They believe that how you do something matters as much as what you do.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Both supportive and expressive styles are people-focused. But Leah's tone is careful and compassionate, not energetic or visionary. She is not rallying the room - she is asking the room to pause and think about impact.",
          observation:
            "An expressive communicator might say 'We have a duty to make this better!' Leah said 'I need to know we've thought about support.' That is care, not inspiration.",
          coachingTip:
            "Supportive communicators advocate quietly and firmly. Expressive communicators advocate loudly and passionately. Both care, but they show it differently.",
          styleContext:
            "In sensitive situations, the supportive style focuses on individual care while the expressive style focuses on collective purpose. Leah is clearly thinking about individuals.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not a match. Leah showed no interest in efficiency, speed, or data accuracy. Her intervention was entirely about the emotional and human consequences of the decision.",
          observation:
            "There were no numbers in Leah's response, no process recommendations, and no push for faster resolution. This is about people, not tasks.",
          coachingTip:
            "When someone shifts a business conversation from 'what' to 'who', they are almost certainly a supportive communicator.",
          styleContext:
            "Supportive communicators often feel invisible in results-driven discussions. Their interventions may seem like distractions, but they are advocating for something task-focused styles can overlook: human impact.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Leah has asked what you think the organisation owes to the people being affected by the restructure. How do you respond?",
      options: [
        {
          id: "s32-opt-a",
          text: "I think we owe them honesty, time, and genuine support. That means clear communication about what's happening and why, proper notice periods, and real help with the transition - not just a policy document. Every conversation should feel personal, not procedural.",
          score: 10,
          result: "strong",
          explanation:
            "You matched Leah's values perfectly. Your response focused on dignity, care, and personalised support, which is exactly what a supportive communicator needs to hear.",
        },
        {
          id: "s32-opt-b",
          text: "We should make sure the redundancy packages are competitive and the legal process is clean. That protects the organisation and gives people a fair deal.",
          score: 5,
          result: "partial",
          explanation:
            "Practical and fair, but too transactional for Leah. She is asking about emotional support and dignity, not just legal compliance. The heart is missing.",
        },
        {
          id: "s32-opt-c",
          text: "Honestly, we owe them a professional process. The business needs to move forward. Getting emotional about it will only make it harder for everyone.",
          score: 0,
          result: "weak",
          explanation:
            "Dismissing emotion in front of a supportive communicator is the worst response possible. Leah will feel that you have missed the entire point.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Leah has asked you to help draft talking points for managers delivering restructuring news. Write 3-4 talking points in a style that matches Leah's supportive communication preferences. Focus on compassion, dignity, and genuine care.",
      targetTraits: ["empathetic", "person-centred", "warm", "reassuring"],
      exampleStrongResponse:
        "1. Start by acknowledging the person, not the process. Thank them for their contribution and be specific about what they have meant to the team. 2. Be honest about what is happening and why, but deliver it with care. Allow silence and space for the person to react however they need to. 3. Make the support tangible. Do not just say 'we're here for you' - explain exactly what is available: career coaching, extended notice, counselling. 4. End by asking what they need, not telling them what happens next. Let them lead the conversation from this point.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Compassionate and practical. Your talking points treat each conversation as a human moment, not a process step. Leah would feel confident giving this guidance to managers.",
          observation:
            "You balanced honesty with care and made the support specific rather than generic, which is what makes it feel genuine.",
          coachingTip:
            "Supportive communicators value specificity in care. 'We'll support you' is hollow. 'Here is exactly how we'll support you' is meaningful.",
          styleContext:
            "Supportive communicators believe that the way difficult news is delivered determines whether trust survives the moment. These talking points protect trust.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your talking points are reasonable but may feel too procedural. Check whether they centre the person or the process.",
          observation:
            "If your points read like a compliance checklist, they need more warmth. Leah wants managers to show care, not follow steps.",
          coachingTip:
            "Add language that gives managers permission to be human in the conversation. 'It's okay to acknowledge this is hard' is a powerful instruction.",
          styleContext:
            "Supportive communicators distrust scripts and checklists for sensitive conversations. They want guidance that helps managers be genuine, not robotic.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your talking points are too cold, too process-driven, or too focused on protecting the organisation rather than supporting the individual.",
          observation:
            "If your talking points could be used by a lawyer in a tribunal, they are not what Leah asked for. She wants compassion guidance, not risk mitigation.",
          coachingTip:
            "Start each point with the person, not the process. What will the individual need to hear, feel, and know in that moment?",
          styleContext:
            "Supportive communicators see process-first guidance for sensitive conversations as a failure of empathy. Lead with care, follow with process.",
        },
      },
    },
  },

  // Scenario 33 - David Chen, remote, advanced
  {
    id: "scenario-33",
    title: "Reading Between the Lines",
    context:
      "You are on a video call reviewing project timelines. One team member, who is usually engaged, has been unusually quiet throughout. David Chen notices this and gently redirects the conversation.",
    chooseContext:
      "David has created space for the quiet team member, who has revealed they are struggling with their workload. David now turns to you privately in a breakout room to discuss how to redistribute tasks without making anyone feel singled out.",
    rewriteContext:
      "After the call, David asks you to write a team message that adjusts the workload split. He wants it to feel collaborative and positive - not like someone failed or needed rescuing.",
    characterId: "david-chen",
    dialogue:
      "Before we move on, I just want to pause for a second. Kai, you've been quieter than usual today. No pressure at all, but I just wanted to check - is everything alright? Is there anything on your plate that's feeling too heavy right now?",
    chooseDialogue:
      "Kai's clearly overwhelmed but didn't want to say anything. I don't want to just reassign tasks in a way that embarrasses them. How do we redistribute the work so it feels like a team decision, not a rescue mission?",
    rewriteDialogue:
      "Can you draft a message to the team about adjusting the project split? I don't want anyone to feel like they're being judged. Frame it as a team rebalance, not a correction. Make it feel like we're all in this together.",
    targetStyle: "supportive",
    difficulty: "advanced",
    category: "team",
    skillFocus: "empathy",

    spotQuestion: {
      prompt:
        "David has paused the meeting to gently check in on a quiet team member, offering space without pressure. Which communication style is David displaying?",
      correctStyle: "supportive",
      adjacentStyle: "expressive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. David's gentle check-in, non-pressured phrasing, and attentiveness to a colleague's change in behaviour are advanced signals of supportive communication.",
          observation:
            "Notice the subtlety: David did not say 'You seem off today.' He said 'You've been quieter than usual' and immediately added 'No pressure.' He created an opening without creating obligation.",
          coachingTip:
            "Advanced supportive communicators are skilled at noticing changes in people and creating safe openings. Their interventions are gentle and easy to decline.",
          styleContext:
            "Supportive communicators read rooms not for task progress but for people's emotional states. They notice when someone retreats and instinctively move towards them, not away.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Both supportive and expressive styles notice people's emotional states, but David's approach is quiet and private rather than open and energetic. He is protecting Kai, not rallying the group.",
          observation:
            "An expressive communicator might say 'Kai, you're usually full of ideas! What's going on?' David's approach is far more careful and less public.",
          coachingTip:
            "The distinction at advanced level: supportive communicators protect people's dignity in how they check in. Expressive communicators are more open and direct about it.",
          styleContext:
            "Supportive communicators in remote settings are especially attuned to silence, because they know that silence on video often means something different to silence in a room.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not a match. David showed no interest in timeline progress, data, or efficiency. His entire intervention was about a person's wellbeing.",
          observation:
            "A task-focused communicator would not have paused the meeting for a check-in. David prioritised a person over the agenda.",
          coachingTip:
            "When someone pauses a productive meeting to ask 'Are you okay?', they are signalling that people matter more than progress in that moment.",
          styleContext:
            "Supportive communicators sometimes frustrate task-focused colleagues by pausing for people. But they believe that unresolved personal struggles will derail the task eventually.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "David wants to redistribute Kai's tasks without embarrassing them. How do you suggest handling it?",
      options: [
        {
          id: "s33-opt-a",
          text: "What if we frame it as a natural rebalance now that we're halfway through the project? We could say the team has learned more about the scope and it makes sense to play to everyone's strengths. That way Kai's workload shifts without anyone feeling like it's about them individually.",
          score: 10,
          result: "strong",
          explanation:
            "This protects Kai's dignity while achieving the practical goal. You reframed a correction as a natural team evolution, which is exactly how a supportive communicator would want it handled.",
        },
        {
          id: "s33-opt-b",
          text: "Just tell Kai we're taking some tasks off their plate because they're struggling. It's kinder to be honest than to pretend everything is fine.",
          score: 5,
          result: "partial",
          explanation:
            "Honesty is valuable, but 'because they're struggling' is exactly the framing David wants to avoid. There is a way to be honest without labelling someone as struggling in front of the team.",
        },
        {
          id: "s33-opt-c",
          text: "I'd just reassign the tasks and move on. We're already behind schedule and spending time on feelings is slowing us down further.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses the emotional dimension entirely and would leave Kai feeling exposed and unsupported. David would be deeply uncomfortable with this approach.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "David has asked you to draft a team message adjusting the project workload split. Write it in a way that feels collaborative and positive - not corrective. Match David's supportive communication style.",
      targetTraits: ["collaborative", "dignifying", "positive", "team-centred"],
      exampleStrongResponse:
        "Hi team. Now that we're at the midpoint of the project, I've been thinking about how we can play to our strengths for the second half. We've all learned a lot about the scope and what each workstream really involves, so it makes sense to rebalance a few things. I've drafted an updated task split that reflects where each of us can add the most value. Have a look and let me know if anything feels off. This is about setting us all up for a strong finish, together.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Perfectly pitched. Your message frames the rebalance as a positive team decision and protects everyone's dignity. No one reading this would feel singled out or rescued.",
          observation:
            "You used inclusive language throughout - 'we', 'us', 'together' - which reinforces that this is a shared effort, not a correction.",
          coachingTip:
            "When writing on behalf of a supportive communicator, always use 'we' language and frame changes as collective decisions, even when they address individual challenges.",
          styleContext:
            "Supportive communicators believe that how a change is communicated determines whether it strengthens or damages trust. Your message strengthens trust.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your message has the right direction but may accidentally signal that someone needed help. Check for any language that implies a problem was identified.",
          observation:
            "Phrases like 'some of us have been carrying too much' or 'the current split isn't working' can inadvertently point to individuals.",
          coachingTip:
            "Reframe any problem language as opportunity language. Instead of 'the split isn't working', try 'we can make the split work even better.'",
          styleContext:
            "Supportive communicators are sensitive to implied criticism, even when it is well-intentioned. Always lean towards the most generous interpretation.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your message is too blunt, too corrective, or too transparent about the real reason for the change. David specifically asked for a collaborative framing.",
          observation:
            "If your message makes it obvious that someone was struggling, it defeats the purpose of reframing the change.",
          coachingTip:
            "Ask yourself: if Kai read this message, would they feel supported or exposed? If there is any doubt, soften the language further.",
          styleContext:
            "Supportive communicators will sacrifice transparency to protect dignity. That is not dishonesty - it is a belief that how people feel about a change determines whether it works.",
        },
      },
    },
  },

  // ============================================
  // ANALYTICAL STYLE SCENARIOS (34-36)
  // ============================================

  // Scenario 34 - Rachel Finch, presentation, foundation
  {
    id: "scenario-34",
    title: "Show Me the Evidence",
    context:
      "You are in a stakeholder presentation where a colleague is proposing a new customer segmentation model. The slides are polished but light on data. Rachel Finch raises her hand.",
    chooseContext:
      "Rachel has challenged the proposal and the presenter has deferred to you to provide the supporting evidence. Rachel is watching you closely, expecting rigour.",
    rewriteContext:
      "After the presentation, Rachel sends you a message: 'I need a follow-up document with the methodology behind the segmentation model. Not the summary - the actual working.' You need to write the opening section.",
    characterId: "rachel-finch",
    dialogue:
      "The segmentation looks interesting, but I'm not seeing the methodology behind it. What data set was used? What was the sample size? And how were the segment boundaries determined? Because without that, I can't tell whether this is insight or assumption.",
    chooseDialogue:
      "You were involved in the analysis. Walk me through the methodology. What data did you use, how did you clean it, and what confidence level are we working with?",
    rewriteDialogue:
      "I need a follow-up document with the methodology behind the segmentation model. Not the summary - the actual working. I want to see the data sources, the sample, the approach, and any limitations you're aware of.",
    targetStyle: "analytical",
    difficulty: "foundation",
    category: "meeting",
    skillFocus: "recognition",

    spotQuestion: {
      prompt:
        "Rachel has challenged a presentation by asking for methodology, sample size, and segment boundaries. Which communication style is Rachel displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Rachel's detailed questions about methodology, data quality, and evidence are classic analytical-style behaviour. She will not accept conclusions without understanding the process behind them.",
          observation:
            "Notice Rachel did not dismiss the proposal. She asked for the evidence that would allow her to evaluate it properly. Analytical communicators want to be convinced, not told.",
          coachingTip:
            "When someone responds to a proposal with questions about methodology and data quality, you are dealing with an analytical communicator.",
          styleContext:
            "Analytical communicators see unsupported conclusions as untrustworthy, not just unconvincing. They need the working to trust the answer.",
        },
        partial: {
          result: "partial",
          explanation:
            "Understandable. Both analytical and direct styles are task-focused and can be challenging. But Rachel is not pushing for a faster decision - she is pushing for better evidence.",
          observation:
            "A direct communicator would ask 'What is the recommendation?' Rachel asked 'What is the methodology?' That distinction reveals the style.",
          coachingTip:
            "Direct communicators challenge proposals by asking 'So what?' Analytical communicators challenge proposals by asking 'How do you know?'",
          styleContext:
            "Both styles can seem demanding, but they demand different things: direct wants action, analytical wants evidence.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not a match. Rachel showed no interest in relationships, team feelings, or creative vision. Her focus was entirely on data quality and methodological rigour.",
          observation:
            "There was no warmth, no storytelling, and no concern for how the presenter felt. This is an evidence-focused intervention.",
          coachingTip:
            "When someone's first response to a proposal is to question the data rather than the idea, the relationship, or the speed, they are analytical.",
          styleContext:
            "Analytical communicators can seem cold when they challenge proposals, but their intent is quality, not criticism. They want the work to be robust.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Rachel has asked you to walk through the methodology behind the segmentation. How do you respond?",
      options: [
        {
          id: "s34-opt-a",
          text: "The model uses 18 months of transaction data from our CRM, covering 42,000 active customers. We cleaned the set by removing accounts with fewer than three transactions. Segments were defined using k-means clustering with five variables. The confidence interval is 95%. I can share the full specification after the meeting.",
          score: 10,
          result: "strong",
          explanation:
            "Precise, structured, and evidence-rich. You answered each of Rachel's questions with specific data points and offered documentation. This is exactly what an analytical communicator needs.",
        },
        {
          id: "s34-opt-b",
          text: "We looked at a large sample of customer data and used a standard clustering approach. The segments felt right based on what we know about the market. I can dig into the specifics if needed.",
          score: 5,
          result: "partial",
          explanation:
            "Too vague for Rachel. 'Large sample', 'standard approach', and 'felt right' are exactly the kind of unsupported claims she was challenging.",
        },
        {
          id: "s34-opt-c",
          text: "The important thing is that the segments make strategic sense and the leadership team is excited about them. I think we should focus on the opportunity rather than getting bogged down in the technical detail.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses Rachel's entire perspective. Telling an analytical communicator to ignore methodology and focus on excitement will destroy your credibility with them.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Rachel has asked for a methodology document covering data sources, sample, approach, and limitations. Write the opening section in a style that matches Rachel's analytical communication preferences.",
      targetTraits: ["precise", "structured", "evidence-based", "transparent"],
      exampleStrongResponse:
        "Methodology: Customer Segmentation Model v2.1. Data Source: CRM transaction records, January 2024 to June 2025. Sample: 42,000 active customer accounts (defined as 3+ transactions in the period). Cleaning: Duplicate records removed; incomplete profiles excluded (n=3,200). Approach: K-means clustering across five variables (purchase frequency, average order value, category breadth, recency, channel preference). Limitations: Data excludes offline-only customers (estimated 8% of base). Seasonal purchasing patterns may skew recency weighting. Model has not been validated against external benchmarks.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Excellent. Your document is structured, specific, and transparent about limitations. Rachel would trust this as a foundation for her own analysis.",
          observation:
            "You included specific numbers, named your approach, and voluntarily disclosed limitations. That transparency builds trust with analytical communicators.",
          coachingTip:
            "Analytical communicators respect honesty about limitations more than they respect confidence without evidence. Always include what you do not know.",
          styleContext:
            "Analytical communicators see disclosed limitations as a sign of intellectual honesty, not weakness. Hiding limitations is what destroys their trust.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your document has some useful detail but may lack the precision or structure Rachel expects. Check for vague language or missing specifics.",
          observation:
            "Phrases like 'a significant sample' or 'standard methodology' are too vague for an analytical audience. They want numbers and names.",
          coachingTip:
            "Replace every qualitative descriptor with a quantitative one. Instead of 'a large data set', write '42,000 records across 18 months.'",
          styleContext:
            "Analytical communicators process information structurally. If your document lacks clear headings and specific data points, they will struggle to trust it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your document is too narrative, too vague, or missing the technical detail Rachel specifically requested. She asked for 'the actual working', not a summary.",
          observation:
            "A methodology document that reads like a marketing brief will not satisfy an analytical communicator. They need the technical substance.",
          coachingTip:
            "Go back to Rachel's request: data sources, sample, approach, limitations. Answer each one with specific, verifiable information.",
          styleContext:
            "Analytical communicators use methodology documents to verify claims independently. If your document does not contain enough detail for them to replicate or validate your work, it fails its purpose.",
        },
      },
    },
  },

  // Scenario 35 - Owen Grant, conflict, intermediate
  {
    id: "scenario-35",
    title: "The Quality Gatekeep",
    context:
      "The team is under pressure to release a software update ahead of schedule. The project manager wants to skip the final round of testing to meet the client deadline. Owen Grant pushes back.",
    chooseContext:
      "Owen has made his position clear and the project manager is frustrated. You are caught in the middle and Owen asks for your assessment of the risk.",
    rewriteContext:
      "Owen asks you to write a brief risk summary that he can share with the project manager and the client. He wants the facts to speak for themselves.",
    characterId: "owen-grant",
    dialogue:
      "I understand the pressure. But skipping the final test cycle is not a shortcut - it's a risk transfer. We're moving an unknown number of defects from our testing environment to the client's live system. I've seen this before. The last time we skipped final QA, we had fourteen critical bugs in production within the first week. I won't sign off on a release I haven't verified.",
    chooseDialogue:
      "I need your honest assessment. Based on what we've tested so far, what is the defect probability if we skip the final round? And what would the impact be on the client's operations if we ship with unresolved issues?",
    rewriteDialogue:
      "Write me a risk summary I can share with the project manager and the client. Keep it factual - no opinions, no persuasion. Just the data, the risk, and the historical precedent. Let the facts make the case.",
    targetStyle: "analytical",
    difficulty: "intermediate",
    category: "conflict",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Owen has refused to sign off on an early release by citing historical data and risk analysis. Which communication style is Owen displaying?",
      correctStyle: "analytical",
      adjacentStyle: "supportive",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Owen's reliance on historical evidence, risk quantification, and refusal to act without verification are hallmarks of an analytical communicator.",
          observation:
            "Notice Owen cited a specific precedent - fourteen critical bugs - to support his position. Analytical communicators build arguments on evidence, not opinion.",
          coachingTip:
            "When someone in a conflict cites data and historical precedent rather than feelings or authority, you are dealing with an analytical communicator.",
          styleContext:
            "Analytical communicators in conflict situations are rarely emotional. Their resistance is evidence-based and systematic, which can make them very difficult to override.",
        },
        partial: {
          result: "partial",
          explanation:
            "Interesting thought. Owen's caution and reluctance to rush might look supportive, but his resistance is not driven by concern for people - it is driven by concern for quality and process.",
          observation:
            "A supportive communicator would say 'I'm worried about the team being blamed if this fails.' Owen said 'I've seen the data on what happens when we skip QA.' The driver is evidence, not empathy.",
          coachingTip:
            "Caution can signal either supportive or analytical styles. The difference is what drives it: concern for people (supportive) or concern for accuracy (analytical).",
          styleContext:
            "Both supportive and analytical styles resist being rushed, but for different reasons. Supportive fears harm to people; analytical fears harm to quality.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not a match. Owen's pushback is not about speed, energy, or relationships. It is entirely about evidence, process, and risk management.",
          observation:
            "There was no enthusiasm, no rallying cry, and no push for a faster alternative. Owen is methodically building a case against a specific risk.",
          coachingTip:
            "When resistance to a decision is built on data and precedent rather than instinct or authority, the communicator is analytical.",
          styleContext:
            "Analytical communicators do not resist for the sake of being difficult. They resist because the evidence tells them the proposed path is flawed.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Owen has asked for your honest risk assessment of skipping the final test cycle. How do you respond?",
      options: [
        {
          id: "s35-opt-a",
          text: "Based on the current test results, we've resolved 87% of identified defects. The remaining 13% include two severity-one issues that have not been regression tested. If we skip the final cycle, the probability of a critical production defect is approximately 30%, based on the pattern from similar releases. The client impact would be service disruption for an estimated 2,000 users.",
          score: 10,
          result: "strong",
          explanation:
            "Data-rich, specific, and structured. You gave Owen exactly what he asked for: a factual risk assessment with numbers, probabilities, and impact estimates.",
        },
        {
          id: "s35-opt-b",
          text: "I think there's definitely some risk, but it's hard to say exactly how much without more analysis. My gut says we should probably do the testing, but I understand the time pressure.",
          score: 5,
          result: "partial",
          explanation:
            "Too vague for Owen. 'Some risk', 'hard to say', and 'my gut says' are exactly the kind of imprecise language that frustrates an analytical communicator.",
        },
        {
          id: "s35-opt-c",
          text: "Honestly, I think we should just trust the team and ship it. We've done enough testing and the client needs it. Overthinking this will slow us down.",
          score: 0,
          result: "weak",
          explanation:
            "This dismisses evidence-based risk assessment as 'overthinking', which is deeply disrespectful to an analytical communicator. Owen will lose trust in your judgement.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Owen has asked you to write a factual risk summary to share with the project manager and client. No opinions, no persuasion - just data, risk, and precedent. Write it in a style that matches Owen's analytical communication preferences.",
      targetTraits: ["factual", "evidence-based", "structured", "objective"],
      exampleStrongResponse:
        "Risk Summary: Early Release v4.2. Current test completion: 87% of identified defects resolved. Outstanding: 2 severity-one defects, not yet regression tested. Historical precedent: Release v3.8 (March 2025) shipped without final QA cycle. Result: 14 critical production defects in first 7 days, 3-day service disruption for 1,800 users, unplanned remediation cost of 45K. Risk assessment: Estimated 30% probability of critical production defect if final test cycle is skipped. Recommendation is not included as requested - this summary presents only the facts.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Outstanding. Your summary is factual, structured, and transparent. It lets the data speak without editorialising, which is exactly what Owen wanted.",
          observation:
            "You included specific numbers, historical precedent, and a clear risk estimate. The deliberate exclusion of a recommendation shows you understood the brief perfectly.",
          coachingTip:
            "When an analytical communicator says 'just the facts', they mean it. Resist the urge to interpret or recommend unless asked.",
          styleContext:
            "Analytical communicators trust people who can separate facts from opinions. Presenting data without spin is the highest form of professional respect to them.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your summary has some useful content but may include opinions or lack the specific data Owen requested. Check for any language that interprets rather than reports.",
          observation:
            "Phrases like 'I believe', 'it seems likely', or 'in my view' are opinions, not facts. Owen specifically excluded those.",
          coachingTip:
            "Read your summary and delete every sentence that contains an opinion or interpretation. What remains is what Owen actually asked for.",
          styleContext:
            "Analytical communicators can spot opinion disguised as fact immediately. If you cannot support a claim with data, remove it.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your summary is too subjective, too vague, or includes persuasion. Owen asked for facts and precedent - not advocacy or emotion.",
          observation:
            "A risk summary that reads like an argument will undermine its credibility with Owen. He wants to draw his own conclusions from the evidence.",
          coachingTip:
            "Start over with a strict rule: every sentence must contain a verifiable fact or a specific number. If it does not, it does not belong in this document.",
          styleContext:
            "Analytical communicators use factual summaries to build their own case. They do not want your case - they want the raw material to construct their own.",
        },
      },
    },
  },

  // Scenario 36 - Fiona Banks, negotiation, advanced
  {
    id: "scenario-36",
    title: "The Fine Print",
    context:
      "You are in a contract renewal meeting with a long-standing supplier. The supplier has proposed a 7% price increase, citing rising costs. Fiona Banks is reviewing the proposal in real time.",
    chooseContext:
      "Fiona has dismantled the supplier's justification with specific data points. She now turns to you to provide additional analysis on whether the proposed increase is market-aligned.",
    rewriteContext:
      "After the meeting, Fiona asks you to prepare a one-page briefing comparing the supplier's proposed rates against three market benchmarks. She will use it in the next negotiation round.",
    characterId: "fiona-banks",
    dialogue:
      "A 7% increase is a number, not a justification. I've looked at your cost base disclosures from last quarter and your raw material input costs rose by 3.2%, not 7. Your labour costs are flat year-on-year. So where is the additional 3.8% coming from? I need a line-by-line breakdown before we discuss this further.",
    chooseDialogue:
      "Before the next round, I need to know how this compares to the market. What are similar suppliers charging for equivalent service levels? I want like-for-like data, not averages.",
    rewriteDialogue:
      "Prepare a one-page briefing: their proposed rates against three comparable suppliers. Same service tier, same contract length, same geography. I want to see where they're above market, where they're in line, and where the gaps are. No narrative - just the comparison.",
    targetStyle: "analytical",
    difficulty: "advanced",
    category: "client",
    skillFocus: "clarity",

    spotQuestion: {
      prompt:
        "Fiona has challenged a supplier's price increase by citing their own cost disclosures and demanding a line-by-line breakdown. Which communication style is Fiona displaying?",
      correctStyle: "analytical",
      adjacentStyle: "direct",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Correct. Fiona's use of the supplier's own data to challenge their proposal, combined with her demand for a granular breakdown, is advanced analytical behaviour. She has done her homework and expects the same level of rigour from others.",
          observation:
            "Notice that Fiona did not simply reject the proposal. She deconstructed it with specific numbers, identifying exactly where the justification fell short. This level of preparation is characteristic of analytical communicators.",
          coachingTip:
            "Advanced analytical communicators often arrive at negotiations better prepared than anyone else in the room. They use evidence as leverage, not authority.",
          styleContext:
            "Analytical communicators in negotiations are formidable because their challenges are always grounded in data. You cannot deflect a specific number with a general assertion.",
        },
        partial: {
          result: "partial",
          explanation:
            "Close. Fiona is certainly assertive and her challenge is sharp, which can look direct. But notice that her pushback is built on specific data analysis, not on authority or impatience. She challenged the number, not the person.",
          observation:
            "A direct communicator might say 'Seven percent is too high. Come back with a better number.' Fiona said 'Your cost data shows 3.2%, so explain the gap.' That is analytical precision.",
          coachingTip:
            "In negotiations, the clearest distinction is how someone challenges a proposal. Direct challenges the outcome; analytical challenges the evidence behind the outcome.",
          styleContext:
            "Direct and analytical negotiators can both be tough, but their toughness comes from different places: authority versus evidence.",
        },
        weak: {
          result: "weak",
          explanation:
            "Not a match. Fiona showed no concern for the supplier relationship, team harmony, or creative alternatives. Her focus was entirely on financial accuracy and evidence-based challenge.",
          observation:
            "There was no warmth, no storytelling, and no attempt to build rapport. This is a forensic examination of a commercial proposal.",
          coachingTip:
            "When someone responds to a proposal by citing the other party's own data against them, you are dealing with a highly analytical communicator.",
          styleContext:
            "Analytical communicators see negotiations as evidence exchanges. The party with the better data wins. Emotion and relationship are secondary to accuracy.",
        },
      },
    },

    chooseQuestion: {
      prompt:
        "Fiona wants like-for-like market data on comparable suppliers. How do you respond?",
      options: [
        {
          id: "s36-opt-a",
          text: "I've pulled data from three comparable suppliers: Apex, Vanguard, and Clearline. All are same tier, same geography, twelve-month contracts. Apex is at 4.2% below the proposed rate, Vanguard is 2.8% below, and Clearline is within 0.5%. The weighted average across all three is 2.5% below the proposed increase. I can provide the full comparison table.",
          score: 10,
          result: "strong",
          explanation:
            "Precise, like-for-like, and structured exactly as Fiona requested. You named specific comparators, matched the criteria she set, and offered supporting documentation.",
        },
        {
          id: "s36-opt-b",
          text: "I've had a look around and the market is generally lower than what they're proposing. Most suppliers seem to be in the 3-5% range for increases this year. I can do a more detailed comparison if you need it.",
          score: 5,
          result: "partial",
          explanation:
            "Too vague. Fiona specifically asked for like-for-like data, not market generalisations. 'Most suppliers' and '3-5% range' lack the precision she needs.",
        },
        {
          id: "s36-opt-c",
          text: "To be honest, I think 7% is within the range of what we should expect given inflation. They've been a good partner and I'd rather keep the relationship strong than push too hard on price.",
          score: 0,
          result: "weak",
          explanation:
            "This substitutes opinion for data and prioritises relationship over evidence. Fiona will see this as a failure to do the analytical work required.",
        },
      ],
    },

    rewriteQuestion: {
      prompt:
        "Fiona has asked for a one-page briefing comparing the supplier's proposed rates against three benchmarks. Same service tier, same contract length, same geography. Write the opening section in a style that matches Fiona's analytical communication preferences. No narrative - just the comparison.",
      targetTraits: ["precise", "comparative", "structured", "data-driven"],
      exampleStrongResponse:
        "Supplier Rate Comparison - Contract Renewal 2026. Proposed rate: 7.0% increase (Supplier: Meridian Logistics). Benchmark 1 - Apex Distribution: 2.8% increase. Same tier, 12-month contract, UK mainland. Gap: Meridian is 4.2 percentage points above. Benchmark 2 - Vanguard Supply Co: 4.2% increase. Same tier, 12-month contract, UK mainland. Gap: Meridian is 2.8 percentage points above. Benchmark 3 - Clearline Fulfilment: 6.5% increase. Same tier, 12-month contract, UK mainland. Gap: Meridian is 0.5 percentage points above. Weighted market average: 4.5%. Meridian premium above market: 2.5 percentage points.",
      feedbackByResult: {
        strong: {
          result: "strong",
          explanation:
            "Exactly what Fiona asked for. Structured, comparable, and free of narrative. The data speaks for itself and provides clear leverage for the next negotiation round.",
          observation:
            "You matched criteria precisely - same tier, same length, same geography - and presented the gap analysis clearly. Fiona can use this directly in the meeting.",
          coachingTip:
            "When writing for advanced analytical communicators, let the structure of the data make the argument. If the comparison is well-constructed, no narrative is needed.",
          styleContext:
            "Analytical communicators trust documents that show rigour in construction. If the comparison criteria are sloppy, they will reject the conclusion regardless of the data.",
        },
        partial: {
          result: "partial",
          explanation:
            "Your briefing has some useful data but may lack the precise comparative structure Fiona needs. Check that each benchmark uses identical criteria.",
          observation:
            "If your comparisons mix different contract lengths, geographies, or service tiers, the data is not like-for-like and Fiona will not accept it.",
          coachingTip:
            "Create a consistent format for each benchmark: name, rate, contract terms, and gap to the proposal. Consistency is as important as the numbers themselves.",
          styleContext:
            "Analytical communicators evaluate the methodology of a comparison before the results. If the structure is flawed, the data is worthless to them.",
        },
        weak: {
          result: "weak",
          explanation:
            "Your briefing includes too much narrative, lacks specific comparisons, or uses inconsistent criteria. Fiona asked for data, not commentary.",
          observation:
            "A briefing that describes the market in general terms rather than providing specific, matched comparisons will not serve Fiona's purpose.",
          coachingTip:
            "Go back to the brief: three comparable suppliers, same tier, same length, same geography. Present each one identically and let the numbers tell the story.",
          styleContext:
            "Analytical communicators in negotiations use data as their primary tool. A weak briefing does not just fail to persuade - it actively undermines their negotiating position.",
        },
      },
    },
  },
];
