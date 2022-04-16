//importaciones
import mongoose from "mongoose";
import UserModel from "./models/User";
//import ProductModel from "./models/Product";
//import RoleModel from "./models/Role";

const connectDB = async () => {
  const db = await mongoose.connect("mongodb://localhost/typegoosedb");
  console.info(
    "se ha conectado con la base de datos ",
    db.connection.db.databaseName
  );
};
connectDB();
/*
 *
 *
 *
 */
const executeQuery = async () => {
  //crear usuario
  /* const user = new UserModel({
    firstname: "Joe",
    lastname: "Doe",
    email: "joedoe@gmail.com",
    password: "123456",
  });

  await user.save();
  console.info(user); */
  //buscar todos los usuarios
  /* const users = await UserModel.find({}, { firstname: 1, _id: 0 });
  console.info(users); */
  //buscar un usuario por id
  /* const user = await UserModel.findById("6259cc847b3efd0fb336842d", {
    firstname: 1,
    _id: 0,
  });
  console.info(user); */
  //buscar y actualizar un usuario
  /* const userUpdate = await UserModel.findOneAndUpdate(
    { _id: "6259cc847b3efd0fb336842d" },
    { firstname: "ryan" },
    { new: true }
  );
  console.info(userUpdate);
  const userUpdateById = await UserModel.findByIdAndUpdate(
    "6259cc847b3efd0fb336842d",
    { firstname: "ryan" },
    { new: true }
  );
  console.info(userUpdateById); */
  //borrar un usuario
  /* const userDeleteById = await UserModel.findByIdAndDelete(
    "6259cc847b3efd0fb336842d"
  );
  const userDelete = await UserModel.findOneAndDelete({
    email: "joedoe@gmail.com",
  }); */
  //borrar todos los usuarios
  /* const usersDelete = await UserModel.deleteMany({ email: "joedoe@gmail.com" });
  console.info(usersDelete); */
  //crear un producto
  /* const product = await ProductModel.create({
    name: "laptop",
    price: 3000,
    url: "product-01",
    tags: ["laptop", "gaming", "razer"],
    comments: [
      {
        text: "awesome product",
      },
      {
        text: "niceeee :v",
      },
      {
        text: "yoooooooo",
      },
    ],
    owner: "6259ddbde800ee24f3757a08",
  });

  console.info(product); */

  //buscar producto que contenga owner
  /* const product = await ProductModel.findById(
    "6259ecbec1b267cc326fc03d"
  ).populate("owner");
  console.info(product); */

  //crear roles
  /* const role = await RoleModel.insertMany([
    { name: "admin" },
    { name: "guest" },
    { name: "user" },
  ]);
  console.info(role); */

  //crear usuario que contenga roles
  /* const newUser = new UserModel({
    firstname: "ryan",
    lastname: "ray",
    email: "ryan@gmail.com",
    password: "1234567",
    roles: ["6259f02434a79b2c5fd93de8", "6259f02534a79b2c5fd93dea"],
  });
  await newUser.save();
  console.info(newUser); */

  //buscar usuario por id que contenga el atributo name de los roles sin el id
  /* const user = await UserModel.findById("6259f3ccc81b261f8ef297c5").populate(
    "roles",
    "name -_id"
  );
  console.info(user); */

  //metodo sin instanciar
  /* const result = await UserModel.findByFirstName("ryan");
  console.info(result); */

  //metodo instanciado
  /* const result = await UserModel.find({ name: "ryan" });
  console.info(result); */

  //crear un usuario con contraseña encryptada metodo instanciado
  const user = new UserModel({
    firstname: "john",
    lastname: "ray",
    email: "john@gmail.com",
  });
  user.password = user.encryptPassword("123456");
  await user.save();
  console.info(user);
};
executeQuery();
