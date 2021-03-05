export const CARTITEMS = [
    {
        key: 0,
        nameShort: "One-Day Tickets",
        name: "Regular One-Day Admission",
        subtitle: "Buy Online and Save!",
        icon: "fa fa-ticket-alt",
        text: "Plan your visit to Jurassic Park early by buying your One-Day ticket online! Includes round-trip tickets to the island by ",
        textLink: "boat",
        href: "/getting-here#boat",
        textPrice: "Buy Online for Only",
        price: 189.99,
        benefits: {
            "access": true,
            "dinosaurs": true,
            "boat": true,
        }
    },
    {
        key: 1,
        nameShort: "Student & Elderly Tickets",
        name: "One-Day Admission: Student & Elderly Discount",
        subtitle: "Special Discount Pricing",
        icon: "fa fa-graduation-cap",
        text: "Students with a valid student ID and seniors over the age of 65 are eligible for discounted pricing.",
        disclaimer: "A valid student ID or proof of age must be presented to confirm discount.",
        textPrice: "Buy Online for Only",
        price: 164.99,
    },
    {
        key: 2,
        nameShort: "All-You-Can-Eat",
        name: "One-Day All-You-Can-Eat Pass",
        icon: "fa fa-utensils",
        text: "Valid for unlimited all-you-can-eat meals and drinks for one person at the ",
        textLink: "Cretaceous Cafe",
        href: "/cafe",
        disclaimer: "Valid only at the Cretaceous Cafe.",
        textPrice: "Add to Your Ticket for Only",
        price: 59.99,
        benefits: {
            "access": true,
            "dinosaurs": true,
            "allYouCanEat": true,
            "boat": true,
        }
    },
    {
        key: 3,
        id: "VIP",
        nameShort: "VIP One-Day Tickets",
        name: "VIP One-Day Admission",
        icon: "far fa-gem",
        text: "Experience Jurassic Park the way it's meant to be! Includes round-trip tickets to the island by ",
        textLink: "helicopter",
        href: "/getting-here#helicopter",
        text2: ", as well as the chance to witness the ",
        textLink2: "Miracle of Birth at the Laboratory",
        href2: "/laboratory#hatchery",
        textPrice: "Buy Online for",
        price: 349.99,
        benefits: {
            "access": true,
            "dinosaurs": true,
            "allYouCanEat": true,
            "boat": true,
            "helicopter": true,
            "waterfalls": true,
            "miracleOfBirth": true
        }
    },
    {
        key: 4,
        seasonPass: true,
        nameShort: "Season Pass",
        name: "Season Pass",
        subtitle: "Pay for the Whole Year and Save!",
        icon: "fa fa-address-card",
        text: "Why pay for tickets again and again when you can pay all at once and save? Our Season Pass is available for the entire 1993 season, barring unforseen closure or catastrophe.",
        textPrice: "12 Months of Visits Only",
        price: 949.95,
        equivalentVisits: 5,
        benefits: {
            "access": true,
            "dinosaurs": true,
            "boat": true,
        }
    },
    {
        key: 5,
        seasonPass: true,
        name: "Season Pass + Unlimited Dining",
        nameShort: "SP + Dining",
        nameSrOnly: "Season Pass plus Unlimited Dining",
        subtitle: "Pay for the Whole Year and Save!",
        icon: "fa fa-utensils",
        text: "Includes unlimited visits during the 1993 season, as well as unlimited all-you-can-eat at the ",
        textLink: "Cretaceous Cafe",
        href: "/cafe",
        textPrice: "12 Months of Visits & Dining Only",
        price: 1249.90,
        equivalentVisits: 5,
        benefits: {
            "access": true,
            "dinosaurs": true,
            "boat": true,
            "allYouCanEat": true,
        }
    },
    {
        key: 6,
        seasonPass: true,
        nameShort: "VIP Season Pass",
        name: "VIP Season Pass",
        icon: "far fa-gem",
        text: "Our VIP Season Pass entitles visitors to unlimited visits during the 1993 season, including trips by ",
        textLink: "helicopter",
        href: "/getting-here#helicopter",
        text2: " and access to the ",
        textLink2: "Miracle of Birth at the Laboratory",
        href2: "/laboratory#hatchery",
        textPrice: "12 Months of VIP Access",
        price: 1749.95,
        equivalentVisits: 5,
        buttonSrOnly: "VIP Season Pass",
        benefits: {
            "access": true,
            "dinosaurs": true,
            "allYouCanEat": true,
            "boat": true,
            "helicopter": true,
            "waterfalls": true,
            "miracleOfBirth": true
        }
    },
    {
        key: 7,
        name: "Groups of 10 and Up",
        icon: "fa fa-users",
        subtitle: "Come as a Group and Save!",
        text: "Bring the whole family or a group of friends for a day of thrills and adventure! Any group of 10 or more people can buy one-day tickets online and save.",
        minimumQuantity: 10,
        textPrice: "Each Ticket Only",
        price: 159.99,
        buttonSrOnly: "Group Tickets",
    },
    {
        key: 8,
        id: "corporate-events",
        name: "Corporate & Special Events",
        icon: "fa fa-chart-bar",
        text: "With catered dining, special teambuilding opportunities, and access to the Presentation Room in the ",
        href: "../things-to-see/visitor-center.html",
        textLink: "Visitor Center",
        text2: ", Jurassic Park has it all. Take advantage of our unique facilities and attractions for your next corporate outing.",
        textTelColumn: "Corporate and special events",
    },
    {
        key: 9,
        name: "Dino-mite Birthday Package",
        icon: "fa fa-birthday-cake",
        subtitle: "Our Best-Value Package!",
        text: "Come spend your special day at Jurassic Park! Includes usage of the Triassic Room (located in the ",
        href: "visitor-center",
        textLink: "Visitor Center",
        text2: ") for you and up to 30 guests.",
        textTelColumn: "Birthday parties",
    },
    {
        key: 10,
        name: "VIP Birthday Party Package",
        icon: "far fa-gem",
        text: "In addition to the regular package, you will also receive a free gift for each party guest, as well as the chance to witness the ",
        href: "/laboratory#hatchery",
        textLink: "Miracle of Birth at the Laboratory",
        textTelColumn: "Birthday parties",
    }
]