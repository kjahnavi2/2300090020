import { Button, Stack } from "@mui/material";

interface Props {
  selected: string;
  onChange: (value: string) => void;
}

function FilterBar({ selected, onChange }: Props) {
  const filters = [
    "All",
    "Placement",
    "Result",
    "Event",
  ];

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ mb: 3 }}
    >
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={
            selected === filter
              ? "contained"
              : "outlined"
          }
          onClick={() => onChange(filter)}
        >
          {filter}
        </Button>
      ))}
    </Stack>
  );
}

export default FilterBar;