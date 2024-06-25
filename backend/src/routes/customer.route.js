import { Router } from "express";
import { newCustomer ,allCustomers , pushToCRM } from "../controllers/customer.controller.js";

const router = Router()

router.route("/new").post(newCustomer);
router.route('/all').get(allCustomers);
router.route('/push-to-CRM').post(pushToCRM);


export default router;