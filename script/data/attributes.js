let attributes = [
    {
        id: 1,
        name: "Gear Box",
        values: [
            {
                id: 1,
                value: "Auto"
            },
            {
                id: 2,
                value: "Mechanic"
            }
        ],
        icon: "/images/karobka.png"
    },
    {
        id: 2,
        name: "Fuel",
        values: [
            {
                id: 1,
                value: "Gas"
            },
            {
                id: 2,
                value: "Petrol"
            }
        ],
        icon: "/images/bezin.png"
    },
    {
        id: 3,
        name: "Doors",
        values: [
            {
                id: 1,
                value: "2"
            },
            {
                id: 2,
                value: "4"
            }
        ],
        icon: "/images/dors.png"
    },
    {
        id: 4,
        name: "Conditoner",
        values: [
            {
                id: 1,
                value: "yes"
            },
            {
                id: 2,
                value: "no"
            }
        ],
        icon: "/images/codictioner.svg"
    },
    {
        id: 5,
        name: "Seats",
        values: [
            {
                id: 1,
                value: 1
            },
            {
                id: 2,
                value: 2
            },
            {
                id: 3,
                value: 4
            },
            {
                id: 4,
                value: 5
            },
            {
                id: 5,
                value: 7
            }
        ],
        icon: "/images/seats.png"
    },
        {
        id: 6,
        name: "Distance",
        values: [
            {
                id: 1,
                value: 100
            },
            {
                id: 2,
                value: 200
            },
        ],
        icon: "/images/Distance.png"
    }
]
localStorage.setItem("attributes", JSON.stringify(attributes))