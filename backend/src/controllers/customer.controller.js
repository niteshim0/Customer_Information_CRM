import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Customer } from "../models/customer.model.js";
import { hubSpotClient } from "../utils/hubSpotClient.js";

const newCustomer = asyncHandler(async (req, res, next) => {
  const { phoneNumber, firstName, lastName, email, address, organization } = req.body;

  if (!phoneNumber || !firstName || !lastName || !email || !address || !organization) {
    throw new ApiError(400, "All fields are required");
  }

  try {
    const customer = await Customer.create({
      phoneNumber,
      firstName,
      lastName,
      email,
      address,
      organization,
    });

    res.status(201).json(new ApiResponse(201, customer, "Customer created successfully"));
  } catch (error) {
    next(error);
  }
});

const allCustomers = asyncHandler(async (req, res, next) => {
  try {
    const customers = await Customer.find();
    res.json(new ApiResponse(200, customers, "Customers fetched successfully"));
  } catch (error) {
    next(error);
  }
});


const pushToCRM = asyncHandler(async (req, res, next) => {
  try {
    const { firstName, lastName, email, phoneNumber, address, organization } = req.body;

    const response = await hubSpotClient.post('/', {
      properties: {
        firstname: firstName,
        lastname: lastName,
        email: email,
        phoneNumber: phoneNumber,
        street: address.street,
        city: address.city,
        state: address.state,
        zip: address.zipCode,
        organization: organization,
      },
    });

    console.log(response);

    res.status(200).json(new ApiResponse(200, response.data, "Customer pushed to CRM successfully"));
  } catch (error) {
    next(error);
  }
});



export { newCustomer , allCustomers ,pushToCRM};
