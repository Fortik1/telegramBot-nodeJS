import parser from './scripts/parserScheduleHTML.js';
import addGroupList from "./scripts/addGroupList.js";

export default async () => {
   addGroupList(await parser());
};
