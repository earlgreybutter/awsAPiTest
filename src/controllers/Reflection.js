import ReflectionModel from "../models/Reflection.js";

const Reflection = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} reflection object
   */
  create(req, res) {
    if (!req.body.success && !req.body.lowPoint && !req.body.takeAway) {
      return res.status(400).send({ message: "All fields are required" });
    }
    const reflection = ReflectionModel.create(req.body);
    return res.status(201).send(reflection);
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} reflections array
   */
  getAll(req, res) {
    const reflections = ReflectionModel.findAll();
    return res.status(200).send(reflections);
  },
};

export default Reflection;
