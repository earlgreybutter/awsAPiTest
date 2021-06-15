import resultData from "../ec2_describeinstances.js";

class Reflection {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.reflections = resultData;
  }

  /**
   * @returns {object} returns all reflections
   */
  findAll() {
    return resultData; // this.reflections;
  }
}
export default new Reflection();
