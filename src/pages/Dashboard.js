import styled from 'styled-components';
import UserTasks from '../components/Tasks/UserTasks';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrganizationData } from '../store/workspace';

const Title = styled.h2`
    font-size: 2rem;
    margin: 1.5rem 2rem;
    padding-bottom: 0.5rem;
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    border-bottom: 1px solid #cecece;
`;

const TaskContainer = styled.div`
    margin-left: auto;
    flex-grow: 1;
    background-color: #f7f2f2;
    border-radius: 1.5rem;
    padding: 2rem;
    padding-top: 0;
`;

const OrgContainer = styled.div`
    width: 40rem;
    height: 50rem;
    background-color: #f7f2f2;
    border-radius: 1rem;
    text-align: center;
    margin-right: auto;
`;

const MainContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    /* align-items: flex-start; */
    justify-content: space-between;
    gap: 4rem;
    width: 100%;
`;

const Button = styled.button`
    padding: 0.6rem 0.8rem;
    margin-top: 2rem;
    font-size: 1.6rem;
    font-family: inherit;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    background-color: #090c9b;
    color: #fdfdfd;
    width: 15rem;
    cursor: pointer;
`;

const OrgProfile = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: left;
`;

const ProfileList = styled.div``;

const ProfileItem = styled.div``;

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const organization = useSelector(state => state.organization);

    const [org, setOrg] = useState([]);
    useEffect(() => {
        dispatch(fetchOrganizationData());
        console.log(organization);
    }, [organization]);

    return (
        <MainContainer>
            <TaskContainer>
                <UserTasks />
            </TaskContainer>
            <OrgContainer>
                <Title>Your Organization's Profile</Title>
                <OrgProfile>
                    <ProfileList>
                        <ProfileItem></ProfileItem>
                    </ProfileList>
                    <Button>Add User</Button>
                </OrgProfile>
            </OrgContainer>
        </MainContainer>
    );
};

export default AdminDashboard;
