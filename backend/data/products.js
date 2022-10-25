const products = [
	{
		name: "Airpods Wireless Bluetooth Headphones",
		images: [
			"https://images.unsplash.com/photo-1590658165737-15a047b7c0b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
			"https://images.unsplash.com/photo-1535057929422-25260d3e1a54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1273&q=80",
			"https://images.unsplash.com/photo-1499914845977-69a48b1aea28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
		],
		description:
			"Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
		brand: "Apple",
		category: "Miscellaneous",
		price: 89.99,
		countInStock: 3,
		rating: 0,
		numReviews: 0
	},
	{
		name: "iPhone 11 Pro 256GB Memory",
		images: [
			"https://images.unsplash.com/photo-1603891128711-11b4b03bb138?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
			"https://images.unsplash.com/photo-1574719128055-f4f84a835363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1289&q=80",
			"https://images.unsplash.com/photo-1570633545582-cd25ed6e8497?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
		],
		description:
			"Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
		brand: "Apple",
		category: "Miscellaneous",
		price: 599.99,
		countInStock: 10,
		rating: 0,
		numReviews: 0
	},
	{
		name: "  80D DSLR Camera",
		images: [
			"https://images.unsplash.com/photo-1500646953400-045056a916d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			"https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			"https://images.unsplash.com/photo-1474138452695-d27840ebf07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
		],
		description:
			"Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
		brand: "Cannon",
		category: "Miscellaneous",
		price: 929.99,
		countInStock: 0,
		rating: 0,
		numReviews: 0
	},
	{
		name: "Sony Playstation 4 Pro White Version",
		images: [
			"https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
			"https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
		],
		description:
			"The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
		brand: "Sony",
		category: "Chokers",
		price: 399.99,
		countInStock: 10,
		rating: 0,
		numReviews: 0
	},
	{
		name: "Logitech G-Series Gaming Mouse",
		images: [
			"https://images.unsplash.com/photo-1649194271718-c150fa081f4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
			"https://images.unsplash.com/photo-1611846199341-e68b0da801eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
			"https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80"
		],
		description:
			"Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
		brand: "Logitech",
		category: "Chokers",
		price: 49.99,
		countInStock: 7,
		rating: 0,
		numReviews: 0
	},
	{
		name: "Amazon Echo Dot 3rd Generation",
		images: [
			"https://images.unsplash.com/photo-1544451256-d79e9e199fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"https://images.unsplash.com/photo-1544428571-aaf850ce481e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"https://images.unsplash.com/photo-1518444667766-94728310399f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80"
		],
		description:
			"Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
		brand: "Amazon",
		category: "Bracelets",
		price: 29.99,
		countInStock: 0,
		rating: 0,
		numReviews: 0
	},
	{
		name: "Amazon Echo Dot 3rd Generation",
		images: [
			"https://images.unsplash.com/photo-1544451256-d79e9e199fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"https://images.unsplash.com/photo-1544428571-aaf850ce481e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"https://images.unsplash.com/photo-1518444667766-94728310399f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80"
		],
		description:
			"Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
		brand: "Amazon",
		category: "Pendants",
		price: 29.99,
		countInStock: 0,
		rating: 0,
		numReviews: 0
	},
	{
		name: "Amazon Echo Dot 3rd Generation",
		images: [
			"https://images.unsplash.com/photo-1544451256-d79e9e199fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"https://images.unsplash.com/photo-1544428571-aaf850ce481e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"https://images.unsplash.com/photo-1518444667766-94728310399f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80"
		],
		description:
			"Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
		brand: "Amazon",
		category: "StatementPieces",
		price: 29.99,
		countInStock: 0,
		rating: 0,
		numReviews: 0
	},
	{
		name: "Amazon Echo Dot 3rd Generation",
		images: [
			"https://images.unsplash.com/photo-1544451256-d79e9e199fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"https://images.unsplash.com/photo-1544428571-aaf850ce481e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"https://images.unsplash.com/photo-1518444667766-94728310399f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80"
		],
		description:
			"Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
		brand: "Amazon",
		category: "StatementPieces",
		price: 29.99,
		countInStock: 0,
		rating: 0,
		numReviews: 0
	},
	{
		name: "Amazon Echo Dot 3rd Generation",
		images: [
			"https://images.unsplash.com/photo-1544451256-d79e9e199fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"https://images.unsplash.com/photo-1544428571-aaf850ce481e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"https://images.unsplash.com/photo-1518444667766-94728310399f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80"
		],
		description:
			"Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
		brand: "Amazon",
		category: "Necklaces",
		price: 29.99,
		countInStock: 0,
		rating: 0,
		numReviews: 0
	},
	{
		name: "Amazon Echo Dot 3rd Generation",
		images: [
			"https://images.unsplash.com/photo-1544451256-d79e9e199fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"https://images.unsplash.com/photo-1544428571-aaf850ce481e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"https://images.unsplash.com/photo-1518444667766-94728310399f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80"
		],
		description:
			"Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
		brand: "Amazon",
		category: "Necklaces",
		price: 29.99,
		countInStock: 0,
		rating: 0,
		numReviews: 0
	}
];

export default products;
