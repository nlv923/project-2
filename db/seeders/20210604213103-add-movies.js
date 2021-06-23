'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Movies', [
      {
        title: 'The Greatest Showman',
        description: `THE GREATEST SHOWMAN is a biographical musical about young Phineas T. Barnum's life as a child, entrepreneur, museum owner, circus producer, and entertainment producer. As a young boy, Phineas "Finn" (Ellis Rubin), the son of a tailor, meets Charity (Skylar Dunn), the daughter of one of his father's wealthy clients. He makes her laugh and earns a slap from her father for it, but the spark between them lasts throughout their adolescence, even while she's away at boarding school and he's an orphan in the streets. Years later, Finn and Charity (now played by Hugh Jackman and Michelle Williams) marry and have two girls. He manages to secure a loan to open up a museum of oddities, and when that starts to fail, he's inspired by a brief encounter with a little person to invite unusual-looking folks -- including bearded lady Letty Lutz (Keala Settle), Tom Thumb (Sean Humphrey), and black brother-and-sister trapeze artists W.D. Wheeler (Yahya Abdul-Mateen II) and Anne Wheeler (Zendaya) -- to join a show focused around them. With a little embellishment from costumes and makeup, he opens what will become the first circus. Although Barnum's show is critically panned, the masses love it. He earns a fortune, but Barnum can't stop looking for approval from the upper crust.`,
        releaseDate: '2017-12-20',
        posterPath: 'https://i.ibb.co/BfHz6W7/The-Greatest-Showman.jpg',
        genreId: 10402,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Elf',
        description: `In ELF, Will Ferrell stars as Buddy, a human raised as one of Santa's elves who discovers at age 30 that he has a real father named Walter (James Caan) who lives in New York City and is on Santa's "naughty" list. Buddy leaves the North Pole to find Walter, knowing only what he's learned from the elves. (Thus, he's a whiz at making snowflake decorations and spreading good cheer, and he always assumes the best about everyone -- not especially useful skills in Manhattan.) Walter, who's in publishing, is in trouble because he has to find a successful new children's story by Christmas Eve. At first, he doesn't believe that Buddy is his son, but after Buddy passes a DNA test, Walter reluctantly brings him home to meet his wife (Mary Steenburgen) and son. Meanwhile, when Buddy stops by the Santa display at Gimbel's, he meets pretty Jovie (Zooey Deschanel). On his way to saving the day and ensuring a happy ending for everyone from the North Pole to NYC, Buddy gets many chances to do silly things as he experiences New York and gets to know Jovie and his family.`,
        releaseDate: '2003-11-7',
        posterPath: 'https://i.ibb.co/6PBvY86/Elf.jpg',
        genreId: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pokémon: The Movie 2000',
        description: `In POKEMON: THE MOVIE 2000, a bad guy plans capture the birds that control elements of nature in order to disrupt the "harmony of fire, ice, and lightning." Then, he'll unleash the monster currents of the ocean, and capture the ultimate treasure, Lugia, for his collection. Meanwhile, champion Pokemon trainer Ash and his friends arrive on an island for the annual re-enactment of an ancient legend. The girl selected to be the star of the re-enactment thinks it is all a little silly. But then she realizes that it is more than a legend, and that by paying careful attention to the words and music, she will have the key to restoring the balance of nature, protecting Lugia, and preventing catastrophic weather conditions that could wipe out all living things. According to the legend, "the world will turn to Ash" if the harmony of nature is disturbed. And Ash needs help from everyone, even the usually dastardly Team Rocket, to save the day.`,
        releaseDate: '2000-7-21',
        posterPath: 'https://i.ibb.co/L673MtG/Pokemon-The-Movie2000.jpg',
        genreId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Heathers',
        description: `Veronica Sawyer (Winona Ryder) has sacrificed everything in order to preserve her place in Westerburg High’s most impenetrable social clique, the Heathers. As the only member of the group not named "Heather", Veronica has to work extra hard just to stay afloat. Going against her own morals and intelligence, Veronica succumbs to peer pressure on a daily basis, faking her delight in the humiliation of the school’s less popular students. Bored of the frat parties and cow tipping so popular among her friends, Veronica’s curiosity is peaked when a mysterious new guy named JD comes to town. The dark, brooding JD (Christian Slater at his best) observes Veronica among her pack in the lunchroom (where social hierarchy is most clearly displayed), concluding that Veronica is not a Heather at heart. When Veronica confides in JD that she hates her friends and wishes Heather #1 was dead, she never expects her words to have such dire consequences. Before she knows what’s happening, JD is dragging Veronica on a killing spree staged as a teen suicide outbreak. But as Veronica soon learns, even death cannot stop the Heathers. As one Heather dies, her red scrunchee (the symbol of all power) gets passed on to the next Heather in line, and the clique that was the Heathers starts to feel like an inescapable social disease. How far will this war for popularity go?`,
        releaseDate: '1989-3-31',
        posterPath: 'https://i.ibb.co/1b7FRqJ/Heathers.jpg',
        genreId: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Kill Bill: Vol. 1',
        description: `An assassin known only as "the Bride" (Uma Thurman) is betrayed by her boss, Bill (David Carradine). Four years after surviving a bullet in the head, she emerges from a coma and swears revenge on her former master and his deadly squad of international assassins.`,
        releaseDate: '2003-10-10',
        posterPath: 'https://i.ibb.co/hFHDbgK/KillBill.jpg',
        genreId: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Iron Man',
        description: `Tony Stark is a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.`,
        releaseDate: '2008-5-2',
        posterPath: 'https://i.ibb.co/rw8mpbd/IronMan.jpg',
        genreId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Boyhood',
        description: `Filmed over 12 years with the same cast, Richard Linklater's BOYHOOD is a groundbreaking story of growing up as seen through the eyes of a child named Mason (a breakthrough performance by Ellar Coltrane), who literally grows up on screen before our eyes. Starring Ethan Hawke and Patricia Arquette as Mason's parents and newcomer Lorelei Linklater as his sister Samantha, BOYHOOD charts the rocky terrain of childhood like no other film has before. Snapshots of adolescence from road trips and family dinners to birthdays and graduations and all the moments in between become transcendent, set to a soundtrack spanning the years from Coldplay's Yellow to Arcade Fire's Deep Blue. BOYHOOD is both a nostalgic time capsule of the recent past and an ode to growing up and parenting.`,
        releaseDate: '2014-8-15',
        posterPath: 'https://i.ibb.co/QNSY1M2/Boyhood.jpg',
        genreId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '11:14',
        description: `11:14 tells the seemingly random yet vitally connected story of a set of incidents that all converge one evening at 11:14pm. It’s a sort of musical chairs with a corpse, with the structurally intriguing storytelling style of Memento and Run Lola Run. The story starts at - 11:14pm - one evening with a young man named Jack who is driving down the freeway, on his way to a rendezvous with his girlfriend. His car hits a body at that moment. Thinking he killed him, Jack tries to hide the body. From there, we backtrack to follow the chain of events of five different characters and five different storylines that all converge and become party to Jack’s hitting the body at 11:14pm`,
        releaseDate: '2004-8-20',
        posterPath: 'https://i.ibb.co/pn3VSyV/11-14.jpg',
        genreId: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Number 23',
        description: `On his birthday, Walter Sparrow, an amiable dog-catcher, takes a call that leaves him dog bit and late to pick up his wife. She's browsed in a bookstore, finding a blood-red-covered novel, a murder mystery with numerology that loops constantly around the number 23. The story captivates Walter: he dreams it, he notices aspects of his life that can be rendered by "23," he searches for the author, he stays in the hotel (in room 23) where events in the novel took place, and he begins to believe it was no novel. His wife and son try to help him, sometimes in sympathy, sometimes to protect him. Slowly, with danger to himself and to his family, he closes in on the truth.`,
        releaseDate: '2007-2-23',
        posterPath: 'https://i.ibb.co/gJTyzsT/The-Number23.jpg',
        genreId: 53,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Scott Pilgrim vs. the World',
        description: `Scott Pilgrim plays in a band which aspires to success. He dates Knives Chau, a high-school girl five years younger, and he hasn't recovered from being dumped by his former girlfriend, now a success with her own band. When Scott falls for Ramona Flowers, he has trouble breaking up with Knives and tries to romance Ramona. As if juggling two women wasn't enough, Ramona comes with baggage: seven ex-lovers, with each of whom Scott must do battle to the death in order to win Ramona.`,
        releaseDate: '2010-8-13',
        posterPath: 'https://i.ibb.co/TB6Y26Q/Scott-Pilgrimvsthe-World.jpg',
        genreId: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Forrest Gump',
        description: `Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.`,
        releaseDate: '1994-7-6',
        posterPath: 'https://i.ibb.co/Z1gTX2T/Forrest-Gump.jpg',
        genreId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Step Brothers',
        description: `Brennan Huff and Dale Doback are both about 40 when Brennan's mom and Dale's dad marry. The sons still live with the parents so they must now share a room. Initial antipathy threatens the household's peace and the parents' relationship. Dad lays down the law: both slackers have a month to find a job. Out of the job search and their love of music comes a pact that leads to friendship but more domestic disarray compounded by the boys' sleepwalking. Hovering nearby are Brennan's successful brother and his lonely wife: the brother wants to help sell his step-father's house, the wife wants Dale's attention, and the newlyweds want to retire and sail the seven seas. Can harmony come from the discord?`,
        releaseDate: '2008-7-25',
        posterPath: 'https://i.ibb.co/GRR8g4Y/Step-Brothers.jpg',
        genreId: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'GoodFellas',
        description: `Henry Hill might be a small time gangster, who may have taken part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who might have set their sights a bit higher. His two partners could kill off everyone else involved in the robbery, and slowly start to think about climbing up through the hierarchy of the Mob. Henry, however, might be badly affected by his partners' success, but will he consider stooping low enough to bring about the downfall of Jimmy and Tommy?`,
        releaseDate: '1990-9-21',
        posterPath: 'https://i.ibb.co/dQsmnwX/Good-Fellas.jpg',
        genreId: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Wolf of Wall Street',
        description: `In the early 1990s, Jordan Belfort teamed with his partner Donny Azoff and started brokerage firm Stratford-Oakmont. Their company quickly grows from a staff of 20 to a staff of more than 250 and their status in the trading community and Wall Street grows exponentially. So much that companies file their initial public offerings through them. As their status grows, so do the amount of substances they abuse, and so do their lies. They draw attention like no other, throwing lavish parties for their staff when they hit the jackpot on high trades. That ultimately leads to Belfort featured on the cover of Forbes Magazine, being called "The Wolf Of Wall St.". With the FBI onto Belfort's trading schemes, he devises new ways to cover his tracks and watch his fortune grow. Belfort ultimately comes up with a scheme to stash their cash in a European bank. But with the FBI watching him like a hawk, how long will Belfort and Azoff be able to maintain their elaborate wealth and luxurious lifestyles?`,
        releaseDate: '2013-12-25',
        posterPath: 'https://i.ibb.co/Z8SfZBS/The-Wolfof-Wall-Street.jpg',
        genreId: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Shrek',
        description: `When a green ogre named Shrek discovers his swamp has been 'swamped' with all sorts of fairytale creatures by the scheming Lord Farquaad, Shrek sets out with a very loud donkey by his side to 'persuade' Farquaad to give Shrek his swamp back. Instead, a deal is made. Farquaad, who wants to become the King, sends Shrek to rescue Princess Fiona, who is awaiting her true love in a tower guarded by a fire-breathing dragon. But once they head back with Fiona, it starts to become apparent that not only does Shrek, an ugly ogre, begin to fall in love with the lovely princess, but Fiona is also hiding a huge secret.`,
        releaseDate: '2001-5-18',
        posterPath: 'https://i.ibb.co/dGb1hdF/Shrek.jpg',
        genreId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '2001: A Space Odyssey',
        description: `"2001" is a story of evolution. Sometime in the distant past, someone or something nudged evolution by placing a monolith on Earth (presumably elsewhere throughout the universe as well). Evolution then enabled humankind to reach the moon's surface, where yet another monolith is found, one that signals the monolith placers that humankind has evolved that far. Now a race begins between computers (HAL) and human (Bowman) to reach the monolith placers. The winner will achieve the next step in evolution, whatever that may be.`,
        releaseDate: '1968-5-12',
        posterPath: 'https://i.ibb.co/287D4LB/2001-ASpace-Odyssey.jpg',
        genreId: 878,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'A Clockwork Orange',
        description: `Protagonist Alex DeLarge is an "ultraviolent" youth in futuristic Britain. As with all luck, his eventually runs out and he's arrested and convicted of murder. While in prison, Alex learns of an experimental program in which convicts are programmed to detest violence. If he goes through the program, his sentence will be reduced and he will be back on the streets sooner than expected. But Alex's ordeals are far from over once he hits the streets of Britain.`,
        releaseDate: '1972-2-2',
        posterPath: 'https://i.ibb.co/xfCGk3k/AClockwork-Orange.jpg',
        genreId: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Dallas Buyers Club',
        description: `Based on the true-life tale of Ron Woodroof, a drug taking, women loving, homophobic man who, in 1986 was diagnosed with full blown HIV/AIDS and given thirty days to live. He started taking the Food and Drug Administration (FDA) approved AZT, the only legal drug available in the U.S, which brought him to the brink of death. To survive, he smuggled non-toxic, anti-viral medications from all over the world, but yet still illegal in the U.S. Other AIDS patients sought out his medications forgoing hospitals, doctors and AZT. With the help of his Doctor, Eve Saks and a fellow patient, Rayon, Ron unintentionally created the Dallas Buyers Club, the first of dozens which would form around the country, providing its paying members with these alternative treatments. The clubs, growing in numbers and clientele, were brought to the attention of the FDA and pharmaceutical companies which waged an all out war on Ron.`,
        releaseDate: '2013-11-22',
        posterPath: 'https://i.ibb.co/BZZWXSr/Dallas-Buyers-Club.jpg',
        genreId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        description: `Convinced that the Russians have infiltrated America's "vital essence", the crazed Ripper gives the go code to the 843rd bomb wing to attack Russia, setting in motion a series of darkly hilarious vignettes involving gung-ho soldiers, wacky generals, spying Russians, drunken premiers, battles with soda machines, fights in the War Room, and the Russians' top-secret Doomsday Machine. The film has three main centers of action: one of the B-52 bombers, on which a group of loyal men know they are about to start World War III; Burpelson Air Force Base, where Group Captain Lionel Mandrake (Peter Sellers) is trying to convince everyone that Ripper has gone mad and the bombing must be stopped; and the War Room, where President Merkin Muffley (Sellers again) is trying to make peace with the Russians.`,
        releaseDate: '1964-1-29',
        posterPath: 'https://i.ibb.co/mGrNHY8/Dr-Strangelove.jpg',
        genreId: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Fight Club',
        description: `A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power. When the narrator is exposed to the hidden agenda of Tyler's fight club, he must accept the awful truth that Tyler may not be who he says he is.`,
        releaseDate: '1999-10-15',
        posterPath: 'https://i.ibb.co/WB6nnLx/Fight-Club.jpg',
        genreId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
