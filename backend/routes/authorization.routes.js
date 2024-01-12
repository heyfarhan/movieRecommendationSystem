import express, { Router } from "express";
import userLogin from "../controllers/userLogin.controller.js";
import userSignUp from "../controllers/userSignUp.controller.js";

const router = Router()

router.route('/userLogin/')
    .post(userLogin)
    .get((req, res) => res.status(200).send('hi'))
router.route('/userSignUp/')
    .post(userSignUp)
    .get((req, res) => res.status(200).send('hi'))


export default router