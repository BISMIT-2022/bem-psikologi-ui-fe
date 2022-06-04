const arrayOfNpm = [
    "111111111",
    "222222222",
    "333333333",
    "444444444"
]

const profile = {
    name: "Mayfa Shadrina Siddi",
    division: "Staf Biro Penelitian dan Pengembangan",
    otherOfficers: [
        {
            id: 1,
            name: "Winnie The Pooh",
            role: "Ketua",
            division: "Pengembangan Sumber Daya Manusia",
            divisionAcronym: "PSDM",
            isAssessed: false
        },
        {
            id: 2,
            name: "Mickey Mouse",
            role: "Wakil Ketua",
            division: "Pengembangan Sumber Daya Manusia",
            divisionAcronym: "PSDM",
            isAssessed: false
        },
        {
            id: 3,
            name: "Princess Anna",
            role: "Ketua",
            division: "Pengembangan Sumber Daya Manusia",
            divisionAcronym: "PSDM",
            isAssessed: true
        },
        {
            id: 4,
            name: "Rapunzel",
            role: "Ketua",
            division: "Pengembangan Sumber Daya Manusia",
            divisionAcronym: "PSDM",
            isAssessed: true
        },
        {
            id: 5,
            name: "Captain Jack Sparrow",
            role: "Ketua",
            division: "Penelitian dan Pengembangan",
            divisionAcronym: "Litbang",
            isAssessed: true
        },
        {
            id: 6,
            name: "M Abdurahman Basyah",
            role: "Hamba Allah",
            division: "Pengembangan Sumber Daya Manusia",
            divisionAcronym: "PSDM",
            isAssessed: true
        }
    ]
}


const assesmentQuestions = [
    {
        id: 1,
        type: "radio",
        question: "Apakah x?"
    },
    {
        id: 2,
        type: "radio",
        question: "Apakah xx?"
    },
    {
        id: 3,
        type: "textarea",
        question: "Apakah xxxx?"
    }
]
export { arrayOfNpm, profile, assesmentQuestions }