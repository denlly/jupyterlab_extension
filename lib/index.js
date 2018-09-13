"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../style/index.css");
/**
 * Initialization data for the jupyterlab_xkcd extension.
 */
const extension = {
    id: 'jupyterlab_xkcd',
    autoStart: true,
    activate: (app) => {
        console.log('JupyterLab extension jupyterlab_xkcd is activated!');
    }
};
exports.default = extension;
