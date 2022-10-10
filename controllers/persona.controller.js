import { Persona } from "../models/persona.model.js";

export const getPersons = async (req, res) => {
  try {
    const response = await Persona.findAll();
    return res.send(response);
  } catch (error) {
    console.error(error);
  }
};

export const getPersonById = async (req, res) => {
  try {
    const response = await Persona.findByPk(req.params.id);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};

export const registerPerson = async (req, res) => {
  try {
    const newPersona = await Persona.create(req.body);
    res.send(newPersona);
  } catch (error) {
    console.error(error);
  }
};

export const updatePerson = async (req, res) => {
  try {
    const response = await Persona.update(
      {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        email: req.body.email,
        edad: req.body.edad,
        altura: req.body.altura,
        peso: req.body.peso,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send("Error al modificar persona" + error)
    console.error(error);
  }
};

export const deletePerson = async (req, res) => {
  try {
    await Persona.destroy({ where: { id: req.params.id } });
    res.send("ok");
  } catch (error) {
    res.status(500).send("Error al eliminar persona" + error)
    console.error(error);
  }
};
