import React, { FC } from "react";

// mui
import { Box, Grid, Pagination, Typography } from "@mui/material";

type IPaginationCardProps = {
  length: number;
  start: number;
  end: number;
};

const PaginationCard: FC<IPaginationCardProps> = ({ length, start, end }) => {
  return (
    <Box>
      <Box>
        <Typography variant="body2">
          Showing {start}-{end} of {length} results
        </Typography>
      </Box>

      <Box
        sx={{
          my: 1,
          py: 1,
          display: "flex",
          justifyContent: "center",
          border: 1,
          borderColor: "grey.200",
          borderRadius: 1,
        }}
      >
        <Pagination count={length} color="primary" />
      </Box>
    </Box>
  );
};

export default PaginationCard;
