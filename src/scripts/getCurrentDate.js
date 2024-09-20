export default () => {
    const today = new Date();
    const dayOfWeek = today.getDay();

    const offset = (dayOfWeek === 0) ? 1 : 0;

    const mondayDate = new Date(today);
    mondayDate.setDate(today.getDate() - dayOfWeek + 1 + (7 * offset));

    const year = mondayDate.getFullYear();
    const month = String(mondayDate.getMonth() + 1).padStart(2, '0');
    const day = String(mondayDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;

};
