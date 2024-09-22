import { Client, Account, ID } from "appwrite";
import conf from "../config";

export class Authentication {
  client = new Client();

  constructor() {
    this.client.setEndpoint(conf.appwriteURL);
    this.client.setProject(conf.appwriteProjectID);
    //Adding account  value
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      //throw error
      console.error("Error creating account: ", error);
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      //throw error
      console.error("Error logging in: ", error);
    }
  }
}
const authentication = new Authentication();

export default authentication;
