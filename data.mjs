const categories = {
    "dehydrated": [
        {
            name: "Red Onion Flakes",
            description: `
                    <ul>
                        <li><strong>Appearance:</strong> Light red to purple in color.</li>
                        <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Strong, pungent red onion flavor, slightly sweeter than white onion.</li>
                        <li><strong>Applications:</strong> Used in recipes, soups, sauces, seasoning blends, and ready-to-eat meals. Ideal for retaining red onion flavor in dry form.</li>
                        <li><strong>Nutritional Value:</strong> Rich in fiber, vitamins C and B6, and antioxidants like quercetin.</li>
                    </ul>
`,
            img: "Red Onion.jpeg"
        },
        {
            name: "White Onion Flakes",
            description: `
                    <ul>
                        <li><strong>Appearance:</strong> White to off-white color.</li>
                        <li><strong>Forms Available:</strong> Flakes, powder, granules, minced.</li>
                        <li><strong>Processing Method:</strong> Air-dried.</li>
                        <li><strong>Flavor Profile:</strong> Strong, pungent onion flavor, slightly milder than red onions.</li>
                        <li><strong>Applications:</strong> Used in recipes,Used in soups, sauces, spice blends, processed foods, and convenience meals.</li>
                        <li><strong>Nutritional Value:</strong> Rich in fiber, vitamin C, and low in calories.</li>
                    </ul>
`,
            img: "White Onion.webp"
        },
        {
            name: "Tomato Flakes",
            description: `
                    <ul>
                        <li><strong>Appearance:</strong> Red to dark red.</li>
                        <li><strong>Forms Available:</strong> Flakes, powder, granules, sliced.</li>
                        <li><strong>Processing Method:</strong> Solar Drying or hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Intense tomato flavor, concentrated sweetness.</li>
                        <li><strong>Applications:</strong>  Used in recipes, soups, sauces, seasoning mixes, snacks, and ready-made meals.</li>
                        <li><strong>Nutritional Value:</strong> High in vitamins A and C, potassium, and antioxidants like lycopene.</li>
                    </ul>
`,
            img: "Tomato.jpeg"
        },
        {
            name: "Garlic Flakes",
            description: `
                    <ul>
                        <li><strong>Appearance:</strong> White to light yellow.</li>
                        <li><strong>Forms Available:</strong> Flakes, powder, granules, minced.</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Strong, pungent garlic flavor.</li>
                        <li><strong>Applications:</strong>  Used in recipes, spice blends, sauces, marinades, processed foods, and ready-to-eat meals.</li>
                        <li><strong>Nutritional Value:</strong> High in allicin, vitamins C and B6, and manganese.</li>
                    </ul>
`,
            img: "Garlic.jpeg"
        },
        {
            name: "Cabbage Flakes",
            description: `
                <ul>
                <li><strong>Appearance:</strong> Light green to yellow-green.</li>
                <li><strong>Forms Available:</strong> Flakes, powder, shredded.</li>
                <li><strong>Processing Method:</strong> Hot air drying.</li>
                <li><strong>Flavor Profile:</strong> Mild, slightly sweet, typical cabbage flavor.</li>
                <li><strong>Applications:</strong>  Used in recipes, soups, stews, stir-fries, and salad mixes.</li>
                <li><strong>Nutritional Value:</strong> Rich in vitamin C, fiber, and low in calories.</li>
                </ul>
            `,
            img: "Cabbage.webp"
        },
        {
            name: "Green Chilli Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Bright green with a coarse texture.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Spicy, sharp, and tangy flavor with a fresh green chili aroma.</li>
                    <li><strong>Applications:</strong>  Used in recipes, curries, soups, pickles, seasoning blends, and marinades for a spicy kick.</li>
                    <li><strong>Nutritional Value:</strong> Rich in vitamin C, capsaicin, and antioxidants that promote metabolism and immunity.</li>
                </ul>
            `,
            img: "Green Chilli.webp"
        },
        {
            name: "Ginger Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Light beige to golden brown, thin and crisp.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Warm, spicy, and slightly sweet flavor with a strong ginger aroma.</li>
                    <li><strong>Applications:</strong> Ideal for teas, soups, recipes, baked goods, spice blends, and sauces.</li>
                    <li><strong>Nutritional Value:</strong> Contains gingerol, dietary fiber, and antioxidants, aiding digestion and reducing inflammation.</li>
                </ul>
`,
            img: "Ginger Flakes.webp"
        },
        {
            name: "Pumpkin Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Bright orange, thin, and slightly translucent.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Mildly sweet and earthy flavor with a soft pumpkin essence.</li>
                    <li><strong>Applications:</strong>  Used in recipes, soups, stews, baking, and health drinks.</li>
                    <li><strong>Nutritional Value:</strong> High in beta-carotene, fiber, and vitamins A and C for skin and eye health.</li>
                </ul>
            `,
            img: "Pumpkin.jpg"
        },
        {
            name: "Potato Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Off-white to pale yellow, thin, and crisp.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Neutral, slightly buttery flavor, perfect for versatile applications.</li>
                    <li><strong>Applications:</strong>  Used in recipes, soups, mashed potatoes, baking, and instant meal mixes.</li>
                    <li><strong>Nutritional Value:</strong> Rich in carbohydrates, potassium, and vitamin B6, providing energy and supporting muscle function.</li>
                </ul>
            `,
            img: "Potato.png"
        },
        {
            name: "Lemon Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Light yellow, thin, and crisp with a slightly glossy surface.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Zesty, tangy, and citrusy with a fresh lemon aroma.</li>
                    <li><strong>Applications:</strong>  Used in recipes, teas, desserts, salad dressings, marinades, and seasoning blends.</li>
                    <li><strong>Nutritional Value:</strong> High in vitamin C, citric acid, and antioxidants for immune support and detoxification.</li>
                </ul>
            `,
            img: "Lemon.jpeg"
        },
        {
            name: "Tamarind Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Dark brown, thin, and slightly sticky.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Tangy, sweet, and slightly sour with a deep tamarind essence.</li>
                    <li><strong>Applications:</strong> Ideal for curries, recipes, chutneys, sauces, and beverages for a tangy flavor boost.</li>
                    <li><strong>Nutritional Value:</strong> Rich in tartaric acid, fiber, and magnesium, promoting digestion and overall health.</li>
                </ul>
            `,
            img: "Tamarind.webp"
        },
        
        {
            name: "Spinach Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Dark green, thin, and crisp with a slightly rough texture.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Mildly earthy and slightly sweet with a fresh spinach aroma.</li>
                    <li><strong>Applications:</strong>  Used in recipes, soups, sauces, smoothies, pasta, baked goods, and seasoning blends.</li>
                    <li><strong>Nutritional Value:</strong> Rich in iron, vitamin K, vitamin A, and folate, supporting bone health, vision, and immunity.</li>
                </ul>
            `,
            img: "Spinach.jpeg"
        },
        {
            name: "Capsicum Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Bright red, green, or yellow, thin, and slightly glossy.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Sweet, mildly tangy, and aromatic with a fresh capsicum essence.</li>
                    <li><strong>Applications:</strong>  Used in recipes, soups, sauces, stir-fries, pizza toppings, and seasoning blends.</li>
                    <li><strong>Nutritional Value:</strong> Rich in vitamin C, vitamin A, and antioxidants, supporting skin health and immunity.</li>
                </ul>
            `,
            img: "Capsicum.webp"
        },
        {
            name: "Okra Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Light green, thin, and slightly crisp with a fibrous texture.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Mildly grassy and earthy with a subtle sweetness.</li>
                    <li><strong>Applications:</strong>  Used in recipes, soups, stews, curries, and snack mixes for added texture and flavor.</li>
                    <li><strong>Nutritional Value:</strong> High in dietary fiber, vitamin C, and folate, promoting digestion and overall health.</li>
                </ul>
            `,
            img: "Okra.jpeg"
        },
        {
            name: "Carrot Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Bright orange, thin, and slightly translucent.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Sweet and earthy with a fresh carrot aroma.</li>
                    <li><strong>Applications:</strong>  Used in recipes, soups, stews, baked goods, health drinks, and baby food.</li>
                    <li><strong>Nutritional Value:</strong> Rich in beta-carotene, vitamin A, and antioxidants, supporting vision and skin health.</li>
                </ul>
            `,
            img: "Carrot.jpeg"
        },
        {
            name: "Beans Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Light green to pale yellow, thin, and slightly coarse.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Mild, earthy, and slightly nutty with a fresh bean aroma.</li>
                    <li><strong>Applications:</strong>  Used in recipes, soups, stews, stir-fries, and casseroles for added nutrition and texture.</li>
                    <li><strong>Nutritional Value:</strong> High in protein, fiber, and vitamins like B6, promoting muscle health and digestion.</li>
                </ul>
            `,
            img: "Beans.webp"
        },
        {
            name: "Coriander Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Light green, thin, and slightly coarse with a crisp texture.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Fresh, citrusy, and slightly earthy with a distinct coriander aroma.</li>
                    <li><strong>Applications:</strong>  Used in recipes, soups, curries, chutneys, marinades, and seasoning blends.</li>
                    <li><strong>Nutritional Value:</strong> Rich in antioxidants, vitamin C, and dietary fiber, promoting digestion and immunity.</li>
                </ul>
            `,
            img: "Coriander.webp"
        },
        {
            name: "Mint Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Dark green, thin, and slightly curled with a crisp texture.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Cool, refreshing, and mildly sweet with a strong mint aroma.</li>
                    <li><strong>Applications:</strong>  Used in recipes, teas, chutneys, salads, raita, desserts, and seasoning blends.</li>
                    <li><strong>Nutritional Value:</strong> Contains menthol, antioxidants, and vitamin C, aiding digestion and refreshing the palate.</li>
                </ul>
            `,
            img: "Mint.jpg"
        },
        {
            name: "Kasuri Methi (Dried Fenugreek Leaves)",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Light green with a slight yellowish hue, thin, and crisp.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Strong, earthy, and slightly bitter with a distinctive fenugreek aroma.</li>
                    <li><strong>Applications:</strong>  Used in recipes, curries, parathas, dals, gravies, and spice mixes for a robust flavor.</li>
                    <li><strong>Nutritional Value:</strong> Rich in iron, calcium, and fiber, promoting bone health and digestion.</li>
                </ul>
            `,
            img: "Kasuri Methi.jpeg"
        },
        {
            name: "Curry Leaves Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Dark green, thin, and slightly glossy with a crisp texture.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Aromatic, slightly spicy, and earthy with a subtle citrusy undertone.</li>
                    <li><strong>Applications:</strong>  Used in recipes, curries, dals, chutneys, rice dishes, and seasoning blends.</li>
                    <li><strong>Nutritional Value:</strong> High in iron, vitamin A, and antioxidants, supporting hair health and digestion.</li>
                </ul>
            `,
            img: "Curry Leaves.webp"
        },
        {
            name: "Apple Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Light beige to pale yellow, thin, and crisp.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Sweet, mildly tangy, with a fresh apple aroma.</li>
                    <li><strong>Applications:</strong> Used in cereals, baked goods, desserts, teas, and snack mixes.</li>
                    <li><strong>Nutritional Value:</strong> High in dietary fiber, vitamin C, and antioxidants that promote heart and gut health.</li>
                </ul>
            `,
            img: "Apple.jpeg"
        },
        {
            name: "Beetroot Flakes",
            description: `
                    <ul>
                        <li><strong>Appearance:</strong> Deep red to purplish color.</li>
                        <li><strong>Forms Available:</strong> Flakes, powder, granules, diced.</li>
                        <li><strong>Processing Method:</strong> Air-dried, vacuum-dried.</li>
                        <li><strong>Flavor Profile:</strong> Earthy and slightly sweet.</li>
                        <li><strong>Applications:</strong> Used in soups, beverages, natural colorants, health drinks, and snacks.</li>
                        <li><strong>Nutritional Value:</strong> Rich in folate, iron, potassium, and antioxidants like betalains.</li>
                    </ul>
`,
            img: "Beetroot.webp"
        },
        {
            name: "Mango Flakes ( Amchur Powder )",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Bright yellow to orange, thin, and slightly translucent.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Sweet, tropical, and slightly tangy with a rich mango essence.</li>
                    <li><strong>Applications:</strong> Used in smoothies, desserts, yogurt, sauces, and health drinks.</li>
                    <li><strong>Nutritional Value:</strong> Rich in vitamin A, vitamin C, and beta-carotene, supporting skin and immune health.</li>
                </ul>
            `,
            img: "Mango.jpg"
        },
        {
            name: "Banana Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Light yellow to cream-colored, thin, and crisp.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Sweet and creamy with a strong banana aroma.</li>
                    <li><strong>Applications:</strong> Used in cereals, smoothies, baby food, baked goods, and health snacks.</li>
                    <li><strong>Nutritional Value:</strong> Rich in potassium, vitamin B6, and natural sugars for energy and muscle function.</li>
                </ul>
            `,
            img: "Banana.webp"
        },
        {
            name: "Pineapple Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Golden yellow, thin, and slightly sticky.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Sweet, tangy, and tropical with a fresh pineapple essence.</li>
                    <li><strong>Applications:</strong> Used in teas, desserts, marinades, sauces, and tropical smoothies.</li>
                    <li><strong>Nutritional Value:</strong> High in bromelain, vitamin C, and manganese, aiding digestion and immunity.</li>
                </ul>
            `,
            img: "Pineapple.jpg"
        },
        {
            name: "Orange Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Bright orange, thin, and slightly glossy.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Zesty, tangy, and citrusy with a fresh orange aroma.</li>
                    <li><strong>Applications:</strong> Used in teas, desserts, sauces, salad dressings, and health drinks.</li>
                    <li><strong>Nutritional Value:</strong> High in vitamin C, flavonoids, and antioxidants for immune and skin health.</li>
                </ul>
            `,
            img: "Orange.jpeg"
        },
        {
            name: "Strawberry Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Bright red, thin, and slightly translucent.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Sweet, tangy, and fruity with a rich strawberry aroma.</li>
                    <li><strong>Applications:</strong> Used in cereals, smoothies, desserts, yogurt, and health snacks.</li>
                    <li><strong>Nutritional Value:</strong> Rich in vitamin C, manganese, and antioxidants, supporting heart health and immunity.</li>
                </ul>
            `,
            img: "Strawberry.jpg"
        },
        {
            name: "Papaya Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Light orange to peach-colored, thin, and slightly glossy.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Sweet and tropical with a mild papaya essence.</li>
                    <li><strong>Applications:</strong> Used in smoothies, health drinks, desserts, and baby food.</li>
                    <li><strong>Nutritional Value:</strong> High in papain, vitamin A, and vitamin C, promoting digestion and skin health.</li>
                </ul>
            `,
            img: "Papaya.jpg"
        },
        {
            name: "Guava Flakes",
            description: `
                <ul>
                    <li><strong>Appearance:</strong> Pale pink to light green, thin, and crisp.</li>
                    <li><strong>Forms Available:</strong> Flakes, powder, granules.</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Sweet, tangy, and aromatic with a distinctive guava flavor.</li>
                    <li><strong>Applications:</strong> Used in teas, smoothies, desserts, sauces, and health drinks.</li>
                    <li><strong>Nutritional Value:</strong> Rich in vitamin C, fiber, and antioxidants, boosting immunity and digestion.</li>
                </ul>
            `,
            img: "Guava.jpeg"
        },
    ],
    "spray-dried": [

            {
                name: "Red Onion Powder",
                description: `
                        <ul>
                            <li><strong>Appearance:</strong> Light red to purple in color.</li>
                            <li><strong>Forms Available:</strong> Powder</li>
                            <li><strong>Processing Method:</strong> Hot air drying.</li>
                            <li><strong>Flavor Profile:</strong> Strong, pungent red onion flavor, slightly sweeter than white onion.</li>
                            <li><strong>Applications:</strong> Used in soups, sauces, seasoning blends, and ready-to-eat meals. Ideal for retaining red onion flavor in dry form.</li>
                            <li><strong>Nutritional Value:</strong> Rich in fiber, vitamins C and B6, and antioxidants like quercetin.</li>
                        </ul>
    `,
                img: "Red Onion.jpeg"
            },
            {
                name: "White Onion Powder",
                description: `
                        <ul>
                            <li><strong>Appearance:</strong> White to off-white color.</li>
                            <li><strong>Forms Available:</strong> Powder</li>
                            <li><strong>Processing Method:</strong> Air-dried.</li>
                            <li><strong>Flavor Profile:</strong> Strong, pungent onion flavor, slightly milder than red onions.</li>
                            <li><strong>Applications:</strong> Used in soups, sauces, spice blends, processed foods, and convenience meals.</li>
                            <li><strong>Nutritional Value:</strong> Rich in fiber, vitamin C, and low in calories.</li>
                        </ul>
    `,
                img: "WhiteOnion.jpeg"
            },
            {
                name: "Tomato Powder",
                description: `
                        <ul>
                            <li><strong>Appearance:</strong> Red to dark red.</li>
                            <li><strong>Forms Available:</strong> Powder</li>
                            <li><strong>Processing Method:</strong> Solar Drying or hot air drying.</li>
                            <li><strong>Flavor Profile:</strong> Intense tomato flavor, concentrated sweetness.</li>
                            <li><strong>Applications:</strong> Used in soups, sauces, seasoning mixes, snacks, and ready-made meals.</li>
                            <li><strong>Nutritional Value:</strong> High in vitamins A and C, potassium, and antioxidants like lycopene.</li>
                        </ul>
    `,
                img: "Tomato.webp"
            },
            {
                name: "Garlic Powder",
                description: `
                        <ul>
                            <li><strong>Appearance:</strong> White to light yellow.</li>
                            <li><strong>Forms Available:</strong> Powder</li>
                            <li><strong>Processing Method:</strong> Hot air drying.</li>
                            <li><strong>Flavor Profile:</strong> Strong, pungent garlic flavor.</li>
                            <li><strong>Applications:</strong> Used in spice blends, sauces, marinades, processed foods, and ready-to-eat meals.</li>
                            <li><strong>Nutritional Value:</strong> High in allicin, vitamins C and B6, and manganese.</li>
                        </ul>
    `,
                img: "Garlic.jpeg"
            },
            {
                name: "Cabbage Powder",
                description: `
                    <ul>
                    <li><strong>Appearance:</strong> Light green to yellow-green.</li>
                    <li><strong>Forms Available:</strong> Powder</li>
                    <li><strong>Processing Method:</strong> Hot air drying.</li>
                    <li><strong>Flavor Profile:</strong> Mild, slightly sweet, typical cabbage flavor.</li>
                    <li><strong>Applications:</strong> Used in soups, stews, stir-fries, and salad mixes.</li>
                    <li><strong>Nutritional Value:</strong> Rich in vitamin C, fiber, and low in calories.</li>
                    </ul>
                `,
                img: "Cabbage.webp"
            },
            {
                name: "Green Chilli Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Bright green with a coarse texture.</li>
                        <li><strong>Forms Available:</strong>  Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Spicy, sharp, and tangy flavor with a fresh green chili aroma.</li>
                        <li><strong>Applications:</strong> Used in curries, soups, pickles, seasoning blends, and marinades for a spicy kick.</li>
                        <li><strong>Nutritional Value:</strong> Rich in vitamin C, capsaicin, and antioxidants that promote metabolism and immunity.</li>
                    </ul>
                `,
                img: "Green Chilly.jpeg"
            },
            {
                name: "Ginger Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Light beige to golden brown, thin and crisp.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Warm, spicy, and slightly sweet flavor with a strong ginger aroma.</li>
                        <li><strong>Applications:</strong> Ideal for teas, soups, baked goods, spice blends, and sauces.</li>
                        <li><strong>Nutritional Value:</strong> Contains gingerol, dietary fiber, and antioxidants, aiding digestion and reducing inflammation.</li>
                    </ul>
    `,
                img: "Ginger.jpeg"
            },
            {
                name: "Pumpkin Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Bright orange, thin, and slightly translucent.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Mildly sweet and earthy flavor with a soft pumpkin essence.</li>
                        <li><strong>Applications:</strong> Used in soups, stews, baking, and health drinks.</li>
                        <li><strong>Nutritional Value:</strong> High in beta-carotene, fiber, and vitamins A and C for skin and eye health.</li>
                    </ul>
                `,
                img: "pumpkin.webp"
            },
            {
                name: "Potato Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Off-white to pale yellow, thin, and crisp.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Neutral, slightly buttery flavor, perfect for versatile applications.</li>
                        <li><strong>Applications:</strong> Used in soups, mashed potatoes, baking, and instant meal mixes.</li>
                        <li><strong>Nutritional Value:</strong> Rich in carbohydrates, potassium, and vitamin B6, providing energy and supporting muscle function.</li>
                    </ul>
                `,
                img: "Potato.jpeg"
            },
            {
                name: "Lemon Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Light yellow, thin, and crisp with a slightly glossy surface.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Zesty, tangy, and citrusy with a fresh lemon aroma.</li>
                        <li><strong>Applications:</strong> Used in teas, desserts, salad dressings, marinades, and seasoning blends.</li>
                        <li><strong>Nutritional Value:</strong> High in vitamin C, citric acid, and antioxidants for immune support and detoxification.</li>
                    </ul>
                `,
                img: "Lemon.webp"
            },
            {
                name: "Tamarind Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Dark brown, thin, and slightly sticky.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Tangy, sweet, and slightly sour with a deep tamarind essence.</li>
                        <li><strong>Applications:</strong> Ideal for curries, chutneys, sauces, and beverages for a tangy flavor boost.</li>
                        <li><strong>Nutritional Value:</strong> Rich in tartaric acid, fiber, and magnesium, promoting digestion and overall health.</li>
                    </ul>
                `,
                img: "Tamarind.jpg"
            },
            {
                name: "Spinach Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Dark green, thin, and crisp with a slightly rough texture.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Mildly earthy and slightly sweet with a fresh spinach aroma.</li>
                        <li><strong>Applications:</strong> Used in soups, sauces, smoothies, pasta, baked goods, and seasoning blends.</li>
                        <li><strong>Nutritional Value:</strong> Rich in iron, vitamin K, vitamin A, and folate, supporting bone health, vision, and immunity.</li>
                    </ul>
                `,
                img: "Spinach.jpeg"
            },
            {
                name: "Capsicum Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Bright red, green, or yellow, thin, and slightly glossy.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Sweet, mildly tangy, and aromatic with a fresh capsicum essence.</li>
                        <li><strong>Applications:</strong> Used in soups, sauces, stir-fries, pizza toppings, and seasoning blends.</li>
                        <li><strong>Nutritional Value:</strong> Rich in vitamin C, vitamin A, and antioxidants, supporting skin health and immunity.</li>
                    </ul>
                `,
                img: "Capsicum.jpg"
            },
            {
                name: "Okra Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Light green, thin, and slightly crisp with a fibrous texture.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Mildly grassy and earthy with a subtle sweetness.</li>
                        <li><strong>Applications:</strong> Used in soups, stews, curries, and snack mixes for added texture and flavor.</li>
                        <li><strong>Nutritional Value:</strong> High in dietary fiber, vitamin C, and folate, promoting digestion and overall health.</li>
                    </ul>
                `,
                img: "Okra.jpg"
            },
            {
                name: "Carrot Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Bright orange, thin, and slightly translucent.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Sweet and earthy with a fresh carrot aroma.</li>
                        <li><strong>Applications:</strong> Used in soups, stews, baked goods, health drinks, and baby food.</li>
                        <li><strong>Nutritional Value:</strong> Rich in beta-carotene, vitamin A, and antioxidants, supporting vision and skin health.</li>
                    </ul>
                `,
                img: "Carrot.jpeg"
            },
            {
                name: "Beans Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Light green to pale yellow, thin, and slightly coarse.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Mild, earthy, and slightly nutty with a fresh bean aroma.</li>
                        <li><strong>Applications:</strong> Used in soups, stews, stir-fries, and casseroles for added nutrition and texture.</li>
                        <li><strong>Nutritional Value:</strong> High in protein, fiber, and vitamins like B6, promoting muscle health and digestion.</li>
                    </ul>
                `,
                img: "Beans.jpg"
            },
            {
                name: "Coriander Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Light green, thin, and slightly coarse with a crisp texture.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Fresh, citrusy, and slightly earthy with a distinct coriander aroma.</li>
                        <li><strong>Applications:</strong> Used in soups, curries, chutneys, marinades, and seasoning blends.</li>
                        <li><strong>Nutritional Value:</strong> Rich in antioxidants, vitamin C, and dietary fiber, promoting digestion and immunity.</li>
                    </ul>
                `,
                img: "Coriander.jpg"
            },
            {
                name: "Mint Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Dark green, thin, and slightly curled with a crisp texture.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Cool, refreshing, and mildly sweet with a strong mint aroma.</li>
                        <li><strong>Applications:</strong> Used in teas, chutneys, salads, raita, desserts, and seasoning blends.</li>
                        <li><strong>Nutritional Value:</strong> Contains menthol, antioxidants, and vitamin C, aiding digestion and refreshing the palate.</li>
                    </ul>
                `,
                img: "Mint.jpg"
            },
            {
                name: "Kasuri Methi (Dried Fenugreek Leaves)",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Light green with a slight yellowish hue, thin, and crisp.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Strong, earthy, and slightly bitter with a distinctive fenugreek aroma.</li>
                        <li><strong>Applications:</strong> Used in curries, parathas, dals, gravies, and spice mixes for a robust flavor.</li>
                        <li><strong>Nutritional Value:</strong> Rich in iron, calcium, and fiber, promoting bone health and digestion.</li>
                    </ul>
                `,
                img: "Kasuri Methi.jpg"
            },
            {
                name: "Curry Leaves Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Dark green, thin, and slightly glossy with a crisp texture.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Aromatic, slightly spicy, and earthy with a subtle citrusy undertone.</li>
                        <li><strong>Applications:</strong> Used in curries, dals, chutneys, rice dishes, and seasoning blends.</li>
                        <li><strong>Nutritional Value:</strong> High in iron, vitamin A, and antioxidants, supporting hair health and digestion.</li>
                    </ul>
                `,
                img: "Curry Leaves.jpg"
            },
            {
                name: "Apple Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Light beige to pale yellow, thin, and crisp.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Sweet, mildly tangy, with a fresh apple aroma.</li>
                        <li><strong>Applications:</strong> Used in cereals, baked goods, desserts, teas, and snack mixes.</li>
                        <li><strong>Nutritional Value:</strong> High in dietary fiber, vitamin C, and antioxidants that promote heart and gut health.</li>
                    </ul>
                `,
                img: "Apple.jpeg"
            },
            
            {
                name: "Beetroot Powder",
                description: `
                        <ul>
                            <li><strong>Appearance:</strong> Deep red to purplish color.</li>
                            <li><strong>Forms Available:</strong> Powder</li>
                            <li><strong>Processing Method:</strong> Air-dried, vacuum-dried.</li>
                            <li><strong>Flavor Profile:</strong> Earthy and slightly sweet.</li>
                            <li><strong>Applications:</strong> Used in soups, beverages, natural colorants, health drinks, and snacks.</li>
                            <li><strong>Nutritional Value:</strong> Rich in folate, iron, potassium, and antioxidants like betalains.</li>
                        </ul>
    `,
                img: "Beetroot.webp"
            },
            {
                name: "Mango Powder ( Amchur Powder ) ",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Bright yellow to orange, thin, and slightly translucent.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Sweet, tropical, and slightly tangy with a rich mango essence.</li>
                        <li><strong>Applications:</strong> Used in smoothies, desserts, yogurt, sauces, and health drinks.</li>
                        <li><strong>Nutritional Value:</strong> Rich in vitamin A, vitamin C, and beta-carotene, supporting skin and immune health.</li>
                    </ul>
                `,
                img: "Mango.jpeg"
            },
            {
                name: "Grape Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Deep purple or light green, thin, and slightly glossy.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Sweet and juicy with a rich grape aroma.</li>
                        <li><strong>Applications:</strong> Used in teas, cereals, baked goods, and as a topping for desserts.</li>
                        <li><strong>Nutritional Value:</strong> High in antioxidants like resveratrol, vitamin C, and natural sugars for energy and cell protection.</li>
                    </ul>
                `,
                img: "Grape.webp"
            },
            {
                name: "Banana Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Light yellow to cream-colored, thin, and crisp.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Sweet and creamy with a strong banana aroma.</li>
                        <li><strong>Applications:</strong> Used in cereals, smoothies, baby food, baked goods, and health snacks.</li>
                        <li><strong>Nutritional Value:</strong> Rich in potassium, vitamin B6, and natural sugars for energy and muscle function.</li>
                    </ul>
                `,
                img: "Banana.jpeg"
            },
            {
                name: "Pineapple Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Golden yellow, thin, and slightly sticky.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Sweet, tangy, and tropical with a fresh pineapple essence.</li>
                        <li><strong>Applications:</strong> Used in teas, desserts, marinades, sauces, and tropical smoothies.</li>
                        <li><strong>Nutritional Value:</strong> High in bromelain, vitamin C, and manganese, aiding digestion and immunity.</li>
                    </ul>
                `,
                img: "Pineapple.jpg"
            },
            {
                name: "Orange Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Bright orange, thin, and slightly glossy.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Zesty, tangy, and citrusy with a fresh orange aroma.</li>
                        <li><strong>Applications:</strong> Used in teas, desserts, sauces, salad dressings, and health drinks.</li>
                        <li><strong>Nutritional Value:</strong> High in vitamin C, flavonoids, and antioxidants for immune and skin health.</li>
                    </ul>
                `,
                img: "Orange.jpeg"
            },
            {
                name: "Strawberry Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Bright red, thin, and slightly translucent.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Sweet, tangy, and fruity with a rich strawberry aroma.</li>
                        <li><strong>Applications:</strong> Used in cereals, smoothies, desserts, yogurt, and health snacks.</li>
                        <li><strong>Nutritional Value:</strong> Rich in vitamin C, manganese, and antioxidants, supporting heart health and immunity.</li>
                    </ul>
                `,
                img: "Strawberry.webp"
            },
            {
                name: "Papaya Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Light orange to peach-colored, thin, and slightly glossy.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Sweet and tropical with a mild papaya essence.</li>
                        <li><strong>Applications:</strong> Used in smoothies, health drinks, desserts, and baby food.</li>
                        <li><strong>Nutritional Value:</strong> High in papain, vitamin A, and vitamin C, promoting digestion and skin health.</li>
                    </ul>
                `,
                img: "Papaya.webp"
            },
            {
                name: "Guava Powder",
                description: `
                    <ul>
                        <li><strong>Appearance:</strong> Pale pink to light green, thin, and crisp.</li>
                        <li><strong>Forms Available:</strong> Powder</li>
                        <li><strong>Processing Method:</strong> Hot air drying.</li>
                        <li><strong>Flavor Profile:</strong> Sweet, tangy, and aromatic with a distinctive guava flavor.</li>
                        <li><strong>Applications:</strong> Used in teas, smoothies, desserts, sauces, and health drinks.</li>
                        <li><strong>Nutritional Value:</strong> Rich in vitamin C, fiber, and antioxidants, boosting immunity and digestion.</li>
                    </ul>
                `,
                img: "Guava.jpeg"
            },
    ],
    "essential-oil": [
        { name: "Essential Oil", description: "Comming Soon...", img: "https://via.placeholder.com/300x200" },
    ],
    "processed-dairy": [
        {
            name: "Cheese Powder",
            img: "Cheese.jpeg",
            description: `
                <ul class="list-disc pl-4">
                    <li><strong>Flavor:</strong> Rich cheese flavor for culinary applications.</li>
                    <li><strong>Usage:</strong> Ideal for sauces, dips, and snacks.</li>
                    <li><strong>Storage:</strong> Keep in a cool, dry place.</li>
                </ul>`,
        },
        {
            name: "Curd Powder",
            img: "Curd.jpeg",
            description: `
                <ul class="list-disc pl-4">
                    <li><strong>Flavor:</strong> Authentic tangy curd taste.</li>
                    <li><strong>Usage:</strong> Perfect for dressings and curries.</li>
                    <li><strong>Storage:</strong> Best stored in a cool environment.</li>
                </ul>`,
        },
        {
            name: "Yogurt Powder",
            img: "yogurt.webp",
            description: `
                <ul class="list-disc pl-4">
                    <li><strong>Flavor:</strong> Creamy and smooth yogurt taste.</li>
                    <li><strong>Usage:</strong> Great for smoothies and desserts.</li>
                    <li><strong>Storage:</strong> Preserve in an airtight container.</li>
                </ul>`,
        },
        {
            name: "Cream Powder",
            img: "Cream.jpeg",
            description: `
                <ul class="list-disc pl-4">
                    <li><strong>Flavor:</strong> Rich and creamy texture.</li>
                    <li><strong>Usage:</strong> Used in baking and confectioneries.</li>
                    <li><strong>Storage:</strong> Store in a moisture-free environment.</li>
                </ul>`,
        },
        {
            name: "Fat Powder",
            img: "Fat.webp",
            description: `
                <ul class="list-disc pl-4">
                    <li><strong>Flavor:</strong> Neutral taste, adds richness.</li>
                    <li><strong>Usage:</strong> Ideal for baked goods and beverages.</li>
                    <li><strong>Storage:</strong> Keep in a sealed, cool place.</li>
                </ul>`,
        },
        {
            name: "Ghee Powder",
            img: "Ghee powder.jpeg",
            description: `
                <ul class="list-disc pl-4">
                    <li><strong>Flavor:</strong> Distinct ghee aroma and taste.</li>
                    <li><strong>Usage:</strong> Perfect for Indian cuisine and sweets.</li>
                    <li><strong>Storage:</strong> Store away from direct sunlight.</li>
                </ul>`,
        },
        {
            name: "Whey Powder",
            img: "Whey.jpeg",
            description: `
                <ul class="list-disc pl-4">
                    <li><strong>Flavor:</strong> Mild, versatile taste.</li>
                    <li><strong>Usage:</strong> Popular in protein shakes and baking.</li>
                    <li><strong>Storage:</strong> Maintain in an airtight container.</li>
                </ul>`,
        },
        {
            name: "Butter Powder",
            img: "Butter.jpeg",
            description: `
                <ul class="list-disc pl-4">
                    <li><strong>Flavor:</strong> Rich, buttery flavor.</li>
                    <li><strong>Usage:</strong> Perfect for sauces, baking, and toppings.</li>
                    <li><strong>Storage:</strong> Keep in a dry, cool place.</li>
                </ul>`,
        },
    ],

    "animal-feed": [
        { name: "Animal Feed", description: "<h2>Comming Soon...", img: "https://via.placeholder.com/300x200" },
    ],
    "millets": [
        {
            name: "Foxtail Millet (Thinai/Tenai) Semolina",
            description: `
                <ul>
                    <li><strong>Nutrition:</strong> Rich in dietary fiber, protein, and low glycemic index, making it suitable for diabetics.</li>
                    <li><strong>Uses:</strong> Works well in dishes like upma, idli, dosa, and traditional desserts.</li>
                    <li><strong>Taste:</strong> Mild, with a slightly nutty flavor.</li>
                </ul>
                `,
            img: "Foxtail Millet Semolina.webp"
        },
        {
            name: "Pearl Millet (Bajra) Semolina",
            description: `
                <ul>
                    <li><strong>Nutrition:</strong> High in iron, magnesium, and calcium, known to improve digestion and manage cholesterol.</li>
                    <li><strong>Uses:</strong> Good for savory dishes like porridges or Indian breads like roti.</li>
                    <li><strong>Taste:</strong> Earthy and slightly bitter, adds a hearty texture to dishes.</li>
                </ul>
                `,
            img: "Bajra.webp"
        },
        {
            name: "Little Millet (Kutki/Samai) Semolina",
            description: `
                <ul>
                    <li><strong>Nutrition:</strong> Rich in antioxidants and fiber, it helps in weight management and supports digestion.</li>
                    <li><strong>Uses:</strong> Ideal for breakfast porridges, idli, and sweets like kesari.</li>
                    <li><strong>Taste:</strong> Light and delicate, easily blends with various flavors.</li>
                </ul>
                `,
            img: "little-millet-kutki.webp"
        },
        {
            name: "Kodo Millet (Varagu) Semolina",
            description: `
                <ul>
                    <li><strong>Nutrition:</strong> High in fiber, minerals, and antioxidants, good for maintaining heart health and regulating blood sugar.</li>
                    <li><strong>Uses:</strong> Works well in salads, snacks, and upma.</li>
                    <li><strong>Taste:</strong> Subtle, slightly sweet flavor.</li>
                </ul>
                `,
            img: "Kodo Millet (Varagu) Semolina.jpg"
        },
        {
            name: "Finger Millet (Ragi) Semolina",
            description: `
                <ul>
                    <li><strong>Nutrition:</strong> Extremely rich in calcium, iron, and protein, beneficial for bone health and anemia.</li>
                    <li><strong>Uses:</strong> Often used in making healthy porridge, dosas, or sweet dishes like ragi halwa.</li>
                    <li><strong>Taste:</strong> Nutty and mildly sweet.</li>
                </ul>
                `,
            img: "Finger Millet (Ragi) Semolina.jpeg"
        }
    ]
};


export default categories;