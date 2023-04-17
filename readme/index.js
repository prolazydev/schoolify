import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
import fs from 'fs';
import Mustache from 'mustache';

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Get the directory name of the current file
dotenv.config({ path: path.resolve(__dirname, '.env') });

try {
    const notion = new Client({ auth: process.env.NOTION_KEY });
    const database_id = process.env.NOTION_DB_ID;

    async function main() {
        const response = await notion.databases.query({ database_id });

        // createJSONFile(response);

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
            // TODO: Add important filtering
            // tempTask.important = task.important;
            
            data.push(tempTask);
        }

        const notStartedTasks = data.filter(task => task.status === 'Not started');
        const inProgressTasks = data.filter(task => task.status === 'In progress');
        const completedTasks = data.filter(task => task.status === 'Complete');

        // console.table(notStartedTasks);
        // console.table(inProgressTasks);
        // console.table(completeTasks);

        const template = fs.readFileSync(path.resolve(__dirname, 'template.mustache'), 'utf8');
        const areStartedTasks = (notStartedTasks.length) ? true : false;
        const areProgressTasks = (inProgressTasks.length) ? true : false;
        const areCompletedTasks = (completedTasks.length) ? true : false;
        // Render the template with the split data arrays
        const rendered = Mustache.render(template, {
            areStartedTasks,
            areProgressTasks,
            areCompletedTasks,
            notStartedTasks,
            inProgressTasks,
            completedTasks,
        });

        // Write the rendered README file to disk
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
    // let types = "";
    // for (const type of task.properties.Type.multi_select) 
    //     types += `${type.name} `;
    
    // return types.trim();

    let types = [];
    for (const type of task.properties.Type.multi_select) 
        types.push(type.name);
    
    return types;
}


async function createJSONFile(data) {
  // Convert the JSON object to a string with two-space indentation
  const jsonData = JSON.stringify(data, null, 2);
  
  // Write the JSON string to a file named 'data.json'
  fs.writeFile('data.json', jsonData, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}
