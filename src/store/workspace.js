import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const createOrganization = createAsyncThunk('type/postData', async newOrg => {
    try {
        const response = await fetch('http://localhost:5001/organization', {
            method: 'POST',
            body: JSON.stringify({
                name: newOrg.name,
                phone: newOrg.phone,
                email: newOrg.email,
                address: newOrg.address,
                adminUsername: newOrg.adminUsername,
                adminPassword: newOrg.adminPassword,
                users: newOrg.users,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error("Couldn't post the organization data!");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
});

const fetchOrganizationData = createAsyncThunk('type/getData', async () => {
    try {
        const response = await fetch('http://localhost:5001/organization');

        if (!response.ok) {
            throw new Error("Couldn't post the organization data!");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    organization: [
        {
            name: '',
            phone: null,
            email: '',
            adminUsername: '',
            adminPassword: '',
            users: [],
        },
    ],
};

export const workspaceSlice = createSlice({
    name: 'workspace',
    initialState,
    reducers: {
        // createWorkspace: (state, action) => {},
    },
    extraReducers: builder => {
        builder.addCase(createOrganization.fulfilled, (state, action) => {
            // some code here
            toast.success('Workspace successfully created!');
        });
        builder.addCase(fetchOrganizationData.fulfilled, (state, action) => {
            state.organization.push(action.payload);
        });
    },
});

export const { createWorkspace } = workspaceSlice.actions;
export { createOrganization, fetchOrganizationData };

export default workspaceSlice.reducer;
