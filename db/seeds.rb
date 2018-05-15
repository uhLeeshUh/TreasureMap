# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




User.destroy_all
User.create([
  {username: 'Alicia', password: 'helloworld'},
  {username: 'Jimmy', password: 'starwars'},
  {username: 'Yiayia', password: 'starwars'},
  {username: 'Pouli', password: 'starwars'},
  {username: 'Craig', password: 'starwars'},
  {username: 'Val', password: 'starwars'},
  {username: 'Collin', password: 'starwars'},
  {username: "DemoUser", password: "password"}
  ])

Country.destroy_all
Country.create([
  {name: "United States of America"},
  {name: "Czech Republic"},
  {name: "China"},
  {name: "Germany"},
  {name: "Ecuador"},
  {name: "Sweden"},
  {name: "Taiwan"},
  {name: "Hong Kong"},
  {name: "Singapore"},
  {name: "Mexico"},
  {name: "Japan"},
  {name: "Greece"},
  {name: "Italy"},
  ])

City.destroy_all
City.create([
  {name: 'Bruceville, IN', country_id: 1},
  {name: 'Hugo, OK', country_id: 1},
  {name: 'Paris, TX', country_id: 1},
  {name: 'New York City, NY', country_id: 1},
  {name: 'Kutna Hora', country_id: 2},
  {name: 'Shanghai', country_id: 3},
  {name: 'Mannheim', country_id: 4},
  {name: 'Quito', country_id: 5},
  {name: 'Stolkholm', country_id: 6},
  {name: 'Taipei', country_id: 7},
  {name: 'Hong Kong', country_id: 8},
  {name: 'Singapore', country_id: 9},
  {name: 'Mexico City', country_id: 10},
  {name: 'Tokyo', country_id: 11},
  {name: 'Sparta', country_id: 12},
  {name: 'Rome', country_id: 13},
  {name: 'Beijing', country_id: 3},
  {name: 'Harbin', country_id: 3},
  {name: 'Rayne, LA', country_id: 1},
  ])


  #Article, Author
  #1, 7
  #2, 2
  #3, 3
  #4, 1
  #5, 1
  #6, 3
  #7, 4
  #8, 5
  #9, 5
  #10, 6
  #11, 1
  #12, 1
  #13, 1
  #14, 1
  #15, 1
  #16, 6
  #17, 7
  #18, 3
  #19, 5
  #20, 4
  #21, 1


  Article.destroy_all
  Article.create([
    #1, 7
  { name: "Blue Flash Backyard Roller Coaster",
    description: "A humble homemade ride attracts visitors from around the globe to this small Midwestern town.",
    long_description: "In a way, the “Blue Flash” homemade roller coaster validates the ethos of another surprising backyard Midwestern construction project: “If you build it, they will come.”",
    body: "John Ivers, an unassuming grandfather living in Bruceville, Indiana, started the project with 10 feet of straight track in his shed, which he plopped a retrofitted car seat on top of. Simply through trial and error — without formal engineering training — he kept on building until the ride outgrew the small shed. Then he brought it outside and kept building, adding a full loop, an engine-powered conveyor chain, support towers, and flag mounts.
    When it was finished, he, of course, christened the roller coaster with a name: the Blue Flash.
    Originally built for Ivers’ five grandchildren in 2001, the ride’s unique combination of remote location, imaginative creativity, resourceful engineering, and unmatched adrenaline attracted thrill-seekers and news outlets. Blue Flash acolytes started to descend upon Bruceville from across the globe.
    A quick YouTube search reveals dozens of these pilgrimages. The local PBS station exalted the ride, Roadside America featured its absurdity, and the famously cynical comedian Daniel Tosh roasted it on his namesake show. The homebrew roller coaster’s reputation quickly eclipsed the small-town boundaries of 500-person Bruceville.
    The Blue Flash roller coaster is “push to start.” But just to clarify, that’s “push” as in an exhausting series of physical shoves from the roller coaster’s creator, not “push” as in the simple tap of a post-2012 automobile ignition button. Up close, the paint is peeling and the tall grasses poke through the coaster slats like miniature periscopes. Ivers flips an innocent-looking light switch to ignite the roaring engine.
    The Blue Flash won’t be winning any superlatives from the Grand Panel of Roller Coaster Connoisseurs anytime soon. In reality, it’s a quick ride — only 24 seconds per lap — and a simple one. If maximizing G-forces is your goal, you’d be better served heading 70 miles away from Bruceville to the amusement parks dotting Santa Claus, Indiana.
    But the Blue Flash isn’t just a ride — and it isn’t just a strange oddity interrupting the endless Indiana horizon either. Rather, the contraption is an impressive testament to creativity and the impact even the goofiest ideas can have. Its successful completion and safety record is a stand against defeatism; its lack of formal engineering a badge of can-do spirit; and its inspiration a testament of grandfatherly love.",
    lat: 38.7817,
    lng: -87.4668,
    author_id: 7,
    city_id: 1},
#2, 2
  { name: "Texas Eiffel Tower",
    description: "In Paris, Texas they have their own Eiffel Tower, it just has a cowboy hat on it.",
    long_description: "Cities named Paris outside of France all seem to have the need to measure up to their namesake, and install a replica of the Eiffel Tower, and Paris, Texas is no different. They just put a giant cowboy hat on top of theirs.",
    body: "Unveiled in 1995, the 60-foot tall replica monument was built by a local iron union, the Boiler Makers Local #902. Another replica of Gustav Eiffel’s Parisian masterwork was unveiled that same year in Paris, Tennessee, standing just about five feet taller than the Texas monument.
    Since the Texas tower was being billed as the “Second Largest Eiffel Tower in the Second Largest Paris” this was a bit of a problem. In 1998 an independent group of investors devised a plan to somewhat rectify the discrepancy. Put a cowboy hat on it. Thus a huge metal cowboy hat was installed atop the tower, tipped ever so coolly back to push the ten-foot-diameter brim a bit higher. Of course the whole thing became a forgone issue after the Paris hotel in Las Vegas built their 541 foot imitation.
    Even without the height rivalry, the Eiffel Tower in Paris, Texas certainly remains the most American of the remakes. And you can’t take that away from it. Well, unless you remove its hat.",
    lat: 33.6431,
    lng: -95.5361,
    author_id: 2,
    city_id: 3},
#3, 3
  { name: "Tuned Mass Damper of Taipei 101",
    description: "Enormous pendulum helps keep Taiwan's tallest building from swaying.",
    long_description: "Inside the Taipei 101 skyscraper in Taiwan is the world’s largest and heaviest tuned mass damper.",
    body: "Essentially acting as a giant pendulum, the enormous steel sphere moves slightly back and forth to counter any motion of the building itself. It is an engineering marvel meant to limit the vibrations of the 1,667-foot tall building. The 18-foot diameter, 660- metric ton steel sphere is suspended by eight cables in the upper stories of the tower, and is visible between the 88th and 92nd floors. The Taipei 101 Tuned Mass Damping were built and tested by A&H Custom Machine. The fabrication of the components took approximately a year to complete. As one of the tallest structures in the world, located only 660 feet from a major fault line, earthquakes and high winds are a serious threat. In fact, visitors even caught a glimpse of the tuned mass damper in action during the 2008 Sichuan earthquake. Many skyscrapers contain tuned mass dampers to restrain sway, and as the tops of the tallest buildings can move several feet in the wind, a tuned mass damper or similar mechanism is often necessary for maintaining structural integrity. At Taipei 101, the room-sized device is capable of moving five feet in any direction, thereby reducing sway by 30 to 40 percent. Safety comes at a hefty price, however, as the tower’s tuned mass damper cost $4 million to build.",
    lat: 25.0336,
    lng: 121.5650,
    author_id: 3,
    city_id: 10},
#4, 1
  { name: "New York Federal Gold Vault",
    description: "More gold than anywhere else ever.",
    long_description: "The largest accumulation of gold in human history is located deep underneath the heart of Manhattan’s financial district, at the New York Federal Reserve Bank. Some 80 feet beneath sidewalk level, the Fed’s special vault is built in bedrock and entrusted with deposits from central banks across the globe. Inside sits 7,000 tons of glittering gold bars—around 5 percent of all of the gold ever mined.",
    body: "The only way into the vault is via a cylindrical entryway that rotates at the turn of a wheel. A sliver-shaped pie chunk of the cylinder has an opening, that when properly aligned with the entry hallway allows access to the treasure inside. Inside there are 122 separate mini vaults (one for each different country), plus a “library vault” for account holders with smaller deposits. The Fed considers each gold bar as a non-fungible individual because of variations in purity and weight. As a result they carefully track each of the deposits, so if you give them a particular bar you can later retrieve that exact one. The Fed’s gold vault really doesn’t cater to millionaires and billionaires, though; the customers are sovereign nations. While the list of account holders is a closely guarded secret, think of the likes of Bank of England, Banque de France, and Deutsche Bundesbank. Foreign countries store their gold in New York for the benefits of convenience and centrality. One of the perks of centralizing everything in one spot is that countries can transfer gold amongst themselves by simply moving bars from one compartment to another, at a modest handling cost of $2 per bar. Perhaps the most amazing thing about the New York Fed gold vault is that it offers public tours (although the website says that new bookings are currently unavailable). That’s a remarkable feat considering the security at similar facilities like the Gold Bullion Depository at Fort Knox, which bars the likes of reporters, members of congress and former presidents.",
    lat: 40.7085,
    lng: -74.0086,
    author_id: 1,
    city_id: 4},
#5, 1
  { name: "Hare Krishna Tree",
    description: "One of the few remaining American elm trees in New York’s Tompkins Square Park was the birthplace of a new religion.",
    long_description: "For a hundred years this elegant American elm at the center of Tompkins Square Park was just a tree. Then, in 1966, the Hare Krishna mantra was chanted under its sprawling canopy for the first time, and it became the birthplace of a religion.",
    body: "To Hare Krishnas, this tree is a sacred site. For everyone else, it would be easy to stroll by the old elm in Manhattan’s East Village and have no idea it’s a religious landmark. It’s a handsome tree — American elms are quite rare now, known for their wide-stretching canopies — but otherwise inconspicuous. But if you happened to wander by on October 9, 1966, you would have heard the “Hare Krishna” mantra chanted publicly for the first time outside of India, marking the birth of the spiritual movement in the West. At the base of the tree, Bhaktivedanta Swami Prabhupada and a group of robed followers spent two hours chanting, dancing, playing tambourines and cymbals, and seeking Krishna — a pure and blissful consciousness. Among them was Beatnik poet Allen Ginsberg, who was living nearby. He later wrote, “The ecstasy of chant or mantra has replaced LSD and other drugs for many of the swami’s followers.” At the time, lower Manhattan was the epicenter of a bohemian counterculture, the Haight-Ashbury of the East Coast. Hippies flowed into Tompkins Square Park, which has long been both a neighborhood respite and a symbol of subversion, where activists staged anti-war protests and women marched for liberation. Not long after the Swami first sang Hare Krishna under the old elm tree, legends like Jimi Hendrix and the Grateful Dead played at the park’s new bandshell. If you venture a few blocks from the park you’ll find 26 Second Avenue, where Swami Prabhupada founded the International Society for Krishna Consciousness. He rented a storefront that would serve as both the religious movement’s headquarters and a Hare Krishna temple. Amazingly, the temple remains there today, next to a vintage boutique. Devotees still travel to Tompkins Square Park to visit the Hare Krishna Tree, where George Harrison once sought a higher consciousness, leaving garland and flowers around the holy elm’s wide trunk.",
    lat: 40.7261,
    lng: -73.9820,
    author_id: 1,
    city_id: 4},
#6, 3
  { name: "New York Marble Cemetery",
    description: "Hidden down an alley in the bustling East Village.",
    long_description: "From a wrought iron gate on Second Avenue, an alleyway leads to a secluded garden, barely visible from the busy sidewalk. Although there are no headstones or monuments, this is the New York Marble Cemetery, one of the hidden cemeteries of New York that has survived as a quiet memorial while the city transformed around it. In the 19th century, the New York Marble Cemetery had over 2,000 burials.",
    body: "The New York Marble Cemetery was created in response to the yellow fever outbreak that started near the Trinity Church cemetery. The Common Council ruled to ban earth graves in lower Manhattan to limit the spread of the Caribbean-born disease. Instead, marble vaults were built ten feet underground. Names from the original vault owners are engraved on marble tablets that are set into the stone cemetery walls. These tablets act as a guide for the location of the vaults underground. In order to access a vault, a stone slab has to be exposed by digging by hand, that is then lifted off to expose the entry shaft going down to the slate doors. Some of the vaults also require a key to open the door. Over 150 vaults made from solid white Tuckahoe marble are located just below the half-acre grassy space in the interior of the East Village block. The New York Marble Cemetery is the oldest public non-sectarian cemetery in the city. After being established in 1830, it held most of its burials between 1830 and 1870, and took in its last deceased in 1937. In the middle of the East Wall, there is a large marble plaque that is now illegible, but used to state: “New York Marble Cemetery - A Place of Interment for Gentlemen.” However most of those buried in the cemetery were not members of the high society, but were merchants, lawyers, and ship owners. The Dead House that temporarily held remains used to be at the southwest corner of the cemetery, until it was removed in 1955. It was located right over the entry to Vaults 51 and 52, so that Perkins Nichols, the cemetery’s developer and organizer, would have easy access to his Vault 51. When rural cemeteries, like Green-Wood Cemetery in Brooklyn, became fashionable in the late 1830s, about one fourth of the people buried in the Marble Cemetery were excavated and reinterred elsewhere. Much of the cemetery has since deteriorated due to the delicate nature of the soft marble and one of the walls is missing. Nonetheless, the cemetery has remained there, tucked away in Manhattan for over 180 years, more than can be said about much heartier structures.",
    lat: 40.7256,
    lng: -73.9909,
    author_id: 3,
    city_id: 4},

#7, 4
  { name: "Showmen's Rest",
    description: "Circus cemetery for all the “showmen under God’s big top.”",
    long_description: "Since the 1930s, Hugo in southeast Oklahoma has been a popular winter headquarters for traveling circuses, earning the nickname “Circus Town, USA.”",
    body: "Although many circuses have rested in Hugo, its current winter denizens are Carson & Barnes Circus and its sister circus, Kelly Miller. When Kelly died in 1960, his brother D.R. Miller purchased a section in the town cemetery to memorialize him and other circus performers. Marked by elephant topped monuments, the Showmen’s Rest section in Hugo’s Mount Olivet Cemetery holds tributes to “all showmen under God’s big top,” from animal trainers to jugglers to high wire artists. The life-size grave of Ringmaster John Strong wearing a top hat designates him as ”the man with more friends than Santa Claus” and Zefta Loyal still celebrates her title as the “Queen of Bareback Riders.” Elephant trainers Ted Svertesky, who perished in a circus train wreck, and John Carroll, who was crushed by one of his animals, both have graves decorated with pachyderms. While most of the performers chose epitaphs that grandly immortalized their talents, circus manager and cemetery founder D.R. Miller’s grave says simply: “Dun Rovin.” The Mount Olivet Cemetery also has the Bull Rider’s Reprieve section, with the graves of rodeo stars Freckles Brown, who was the first to ride the wild bull Tornado, and Lane Frost, a young champion bull rider who was gored during a performance. The vitality captured in granite at the cemetery is still alive and breathing in Hugo, where practicing performers set up trapeze swings in their front yards or park circus trailers in their driveways, and a herd of elephants always roams at the Endangered Ark Foundation.",
    lat: 33.9987,
    lng: -95.5012,
    author_id: 4,
    city_id: 2},
#8, 5
  { name: "La Isla de las Muñecas (Island of the Dolls)",
    description: "An island filled with hundreds of hanging, decomposing, decapitated dolls.",
    long_description: "There is a disturbing circular nature to the story of “La Isla de la Muñecas,” or the Island of the Dolls.",
    body: "Over fifty years ago, Don Julian Santana left his wife and child and moved onto an island on Teshuilo Lake in the Xochimilco canals. According to some, a young girl actually drowned in the lake, while most others, including his relatives, say Don Julian Santana merely imagined the drowned girl. Regardless, Don Julian Santana devoted his life to honoring this lost soul in a unique, fascinating, and—for some—unnerving way: he collected and hung up dolls by the hundreds. Eventually, Don Julian transformed the entire island into a kind of bizarre, (for some) horrifying, doll-infested wonderland. Don Julian Santana began collecting lost dolls from the canals and the trash near his island home. He is also said to have traded produce he grew to locals for more dolls. Santana did not clean up the dolls or attempt to fix them, but rather put them up with missing eyes and limbs, covered in dirt, and generally in whatever ramshackle state he found them in. Even when dolls arrived in good shape, the wind and weather turned them into cracked and distorted versions of themselves. Don Julian also kept his cabin filled with the dolls, which he dressed in headdresses, sunglasses, and other accoutrement. Despite the fact that most people found the isle frightening, Don Julian saw the dolls as beautiful protectors, and he welcomed visitors, whom he would show around, charging a small fee for taking photos. In 2001 Don Julian Santana was found drowned in the same area in which he believed the little girl had died.",
    lat: 19.2908,
    lng: -99.0986,
    author_id: 5,
    city_id: 13},
#9, 5
  { name: "Naki Sumo Baby Crying Contest",
    description: "For hundreds of years, participants in this Japanese festival have been making babies cry to ward off demons.",
    long_description: "Usually getting a baby to stop crying is the hard part of any parents’ day, but during the Nai Sumo Baby Crying Festival the goal is to get the wee babes to start and keep crying to get rid of demons.",
    body: "The traditional festival takes place at the Sensoji Temple in Tokyo each year, pairing up tiny little babies with a sumo wrestler who will then try to get the little guy to cry. The origins of the bizarre practice date back hundreds years to a simple proverb that states, “Naku ko wa sodatsu,” or “Crying babies grow fat.” The other reason behind the festival, is the belief that somehow the piercing wails work to drive off nearby demons that would otherwise bring you to harm. While neither of these claims are proven to work, that hasn’t stopped people from making their children cry in public. During the ceremonies, sumo wrestlers take the stage and hold up the participating babies (their parents actually brought them to this), and try to get them to start bellowing. Among the techniques used to make the babies unhappy include putting on a scary mask to freak them out and the old stand by of just yelling, “CRY! CRY! CRY!” into their little faces. But it’s all worth it, because if they are the best cryer, they are ensured a long, healthy life. For all the seeming cruelty of the event, it actually has a fun, jokey air as the adults seem to realize that intentionally getting kids to cry is a little goofy. The kids don’t seem to be in on the joke.",
    lat: 35.7140,
    lng: 139.7965,
    author_id: 5,
    city_id: 14},
#10, 6
  { name: "Shanghai Marriage Market",
    description: "When it comes to love, Mom and Dad know best.",
    long_description: "Residents of China’s largest city face a conundrum in finding love and marriage.",
    body: "An increase in the busy schedules of young adults, a discrepancy between male and female populations created by China’s one-child policy, and the social pressure to marry before one is thirty puts a tricky timestamp on young Shanghainese. Many of them just don’t have time to deal with it. But their parents do. Started in 1996, Shanghai’s so-called Marriage Market allows parents to advertise their lovelorn children in low-tech, ink-and-paper dating profiles. Posting their children’s educational statistics, work history, age and other demographics, parents try to match their children with partners worthy of them. Of course, parents are picky in choosing mates for their children, who are certainly imbued with supernatural greatness. As a result, parents often post too-demanding achievements, including exorbitant earnings, and exceptional good looks. Needless to say, not everybody finds dates. The Marriage Market hearkens back to a more traditional time when parents arranged their children’s marriages. At the Market, like in traditional Chinese dating cultures, parents often meet each other before the dating couple does. In quickly modernizing China, traditions are often discarded. Nothing is more indicative of this trend than the younger generation’s views about marriage. Children are often uncomfortable with their parents meddling in their love affairs, but they usually don’t need to worry about their parents’ success. Although the market has become hugely popular–drawing more than 1000 people each weekend day– most parents have to return, month after month, year after year. These parents’ concerns aren’t without merit, however. In a society where singleness after thirty is hugely stigmatized, the Chinese Academy of Social Sciences estimates that more than 24 million Chinese men will be single in 2020. Perhaps the Marriage Market gives moms and pops some agency in saving their sons–and in a few cases, daughters– from this fate.",
    lat: 31.2323,
    lng: 121.4732,
    author_id: 6,
    city_id: 6},
#11, 1
  { name: "The Central Perk, Beijing",
    description: "This working replica of the 'Friends' coffee shop is more accurate to the show than the set itself.",
    long_description: "One Beijing man’s obsession with the American TV show Friends has driven him to create a working replica of the show’s main hangout spot, the Central Perk cafe.",
    body: "On the TV show, the Central Perk was the titular friends’ local coffee shop, and owner Du Xin, who describes the show as his religion, has slavishly recreated every aspect of its bohemian style.  Fitted with identical brick walls, tables, and even the ever-present orange couch, Du’s Central Perk is a mecca for local fans of the show.  The TVs in the shop even play episodes of Friends with Chinese subtitles, and each menu item is food actually mentioned on the show with an annotation stating which episode the snack appeared in. The café is popular among local college students, who often watch reruns of American TV shows to practice their English.  For them, Friends has proven chock full of colloquialisms and mannerisms that cannot be picked up in class.  And according to reports, it also offers another rarity in Beijing: cheap coffee, another godsend for college students. And in case a visit to a working coffee shop from a fictional television series which has been off the air for almost a decade isn’t enough of a “Friends experience,” Du has also constructed an exact replica of character Joey’s apartment next door to the Central Perk, complete with foosball table and oversize TV stand. Diehard fans of the show can rest assured that Central Perk will be there for you.",
    lat: 39.9205,
    lng: 116.4543,
    author_id: 1,
    city_id: 17},
#12, 1
  { name: "Chairman Mao Memorial Hall",
    description: "The embalmed remains of the communist leader lie within a custom crystal coffin.",
    long_description: "This stately mausoleum is the final resting place of Mao Zedong, Chairman of the Communist Party of China for three decades until his death in 1976. His embalmed remains lie inside a crystal coffin, despite his wishes to be cremated.",
    body: "Creating the crystal coffin was no easy task. At the time, the country’s sour relationship with the Soviet Union meant Chinese officials couldn’t tap into any of the Soviet’s well-guarded manufacturing secrets. Instead, the government held a clandestine country-wide competition to create a casket for the Mao, using various code names for the endeavor. They viewed dozens of submissions before finally settling on the one that holds the mummified communist leader. Each one was put through the ringer as it was tested against variables like temperature, vibration, and its ability to withstand an earthquake. The building the crystal coffin and its embalmed inhabitant reside in is also impressive, especially considering it was built in only six months. Materials from all across China were used to make it, and 700,000 workers from different provinces, autonomous regions, and nationalities did “symbolic voluntary labor” to get it all finished. Art in and around the hall pays tribute to various revolutionary leaders. You will be required show a valid Identification document like a passport or PRC ID card. Foreign objects (bags, cameras, etc) cannot be brought into the hall and must be left in the bag office. Wear modest clothing and be very quiet and respectful, especially in the main chamber. Special occasions may cause the hall to be very busy or closed. The Hall can be accessed by Subway: Subway Line 1: get off at Tiananmen East or Tiananmen West Station, and Chairman Mao Memorial Hall is to the south. Subway Line 2: get off at Qianmen Station, and Chairman Mao Memorial Hall is to the north.",
    lat: 39.9025,
    lng: 116.3978,
    author_id: 1,
    city_id: 17},
#13, 1
  { name: "798 Art District",
    description: "Exotic and hidden works of art.",
    long_description: "When people think about trendy art neighborhoods, Soho is more likely to come to mind than Beijing, but Chinese Contemporary Art could be the next big thing.",
    body: "Works from Chinese artists Ai WeiWei and Wenda Gu are flying off the shelves, and Christie’s and Sotheby’s can’t get enough. Art prices are growing even faster than China’s explosive economy, and the 798 is at the center of this boom. The 798 thrives on irony. Tiny shops sell kitschy Maoist junk, or T-shirts displaying “Obamao.” The greatest irony of all, though, are the buildings itself. The entire complex is built in a Cultural Revolution-era warehouse district, with the Moaist slogans still emblazoned in big red letters in some of the gallery spaces, urging the proletariat to work hard for Mother China. The factories give the area a gritty feel, and the district was actually almost closed by the government in 2003. Mao was a great patron of the arts, but he probably didn’t have this in mind. The actual district is a mixture of galleries, museums, shops, and cafes. it is large enough that it would be hard to see everything in an afternoon, but it is great for perusing and exploring. There are events and openings frequently, and you can try and check their website to see what’s happening during your visit.",
    lat: 39.9042,
    lng: 116.4074,
    author_id: 1,
    city_id: 17},
#14, 1
  { name: "Great Wall of China Slide",
    description: "Why walk on this historical site when you can zoom down instead?",
    long_description: "Millions of people dream of one day standing atop the Great Wall of China. But at the wall’s Mutianyu section, visitors have the opportunity to experience the world wonder in a much more thrilling way: by whizzing down it in a toboggan slide.",
    body: "Millions of people dream of one day standing atop the Great Wall of China. But at the wall’s Mutianyu section, visitors have the opportunity to experience the world wonder in a much more thrilling way: by whizzing down it in a toboggan slide. Though the majority of visitors to the famous edifice flock to the easily accessible Badaling segment, it’s worth driving just two hours north to Mutianyu. There, after ascending to the top of the Great Wall via gondola, chairlift, or foot, you can return to the base by zooming down a steep, zig-zagging slide, with views of the Great Wall along the way. The ride, which runs adjacent to the wall, lasts about five minutes depending on how much you apply the brakes with the joystick attached to your cart. The average speed on the slide is 12 mph, although a few adrenaline junkies might reach much higher top speeds. It isn’t just for daredevils—celebrities like Michelle Obama and Peyton Manning have taken their turns on the slide, too.",
    lat: 40.4318,
    lng: 116.5704,
    author_id: 1,
    city_id: 17},
#15, 1
  { name: "The World Park",
    description: "Beijing's World Park offers the excitment of international travel without the hassle of actually traveling.",
    long_description: "Explore the world's most notable monuments all within one day!",
    body: "Just 10 miles from downtown Beijing and Tienanmen Square, China’s World Park gives visitors a chance to see more than 100 of the planet’s best known landmarks – including the Great Pyramids, the Eiffel Tower, and the Statue of Liberty – all in miniature. The park is divided into five continents separated by four tiny “oceans”, intended to replicate the earth’s actual geographic layout. Guests can opt to circumnavigate the globe in miniature speedboats, take the overland route in battery operated cars, or board the park’s monorail for a transcontinental journey by train. Replicas at the World Park are built with painstaking attention to detail, and many of the landmarks have been constructed using materials intended to mimic the originals. World Park’s Red Square is paved with more than five million tiny bricks the size of Legos, and the Great Pyramids are built of 200,000 miniature white marble blocks. The park also contains a shrunken Manhattan, where the World Trade Center’s Twin Towers still dominate the New York skyline.  Unfortunately, the park is not well maintained and time is taking its toll on many of the monuments. As a result, miniature attractions like World Park are cropping up in more places, including Grand World Scenic Park in Guangzhou and Window of the World in Shenzhen, where Chinese tourists can even visit a diminutive version of America’s own tiny realm –Disneyland. It really is a small world after all.",
    lat: 39.8107,
    lng: 116.2875,
    author_id: 1,
    city_id: 17},
#16, 6
  { name: "China Watermelon Museum",
    description: "This Chinese museum proves that it's a watermelon world, we're all just living in it.",
    long_description: "The countryside just south of Beijing city proper is one of the heaviest watermelon producing regions in the world, so it makes a distant sort of sense that the Panggezhuang township government would choose this as the site for their hydrating homage to the citrellus lanatus.",
    body: "Founded in 2002, the China Watermelon Museum is 4,000 square meters of exhibits tracing the origins of the watermelon from its birthplace in southern Africa to its eventual ascent into, apparently, space. The futuristically modern museum is packed with wax watermelons, displaying the various varieties from around the world, surrounded by abundant neon lighting. The displays cover just about every aspect of watermelons from their history, to growing methods, to China’s “watermelon culture.” There are ancient Chinese poems on display that make reference to melons, and all sorts of informational signs and plaques. Even the building itself is emblazoned with a giant impressionistic watermelon over the front doors. And if you find the permanent fake melons a bit disingenuous,  there is also an outdoor exhibition area where a number of actual watermelon varieties are growing. This museum is definitely about watermelons. Sadly, none of the exhibits here are subtitled in English, but your eyes will be so full of wax melons and bright neon, and your ears so occupied with the sweet strains of the instrumental Titanic soundtrack (on loop, naturally), that you’ll be hard pressed to notice the lack.",
    lat: 39.6732,
    lng: 116.3251,
    author_id: 6,
    city_id: 17},
#17, 7
  { name: "Harbin Ice and Snow Festival",
    description: "One of the world's largest ice festivals dazzles visitors for over a month with radiant sculptures and carvings.",
    long_description: "An annual event, the Festival is one of the world’s four largest ice and snow festivals.  The celebration of all things cold holds the 2007 Guinness Record for largest snow sculpture: a two-part ice sculpture of Niagra Falls and the Crossing of the Bering Strait that totaled 250 meters long, 8.5 meters high, and composed of over 13,000 cubic meters of snow.",
    body: "First organized in 1963, the Festival was often interrupted over the years due to the Cultural Revolution. It picked up again, this time as an annual event, in 1985. The official starting date is January 5th, lasting until February 15th, though weather permitting, the exhibitions often open a week earlier and run until March. Each year has a different ‘theme,’ past themes including the Beijing Olympics, Chinese tourist sites, ‘Prosperous China and High-Flying Longjiang’, and ‘Friendship between China and Russia.’ The Great Wall (doubling as an ice slide), pyramids, sphinxes, terra cotta warriors, a Disney castle, towering pagodas, enormous Buddhas, and gardens are only a handful of the creative sculptures and carvings to have been a part of the Harbin Festival. It is a competitive event, with teams coming from all over the world-the United States, Russia, Japan, Canada, South Africa, France etc. During the nights of the month-long festival, lights from inside and outside of the sculptures brilliantly illuminate a variety of architectural styles, fanciful castles, mythological and historical figures, ice lanterns and slides. Fireworks light up the sky on various evenings while the dazzling multicolored ice sculptures light up the entire ground. The ice is procured from the surface of the frozen Songhua River, then intricately carved, many of the sculptures receiving a douse of deionized water to produce an entirely transparent look. Swimming in the Songua River, Yabuli alpine skiing, an ice-lantern exhibition, ice golf, and ice archery are just some of the featured activities popular of the Festival.",
    lat: 45.7570,
    lng: 126.6425,
    author_id: 7,
    city_id: 18},
#18, 3
  { name: "Rayne Frog Festival",
    description: "The only place to see live frogs don pigtails and top hats, then eat their scrumptious legs.",
    long_description: "Tucked away in Cajun country is a tiny corner of the world dedicated to commemorating the days when frogs were king. For over a century, Rayne, Louisiana has been known as “The Frog Capital of the World.”",
    body: "Beginning in the 1880’s when Donat Pucheu, a Frenchman who ventured to Louisiana where he first started selling produce then ducks, before bringing frog legs to New Orleans where the trade, for a time, exploded. Though his original business would pass through many hands over the years, at its peak Louisiana frog legs were shipped all over the United States – and even back to France. Louisiana: A Guide to The State (written as part of the Depression-era Federal Writers’ Project), describes Rayne in 1941 as such: “Rayne is the center of the Louisiana frog industry. The Louisiana Frog Company Plant is said to be the largest shipper of edible frogs in the world. In 1937 some 500,000 frogs were shipped. On warm days as many as 10,000 frogs are brought in; the largest ever received weighed three pounds.” Like many of America’s more niche markets, the frog leg industry experienced a sharp decline in the 1970’s. Locals understood that maintaining the status of Frog Capital of the World wouldn’t happen on its own; so, in 1973, Rayne threw its first Frog Festival. Ever since, the festival has proceeded annually, drawing crowds. Part of a hearty group of festivals in the region each celebrating a specialized area of industry, teenagers are elected to represent their hometown and compete not based on beauty, but rather knowledge of their towns’ history and commitment to community. At the 2015 Rayne Frog Festival, the Frog Derby Queen stood alongside queens bearing Gumbo, Shrimp and Petroleum, and Tabasco crowns. In addition to the unique pageant aspect of the Frog, there is a surprisingly long parade, lots of kissing of live frogs, and plenty of jumping. Perhaps most entertainingly, patrons brought frogs – alive and kicking – dressed to the nines, which children and adults alike lavished with compliments. The night concludes with carnival rides and, of course, frog leg snacks… which is only sort of macabre. The festival takes place one weekend each year, traditionally in November though now moved to May. However, the historic town bursts with an endearing sense of pride year-round in the form of city streets lined with murals depicting frogs in all their magnificent, often silly glory.",
    lat: 30.2349,
    lng: -92.2685,
    author_id: 3,
    city_id: 18},
#19, 5
  { name: "Sedlec Ossuary Bone Church",
    description: "A church of bones, decorated with 40,000 human skeletons.",
    long_description: "The 40,000 skeletons within Sedlec Ossuary (aka Kostnice Ossuary Beinhaus) in the Czech Republic welcome you, quite literally, with open arms.",
    body: "Known to most as “The Bone Church,” it displays some of the world’s more macabre art. In addition to a splendid bone chandelier composed of almost every bone in a human body, the ossuary displays two large bone chalices, four baroque bone candelabras, six enormous bone pyramids, two bone monstrances (a vessel used to display the Eucharistic host), a family crest in (you guessed it) bone, and skull candle holders. Festively looping chains of bone are hung throughout like crepe paper at a birthday party. Sedlec Ossuary has a long history, beginning in the 13th century when the Abbot of the Sedlec Monastery (Abbot Henry) brought a handful of earth back from a journey to the Grave of the Lord in Jerusalem. He scattered this “holy soil” across the Sedlec cemetery, securing its place as one of the most desired burial sites for people all over Bohemia and the surrounding countries. Everyone wanted to be buried in that handful of the Holy Land and more than 30,000 were. But it wasn’t long before there simply wasn’t enough room for everyone to rest in peace, and the bodies were moved to a crypt to make room for the newly dead. In 1870, a local woodcarver, František Rint was employed for the dark task of artistically arranging the thousands of bones. Rint came up with the Bone Church’s stunning chandelier, as well as the amazing Schwarzenberg coat of arms, which includes a raven pecking at the severed head of a Turk–all made of human bone. Rint was responsible for bleaching all of the bones in the ossuary in order to give the room a uniform look. His artist’s signature is still on the wall today–naturally, in his medium of choice, bone.",
    lat: 49.9482,
    lng: 15.2676,
    author_id: 2,
    city_id: 5},
#20, 4
  { name: "New York Transit Museum",
    description: "Ride the subways of yesteryear.",
    long_description: "The New York Transit Museum is operated by the folks who know it best: the MTA. Who better to collect and display the history of the New York Transit system?",
    body: "Housed in the abandoned Court Street station, the museum features “Steel, Stone, and Backbone” about the building of the subways. The oldest artifacts in the museum are in the “On the Streets: Trolleys and Streetcars” section, which also describes the evolution of fuel technology in buses. On the lower (platform) level of the Museum are featured subway cars dating back to 1916 and wooden elevated cars dating back to 1903 as well as other miscellaneous equipment used in subway operation. Do you remember old tokens? They were the predominate fare on New York Subways and buses from 1953 until 2003, when the brass coins were replaced by the now-ubiquitous MetroCard. A permanent collection at the New York Transit Museum presents the token-operated turnstiles and the ticket chopping machines dating back to 1904; visitors enter the Museum through the same street entrance their grandparents once did. The Museum has an Annex/Gallery in Grand Central Terminal (to the left of the Station Master’s office). The original Court Street station opened in 1936 as part of an intended connection to Manhattan (approximately where the World Trade Center station on the E line is today), it served HH trains until 1946 when it was closed due to lack of use and lack of funds to build the tunnel to Manhattan. After that was used to film scenes for many movies — the opening scene of the 1974 movie The Taking of Pelham 1-2-3 shows a train entering the station (with a false wall on the right side). In 1976, the New York City Transit Authority wanted to contribute to the US Bicentennial celebration and opened the New York City Transit Exhibit in July 1976. The station was only intended to remain until September 1976, but public reaction was so overwhelming it remained open and eventually became the New York Transit Museum. Responsibility of the museum was subsequently transferred to the Metropolitan Transportation Authority to allow for expansion of exhibits to include other MTA facilities, such as Metro-North & Long Island Railroads, and MTA Bridges & Tunnels.",
    lat: 40.6890,
    lng: -73.9861,
    author_id: 4,
    city_id: 4},
#21, 1
  { name: "Fearless Girl Statue",
    description: "Wall Street has a new heroine, a bronze statue of a small but fierce girl.",
    long_description: "Positioned directly across from the famous Wall Street bull, this statue challenges gendered perceptions of power.",
    body: "The Fearless Girl, a bronze statue created by Kristen Visbal, was installed for International Women’s Day, standing right opposite the iconic Charging Bull statue in the Bowling Green park in downtown Manhattan. At just 4 feet and 250 pounds, she’s no competition in terms of size, but her fierce hands-on-hips stance and upturned face show that she’s more than a match for him. Commissioned by a financial services firm to advocate gender diversity on corporate boards, the statue in the city’s Financial District became a runaway hit, with thousands flocking to the site to get a photo with the heroine of the hour, and mimicking her pose. An online petition to make the statue a permanent fixture was started and received over 28,000 signatures by the following week. Her superstar status led to city authorities announcing that she would stay at the site until 2018.",
    lat: 40.7056,
    lng: -74.0134,
    author_id: 1,
    city_id: 4},

])

Image.destroy_all
# Image.create([
#   {article_id: 1, image},
#   {article_id: 1},
#   {article_id: 1},
#   {article_id: 21},
#   {article_id: 20},
#   {article_id: 2},
#   {article_id: 3},
#   {article_id: 4},
#   {article_id: 4},
#   {article_id: 4},
#   {article_id: 1},
#   {article_id: 6},
#   {article_id: 5},
#   ])
#
#   Image.create({
#   :id => 52,
#   :asset => File.new(Rails.root.join('path', 'to', 'somefile.jpg')),
#   :product_id => 52
# })

Image.create([
  {article_id: 4, image: File.new("app/assets/images/treasure_chest.jpg")},
  {article_id: 5, image: File.new("app/assets/images/toy_explorer.jpg")},
  {article_id: 6, image: File.new("app/assets/images/seed_images/bones1.jpg")},
  {article_id: 20, image: File.new("app/assets/images/seed_images/isla1.jpg")},
  {article_id: 21, image: File.new("app/assets/images/seed_images/mao2.jpg")},
  ])

  # {article_id: 2, image = "aws_url"}


#
# articles.map do |article|
#   article_found = Article.find(article.id)
#   article_found.update(article)
# end

# Image.create([
#
#   ])

ArticleEdit.destroy_all
ArticleEdit.create!([
  {article_id: 1, editor_id: 3},
  {article_id: 1, editor_id: 2},
  {article_id: 1, editor_id: 4},
  {article_id: 1, editor_id: 5},
  {article_id: 1, editor_id: 6},
  {article_id: 2, editor_id: 4},
  {article_id: 2, editor_id: 5},
  {article_id: 3, editor_id: 6},
  {article_id: 4, editor_id: 5},
  {article_id: 5, editor_id: 3},
  {article_id: 6, editor_id: 5},
  {article_id: 6, editor_id: 1},
  {article_id: 7, editor_id: 5},
  {article_id: 7, editor_id: 2},
  {article_id: 7, editor_id: 1},
  ])
