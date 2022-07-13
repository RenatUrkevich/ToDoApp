import React, { Fragment, useContext, useEffect } from 'react';
import Form from '../components/Form/Form';
import Loader from '../components/Loader/Loader';
import Notes from '../components/Notes/Notes';
import { FirebaseContext } from '../context/firebase/FirebaseContext';

const Home = () => {

    const {loading, notes, fetchNotes,removeNote} = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
    },[])


    return (
        <div className='container'>
            <Form/> 
            <hr/>

            {loading
                ?<Loader/>
                :<Notes notes = {notes} onRemove={removeNote}/>
            }
        </div>
    );
};

export default Home;