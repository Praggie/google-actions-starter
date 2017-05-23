const exec = require('child_process').execSync;
const config = require('./update_action_config');

// config.updateConfig().then(actionConfig => {
//     // here you have access to the update to date action config (with the right ngrok URL)
// });

exec(`gactions test --action_package action.json --project 'assisto-skill' --preview_mins 1234`, { stdio: [0, 1, 2] });