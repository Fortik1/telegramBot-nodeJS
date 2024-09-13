import fs from 'fs';
import { resolve } from 'node:path';
import { cwd } from 'node:process';

export default () => {
    const filePath = resolve(cwd(), 'src/TGbot/secret/config.json');

    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};
