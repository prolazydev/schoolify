import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
import fs from 'fs';
import mustache from 'mustache';

dotenv.config();

try {
    const notion = new Client({ auth: process.env.NOTION_KEY });
    const database_id = process.env.NOTION_DB_ID;

    async function main() {
        const response = await notion.databases.query({ database_id });

        console.log(response.results);
        for (let i = 0; i < response.results.length; i++) {
            console.log(response.results[i].properties);
        }
    }

    await main();
} catch (err) {
    console.error(err);
}
