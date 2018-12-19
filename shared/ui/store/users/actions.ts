import { CSUser } from "../../shared/api.protocol";
import { action } from "../common";
import { UsersActionsType } from "./types";

export { reset } from "../actions";

export const bootstrapUsers = (users: CSUser[]) => action(UsersActionsType.Bootstrap, users);

export const updateUser = (user: CSUser) => action(UsersActionsType.Update, user);

export const addUsers = (users: CSUser[]) => action(UsersActionsType.Add, users);
