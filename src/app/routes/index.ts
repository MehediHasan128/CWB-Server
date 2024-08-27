import { Router } from "express";
import { AuthRouter } from "../modules/auth/auth.router";

const router = Router();

const CWBModelRouter = [
    {
        path : '/auth',
        route : AuthRouter
    }
]

CWBModelRouter.forEach((route) => router.use(route.path, route.route))

export default router;