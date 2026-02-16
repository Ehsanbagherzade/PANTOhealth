import { toast } from "react-toastify";
import {
  ErrorOutline as ErrorOutlineIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
} from "@mui/icons-material";

export const errorToast = (message: string) => {
  toast.error(message, {
    icon: (
      <ErrorOutlineIcon
        sx={{
          width: "24px",
          height: "24px",
          color: "#ffffff",
        }}
      />
    ),
  });
};

export const successToast = (message: string) => {
  toast.success(message, {
    icon: (
      <CheckCircleOutlineIcon
        sx={{
          width: "24px",
          height: "24px",
          color: "#ffffff",
        }}
      />
    ),
  });
};

export const infoToast = (message: string) => {
  toast.info(message);
};

export const warningToast = (message: string) => {
  toast.warning(message);
};
