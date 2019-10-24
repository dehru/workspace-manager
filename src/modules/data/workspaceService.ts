const URL = './resources/workspaces.json';
let workspaces = [];
export const getWorkspaces = () =>
    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('No response from server');
            }
            return response.json();
        })
        .then(result => {
            workspaces = result.data;
            return workspaces;
        });
