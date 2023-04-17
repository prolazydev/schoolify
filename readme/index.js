import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
import fastEqual from 'fast-deep-equal';
import fs from 'fs';
import Mustache from 'mustache';
import path from 'path';
import { fileURLToPath } from 'url';

import currentData from './data.json' assert { type: 'json' };

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Get the directory name of the current file
dotenv.config({ path: path.resolve(__dirname, 'local.env') });

try {
    const notion = new Client({ auth: process.env.NOTION_KEY });
    const database_id = process.env.NOTION_DB_ID;
    
    async function main() {
        const response = await notion.databases.query({ database_id });
        const data = [];

        for (let i = 0; i < response.results.length; i++) {
            const task = response.results[ i ];
            const tempTask = {};

            tempTask.title = task.properties.Name.title[ 0 ].plain_text;
            tempTask.description = getWholeDescription(task);
            tempTask.type = getWholeTaskTypes(task);
            tempTask.ETA = task.properties.ETA.rich_text[ 0 ]?.plain_text ?? 'ETA not specified';
            tempTask.status = task.properties.Status.status.name;
            tempTask.url = task.url;
            tempTask.last_edited_at = task.last_edited_time;
            tempTask.isImportant = isImportant(task);
            
            data.push(tempTask);
        }
        if (!currentData || Object.keys(currentData).length === 0) {
            fs.writeFile('readme/data.json', JSON.stringify(data), err => {
                if (err) 
                    return console.error(err);
                
                console.log('Data written to file successfully');
            });
        } else if (fastEqual(currentData, data)) 
            return console.log('No updates needed');

        const notStartedTasks = data.filter(task => task.status === 'Not started').sort((a, b) => b.isImportant - a.isImportant);
        const inProgressTasks = data.filter(task => task.status === 'In progress').sort((a, b) => b.isImportant - a.isImportant);
        const completedTasks = data.filter(task => task.status === 'Complete').sort((a, b) => b.isImportant - a.isImportant);

        const template = fs.readFileSync(path.resolve(__dirname, 'template.mustache'), 'utf8');
        const areStartedTasks = (notStartedTasks.length) ? true : false;
        const areProgressTasks = (inProgressTasks.length) ? true : false;
        const areCompletedTasks = (completedTasks.length) ? true : false;

        const rendered = Mustache.render(template, {
            areStartedTasks,
            areProgressTasks,
            areCompletedTasks,
            notStartedTasks,
            inProgressTasks,
            completedTasks,
        });

        // Write the rendered README file
        fs.writeFileSync('README.md', rendered);
    }
    await main();
} catch (err) {
    console.error(err);
}

function getWholeDescription(task) {
    let descriptionText = "";
    for (const text of task.properties.Description.rich_text) 
        descriptionText += text.plain_text;
    
    return (descriptionText.length) ? descriptionText : '*No details*';
}

function getWholeTaskTypes(task) {
    let types = [];
    for (const type of task.properties.Type.multi_select) 
        types.push(type.name);
    
    return types;
}

function getWholeTagTypes(task) {
    let tags = [];
    for (const type of task.properties.Task.multi_select)
        tags.push(type.anme)
}

function isImportant(task) {
    return task.properties.Tags.multi_select.includes('Important');
}