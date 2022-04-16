//importaciones
import { modelOptions, prop } from "@typegoose/typegoose";

//esto es para especificar que en este proyecto no se necesita guardar el id
@modelOptions({
  schemaOptions: {
    timestamps: true,
    _id: false,
  },
})
export class Comment {
  @prop()
  text: string;
}
