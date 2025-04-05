import { Skeleton } from "@mui/material";

const OurFeatureSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      animation="wave"
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "12px",
      }}
    />
  );
};

export default OurFeatureSkeleton;
