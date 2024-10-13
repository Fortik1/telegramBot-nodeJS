export default () => {
    const today = new Date();
    const day = today.getDay();
    const diff = day === 0 ? 1 : day > 1 ? 1 - day : 0;
    const nextMonday = new Date(today);
    nextMonday.setDate(today.getDate() + diff);

    const formattedDate = nextMonday.toISOString().split('T')[0];

    return formattedDate;
};
