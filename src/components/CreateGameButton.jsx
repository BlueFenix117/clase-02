import React from 'react'
import Modal from 'react-modal'

const modalStyles = {
  content: {
    width: '500px',
    height: '300px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
  }
}

export const CreateGameButton = (props) => {
  
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [newGame, setNewGame] = React.useState('');

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <React.Fragment>

    <button 
    className='CreateGameButton'
    onClick={openModal}
    
    >+</button>
    <Modal
    
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={modalStyles}
    ariaHideApp={false}
    >
      <div className='d-flex flex-column justify-content-between h-100'>
        <div className='modal-title'>
          <h2>Agregar Juegos</h2>
        </div>

        <div className='modal-content d-flex justify-content-between pt-2'>
          <div className='modal-item'>
            <label>Nombre del Juego: </label>
            <input className='form-control' type='text' placeholder='Minecraft'
            
            onChange={(event) => {
              setNewGame(event.target.value)
            }}
            
            ></input>
              
            </div>

            <div className='modal-item d-flex justify-content-end align-items-end'>
                <button className='modal-btn btn btn-danger'onClick={closeModal}>Cancelar</button>
                <button className='modal-btn btn btn-primary'
                  onClick={() => {
                    props.setInsertedGame(newGame);
                    closeModal();
                  }}
                
                >Guardar</button>
            </div>
          
        </div>
      </div>

      

    </Modal>
    </React.Fragment>
  )
}

export default CreateGameButton
