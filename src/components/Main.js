import './Main.css';

import { Button, InputGroup, Form, Table } from 'react-bootstrap';
import { useState } from 'react';

function Main() {

  const [livros, setLivros] = useState([
    {
      codigo: 1,
      titulo: 'React para leigos',
      autor: 'Andresa',
    },
    {
      codigo: 2,
      titulo: 'React para leigos',
      autor: 'Andresa',
    },
  ]);

  function cadastrar() {
    alert('ok')
  }


  return (
    <>
      <div className="container mb-5 mt-5">
        <InputGroup className='mb-3'>
          <Form.Control
            placeholder="Código"
            aria-label="Código"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className='mb-3'>
          <Form.Control
            placeholder="Titulo"
            aria-label="Titulo"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className='mb-3'>
          <Form.Control
            placeholder="Autor"
            aria-label="Autor"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Button onClick={cadastrar}>Cadastrar</Button>
      </div>
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Título</th>
              <th>Autor</th>
            </tr>
          </thead>
          <tbody>
            {/* -iniciando o laço de repetição- */}
            {
              livros.map((livro) => {
                return (
                  <tr>
                    <td>{livro.codigo}</td>
                    <td>{livro.titulo}</td>
                    <td>{livro.autor}</td>
                  </tr>
                )
              })
            }

          </tbody>
        </Table>
      </div>
    </>
  );

}

export default Main;