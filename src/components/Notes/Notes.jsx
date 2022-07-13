import React from 'react';
import './Notes.scss'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const Notes = ({notes,onRemove}) => (
          <TransitionGroup component='ul' class="list-group">
            {notes.map(note =>
            <CSSTransition
            key = {note.id}
            classNames={'note'}
            timeout={700}
            >
                <li 
                className="list-group-item"
                key = {note.id}
                >
                <div>
                  <strong>{note.title}</strong>
                  <small className='span'>{note.date}</small>
                </div>
                <button 
                type="button" 
                className="btn-close" 
                aria-label="Close"
                onClick={() => onRemove(note.id)}
                ></button>
                </li>
              </CSSTransition>
            )}
          </TransitionGroup>

);

export default Notes;