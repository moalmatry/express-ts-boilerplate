import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dtos";
import { CreateUserQueryParams } from "../types/query-params";
import { User } from "../types/response";

export const getUsers = (request: Request, response: Response) => {};

export const getUserById = (request: Request, response: Response) => {};

export const createUser = (
  request: Request<{ id: string }, {}, CreateUserDto, CreateUserQueryParams>,
  response: Response<User>
) => {
  // request.params.id
  //   request.body.email;
  request.query.loginAfterCreate;

  response.status(201).send({
    id: 1,
    email: "Mohamed",
    username: "mo",
  });
};
