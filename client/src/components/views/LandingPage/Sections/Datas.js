const continents = [
    {
        _id: 1,
        name: 'China',
    },
    {
        _id: 2,
        name: 'Canada',
    },
    {
        _id: 3,
        name: 'England',
    },
    {
        _id: 4,
        name: 'Greece',
    },
    {
        _id: 5,
        name: 'France',
    },
    {
        _id: 6,
        name: 'Italy',
    },
    {
        _id: 7,
        name: 'Spain',
    },
];

const price = [
    {
        _id: 0,
        name: 'All',
        array: [],
    },
    {
        _id: 1,
        name: '$0 to $500',
        array: [0, 500],
    },
    {
        _id: 2,
        name: '$500 to $1000',
        array: [500, 1000],
    },
    {
        _id: 3,
        name: '$1000 to $2000',
        array: [1000, 2000],
    },
    {
        _id: 4,
        name: '$2000 to $3000',
        array: [2000, 3000],
    },
    {
        _id: 5,
        name: 'More than $3000',
        array: [3000, 1500000],
    },
];

export { price, continents };
