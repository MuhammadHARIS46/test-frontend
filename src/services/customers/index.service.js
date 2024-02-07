/* eslint-disable no-useless-constructor */
import axios from "axios";
import { localUrl } from "../../config";
export class CustomerService {
  constructor() {}

  async createCustomer(data) {
    try {
      const response = await axios.post(`${localUrl}register`, data);
      return response;
    } catch (err) {
      return err;
    }
  }
  async getAllCustomers(sortBy, sortOrder) {
    try {
      const response = await axios.get(
        `${localUrl}get-all?sortBy=${sortBy}&sortOrder=${sortOrder}`
      );
      return response;
    } catch (err) {
      return err;
    }
  }
  async deleteCustomer(id) {
    try {
      const response = await axios.delete(`${localUrl}delete/${id}`);
      return response;
    } catch (err) {
      return err;
    }
  }
  async updateCustomer(id, data) {
    try {
      const response = await axios.put(`${localUrl}update/${id}`, data);
      return response;
    } catch (err) {
      return err;
    }
  }
  async getUserById(id) {
    try {
      const response = await axios.get(`${localUrl}user/${id}`);
      return response;
    } catch (err) {
      return err;
    }
  }
}
