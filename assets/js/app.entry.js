// Entry point to bundle all app scripts in correct order
// Ensure config and helpers are bundled first
import './config/app.config.js';
import './helpers/storage.helper.js';
import './helpers/validation.helper.js';

import './components/table.components.js';
import './components/modal.components.js';
import './components/sound.components.js';
import './components/alert.components.js';
import './components/loading.components.js';
import './components/confirm.components.js';
import './components/multiselect.components.js';

import './services/data.services.js';

import './handlers/create.handler.js';
import './handlers/read.handler.js';
import './handlers/update.handler.js';
import './handlers/delete.handler.js';

// Keep main last so it runs after components are defined
import './main.js';
