import { PentApp } from "../components/RegistrationForms.js";
import { DualApp } from "../components/RegistrationForms.js";
import { TrioApp } from "../components/RegistrationForms.js";
import { SoloApp } from "../components/RegistrationForms.js";
import { FootballApp } from "../components/RegistrationForms.js";

const events = [
  {
    date: "24",
    month: "FEB",
    year: "2025",
    title: "Technical Events",
    description:
      "Join us to explore the tech world with enthralling coding competitions and win the race against time!",
    location: "Mithibai College, Mumbai",
    time: "24 Feb 2025, 9:00 AM - 6:00 PM",
    subEvents: [
      {
        title: "Techspark's Hackathon",
        description:
          "Join us for a 27-hours hackathon where creativity meets technology to shape the future. Build groundbreaking projects from scratch, leveraging any programming language or AI tools of your choice, and showcase your talent across web, cloud, blockchain, and more. ",
        status: "REGISTRATION LIVE",
        registrationForm: TrioApp,
        eventDate: " 📅 24 Feb 2025, 11:30 AM Onwards",
        location: "📍 Mithibai College",
        eventRules: [
          "The team can have a minumum 2 participants & a maximum of 3 participants.",
          "Participants are required to bring their own hardware devices for the development of their projects.",
          "The participating teams have the liberty to choose any language or software for their projects.",
          "Participants are allowed & will be provided with internet access for the duration of the Hackathon.",
          "Projects must be developed during the hackathon. Any pre-existing projects or code will not be accepted.",
        ],
      },
      {
        title: "Mirror Match",
        description:
          "Code - a - Replica is an engaging coding event designed to test participants coding skills and problem-solving abilities. In this event participants will be provided with the output of a piece of code. The challenge is to reverse-engineer or construct the exact code that produces the specific output.",
        status: "REGISTRATION LIVE",
        registrationForm: DualApp,
        eventDate: " 📅 25 Feb 2025, 10:00 AM - 12:00 PM",
        location: "📍 Mithibai College",
        eventRules: [
          "Each team must consist of 2 members only.",
          "The participants are not allowed to discuss with other teams during the coding round.",
          "The evaluation criteria prioritize accuracy as the primary factor, followed by time complexity as a secondary consideration.",
          "The participants are also not allowed to open any new tabs or window in any browser or any files without permission.",
        ],
      },
      {
        title: "Hackattack",
        description:
          "Your computer lab has been taken over by a rogue AI, and it’s on the verge of unleashing corrupted code across the internet. As computer science students, you are humanity’s last line of defense. Your mission: solve a series of intricate puzzles to uncover a five-digit code that will shut down the AI before it’s too late.",
        status: "REGISTRATION LIVE",
        registrationForm: TrioApp,
        eventDate: " 📅 24 Feb 2025, 11:30 AM - 1:30 PM",
        location: "📍 Mithibai College",
        eventRules: [
          "No use or access of any files or web resources, including AI tools like ChatGPT, unless explicitly required for a specific task.",
          "All tasks must be completed within the stipulated time; no extensions will be granted.",
          "Participants must remain within their designated area and not loiter around/invade other's space.",
        ],
      },
    ],
  },
  {
    date: "24",
    month: "FEB",
    year: "2025",
    title: "Cultural Events",
    description:
      "Join us in this thrilling hunt, all fun and games. Hear out all the chilling ones, are you ready to debate?",
    location: "Mithibai College, Mumbai",
    time: "24 Feb 2025, 9:00 AM - 6:00 PM",
    subEvents: [
      {
        title: "Jack of all Treasures",
        description:
          "Jack-of-all-Treasures is a thrilling 3-stage challenge! The adventure begins with a Riddle Stage, where you'll need to solve a series of difficult riddles to unlock the next level. Successfully completing the riddles will lead you to the Task Stage, where you'll have to accomplish a set of challenging tasks. Solving all riddles and tasks, finally you'll reach the Treasure Hunt Stage, where you'll use cryptic clues to track down hidden cards scattered around the college. The team that finds minimum 13 cards first will emerge victorious, putting their wit, skill, and teamwork to the ultimate test!",
        status: "REGISTRATION LIVE",
        registrationForm: TrioApp,
        eventDate: " 📅 24 Feb 2025, 2:00 AM - 4:00 PM",
        location: "📍 Mithibai College",
        eventRules: [
          "Each team MUST contain at least 2 and at most 3 players.",
          "All stages must be completed in sequence; teams cannot skip any stage.",
          "At a time 1 team can perform only 1 task.",
          "Collected cards should NOT be damaged and they need to be submitted together.",
        ],
      },
      {
        title: "Convince-a-thon",
        description:
          "Get ready for a war of words and a battle of wits! Our debate event is the ultimate platform for you to showcase your skills, challenge your peers, test your arguments, and emerge victorious. Participants will showcase their critical thinking, persuasive skills, and mastery of rhetoric in an intense yet enriching battle of wits. Gather your team, prepare your arguments, and take on the best to emerge as the champion of logic and rhetoric.",
        status: "REGISTRATION LIVE",
        registrationForm: SoloApp,
        eventDate: " 📅 25 Feb 2025, 10:00 AM - 1:00 PM",
        location: "📍 Mithibai College",
        eventRules: [
          "No-interruptions during a speaker’s turn, unless it’s during the cross-fire round.",
          "The discussion topic will be given on the spot and use of AI tools such as ChatGPT is strictly prohibited during the event.",
          "The question will be repeated for a maximum of 3 times.",
          "No participant is allowed to reprimand the host or organizers regarding the topic given on the spot. Any form of disrespect, offensive language, or personal attacks will result in disqualification.",
          "All arguments must be supported by credible sources and can not exceed the alloted time.",
        ],
      },
      {
        title: "QuizCraft",
        description:
          "Put your knowledge to the test in this electrifying pop culture trivia showdown! Dive into the world of movies, music, TV shows, memes, and more as you compete against sharp minds in a fast-paced battle of wits. Showcase your quick thinking, dominate the leaderboard, and claim ultimate bragging rights—along with exciting prizes! Get ready for the most thrilling quiz competition of the year!",
        status: "REGISTRATION LIVE",
        registrationForm: DualApp,
        eventDate: " 📅 24 Feb 2025, 2:30 AM - 3:30 PM",
        location: "📍 Mithibai College",
        eventRules: [
          "Each team must have 2 participants.",
          "Questions will be asked sequentially, and teams will buzz in to answer.",
          "After buzzing, teams will have 30 seconds to respond.",
          "The use of electronic devices, smartwatches, and laptops, is strictly prohibited during the event.",
          "Mobile phones should be used exclusively for operating the buzzer. AI tools or any external assistance are not allowed and would lead to immediate disqualification.",
        ],
      },
    ],
  },
  //
  {
    date: "24",
    month: "FEB",
    year: "2025",
    title: "Gaming Events",
    description:
      "Compete in thrilling matches of FC24 and Valorant and prove your gaming prowess.",
    location: "Mithibai College, Mumbai",
    subEvents: [
      {
        title: "Agents of TechSpark (Valorant)",
        description:
          "Agents of TechSpark is an epic Valorant tournament where teams will face off in an intense, high-stakes match. Set in the heart of innovation, this event combines fierce competition with cutting-edge technology, offering an unforgettable experience for players. Who of them will rise to become the ultimate Agent of TechSpark? Join us to find out!",
        status: "REGISTRATION LIVE",
        registrationForm: PentApp,
        eventDate: " 📅 24 Feb 2025, 9:00 AM - 1:00 PM",
        location: "📍 Gaming Cafe",
        eventRules: [
          "The format for the event is Knockouts.",
          "All matches will be a Best of 1 (1 match on 1 map).",
          "Each team will get 5 minutes for warm-up.",
          "Use of Discord for communication is NOT allowed.",
          "In case any team has fewer individuals show up than the originally enrolled team then they are still free to participate but shall not receive any sort of aid or advantage.",
          "Participants will only be allowed to play with the in-game IDs submitted to the OC.",
        ],
      },
      {
        title: "Ultimate Goal Gala (FC24)",
        description:
          "Get ready for an intense, head-to-head football battle in the FC24 Tournament! This is your chance to showcase your skills, quick thinking, and competitive edge as you go toe-to-toe with other top players. Whether you're a strategic mastermind or a reflex-based powerhouse, this tournament will test your limits. Only the strongest will rise to the top, with the best of the best advancing to the final. It’s time to prove you're the ultimate FC24 champion!",
        status: "REGISTRATION LIVE",
        registrationForm: SoloApp,
        eventDate: " 📅 24 Feb 2025, 11:00 AM - 3:00 PM",
        location: "📍 Mithibai College",
        eventRules: [
          "Game Speed: Normal",
          "Ball Settings: Default settings",
          "Team Selection: No duplicate teams are allowed. If both players select the same team, a coin flip will determine who keeps their selection.",
          "Game Mode: Live mode enabled for fairness.",
          "If the game disconnects during the first half and the score is tied, the match will be restarted.",
          "If one player is leading, they have the option to restart or accept the win.",
        ],
      },
    ],
  },
  {
    date: "25",
    month: "FEB",
    year: "2025",
    title: "Sports Events",
    description: "Show your skills in Football and Chess to seize the victory.",
    location: "Mithibai College, Mumbai",
    subEvents: [
      {
        title: "Netflicks and Chill (Football Tournament)",
        description:
          "Gear up for an electrifying football tournament where passion meets glory on the field! Experience the thrill as teams clash, showcasing skill, speed, and sportsmanship in a battle for supremacy. “The beautiful game” awaits—filled with unforgettable moments. “A game of two halves” where comebacks and last-minute thrillers keep you on the edge of your seat.",
        status: "REGISTRATION LIVE",
        registrationForm: FootballApp,
        eventDate: " 📅 25 Feb 2025, 9:00 AM - 12:00 PM",
        location: "📍 Mithibai College",
        eventRules: [
          "The squad size is 7 players - 5 on the field + 2 subs.",
          "Spikes and Studs are not allowed.",
          "ONLY CAPTAINS are allowed to speak to the referee. In case of any unnecessary arguments, if needed the captain can be shown a red card, even if a player causes the trouble. In more severe cases, the match can get suspended giving the opponent a 3-0 win.",
          "Substitutions can only be made when the ball is not in play or in case of major injury.",
          "A player who is shown a yellow card will be sent off for 1 minute and a player who is shown a red card will be sent off for the entire match.",
          "The decision made by the organizing committee will be final and enforceable by everyone.",
          "In case of a tie, the match will directly go to the penalties.",
        ],
      },
      {
        title: "Queen's Gambit (Chess Tournament)",
        description:
          "Join us for an exciting chess tournament celebrating strategy, skill, and sportsmanship! This event promises thrilling matches and a competitive yet friendly atmosphere. Showcase your strategic brilliance, challenge fellow chess enthusiasts, and make lasting memories in this grand celebration of intellect and competition.",
        status: "REGISTRATION LIVE",
        registrationForm: SoloApp,
        eventDate: " 📅 25 Feb 2025, 11:00 AM - 3:00 PM",
        location: "📍 Mithibai College",
        eventRules: [
          "Game Type: 5-minute blitz.",
          "The chess clock app should be installed on the participant's mobile device prior to the game.",
          "Illegal Moves : The player will receive a warning for the first illegal move. After the second illegal move the player will have to forfeit the game.",
          "If the game ends in a draw, one minute bullet will be played.",
        ],
      },
    ],
  },
];

export { events };
