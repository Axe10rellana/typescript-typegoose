//importaciones
import {
  prop,
  getModelForClass,
  Ref,
  ReturnModelType,
  pre,
  post,
} from "@typegoose/typegoose";
import { Role } from "./Role";
import bcrypt from "bcryptjs";

@pre<User>("save", async function () {
  this.firstname = this.firstname + " algo";
  this.password = await bcrypt.hash(this.password, 10);
})
@post<User>("save", async function () {
  console.info("Usuario guardado por consola");
})
export class User {
  @prop({ required: true }) //moongose
  firstname: string; //typescript

  @prop({ required: true })
  lastname: string;

  @prop({ required: true, trim: true })
  email: string;

  @prop({ required: true, minlength: 6 })
  password: string;

  @prop({ ref: () => Role })
  roles: Ref<Role>[];

  static async findByFirstName(
    this: ReturnModelType<typeof User>,
    firstname: string
  ) {
    return this.find({ firstname });
  }

  encryptPassword(password: string) {
    return "123xyz" + password;
  }
}

const UserModel = getModelForClass(User);
export default UserModel;
