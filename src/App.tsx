import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/shared/Header';
import { Clients } from './components/Clients';
import { AdditionalPanel } from './components/AdditionalPanel';
import { useDispatch } from 'react-redux';
import { fetchAllClientsAction } from './store/sagas/sagasActions/actions/fetchAllClients';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllClientsAction());
    }, []);

    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.main}>
                <AdditionalPanel setSearch={setSearch} search={search} />
                <Clients search={search} />
                <ToastContainer toastStyle={{ fontSize: '1.4em' }} />
            </div>
        </div>
    );
}

export default App;
