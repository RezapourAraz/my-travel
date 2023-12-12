import React, { FC } from "react";

// mui
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Rating,
  Typography,
} from "@mui/material";

// icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type IBookingProps = {
  title: string;
  options: any[];
};

const BookingAccordion: FC<IBookingProps> = ({ title, options }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {options.map((option: any) => (
          <Box display="flex" alignItems="center">
            <Checkbox />
            {title !== "Star Rating" ? (
              <Typography variant="body2">{option.name}</Typography>
            ) : (
              <Rating name="read-only" value={option.id} />
            )}
          </Box>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default BookingAccordion;
