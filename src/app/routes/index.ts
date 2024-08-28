import { Router } from "express";
import { UserRouter } from "../modules/User/user.route";
import { AuthRouter } from "../modules/auth/auth.router";
import { ServicesRouter } from "../modules/Service/service.route";

const router = Router();

const CWBModelRouter = [
    {
        path : '/auth',
        route : AuthRouter
    },
    {
        path : '/users',
        route : UserRouter
    },
    {
        path : '/services',
        route : ServicesRouter
    }
]

CWBModelRouter.forEach((route) => router.use(route.path, route.route))

export default router;