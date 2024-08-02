const mockData = [
    { _id: 0, title: 'First planner' },
    { _id: 1, title: 'Second planner' },
    { _id: 2, title: 'Planner to delete' },
    { _id: 3, title: 'Last planner' },
]

const mockDayData = [
    { _id: 0, title: "J1 P0", timeStart: new Date(2024, 6, 23, 8), hourEnd: '', planningId: 0 },
    { _id: 1, title: "J2 P0", timeStart: new Date(2024, 6, 23, 8), hourEnd: '', planningId: 0 },
    { _id: 2, title: "J1 P1", timeStart: new Date(2024, 6, 23, 8), hourEnd: '', planningId: 1 },
    { _id: 3, title: "J1 P2", timeStart: new Date(2024, 6, 23, 8), hourEnd: '', planningId: 2 },
    { _id: 4, title: "J2 P2", timeStart: new Date(2024, 6, 23, 8), hourEnd: '', planningId: 2 },
    { _id: 5, title: "J3 P2", timeStart: new Date(2024, 6, 23, 8), hourEnd: '', planningId: 2 },
    { _id: 6, title: "J4 P2", timeStart: new Date(2024, 6, 23, 8), hourEnd: '', planningId: 2 },
    { _id: 7, title: "J1 P3", timeStart: new Date(2024, 6, 23, 8), hourEnd: '', planningId: 3 },
    { _id: 8, title: "J2 P3", timeStart: new Date(2024, 6, 23, 8), hourEnd: '', planningId: 3 },
    { _id: 9, title: "J3 P3", timeStart: new Date(2024, 6, 23, 8), hourEnd: '', planningId: 3 },
    { _id: 10, title: "J2 P1", timeStart: new Date(2024, 6, 23, 8), hourEnd: '', planningId: 1 },
]

exports.getPlannings = (req, res) => {
    return res.status(200).json({ plannings: mockData })
}

exports.monthlyDetail = (req, res) => {
    const { id } = req.params;
    const { year, month, day } = req.query;
    const planningDetail = mockDayData.filter(item => item.planningId === Number(id) && item.timeStart.getDate() === Number(day) && item.timeStart.getMonth() === Number(month) && item.timeStart.getFullYear() === Number(year))
    return res.status(200).json({ id, planningDetail })
}