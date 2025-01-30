 import {HackathonRegistration} from '../components/RegistrationForms.js';

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
        registrationForm:HackathonRegistration,
        eventRules:[
      "Players must use their own mobile devices for competition.",
      "The use of any external devices like controllers, keyboards, or mouse is strictly prohibited.",
      "Players must be connected to the provided tournament WiFi network.",
      "Game version: All players must install the latest version of the game."
    ]
      },
      {
        title: "Code - a - Replica",
        description: "Code - a - Replica is an engaging coding event designed to test participants coding skills and problem-solving abilities. In this event participants will be provided with the output of a piece of code. The challenge is to reverse-engineer or construct the exact code that produces the specific output.",
        status: "STAY TUNED",
        eventRules:["Each team must consist of 2 members only",
         "The participants are not allowed to discuss with other teams during the coding round",
         "The utilization of artificial intelligence, personal hardware, and mobile phones is not permitted during the event. ",
         "The participants are also not allowed to open any new tabs or window in any browser or any files without the permission"
        ]
      },
      {
        title: "Escape Room",
        description: "Your computer lab has been taken over by a rogue AI, and it’s on the verge of unleashing corrupted code across the internet. As computer science students, you are humanity’s last line of defense. Your mission: solve a series of intricate puzzles to uncover a five-digit code that will shut down the AI before it’s too late.",
        status: "STAY TUNED",
        
        eventRules:["No use of mobile phones or web resources are allowed unless required",
        "Registration of events will be entertained on first come first preference basis",
        "Disruptive behavior may result in disqualification and fines for damages if necessary",
        "Participants should report half an hour before the event.NO late entry"]


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
        eventRules:[
         "Each team MUST contain exactly 3 players",
         "ALL riddles MUST be answered correctly before moving to the tasks",
         "At a time 1 team can perform only 1 task",
         "Collected sticks should NOT be damaged and they need to be submitted together"
        ]
      }, 
      {
        title: "Debate",
        description: "Unleash the power of words and ideas. This engaging event brings together sharp minds to discuss, argue, and explore diverse perspectives on pressing topics. Participants will showcase their critical thinking, persuasive skills, and mastery of rhetoric in an intense yet enriching battle of wits.",
        status: "STAY TUNED",
        eventRules:[
          "All arguments must be supported by credible sources.",
          "No-interruptions during a speaker’s turn, unless it’s during the cross-fire round",
          "The time limit must be strictly followed. Penalties will be given for exceeding the allotted time.",
          "Use of mobile phones or any digital means is strictly prohibited",
        ]
      },
      {
        title: "Trivia",
        description: "Unleash the power of words and ideas. This engaging event brings together sharp minds to discuss, argue, and explore diverse perspectives on pressing topics. Participants will showcase their critical thinking, persuasive skills, and mastery of rhetoric in an intense yet enriching battle of wits.",
        status: "STAY TUNED",
        eventRules:[
          "Questions will be asked sequentially,teams will buzz in to answer and will be given 30 seconds to respond",
          "Correct Answer: +5 points.Incorrect Answer -2 Failure to Answer: -1 points ",
          "use of electronic devices is strictly prohibited during the event",
          "Speaking out of turn or during another team’s turn"

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
        eventRules:["No malpractices allowed"]
      },
      {
        title: "Ultimate Goal Gala (FC24)",
        description: "Get ready for an intense, head-to-head football battle in the FC24 Tournament! This is your chance to showcase your skills, quick thinking, and competitive edge as you go toe-to-toe with other top players. Whether you're a strategic mastermind or a reflex-based powerhouse, this tournament will test your limits. Only the strongest will rise to the top, with the best of the best advancing to the final. It’s time to prove you're the ultimate FC24 champion!",
        status: "STAY TUNED",
        eventRules:["No malpractices allowed"]
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
        eventRules:["No malpractices allowed"]
      },
      {
        title: "Queen's Gambit (Chess Tournament)",
        description: "Join us for an exciting chess tournament celebrating strategy, skill, and sportsmanship! This event promises thrilling matches and a competitive yet friendly atmosphere. Showcase your strategic brilliance, challenge fellow chess enthusiasts, and make lasting memories in this grand celebration of intellect and competition.",
        status: "STAY TUNED",
        eventRules:["No malpractices allowed"]
      }
    ]
  }
];



export {
   events
};