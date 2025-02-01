 import {QuadApp} from '../components/RegistrationForms.js';
 import {DualApp} from '../components/RegistrationForms.js';
 import {TrioApp} from '../components/RegistrationForms.js';
 import {SoloApp} from '../components/RegistrationForms.js';
 import {FootballApp} from '../components/RegistrationForms.js';

 const events = [
  {
    date: "24",
    month: "FEB",
    year: "2025",
    title: "Technical Events",
    description: "Join us to explore the tech world with enthralling coding competitions and win the race against time",
    location: "Mithibai College, Mumbai",
    time: "24 Feb 2025, 9:00 AM - 6:00 PM",
    subEvents: [
      {
        title: "Techspark Hackathon",
        description: "Join us for a 48-hour hackathon where creativity meets technology to shape the future. Build groundbreaking projects from scratch, leveraging any programming language or AI tools of your choice, and showcase your talent across web, cloud, blockchain, and more. ",
        status: "STAY TUNED",
        registrationForm:QuadApp,
        eventRules:[
      "The team can have a min 3 participants & a maximum of 4 participants.",
      "Participants are required to bring their own hardware devices for the development of their projects.",
      "The participating teams have the liberty to choose any language or software for their projects.",
      "Participants are allowed & will be provided with internet access for the duration of the Hackathon.",
      "Projects must be developed during the hackathon. Any pre-existing projects or code will not be accepted."
    ]
      },
      {
        title: "Code - a - Replica",
        description: "Code - a - Replica is an engaging coding event designed to test participants coding skills and problem-solving abilities. In this event participants will be provided with the output of a piece of code. The challenge is to reverse-engineer or construct the exact code that produces the specific output.",
        status: "STAY TUNED",
        registrationForm:DualApp,
        eventRules:[
         "Each team must consist of 2 members only",
         "The participants are not allowed to discuss with other teams during the coding round",
         "The utilization of artificial intelligence, personal hardware, and mobile phones is not permitted during the event. ",
         "The participants are also not allowed to open any new tabs or window in any browser or any files without the permission"
        ]
      },
      {
        title: "Escape Room",
        description: "Your computer lab has been taken over by a rogue AI, and it’s on the verge of unleashing corrupted code across the internet. As computer science students, you are humanity’s last line of defense. Your mission: solve a series of intricate puzzles to uncover a five-digit code that will shut down the AI before it’s too late.",
        status: "STAY TUNED",
        registrationForm:TrioApp,
        eventRules:[
         "No use of mobile phones or web resources (including AI tools such as ChatGPT) is allowed unless required for a specific task.",
         "Disruptive behavior may result in disqualification and fines for damages if necessary",
         "Participants should report at least half an hour before the event. No late entries will be allowed."
        ]


      }
    ]
  },
  {
    date: "24",
    month: "FEB",
    year: "2025",
    title: "Cultural Events",
    description: "Join us in this thrilling hunt, all fun and games. Hear out all the chilling ones, are you ready to debate?",
    location: "Mithibai College, Mumbai",
    time: "24 Feb 2025, 9:00 AM - 6:00 PM",
    subEvents: [
      {
        title: "Treasure Hunt",
        description: "HUNT AGAINST TIME is a thrilling 3-stage challenge! The adventure begins, put your wit, skill, and teamwork to the ultimate test and emerge victorious!",
        status: "STAY TUNED",
        registrationForm:TrioApp,
        eventRules:[
         "Each team MUST contain exactly 3 players",
         "ALL riddles MUST be answered correctly before moving to the tasks",
         "At a time 1 team can perform only 1 task",
         "Collected sticks should NOT be damaged and they need to be submitted together"
        ]
      }, 
      {
        title: "Debate",
        description: "Get ready for a war of words and a battle of wits! Our debate event is the ultimate platform for you to showcase your skills, challenge your peers, test your arguments, and emerge victorious. This year's event promises to be bigger and better than ever, with exciting topics, esteemed judges, and prizes to be won. Gather your team, prepare your arguments, and take on the best to emerge as the champion of logic and rhetoric.",
        status: "STAY TUNED",
        registrationForm:SoloApp,
        eventRules:[
          "No-interruptions during a speaker’s turn, unless it’s during the cross-fire round",
          "The time limit must be strictly followed. Speakers will be penalized for exceeding the allotted time.",
          "The question will be repeated for a maximum of 3 times.",
          "No participant is allowed to reprimand the host or organizers regarding the topic given on the spot. Any form of disrespect, offensive language, or personal attacks will result in disqualification.",
          "All arguments must be supported by credible sources. (Facts, statistics, and expert quotes are encouraged, but opinions should be minimized.)"
        ]
      },
      {
        title: "Trivia",
        description: "Unleash the power of words and ideas. This engaging event brings together sharp minds to discuss, argue, and explore diverse perspectives on pressing topics. Participants will showcase their critical thinking, persuasive skills, and mastery of rhetoric in an intense yet enriching battle of wits.",
        status: "STAY TUNED",
        registrationForm:DualApp,
        eventRules:[
          "Each team must have 2 participants",
          "Questions will be asked sequentially, and teams will buzz in to answer",
          "After buzzing, teams will have 30 seconds to respond.",
          "The use of electronic devices, smartwatches, and laptops, is strictly prohibited during the event.",
          "Mobile phones may be used exclusively for operating the buzzer. AI tools or any external assistance are not allowed."
        ]
      }
    ]
  },
  {
    date: "24",
    month: "FEB",
    year: "2025",
    title: "Gaming Events",
    description: "Compete in thrilling matches of FC24 and BGMI and prove your gaming prowess.",
    location: "Mithibai College, Mumbai",
    time: "24 Feb 2025, 9:00 AM - 6:00 PM",
    subEvents: [
      {
        title: "Battle Grounds Mobile India (BGMI)",
        description: "Gear up for an intense battle in the BGMI Tournament! In this fast-paced event, players will need to show off their shooting skills, strategic thinking, and teamwork to outlast their opponents. This event is a battle royale, where strategy and teamwork are key to victory.",
        status: "STAY TUNED",
        registrationForm:QuadApp,
        eventRules:[
         "All players must have the latest version of the game installed before the tournament starts.",
         "In-game voice chat is allowed; external communication is strictly prohibited.",
         "The winner will be decided by the team with the highest total points across all four matches, based on placement and performance."
        ]
      },
      {
        title: "Ultimate Goal Gala (FC24)",
        description: "Get ready for an intense, head-to-head football battle in the FC24 Tournament! This is your chance to showcase your skills, quick thinking, and competitive edge as you go toe-to-toe with other top players. Whether you're a strategic mastermind or a reflex-based powerhouse, this tournament will test your limits. Only the strongest will rise to the top, with the best of the best advancing to the final. It’s time to prove you're the ultimate FC24 champion!",
        status: "STAY TUNED",
        registrationForm:SoloApp,
        eventRules:[
                    "Game Speed: Normal",
                    "Ball Settings: Default settings",
                    "Team Selection: No duplicate teams are allowed. If both players select the same team, a coin flip will determine who keeps their selection.",
                    "Game Mode: Live mode enabled for fairness."
                   ]
      }
    ]
  },
  {
    date: "25",
    month: "FEB",
    year: "2025",
    title: "Sports Events",
    description: "Show your skills in Football and Chess to seize the victory.",
    location: "Mithibai College, Mumbai",
    time: "25 Feb 2025, 9:00 AM - 6:00 PM",
    subEvents: [
      {
        title: "Netflix and Chill (Football Tournament)",
        description: "Gear up for an electrifying football tournament where passion meets glory on the field! Experience the thrill as teams clash, showcasing skill, speed, and sportsmanship in a battle for supremacy. “The beautiful game” awaits—filled with unforgettable moments. “A game of two halves” where comebacks and last-minute thrillers keep you on the edge of your seat.",
        status: "STAY TUNED",
        registrationForm:FootballApp,
        eventRules:[
        "The squad size is 7 players - 5 on the field + 2 subs.",
        "Spikes and Studs are not allowed.",
        "ONLY CAPTAINS are allowed to speak to the referee. In case of any unnecessary arguments, if needed the captain can be shown a red card, even if a player causes the trouble. In more severe cases, the match can get suspended giving the opponent a 3-0 win.",
        "Substitutions can only be made when the ball is not in play or in case of major injury.",
        "A player who is shown a yellow card will be sent off for 1 minute and a player who is shown a red card will be sent off for the entire match.",
        "The decision made by the organizing committee will be final and enforceable by everyone.",
        "In case of a tie, the match will directly go to the penalties."
      ]
      },
      {
        title: "Queen's Gambit (Chess Tournament)",
        description: "Join us for an exciting chess tournament celebrating strategy, skill, and sportsmanship! This event promises thrilling matches and a competitive yet friendly atmosphere. Showcase your strategic brilliance, challenge fellow chess enthusiasts, and make lasting memories in this grand celebration of intellect and competition.",
        status: "STAY TUNED",
        registrationForm:SoloApp,
        eventRules:[
        "Time control - 5 minutes rapid.",
        "The game ends in checkmate, stalemate, resignation or draw(several conditions apply).",
        "Everyone should have a chess clock app prior to the game."
        ]
      }
    ]
  }
];



export {
   events
};