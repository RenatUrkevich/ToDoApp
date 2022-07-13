import React from 'react';
import { useContext } from 'react';
import {CSSTransition} from 'react-transition-group'
import { AlertContext } from '../../context/alert/alertContext';
import './Alert.scss'


const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    return (
        <CSSTransition
        in={alert.visible}
        timeout={750}
        classNames={'alert'}
        mountOnEnter
        unmountOnExit>
        <div className= {`alert alert-${alert.type || 'warning'} alert-dismissible `} >
            <strong>Внимание</strong> {alert.text}
            <button onClick={hide} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        </CSSTransition>
    );
};

export default Alert;