import { Controller } from "react-hook-form";

//Components
import { Box, TextField, Typography } from "@mui/material";

//Constants
import { emailRegex } from "../../../utils/constants";

//billingFromStyles
import { billingFromStyles, styles } from "../utils";

const BillingFrom = ({ control, errors }) => {
  return (
    <Box id="BillingFrom" sx={styles.box}>
      <Box sx={billingFromStyles.from}>
        <Typography variant="h5">Billing Details</Typography>
        <Controller
          name={"firstName"}
          id={"firstName"}
          control={control}
          rules={{
            required: "firstName is required",
          }}
          render={({ field }) => (
            <TextField
              sx={billingFromStyles.inputField}
              placeholder="First name"
              label="First name"
              variant="outlined"
              error={errors.firstName}
              helperText={errors.firstName?.message}
              {...field}
            />
          )}
        />
        <Controller
          name={"lastName"}
          id={"lastName"}
          control={control}
          rules={{
            required: "lastName is required",
          }}
          render={({ field }) => (
            <TextField
              sx={billingFromStyles.inputField}
              placeholder="Last name"
              label="Last name"
              variant="outlined"
              error={errors.lastName}
              helperText={errors.lastName?.message}
              {...field}
            />
          )}
        />
        <Controller
          name={"country"}
          id={"country"}
          control={control}
          rules={{
            required: "Country is required",
          }}
          render={({ field }) => (
            <TextField
              sx={billingFromStyles.inputField}
              placeholder="Country"
              label="Country"
              variant="outlined"
              error={errors.country}
              helperText={errors.country?.message}
              {...field}
            />
          )}
        />
        <Controller
          name={"state"}
          id={"state"}
          control={control}
          rules={{
            required: "state is required",
          }}
          render={({ field }) => (
            <TextField
              sx={billingFromStyles.inputField}
              placeholder="State"
              label="State"
              variant="outlined"
              error={errors.state}
              helperText={errors.state?.message}
              {...field}
            />
          )}
        />
        <Controller
          name={"street"}
          id={"street"}
          control={control}
          rules={{
            required: "street is required",
          }}
          render={({ field }) => (
            <TextField
              sx={billingFromStyles.inputField}
              placeholder="Street"
              label="Street"
              variant="outlined"
              error={errors.street}
              helperText={errors.street?.message}
              {...field}
            />
          )}
        />{" "}
        <Controller
          name={"city"}
          id={"city"}
          control={control}
          rules={{
            required: "city is required",
          }}
          render={({ field }) => (
            <TextField
              sx={billingFromStyles.inputField}
              placeholder="city"
              label="city"
              variant="outlined"
              error={errors.city}
              helperText={errors.city?.message}
              {...field}
            />
          )}
        />{" "}
        <Controller
          name={"pincode"}
          id={"pincode"}
          control={control}
          rules={{
            required: "pincode is required",
          }}
          render={({ field }) => (
            <TextField
              sx={billingFromStyles.inputField}
              placeholder="Pincode"
              label="Pincode"
              variant="outlined"
              error={errors.pincode}
              helperText={errors.pincode?.message}
              {...field}
            />
          )}
        />
        <Controller
          name={"email"}
          id={"email"}
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: emailRegex,
              message: "Please enter a valid email",
            },
          }}
          render={({ field }) => (
            <TextField
              sx={billingFromStyles.inputField}
              placeholder="Email"
              label="Email"
              variant="outlined"
              error={errors.email}
              helperText={errors.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="phoneNo"
          id="phoneNo"
          control={control}
          rules={{
            required: "required",
            maxLength: { value: 10, message: "phoneNo should be lessthan 10" },
          }}
          render={({ field }) => (
            <TextField
              sx={billingFromStyles.inputField}
              placeholder="Phone no."
              label="Phone no."
              variant="outlined"
              error={errors.phoneNo}
              helperText={errors.phoneNo?.message}
              {...field}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default BillingFrom;
