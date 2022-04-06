const ghosts = [{
		"name": "Spirit",
		"primaryEvidences": [
			"EMF Level 5",
			"Ghost Writing",
			"Spirit Box"
		],
		"secondaryEvidences": [
			"Smudge sticks stop attacks for 3 min instead of 1.5"
		],
		"desc": "Spirits are very common ghosts. They are very powerful but passive, only attacking when they need to. They defend their place of death to the utmost degree, killing anyone that is caught overstaying their welcome.",
		"strenghts": ["None"],
		"weaknesses": ["A Spirit can be temporarily stopped by burning Smudge Sticks near them."]
	},
	{
		"name": "Wraith",
		"primaryEvidences": [
			"EMF Level 5",
			"Spirit Box",
			"D.O.T.S. Projector"
		],
		"secondaryEvidences": [
			"Stepping in salt leaves no UV footprints",
			"Can become more active after stepping in salt",
			"Can teleport to a random player (while not hunting) which will do EMF lvl 2 or 5 and do interactions"
		],
		"desc": "A Wraith is one of the most dangerous ghosts in Phasmophobia. It is also the only known ghost that has the ability of flight and has been known to travel through walls.",
		"strenghts": ["Wraiths almost never touch the ground, therefore it can not be tracked by footsteps."],
		"weaknesses": ["Wraiths have a toxic reaction to Salt."]
	},
	{
		"name": "Phantom",
		"primaryEvidences": [
			"Spirit Box",
			"Fingerprints",
			"D.O.T.S. Projector"
		],
		"secondaryEvidences": [
			"Looking at the ghost drops sanity by 0.4% each second instead of 0.2%",
			"Taking a photo makes the ghost temporarily disappear (while not hunting)",
			"Blinks slower during hunts (1s to 2s instead of 0.3s to 1s)",
			"Can walk to a random player anywhere on the map (while not hunting) and do interactions"
		],
		"desc": "A Phantom is a ghost that can posses the living, inducing fear into those around it. They are most commonly summoned from Ouija Boards.",
		"strenghts": ["Looking at a Phantom will drop your sanity considerably faster."],
		"weaknesses": ["Taking a photo of the Phantom will make it temporarily disappear."]
	},
	{
		"name": "Poltergeist",
		"primaryEvidences": [
			"Spirit Box",
			"Ghost Writing",
			"Fingerprints"
		],
		"secondaryEvidences": [
			"Only ghost that can throw multiple objects at once",
			"Every thrown object makes players loose 2% sanity instead of 1%",
			"Very inactive in rooms without items"
		],
		"desc": "The Poltergeist is one of the most famous ghosts and also happens to be a very noisy ghost that can manipulate objects around it to spread fear into its victims.",
		"strenghts": ["A Poltergeist can throw multiple objects at once."],
		"weaknesses": ["A Poltergeist is virtually ineffective in an empty room that has no objects to manipulate."]
	},
	{
		"name": "Banshee",
		"primaryEvidences": [
			"Ghost Orbs",
			"Fingerprints",
			"D.O.T.S. Projector"
		],
		"secondaryEvidences": [
			"Targets and hunts one player until killed (If the player is not in the building, it does a regular hunt)",
			"Only checks their targets sanity % for initiating a hunt in multiplayer",
			"Will often wander toward their target when roaming",
			"Singing ghost events will now drain an extra 5% sanity on the Banshee's target",
			"Preferes singing ghost events over other events",
			"Can sometimes be heard wailing with a parabolic microphone"
		],
		"desc": "A Banshee is a natural hunter and will attack anything. It has been known to single out and stalk its prey before making a killing blow.",
		"strenghts": ["A Banshee will only target one person at a time"],
		"weaknesses": ["Banshees fear the rucifix and will be less aggressive when near one."]
	},
	{
		"name": "Jinn",
		"primaryEvidences": [
			"Freezing Temperature",
			"EMF Level 5",
			"Fingerprints"
		],
		"secondaryEvidences": [
			"Cannot use any abilities when the breaker is turned off",
			"During a hunt it travels faster (2.1m/s) when chasing a target until a distance of 10m",
			"Can lower the sanity of all players within a 3m radius by 25%",
			"Cannot turn off the breaker directly. (Unless by turning on too many lights)"
		],
		"desc": "A Jinn is a territorial ghost that will attack when it feels threatened. It can also travel at very high speeds.",
		"strenghts": ["A Jinn will travel at a faster speed if its victim is far away."],
		"weaknesses": ["Turning off the locations power source will prevent the Jinn from using its ability."]
	},
	{
		"name": "Mare",
		"primaryEvidences": [
			"Ghost Orbs",
			"Spirit Box",
			"Ghost Writing"
		],
		"secondaryEvidences": [
			"Can hunt at 60 % avg sanity when lights in the room are turned off",
			"This is not affected by candles, torches or other equipment",
			"Tiny chance to turn off a light immediately after it was turned on by a player",
			"Cannot turn on lights",
			"More likely to roam to adjacent dark rooms when the lights in the current room are on",
			"More likely to turn of lights the doing other ghost interactions",
			"Preferes light events (red light & shattering) over other ghost events"
		],
		"desc": "A Mare is the source of all nightmares, which makes it most powerful in the dark.",
		"strenghts": ["A Mare will have an increased chance to attack in the dark."],
		"weaknesses": ["Turning the lights on around the Mare will lower its chance to attack."]
	},
	{
		"name": "Revenant",
		"primaryEvidences": [
			"Freezing Temperature",
			"Ghost Orbs",
			"Ghost Writing"
		],
		"secondaryEvidences": [
			"Very fast when chasing a player during a hunt (2x normal speed)",
			"Very slow when not chasing anyone during a hunt (1/2 of normal speed)"
		],
		"desc": "A Revenant is a violent Ghost that will attack indiscriminately. Their speed can be decieving, as they are slow while dormant. However, as soon as they hunt they can move incredibly fast.",
		"strenghts": ["A Revenant will travel at a significantly faster speed when hunting their prey."],
		"weaknesses": ["Hiding from a Revenant will cause it to move very slowly."]
	},
	{
		"name": "Shade",
		"primaryEvidences": [
			"Freezing Temperature",
			"EMF Level 5",
			"Ghost Writing"
		],
		"secondaryEvidences": [
			"Can only initiate a hunt at an avarage sanity of 35%",
			"Less chance of ghost activity and ghost events when more than 1 player is nearby",
			"Lower chance of initiating a hunt when more than 1 players are in the same room",
			"For every 1% of average sanity lost, ghost event chance is increased by 2% (capped at 100%)"
		],
		"desc": "A Shade is known to be a shy ghost and evidence suggests that it will tend to stop all paranormal activity if there are multiple people in the vicinity.",
		"strenghts": ["Being shy means a Shade can be harder to find than other ghosts."],
		"weaknesses": ["If there are multiple people nearby a Shade, the ghost will not enter hunting mode."]
	},
	{
		"name": "Demon",
		"primaryEvidences": [
			"Freezing Temperature",
			"Fingerprints",
			"Ghost Writing"
		],
		"secondaryEvidences": [
			"Can initiate a hunt at an avarage sanity of 70%",
			"Insta-hunt: Low chance to start a hunt regardless the avarage sanity",
			"Using cursed objects lowers sanity less than by other ghosts",
			"The Crucifixes effective radius is 5m instead of 3m",
			"Loose less sanity (80% of original loss) by answering to the Ouija board"
		],
		"desc": "A Demon is one of the worst ghosts your can encounter in Phasmophobia and is known to attack its victims without a reason.",
		"strenghts": ["Demons will initiate hunts more often than any other ghost."],
		"weaknesses": ["Asking a Demon successful questions on the Ouija Board won't lower the users sanity."]
	},
	{
		"name": "Yurei",
		"primaryEvidences": [
			"Freezing Temperature",
			"Ghost Orbs",
			"D.O.T.S. Projector"
		],
		"secondaryEvidences": [
			"Ghost event drops sanity by 0.4% per second instead of 0.2%",
			"This also applies when a player is within 10m during a hunt",
			"Smudging will make it to stay in the room for 1.5 min",
			"Can close doors randomly without doing a ghost event"
		],
		"desc": "A Yurei is a ghost that has returned to the physical world, usually for the purpose of revenge or hatred.",
		"strenghts": ["Yurei's tend to have a stronger effect on people's sanity."],
		"weaknesses": ["Smudging the Yurei's room will trap it temporarily, reducing how much it wanders."]
	},
	{
		"name": "Oni",
		"primaryEvidences": [
			"Freezing Temperature",
			"EMF Level 5",
			"D.O.T.S. Projector"
		],
		"secondaryEvidences": [
			"Chance to throw objects with more force so they fly further",
			"More ghost activity and events when there are more people are nearby"
		],
		"desc": "Oni, which are a cousin to the Demon, possess extreme strength and are known to become much more active around their prey.",
		"strenghts": ["Oni are much more active when people are nearby and have been seen to move objects at great speed."],
		"weaknesses": ["Being more active will make the Oni easier to find and identify."]
	},
	{
		"name": "Yokai",
		"primaryEvidences": [
			"Ghost Orbs",
			"Spirit Box",
			"D.O.T.S. Projector"
		],
		"secondaryEvidences": [
			"Can initiate an early hunt at an avarage sanity of 80% if players are talking nearby",
			"During a hunt it only can hear sounds in a radius of 2m"
		],
		"desc": "Yokai are best known as common ghosts that are attracted to human voices. Typically, Yokai can be found haunting family homes.",
		"strenghts": ["Talking near a Yokai will anger it and increase the chance of an attack."],
		"weaknesses": ["Yokai can only hear voices close to it when hunting."]
	},
	{
		"name": "Hantu",
		"primaryEvidences": [
			"Freezing Temperature",
			"Ghost Orbs",
			"Fingerprints"
		],
		"secondaryEvidences": [
			"Walking speed is affected by room temperature when hunting",
			"1.4 m/s= 15°C+ | 1.75 m/s= 12°C | 2.1 m/s= 9°C | 2.3 m/s= 6°C | 2.5 m/s= 3°C | 2.7 m/s= 0°C",
			"Shows their breath in room temperatures of 3°C or lower",
			"Has double the chance to turn off the breaker",
			"Can no longer turn on the breaker, as this would stop them accelerating"
		],
		"desc": "Found in hotter climates, a Hantu is a rare ghost that is known to attack more often in cold weather.",
		"strenghts": ["Lower temperatures allow the Hantu to move at faster speeds."],
		"weaknesses": ["Hantus move slower in warmer areas."]
	},
	{
		"name": "Goryo",
		"primaryEvidences": [
			"EMF Level 5",
			"Fingerprints",
			"D.O.T.S. Projector"
		],
		"secondaryEvidences": [
			"D.O.T.S. only visible through a video cam and no players in the room",
			"Less likely to roam when not hunting",
			"D.O.T.S. evidence are guaranteed on nightmare difficulty"
		],
		"desc": "The only way to see a Goryo is to view it through a video camera as it passes through a D.O.T.S Projector.",
		"strenghts": ["A Goryo will usually only show itself on camera if there are no people nearby."],
		"weaknesses": ["They are rarely seen far from their place of death."]
	},
	{
		"name": "Myling",
		"primaryEvidences": [
			"EMF Level 5",
			"Fingerprints",
			"Ghost Writing"
		],
		"secondaryEvidences": [
			"More sounds on the parabolic mic",
			"During a hunt footstep sounds can only be heard when 10m or closer (similar to electronic interference)"
		],
		"desc": "A Myling is a very vocal and active ghost. They are rumored to be quiet when hunting their prey.",
		"strenghts": ["A Myling is known to be quieter when hunting."],
		"weaknesses": ["Mylings more frequently make paranormal sounds."]
	},
	{
		"name": "Onryo",
		"primaryEvidences": [
			"Spirit Box",
			"Ghost Orbs",
			"Freezing Temperature"
		],
		"secondaryEvidences": [
			"Can initiate a hunt when any flames are extinguished regardless of average sanity",
			"Chance for the ability increases everytime a player is killed",
			"Lit candles act as crucifixes. Blown out when successfuly prevented a hunt"
		],
		"desc": "The Onryo is often referred to as 'The Wrathful Spirit.' It steals souls from dying victims' bodies to seek revenge. This ghost has been known to fear any form of fire, and will do anything to be far from it.",
		"strenghts": ["Extinguishing a flame can cause an Onryo to attack."],
		"weaknesses": ["When threatened, ghost will be less likely to hunt."]
	},
	{
		"name": "The Twins",
		"primaryEvidences": [
			"EMF Level 5",
			"Spirit Box",
			"Freezing Temperature"
		],
		"secondaryEvidences": [
			"Main twin primary stays in the ghost room, makes freezing and spirit box",
			"Secondary twin wanders around interacting with the environment",
			"Secondary twin cannot interact with motion sensors, spirit box or make freezing",
			"Either Twin can initiate a Hunt but not simultaneously",
			"Crucifix only checks for main twin regardless of which will hunt",
			"During hunts the main twin is slower (by 10%) and the decoy is faster (by 10%)"
		],
		"desc": "These ghosts have been reported to mimic each other's actions. They alternate their attacks to confuse their prey.",
		"strenghts": ["Either Twin can be angered and initiate an attack on their prey."],
		"weaknesses": ["The Twins will often interact with the environment at the same time."]
	},
	{
		"name": "Raiju",
		"primaryEvidences": [
			"EMF Level 5",
			"Ghost Orbs",
			"D.O.T.S. Projector"
		],
		"secondaryEvidences": [
			"While hunting it has an increased movement speed when it touches electronic equipment",
			"It doesn't matter if the equipment lies on the floor or held by a player",
			"Abilities only affected by player equipment and not location electrics like TVs or lights",
			"Head mounted cameras, motion sensors and sound sensors do not count towards the speed boost",
			"Can initiate a hunt at an avarage sanity of 65% if there is electrical equipment nearby"
		],
		"desc":"A Raiju is a demon that thrives on electrical current. While generally calm, they can become agitated when overwhelmed with power.",
		"strenghts": ["A Raiju can siphon power from nearby electrical devices, making it move faster."],
		"weaknesses": ["Raiju are constantly disrupting electronic equipment, making it easier to track when attacking."]
	},
	{
		"name": "Obake",
		"primaryEvidences": [
			"EMF Level 5",
			"Fingerprints",
			"Ghost Orbs"
		],
		"secondaryEvidences": [
			"Reduced chance of 75% to leave fingerprints",
			"Low chance to leave fingerprints with 6 fingers",
			"Fingerprints have a 50% chance to disappear earlier (60s) than of other ghosts (120s)",
			"Always gives the Fingerprints evidence on nightmare difficulty"
		],
		"desc": "Obake are terrifying shape-shifters, capable of taking on many forms. They have been seen taking humanoid shapes to attract their prey.",
		"strenghts": ["When interacting with the environment, an Obake will rarely leave a trace."],
		"weaknesses": ["Sometimes this ghost will shapeshift, leaving behind unique evidence."]
	},
	{
		"name": "The Mimic",
		"primaryEvidences": [
			"Freezing Temperature",
			"Spirit Box",
			"Fingerprints",
			"Ghost Orbs"
		],
		"secondaryEvidences": [
			"Picks another ghost type to imitate and changes it occasionally",
			"Copies almost all abilities and behaviour of the picked ghost",
			"Cannot switch picked ghost during a hunt",
			"Has ghost orbs as 4th evidence which are always present, regardless of which ghost being imitated"
		],
		"desc": "The Mimic is an elusive, mysterious, copycat ghost that mirrors traits and behaviours from others, including other ghost types.",
		"strenghts": ["We're unsure what this ghost is capable of. Be careful."],
		"weaknesses": ["Several reports have noted ghost orb sightings near mimics."]
	}
]
export default ghosts;