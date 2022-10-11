import "./Main.css";

import { Button, InputGroup, Form, Table, Dropdown } from "react-bootstrap";
import { useState } from "react";

function Main() {
  const [livros, setLivros] = useState([]);

  const [codigo, setCodigo] = useState("");
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  const [codigoPesquisa, setCodigoPesquisa] = useState("");
  const [tituloPesquisa, setTituloPesquisa] = useState("");
  const [autorPesquisa, setAutorPesquisa] = useState("");

  const [inCadastro, setInCadastro] = useState(true);

  function cadastrar() {
    const livro = {
      codigo,
      titulo,
      autor,
    };

    setLivros([livro, ...livros]);
    limparFormulario();
  }

  function limparFormulario() {
    setCodigo("");
    setAutor("");
    setTitulo("");
  }

  function pesquisar() {
    if (!codigoPesquisa) {
      alert('Digite a placa que deseja pesquisar');
    } else {
      livros.forEach((livro) => {
        if (livro.codigo === codigoPesquisa) {
          setCodigoPesquisa(livro.codigo);
          setTituloPesquisa(livro.titulo);
          setAutorPesquisa(livro.autor);
        }
      })
    }
   }

  return (
    <>
      <div className="container mb-1 mt-1">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Opções
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => { setInCadastro(true) }} href="#/action-1">Cadastrar</Dropdown.Item>
            <Dropdown.Item onClick={() => { setInCadastro(false) }} href="#/action-2">Pesquisar</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {
        inCadastro && (
          <div className="container mb-5 mt-3">
            <InputGroup className="mb-3">
              <Form.Control
                onChange={(e) => {
                  setCodigo(e.target.value);
                }}
                value={codigo}
                placeholder="Código"
                aria-label="Código"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                onChange={(e) => {
                  setTitulo(e.target.value);
                }}
                value={titulo}
                placeholder="Titulo"
                aria-label="Titulo"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-5">
              <Form.Control
                onChange={(e) => {
                  setAutor(e.target.value);
                }}
                value={autor}
                placeholder="Autor"
                aria-label="Autor"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Button onClick={cadastrar}>Cadastrar</Button>
          </div>
        )
      }

      {
        !inCadastro && (
          <div className="container mb-5 mt-3">
            <InputGroup className="mb-3">
              <Form.Control
                onChange={(e) => {
                  setCodigoPesquisa(e.target.value);
                }}
                value={codigoPesquisa}
                placeholder="Código"
                aria-label="Código"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-5">
              <Form.Control
                onChange={(e) => {
                  setAutorPesquisa(e.target.value);
                }}
                value={autorPesquisa}
                placeholder="Autor"
                aria-label="Autor"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Button onClick={pesquisar}>Pesquisar</Button>
          </div>
        )
      }

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
            {livros.map((livro) => {
              return (
                <tr>
                  <td>{livro.codigo}</td>
                  <td>{livro.titulo}</td>
                  <td>{livro.autor}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Main;