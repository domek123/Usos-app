import { useFetchYears } from "@/hooks";
import {
  FormControl,
  Autocomplete,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import type { YearSelectProps } from "./YearSelect.types";
import type { Year } from "@/types";

export const YearSelect = ({
  value,
  setYears,
  multiple = true,
  width = "180px",
}: YearSelectProps) => {
  const { t } = useTranslation();
  const { years } = useFetchYears() as { years: Year[] };
  const options = years;

  const selectedOptions =
    options.find((yearObj) => yearObj.year === (value as number)) || null;

  const handleYearChangeAutocomplete = (_e, newValue: Year | null) => {
    setYears(newValue ? newValue.year : undefined);
  };

  const handleYearChangeSelect = (e) => {
    const newValue = e.target.value;
    setYears(newValue as number[]);
  };

  if (multiple) {
    return (
      <FormControl size="small" sx={{ width }}>
        <InputLabel id="year-select-label">{t("common.year")}</InputLabel>
        <Select
          value={(value as number[]) || []}
          multiple={true}
          labelId="year-select-label"
          label={t("common.year")}
          renderValue={(selected) => (selected as number[]).join(", ")}
          onChange={handleYearChangeSelect}
        >
          {years.map((year) => (
            <MenuItem key={year.year} value={year.year}>
              <Checkbox
                checked={((value as number[]) || []).includes(year.year)}
              />
              <ListItemText primary={year.year} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  return (
    <FormControl size="small" sx={{ width }}>
      <Autocomplete
        multiple={false}
        size="small"
        options={options}
        value={selectedOptions}
        getOptionLabel={(option) => String(option.year)}
        isOptionEqualToValue={(option, val) => option.year === val.year}
        onChange={handleYearChangeAutocomplete}
        renderInput={(params) => (
          <TextField {...params} label={t("common.year")} variant="outlined" />
        )}
      />
    </FormControl>
  );
};
