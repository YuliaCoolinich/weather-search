import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import ICity from '../../interfaces/ICity';
import FlagImage from '../FlagImage';

export interface ISearchInputProps {
  id: string;
  options: Array<ICity>;
  labelText: string;
  setCity: (id: number) => void;
}

interface IAutocompleteOption extends ICity {
  optionName: string;
  groupName: string;
}

const SearchInput = (props: ISearchInputProps) => {
  const { id, labelText, setCity } = props;
  const options: IAutocompleteOption[] = props.options.map((option) => {
    const groupName = option.country;
    const optionName = option.state ? `${option.name} (${option.state})` : `${option.name}`;
    return {
      optionName,
      groupName,
      ...option,
    };
  });

  options.sort((a, b) => -b.groupName.toLocaleUpperCase().localeCompare(a.groupName.toLocaleUpperCase()));

  const handleCityChange = (e: React.SyntheticEvent<Element, Event>, value: IAutocompleteOption | null): void => {
    if (value) {
      setCity(value.id);
    }
  };
  return (
    <Autocomplete
      id={id}
      options={options}
      groupBy={(option) => option.groupName}
      getOptionLabel={(option) => option.optionName}
      isOptionEqualToValue={(option, value) => value && option.id === value.id}
      sx={{ width: 400 }}
      autoHighlight
      renderInput={(params) => <TextField {...params} label={labelText} required />}
      renderOption={(props, option) => (
        <Tooltip title={`${option.coord.lat}; ${option.coord.lon}`} placement="right-start" arrow describeChild>
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props} key={option.id}>
            <FlagImage countryCode={option.country} />
            {option.optionName}
          </Box>
        </Tooltip>
      )}
      onChange={handleCityChange}
    />
  );
};

export default SearchInput;
