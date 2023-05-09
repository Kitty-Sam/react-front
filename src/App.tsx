import React, { useEffect } from 'react';
import styles from './App.module.css';
import { Header } from './components/shared/Header';
import { Clients } from './components/Clients';
import { AdditionalPanel } from './components/AdditionalPanel';
import { useDispatch } from 'react-redux';
import { fetchAllClientsAction } from './store/sagas/sagasActions/actions/fetchAllClients';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllClientsAction());
    }, []);

    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.main}>
                <AdditionalPanel />
                <Clients />
            </div>
        </div>
    );
}

export default App;
