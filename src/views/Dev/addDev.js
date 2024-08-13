import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import axios from "../../api/axios";

const AddDev = ({ developer, onClose, setDevelopers }) => {
  const [formState, setFormState] = useState({
    id: "",
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    description: "",
    password: "",
    username: "",
    dateNaissance: "",
  });

  useEffect(() => {
    if (developer) {
      setFormState({
        id: developer.id,
        nom: developer.nom,
        prenom: developer.prenom,
        email: developer.email,
        cvURL: developer.cvURL,
        username: developer.username,
        imageURL: developer.imageURL,
        telephone: developer.telephone,
        description: developer.description,
        dateNaissance: developer.dateNaissance,
        password: developer.password,
      });
    }
  }, [developer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.id) {
      axios
        .put(`/developers/edit/${formState.id}`, formState)
        .then((response) => {
          setDevelopers((prevState) =>
            prevState.map((dev) =>
              dev.id === formState.id ? response.data : dev
            )
          );
          onClose();
        })
        .catch((error) => {
          console.error("Error updating developer:", error);
        });
    } else {
      axios
        .post("/developers/add", formState)
        .then((response) => {
          setDevelopers((prevState) => [...prevState, response.data]);
          onClose();
        })
        .catch((error) => {
          console.error("Error adding developer:", error);
        });
    }
  };

  return (
    <Modal isOpen={true} toggle={onClose} className="modal-dialog-centered">
      <ModalHeader toggle={onClose} className="bg-primary text-white">
        {developer ? "Modifier Développeur" : "Ajouter Développeur"}
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="nom">Nom</Label>
                <Input
                  type="text"
                  name="nom"
                  id="nom"
                  value={formState.nom}
                  onChange={handleChange}
                  placeholder="Enter nom"
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="prenom">Prenom</Label>
                <Input
                  type="text"
                  name="prenom"
                  id="prenom"
                  value={formState.prenom}
                  onChange={handleChange}
                  placeholder="Enter prenom"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  value={formState.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="telephone">Telephone</Label>
                <Input
                  type="tel"
                  name="telephone"
                  id="telephone"
                  value={formState.telephone}
                  onChange={handleChange}
                  placeholder="Enter telephone"
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="dateNaissance">Date de naissance</Label>
                <Input
                  type="date"
                  name="dateNaissance"
                  id="dateNaissance"
                  value={formState.dateNaissance}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  value={formState.description}
                  onChange={handleChange}
                  placeholder="Enter description"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <ModalFooter>
            <Button color="primary" type="submit">
              {developer ? "Modifier" : "Ajouter"}
            </Button>
            <Button color="secondary" onClick={onClose}>
              Annuler
            </Button>
          </ModalFooter>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default AddDev;
