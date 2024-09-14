import parser from './scripts/parserScheduleHTML.js';
import parserByRef from './scripts/parseScheduleByRef.js';

export default async () => {
   const normalizeDataSheduleAll = await parser();
   console.log(await parserByRef());
};
