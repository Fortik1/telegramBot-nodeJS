export default () => {
    const today = new Date();
    let nextMonday;
    if (today.getDay() === 0) {
        nextMonday = new Date(
            today.getTime() + (1 + (1 - today.getDay() + 7) % 7) * 86400000
        );
    } else {
        nextMonday = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDay() - today.getDay() + 1
        );
    }

    return nextMonday.toISOString().slice(0, 10);
};
