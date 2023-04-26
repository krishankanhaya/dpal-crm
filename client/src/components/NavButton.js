import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../App.css";
import { Link } from "react-router-dom";

export default function NavButton(props) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              border: 0,
            },
            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: 0,
              },
          }}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          style={{
            color: "white",
            height: "2rem",
            width: 'fit-content',
            padding: "0",
            border: "none",
          }}
          // style={{}}
        >
          <MenuItem value="">
            <em>{props.name}</em>
          </MenuItem>
          {props.value.map((item) => (
            <MenuItem style={{ fontFamily: "italic" }} value={item}>
              <Link
                style={{ textDecoration: "none", color: 'Black' }}
                to={`/${item}`}
              >
                {item}
              </Link>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
