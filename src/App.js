import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/layout/Layout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Organisation from './components/Tasks/Organisation';
import Dashboard from './pages/Dashboard';
import { useSelector } from 'react-redux';

function App() {
    const { isLoggedIn } = useSelector(state => state.login);

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
                {isLoggedIn && (
                    <Route path="/dashboard" element={<Dashboard />} />
                )}
                {isLoggedIn && (
                    <Route path="/organisation" element={<Organisation />} />
                )}
                <Route path="*" element={<Home />} />
            </Routes>

            <ToastContainer
                style={{ fontSize: '1.8rem', fontFamily: 'inherit' }}
            />
        </Layout>
    );
}

export default App;
