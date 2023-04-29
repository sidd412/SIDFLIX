import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './searchBar';
import '../style.css'
import NoAccess from '../Auth/NoAccess';

 export default function ModalSearch({movies, isUser}) {
  const [show, setShow] = useState(false);

  return (
    <div id='moda'>
      <Button variant="primary" onClick={() => setShow(true)}>
        Search
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
         

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        { isUser ?  < SearchBar movies={movies} /> : <NoAccess/> }
        </Modal.Body>
      </Modal>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<ModalSearch/>
</>
);