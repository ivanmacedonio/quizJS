import { Question } from "../models/Question.js";
import { data } from "./data.js";

export const questions = data.map(
  (question) =>
    new Question(question.question, question.choices, question.answer)
);
///map recorre el arreglo aplicando la funcion a cada uno
/// de los integrantes del arreglo. Toma i del arreglo y lo
///carga a una variable new question que es una instancia del modelo question
