import { LightningElement, track } from 'lwc';
import { getWorkspaces } from '../../data/workspaceService';
export default class SessionList extends LightningElement {
    @track workspaces = [];
    connectedCallback() {
        getWorkspaces().then(result => {
            this.workspaces = result;
        });
    }
    handleCreate(event) {
        // new workspace event
    }
}
