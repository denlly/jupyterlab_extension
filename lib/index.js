"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apputils_1 = require("@jupyterlab/apputils");
const widgets_1 = require("@phosphor/widgets");
require("../style/index.css");
/**
 * Initialization data for the jupyterlab_xkcd extension.
 */
const extension = {
    id: 'jupyterlab_xkcd',
    autoStart: true,
    requires: [apputils_1.ICommandPalette],
    activate: (app, palette) => {
        console.log('JupyterLab extension jupyterlab_xkcd is activated!');
        // Create a single widget
        let widget = new widgets_1.Widget();
        widget.id = 'xkcd-jupyterlab';
        widget.title.label = 'xkcd.com';
        widget.title.closable = true;
        // Add an application command
        const command = 'xkcd:open';
        app.commands.addCommand(command, {
            label: 'Random xkcd comic',
            execute: () => {
                if (!widget.isAttached) {
                    // Attach the widget to the main work area if it's not there
                    app.shell.addToMainArea(widget);
                }
                // Activate the widget
                app.shell.activateById(widget.id);
            }
        });
        // Add the command to the palette.
        palette.addItem({ command, category: 'Tutorial' });
    }
};
exports.default = extension;
