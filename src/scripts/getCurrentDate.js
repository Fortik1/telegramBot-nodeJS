export default () => {
    const today = new Date();
    const nextMonday = new Date(
        today.getTime() + (1 + (1 - today.getDay() + 7) % 7) * 86400000
    );

    return nextMonday.toISOString().slice(0, 10);
};
