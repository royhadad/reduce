const data = [
    {
        id: '12',
        name: 'jimmie',
        place: 'gedera'
    },
    {
        id: '13',
        name: 'roy',
        place: 'tel aviv'
    },
    {
        id: '14',
        name: 'itay',
        place: 'ashdod'
    }
]

const result = data.reduce((newData, current) => ({
    ids: [...newData.ids, current.id],
    items: {
        ...newData.items,
        [current.id]: {
            ...current
        }
    }
})
    , {
        ids: [],
        items: {}
    });

console.log(result);
