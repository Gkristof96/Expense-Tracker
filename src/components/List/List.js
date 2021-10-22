import { FormControl, Select, Typography, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useState } from "react";
import ListItem from "./ListItem";

const List = ({ title, data }) => {
  const [sortType, setSortType] = useState("");

  return (
    <Fragment>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "20px",
          mb: "20px",
        }}
      >
        <Typography
          variant='h6'
          component='h2'
          gutterBottom
          color='textSecondary'
        >
          {title}
        </Typography>
        <FormControl variant='standard'>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            value={sortType}
            onChange={(event) => setSortType(event.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value=''>
              <em>Sort</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        {data.map((item) => (
          <ListItem key={item.id} data={item} />
        ))}
      </Box>
    </Fragment>
  );
};

export default List;